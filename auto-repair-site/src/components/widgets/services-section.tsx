import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Disc2, Zap, Cog, Activity, ArrowDownToLine } from "lucide-react";

const services = [
    {
        title: "AC & Heating",
        description: "Complete climate control diagnostics, refrigerant recharges, and compressor repairs.",
        icon: <Wrench className="h-8 w-8 text-copper" />,
    },
    {
        title: "Brake Systems",
        description: "Pad replacement, rotor resurfacing, line inspection, and fluid flushed for confident stopping power.",
        icon: <Disc2 className="h-8 w-8 text-copper" />,
    },
    {
        title: "Electrical",
        description: "Advanced diagnostics for alternators, starters, batteries, and complex wiring issues.",
        icon: <Zap className="h-8 w-8 text-copper" />,
    },
    {
        title: "Engine & Performance",
        description: "From check engine light scans to full performance restorations and timing belt services.",
        icon: <Cog className="h-8 w-8 text-copper" />,
    },
    {
        title: "General Maintenance",
        description: "Factory-scheduled services, premium oil changes, and comprehensive multi-point inspections.",
        icon: <Activity className="h-8 w-8 text-copper" />,
    },
    {
        title: "Undercarriage & Suspension",
        description: "Alignments, shocks, struts, and exhaust repairs for a smooth, stable ride.",
        icon: <ArrowDownToLine className="h-8 w-8 text-copper" />,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="bg-surface py-20 md:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 max-w-3xl">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy-950 mb-6">
                        Comprehensive Automotive Service. No Guesswork.
                    </h2>
                    <div className="h-1 w-20 bg-brand-red rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-border/50 shadow-sm hover:shadow-md transition-shadow group">
                            <CardHeader className="pb-4">
                                <div className="mb-4 bg-bg inline-flex p-4 rounded-xl group-hover:bg-navy-950 transition-colors">
                                    <div className="group-hover:[&>svg]:text-surface transition-colors">
                                        {service.icon}
                                    </div>
                                </div>
                                <CardTitle className="font-heading text-xl text-navy-900 group-hover:text-brand-red transition-colors">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-text-secondary leading-relaxed">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
