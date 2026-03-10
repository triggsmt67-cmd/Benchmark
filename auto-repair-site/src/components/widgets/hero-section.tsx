import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { HeroIntro, HeroIntroItem } from "@/components/motion/HeroIntro";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32 lg:py-40">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/diagnostic_hero_bg_v2.png"
                    alt="Technician performing advanced diagnostics on a vehicle"
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover object-center"
                    sizes="100vw"
                />
            </div>

            {/* Subtle Navy Gradient Overlay (Right to Left) for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-transparent z-10" />

            {/* Mobile dark overlay to ensure text contrast on small screens */}
            <div className="absolute inset-0 bg-navy-950/40 md:hidden z-10" />

            <div className="container relative z-20 mx-auto px-4 md:px-6">
                <HeroIntro className="max-w-3xl flex flex-col items-start gap-6">

                    <HeroIntroItem>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                            Accurate Repairs Start With Accurate Diagnostics.
                        </h1>
                    </HeroIntroItem>

                    <HeroIntroItem>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
                            Full-service automotive repair in Missoula built on precise testing, honest recommendations, and repairs confirmed — not guessed.
                        </p>
                    </HeroIntroItem>

                    <HeroIntroItem className="w-full sm:w-auto">
                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                            <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-12 px-8 text-base">
                                <Link href="/contact" className="flex items-center gap-2">
                                    Schedule Service <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>

                            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-navy-950 h-12 px-8 text-base transition-colors">
                                <a href={`tel:${siteConfig.phone.link}`} className="flex items-center gap-2">
                                    <Phone className="h-4 w-4" /> Call Now
                                </a>
                            </Button>
                        </div>
                    </HeroIntroItem>
                </HeroIntro>
            </div>
        </section>
    );
}
