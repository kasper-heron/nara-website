import { Mail, Sparkles, LayoutDashboard, CheckCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
  {
    num: "01",
    icon: Mail,
    title: "Koble til innboksen",
    desc: "Logg inn med Gmail eller Outlook. Én gang. NARA har tilgang og begynner å jobbe umiddelbart.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "NARA henter og organiserer",
    desc: "Alle fakturaer leses, kategoriseres og sorteres automatisk – etter år, måned, leverandør og prosjekt. Uten at du gjør noe.",
  },
  {
    num: "03",
    icon: LayoutDashboard,
    title: "Du har full oversikt",
    desc: "Åpne NARA og se hele økonomien din strukturert og klar. Spør NARA om hva som helst – på norsk.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Regnskapsfører godkjenner",
    desc: "Alt er klart når regnskapsfører logger inn. Ingen purring. Ingen leting. De godkjenner og eksporterer. Ferdig.",
  },
];

const HowItWorksSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">SLIK FUNGERER DET</p>
        <h2 className="section-headline mb-4">Fire steg. Null innsats.</h2>
        <p className="section-subheadline mb-16">
          Alt som skjer mellom «send» og «bokført» tar NARA seg av.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="card-landing text-left relative hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="relative mb-3">
                <span
                  className="font-extrabold"
                  style={{ fontSize: 52, color: "hsl(226 100% 97%)", lineHeight: 1 }}
                >
                  {step.num}
                </span>
                <step.icon
                  size={24}
                  className="text-primary absolute bottom-1 left-12"
                />
              </div>
              <h3 className="font-bold text-foreground mt-3" style={{ fontSize: 19 }}>
                {step.title}
              </h3>
              <p className="mt-2" style={{ fontSize: 15, color: "hsl(220 9% 46%)", lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
