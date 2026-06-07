import { Lock, Globe, KeyRound, Shield, Eye } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const items = [
  {
    icon: Lock,
    emoji: "🔒",
    title: "Bankgrad kryptering",
    desc: "All data krypteres i overføring og i ro. Dine dokumenter er aldri tilgjengelige for andre.",
  },
  {
    icon: Globe,
    emoji: "🇪🇺",
    title: "Data lagres i Europa",
    desc: "Alle data lagres på servere i EU, i henhold til norsk og europeisk lovgivning.",
  },
  {
    icon: KeyRound,
    emoji: "🔐",
    title: "Du eier dataene dine",
    desc: "Du kan eksportere eller slette all data når som helst. Ingen bindingstid – ingen gisler.",
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "GDPR-compliant",
    desc: "NARA følger GDPR fullt ut. Vi selger aldri data og deler aldri informasjon med tredjeparter.",
  },
  {
    icon: Eye,
    emoji: "👁️",
    title: "Full sporbarhet",
    desc: "Alle handlinger i NARA er loggført. Du ser alltid hvem som har sett og gjort hva.",
  },
];

const SecuritySection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">SIKKERHET</p>
        <h2 className="section-headline mb-4">
          Du gir oss tilgang til noe viktig.
          <br />
          Vi tar det på alvor.
        </h2>
        <p className="section-subheadline mb-16">
          NARA håndterer bedriftens finansielle dokumenter. Det er sensitiv informasjon – og vi behandler den deretter.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`card-landing text-left hover:-translate-y-1 transition-transform duration-200 ${
                i >= 3 ? "sm:col-span-1" : ""
              }`}
            >
              <span style={{ fontSize: 24 }}>{item.emoji}</span>
              <h3 className="font-bold text-foreground mt-3" style={{ fontSize: 16 }}>
                {item.title}
              </h3>
              <p className="mt-2" style={{ fontSize: 14, color: "hsl(220 9% 46%)", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
