import { ScanLine, Folder, ShieldCheck, MessageSquare, Link2, Bell } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const features = [
  {
    icon: ScanLine,
    title: "Automatisk bilagsinnlesning",
    desc: "NARA AI leser fakturaer og kvitteringer. Leverandør, beløp, MVA og dato – alltid riktig.",
  },
  {
    icon: Folder,
    title: "Strukturert arkiv",
    desc: "Bilag sorteres automatisk etter år og måned. Alltid søkbart og ryddig.",
  },
  {
    icon: ShieldCheck,
    title: "Duplikatkontroll",
    desc: "Sender du samme faktura to ganger? NARA oppdager det automatisk og logger duplikaten.",
  },
  {
    icon: MessageSquare,
    title: "AI-regnskapsassistent",
    desc: "Still spørsmål på norsk og få svar fra dine egne regnskapsdata i sanntid.",
  },
  {
    icon: Link2,
    title: "Tripletex & Fiken",
    desc: "Eksporter direkte til Tripletex eller Fiken. Kommer snart.",
    coming: true,
  },
  {
    icon: Bell,
    title: "Cashflow-varsler",
    desc: "Bli varslet automatisk når likviditeten er i fare. Kommer snart.",
    coming: true,
  },
];

const FeaturesSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section id="funksjoner" className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">FUNKSJONER</p>
        <h2 className="section-headline mb-16">Alt du trenger</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="card-landing text-left hover:-translate-y-1 transition-transform duration-200"
            >
              <f.icon size={20} className="text-primary" />
              <h3 className="font-bold text-foreground mt-4" style={{ fontSize: 16 }}>
                {f.title}
                {f.coming && (
                  <span
                    className="inline-block ml-2 text-xs font-medium rounded-full px-2 py-0.5 bg-muted text-muted-foreground"
                  >
                    Kommer snart
                  </span>
                )}
              </h3>
              <p className="mt-2" style={{ fontSize: 14, color: "hsl(220 9% 46%)", lineHeight: 1.6 }}>
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
