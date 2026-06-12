import { Link } from "react-router-dom";

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <Link to="/" className="inline-flex items-center gap-2.5 select-none" aria-label="NARA – til forsiden">
    <svg width="28" height="28" viewBox="0 0 120 120" aria-hidden="true">
      <rect width="120" height="120" rx="26" fill="#2563EB" />
      <path d="M 30 88 L 30 32 L 42 32 L 78 72 L 78 32 L 90 32 L 90 88 L 78 88 L 42 48 L 42 88 Z" fill="white" />
    </svg>
    <span
      className="font-bold text-[19px] tracking-tight"
      style={{ color: dark ? "var(--night-text)" : "var(--ink)" }}
    >
      NARA
    </span>
  </Link>
);

export default Logo;
