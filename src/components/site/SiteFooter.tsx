import { Link } from "react-router-dom";
import Logo from "./Logo";

const SiteFooter = () => (
  <footer style={{ background: "var(--paper)", borderTop: "1px solid var(--line)" }}>
    <div className="max-w-[1180px] mx-auto px-5 md:px-6 py-14">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div className="max-w-[300px]">
          <Logo />
          <p className="body-md mt-4 text-[14px]">
            AI-drevet regnskapsautomatisering for norske små og mellomstore bedrifter.
          </p>
        </div>

        <div className="flex gap-16 flex-wrap">
          <div>
            <p className="font-data text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "var(--ink-mute)" }}>
              Produkt
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/how-it-works" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Slik fungerer det</Link></li>
              <li><Link to="/pricing" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Priser</Link></li>
              <li><a href="https://app.naraflow.no/logg-inn" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Logg inn</a></li>
            </ul>
          </div>
          <div>
            <p className="font-data text-[11px] uppercase tracking-[0.14em] mb-4" style={{ color: "var(--ink-mute)" }}>
              Selskap
            </p>
            <ul className="space-y-2.5 text-[14px]">
              <li><Link to="/personvern" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Personvern</Link></li>
              <li><Link to="/vilkar" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Vilkår</Link></li>
              <li><a href="mailto:hei@naraflow.no" className="hover:underline" style={{ color: "var(--ink-soft)" }}>Kontakt</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="mt-12 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3"
        style={{ borderTop: "1px solid var(--line)" }}
      >
        <p className="font-data text-[12px]" style={{ color: "var(--ink-mute)" }}>
          © {new Date().getFullYear()} NARA · naraflow.no
        </p>
        <p className="font-data text-[12px]" style={{ color: "var(--ink-mute)" }}>
          Laget i Norge
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
