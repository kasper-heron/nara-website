import { Mail, Clock, AlertTriangle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const painPoints = [
  {
    icon: Mail,
    title: "Fakturaer forsvinner i innboksen",
    desc: "De ligger der til regnskapsfører maser. Og da er det kaos.",
  },
  {
    icon: Clock,
    title: "Du har ikke tid til å gjøre det manuelt",
    desc: "Å taste inn bilag er bortkastet tid. Du burde fokusere på å drive bedriften.",
  },
  {
    icon: AlertTriangle,
    title: "Du mister cashflow-oversikten",
    desc: "Du vet ikke nøyaktig hva som er betalt, hva som forfaller, eller hva du har råd til.",
  },
  {
    icon: Mail,
    title: "Regnskapsføreren maser – fordi de må",
    desc: "De trenger bilagene for å gjøre jobben sin. NARA gjør at alt er der allerede – uten at noen trenger å spørre.",
  },
];

const ProblemSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left */}
          <div className="lg:w-1/2">
            <p className="section-label">PROBLEMET</p>
            <h2 className="section-headline mb-5">
              Regnskap er tidkrevende.
              <br />
              Det burde det ikke være.
            </h2>
            <p className="leading-relaxed max-w-[460px] mt-5" style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.7 }}>
              Du driver en bedrift. Ikke et regnskapskontor. Likevel bruker du timer på å finne fakturaer,
              sende vedlegg til regnskapsfører og svare på spørsmål du egentlig ikke vet svaret på.
            </p>
            <div className="mt-8 border-l-[3px] border-primary pl-5">
              <p className="italic" style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.6 }}>
                "Jeg brukte 4 timer i måneden på å sortere bilag. Med NARA er det null."
              </p>
              <p className="mt-2" style={{ fontSize: 13, color: "hsl(220 9% 46%)" }}>
                — Erik Andersen, Berg Transport AS
              </p>
            </div>
          </div>

          {/* Right – pain point cards */}
          <div className="lg:w-1/2 flex flex-col gap-3">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="bg-surface-alt rounded-xl p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-start gap-4">
                  <p.icon size={18} className="text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-foreground" style={{ fontSize: 16 }}>
                      {p.title}
                    </p>
                    <p className="mt-1" style={{ fontSize: 14, color: "hsl(220 9% 46%)", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
