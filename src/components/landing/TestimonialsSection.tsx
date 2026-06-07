import { useFadeIn } from "@/hooks/useFadeIn";

const TestimonialsSection = () => {
  const { ref, visible } = useFadeIn();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[600px] mx-auto text-center transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="font-serif italic text-primary mb-4" style={{ fontSize: 19 }}>
          De første kundene er på vei inn.
        </p>
        <h2 className="section-headline mb-6">
          Vil du være blant dem?
        </h2>
        <button onClick={() => scrollTo("signup")} className="btn-primary-pill">
          Søk om tidlig tilgang
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
