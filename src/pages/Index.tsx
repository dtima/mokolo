import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { QuickLinks } from "@/components/QuickLinks";
import { InvestmentOpportunities } from "@/components/InvestmentOpportunities";
import { Events } from "@/components/Events";
import { MayorNote } from "@/components/MayorNote";
import { RotatingPartners } from "@/components/RotatingPartners";
import { Footer } from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { FlashNewsCarousel } from "@/components/FlashNewsCarousel";
import { Programs } from "@/components/Programs";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <QuickLinks />
      <Programs />
      <InvestmentOpportunities />
      <FlashNewsCarousel />
      <Events />
      <MayorNote />
      <RotatingPartners />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;