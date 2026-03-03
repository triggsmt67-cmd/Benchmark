import { HeroSection } from "@/components/widgets/hero-section";
import { ServicesSection } from "@/components/widgets/services-section";
import { DiagnosticConfidenceStrip } from "@/components/widgets/diagnostic-confidence-strip";
import { AfterHoursDropOff } from "@/components/widgets/after-hours-dropoff";
import { TrustBar } from "@/components/widgets/trust-bar";
import { AboutSection } from "@/components/widgets/about-section";
import { TestimonialsSection } from "@/components/widgets/testimonials-section";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <ServicesSection />
      <DiagnosticConfidenceStrip />
      <AfterHoursDropOff />
      <TrustBar />
      <AboutSection />
      <TestimonialsSection />
      <FinalCtaBand />
    </div>
  );
}
