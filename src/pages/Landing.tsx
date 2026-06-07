import AnnouncementStrip from "@/components/landing/AnnouncementStrip";
import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import NaraDoesAllSection from "@/components/landing/NaraDoesAllSection";
import ProjectCategorizationSection from "@/components/landing/ProjectCategorizationSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PreAccountingSection from "@/components/landing/PreAccountingSection";
import ProductDeepDiveSection from "@/components/landing/ProductDeepDiveSection";
import TimelineSection from "@/components/landing/TimelineSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import IntegrationsSection from "@/components/landing/IntegrationsSection";
import SecuritySection from "@/components/landing/SecuritySection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SignupSection from "@/components/landing/SignupSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import LandingFooter from "@/components/landing/LandingFooter";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnnouncementStrip />
      <LandingNav />
      <HeroSection />
      <NaraDoesAllSection />
      <ProjectCategorizationSection />
      <ProblemSection />
      <HowItWorksSection />
      <PreAccountingSection />
      <ProductDeepDiveSection />
      <TimelineSection />
      <FeaturesSection />
      <IntegrationsSection />
      <SecuritySection />
      <PricingSection />
      <FAQSection />
      <TestimonialsSection />
      <SignupSection />
      <FinalCTASection />
      <LandingFooter />
    </div>
  );
};

export default Landing;
