import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./pages/Landing";
import HowItWorks from "./pages/HowItWorks";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import Personvern from "./pages/Personvern";
import Vilkar from "./pages/Vilkar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Innlogging og dashbord bor på app.naraflow.no
const AppRedirect = () => {
  window.location.href = "https://app.naraflow.no";
  return null;
};

// Scroll til toppen ved rutebytte
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/"                   element={<Landing />} />
          <Route path="/how-it-works"       element={<HowItWorks />} />
          <Route path="/slik-fungerer-det"  element={<Navigate to="/how-it-works" replace />} />
          <Route path="/pricing"            element={<Pricing />} />
          <Route path="/priser"             element={<Navigate to="/pricing" replace />} />
          <Route path="/signup"             element={<Signup />} />
          <Route path="/registrer"          element={<Navigate to="/signup" replace />} />
          <Route path="/kom-i-gang"         element={<Navigate to="/signup" replace />} />
          <Route path="/personvern"         element={<Personvern />} />
          <Route path="/vilkar"             element={<Vilkar />} />
          <Route path="/logg-inn"           element={<AppRedirect />} />
          <Route path="/login"              element={<AppRedirect />} />
          <Route path="/dashboard"          element={<AppRedirect />} />
          <Route path="*"                   element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
