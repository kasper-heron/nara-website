import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const NARA_API = "https://nara-api-wfw8.onrender.com";
const APP_URL  = "https://app.naraflow.no";

const SignupSection = () => {
  const { ref, visible } = useFadeIn();

  const [form, setForm] = useState({ company_name: "", email: "", password: "", orgnr: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.company_name || !form.email || !form.password) return;
    if (form.password.length < 8) {
      setError("Passordet må være minst 8 tegn");
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
          email:        form.email,
          password:     form.password,
          org_number:   form.orgnr || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.error || "Noe gikk galt ved registrering");
      }
      setSuccess(`Velkommen, ${form.company_name}! Kontoen din er klar.`);
      setTimeout(() => { window.location.href = APP_URL }, 2000);
    } catch (err: any) {
      setError(err.message || "Noe gikk galt. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="landing-section bg-surface-alt">
      <div
        ref={ref}
        className={`max-w-[500px] mx-auto transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div
          className="bg-card"
          style={{
            borderRadius: 20,
            border: "1px solid hsl(220 13% 91%)",
            padding: "52px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
          }}
        >
          <h2 className="font-bold text-foreground text-center" style={{ fontSize: 28 }}>
            Kom i gang gratis
          </h2>
          <p className="text-center mt-2 mb-8" style={{ fontSize: 15, color: "hsl(220 9% 46%)" }}>
            14 dagers prøveperiode. Ingen kredittkort.
          </p>

          {success ? (
            <div className="text-center py-8">
              <div
                className="mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: "hsl(214 95% 93%)" }}
              >
                <span className="text-primary text-lg">✓</span>
              </div>
              <p className="text-sm text-foreground font-medium">{success}</p>
              <p className="text-xs text-muted-foreground mt-2">Tar deg til appen...</p>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-3">
              <input
                type="text"
                required
                value={form.company_name}
                onChange={(e) => setForm({ ...form, company_name: e.target.value })}
                className="input-pill"
                placeholder="Firmanavn"
                disabled={loading}
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input-pill"
                placeholder="E-postadresse"
                disabled={loading}
              />
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="input-pill"
                placeholder="Passord (min. 8 tegn)"
                disabled={loading}
              />
              <input
                type="text"
                value={form.orgnr}
                onChange={(e) => setForm({ ...form, orgnr: e.target.value })}
                className="input-pill"
                placeholder="Organisasjonsnummer (valgfritt)"
                disabled={loading}
              />
              {error && <p className="text-sm text-destructive text-center">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-primary-foreground font-semibold rounded-full text-base hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ height: 50 }}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Oppretter konto...
                  </>
                ) : (
                  "Opprett konto og kom i gang →"
                )}
              </button>
            </form>
          )}

          {!success && (
            <p className="text-center text-muted-foreground mt-6" style={{ fontSize: 13 }}>
              Allerede kunde?{" "}
              <a href={APP_URL} className="text-primary hover:underline">
                Logg inn her
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
