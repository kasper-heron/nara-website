import { Mail, Layers, MessageCircle, History, TrendingUp } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const items = [
  {
    icon: Mail,
    title: "Kobler til alle innboksene dine",
    desc: "Gmail, Outlook eller begge. NARA overvåker og henter fakturaer automatisk – du gjør ingenting.",
  },
  {
    icon: Layers,
    title: "Organiserer alt fra dag én",
    desc: "Alle bilag havner automatisk i riktig år, måned og prosjekt. Alltid strukturert. Aldri kaos.",
  },
  {
    icon: MessageCircle,
    title: "Hent hva som helst via chat",
    desc: "Spør NARA direkte: «Finn alle fakturaer fra Telenor i Q1» eller «Hva forfaller neste uke?» – og få svaret på sekunder.",
  },
  {
    icon: History,
    title: "Importer historikken din",
    desc: "Ny kunde? Be NARA hente alle tidligere fakturaer fra innboksen din og sortere dem med én gang. Full historikk fra dag én.",
  },
  {
    icon: TrendingUp,
    title: "Full finansiell kontroll over tid",
    desc: "Jo lenger du bruker NARA, jo smartere blir den. Etter 12 måneder kjenner NARA bedriften din bedre enn noen regnskapsrapport.",
  },
];

const NaraDoesAllSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">PLATTFORMEN</p>
        <h2 className="section-headline mb-16">NARA gjør alt</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <div
              key={i}
              className={`card-landing text-left hover:-translate-y-1 transition-transform duration-200 ${
                i >= 3 ? "sm:col-span-1" : ""
              }`}
            >
              <item.icon size={22} className="text-primary" />
              <h3 className="font-bold text-foreground mt-4" style={{ fontSize: 17 }}>
                {item.title}
              </h3>
              <p className="mt-2" style={{ fontSize: 15, color: "hsl(220 9% 46%)", lineHeight: 1.65 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NaraDoesAllSection;
