import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceAreasSection() {
    return (
        <section className="py-24 bg-surface border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950">
                            Serving Drivers Throughout the Missoula Area
                        </h2>

                        <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                            Benchmark Automotive Service is located in Missoula and proudly serves drivers from communities throughout the surrounding area. Many customers travel from nearby towns for professional diagnostics, electrical troubleshooting, and reliable automotive repair.
                        </p>

                        <div className="pt-4">
                            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-lg">
                                <li>
                                    <Link href="/service-areas/missoula" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Missoula
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/lolo" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Lolo
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/frenchtown" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Frenchtown
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/bonner" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Bonner
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/east-missoula" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        East Missoula
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/milltown" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Milltown
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/orchard-homes" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Orchard Homes
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/target-range" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Target Range
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
