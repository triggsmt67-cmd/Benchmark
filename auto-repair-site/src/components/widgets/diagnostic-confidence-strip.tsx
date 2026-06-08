import { Wrench, ShieldCheck, AlertCircle, Zap } from "lucide-react";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Reveal } from "@/components/motion/Reveal";

export function DiagnosticConfidenceStrip() {
    return (
        <section id="diagnostics-importance" className="py-24 md:py-32 bg-surface border-b border-border overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Column: Bold Editorial Positioning */}
                    <div className="lg:col-span-5 space-y-6 text-left">
                        <Reveal instant>
                            <div>
                                <span className="text-xs font-bold tracking-widest text-copper uppercase bg-navy-50 py-1.5 px-3.5 rounded-sm inline-block mb-3 border border-navy-100">
                                    Missoula Auto Diagnostics
                                </span>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 tracking-tight leading-[1.15]">
                                    Why Diagnostic Accuracy is the Foundation of Proper Auto Repair
                                </h2>
                                <PrecisionDivider instant />
                            </div>
                        </Reveal>
                        
                        <Reveal instant delay={0.1}>
                            <div className="space-y-4 text-text-secondary text-base md:text-lg leading-relaxed mt-6">
                                <p className="font-semibold text-navy-900">
                                    A computer code is a symptom, not a diagnosis.
                                </p>
                                <p>
                                    Modern vehicles are highly advanced networks of mechanical parts and electronic control modules. When a dashboard warning light activates or a drivability issue occurs, simply plugging in a scan tool to read a fault code is only the first step.
                                </p>
                                <p>
                                    An accurate vehicle diagnosis requires isolating the root physical cause of a fault. Without proper electrical testing and physical inspection, repair shops end up playing trial-and-error with your budget.
                                </p>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Column: Substantial SEO-Friendly Details */}
                    <div className="lg:col-span-7 space-y-8 text-left mt-8 lg:mt-0">
                        <Reveal instant delay={0.2}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                
                                {/* Card 1: Preventing the Parts Cannon */}
                                <div className="bg-white border border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-copper" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 rounded-sm bg-amber-50 text-copper">
                                            <AlertCircle className="h-5 w-5 stroke-[1.5]" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-navy-950">
                                            Preventing the &quot;Parts Cannon&quot;
                                        </h3>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Many shops read a sensor code and immediately replace the sensor itself. However, the code could be triggered by a wire break, circuit corrosion, or mechanical wear elsewhere. We perform target testing on circuits and components directly so you never pay for parts you do not need.
                                    </p>
                                </div>

                                {/* Card 2: Isolating Intermittent Glitches */}
                                <div className="bg-white border border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-blue-600" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 rounded-sm bg-blue-50 text-blue-600">
                                            <Zap className="h-5 w-5 stroke-[1.5]" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-navy-950">
                                            Isolating Intermittent Faults
                                        </h3>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        Electrical issues that only happen occasionally are notoriously difficult to track down. We use advanced digital oscilloscopes to record live signal patterns, capturing electrical spikes or drops the millisecond they occur.
                                    </p>
                                </div>

                                {/* Card 3: Avoiding Secondary Damage */}
                                <div className="bg-white border border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-emerald-600" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 rounded-sm bg-emerald-50 text-emerald-600">
                                            <Wrench className="h-5 w-5 stroke-[1.5]" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-navy-950">
                                            Avoiding Secondary Damage
                                        </h3>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        A misdiagnosed engine misfire can melt your catalytic converter in miles. An unresolved suspension pull can ruin a brand-new set of tires in weeks. Precise diagnosis catches the root failure early, saving you from cascading, expensive secondary repairs.
                                    </p>
                                </div>

                                {/* Card 4: Post-Repair Verification */}
                                <div className="bg-white border border-border p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 w-[3px] bg-brand-red" />
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2.5 rounded-sm bg-red-50 text-brand-red">
                                            <ShieldCheck className="h-5 w-5 stroke-[1.5]" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold text-navy-950">
                                            Post-Repair Validation
                                        </h3>
                                    </div>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        We do not just install a part, clear the dashboard fault light, and hand you your keys. Every repair is subjected to a validation test drive and secondary system scan under load to confirm the vehicle is 100% resolved.
                                    </p>
                                </div>

                            </div>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
}
