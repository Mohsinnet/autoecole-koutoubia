// Style reminder: «طريق الثقة» — keep every public route in the same Arabic RTL visual system.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Infractions from "./pages/Infractions";
import LicenseGuide from "./pages/LicenseGuide";
import Quiz from "./pages/Quiz";
import TrafficSigns from "./pages/TrafficSigns";

function Router() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <WouterRouter base={base}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/page3.html" component={LicenseGuide} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/infractions" component={Infractions} />
      <Route path="/ar/infractions" component={Infractions} />
      <Route path="/panneaux" component={TrafficSigns} />
      <Route path="/ar/panneaux" component={TrafficSigns} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
