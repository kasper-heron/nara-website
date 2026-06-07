import { mockInvoices } from "@/lib/mockData";
import { formatAmount, formatDate } from "@/lib/formatters";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { TabKey } from "@/pages/Dashboard";

interface Props {
  onNavigate: (tab: TabKey) => void;
}

const statusLabels: Record<string, { label: string; dotColor: string }> = {
  processed: { label: "Behandlet", dotColor: "#34C759" },
  needs_review: { label: "Gjennomgang", dotColor: "#FF9500" },
};

const StatusTab = ({ onNavigate }: Props) => {
  const needsReview = 2 as number;
  const processedThisMonth = 12;
  const dueSoon = 14500;
  const recentInvoices = mockInvoices.slice(0, 5);
  const allGood = needsReview === 0;

  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-10">
        {/* Status banner */}
        <div
          className="rounded-2xl px-6 py-5 mb-10 flex items-center justify-between"
          style={{
            background: allGood ? "#F0FFF4" : "#FFFBEB",
            border: allGood ? "1px solid #D1FAE5" : "1px solid #FEF3C7",
          }}
        >
          <div className="flex items-center gap-3">
            {allGood ? (
              <CheckCircle2 className="h-5 w-5" style={{ color: "#16A34A" }} />
            ) : (
              <AlertCircle className="h-5 w-5" style={{ color: "#F59E0B" }} />
            )}
            <span
              className="text-[15px] font-semibold"
              style={{ color: allGood ? "#16A34A" : "#B45309" }}
            >
              {allGood
                ? "Alt er i orden"
                : `${needsReview} bilag trenger gjennomgang`}
            </span>
          </div>
          {!allGood && (
            <button
              onClick={() => onNavigate("invoices")}
              className="flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-80"
              style={{ color: "#0071E3" }}
            >
              Se bilag
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          )}
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Behandlet denne måneden", value: String(processedThisMonth) },
            { label: "Til gjennomgang", value: String(needsReview), warn: needsReview > 0 },
            { label: "Forfaller neste 30 dager", value: formatAmount(dueSoon) },
          ].map((card) => (
            <div
              key={card.label}
              className="rounded-2xl p-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #F0F0F2",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
              }}
            >
              <p className="text-[12px] font-medium uppercase tracking-wider mb-2" style={{ color: "#8E8E93" }}>
                {card.label}
              </p>
              <p
                className="text-[28px] font-bold tracking-tight"
                style={{ color: card.warn ? "#F59E0B" : "#1D1D1F" }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Recent invoices */}
        <div>
          <h3 className="text-[13px] font-semibold uppercase tracking-wider mb-4" style={{ color: "#8E8E93" }}>
            Siste bilag
          </h3>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid #F0F0F2",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
            }}
          >
            {recentInvoices.map((inv, i) => {
              const st = statusLabels[inv.status];
              return (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-4"
                  style={{
                    background: "#FFFFFF",
                    borderBottom: i < recentInvoices.length - 1 ? "1px solid #F5F5F7" : "none",
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-medium truncate" style={{ color: "#1D1D1F" }}>
                      {inv.supplier_customer}
                    </p>
                    <p className="text-[12px] mt-0.5" style={{ color: "#8E8E93" }}>
                      {formatDate(inv.invoice_date)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="text-[14px] font-semibold tabular-nums" style={{ color: "#1D1D1F" }}>
                      {formatAmount(inv.amount)}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] font-medium">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: st?.dotColor }}
                      />
                      <span style={{ color: "#6E6E73" }}>{st?.label}</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTab;
