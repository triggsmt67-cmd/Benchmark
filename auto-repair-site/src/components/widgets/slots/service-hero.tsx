import { ServiceContent, LocationContent } from "@/lib/content-schema";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

interface Props {
    content: ServiceContent;
    location?: LocationContent;
}

export function ServiceHero({ content, location }: Props) {
    const headline = location
        ? `${content.hero.headline} in ${location.city}`
        : content.hero.headline;

    const phoneNumber = location?.phone || "(555) 123-4567";

    return (
        <section className="relative overflow-hidden bg-bg py-20 md:py-28">
            <div className="absolute inset-0 bg-gradient-to-br from-surface to-bg z-0" />
            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="max-w-3xl flex flex-col items-start gap-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-surface px-3 py-1 text-sm text-copper-dark font-medium shadow-sm">
                        Top-Rated {content.name}
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy-950 leading-[1.1]">
                        {headline}
                    </h1>

                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
                        {content.hero.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                        <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-12 px-8 text-base">
                            <Link href="#contact" className="flex items-center gap-2">
                                Schedule Service <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>

                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white h-12 px-8 text-base transition-colors">
                            <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2">
                                <Phone className="h-4 w-4" /> Call {phoneNumber}
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
