import { mockSummary } from "@/lib/mockData";
import { formatAmount } from "@/lib/formatters";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const CHART_COLORS = ["#0071E3", "#5AC8FA", "#34C759", "#FF9500", "#FF3B30", "#AF52DE"];

const cards = [
  { label: "Totalt innbetalt", value: formatAmount(mockSummary.total_paid) },
  { label: "Til gjennomgang", value: String(mockSummary.needs_review), warn: true },
  { label: "Denne måneden", value: formatAmount(mockSummary.this_month) },
  { label: "Leverandører", value: String(mockSummary.unique_suppliers) },
];

const OverviewTab = () => {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10">
        <h2 className="text-[22px] font-bold tracking-tight mb-8" style={{ color: "#1D1D1F" }}>Oversikt</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {cards.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl p-5"
              style={{
                background: "#FFFFFF",
                border: "1px solid #F0F0F2",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
              }}
            >
              <p className="text-[11px] font-medium uppercase tracking-wider mb-1.5" style={{ color: "#8E8E93" }}>
                {card.label}
              </p>
              <p
                className="text-[22px] font-bold tabular-nums tracking-tight"
                style={{ color: card.warn ? "#FF9500" : "#1D1D1F" }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly spend */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid #F0F0F2",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
            }}
          >
            <h3 className="text-[13px] font-semibold mb-5" style={{ color: "#1D1D1F" }}>
              Månedlige kostnader 2025
            </h3>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={mockSummary.monthly_spend}>
                <XAxis dataKey="month" tick={{ fill: "#8E8E93", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#8E8E93", fontSize: 11 }} axisLine={false} tickLine={false} width={48} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #F0F0F2", borderRadius: 12, fontSize: 12, color: "#1D1D1F", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                  formatter={(value: number) => [formatAmount(value), "Beløp"]}
                />
                <Bar dataKey="amount" fill="#0071E3" fillOpacity={0.9} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Category breakdown */}
          <div
            className="rounded-2xl p-6"
            style={{
              background: "#FFFFFF",
              border: "1px solid #F0F0F2",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
            }}
          >
            <h3 className="text-[13px] font-semibold mb-5" style={{ color: "#1D1D1F" }}>
              Kostnader per kategori
            </h3>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width={170} height={170}>
                <PieChart>
                  <Pie
                    data={mockSummary.category_spend}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    innerRadius={48}
                    outerRadius={76}
                    strokeWidth={0}
                  >
                    {mockSummary.category_spend.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #F0F0F2", borderRadius: 12, fontSize: 12, color: "#1D1D1F", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                    formatter={(value: number) => [formatAmount(value), ""]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3 flex-1">
                {mockSummary.category_spend.map((cat, i) => (
                  <div key={cat.category} className="flex items-center justify-between text-[12px]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: CHART_COLORS[i % CHART_COLORS.length] }} />
                      <span style={{ color: "#6E6E73" }}>{cat.category}</span>
                    </div>
                    <span className="font-medium tabular-nums" style={{ color: "#1D1D1F" }}>{formatAmount(cat.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
