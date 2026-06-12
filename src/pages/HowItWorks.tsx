import { Link } from "react-router-dom";
import { ArrowRight, Mail, ScanText, BookOpenCheck, MousePointerClick, RefreshCw, MessageSquareText } from "lucide-react";
import SiteNav from "@/components/site/SiteNav";
import SiteFooter from "@/components/site/SiteFooter";
import Reveal from "@/components/site/Reveal";
import PipelineDemo from "@/components/site/PipelineDemo";

const STEPS = [
  {
    num: "01",
    icon: Mail,
    title: "Koble til – én gang",
    body: "Logg inn med Google og gi NARA tilgang via offisiell OAuth. Fra det øyeblikket overvåkes innboksen, og nye fakturaer fanges automatisk i det de ankommer. Foretrekker du å styre selv? Videresend bilag til din egen adresse:",
    data: "firmanavn@bilag.naraflow.no",
    detail: "NARA ser aldri passordet ditt, og du kan trekke tilgangen når som helst i Google-kontoen din.",
  },
  {
    num: "02",
    icon: ScanText,
    title: "NARA leser fakturaen – hele",
    body: "AI-en åpner PDF-vedlegget og leser det slik en regnskapsfører ville gjort. Ut kommer strukturerte data:",
    data: "leverandør · beløp · fakturanummer · forfallsdato · valuta",
    detail: "Fakturaer i utenlandsk valuta omregnes til NOK med dagskurs. Duplikatsjekken sørger for at samme faktura aldri prosesseres to ganger – uansett om den kom på e-post, videresending eller EHF.",
  },
  {
    num: "03",
    icon: BookOpenCheck,
    title: "Kontering etter norsk standard",
    body: "Hvert bilag mappes automatisk til riktig konto i norsk standard kontoplan (NS 4102), med korrekt MVA-kode. Telefonregningen havner på 6900, programvaren på 6810 – uten at du tenker på det.",
    data: "6900 Telefon/internett · MVA-kode 25 %",
    detail: "Er NARA usikker, merkes bilaget tydelig for gjennomgang i stedet for å gjette stille.",
  },
  {
    num: "04",
    icon: MousePointerClick,
    title: "Du godkjenner – med ett klikk",
    body: "Ferdig behandlede bilag ligger klare i fakturainboksen din med alle felter utfylt. Du ser hva NARA har gjort, og godkjenner eller avviser. Ingenting bokføres uten deg.",
    data: "Godkjenn ✓ · Avvis ✕",
    detail: "Dette er hele jobben din. For de fleste tar det under et minutt om dagen.",
  },
  {
    num: "05",
    icon: RefreshCw,
    title: "Synkronisert med Fiken – begge veier",
    body: "Godkjente bilag pushes inn i Fiken som kjøp, ferdig kontert. Samtidig henter NARA EHF-fakturaene dine fra Fiken, slik at alt samles på ett sted.",
    data: "NARA ⇄ Fiken · EHF inn · kjøp ut",
    detail: "Regnskapet i Fiken er alltid à jour – uten manuell punching.",
  },
  {
    num: "06",
    icon: MessageSquareText,
    title: "Og etterpå? Bare spør.",
    body: "AI-assistenten kjenner hele regnskapet. Søk i bilag, be om periodesummeringer eller leverandøroversikter – i naturlig norsk språk.",
    data: "«Vis alle fakturaer fra Visma i april»",
    detail: "Svarene kommer med tall hentet rett fra bilagene dine, ikke fra hukommelsen.",
  },
];

const HowItWorks = () => (
  <div style={{ background: "var(--paper)" }}>
    <SiteNav />
    <main style={{ paddingTop: 64 }}>
      {/* Intro */}
      <section className="section-sm relative overflow-hidden">
        <div className="absolute inset-0 grid-paper pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[860px] mx-auto text-center pt-10">
          <Reveal>
            <p className="eyebrow mb-6">Slik fungerer det</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-xl text-balance">
              Seks steg.
              <br />
              Du gjør ett av dem.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="body-lg mt-6 max-w-[540px] mx-auto">
              Fra en faktura lander i innboksen til den er bokført i Fiken, skjer nesten
              alt uten deg. Her er hele flyten – ærlig og i detalj.
            </p>
          </Reveal>
        </div>
        <div className="relative max-w-[520px] mx-auto mt-14">
          <Reveal delay={240}>
            <PipelineDemo />
          </Reveal>
        </div>
      </section>

      {/* Stegene */}
      <section className="section">
        <div className="max-w-[820px] mx-auto space-y-5">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={Math.min(i * 60, 180)}>
              <div className="card-line p-7 md:p-9">
                <div className="flex items-start gap-5 md:gap-7">
                  <div className="shrink-0 flex flex-col items-center gap-3">
                    <span className="font-data text-[13px] font-semibold" style={{ color: "var(--ink-mute)" }}>
                      {s.num}
                    </span>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
                    >
                      <s.icon size={19} strokeWidth={2} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[21px] md:text-[24px] font-bold tracking-tight">{s.title}</h2>
                    <p className="body-md mt-2.5">{s.body}</p>
                    <p
                      className="font-data text-[12.5px] inline-block mt-4 px-3.5 py-2 rounded-lg max-w-full overflow-x-auto"
                      style={{ background: "var(--paper)", border: "1px solid var(--line)", color: "var(--blue-deep)" }}
                    >
                      {s.data}
                    </p>
                    <p className="text-[13.5px] mt-4 leading-relaxed" style={{ color: "var(--ink-mute)" }}>
                      {s.detail}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative section" style={{ background: "var(--night)" }}>
        <div className="absolute inset-0 night-glow pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-[640px] mx-auto text-center">
          <Reveal>
            <h2 className="display-lg" style={{ color: "var(--night-text)" }}>
              Klar til å la regnskapet føre seg selv?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex justify-center gap-3 mt-9 flex-wrap">
              <Link to="/signup" className="btn btn-blue btn-lg">
                Kom i gang gratis <ArrowRight size={17} />
              </Link>
              <Link to="/pricing" className="btn btn-ghost-night btn-lg">
                Se priser
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default HowItWorks;
