import { useAuth, type UserRole } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Home, FileText, BarChart3, MessageSquare, Settings, LogOut } from "lucide-react";
import type { TabKey } from "@/pages/Dashboard";

const allNavItems: { key: TabKey; label: string; icon: React.ElementType; roles: UserRole[] }[] = [
  { key: "status", label: "Status", icon: Home, roles: ["eier", "regnskapsforer"] },
  { key: "invoices", label: "Bilag", icon: FileText, roles: ["eier", "regnskapsforer"] },
  { key: "overview", label: "Oversikt", icon: BarChart3, roles: ["eier", "regnskapsforer"] },
  { key: "assistant", label: "Assistent", icon: MessageSquare, roles: ["eier"] },
  { key: "settings", label: "Innstillinger", icon: Settings, roles: ["eier"] },
];

interface Props {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
}

const DashboardSidebar = ({ activeTab, onTabChange }: Props) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const role: UserRole = user?.role || "eier";
  const navItems = allNavItems.filter((item) => item.roles.includes(role));

  const handleLogout = async () => {
    await logout();
    navigate("/logg-inn");
  };

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-[220px] flex-col h-screen shrink-0" style={{ background: "#F5F5F7" }}>
        {/* Logo */}
        <div className="px-5 pt-6 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg flex flex-col items-start justify-center gap-[2.5px] p-1.5" style={{ background: "#1D1D1F" }}>
              <div className="h-[2.5px] w-[55%] rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
              <div className="h-[2.5px] w-full rounded-full" style={{ background: "linear-gradient(90deg, #0071E3, #5AC8FA)" }} />
              <div className="h-[2.5px] w-[40%] rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            </div>
            <span className="text-[17px] font-black tracking-[-0.5px]" style={{ color: "#1D1D1F" }}>NARA</span>
          </div>
          {role === "regnskapsforer" && (
            <span
              className="inline-block mt-3 text-[10px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5"
              style={{ background: "#E8E8ED", color: "#6E6E73" }}
            >
              Regnskapsfører
            </span>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 mt-2 space-y-0.5">
          {navItems.filter(i => i.key !== "settings").map((item) => {
            const active = activeTab === item.key;
            return (
              <button
                key={item.key}
                onClick={() => onTabChange(item.key)}
                className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors"
                style={{
                  background: active ? "#FFFFFF" : "transparent",
                  color: active ? "#0071E3" : "#6E6E73",
                  boxShadow: active ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                }}
              >
                <item.icon className="h-[18px] w-[18px] shrink-0" strokeWidth={active ? 2.2 : 1.8} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="px-3 pb-5 space-y-0.5">
          {navItems.find(i => i.key === "settings") && (
            <button
              onClick={() => onTabChange("settings")}
              className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors"
              style={{
                background: activeTab === "settings" ? "#FFFFFF" : "transparent",
                color: activeTab === "settings" ? "#0071E3" : "#6E6E73",
                boxShadow: activeTab === "settings" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              <Settings className="h-[18px] w-[18px] shrink-0" strokeWidth={activeTab === "settings" ? 2.2 : 1.8} />
              Innstillinger
            </button>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-medium transition-colors"
            style={{ color: "#6E6E73" }}
          >
            <LogOut className="h-[18px] w-[18px] shrink-0" strokeWidth={1.8} />
            Logg ut
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex bg-white" style={{ borderTop: "1px solid #E8E8ED" }}>
        {navItems.filter(i => i.key !== "settings").map((item) => {
          const active = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => onTabChange(item.key)}
              className="flex-1 flex flex-col items-center gap-1 py-3 text-[10px] font-medium transition-colors"
              style={{ color: active ? "#0071E3" : "#8E8E93" }}
            >
              <item.icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.2 : 1.8} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
};

export default DashboardSidebar;
