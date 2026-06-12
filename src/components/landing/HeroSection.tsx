import { ArrowRight } from "lucide-react";

const invoices = [
  { vendor: "Telenor AS", amount: "2 400 kr", category: "Telekommunikasjon" },
  { vendor: "Norwegian Air", amount: "4 870 kr", category: "Reise" },
  { vendor: "Circle K", amount: "1 230 kr", category: "Drivstoff" },
  { vendor: "Google Ads", amount: "3 200 kr", category: "Markedsføring" },
  { vendor: "Bring Logistics", amount: "890 kr", category: "Frakt" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white flex items-center" style={{ paddingTop: 64, minHeight: "100vh" }}>

      {/* Blue gradient — right side only */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 90% at 100% 50%, rgba(37,99,235,0.13) 0%, transparent 65%),
            radial-gradient(ellipse 40% 60% at 90% 0%, rgba(37,99,235,0.09) 0%, transparent 55%)
          `,
        }}
      />

      <div className="relative max-w-[1160px] mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-12 py-24">

        {/* Left */}
        <div className="lg:w-[52%] z-10">
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold"
            style={{ border: "1px solid rgba(99,91,255,0.25)", background: "rgba(99,91,255,0.05)", color: "#2563EB" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] inline-block" />
            Nå tilgjengelig for norske bedrifter
          </div>

          <h1
            className="font-extrabold leading-tight"
            style={{
              fontSize: "clamp(48px, 6vw, 76px)",
              letterSpacing: "-3px",
              lineHeight: 1.05,
              color: "#0a2540",
            }}
          >
            Regnskap som
            <br />
            <span style={{ color: "#2563EB" }}>gjør seg selv.</span>
          </h1>

          <p
            className="mt-6 max-w-[460px] leading-relaxed"
            style={{ fontSize: 18, color: "#425466", lineHeight: 1.75 }}
          >
            Koble til Gmail eller Outlook. NARA leser alle fakturaer
            automatisk, kategoriserer dem og synkroniserer direkte med Fiken.
            Du trenger ikke løfte en finger.
          </p>

          <div className="flex flex-wrap gap-3 mt-10">
            <button
              onClick={() => scrollTo("signup")}
              className="flex items-center gap-2 text-white font-semibold rounded-lg transition-all"
              style={{ padding: "13px 26px", fontSize: 15, background: "#2563EB" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563EB")}
            >
              Kom i gang gratis <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="font-semibold rounded-lg transition-all border"
              style={{ padding: "13px 26px", fontSize: 15, color: "#0a2540", borderColor: "#d1d9e0", background: "white" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#f6f9fc")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
            >
              Se hvordan det fungerer
            </button>
          </div>

          <div className="flex items-center gap-6 mt-8 flex-wrap">
            {["Ingen kredittkort", "14 dager gratis", "Kanseller når som helst"].map((label, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "#8898aa" }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right – product card */}
        <div className="lg:w-[48%] w-full z-10">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.8)",
              boxShadow: "0 30px 80px rgba(10,37,64,0.12), 0 8px 24px rgba(10,37,64,0.06)",
              background: "white",
            }}
          >
            {/* Window chrome */}
            <div style={{ background: "#f6f9fc", borderBottom: "1px solid #e3e8ef", padding: "12px 16px" }} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-3 text-xs font-mono" style={{ color: "#8898aa" }}>app.naraflow.no</span>
              <div className="ml-auto flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs font-medium text-green-600">Live</span>
              </div>
            </div>

            {/* App content */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-bold text-sm" style={{ color: "#0a2540" }}>Innboks</p>
                  <p className="text-xs mt-0.5" style={{ color: "#8898aa" }}>Siste 30 dager · 5 bilag</p>
                </div>
                <div className="rounded-full text-xs font-semibold px-3 py-1" style={{ background: "rgba(99,91,255,0.08)", color: "#2563EB" }}>
                  Fiken synkronisert ✓
                </div>
              </div>

              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid #e3e8ef" }}>
                <div className="grid text-xs font-semibold px-4 py-2.5" style={{ gridTemplateColumns: "1fr 1fr auto", background: "#f6f9fc", color: "#8898aa", borderBottom: "1px solid #e3e8ef" }}>
                  <span>Leverandør</span>
                  <span>Kategori</span>
                  <span>Beløp</span>
                </div>
                {invoices.map((inv, i) => (
                  <div
                    key={i}
                    className="grid px-4 py-3 items-center"
                    style={{
                      gridTemplateColumns: "1fr 1fr auto",
                      borderBottom: i < invoices.length - 1 ? "1px solid #f0f4f8" : "none",
                    }}
                  >
                    <span className="text-sm font-semibold" style={{ color: "#0a2540" }}>{inv.vendor}</span>
                    <span className="text-xs" style={{ color: "#8898aa" }}>{inv.category}</span>
                    <span className="text-sm font-medium" style={{ color: "#425466" }}>{inv.amount}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-4 rounded-xl px-4 py-3 flex items-center gap-2.5"
                style={{ background: "rgba(99,91,255,0.06)", border: "1px solid rgba(99,91,255,0.12)" }}
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#2563EB" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p className="text-xs font-medium" style={{ color: "#2563EB" }}>
                  5 bilag behandlet og klart for godkjenning i Fiken
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
