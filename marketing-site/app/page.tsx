import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/ServicesSection";
import ProcessTimeline from "@/components/ProcessTimeline";
import AILabSection from "@/components/AILabSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

// NOTE: The client case-studies section (components/CaseStudies.tsx) is
// intentionally not rendered yet — Technobuzzle has no client work to show.
// To re-enable in future: import it and add <CaseStudies /> below ServicesSection.

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesSection />
      <ProcessTimeline />
      <AILabSection />
      <CTASection />
      <Footer />
    </>
  );
}
