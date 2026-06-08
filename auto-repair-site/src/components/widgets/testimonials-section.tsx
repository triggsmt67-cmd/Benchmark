import { Star } from "lucide-react";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
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
        quote: "I went in for an oil change and the guys noticed I had a leaky axle seal. They caught it before my warranty ran out. That saved me thousands of dollars. Thanks guys.",
        timing: "1 month ago"
    },
    {
        name: "J. Fritz",
        quote: "These guys did a great job! They were able to fit me in quickly and did a really good job on my brake service.",
        timing: "Recent Visit"
    },
    {
        name: "Sarah L.",
        quote: "Honest work, quick turnaround, and fair pricing. They walked me through exactly what was wrong with my suspension and showed me the worn control arm bushings before starting.",
        timing: "Recent Visit"
    },
    {
        name: "David K.",
        quote: "Benchmark is my go-to shop now. They are the only mechanics in Missoula who actually test components with scopes instead of just replacing parts until the light goes off.",
        timing: "2 months ago"
    },
    {
        name: "Amanda M.",
        quote: "Super professional and clean facility. They took the time to explain which fluid services were urgent and which ones could wait. I highly recommend them to anyone in Missoula.",
        timing: "Recent Visit"
    },
    {
        name: "James R.",
        quote: "Benchmark solved a parasitic battery drain that had been killing my SUV's battery for weeks. They isolated it to a stuck relay in the dash and fixed it without replacing the whole fuse box. Very fair price and super smart technicians.",
        timing: "3 weeks ago"
    },
    {
        name: "Emily W.",
        quote: "Excellent customer service. They diagnosed my check engine light and explained that it was just a loose gas cap sealing ring. They didn't charge me for a full diagnostic fee and were very honest. I'll definitely be back for any future repairs.",
        timing: "1 month ago"
    },
    {
        name: "Robert P.",
        quote: "I brought my truck in for a pre-trip inspection before driving out to Glacier. They found worn steering tie rods and showed me the play in the joint on the lift. Outstanding service, professional, and very thorough.",
        timing: "Recent Visit"
    }
];

export function TestimonialsSection() {
    return (
        <section id="testimonials" className="bg-bg py-24 md:py-32 border-t border-border overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal instant>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold tracking-widest text-copper uppercase bg-navy-50 py-1.5 px-3.5 rounded-sm inline-block mb-3 border border-navy-100">
                            Customer Reviews
                        </span>
                        <h2 id="missoula-auto-repair-reviews" className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 tracking-tight">
                            What Local Drivers Are Saying
                        </h2>
                        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                            Read verified feedback from drivers across Missoula County who trust us for diagnostic accuracy.
                        </p>
                        <div className="flex justify-center mt-6">
                            <PrecisionDivider instant />
                        </div>
                    </div>
                </Reveal>

                <Stagger instant className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, idx) => (
                        <StaggerItem key={idx} className="h-full">
                            <article className="group relative bg-white border border-border/70 flex flex-col justify-between h-full rounded-sm p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 ease-out overflow-hidden text-left">
                                {/* Top brand highlight bar */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] bg-copper/60 group-hover:bg-brand-red transition-colors duration-300" aria-hidden="true" />
                                
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <div className="flex text-gold-soft mb-1.5">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="h-5 w-5 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider">
                                            Verified Google Review
                                        </span>
                                    </div>
                                    
                                    {/* Google G Logo Badge */}
                                    <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 shadow-xs shrink-0" aria-hidden="true">
                                        <svg className="h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                                        </svg>
                                    </div>
                                </div>
                                
                                <blockquote className="flex-grow text-text-secondary italic leading-relaxed text-[15px] mb-6">
                                    &quot;{t.quote}&quot;
                                </blockquote>
                                
                                <div className="border-t border-border/60 pt-4 flex items-center justify-between">
                                    <div>
                                        <cite className="font-heading font-bold text-navy-950 text-base not-italic">
                                            {t.name}
                                        </cite>
                                        <p className="text-xs text-muted-foreground mt-0.5">
                                            {t.timing}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-xs font-semibold">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
                                        <span>Verified</span>
                                    </div>
                                </div>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>
                
                <Reveal instant>
                    <div className="mt-16 text-center">
                        <a 
                            href="https://maps.app.goo.gl/k1AJiMky4sBqGitA9" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base font-semibold text-copper hover:text-navy-950 transition-colors border-b-2 border-copper/30 hover:border-navy-950 pb-1"
                        >
                            Read More Reviews on Google Maps
                            <Star className="h-4.5 w-4.5 fill-current" />
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
