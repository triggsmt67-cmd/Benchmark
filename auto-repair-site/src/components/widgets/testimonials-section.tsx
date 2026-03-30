import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { CornerNotch } from "@/components/widgets/corner-notch";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const testimonials = [
    {
        name: "Michael T.",
        quote: "Finally, a mechanic I don't feel is trying to squeeze every dime out of me. Diagnosed an electrical issue the dealership couldn't find for months. Professional, clean shop, and straight shooters.",
        timing: "2 weeks ago"
    },
    {
        name: "J. Johnson",
        quote: "I went in for a oil change and the guy's noticed I had a leaky axle seal, they caught it before my warranty ran out, That saved me thousands, thanks guys.",
        timing: "1 month ago"
    },
    {
        name: "J. Fritz",
        quote: "These guys did a great job! They were able to fit me in quickly and did a really good job on my brake service.",
        timing: "Recent Visit"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-bg py-20 md:py-32 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 id="missoula-auto-repair-reviews" className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6">
                            What Local Drivers Are Saying
                        </h2>
                        <div className="flex justify-center mt-2">
                            <PrecisionDivider />
                        </div>
                    </div>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <StaggerItem key={idx} className="h-full">
                            <Card className="relative bg-surface border-border flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow group">
                                <CornerNotch position="top-right" />
                                <CardContent className="pt-8 relative z-10">
                                    <div className="flex text-gold-soft mb-6 transition-colors group-hover:text-copper">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 fill-current" />
                                        ))}
                                    </div>
                                    <p className="text-text-secondary italic leading-relaxed mb-6">
                                        &quot;{t.quote}&quot;
                                    </p>
                                    <div className="mt-auto">
                                        <p className="font-heading font-bold text-navy-950 text-lg">{t.name}</p>
                                        <p className="text-sm text-muted-foreground">{t.timing}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
