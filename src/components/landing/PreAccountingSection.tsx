import { useFadeIn } from "@/hooks/useFadeIn";
import { CheckCircle } from "lucide-react";

const bullets = [
  "Alle bilag sortert etter år og måned",
  "Leverandør, beløp og MVA allerede utfylt",
  "Kategori foreslått av AI",
  "Ingenting mangler",
];

const PreAccountingSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[800px] mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label text-center">FØR REGNSKAP</p>
        <h2 className="section-headline text-center mb-8">
          Det som skjer før regnskap – det er NARA
        </h2>

        <p style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
          De fleste regnskapssystemer starter der fakturaen allerede
          er inne. NARA er det som skjer før det. Vi fanger opp alt
          som kommer inn til bedriften din – fakturaer, kvitteringer,
          abonnementer – og organiserer det automatisk.
        </p>

        <p className="mt-6 font-semibold text-foreground" style={{ fontSize: 16 }}>
          Når regnskapsfører åpner NARA ser de:
        </p>

        <div className="mt-4 flex flex-col gap-2.5">
          {bullets.map((b) => (
            <div key={b} className="flex items-center gap-2.5">
              <CheckCircle size={16} className="text-primary flex-shrink-0" />
              <span style={{ fontSize: 15, color: "hsl(0 0% 29%)" }}>{b}</span>
            </div>
          ))}
        </div>

        <p className="mt-8" style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
          De godkjenner. De eksporterer til Tripletex eller Fiken.
          Ferdig. Ingen purring. Ingen leting. Ingen dobbeltarbeid.
        </p>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {[
            { who: "For bedriftseieren", what: "Null tid på bilag." },
            { who: "For regnskapsføreren", what: "Halvert arbeidstid per klient." },
            { who: "For begge", what: "Mindre stress og lavere kostnad." },
          ].map((item) => (
            <div key={item.who} className="bg-surface-alt rounded-xl p-5">
              <p className="font-semibold text-foreground" style={{ fontSize: 14 }}>{item.who}</p>
              <p className="mt-1" style={{ fontSize: 14, color: "hsl(220 9% 46%)" }}>{item.what}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreAccountingSection;
