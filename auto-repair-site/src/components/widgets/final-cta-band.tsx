import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCtaBand() {
    return (
        <section id="contact" className="py-20 md:py-24 bg-gradient-to-r from-navy-950 to-navy-900 border-t-4 border-brand-red">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <Reveal>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-surface mb-6">
                        Let’s Get You Back on the Road — Confidently.
                    </h2>
                    <p className="text-muted/80 text-lg max-w-2xl mx-auto mb-10">
                        Stop wondering if your car is truly fixed. Experience the difference of premium independent automotive care.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg rounded-md">
                            <Link href="/contact" className="flex items-center gap-2">
                                Schedule Service <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent border-surface text-surface hover:bg-surface hover:text-navy-950 h-14 px-10 text-lg transition-colors rounded-md">
                            <a href={`tel:${siteConfig.phone.link}`} className="flex items-center gap-2">
                                <Phone className="h-5 w-5" /> {siteConfig.phone.display}
                            </a>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
