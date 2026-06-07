const FinalCTASection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="text-center"
      style={{ background: "hsl(222 47% 11%)", padding: "100px 24px" }}
    >
      <p className="font-serif italic" style={{ fontSize: 22, color: "hsl(213 93% 78%)" }}>
        Økonomi. Autopilot.
      </p>
      <h2
        className="font-extrabold mt-4"
        style={{ fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-2px", color: "#FFFFFF" }}
      >
        Klar til å slutte å lete etter bilag?
      </h2>
      <p className="mt-4" style={{ fontSize: 18, color: "hsl(215 20% 65%)" }}>
        Sett opp NARA på 2 minutter. Neste gang regnskapsfører spør etter bilag – er alt allerede der.
      </p>
      <button
        onClick={() => scrollTo("signup")}
        className="mt-10 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-all"
        style={{ padding: "16px 36px", fontSize: 17 }}
      >
        Søk om tidlig tilgang →
      </button>
      <p className="mt-4" style={{ fontSize: 12, color: "hsl(215 19% 35%)" }}>
        Ingen binding · Ingen kredittkort · Avbryt når som helst
      </p>
    </section>
  );
};

export default FinalCTASection;
