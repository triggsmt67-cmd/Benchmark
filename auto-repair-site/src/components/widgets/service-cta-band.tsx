import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceCTABand() {
    return (
        <section className="bg-bg py-20 md:py-24 border-t border-border">
            <div className="container mx-auto px-4 md:px-6 mt-4 md:mt-8">
                <Reveal>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6 tracking-tight">
                            Need a clear answer about your vehicle?
                        </h2>
                        <p className="font-sans text-lg text-text-secondary leading-relaxed mb-10">
                            If your vehicle is showing warning lights, experiencing electrical problems, or just not driving like it should, we can help identify the cause.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
                            <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg rounded-sm">
                                <Link href="/contact">
                                    Schedule Service
                                </Link>
                            </Button>

                            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-copper text-copper hover:bg-copper hover:text-white h-14 px-10 text-lg transition-colors rounded-sm">
                                <a href="tel:4063171405" aria-label="Call us at (406) 317-1405">
                                    Call (406) 317-1405
                                </a>
                            </Button>
                        </div>

                        {/* Micro Trust Line */}
                        <div className="pt-8 border-t border-border text-[15px] text-text-secondary">
                            <div className="mb-4 space-y-0.5">
                                <p className="font-medium text-navy-950">Benchmark Automotive Service</p>
                                <p>1914 North Ave W</p>
                                <p>Missoula, MT 59801</p>
                            </div>

                            <div className="mb-6 space-y-0.5">
                                <p className="font-medium text-navy-950 mt-4 mb-1">Hours:</p>
                                <p>Monday–Friday: 8:00 AM – 5:00 PM</p>
                                <p>Saturday: By Appointment</p>
                            </div>

                            <p className="text-sm italic text-muted-foreground mt-4">
                                After-hours drop-off available. We'll confirm receipt the next business day.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
