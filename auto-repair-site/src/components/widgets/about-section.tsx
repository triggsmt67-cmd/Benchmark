import { siteConfig } from "@/lib/siteConfig";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

export function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32 bg-surface overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <Reveal direction="right">
                        <div className="relative">
                            <div className="aspect-[4/3] bg-muted rounded-lg border border-border overflow-hidden relative shadow-md">
                                <iframe
                                    src={siteConfig.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="absolute inset-0"
                                    title={`Map of ${siteConfig.businessName} location`}
                                ></iframe>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy-900 rounded-lg -z-10" />
                            <div className="absolute top-8 -left-8 w-24 h-24 border border-copper/30 rounded-full -z-10" />
                        </div>
                    </Reveal>

                    <Stagger className="max-w-2xl">
                        <StaggerItem>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 leading-tight">
                                Built on Craftsmanship.<br />Backed by Integrity.
                            </h2>
                            <PrecisionDivider />
                        </StaggerItem>

                        <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-8">
                            <StaggerItem>
                                <p>
                                    Benchmark Automotive Service is an auto repair shop in Missoula, MT focused on accurate diagnostics, honest recommendations, and repairs done right the first time. Backed by over 20 years of hands-on automotive experience, we service brakes, electrical issues, engine performance concerns, suspension, AC and heating, and routine maintenance. We explain what’s urgent, what can wait, and never recommend repairs without proper testing. If you want clear answers and dependable automotive repair in Missoula, Benchmark is here to help.
                                </p>
                            </StaggerItem>
                        </div>
                    </Stagger>

                </div>
            </div>
        </section>
    );
}
