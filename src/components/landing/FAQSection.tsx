import { useFadeIn } from "@/hooks/useFadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Må jeg sende fakturaer manuelt?",
    a: "Nei. NARA kobler seg direkte til Gmail eller Outlook og fanger opp fakturaer automatisk. Du trenger aldri sende noe manuelt.",
  },
  {
    q: "Bruker dere EHF/PEPPOL?",
    a: "NARA jobber ikke mot EHF-nettet. I stedet fanger vi opp fakturaer direkte fra e-posten din – slik leverandørene dine allerede sender dem. Du trenger ikke endre noe.",
  },
  {
    q: "Hva skjer med bilagene mine?",
    a: "Alle bilag lagres trygt i NARA, kryptert og GDPR-compliant. Du og regnskapsføreren din har alltid full tilgang.",
  },
  {
    q: "Trenger regnskapsføreren min å bytte system?",
    a: "Nei. NARA gir regnskapsføreren din lesetilgang til alle bilag, sortert og klart. De bruker fortsatt sitt eget system.",
  },
  {
    q: "Hva om jeg allerede bruker Tripletex eller Fiken?",
    a: "NARA fungerer side om side med disse. Integrasjon kommer snart – da synkroniseres bilagene automatisk.",
  },
  {
    q: "Er det bindingstid?",
    a: "Ingen binding. Du kan avslutte når som helst. Alle planer inkluderer 14 dagers gratis prøveperiode.",
  },
];

const FAQSection = () => {
  const { ref, visible } = useFadeIn();

  return (
    <section className="landing-section bg-background">
      <div
        ref={ref}
        className={`max-w-[700px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="section-label">SPØRSMÅL OG SVAR</p>
        <h2 className="section-headline mb-12">Ofte stilte spørsmål</h2>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger
                className="text-foreground hover:no-underline"
                style={{ fontSize: 16 }}
              >
                {faq.q}
              </AccordionTrigger>
              <AccordionContent
                style={{ fontSize: 15, color: "hsl(220 9% 46%)", lineHeight: 1.65 }}
              >
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
