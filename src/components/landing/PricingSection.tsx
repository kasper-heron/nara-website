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
      "Gmail og Outlook",
      "1 bruker",
    ],
    cta: "Kom i gang",
    popular: false,
  },
  {
    name: "Vekst",
    tagline: "For bedriften som vokser",
    price: 799,
    features: [
      "Ubegrenset bilag",
      "AI-assistent (chat med regnskapet)",
      "Fiken-integrasjon",
      "Duplikatkontroll",
      "Prioritert support",
      "3 brukere",
    ],
    cta: "Kom i gang",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For større team med høyt volum",
    price: 2490,
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

  const getPrice = (price: number) => annual ? Math.round(price * 0.8) : price;

  return (
    <section id="priser" className="py-24" style={{ background: "#f8fafc" }}>
      <div
        ref={ref}
        className={`max-w-[1100px] mx-auto px-6 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#2563EB] tracking-widest uppercase mb-4">
            Priser
          </p>
          <h2 className="font-extrabold text-slate-900" style={{ fontSize: "clamp(32px, 4vw, 48px)", letterSpacing: "-1.5px" }}>
            Enkel og forutsigbar prising
          </h2>
          <p className="mt-4 text-slate-500" style={{ fontSize: 17 }}>
            Ingen skjulte kostnader. Avslutt når du vil.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1">
            <button
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                !annual ? "bg-[#2563EB] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
              onClick={() => setAnnual(false)}
            >
              Månedlig
            </button>
            <button
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                annual ? "bg-[#2563EB] text-white shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
              onClick={() => setAnnual(true)}
            >
              Årlig <span className="text-xs opacity-80">−20%</span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => {
            const price = getPrice(plan.price);
            return (
              <div
                key={i}
                className="relative bg-white rounded-2xl text-left"
                style={{
                  border: plan.popular ? "2px solid #2563EB" : "1px solid #e2e8f0",
                  padding: 36,
                  boxShadow: plan.popular
                    ? "0 8px 40px rgba(37,99,235,0.15)"
                    : "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className="bg-[#2563EB] text-white font-semibold rounded-full text-xs"
                      style={{ padding: "4px 14px" }}
                    >
                      Mest populær
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-slate-900 text-lg">{plan.name}</h3>
                <p className="mt-1 mb-6 text-slate-400 text-sm">{plan.tagline}</p>

                <div className="mb-7">
                  <div className="flex items-baseline gap-1">
                    {plan.pricePrefix && (
                      <span className="text-slate-400 text-sm">{plan.pricePrefix}</span>
                    )}
                    <span className="font-extrabold text-slate-900" style={{ fontSize: 42 }}>
                      {price}
                    </span>
                    <span className="text-slate-400 text-sm">kr/mnd</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <Check size={14} className="text-[#2563EB] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => plan.cta === "Ta kontakt"
                    ? window.location.href = "mailto:hei@naraflow.no"
                    : scrollTo("signup")
                  }
                  className={`w-full rounded-lg font-semibold text-sm transition-all py-3 ${
                    plan.popular
                      ? "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
                      : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-slate-400 text-center mt-8" style={{ fontSize: 13 }}>
          Alle planer inkluderer 14 dagers gratis prøveperiode. Ingen kredittkort kreves.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
