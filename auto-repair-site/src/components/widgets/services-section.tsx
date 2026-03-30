import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Disc2, Zap, Cog, Activity, ArrowDownToLine } from "lucide-react";
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
        slug: "undercarriage-and-suspension",
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
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <Card
                                    className={`group relative h-full flex flex-col overflow-hidden rounded-sm border transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md text-left ${service.isElevated
                                        ? "bg-navy-50/40 border-navy-200 shadow-inner"
                                        : "bg-surface border-border shadow-sm shadow-navy-900/5"
                                        }`}
                                >
                                    {/* Bespoke Copper Top Edge Rule */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper/40 group-hover:bg-copper transition-colors duration-200" />

                                    {/* Subtle Edge Highlight for Materiality */}
                                    <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-white opacity-40" />

                                    <CardHeader className="pt-8 pb-4 px-6 md:px-8">
                                        <div className="mb-4">
                                            <div className="text-navy-900 group-hover:text-copper transition-colors duration-200 [&>svg]:stroke-[1.5]">
                                                {service.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy-950">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 md:px-8 pb-8">
                                        <p className="font-sans text-[15px] leading-relaxed text-text-secondary">
                                            {service.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
