import { Link } from "react-router-dom";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const NaraLogo = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#2563EB"/>
    <path d="M8 24V8L16 20V8" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 8L24 24" stroke="white" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const LandingFooter = () => (
  <footer className="border-t border-slate-100 bg-white" style={{ padding: "56px 24px 40px" }}>
    <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      {/* Brand */}
      <div className="md:col-span-2">
        <div className="flex items-center gap-2.5 mb-3">
          <NaraLogo />
          <span className="font-bold text-slate-900 text-lg">nara</span>
        </div>
        <p className="text-slate-400 text-sm max-w-[280px] leading-relaxed">
          Automatisk bilagsbehandling og pre-regnskap for norske småbedrifter.
        </p>
        <p className="mt-6 text-slate-300 text-xs">
          © 2026 NARA AS · hei@naraflow.no
        </p>
      </div>

      {/* Produkt */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Produkt
        </p>
        <div className="flex flex-col gap-3">
          <button onClick={() => scrollTo("how-it-works")} className="text-left text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Slik fungerer det
          </button>
          <button onClick={() => scrollTo("features")} className="text-left text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Funksjoner
          </button>
          <button onClick={() => scrollTo("priser")} className="text-left text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Priser
          </button>
        </div>
      </div>

      {/* Firma */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          Firma
        </p>
        <div className="flex flex-col gap-3">
          <a href="mailto:hei@naraflow.no" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Kontakt oss
          </a>
          <a href="https://app.naraflow.no" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Logg inn
          </a>
          <Link to="/personvern" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
            Personvern
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
