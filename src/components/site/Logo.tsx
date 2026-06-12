import { Link } from "react-router-dom";

/** NARA-merket: diagonal kapsel + to bladformer, vektorisert fra original-logoen. */
export const LogoMark = ({ size = 26, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size * (450 / 488)} viewBox="0 0 488 450" aria-hidden="true" style={{ color }}>
    <g fill="currentColor">
      <path d="M405 4 L406 4 A68 68 0 0 1 474 72 L474 227 A8 8 0 0 1 466 235 L457 235 A120 107 0 0 1 337 128 L337 72 A68 68 0 0 1 405 4 Z" />
      <path
        d="M405 4 L406 4 A68 68 0 0 1 474 72 L474 227 A8 8 0 0 1 466 235 L457 235 A120 107 0 0 1 337 128 L337 72 A68 68 0 0 1 405 4 Z"
        transform="rotate(180 244 223.5)"
      />
      <path d="M88 74 L405 373" stroke="currentColor" strokeWidth="140" strokeLinecap="round" fill="none" />
    </g>
  </svg>
);

const Logo = ({ dark = false }: { dark?: boolean }) => (
  <Link to="/" className="inline-flex items-center gap-2.5 select-none" aria-label="NARA – til forsiden">
    <LogoMark color={dark ? "#FFFFFF" : "var(--ink)"} />
    <span
      className="font-bold text-[19px] tracking-tight"
      style={{ color: dark ? "var(--night-text)" : "var(--ink)" }}
    >
      NARA
    </span>
  </Link>
);

export default Logo;
