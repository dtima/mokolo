import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import FlashNews from "./pages/FlashNews";
import Tourism from "./pages/Tourism";
import MeetMayor from "./pages/MeetMayor";
import Partners from "./pages/Partners";
import Council from "./pages/Council";
import PointsOfInterest from "./pages/PointsOfInterest";
import GuidePratique from "./pages/GuidePratique";
import AllEvents from "./pages/AllEvents";
import InvestmentOpportunities from "./pages/business/InvestmentOpportunities";
import Tenders from "./pages/business/Tenders";

const App = () => (
  <ErrorBoundary>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin-dtima/*" element={<Admin />} />
            <Route path="/flash-news" element={<FlashNews />} />
            <Route path="/visitors/tourism" element={<Tourism />} />
            <Route path="/government/meet-mayor" element={<MeetMayor />} />
            <Route path="/government/partners" element={<Partners />} />
            <Route path="/government/council" element={<Council />} />
            <Route path="/residents/points-of-interest" element={<PointsOfInterest />} />
            <Route path="/guide-pratique" element={<GuidePratique />} />
            <Route path="/events" element={<AllEvents />} />
            <Route path="/business/investment" element={<InvestmentOpportunities />} />
            <Route path="/business/tenders" element={<Tenders />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </ErrorBoundary>
);

export default App;