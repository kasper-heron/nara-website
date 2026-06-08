import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Personvern from "./pages/Personvern";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Redirect component for external URL
const AppRedirect = () => {
  window.location.href = "https://app.naraflow.no";
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/"             element={<Landing />} />
          <Route path="/personvern"   element={<Personvern />} />
          <Route path="/logg-inn"     element={<AppRedirect />} />
          <Route path="/login"        element={<AppRedirect />} />
          <Route path="/kom-i-gang"   element={<AppRedirect />} />
          <Route path="/dashboard"    element={<AppRedirect />} />
          <Route path="*"             element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
