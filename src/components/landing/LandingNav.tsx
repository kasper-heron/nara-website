import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const APP_URL = "https://app.naraflow.no";

const NaraLogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="8" fill="#2563EB"/>
    <path
      d="M8 24V8L16 20V8"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 8L24 24"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

const LandingNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
      style={{ height: 64 }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 h-full">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <NaraLogo />
          <span className="text-lg font-bold tracking-tight text-slate-900">nara</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollTo("how-it-works")}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Slik fungerer det
          </button>
          <button
            onClick={() => scrollTo("features")}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Funksjoner
          </button>
          <button
            onClick={() => scrollTo("priser")}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Priser
          </button>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={APP_URL}
            className="text-sm text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            Logg inn
          </a>
          <button
            onClick={() => scrollTo("signup")}
            className="bg-[#2563EB] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors"
            style={{ padding: "9px 18px" }}
          >
            Kom i gang
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            style={{ top: 64 }}
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed right-0 top-16 bottom-0 w-72 bg-white border-l border-slate-100 z-50 md:hidden p-8 flex flex-col gap-6">
            <button onClick={() => scrollTo("how-it-works")} className="text-base text-slate-700 font-medium text-left">
              Slik fungerer det
            </button>
            <button onClick={() => scrollTo("features")} className="text-base text-slate-700 font-medium text-left">
              Funksjoner
            </button>
            <button onClick={() => scrollTo("priser")} className="text-base text-slate-700 font-medium text-left">
              Priser
            </button>
            <a href={APP_URL} className="text-base text-slate-700 font-medium" onClick={() => setMobileOpen(false)}>
              Logg inn
            </a>
            <button
              onClick={() => scrollTo("signup")}
              className="bg-[#2563EB] text-white font-semibold rounded-lg py-3 text-sm mt-2"
            >
              Kom i gang
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default LandingNav;
