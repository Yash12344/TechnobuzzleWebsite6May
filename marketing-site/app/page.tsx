import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import CaseStudies from "@/components/CaseStudies";
import ProcessTimeline from "@/components/ProcessTimeline";
import AILabSection from "@/components/AILabSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <CaseStudies />
      <ProcessTimeline />
      <AILabSection />
      <CTASection />
      <Footer />
    </>
  );
}
