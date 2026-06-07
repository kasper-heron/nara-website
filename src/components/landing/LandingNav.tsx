import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const APP_URL = "https://app.naraflow.no";

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
      className={`fixed top-[44px] w-full z-40 transition-all duration-200 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border"
          : "bg-background/95 backdrop-blur-xl border-b border-muted"
      }`}
      style={{ height: 60 }}
    >
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-6 h-full">
        <span className="text-xl font-extrabold tracking-[-0.5px] text-foreground">NARA</span>

        <div className="hidden md:flex items-center gap-7">
          <button
            onClick={() => scrollTo("features")}
            className="text-sm hover:text-foreground transition-colors"
            style={{ color: "hsl(0 0% 29%)" }}
          >
            Produktet
          </button>
          <button
            onClick={() => scrollTo("priser")}
            className="text-sm hover:text-foreground transition-colors"
            style={{ color: "hsl(0 0% 29%)" }}
          >
            Priser
          </button>
          <a
            href={APP_URL}
            className="text-sm hover:text-foreground transition-colors"
            style={{ color: "hsl(0 0% 29%)" }}
          >
            Logg inn
          </a>
          <button
            onClick={() => scrollTo("signup")}
            className="bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-all"
            style={{ padding: "9px 20px" }}
          >
            Kom i gang
          </button>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-foreground/20 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            style={{ top: 104 }}
          />
          <div className="fixed right-0 top-[104px] bottom-0 w-72 bg-background border-l border-border z-50 md:hidden p-8 flex flex-col gap-6 animate-slide-in-right">
            <button onClick={() => scrollTo("features")} className="text-base text-foreground font-medium text-left">
              Produktet
            </button>
            <button onClick={() => scrollTo("priser")} className="text-base text-foreground font-medium text-left">
              Priser
            </button>
            <a href={APP_URL} className="text-base text-foreground font-medium" onClick={() => setMobileOpen(false)}>
              Logg inn
            </a>
            <button
              onClick={() => scrollTo("signup")}
              className="bg-primary text-primary-foreground font-semibold rounded-full py-3 text-sm mt-4"
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
