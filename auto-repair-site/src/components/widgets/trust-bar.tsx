import { Shield, Award, PenTool } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function TrustBar() {
    return (
        <section className="bg-navy-950 text-white py-16 md:py-24 border-y border-navy-900 shadow-inner">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                            Certified. Experienced. Accountable.
                        </h2>
                        <p className="text-muted/80 text-lg">
                            We hold ourselves to the highest technical standards because your safety is not negotiable.
                        </p>
                    </div>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center justify-center text-center">
                    {/* ASE Placeholder */}
                    <StaggerItem className="flex flex-col items-center space-y-4">
                        <div className="h-16 w-16 bg-surface/10 rounded-full flex items-center justify-center border border-copper/30">
                            <Award className="h-8 w-8 text-gold-soft" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-surface">ASE Certified Master Technicians</h3>
                            <p className="text-sm text-muted/70 mt-1">Rigorous testing. Proven expertise.</p>
                        </div>
                    </StaggerItem>

                    {/* Warranty Placeholder */}
                    <StaggerItem className="flex flex-col items-center space-y-4">
                        <div className="h-16 w-16 bg-surface/10 rounded-full flex items-center justify-center border border-copper/30">
                            <Shield className="h-8 w-8 text-gold-soft" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-surface">12-Month / 12,000-Mile Warranty</h3>
                            <p className="text-sm text-muted/70 mt-1">Nationwide coverage for peace of mind.</p>
                        </div>
                    </StaggerItem>

                    {/* Parts Placeholder */}
                    <StaggerItem className="flex flex-col items-center space-y-4">
                        <div className="h-16 w-16 bg-surface/10 rounded-full flex items-center justify-center border border-copper/30">
                            <PenTool className="h-8 w-8 text-gold-soft" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg text-surface">Premium OEM Quality Parts</h3>
                            <p className="text-sm text-muted/70 mt-1">We don&apos;t compromise on materials.</p>
                        </div>
                    </StaggerItem>
                </Stagger>
            </div>
        </section>
    );
}
