import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const LINKS = [
  { to: "/how-it-works", label: "Slik fungerer det" },
  { to: "/pricing", label: "Priser" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled || open ? "rgba(250, 250, 247, 0.85)" : "transparent",
        backdropFilter: scrolled || open ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || open ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled || open ? "var(--line)" : "transparent"}`,
      }}
    >
      <nav className="max-w-[1180px] mx-auto px-5 md:px-6 h-[64px] flex items-center justify-between">
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="px-3.5 py-2 rounded-lg text-[14.5px] font-medium transition-colors"
              style={{ color: pathname === to ? "var(--ink)" : "var(--ink-soft)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = pathname === to ? "var(--ink)" : "var(--ink-soft)")}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <a href="https://app.naraflow.no/logg-inn" className="btn btn-ghost btn-sm">
            Logg inn
          </a>
          <Link to="/signup" className="btn btn-ink btn-sm">
            Kom i gang
          </Link>
        </div>

        {/* Mobil */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          style={{ color: "var(--ink)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-5 pb-5 pt-1 flex flex-col gap-1" style={{ borderTop: "1px solid var(--line)" }}>
          {LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="py-3 text-[16px] font-medium" style={{ color: "var(--ink)" }}>
              {label}
            </Link>
          ))}
          <div className="flex gap-2.5 mt-3">
            <a href="https://app.naraflow.no/logg-inn" className="btn btn-ghost flex-1">
              Logg inn
            </a>
            <Link to="/signup" className="btn btn-ink flex-1">
              Kom i gang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
