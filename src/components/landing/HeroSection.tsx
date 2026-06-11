import { CheckCircle } from "lucide-react";

const invoices = [
  { vendor: "Telenor AS", amount: "2 400 kr", category: "Telekommunikasjon", status: "Bokført" },
  { vendor: "Norwegian Air", amount: "4 870 kr", category: "Reise", status: "Bokført" },
  { vendor: "Circle K", amount: "1 230 kr", category: "Drivstoff", status: "Bokført" },
  { vendor: "Google Ads", amount: "3 200 kr", category: "Markedsføring", status: "Bokført" },
  { vendor: "Bring Logistics", amount: "890 kr", category: "Frakt", status: "Bokført" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-white" style={{ paddingTop: 64 }}>
      {/* Subtle blue gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(37,99,235,0.08) 0%, transparent 70%)",
          top: 64,
        }}
      />

      <div className="relative max-w-[1100px] mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-16 py-20">

        {/* Left */}
        <div className="lg:w-[50%]">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 mb-8"
            style={{ fontSize: 13 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
            <span className="text-[#2563EB] font-medium">Nå tilgjengelig for norske bedrifter</span>
          </div>

          <h1
            className="font-extrabold text-slate-900 leading-tight"
            style={{ fontSize: "clamp(42px, 5vw, 64px)", letterSpacing: "-2px", lineHeight: 1.08 }}
          >
            Regnskap som<br />
            <span style={{ color: "#2563EB" }}>gjør seg selv.</span>
          </h1>

          <p className="mt-6 text-slate-500 leading-relaxed max-w-[440px]" style={{ fontSize: 18, lineHeight: 1.7 }}>
            Koble til Gmail eller Outlook. NARA leser alle fakturaer automatisk,
            kategoriserer dem og synkroniserer med Fiken. Du trenger ikke løfte en finger.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <button
              onClick={() => scrollTo("signup")}
              className="bg-[#2563EB] text-white font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
              style={{ padding: "12px 24px", fontSize: 15 }}
            >
              Kom i gang gratis
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-slate-700 font-semibold rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
              style={{ padding: "12px 24px", fontSize: 15 }}
            >
              Se hvordan det fungerer
            </button>
          </div>

          <div className="flex items-center gap-5 mt-8 flex-wrap">
            {["Ingen kredittkort", "14 dager gratis", "Kanseller når som helst"].map((label, i) => (
              <span key={i} className="flex items-center gap-1.5 text-slate-400" style={{ fontSize: 13 }}>
                <CheckCircle size={13} className="text-[#2563EB]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right – product card */}
        <div className="lg:w-[50%] w-full">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid #e2e8f0",
              boxShadow: "0 20px 60px rgba(37,99,235,0.1), 0 4px 16px rgba(0,0,0,0.06)",
            }}
          >
            {/* Window bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-5 py-3.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <span className="ml-3 text-xs text-slate-400 font-mono">app.naraflow.no</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                <span className="text-xs text-green-600 font-medium">Live</span>
              </div>
            </div>

            {/* Content */}
            <div className="bg-white p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-semibold text-slate-900" style={{ fontSize: 15 }}>Innboks</p>
                  <p className="text-slate-400 text-xs mt-0.5">Siste 30 dager</p>
                </div>
                <div
                  className="rounded-lg px-3 py-1.5 text-xs font-semibold"
                  style={{ background: "#eff6ff", color: "#2563EB" }}
                >
                  5 bilag behandlet
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 overflow-hidden">
                <div className="grid text-xs font-semibold text-slate-400 px-4 py-2.5 border-b border-slate-100 bg-slate-50"
                  style={{ gridTemplateColumns: "1fr 1fr auto" }}
                >
                  <span>Leverandør</span>
                  <span>Kategori</span>
                  <span className="text-right">Beløp</span>
                </div>
                {invoices.map((inv, i) => (
                  <div
                    key={i}
                    className="grid px-4 py-3 items-center"
                    style={{
                      gridTemplateColumns: "1fr 1fr auto",
                      borderBottom: i < invoices.length - 1 ? "1px solid #f1f5f9" : "none",
                    }}
                  >
                    <span className="font-medium text-slate-800 text-sm">{inv.vendor}</span>
                    <span className="text-xs text-slate-400">{inv.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-slate-700">{inv.amount}</span>
                      <span
                        className="text-xs font-medium rounded-full px-2 py-0.5"
                        style={{ background: "#f0fdf4", color: "#16a34a" }}
                      >
                        {inv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl px-4 py-3 flex items-center gap-2"
                style={{ background: "#eff6ff" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                <p className="text-xs font-medium" style={{ color: "#2563EB" }}>
                  NARA koblet til Fiken — alt er klart for bokføring
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
