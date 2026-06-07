import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Copy, Check } from "lucide-react";

const SettingsTab = () => {
  const { user } = useAuth();
  const [notifyProcessed, setNotifyProcessed] = useState(true);
  const [notifyReview, setNotifyReview] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const intakeEmails = [`${user?.id?.slice(0, 8)}@innboks.nara.no`, `faktura@bergtransport.no`];

  const copyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const Toggle = ({ on, onToggle }: { on: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className="relative w-[42px] h-[26px] rounded-full transition-colors"
      style={{ background: on ? "#0071E3" : "#D1D1D6" }}
    >
      <span
        className="absolute top-[3px] left-[3px] w-5 h-5 rounded-full bg-white transition-transform"
        style={{ transform: on ? "translateX(16px)" : "translateX(0)" }}
      />
    </button>
  );

  return (
    <div className="h-full overflow-y-auto bg-white">
      <div className="max-w-2xl mx-auto px-6 md:px-10 py-10">
        <h2 className="text-[22px] font-bold tracking-tight mb-8" style={{ color: "#1D1D1F" }}>Innstillinger</h2>

        {/* Intake emails */}
        <section className="mb-10">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#8E8E93" }}>
            Innboks e-poster
          </h3>
          <p className="text-[13px] mb-4" style={{ color: "#8E8E93" }}>
            E-poster sendt til disse adressene prosesseres automatisk
          </p>
          <div className="space-y-2">
            {intakeEmails.map((email) => (
              <div
                key={email}
                className="flex items-center gap-2 rounded-xl px-4 py-3"
                style={{ border: "1px solid #F0F0F2", background: "#FAFAFA" }}
              >
                <span className="text-[13px] flex-1 font-mono" style={{ color: "#1D1D1F" }}>{email}</span>
                <button onClick={() => copyEmail(email)} className="hover:opacity-70" style={{ color: "#8E8E93" }}>
                  {copiedEmail === email ? <Check className="h-3.5 w-3.5" style={{ color: "#34C759" }} /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            ))}
          </div>
          <button className="mt-3 text-[13px] font-medium hover:opacity-80" style={{ color: "#0071E3" }}>
            + Legg til e-post
          </button>
        </section>

        {/* Notifications */}
        <section className="mb-10">
          <h3 className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: "#8E8E93" }}>
            Varsler
          </h3>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-[14px]" style={{ color: "#1D1D1F" }}>Ny faktura er prosessert</span>
              <Toggle on={notifyProcessed} onToggle={() => setNotifyProcessed(!notifyProcessed)} />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[14px]" style={{ color: "#1D1D1F" }}>Faktura trenger gjennomgang</span>
              <Toggle on={notifyReview} onToggle={() => setNotifyReview(!notifyReview)} />
            </div>
          </div>
        </section>

        {/* Account */}
        <section>
          <h3 className="text-[13px] font-semibold uppercase tracking-wider mb-5" style={{ color: "#8E8E93" }}>
            Min konto
          </h3>
          <div className="space-y-3">
            {[
              { label: "E-post", value: user?.email },
            ].map((row) => (
              <div key={row.label} className="flex justify-between text-[14px]">
                <span style={{ color: "#8E8E93" }}>{row.label}</span>
                <span style={{ color: "#1D1D1F" }}>{row.value}</span>
              </div>
            ))}
          </div>
          <button
            className="mt-5 rounded-xl px-4 py-2.5 text-[13px] font-medium transition-colors hover:bg-[#F5F5F7]"
            style={{ border: "1px solid #E8E8ED", color: "#1D1D1F" }}
          >
            Endre passord
          </button>
        </section>
      </div>
    </div>
  );
};

export default SettingsTab;
