import { useState } from "react";
import { Check } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const plans = [
  {
    name: "Starter",
    tagline: "For deg som er i gang",
    price: 399,
    features: [
      "Inntil 50 bilag per måned",
      "AI-bilagsinnlesning",
      "Automatisk arkivering",
      "E-poststøtte",
      "1 bruker",
    ],
    cta: "Kom i gang",
    popular: false,
  },
  {
    name: "Vekst",
    tagline: "For bedriften som vokser",
    price: 990,
    features: [
      "Ubegrenset bilag",
      "AI-assistent (chat med regnskapet)",
      "Duplikatkontroll",
      "Prioritert support",
      "3 brukere",
      "Tripletex/Fiken-integrasjon (kommer snart)",
    ],
    cta: "Kom i gang",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For større team med høyt volum, API-tilgang og flere brukere",
    price: 2990,
    pricePrefix: "Fra ",
    features: [
      "Alt i Vekst",
      "Dedikert onboarding",
      "Tilpasset oppsett",
      "SLA-garanti",
      "API-tilgang",
      "Ubegrenset brukere",
    ],
    cta: "Ta kontakt",
    popular: false,
  },
];

const PricingSection = () => {
  const { ref, visible } = useFadeIn();
  const [annual, setAnnual] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const getPrice = (price: number) => {
    return annual ? Math.round(price * 0.8) : price;
    return annual ? Math.round(price * 0.8) : price;
  };

  return (
    <section id="priser" className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">PRISER</p>
        <h2 className="section-headline mb-3">Enkel og forutsigbar prising</h2>
        <p className="section-subheadline mb-10">
          Ingen skjulte kostnader. Avslutt når du vil.
        </p>

        {/* Toggle */}
        <div className="inline-flex items-center rounded-full border border-border bg-background p-1 mb-14">
          <button
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
              !annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setAnnual(false)}
          >
            Månedlig
          </button>
          <button
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
              annual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setAnnual(true)}
          >
            Årlig (−20%)
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => {
            const price = getPrice(plan.price);
            return (
              <div
                key={i}
                className="relative bg-card text-left"
                style={{
                  border: plan.popular ? "2px solid hsl(217 91% 53%)" : "1px solid hsl(220 13% 91%)",
                  borderRadius: 20,
                  padding: 40,
                  boxShadow: plan.popular
                    ? "0 8px 32px rgba(37,99,235,0.12)"
                    : "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="bg-primary text-primary-foreground font-semibold rounded-full"
                      style={{ fontSize: 11, padding: "4px 12px" }}
                    >
                      Mest populær
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-foreground" style={{ fontSize: 20 }}>
                  {plan.name}
                </h3>
                <p className="mt-1 mb-6" style={{ fontSize: 14, color: "hsl(220 9% 46%)" }}>
                  {plan.tagline}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    {plan.pricePrefix && (
                      <span className="text-muted-foreground text-sm">{plan.pricePrefix}</span>
                    )}
                    <span className="font-extrabold text-foreground" style={{ fontSize: 40 }}>
                      {price}
                    </span>
                    <span className="text-muted-foreground text-sm">kr/mnd</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5" style={{ fontSize: 14, color: "hsl(0 0% 29%)" }}>
                      <Check size={14} className="text-primary flex-shrink-0 mt-1" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("signup")}
                  className={`w-full rounded-full font-semibold text-sm transition-all py-3 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "btn-secondary-pill"
                  }`}
                  style={!plan.popular ? { padding: "12px 0" } : {}}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-muted-foreground mt-10" style={{ fontSize: 12 }}>
          Alle planer inkluderer 14 dagers gratis prøveperiode. Ingen kredittkort kreves.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
