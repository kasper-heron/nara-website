import { useFadeIn } from "@/hooks/useFadeIn";
import { ArrowRight } from "lucide-react";

const ProjectCategorizationSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Illustration */}
          <div className="lg:w-1/2">
            <div
              className="rounded-xl border border-border overflow-hidden"
              style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05), 0 4px 16px rgba(0,0,0,0.04)" }}
            >
              <div className="bg-background p-6">
                <p className="text-xs font-semibold text-muted-foreground mb-4">AUTOMATISK KATEGORISERING</p>
                <div className="space-y-3">
                  {[
                    { vendor: "Norwegian", category: "Reise", project: "Kundebesøk Oslo" },
                    { vendor: "Bring", category: "Logistikk", project: "Huseby-prosjektet" },
                    { vendor: "Circle K", category: "Drivstoff", project: "Feltarbeid Q1" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="font-medium text-foreground w-24">{item.vendor}</span>
                      <ArrowRight size={14} className="text-muted-foreground flex-shrink-0" />
                      <span
                        className="inline-block text-xs font-medium rounded-full px-2.5 py-0.5 bg-primary/10 text-primary"
                      >
                        {item.category}
                      </span>
                      <ArrowRight size={14} className="text-muted-foreground flex-shrink-0" />
                      <span style={{ fontSize: 13, color: "hsl(220 9% 46%)" }}>{item.project}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:w-1/2">
            <p className="section-label text-left">PROSJEKTKATEGORISERING</p>
            <h2 className="font-bold text-foreground mb-4" style={{ fontSize: 28, letterSpacing: "-0.5px" }}>
              Alt havner der det hører hjemme
            </h2>
            <p style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
              NARA knytter automatisk hver faktura til riktig prosjekt,
              kategori og periode. Huseby-prosjektet får sine fakturaer.
              Markedsføring får sine. Reise får sine.
            </p>
            <p className="mt-4" style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
              Jo mer du bruker NARA, jo smartere blir matchingen.
              NARA husker at Bring alltid er logistikk. At Norwegian
              alltid er reise. At Circle K alltid er drivstoff.
            </p>
            <p className="mt-4" style={{ fontSize: 16, color: "hsl(0 0% 29%)", lineHeight: 1.75 }}>
              Du slipper å tagge. NARA gjør det for deg – og lærer
              av hver korreksjon du gjør.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCategorizationSection;
