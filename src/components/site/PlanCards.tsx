import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

export const PLANS = [
  {
    name: "Starter",
    tagline: "For deg som er i gang",
    price: 399,
    features: [
      "Inntil 50 bilag per måned",
      "Gmail og Outlook støttet",
      "AI-lesing av PDF-vedlegg",
      "Kontering etter NS 4102",
      "1 bruker",
    ],
    cta: "Kom i gang",
    to: "/signup",
    popular: false,
  },
  {
    name: "Vekst",
    tagline: "For bedriften som vokser",
    price: 799,
    features: [
      "Ubegrenset antall bilag",
      "To-veis sync med regnskapssystemet",
      "EHF-fakturaer inn automatisk",
      "AI-assistent – chat med regnskapet",
      "Duplikatkontroll og valutaomregning",
      "3 brukere · prioritert support",
    ],
    cta: "Kom i gang",
    to: "/signup",
    popular: true,
  },
  {
    name: "Enterprise",
    tagline: "For team med høyt volum",
    price: 2490,
    pricePrefix: "fra ",
    features: [
      "Alt i Vekst",
      "Dedikert onboarding",
      "Tilpasset oppsett og kontoplan",
      "SLA-garanti og API-tilgang",
      "Ubegrenset antall brukere",
    ],
    cta: "Ta kontakt",
    to: "mailto:hei@naraflow.no",
    popular: false,
  },
];

const PlanCards = ({ annual }: { annual: boolean }) => (
  <div className="grid md:grid-cols-3 gap-4 items-stretch">
    {PLANS.map((plan, i) => {
      const price = annual ? Math.round(plan.price * 0.8) : plan.price;
      const external = plan.to.startsWith("mailto:");
      const Cta = external ? "a" : Link;
      return (
        <Reveal key={plan.name} delay={i * 90} className="h-full">
          <div
            className="relative flex flex-col h-full rounded-2xl p-7"
            style={{
              background: plan.popular ? "var(--night)" : "var(--paper-raised)",
              border: plan.popular ? "1px solid var(--night)" : "1px solid var(--line)",
              boxShadow: plan.popular ? "0 24px 56px -20px rgba(11,14,20,0.45)" : "none",
            }}
          >
            {plan.popular && (
              <span
                className="absolute -top-3 left-7 font-data text-[10.5px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full"
                style={{ background: "var(--blue)", color: "#fff" }}
              >
                Mest valgt
              </span>
            )}

            <p className="text-[17px] font-bold" style={{ color: plan.popular ? "var(--night-text)" : "var(--ink)" }}>
              {plan.name}
            </p>
            <p className="text-[13.5px] mt-0.5" style={{ color: plan.popular ? "var(--night-soft)" : "var(--ink-mute)" }}>
              {plan.tagline}
            </p>

            <div className="flex items-baseline gap-1.5 mt-5 mb-6">
              {plan.pricePrefix && (
                <span className="text-[14px]" style={{ color: plan.popular ? "var(--night-soft)" : "var(--ink-mute)" }}>
                  {plan.pricePrefix}
                </span>
              )}
              <span
                className="font-data text-[36px] font-semibold tracking-tight"
                style={{ color: plan.popular ? "var(--night-text)" : "var(--ink)" }}
              >
                {price}
              </span>
              <span className="text-[14px]" style={{ color: plan.popular ? "var(--night-soft)" : "var(--ink-mute)" }}>
                kr/mnd
              </span>
            </div>

            <ul className="space-y-2.5 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]" style={{ color: plan.popular ? "var(--night-soft)" : "var(--ink-soft)" }}>
                  <Check size={15} strokeWidth={2.5} className="mt-[3px] shrink-0" style={{ color: "var(--blue)" }} />
                  {f}
                </li>
              ))}
            </ul>

            <Cta
              {...(external ? { href: plan.to } : { to: plan.to })}
              className={`btn mt-auto w-full ${plan.popular ? "btn-blue" : "btn-ghost"}`}
            >
              {plan.cta}
            </Cta>
          </div>
        </Reveal>
      );
    })}
  </div>
);

export default PlanCards;
