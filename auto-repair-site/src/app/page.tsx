import { HeroSection } from "@/components/widgets/hero-section";
import { ServicesSection } from "@/components/widgets/services-section";
import { DiagnosticConfidenceStrip } from "@/components/widgets/diagnostic-confidence-strip";
import { ProfessionalFacilitySection } from "@/components/widgets/professional-facility-section";
import { ProcessTimelineSection } from "@/components/widgets/process-timeline-section";
import { ModernVehiclesSection } from "@/components/widgets/modern-vehicles-section";
import { AfterHoursDropOff } from "@/components/widgets/after-hours-dropoff";
import { TrustBar } from "@/components/widgets/trust-bar";
import { AboutSection } from "@/components/widgets/about-section";
import { TestimonialsSection } from "@/components/widgets/testimonials-section";
import { WhatWeDontDoSection } from "@/components/widgets/what-we-dont-do-section";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { ServiceAreasSection } from "@/components/widgets/service-areas-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <ServicesSection />
      <DiagnosticConfidenceStrip />
      <ProfessionalFacilitySection />
      <ProcessTimelineSection />
      <ModernVehiclesSection />
      <AfterHoursDropOff />
      <TrustBar />
      <AboutSection />
      <TestimonialsSection />
      <WhatWeDontDoSection />
      <ServiceAreasSection />
      <FinalCtaBand />
    </div>
  );
}
