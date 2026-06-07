import { useFadeIn } from "@/hooks/useFadeIn";

const integrations = [
  { name: "Gmail", coming: false },
  { name: "Outlook", coming: false },
  { name: "Tripletex", coming: true },
  { name: "Fiken", coming: true },
];

const IntegrationsSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">INTEGRASJONER</p>
        <h2 className="section-headline mb-12">Kobler seg til verktøyene dine</h2>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          {integrations.map((int) => (
            <span
              key={int.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-alt font-medium"
              style={{ padding: "12px 24px", fontSize: 15, color: int.coming ? "hsl(218 11% 65%)" : "hsl(var(--foreground))" }}
            >
              {int.name}
              {int.coming ? (
                <span className="text-xs rounded-full px-2 py-0.5 font-medium bg-muted text-muted-foreground">
                  Snart
                </span>
              ) : (
                <span
                  className="text-xs rounded-full px-2 py-0.5 font-medium"
                  style={{ background: "hsl(141 79% 93%)", color: "hsl(142 72% 29%)" }}
                >
                  Tilgjengelig nå
                </span>
              )}
            </span>
          ))}
        </div>

        <p className="text-muted-foreground mt-6" style={{ fontSize: 13 }}>
          Tripletex- og Fiken-integrasjon kommer snart.
        </p>
      </div>
    </section>
  );
};

export default IntegrationsSection;
