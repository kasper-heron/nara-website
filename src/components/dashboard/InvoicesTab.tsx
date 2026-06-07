import { useState } from "react";
import { mockInvoices } from "@/lib/mockData";
import { formatAmount, formatDate } from "@/lib/formatters";
import { ExternalLink, Search } from "lucide-react";

const statusLabels: Record<string, { label: string; dotColor: string }> = {
  processed: { label: "Behandlet", dotColor: "#34C759" },
  needs_review: { label: "Til gjennomgang", dotColor: "#FF9500" },
  duplicate: { label: "Duplikat", dotColor: "#8E8E93" },
};

const InvoicesTab = () => {
  const [year, setYear] = useState("2025");
  const [month, setMonth] = useState("alle");
  const [status, setStatus] = useState("alle");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 25;

  const filtered = mockInvoices.filter((inv) => {
    if (year !== "alle" && !inv.invoice_date.startsWith(year)) return false;
    if (month !== "alle") {
      const m = new Date(inv.invoice_date).getMonth() + 1;
      if (m !== parseInt(month)) return false;
    }
    if (status !== "alle" && inv.status !== status) return false;
    if (search && !inv.supplier_customer.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const selectStyle: React.CSSProperties = {
    border: "1px solid #E8E8ED",
    borderRadius: 10,
    padding: "7px 12px",
    fontSize: 13,
    color: "#1D1D1F",
    background: "#FFFFFF",
    outline: "none",
  };

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white">
      <div className="px-6 md:px-10 py-8" style={{ borderBottom: "1px solid #F0F0F2" }}>
        <h2 className="text-[22px] font-bold tracking-tight mb-5" style={{ color: "#1D1D1F" }}>Bilag</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <select value={year} onChange={(e) => { setYear(e.target.value); setPage(1); }} style={selectStyle}>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="alle">Alle år</option>
          </select>
          <select value={month} onChange={(e) => { setMonth(e.target.value); setPage(1); }} style={selectStyle}>
            <option value="alle">Alle måneder</option>
            {["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"].map((m, i) => (
              <option key={i} value={String(i + 1)}>{m}</option>
            ))}
          </select>
          <select value={status} onChange={(e) => { setStatus(e.target.value); setPage(1); }} style={selectStyle}>
            <option value="alle">Alle statuser</option>
            <option value="processed">Behandlet</option>
            <option value="needs_review">Trenger gjennomgang</option>
          </select>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5" style={{ color: "#8E8E93" }} />
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(1); }}
              placeholder="Søk leverandør..."
              style={{ ...selectStyle, paddingLeft: 32, width: 200 }}
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-[13px]">
          <thead className="sticky top-0 bg-white" style={{ borderBottom: "1px solid #F0F0F2" }}>
            <tr>
              <th className="text-left px-6 md:px-10 py-3 font-medium text-[11px] uppercase tracking-wider" style={{ color: "#8E8E93" }}>Dato</th>
              <th className="text-left px-3 py-3 font-medium text-[11px] uppercase tracking-wider" style={{ color: "#8E8E93" }}>Leverandør</th>
              <th className="text-left px-3 py-3 font-medium text-[11px] uppercase tracking-wider hidden md:table-cell" style={{ color: "#8E8E93" }}>Fakturanr.</th>
              <th className="text-left px-3 py-3 font-medium text-[11px] uppercase tracking-wider hidden lg:table-cell" style={{ color: "#8E8E93" }}>Kategori</th>
              <th className="text-right px-3 py-3 font-medium text-[11px] uppercase tracking-wider" style={{ color: "#8E8E93" }}>Beløp</th>
              <th className="text-left px-3 py-3 font-medium text-[11px] uppercase tracking-wider" style={{ color: "#8E8E93" }}>Status</th>
              <th className="px-6 md:px-10 py-3 w-10" />
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-16" style={{ color: "#8E8E93" }}>
                  Ingen bilag funnet for valgte filtre
                </td>
              </tr>
            ) : (
              paginated.map((inv, i) => {
                const st = statusLabels[inv.status];
                return (
                  <tr key={i} className="transition-colors hover:bg-[#FAFAFA]" style={{ borderBottom: "1px solid #F5F5F7" }}>
                    <td className="px-6 md:px-10 py-3.5" style={{ color: "#8E8E93" }}>{formatDate(inv.invoice_date)}</td>
                    <td className="px-3 py-3.5 font-medium" style={{ color: "#1D1D1F" }}>{inv.supplier_customer}</td>
                    <td className="px-3 py-3.5 hidden md:table-cell" style={{ color: "#8E8E93" }}>{inv.invoice_no}</td>
                    <td className="px-3 py-3.5 hidden lg:table-cell" style={{ color: "#8E8E93" }}>{inv.category}</td>
                    <td className="px-3 py-3.5 text-right tabular-nums font-medium" style={{ color: "#1D1D1F" }}>{formatAmount(inv.amount)}</td>
                    <td className="px-3 py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: st?.dotColor }} />
                        <span style={{ color: "#6E6E73" }}>{st?.label}</span>
                      </span>
                    </td>
                    <td className="px-6 md:px-10 py-3.5">
                      {inv.pdf_link && (
                        <a href={inv.pdf_link} style={{ color: "#8E8E93" }} className="hover:opacity-70">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="px-6 md:px-10 py-3 flex items-center justify-between text-[13px]" style={{ borderTop: "1px solid #F0F0F2" }}>
          <span style={{ color: "#8E8E93" }}>{filtered.length} bilag</span>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className="w-7 h-7 rounded-lg text-[12px] font-medium"
                style={{
                  background: page === i + 1 ? "#F0F0F2" : "transparent",
                  color: page === i + 1 ? "#1D1D1F" : "#8E8E93",
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicesTab;
