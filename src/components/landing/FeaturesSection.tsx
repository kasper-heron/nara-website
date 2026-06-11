import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M8 2v2m8-2v2M2 10h20"/></svg>
    ),
    title: "Gmail og Outlook",
    desc: "Koble til én eller begge innboksene. NARA overvåker automatisk og fanger opp alle bilag.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
    ),
    title: "GPT-4o bilagslesning",
    desc: "Kunstig intelligens leser PDF-er og e-poster, finner leverandør, beløp, MVA og riktig konto.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    title: "MVA-håndtering",
    desc: "25%, 15%, 12% eller ingen MVA — NARA finner riktig sats og bokfører korrekt automatisk.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    ),
    title: "AI-assistent på norsk",
    desc: "Spør om hva som helst — «Hva er utgiftene mine i mai?», «Hva mangler for å avslutte kvartalet?»",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Fiken-integrasjon",
    desc: "Bilag bokføres direkte i Fiken. Regnskapsfører slipper manuell inntasting — alt er klart.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
    ),
    title: "GDPR og norsk personvern",
    desc: "Data lagres i EU. Ingen deling med tredjeparter. Kryptert overføring. Norsk support.",
  },
];

const FeaturesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="features" className="py-24 bg-white">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] tracking-widest uppercase mb-4">
            Funksjoner
          </p>
          <h2 className="font-extrabold text-slate-900" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-1.5px" }}>
            Alt du trenger. Ingenting du ikke trenger.
          </h2>
          <p className="mt-4 text-slate-500 max-w-[460px] mx-auto" style={{ fontSize: 17, lineHeight: 1.7 }}>
            NARA er bygget for norske småbedrifter som vil bruke tiden sin på noe annet enn regnskap.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 p-7 hover:border-blue-100 hover:shadow-md transition-all duration-200"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                {f.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontSize: 16 }}>
                {f.title}
              </h3>
              <p className="text-slate-500 leading-relaxed" style={{ fontSize: 14, lineHeight: 1.65 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
