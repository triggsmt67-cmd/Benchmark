import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Search, Activity, FileCheck2, Wrench } from "lucide-react";

const steps = [
    {
        num: "1",
        title: "Inspect & Document",
        desc: "We perform a thorough physical inspection of critical systems and run a digital scan to pull system codes. We document all visual findings and share a digital report, ensuring you see exactly what we see.",
        icon: <Search className="h-6 w-6" />,
        accentClass: "bg-copper",
        iconClass: "bg-copper/5 text-copper group-hover:bg-copper group-hover:text-white",
        numClass: "text-copper/10 group-hover:text-copper/25"
    },
    {
        num: "2",
        title: "Isolate & Test",
        desc: "Using professional-grade scan tools, lab scopes, and wiring schematics, we perform pinpoint electrical and mechanical testing. We verify component failures directly rather than guessing based on computer codes.",
        icon: <Activity className="h-6 w-6" />,
        accentClass: "bg-blue-600",
        iconClass: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
        numClass: "text-blue-600/10 group-hover:text-blue-600/25"
    },
    {
        num: "3",
        title: "Consult & Confirm",
        desc: "We provide an itemized breakdown of our findings. We explain what needs immediate attention for safety, what can wait, and the exact cost of parts and labor. No repairs start without your clear approval.",
        icon: <FileCheck2 className="h-6 w-6" />,
        accentClass: "bg-emerald-600",
        iconClass: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
        numClass: "text-emerald-600/10 group-hover:text-emerald-600/25"
    },
    {
        num: "4",
        title: "Repair & Validate",
        desc: "Our technicians execute precision repairs using high-quality parts. We then run a second round of testing and a validation test drive to guarantee the issue is completely resolved before you pick up.",
        icon: <Wrench className="h-6 w-6" />,
        accentClass: "bg-brand-red",
        iconClass: "bg-red-50 text-brand-red group-hover:bg-brand-red group-hover:text-white",
        numClass: "text-brand-red/10 group-hover:text-brand-red/25"
    }
];

export function ProcessTimelineSection() {
    return (
        <section id="process" className="py-24 md:py-32 bg-bg border-t border-border overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal instant>
                    <div className="mb-16 max-w-3xl text-left">
                        <h2 id="auto-repair-diagnostic-process" className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 tracking-tight">
                            Our Process: Transparency at Every Step
                        </h2>
                        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-6">
                            We believe automotive service should be straightforward. Our systematic approach ensures you stay informed, from check-in to final road test.
                        </p>
                        <PrecisionDivider instant />
                    </div>
                </Reveal>

                {/* Timeline Cards Grid */}
                <Stagger instant className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
                    {steps.map((step, idx) => (
                        <StaggerItem key={idx} className="h-full">
                            <article className="group relative bg-white border border-border rounded-sm shadow-sm shadow-navy-950/5 p-8 flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden text-left">
                                {/* Color-coded top accent strip */}
                                <div className={`absolute top-0 left-0 right-0 h-[4px] transition-colors duration-300 ${step.accentClass}`} aria-hidden="true" />
                                
                                <div className="flex items-center justify-between mb-6">
                                    {/* Icon Container with specific step brand background and color */}
                                    <div className={`inline-flex items-center justify-center h-12 w-12 rounded-sm transition-all duration-300 [&>svg]:stroke-[1.5] ${step.iconClass}`} aria-hidden="true">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Subtle step background number */}
                                    <span className={`font-heading font-extrabold text-5xl leading-none transition-colors duration-300 select-none ${step.numClass}`}>
                                        0{step.num}
                                    </span>
                                </div>
                                
                                <h3 className="font-heading text-xl font-bold text-navy-950 mb-3 group-hover:text-copper transition-colors duration-300">
                                    {step.num}. {step.title}
                                </h3>
                                
                                <p className="font-sans text-[14px] leading-relaxed text-text-secondary">
                                    {step.desc}
                                </p>
                            </article>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
