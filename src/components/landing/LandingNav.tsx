import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const APP_URL = "https://app.naraflow.no";

const NaraLogo = () => (
  <img
    src="/nara-logo.svg"
    alt="NARA"
    width={36}
    height={36}
    style={{ borderRadius: 9, display: "block", objectFit: "cover" }}
  />
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
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100" : "bg-white"
      }`}
      style={{ height: 64 }}
    >
      <div className="max-w-[1160px] mx-auto flex items-center justify-between px-6 h-full">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <NaraLogo />
          <span className="text-[17px] font-bold tracking-tight" style={{ color: "#0a2540" }}>nara</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Slik fungerer det", id: "how-it-works" },
            { label: "Funksjoner", id: "features" },
            { label: "Priser", id: "priser" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium transition-colors"
              style={{ color: "#425466" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0a2540")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#425466")}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={APP_URL}
            className="text-sm font-medium transition-colors"
            style={{ color: "#425466" }}
          >
            Logg inn
          </a>
          <button
            onClick={() => scrollTo("signup")}
            className="text-sm font-semibold text-white rounded-lg transition-colors"
            style={{ padding: "9px 20px", background: "#635BFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#5144e0")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#635BFF")}
          >
            Kom i gang
          </button>
        </div>

        {/* Mobile */}
        <button className="md:hidden" style={{ color: "#0a2540" }} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" style={{ top: 64 }} onClick={() => setMobileOpen(false)} />
          <div className="fixed right-0 top-16 bottom-0 w-72 bg-white border-l border-slate-100 z-50 md:hidden p-8 flex flex-col gap-6">
            {["how-it-works", "features", "priser"].map((id) => (
              <button key={id} onClick={() => scrollTo(id)} className="text-base font-medium text-left" style={{ color: "#0a2540" }}>
                {id === "how-it-works" ? "Slik fungerer det" : id === "features" ? "Funksjoner" : "Priser"}
              </button>
            ))}
            <a href={APP_URL} className="text-base font-medium" style={{ color: "#0a2540" }}>Logg inn</a>
            <button onClick={() => scrollTo("signup")} className="text-white font-semibold rounded-lg py-3 text-sm mt-2" style={{ background: "#635BFF" }}>
              Kom i gang
            </button>
          </div>
        </>
      )}
    </nav>
  );
};

export default LandingNav;
