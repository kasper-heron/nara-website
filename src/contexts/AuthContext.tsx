import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { supabaseAuth } from "@/lib/supabaseExternal";
import type { Session, User as SupaUser } from "@supabase/supabase-js";

export type UserRole = "eier" | "regnskapsforer";

interface User {
  id: string;
  email: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

function mapUser(su: SupaUser): User {
  return {
    id: su.id,
    email: su.email ?? "",
    role: (su.user_metadata?.role as UserRole) || "eier",
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabaseAuth.auth.onAuthStateChange(
      (_event, sess) => {
        setSession(sess);
        setUser(sess?.user ? mapUser(sess.user) : null);
        setLoading(false);
      }
    );

    supabaseAuth.auth.getSession().then(({ data: { session: sess } }) => {
      setSession(sess);
      setUser(sess?.user ? mapUser(sess.user) : null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const { error } = await supabaseAuth.auth.signInWithPassword({ email, password });
    if (error) throw new Error(error.message);
  }, []);

  const logout = useCallback(async () => {
    await supabaseAuth.auth.signOut();
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabaseAuth.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-passord`,
    });
    if (error) throw new Error(error.message);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, session, login, logout, resetPassword, isAuthenticated: !!session, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
