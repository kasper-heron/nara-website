import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const LoggInn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/dashboard", { replace: true });
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setLoading(true);
    setError("");
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Feil e-post eller passord");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#FFFFFF" }}>
      <div className="w-full max-w-[380px]">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div
            className="w-8 h-8 rounded-lg flex flex-col items-start justify-center gap-[2.5px] p-1.5"
            style={{ background: "#1D1D1F" }}
          >
            <div className="h-[2.5px] w-[55%] rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
            <div className="h-[2.5px] w-full rounded-full" style={{ background: "linear-gradient(90deg, #0071E3, #5AC8FA)" }} />
            <div className="h-[2.5px] w-[40%] rounded-full" style={{ background: "rgba(255,255,255,0.25)" }} />
          </div>
          <span className="text-[20px] font-black tracking-[-0.5px]" style={{ color: "#1D1D1F" }}>
            NARA
          </span>
        </div>

        <h1 className="text-[22px] font-semibold text-center mb-1" style={{ color: "#1D1D1F" }}>
          Logg inn
        </h1>
        <p className="text-center text-[13px] mb-8" style={{ color: "#8E8E93" }}>
          Velkommen tilbake
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[12px] font-medium mb-1.5" style={{ color: "#6E6E73" }}>
              E-post
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.no"
              className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-shadow"
              style={{
                background: "#F5F5F7",
                color: "#1D1D1F",
                border: "1px solid #E8E8ED",
              }}
            />
          </div>
          <div>
            <label className="block text-[12px] font-medium mb-1.5" style={{ color: "#6E6E73" }}>
              Passord
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl px-4 py-3 text-[14px] outline-none transition-shadow"
              style={{
                background: "#F5F5F7",
                color: "#1D1D1F",
                border: "1px solid #E8E8ED",
              }}
            />
          </div>

          {error && (
            <p className="text-[13px] font-medium" style={{ color: "#FF3B30" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 text-[14px] font-semibold transition-opacity disabled:opacity-50"
            style={{ background: "#0071E3", color: "#FFFFFF" }}
          >
            {loading ? "Logger inn..." : "Logg inn"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/glemt-passord"
            className="text-[13px] font-medium hover:underline"
            style={{ color: "#0071E3" }}
          >
            Glemt passord?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoggInn;
