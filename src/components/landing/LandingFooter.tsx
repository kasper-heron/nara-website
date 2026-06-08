import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const LandingFooter = () => (
  <footer style={{ background: "hsl(222 47% 11%)", borderTop: "1px solid hsl(217 33% 17%)", padding: "56px 24px 40px" }}>
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <span className="font-extrabold text-xl" style={{ color: "#FFFFFF" }}>NARA</span>
        <p className="mt-2" style={{ fontSize: 14, color: "hsl(215 16% 47%)" }}>
          Det finansielle operativsystemet for norske SMB-er.
        </p>
        <p className="mt-5" style={{ fontSize: 12, color: "hsl(215 19% 35%)" }}>
          © 2026 NARA AS
        </p>
      </div>

      <div>
        <p className="uppercase font-medium mb-3" style={{ fontSize: 11, letterSpacing: "0.08em", color: "hsl(215 19% 35%)" }}>
          Produkt
        </p>
        <div className="flex flex-col gap-2.5">
          <button onClick={() => scrollTo("features")} className="text-left text-sm hover:text-white transition-colors" style={{ color: "hsl(215 16% 47%)" }}>
            Produktet
          </button>
          <button onClick={() => scrollTo("priser")} className="text-left text-sm hover:text-white transition-colors" style={{ color: "hsl(215 16% 47%)" }}>
            Priser
          </button>
          <Link to="/logg-inn" className="text-sm hover:text-white transition-colors" style={{ color: "hsl(215 16% 47%)" }}>
            Logg inn
          </Link>
        </div>
      </div>

      <div>
        <p className="uppercase font-medium mb-3" style={{ fontSize: 11, letterSpacing: "0.08em", color: "hsl(215 19% 35%)" }}>
          Kontakt
        </p>
        <a
          href="mailto:hei@naraflow.no"
          className="text-sm hover:text-white transition-colors"
          style={{ color: "hsl(215 16% 47%)" }}
        >
          hei@naraflow.no
        </a>
        <div className="mt-4">
          <Link to="/personvern" className="text-sm hover:text-white transition-colors" style={{ color: "hsl(215 16% 47%)" }}>
            Personvernerklæring
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
