import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Minus, Plus } from "lucide-react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import PlanCards from "@/components/site/PlanCards";

const COMPARISON: { feature: string; values: (boolean | string)[] }[] = [
  { feature: "Bilag per måned", values: ["50", "Ubegrenset", "Ubegrenset"] },
  { feature: "Automatisk henting fra Gmail", values: [true, true, true] },
  { feature: "Videresending til @bilag.naraflow.no", values: [true, true, true] },
  { feature: "AI-lesing av PDF-vedlegg", values: [true, true, true] },
  { feature: "Kontering etter NS 4102 + MVA-koder", values: [true, true, true] },
  { feature: "Valutaomregning til NOK (dagskurs)", values: [true, true, true] },
  { feature: "Duplikatkontroll", values: [false, true, true] },
  { feature: "To-veis sync med Fiken", values: [false, true, true] },
  { feature: "EHF-fakturaer inn automatisk", values: [false, true, true] },
  { feature: "AI-assistent (chat med regnskapet)", values: [false, true, true] },
  { feature: "Brukere", values: ["1", "3", "Ubegrenset"] },
  { feature: "Support", values: ["E-post", "Prioritert", "Dedikert + SLA"] },
  { feature: "API-tilgang", values: [false, false, true] },
  { feature: "Dedikert onboarding", values: [false, false, true] },
];

const FAQ = [
  {
    q: "Hva teller som et bilag?",
    a: "Hver faktura eller kvittering NARA prosesserer ferdig – uansett om den kom via Gmail, videresending eller EHF. Duplikater teller selvsagt ikke.",
  },
  {
    q: "Er det bindingstid?",
    a: "Nei. Månedlig avtale du kan avslutte når som helst, med virkning fra neste fakturaperiode. Velger du årlig betaling, betaler du for ett år av gangen til 20 % rabatt.",
  },
  {
    q: "Hva skjer når prøveperioden er over?",
    a: "Etter 14 dager velger du en plan for å fortsette. Vi krever ikke kortinformasjon på forhånd, så du blir aldri belastet automatisk.",
  },
  {
    q: "Hva om jeg går tom for bilag på Starter?",
    a: "Bilag utover 50 i en måned legges i kø og prosesseres ikke før neste måned – eller du oppgraderer til Vekst, som har ubegrenset volum.",
  },
  {
    q: "Trenger jeg Fiken for å bruke NARA?",
    a: "Nei. NARA fungerer som selvstendig bilagsinnboks med AI-lesing og kontering. Men med Fiken tilkoblet får du hele verdien: godkjente bilag bokføres automatisk som kjøp.",
  },
  {
    q: "Hvordan behandles dataene mine?",
    a: "Tilgang til Gmail og Fiken skjer via offisielle API-er med OAuth – NARA ser aldri passordene dine, og du kan trekke tilgangen når som helst. Les mer i personvernerklæringen.",
  },
];

const Cell = ({ v }: { v: boolean | string }) => {
  if (v === true) return <Check size={16} strokeWidth={2.5} className="mx-auto" style={{ color: "var(--blue)" }} />;
  if (v === false) return <Minus size={14} className="mx-auto" style={{ color: "var(--ink-mute)", opacity: 0.5 }} />;
  return <span className="font-data text-[12.5px]" style={{ color: "var(--ink-soft)" }}>{v}</span>;
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-line overflow-hidden" style={{ borderRadius: 12 }}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[15.5px] font-semibold">{q}</span>
        <Plus
          size={17}
          className="shrink-0 transition-transform duration-300"
          style={{ color: "var(--ink-mute)", transform: open ? "rotate(45deg)" : "none" }}
        />
      </button>
      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="body-md text-[14.5px] px-6 pb-5">{a}</p>
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div style={{ background: "var(--paper)" }}>
      <SiteNav />
      <main style={{ paddingTop: 64 }}>
        {/* Intro + planer */}
        <section className="section-sm">
          <div className="max-w-[1080px] mx-auto">
            <div className="text-center pt-10 mb-12">
              <Reveal>
                <p className="eyebrow mb-6">Priser</p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="display-xl text-balance">Ærlig prising.<br />Ingen overraskelser.</h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="body-lg mt-6 max-w-[480px] mx-auto">
                  14 dager gratis på alle planer. Ingen kredittkort for å starte,
                  ingen binding for å bli.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div
                  className="inline-flex items-center rounded-full p-1 mt-9"
                  style={{ border: "1px solid var(--line)", background: "var(--paper-raised)" }}
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

            <Reveal delay={100}>
              <p className="text-center mt-8 font-data text-[12px]" style={{ color: "var(--ink-mute)" }}>
                Alle priser eks. mva. {annual && "Årlig betaling faktureres forskuddsvis for 12 måneder."}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Sammenligning */}
        <section className="section-sm">
          <div className="max-w-[860px] mx-auto">
            <Reveal>
              <h2 className="display-md text-center mb-10">Alt i detalj</h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="card-line overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-[13.5px]" style={{ minWidth: 560 }}>
                    <thead>
                      <tr style={{ borderBottom: "1px solid var(--line)" }}>
                        <th className="text-left font-semibold px-6 py-4" style={{ width: "40%" }}></th>
                        {["Starter", "Vekst", "Enterprise"].map((p) => (
                          <th key={p} className="font-bold px-4 py-4 text-center" style={{ color: p === "Vekst" ? "var(--blue)" : "var(--ink)" }}>
                            {p}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON.map((row, i) => (
                        <tr
                          key={row.feature}
                          style={{
                            borderBottom: i < COMPARISON.length - 1 ? "1px solid var(--line-soft)" : "none",
                            background: i % 2 ? "var(--paper)" : "transparent",
                          }}
                        >
                          <td className="px-6 py-3.5 font-medium" style={{ color: "var(--ink-soft)" }}>
                            {row.feature}
                          </td>
                          {row.values.map((v, j) => (
                            <td key={j} className="px-4 py-3.5 text-center">
                              <Cell v={v} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-sm">
          <div className="max-w-[720px] mx-auto">
            <Reveal>
              <h2 className="display-md text-center mb-10">Vanlige spørsmål</h2>
            </Reveal>
            <div className="space-y-3">
              {FAQ.map((f, i) => (
                <Reveal key={f.q} delay={Math.min(i * 50, 150)}>
                  <FaqItem q={f.q} a={f.a} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={100}>
              <p className="text-center mt-10 body-md">
                Andre spørsmål?{" "}
                <a href="mailto:hei@naraflow.no" className="font-semibold" style={{ color: "var(--blue)" }}>
                  hei@naraflow.no
                </a>
              </p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative section" style={{ background: "var(--night)" }}>
          <div className="absolute inset-0 night-glow pointer-events-none" aria-hidden="true" />
          <div className="relative max-w-[640px] mx-auto text-center">
            <Reveal>
              <h2 className="display-lg" style={{ color: "var(--night-text)" }}>
                Prøv gratis i 14 dager.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="body-lg mt-4" style={{ color: "var(--night-soft)" }}>
                Ingen kredittkort. Ingen binding. Bare færre bilag å punche.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link to="/signup" className="btn btn-blue btn-lg mt-9">
                Kom i gang gratis <ArrowRight size={17} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Pricing;
