import { Mail, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const steps = [
  {
    num: "01",
    icon: Mail,
    title: "Koble til innboksen",
    desc: "Logg inn med Gmail eller Outlook. Tar 2 minutter. NARA begynner å jobbe umiddelbart.",
  },
  {
    num: "02",
    icon: Sparkles,
    title: "AI leser og kategoriserer",
    desc: "Fakturaer, kvitteringer og bilag hentes ut automatisk. GPT-4o leser innholdet og finner riktig konto.",
  },
  {
    num: "03",
    icon: ArrowRight,
    title: "Synkroniseres med Fiken",
    desc: "Alt bokføres automatisk i Fiken. Regnskapsfører logger inn og godkjenner — uten å lete etter noe.",
  },
  {
    num: "04",
    icon: CheckCircle,
    title: "Du har full kontroll",
    desc: "Se hele økonomien i sanntid. Still NARA spørsmål på norsk. Få svar med en gang.",
  },
];

const HowItWorksSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-[#2563EB] tracking-widest uppercase mb-4">
            Slik fungerer det
          </p>
          <h2 className="font-extrabold text-slate-900" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-1.5px" }}>
            Fire steg. Null innsats.
          </h2>
          <p className="mt-4 text-slate-500 max-w-[480px] mx-auto" style={{ fontSize: 17, lineHeight: 1.7 }}>
            Alt som skjer mellom «mottatt faktura» og «bokført» håndterer NARA automatisk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <step.icon size={18} className="text-[#2563EB]" />
              </div>
              <p className="text-xs font-bold text-slate-300 mb-2">{step.num}</p>
              <h3 className="font-bold text-slate-900 mb-2" style={{ fontSize: 17 }}>
                {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed" style={{ fontSize: 14, lineHeight: 1.65 }}>
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
