import { CheckCircle } from "lucide-react";

const invoices = [
  { vendor: "Telenor", amount: "2 400 kr", status: "Behandlet" },
  { vendor: "Norwegian", amount: "4 870 kr", status: "Behandlet" },
  { vendor: "Circle K", amount: "1 230 kr", status: "Behandlet" },
  { vendor: "Google Ads", amount: "3 200 kr", status: "Behandlet" },
  { vendor: "Bring", amount: "890 kr", status: "Behandlet" },
  { vendor: "Airbnb", amount: "2 150 kr", status: "Behandlet" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center bg-background" style={{ paddingTop: 104 }}>
      <div className="max-w-[1100px] mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-12 py-16">
        {/* Left column */}
        <div className="lg:w-[52%] opacity-0 animate-hero-left">
          <p className="font-serif italic text-primary mb-6" style={{ fontSize: 21, letterSpacing: "0.01em" }}>
            Økonomi. Autopilot.
          </p>
          <h1
            className="font-extrabold text-foreground"
            style={{ fontSize: "clamp(44px, 5.5vw, 68px)", letterSpacing: "-2.5px", lineHeight: 1.05 }}
          >
            Regnskap på autopilot.
          </h1>
          <p className="mt-6 leading-relaxed max-w-[460px]" style={{ fontSize: 18, color: "hsl(0 0% 29%)", lineHeight: 1.65 }}>
            Koble til innboksen din én gang. NARA fanger opp alle
            fakturaer, kvitteringer og bilag automatisk. Organiserer
            dem etter år, måned og prosjekt. Kategoriserer alt.
            Gjør alt klart. Du åpner NARA – og har full kontroll
            over bedriftens økonomi i sanntid.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <button onClick={() => scrollTo("signup")} className="btn-primary-pill">
              Søk om tidlig tilgang
            </button>
            <button onClick={() => scrollTo("signup")} className="btn-secondary-pill">
              Book en demo
            </button>
          </div>
          <p className="mt-5 text-muted-foreground" style={{ fontSize: 13 }}>
            Ingen kredittkort · 14 dager gratis · Sett opp på 2 min
          </p>
        </div>

        {/* Right column – visual card */}
        <div className="lg:w-[48%] opacity-0 animate-hero-right">
          <div
            className="animate-float rounded-3xl p-8 sm:p-10"
            style={{
              background: "linear-gradient(145deg, hsl(224 100% 97%) 0%, hsl(226 69% 95%) 100%)",
              borderRadius: 32,
              boxShadow: "0 32px 80px rgba(37,99,235,0.15), 0 8px 32px rgba(0,0,0,0.08)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-foreground text-sm">NARA</span>
                <span className="flex items-center gap-1 text-xs text-success font-medium">
                  <span className="w-2 h-2 rounded-full bg-success inline-block" />
                  Live
                </span>
              </div>
              <span className="text-xs text-muted-foreground">I dag, 09:41</span>
            </div>

            <div className="bg-background rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-semibold text-muted-foreground px-4 py-2.5 border-b border-border">
                <span>Leverandør</span>
                <span className="text-right">Beløp</span>
                <span className="text-right">Status</span>
              </div>
              {invoices.map((inv, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-3 text-sm px-4 py-3 ${i < invoices.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="font-medium text-foreground">{inv.vendor}</span>
                  <span className="text-right" style={{ color: "hsl(0 0% 29%)" }}>{inv.amount}</span>
                  <span className="text-right">
                    <span
                      className="inline-block text-xs font-medium rounded-full px-2.5 py-0.5"
                      style={{ background: "hsl(141 79% 93%)", color: "hsl(142 72% 29%)" }}
                    >
                      {inv.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-primary/10 rounded-lg px-4 py-2.5 text-center">
              <span className="text-xs font-medium text-primary">
                6 bilag behandlet automatisk i dag ✦
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
            {["AI-drevet", "GDPR-trygg", "Norsk support"].map((label, i) => (
              <span key={i} className="flex items-center gap-1.5 text-xs" style={{ color: "hsl(220 9% 46%)" }}>
                <CheckCircle size={12} className="text-primary" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
