import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-bg py-20 md:py-32">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg z-0" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-muted/50 blur-3xl z-0" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-3xl flex flex-col items-start gap-6">

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-navy-950 leading-[1.1]">
                        Accurate Repairs Start With Accurate Diagnostics.
                    </h1>

                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
                        Full-service automotive repair in Missoula built on precise testing, honest recommendations, and repairs confirmed — not guessed.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                        <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-12 px-8 text-base">
                            <Link href="#contact" className="flex items-center gap-2">
                                Schedule Service <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white h-12 px-8 text-base transition-colors">
                            <a href="tel:+15551234567" className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> Call Now
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
