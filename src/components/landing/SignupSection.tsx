import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { useFadeIn } from "@/hooks/useFadeIn";

const NARA_API = "https://nara-api-wfw8.onrender.com";
const APP_URL  = "https://app.naraflow.no";

const SignupSection = () => {
  const { ref, visible } = useFadeIn();

  const [form, setForm] = useState({ company_name: "", email: "", password: "", orgnr: "" });
  const [mvaRegistrert, setMvaRegistrert] = useState(true);
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
          company_name:   form.company_name,
          email:          form.email,
          password:       form.password,
          org_number:     form.orgnr || undefined,
          mva_registered: mvaRegistrert,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) throw new Error(data.error || "Noe gikk galt ved registrering");
      setSuccess(`Velkommen, ${form.company_name}! Kontoen din er klar.`);
      setTimeout(() => { window.location.href = `${APP_URL}/onboarding` }, 2000);
    } catch (err: any) {
      setError(err.message || "Noe gikk galt. Prøv igjen.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="signup" className="py-24" style={{ background: "#f8fafc" }}>
      <div
        ref={ref}
        className={`max-w-[480px] mx-auto px-6 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="text-center mb-10">
          <h2 className="font-extrabold text-slate-900" style={{ fontSize: "clamp(28px, 4vw, 38px)", letterSpacing: "-1px" }}>
            Kom i gang gratis
          </h2>
          <p className="mt-3 text-slate-500" style={{ fontSize: 16 }}>
            14 dagers prøveperiode. Ingen kredittkort kreves.
          </p>
        </div>

        <div
          className="bg-white rounded-2xl p-8"
          style={{ border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
        >
          {success ? (
            <div className="text-center py-6">
              <CheckCircle size={40} className="text-green-500 mx-auto mb-4" />
              <p className="font-semibold text-slate-900">{success}</p>
              <p className="text-sm text-slate-400 mt-2">Tar deg til appen...</p>
            </div>
          ) : (
            <form onSubmit={handleSignup} className="space-y-3">
              <input
                type="text"
                required
                value={form.company_name}
                onChange={(e) => setForm({ ...form, company_name: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Firmanavn"
                disabled={loading}
              />
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="E-postadresse"
                disabled={loading}
              />
              <input
                type="password"
                required
                minLength={8}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Passord (min. 8 tegn)"
                disabled={loading}
              />
              <input
                type="text"
                value={form.orgnr}
                onChange={(e) => setForm({ ...form, orgnr: e.target.value })}
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Organisasjonsnummer (valgfritt)"
                disabled={loading}
              />

              {/* MVA toggle */}
              <div className="flex items-center justify-between px-4 py-3 rounded-lg border border-slate-200 bg-slate-50">
                <span className="text-sm text-slate-600">MVA-registrert bedrift</span>
                <button
                  type="button"
                  onClick={() => setMvaRegistrert(!mvaRegistrert)}
                  disabled={loading}
                  className="relative flex-none transition-colors"
                  style={{
                    width: 40, height: 22, borderRadius: 11,
                    background: mvaRegistrert ? "#2563EB" : "#cbd5e1",
                  }}
                >
                  <span
                    className="absolute top-[3px] transition-all"
                    style={{
                      left: mvaRegistrert ? 21 : 3,
                      width: 16, height: 16, borderRadius: "50%",
                      background: "#fff",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />
                </button>
              </div>

              {error && (
                <p className="text-sm text-red-600 text-center bg-red-50 rounded-lg px-4 py-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2563EB] text-white font-semibold rounded-lg text-sm hover:bg-[#1d4ed8] transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                style={{ height: 48 }}
              >
                {loading ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Oppretter konto...</>
                ) : (
                  "Opprett konto og kom i gang →"
                )}
              </button>
            </form>
          )}

          {!success && (
            <p className="text-center text-slate-400 mt-5" style={{ fontSize: 13 }}>
              Allerede kunde?{" "}
              <a href={APP_URL} className="text-[#2563EB] hover:underline font-medium">
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
