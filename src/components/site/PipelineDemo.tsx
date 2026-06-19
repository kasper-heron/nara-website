import { Mail, ScanText, BookOpenCheck, Check } from "lucide-react";

/**
 * Hero-demoen: én faktura sin reise fra innboks til Fiken,
 * animert i en rolig 12-sekunders loop (CSS, se index.css).
 */

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="font-data text-[10px] uppercase tracking-[0.12em] mb-1" style={{ color: "var(--ink-mute)" }}>
      {label}
    </p>
    <p className="font-data text-[12.5px] font-medium" style={{ color: "var(--ink)" }}>
      {value}
    </p>
  </div>
);

const StageIcon = ({ icon: Icon, done = false }: { icon: typeof Mail; done?: boolean }) => (
  <div
    className="w-8 h-8 rounded-[9px] flex items-center justify-center shrink-0"
    style={{
      background: done ? "var(--blue)" : "var(--blue-soft)",
      color: done ? "#fff" : "var(--blue)",
    }}
  >
    <Icon size={15} strokeWidth={2} />
  </div>
);

const PipelineDemo = () => (
  <div
    className="rounded-2xl overflow-hidden"
    style={{
      background: "var(--paper-raised)",
      border: "1px solid var(--line)",
      boxShadow: "0 1px 2px rgba(16,20,24,0.04), 0 24px 64px -16px rgba(16,20,24,0.14)",
    }}
  >
    {/* Vinduskrom */}
    <div
      className="flex items-center gap-2 px-4 py-3"
      style={{ borderBottom: "1px solid var(--line-soft)", background: "var(--paper)" }}
    >
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E4E2DB" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E4E2DB" }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#E4E2DB" }} />
      <span className="ml-2 font-data text-[11.5px]" style={{ color: "var(--ink-mute)" }}>
        app.naraflow.no
      </span>
      <span className="ml-auto inline-flex items-center gap-2 font-data text-[11px] font-medium" style={{ color: "var(--blue)" }}>
        <span className="dot-live w-1.5 h-1.5 rounded-full" style={{ background: "var(--blue)" }} />
        Overvåker innboksen
      </span>
    </div>

    {/* Fremdriftslinje for loopen */}
    <div className="h-[2px]" style={{ background: "var(--line-soft)" }}>
      <div className="pipe-bar h-full w-full" style={{ background: "var(--blue)" }} />
    </div>

    <div className="p-5 space-y-3">
      {/* 1 · E-post ankommer */}
      <div className="pipe-stage pipe-1 card-line flex items-center gap-3 px-4 py-3" style={{ borderRadius: 12 }}>
        <StageIcon icon={Mail} />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-semibold truncate">Ny faktura i innboksen</p>
          <p className="font-data text-[11.5px] truncate" style={{ color: "var(--ink-mute)" }}>
            faktura@telia.no · vedlegg: 2026-04-1182.pdf
          </p>
        </div>
        <span className="font-data text-[11px] shrink-0" style={{ color: "var(--ink-mute)" }}>09:42</span>
      </div>

      {/* 2 · AI leser PDF-en */}
      <div className="pipe-stage pipe-2 card-line px-4 py-3.5" style={{ borderRadius: 12 }}>
        <div className="flex items-center gap-3 mb-3">
          <StageIcon icon={ScanText} />
          <p className="text-[13.5px] font-semibold">NARA leser PDF-en</p>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 pl-11">
          <Field label="Leverandør" value="Telia Norge AS" />
          <Field label="Beløp" value="1 249,00 NOK" />
          <Field label="Fakturanr" value="2026-04-1182" />
          <Field label="Forfall" value="28.06.2026" />
        </div>
      </div>

      {/* 3 · Kontering */}
      <div className="pipe-stage pipe-3 card-line flex items-center gap-3 px-4 py-3" style={{ borderRadius: 12 }}>
        <StageIcon icon={BookOpenCheck} />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-semibold">Kontert etter NS 4102</p>
          <p className="font-data text-[11.5px] truncate" style={{ color: "var(--ink-mute)" }}>
            6900 Telefon/internett · MVA 25 % · duplikatsjekk OK
          </p>
        </div>
      </div>

      {/* 4 · Klar i Fiken */}
      <div
        className="pipe-stage pipe-4 flex items-center gap-3 px-4 py-3"
        style={{
          borderRadius: 12,
          background: "var(--blue-soft)",
          border: "1px solid var(--blue-line)",
        }}
      >
        <StageIcon icon={Check} done />
        <div className="flex-1 min-w-0">
          <p className="text-[13.5px] font-semibold" style={{ color: "var(--blue-deep)" }}>
            Klar til godkjenning i regnskapet
          </p>
          <p className="font-data text-[11.5px]" style={{ color: "var(--blue)" }}>
            Ett klikk – så er bilaget bokført
          </p>
        </div>
        <span
          className="font-data text-[11px] font-semibold px-2.5 py-1 rounded-full shrink-0"
          style={{ background: "#fff", color: "var(--blue-deep)", border: "1px solid var(--blue-line)" }}
        >
          Godkjenn
        </span>
      </div>
    </div>
  </div>
);

export default PipelineDemo;
