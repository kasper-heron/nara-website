import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Logo from "@/components/site/Logo";

const NARA_API = "https://nara-api-wfw8.onrender.com";
const APP_URL = "https://app.naraflow.no";

const inputCls =
  "w-full rounded-[10px] px-4 py-3 text-[14.5px] outline-none transition-colors placeholder:text-[--ink-mute]";
const inputStyle = {
  background: "var(--paper-raised)",
  border: "1px solid var(--input)",
  color: "var(--ink)",
} as const;

const Field = ({
  label,
  optional,
  ...props
}: { label: string; optional?: boolean } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <label className="block">
    <span className="flex items-baseline justify-between mb-1.5">
      <span className="text-[13px] font-semibold">{label}</span>
      {optional && (
        <span className="font-data text-[11px]" style={{ color: "var(--ink-mute)" }}>
          valgfritt
        </span>
      )}
    </span>
    <input
      {...props}
      className={inputCls}
      style={inputStyle}
      onFocus={(e) => (e.currentTarget.style.borderColor = "var(--blue)")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "var(--input)")}
    />
  </label>
);

const Signup = () => {
  const [form, setForm] = useState({ company_name: "", email: "", password: "", orgnr: "" });
  const [mva, setMva] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 8) {
      setError("Passordet må være minst 8 tegn.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${NARA_API}/api/onboarding/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: form.company_name,
          email: form.email,
          password: form.password,
          org_number: form.orgnr || undefined,
          mva_registered: mva,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Noe gikk galt ved registrering.");
      setSuccess(true);
      setTimeout(() => {
        window.location.href = `${APP_URL}/onboarding`;
      }, 1600);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noe gikk galt. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: "var(--paper)" }}>
      {/* Venstre – skjema */}
      <div className="flex-1 flex flex-col px-6 py-8">
        <Logo />

        <div className="flex-1 flex items-center justify-center py-10">
          <div className="w-full max-w-[400px]">
            {success ? (
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "var(--blue-soft)", color: "var(--blue)" }}
                >
                  <Check size={24} strokeWidth={2.5} />
                </div>
                <h1 className="display-md mb-2">Kontoen er klar</h1>
                <p className="body-md">
                  Velkommen, {form.company_name}! Sender deg til oppsettet …
                </p>
              </div>
            ) : (
              <>
                <h1 className="display-md mb-2">Kom i gang med NARA</h1>
                <p className="body-md mb-8">
                  14 dager gratis. Ingen kredittkort, ingen binding.
                </p>

                {error && (
                  <div
                    className="rounded-[10px] px-4 py-3 text-[13.5px] mb-5"
                    style={{ background: "#FDF0EF", border: "1px solid #F3CBC7", color: "#B3261E" }}
                  >
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    label="Firmanavn"
                    required
                    value={form.company_name}
                    onChange={set("company_name")}
                    placeholder="Bedriften AS"
                    autoComplete="organization"
                  />
                  <Field
                    label="E-post"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="deg@bedriften.no"
                    autoComplete="email"
                  />
                  <Field
                    label="Passord"
                    type="password"
                    required
                    value={form.password}
                    onChange={set("password")}
                    placeholder="Minst 8 tegn"
                    autoComplete="new-password"
                  />
                  <Field
                    label="Organisasjonsnummer"
                    optional
                    value={form.orgnr}
                    onChange={set("orgnr")}
                    placeholder="123 456 789"
                    inputMode="numeric"
                  />

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[13px] font-semibold">MVA-registrert?</span>
                    <div
                      className="inline-flex rounded-full p-0.5"
                      style={{ border: "1px solid var(--line)", background: "var(--paper-raised)" }}
                    >
                      {[
                        { v: true, label: "Ja" },
                        { v: false, label: "Nei" },
                      ].map(({ v, label }) => (
                        <button
                          type="button"
                          key={label}
                          onClick={() => setMva(v)}
                          className="px-4 py-1.5 text-[12.5px] font-semibold rounded-full transition-colors"
                          style={{
                            background: mva === v ? "var(--ink)" : "transparent",
                            color: mva === v ? "#fff" : "var(--ink-soft)",
                          }}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" disabled={loading} className="btn btn-blue w-full !mt-7 disabled:opacity-60">
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Oppretter konto …
                      </>
                    ) : (
                      <>
                        Opprett konto <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[13px] mt-6 text-center" style={{ color: "var(--ink-mute)" }}>
                  Har du konto fra før?{" "}
                  <a href="https://app.naraflow.no/logg-inn" className="font-semibold" style={{ color: "var(--blue)" }}>
                    Logg inn
                  </a>
                </p>
                <p className="text-[12px] mt-4 text-center leading-relaxed" style={{ color: "var(--ink-mute)" }}>
                  Ved å opprette konto godtar du{" "}
                  <Link to="/personvern" className="underline">personvernerklæringen</Link>.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Høyre – mørkt panel */}
      <div
        className="hidden lg:flex w-[44%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: "var(--night)" }}
      >
        <div className="absolute inset-0 night-glow pointer-events-none" aria-hidden="true" />
        <div />
        <div className="relative">
          <p className="display-md max-w-[380px]" style={{ color: "var(--night-text)" }}>
            «Koble til e-post og regnskapssystemet ditt. Resten ordner seg selv.»
          </p>
          <div className="mt-10 space-y-3">
            {[
              "Fakturaer hentes automatisk fra innboksen",
              "Kontert etter NS 4102 med riktige MVA-koder",
              "Godkjente bilag bokføres rett i regnskapssystemet",
            ].map((t) => (
              <p key={t} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: "var(--night-soft)" }}>
                <Check size={15} strokeWidth={2.5} style={{ color: "var(--blue)" }} />
                {t}
              </p>
            ))}
          </div>
        </div>
        <p className="relative font-data text-[12px]" style={{ color: "var(--night-mute)" }}>
          NARA · naraflow.no
        </p>
      </div>
    </div>
  );
};

export default Signup;
