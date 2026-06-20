import { Link } from "react-router-dom";
import { ArrowRight, Inbox, ScanText, BookOpenCheck, RefreshCw, Coins, CopyX, Check, FileText, Calculator, Bot } from "lucide-react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import PipelineDemo from "@/components/site/PipelineDemo";
import PlanCards from "@/components/site/PlanCards";
import { useState } from "react";

/* ────────────────────────── Hero ────────────────────────── */

const HeroBlob = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    <style>{`
      @keyframes ribbon1 {
        0%,100% { d: path("M 900 -100 C 700 0, 750 150, 650 300 C 550 450, 500 500, 600 650 C 700 800, 850 750, 950 900 L 1400 900 L 1400 -100 Z"); }
        50%      { d: path("M 900 -100 C 750 50, 700 200, 620 350 C 540 500, 480 520, 580 700 C 680 880, 870 800, 950 900 L 1400 900 L 1400 -100 Z"); }
      }
      @keyframes ribbon2 {
        0%,100% { d: path("M 980 -100 C 800 80, 820 200, 720 370 C 620 540, 580 560, 660 720 C 740 880, 900 820, 1000 900 L 1400 900 L 1400 -100 Z"); }
        50%      { d: path("M 980 -100 C 830 30, 780 180, 700 340 C 620 500, 560 580, 680 730 C 800 880, 920 810, 1000 900 L 1400 900 L 1400 -100 Z"); }
      }
      @keyframes ribbon3 {
        0%,100% { d: path("M 1060 -100 C 900 60, 880 220, 800 380 C 720 540, 680 600, 760 760 C 840 920, 980 860, 1060 900 L 1400 900 L 1400 -100 Z"); }
        50%      { d: path("M 1060 -100 C 920 40, 860 240, 820 400 C 780 560, 700 620, 800 780 C 900 940, 1000 860, 1060 900 L 1400 900 L 1400 -100 Z"); }
      }
      .r1 { animation: ribbon1 14s ease-in-out infinite; }
      .r2 { animation: ribbon2 18s ease-in-out infinite; }
      .r3 { animation: ribbon3 22s ease-in-out infinite; }
    `}</style>
    <svg
      viewBox="0 0 1400 700"
      preserveAspectRatio="xMidYMid slice"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0a2540" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path className="r1" fill="url(#g1)" d="M 900 -100 C 700 0, 750 150, 650 300 C 550 450, 500 500, 600 650 C 700 800, 850 750, 950 900 L 1400 900 L 1400 -100 Z" />
      <path className="r2" fill="url(#g2)" d="M 980 -100 C 800 80, 820 200, 720 370 C 620 540, 580 560, 660 720 C 740 880, 900 820, 1000 900 L 1400 900 L 1400 -100 Z" />
      <path className="r3" fill="url(#g3)" d="M 1060 -100 C 900 60, 880 220, 800 380 C 720 540, 680 600, 760 760 C 840 920, 980 860, 1060 900 L 1400 900 L 1400 -100 Z" />
    </svg>
    <div style={{
      position: "absolute", inset: 0,
      background: "linear-gradient(to right, white 35%, transparent 65%), linear-gradient(to bottom, transparent 75%, white 100%)",
    }} />
  </div>
)

