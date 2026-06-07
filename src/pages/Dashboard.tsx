import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatusTab from "@/components/dashboard/StatusTab";
import AssistantTab from "@/components/dashboard/AssistantTab";
import InvoicesTab from "@/components/dashboard/InvoicesTab";
import OverviewTab from "@/components/dashboard/OverviewTab";
import SettingsTab from "@/components/dashboard/SettingsTab";

export type TabKey = "status" | "invoices" | "overview" | "assistant" | "settings";

const Dashboard = () => {
  const { isAuthenticated } = useAuth();
  const [activeTab, setActiveTab] = useState<TabKey>("status");

  // Dev bypass: skip auth redirect for building/testing
  // if (!isAuthenticated) return <Navigate to="/login" replace />;

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-hidden bg-white">
        {activeTab === "status" && <StatusTab onNavigate={setActiveTab} />}
        {activeTab === "invoices" && <InvoicesTab />}
        {activeTab === "overview" && <OverviewTab />}
        {activeTab === "assistant" && <AssistantTab />}
        {activeTab === "settings" && <SettingsTab />}
      </main>
    </div>
  );
};

export default Dashboard;
