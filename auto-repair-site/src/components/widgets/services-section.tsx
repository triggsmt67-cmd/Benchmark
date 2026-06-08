import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Disc2, Zap, Cog, Activity, ArrowDownToLine, ArrowRight } from "lucide-react";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Link from "next/link";

const services = [
    {
        title: "AC & Heating",
        description: "Complete climate control diagnostics, refrigerant recharges, and compressor repairs.",
        icon: <Wrench className="h-6 w-6" />,
        slug: "ac-heating",
        isElevated: false,
    },
    {
        title: "Brake Systems",
        description: "Pad replacement, rotor resurfacing, line inspection, and fluid flushed for confident stopping power.",
        icon: <Disc2 className="h-6 w-6" />,
        slug: "brake-repair",
        isElevated: false,
    },
    {
        title: "Electrical Diagnostics",
        description: "Advanced diagnostics for alternators, starters, batteries, and complex wiring issues.",
        icon: <Zap className="h-6 w-6" />,
        slug: "advanced-diagnostics",
        isElevated: true,
    },
    {
        title: "Engine & Performance",
        description: "From check engine light scans to full performance restorations and timing belt services.",
        icon: <Cog className="h-6 w-6" />,
        slug: "engine-and-performance",
        isElevated: true,
    },
    {
        title: "General Maintenance",
        description: "Factory-scheduled services, premium oil changes, and comprehensive multi-point inspections.",
        icon: <Activity className="h-6 w-6" />,
        slug: "general-maintenance",
        isElevated: false,
    },
    {
        title: "Undercarriage & Suspension",
        description: "Alignments, shocks, struts, and exhaust repairs for a smooth, stable ride.",
        icon: <ArrowDownToLine className="h-6 w-6" />,
        slug: "suspension-steering",
        isElevated: false,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="bg-surface py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal instant>
                    <div className="mb-16 max-w-3xl text-left">
                        <h2 id="missoula-auto-services" className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6 tracking-tight">
                            Comprehensive Automotive Service. No Guesswork.
                        </h2>
                        <PrecisionDivider instant />
                    </div>
                </Reveal>

                <Stagger instant className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <StaggerItem key={index} className="h-full">
                            <Link href={`/services/${service.slug}`} className="block h-full cursor-pointer">
                                <Card
                                    className={`group relative h-full flex flex-col overflow-hidden rounded-sm border transition-all duration-300 ease-out hover:-translate-y-1 text-left ${service.isElevated
                                        ? "bg-navy-50/60 border-navy-200 shadow-sm hover:shadow-xl hover:border-navy-300"
                                        : "bg-white border-border shadow-sm shadow-navy-950/5 hover:shadow-xl hover:border-navy-300"
                                        }`}
                                >
                                    {/* Bespoke Copper Top Edge Rule */}
                                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-copper/60 group-hover:bg-brand-red transition-colors duration-300" />

                                    {/* Subtle Edge Highlight for Materiality */}
                                    <div className="absolute top-[3px] left-0 right-0 h-[1px] bg-white opacity-40" />

                                    <CardHeader className="pt-8 pb-4 px-6 md:px-8">
                                        <div className="mb-4">
                                            <div className="inline-flex items-center justify-center h-12 w-12 rounded-sm bg-navy-50 text-navy-900 group-hover:bg-copper group-hover:text-white transition-colors duration-300 [&>svg]:stroke-[1.5]">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy-950">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 md:px-8 pb-4 flex-grow">
                                        <p className="font-sans text-[15px] leading-relaxed text-text-secondary">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                    
                                    {/* High-affordance outline button CTA */}
                                    <div className="mt-auto px-6 md:px-8 pb-8 pt-4">
                                        <span className="inline-flex items-center justify-center bg-transparent border border-copper text-copper group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white px-5 py-2.5 text-sm font-semibold rounded-sm transition-all duration-300 w-full sm:w-auto">
                                            <span>View Service Details</span>
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
                                        </span>
                                    </div>
                                </Card>
                            </Link>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
