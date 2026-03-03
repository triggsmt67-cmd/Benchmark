import { Laptop2, Zap, Cpu } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PrecisionDivider } from "@/components/widgets/precision-divider";

export function ModernVehiclesSection() {
    return (
        <section className="py-24 md:py-32 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="mb-16 max-w-2xl">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6">
                            Built for Modern Vehicles
                        </h2>
                        <PrecisionDivider />
                    </div>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Block 1 */}
                    <StaggerItem className="h-full">
                        <div className="flex flex-col gap-4 h-full group">
                            <div className="mb-2">
                                <Laptop2 className="h-7 w-7 text-copper transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-navy-950 tracking-tight">
                                Advanced Computer Diagnostics
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-[15px]">
                                Modern scan platforms allow accurate data analysis and system testing without guesswork.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Block 2 */}
                    <StaggerItem className="h-full">
                        <div className="flex flex-col gap-4 h-full group">
                            <div className="mb-2">
                                <Zap className="h-7 w-7 text-copper transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-navy-950 tracking-tight">
                                Electrical System Testing
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-[15px]">
                                Intermittent faults and wiring issues require methodical testing \u2014 not guesswork.
                            </p>
                        </div>
                    </StaggerItem>

                    {/* Block 3 */}
                    <StaggerItem className="h-full">
                        <div className="flex flex-col gap-4 h-full group">
                            <div className="mb-2">
                                <Cpu className="h-7 w-7 text-copper transition-transform duration-300 group-hover:-translate-y-1" strokeWidth={1.5} />
                            </div>
                            <h3 className="font-heading text-xl font-bold text-navy-950 tracking-tight">
                                Accurate Module Communication
                            </h3>
                            <p className="text-text-secondary leading-relaxed text-[15px]">
                                Modern vehicles rely on networked systems that demand precise troubleshooting.
                            </p>
                        </div>
                    </StaggerItem>
                </Stagger>
            </div>
        </section>
    );
}
