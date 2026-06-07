import { useFadeIn } from "@/hooks/useFadeIn";

const milestones = [
  { period: "Etter 3 måneder", text: "kjenner NARA leverandørene dine." },
  { period: "Etter 6 måneder", text: "ser den mønstre i kostnadene dine." },
  { period: "Etter 12 måneder", text: "varsler den deg om uvanlige fakturaer, abonnementer du ikke bruker, og hva som skjer med kontantstrømmen neste måned." },
];

const TimelineSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[800px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">OVER TID</p>
        <h2 className="section-headline mb-12">
          Jo lenger du bruker NARA, jo mer vet den
        </h2>

        <div className="space-y-6 text-left">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2.5" />
              <p style={{ fontSize: 17, color: "hsl(0 0% 29%)", lineHeight: 1.7 }}>
                <span className="font-semibold text-foreground">{m.period}</span> {m.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10" style={{ fontSize: 16, color: "hsl(220 9% 46%)", lineHeight: 1.7 }}>
          Ikke fordi du har konfigurert noe.
          <br />
          Fordi NARA har lært bedriften din.
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
