import { ShieldCheck } from "lucide-react";
import { CornerNotch } from "@/components/widgets/corner-notch";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PrecisionDivider } from "@/components/widgets/precision-divider";

export function ProfessionalFacilitySection() {
    return (
        <section className="py-24 md:py-32 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column */}
                    <Reveal>
                        <div className="max-w-xl">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
                                Professional Facility. Professional Standards.
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-8">
                                Modern vehicle repair requires more than tools — it requires process, organization, and attention to detail. Every vehicle is handled methodically, from intake through final verification.
                            </p>
                        </div>
                    </Reveal>

                    {/* Right Column: Structured standards panel */}
                    <Stagger>
                        <StaggerItem>
                            <div className="relative bg-bg border border-border shadow-sm p-8 md:p-12 overflow-hidden group">
                                {/* Precision Top Line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper/40 group-hover:bg-copper transition-colors duration-300" />
                                <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-white opacity-40" />

                                <CornerNotch position="top-right" />

                                <ul className="space-y-6">
                                    {[
                                        "Organized, professional work bays",
                                        "Modern diagnostic platforms",
                                        "Secure after-hours vehicle handling",
                                        "Clean, methodical repair process",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-1">
                                                <ShieldCheck className="w-5 h-5 text-copper" strokeWidth={1.5} />
                                            </div>
                                            <span className="font-medium text-navy-950 text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