const Hero = () => (
  <section className="relative overflow-hidden" style={{ paddingTop: 64, background: "#fff" }}>
    <HeroBlob />
    <div className="relative max-w-[1180px] mx-auto px-5 md:px-6 pt-16 md:pt-24 pb-16 md:pb-24 flex flex-col lg:flex-row items-center gap-14">
      <div className="lg:w-[50%]">
        <Reveal>
          <p className="eyebrow mb-6">Regnskapsautomatisering for norske SMB-er</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl text-balance">
            Regnskapet
            <br />
            fører seg selv.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mt-6 max-w-[460px]">
            NARA henter fakturaene fra innboksen, leser dem, konterer etter norsk
            kontoplan og legger dem klare i regnskapssystemet ditt. Du godkjenner. Det er alt.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-3 mt-9">
            <Link to="/signup" className="btn btn-blue btn-lg">
              Kom i gang gratis <ArrowRight size={17} />
            </Link>
            <Link to="/how-it-works" className="btn btn-ghost btn-lg">
              Se hvordan det fungerer
            </Link>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="flex items-center gap-5 mt-8 flex-wrap">
            {["14 dager gratis", "Ingen kredittkort", "Ingen binding"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 font-data text-[12px]" style={{ color: "var(--ink-mute)" }}>
                <Check size={13} strokeWidth={2.5} style={{ color: "var(--blue)" }} />
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="lg:w-[50%] w-full max-w-[520px]">
        <Reveal delay={200}>
          <PipelineDemo />
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─────────────── «Hva skjer etter e-post?» (mørk) ─────────────── */

const STEPS = [
  {
    time: "09:42:07",
    title: "En faktura lander i innboksen",
    body: "NARA overvåker e-posten din via offisiell tilkobling til Gmail eller Outlook – eller du videresender til firmanavn@bilag.naraflow.no. Ingenting å huske på.",
    data: "Fra: faktura@telia.no · Vedlegg: 2026-04-1182.pdf",
  },
  {
    time: "09:42:31",
    title: "NARA leser hele PDF-en",
    body: "Ikke bare e-postteksten – selve fakturaen. AI-en trekker ut leverandør, beløp, fakturanummer, forfallsdato og valuta.",
    data: "Telia Norge AS · 1 249,00 NOK · forfall 28.06.2026",
  },
  {
    time: "09:42:58",
    title: "Kontert, kontrollert og omregnet",
    body: "Riktig konto i norsk standard kontoplan, riktig MVA-kode, valuta omregnet til NOK med dagskurs – og duplikatsjekk, slik at samme faktura aldri føres to ganger.",
    data: "Konto 6900 Telefon/internett · MVA 25 % · duplikat: nei",
  },
  {
    time: "09:43:12",
    title: "Klar til godkjenning i regnskapet",
    body: "Bilaget ligger ferdig behandlet i dashbordet ditt. Ett klikk – og det er bokført som kjøp i regnskapssystemet ditt. Du har alltid siste ord.",
    data: "Status: klar · venter på din godkjenning",
  },
];

const AfterGmail = () => (
  <section className="relative section" style={{ background: "var(--night)" }}>
    <div className="absolute inset-0 night-glow pointer-events-none" aria-hidden="true" />
    <div className="relative max-w-[860px] mx-auto">
      <Reveal>
        <p className="eyebrow mb-5">Fra innboks til regnskapet</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="display-lg text-balance" style={{ color: "var(--night-text)" }}>
          Hva skjer egentlig etter at du
          <br className="hidden md:block" /> kobler til e-post?
        </h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="body-lg mt-5 max-w-[560px]" style={{ color: "var(--night-soft)" }}>
          Dette. Hver gang, helt av seg selv – her vist sekund for sekund.
        </p>
      </Reveal>

      <ol className="mt-14 relative">
        <div
          className="absolute left-[7px] top-3 bottom-3 w-px"
          aria-hidden="true"
          style={{ background: "linear-gradient(to bottom, var(--blue) 0%, var(--night-line) 100%)" }}
        />
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.time} delay={i * 110} className="relative pl-12 pb-12 last:pb-0">
            <span
              className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full"
              style={{
                background: "var(--night)",
                border: "2px solid var(--blue)",
                boxShadow: "0 0 0 4px rgba(37,99,235,0.15)",
              }}
            />
            <p className="font-data text-[12px] mb-2" style={{ color: "var(--blue)" }}>
              {s.time}
            </p>
            <h3 className="text-[20px] md:text-[22px] font-bold tracking-tight" style={{ color: "var(--night-text)" }}>
              {s.title}
            </h3>
            <p className="body-md mt-2 max-w-[560px]" style={{ color: "var(--night-soft)" }}>
              {s.body}
            </p>
            <p
              className="font-data text-[12px] inline-block mt-4 px-3.5 py-2 rounded-lg"
              style={{ background: "var(--night-raised)", border: "1px solid var(--night-line)", color: "var(--night-soft)" }}
            >
              {s.data}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="mt-14 text-[17px] font-medium" style={{ color: "var(--night-text)" }}>
          Fra innboks til regnskapet på under ett minutt.{" "}
          <span style={{ color: "var(--night-mute)" }}>Uten at du gjorde noe.</span>
        </p>
      </Reveal>
    </div>
  </section>
);

/* ────────────────────────── Features ────────────────────────── */

const FEATURES = [
  {
    icon: Inbox,
    title: "Gmail og Outlook – begge støttet",
    body: "Koble til Gmail eller Outlook med ett klikk, eller videresend til din egen @bilag.naraflow.no-adresse. Fakturaene fanges i det øyeblikket de ankommer.",
  },
  {
    icon: FileText,
    title: "EHF hentes automatisk",
    body: "Ca. 50 % av norske B2B-fakturaer sendes som EHF (Peppol). NARA henter dem direkte fra regnskapssystemet ditt – du trenger ikke løfte en finger. Obligatorisk fra 2027.",
  },
  {
    icon: ScanText,
    title: "Leser hele fakturaen",
    body: "AI-en leser selve PDF-vedlegget og trekker ut leverandør, beløp, fakturanummer, forfall og valuta – ikke bare emnefeltet.",
  },
  {
    icon: Calculator,
    title: "MVA beregnet i sanntid",
    body: "Riktig MVA-kode settes automatisk basert på leverandør og bilagstype. Ingen andre norske løsninger gjør dette i sanntid uten manuell input.",
  },
  {
    icon: BookOpenCheck,
    title: "Konterer som en regnskapsfører",
    body: "Automatisk mapping til norsk standard kontoplan (NS 4102). Bygget for norske regler fra dag én – ikke et oversatt utenlandsk produkt.",
  },
  {
    icon: Coins,
    title: "Valuta? Allerede ordnet",
    body: "Fakturaer i utenlandsk valuta omregnes til NOK med dagskurs, automatisk og sporbart.",
  },
  {
    icon: CopyX,
    title: "Aldri samme bilag to ganger",
    body: "Duplikatkontroll på tvers av e-post, videresending og EHF. Samme faktura prosesseres aldri dobbelt.",
  },
  {
    icon: Bot,
    title: "AI-agent som handler",
    body: "Ikke bare svar på spørsmål – NARA kan utføre handlinger. Be den hente alle fakturaer fra en periode, og den gjør det. Historisk sync inkludert.",
  },
  {
    icon: RefreshCw,
    title: "To-veis sync med regnskapssystemet",
    body: "EHF-fakturaer hentes inn automatisk, og godkjente bilag pushes rett inn i regnskapssystemet ditt som kjøp. Støtter Fiken, Tripletex og PowerOffice.",
  },
];

const Features = () => (
  <section className="section">
    <div className="max-w-[1180px] mx-auto">
      <Reveal>
        <p className="eyebrow mb-5">Hva NARA gjør</p>
      </Reveal>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <Reveal delay={60}>
          <h2 className="display-lg text-balance max-w-[560px]">
            Ikke et verktøy som hjelper.
            <br />
            Et verktøy som gjør.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="body-md max-w-[380px]">
            NARA er det første norske produktet som faktisk utfører regnskapsføringen –
            ikke bare gir deg et bedre sted å gjøre den selv.
          </p>
        </Reveal>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 90}>
            <div className="card-line p-7 h-full transition-shadow duration-300 hover:shadow-[0_12px_32px_-12px_rgba(16,20,24,0.12)]">
              <div
                className="w-10 h-10 rounded-[11px] flex items-center justify-center mb-5"
                style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
              >
                <f.icon size={18} strokeWidth={2} />
              </div>
              <h3 className="text-[17px] font-bold tracking-tight mb-2">{f.title}</h3>
              <p className="body-md text-[14px]">{f.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─────────────────────── AI-assistent ─────────────────────── */

const CHAT_EXAMPLES = [
  "Vis alle fakturaer fra Visma i april",
  "Hent alle fakturaer fra januar 2025",
  "Hvor mye brukte vi på programvare i Q1?",
  "Hvilke leverandører bruker vi mest penger på?",
];

const Assistant = () => (
  <section
    className="section"
    style={{ background: "var(--paper-raised)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}
  >
    <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center gap-14">
      <div className="lg:w-[48%]">
        <Reveal>
          <p className="eyebrow mb-5">NARA AI</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="display-lg text-balance">Spør regnskapet ditt. På norsk.</h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg mt-5 max-w-[460px]">
            Alle bilag er søkbare i naturlig språk. Be om periodesummeringer,
            leverandøroversikter eller enkeltfakturaer – og få svar med tallene
            rett fra regnskapet.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-2 mt-7">
            {CHAT_EXAMPLES.map((q) => (
              <span
                key={q}
                className="font-data text-[12px] px-3.5 py-2 rounded-full"
                style={{ background: "var(--paper)", border: "1px solid var(--line)", color: "var(--ink-soft)" }}
              >
                «{q}»
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="lg:w-[52%] w-full max-w-[520px]">
        <Reveal delay={150}>
          <div className="card-line p-5 space-y-4" style={{ borderRadius: 16 }}>
            <div className="flex justify-end">
              <p
                className="text-[13.5px] px-4 py-2.5 rounded-2xl rounded-br-md max-w-[80%]"
                style={{ background: "var(--ink)", color: "#fff" }}
              >
                Hvor mye brukte vi på telefon og internett i april?
              </p>
            </div>
            <div className="flex justify-start">
              <div
                className="text-[13.5px] px-4 py-3 rounded-2xl rounded-bl-md max-w-[88%]"
                style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
              >
                <p style={{ color: "var(--ink-soft)" }}>
                  I april har dere <strong style={{ color: "var(--ink)" }}>3 bilag</strong> på konto
                  6900 Telefon/internett:
                </p>
                <div className="font-data text-[12px] mt-3 space-y-1.5" style={{ color: "var(--ink-soft)" }}>
                  <div className="flex justify-between gap-6"><span>Telia Norge AS</span><span>1 249,00</span></div>
                  <div className="flex justify-between gap-6"><span>Telenor Bedrift</span><span>890,00</span></div>
                  <div className="flex justify-between gap-6"><span>GlobalConnect</span><span>2 100,00</span></div>
                  <div
                    className="flex justify-between gap-6 pt-1.5 font-semibold"
                    style={{ borderTop: "1px solid var(--line)", color: "var(--ink)" }}
                  >
                    <span>Totalt</span><span>4 239,00 kr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ───────────────────────── Tillit ───────────────────────── */

const TRUST = [
  {
    title: "Du har alltid siste ord",
    body: "Ingenting bokføres uten din godkjenning. NARA forbereder – du bestemmer.",
  },
  {
    title: "Offisiell OAuth, aldri passord",
    body: "Tilkoblingen til e-post og regnskapssystemet skjer via offisielle API-er. NARA ser aldri passordene dine, og du kan trekke tilgangen når som helst.",
  },
  {
    title: "Bygget for norske regler",
    body: "Norsk kontoplan, norske MVA-koder, norsk språk. Ikke et oversatt utenlandsk produkt.",
  },
  {
    title: "Ingen binding",
    body: "Månedlig avtale du kan avslutte når du vil. Dataene dine er dine.",
  },
];

const Trust = () => (
  <section className="section">
    <div className="max-w-[1180px] mx-auto">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Tillit</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg text-balance">Økonomien din. Våre strengeste regler.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-md mt-5">
              Et regnskapsverktøy må fortjene tilliten det får. Derfor er NARA bygget
              med kontroll og åpenhet som grunnprinsipp – ikke som etterpåklokskap.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9 pt-2">
          {TRUST.map((t, i) => (
            <Reveal key={t.title} delay={i * 80}>
              <div style={{ borderTop: "2px solid var(--ink)", paddingTop: 18 }}>
                <h3 className="text-[16px] font-bold tracking-tight mb-2">{t.title}</h3>
                <p className="body-md text-[14px]">{t.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ───────────────────── Pris-utdrag + CTA ───────────────────── */

const PricingTeaser = () => {
  const [annual, setAnnual] = useState(false);
  return (
    <section className="section" style={{ background: "var(--paper-raised)", borderTop: "1px solid var(--line)" }}>
      <div className="max-w-[1080px] mx-auto">
        <div className="text-center mb-12">
          <Reveal>
            <p className="eyebrow mb-5">Priser</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-lg">Enkelt og forutsigbart</h2>
          </Reveal>
          <Reveal delay={160}>
            <div
              className="inline-flex items-center rounded-full p-1 mt-8"
              style={{ border: "1px solid var(--line)", background: "var(--paper)" }}
            >
              {[
                { v: false, label: "Månedlig" },
                { v: true, label: "Årlig −20 %" },
              ].map(({ v, label }) => (
                <button
                  key={label}
                  onClick={() => setAnnual(v)}
                  className="px-5 py-2 text-[13.5px] font-semibold rounded-full transition-colors"
                  style={{
                    background: annual === v ? "var(--ink)" : "transparent",
                    color: annual === v ? "#fff" : "var(--ink-soft)",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <PlanCards annual={annual} />

        <Reveal delay={120}>
          <p className="text-center mt-10 text-[14.5px]" style={{ color: "var(--ink-soft)" }}>
            <Link to="/pricing" className="font-semibold inline-flex items-center gap-1.5" style={{ color: "var(--blue)" }}>
              Se full prisoversikt og vanlige spørsmål <ArrowRight size={14} />
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="relative section" style={{ background: "var(--night)" }}>
    <div className="absolute inset-0 night-glow pointer-events-none" aria-hidden="true" />
    <div className="relative max-w-[700px] mx-auto text-center">
      <Reveal>
        <h2 className="display-lg" style={{ color: "var(--night-text)" }}>
          Neste faktura kan føre seg selv.
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="body-lg mt-5" style={{ color: "var(--night-soft)" }}>
          Kom i gang på under fem minutter. Koble til e-post og regnskapssystemet ditt – så tar NARA det derfra.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className="flex justify-center gap-3 mt-9 flex-wrap">
          <Link to="/signup" className="btn btn-blue btn-lg">
            Kom i gang gratis <ArrowRight size={17} />
          </Link>
          <Link to="/how-it-works" className="btn btn-ghost-night btn-lg">
            Slik fungerer det
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ────────────────────────── Side ────────────────────────── */

const Landing = () => (
  <div style={{ background: "var(--paper)" }}>
    <SiteNav />
    <main>
      <Hero />
      <AfterGmail />
      <Features />
      <Assistant />
      <Trust />
      <PricingTeaser />
      <FinalCTA />
    </main>
    <SiteFooter />
  </div>
);

export default Landing;
