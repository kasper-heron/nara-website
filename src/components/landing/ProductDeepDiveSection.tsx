import { useFadeIn } from "@/hooks/useFadeIn";

const chatExamples = [
  "«Hva har vi brukt totalt på reise i år?»",
  "«Finn fakturaen fra Norwegian i mars»",
  "«Hvilke abonnementer fornyes neste måned?»",
  "«Hva er vår største kostnad i Q2?»",
  "«Hent alle fakturaer fra 2024 og sorter dem»",
];

const ProductDeepDiveSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background" id="features">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-16">
          <p className="section-label">NARA AI</p>
          <h2 className="section-headline">Snakk med økonomien din</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Chat visual */}
          <div className="lg:w-1/2">
            <div
              className="rounded-xl border border-border overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="bg-background p-6">
                <div className="flex items-center gap-2 mb-5">
                  <span className="font-bold text-foreground text-sm">NARA AI</span>
                  <span className="w-2 h-2 rounded-full bg-success" />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 text-sm max-w-[85%]">
                      Hva har vi brukt totalt på reise i år?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-2.5 text-sm max-w-[85%]">
                      Dere har brukt <strong>47 320 kr</strong> på reise hittil i år, fordelt på 12 fakturaer. Største leverandør er <strong>Norwegian</strong> med 28 400 kr.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-2.5 text-sm max-w-[85%]">
                      Hvilke abonnementer fornyes neste måned?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-muted text-foreground rounded-2xl rounded-bl-md px-4 py-2.5 text-sm max-w-[85%]">
                      3 abonnementer fornyes: <strong>Adobe</strong> (599 kr), <strong>Slack</strong> (1 200 kr) og <strong>Google Workspace</strong> (840 kr).
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <p style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
              NARA kjenner alle fakturaer, alle leverandører og
              alle tall i bedriften din. Still spørsmål på norsk
              og få svar umiddelbart.
            </p>
            <p className="mt-5 font-semibold text-foreground" style={{ fontSize: 15 }}>
              Eksempler på hva du kan spørre om:
            </p>
            <ul className="mt-3 space-y-2">
              {chatExamples.map((ex, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">–</span>
                  <span style={{ fontSize: 15, color: "hsl(0 0% 29%)" }}>{ex}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5" style={{ fontSize: 15, color: "hsl(220 9% 46%)", lineHeight: 1.65 }}>
              NARA svarer med tall fra din faktiske økonomi – ikke gjetninger.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDeepDiveSection;
