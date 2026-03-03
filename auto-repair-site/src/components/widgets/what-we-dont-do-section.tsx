import { Reveal } from "@/components/motion/Reveal";

export function WhatWeDontDoSection() {
    return (
        <section className="py-24 md:py-32 bg-bg border-t border-border">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center">
                        {/* Heading Side */}
                        <div className="md:w-1/3 shrink-0">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950">
                                What We Don't Do
                            </h2>
                        </div>

                        {/* List Side */}
                        <div className="md:w-2/3">
                            <ul className="flex flex-col gap-6 md:gap-8 text-xl md:text-2xl font-heading text-navy-900 leading-tight">
                                <li className="flex items-start gap-5">
                                    <div className="w-5 h-[2px] bg-copper shrink-0 mt-3 md:mt-4 opacity-80" />
                                    <span>We don&apos;t replace parts without testing.</span>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="w-5 h-[2px] bg-copper shrink-0 mt-3 md:mt-4 opacity-80" />
                                    <span>We don&apos;t recommend unnecessary repairs.</span>
                                </li>
                                <li className="flex items-start gap-5">
                                    <div className="w-5 h-[2px] bg-copper shrink-0 mt-3 md:mt-4 opacity-80" />
                                    <span>We don&apos;t guess.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
