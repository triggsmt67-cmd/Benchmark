import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Michael T.",
        quote: "Finally, a mechanic I don't feel is trying to squeeze every dime out of me. Diagnosed an electrical issue the dealership couldn't find for months. Professional, clean shop, and straight shooters.",
        timing: "2 weeks ago"
    },
    {
        name: "Sarah J.",
        quote: "Brought my SUV in for what I thought was a failing transmission. They found it was just a loose heat shield and a minor sensor. Saved me thousands. They have a customer for life.",
        timing: "1 month ago"
    },
    {
        name: "David R.",
        quote: "I'm a car enthusiast and extremely particular about who touches my vehicles. The precision and cleanliness of this shop are unmatched in the area. Exceptional work on my suspension rebuild.",
        timing: "3 months ago"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-bg py-20 md:py-32 border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6">
                        What Local Drivers Are Saying
                    </h2>
                    <div className="h-1 w-20 bg-brand-red rounded-full mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <Card key={idx} className="bg-surface border-border flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                            <CardContent className="pt-8">
                                <div className="flex text-gold-soft mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                                <p className="text-text-secondary italic leading-relaxed mb-6">
                                    "{t.quote}"
                                </p>
                                <div className="mt-auto">
                                    <p className="font-heading font-bold text-navy-950 text-lg">{t.name}</p>
                                    <p className="text-sm text-muted-foreground">{t.timing}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
