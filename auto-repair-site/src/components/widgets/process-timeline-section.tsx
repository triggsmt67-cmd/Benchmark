import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { LineDraw } from "@/components/motion/LineDraw";

const steps = [
    {
        num: "1",
        title: "Inspect",
        desc: "Comprehensive vehicle inspection to understand the full picture."
    },
    {
        num: "2",
        title: "Test",
        desc: "Accurate diagnostic testing using professional-grade equipment."
    },
    {
        num: "3",
        title: "Confirm",
        desc: "Verified findings before recommending any repair."
    },
    {
        num: "4",
        title: "Repair",
        desc: "Precision repair followed by final validation."
    }
];

export function ProcessTimelineSection() {
    return (
        <section className="py-24 md:py-32 bg-bg border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal instant>
                    <div className="mb-16">
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-4">
                            Our Process
                        </h2>
                    </div>
                </Reveal>

                {/* Timeline Container */}
                <div className="relative pt-4">
                    {/* The continuous connector line drawn left to right */}
                    <div className="absolute top-0 left-0 right-0 hidden md:block">
                        <LineDraw instant className="w-full opacity-60" width="w-full" />
                    </div>

                    <Stagger instant className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 lg:gap-12 relative pt-8 md:pt-12">
                        {steps.map((step, idx) => (
                            <StaggerItem key={idx} className="relative group">
                                {/* Mobile/Desktop Tick marks */}
                                <div className="absolute -top-12 left-0 hidden md:block">
                                    <div className="w-[2px] h-4 bg-copper/60 transition-colors group-hover:bg-copper" />
                                </div>
                                <div className="md:hidden mb-4">
                                    <LineDraw instant width="w-12" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <span className="font-heading font-extrabold text-navy-900/10 text-5xl leading-none md:absolute md:-top-16 md:right-0 group-hover:text-copper/10 transition-colors pointer-events-none">
                                        0{step.num}
                                    </span>
                                    <h3 className="font-heading text-2xl font-bold text-navy-950 mt-1 md:mt-0 relative z-10">
                                        {step.num}. {step.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed text-[15px] relative z-10">
                                        {step.desc}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </div>
        </section>
    );
}
