import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceAreasSection() {
    return (
        <section className="py-24 bg-surface border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 id="missoula-communities-served" className="font-heading text-3xl md:text-4xl font-bold text-navy-950">
                            Serving Missoula and Nearby Communities
                        </h2>

                        <div className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto space-y-6">
                            <p>
                                Benchmark Automotive Service is located in Missoula and helps drivers from nearby communities who want clear answers before spending money on repairs.
                            </p>
                            <p>
                                We regularly work with drivers from Lolo, Frenchtown, Bonner, East Missoula, Milltown, Orchard Homes, Target Range, and the surrounding area.
                            </p>
                            <p>
                                Whether you need diagnostics, electrical troubleshooting, maintenance, inspections, or full-service auto repair, we’ll help you figure out the right next step.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link 
                                href="/service-areas" 
                                className="inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 font-semibold rounded-sm transition-colors text-base shadow-sm"
                            >
                                View Service Areas
                            </Link>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
