"use client";

import * as React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { DiagnosticConfidenceStrip } from "@/components/widgets/diagnostic-confidence-strip";
import { Search, ChevronRight, Activity, Wrench, AlertTriangle, ThermometerSnowflake, Phone, CarFront } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "All" | "Diagnostics" | "Repairs" | "Vehicle Problems" | "Comfort & Climate";

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    slug: string;
    categories: Category[];
    section: "Diagnostics" | "Repairs" | "Common Vehicle Problems" | "Comfort & Climate";
    isMostRequested: boolean;
    isComingSoon?: boolean;
    icon: React.ReactNode;
}

const SERVICES_DATA: ServiceItem[] = [
    // Diagnostics
    {
        id: "adv-diag",
        title: "Advanced Diagnostics",
        description: "Pinpoint root-cause analysis for complex electronic and mechanical failures.",
        slug: "advanced-diagnostics",
        categories: ["Diagnostics", "All"],
        section: "Diagnostics",
        isMostRequested: false,
        icon: <Activity className="w-6 h-6" />
    },
    {
        id: "cel",
        title: "Check Engine Light",
        description: "Accurate code scanning and sensor datastream analysis.",
        slug: "check-engine-light",
        categories: ["Diagnostics", "Vehicle Problems", "All"],
        section: "Diagnostics",
        isMostRequested: true,
        icon: <CarFront className="w-6 h-6" />
    },
    {
        id: "elec-diag",
        title: "Electrical Diagnostics",
        description: "Tracing shorts, open circuits, and module communication errors.",
        slug: "electrical-diagnostics",
        categories: ["Diagnostics", "All"],
        section: "Diagnostics",
        isMostRequested: true,
        icon: <Activity className="w-6 h-6" />
    },

    // Repairs
    {
        id: "brake",
        title: "Brake Repair",
        description: "Premium pad replacement, rotor resurfacing, and fluid flushes.",
        slug: "brake-repair",
        categories: ["Repairs", "All"],
        section: "Repairs",
        isMostRequested: true,
        icon: <Wrench className="w-6 h-6" />
    },
    {
        id: "susp",
        title: "Suspension & Steering",
        description: "Shocks, struts, tie rods, and complete chassis alignments.",
        slug: "suspension-steering",
        categories: ["Repairs", "All"],
        section: "Repairs",
        isMostRequested: true,
        icon: <Wrench className="w-6 h-6" />
    },
    {
        id: "ac-heat",
        title: "A/C & Heating",
        description: "Refrigerant recharges, compressor replacements, and heater cores.",
        slug: "ac-heating",
        categories: ["Repairs", "Comfort & Climate", "All"],
        section: "Repairs",
        isMostRequested: true,
        icon: <ThermometerSnowflake className="w-6 h-6" />
    },

    // Vehicle Problems
    {
        id: "no-start",
        title: "Car Won't Start",
        description: "Testing batteries, starters, alternators, and fuel delivery systems.",
        slug: "car-wont-start",
        categories: ["Vehicle Problems", "Diagnostics", "All"],
        section: "Common Vehicle Problems",
        isMostRequested: true,
        icon: <AlertTriangle className="w-6 h-6" />
    },
    {
        id: "bat-drain",
        title: "Battery Drain",
        description: "Parasitic draw testing for batteries that keep dying over night.",
        slug: "battery-drain",
        categories: ["Vehicle Problems", "Diagnostics", "All"],
        section: "Common Vehicle Problems",
        isMostRequested: false,
        isComingSoon: true,
        icon: <AlertTriangle className="w-6 h-6" />
    },
    {
        id: "overheat",
        title: "Engine Overheating",
        description: "Diagnosing leaks, thermostats, water pumps, and cooling fans.",
        slug: "engine-overheating",
        categories: ["Vehicle Problems", "All"],
        section: "Common Vehicle Problems",
        isMostRequested: false,
        isComingSoon: true,
        icon: <AlertTriangle className="w-6 h-6" />
    },
    {
        id: "vibration",
        title: "Steering Vibration",
        description: "Identifying warped rotors, unbalanced tires, or worn front-end parts.",
        slug: "steering-vibration",
        categories: ["Vehicle Problems", "All"],
        section: "Common Vehicle Problems",
        isMostRequested: false,
        isComingSoon: true,
        icon: <AlertTriangle className="w-6 h-6" />
    },
    {
        id: "noise",
        title: "Car Making Noise",
        description: "Squeaks, grinds, and clunks isolated and correctly repaired.",
        slug: "car-making-noise",
        categories: ["Vehicle Problems", "All"],
        section: "Common Vehicle Problems",
        isMostRequested: false,
        isComingSoon: true,
        icon: <AlertTriangle className="w-6 h-6" />
    }
];

const CATEGORIES: Category[] = ["All", "Diagnostics", "Repairs", "Vehicle Problems", "Comfort & Climate"];

function ServiceCard({ service }: { service: ServiceItem }) {
    const isComingSoon = service.isComingSoon;

    const CardWrap = ({ children }: { children: React.ReactNode }) => {
        if (isComingSoon) {
            return (
                <div title="This detailed guide is coming soon." className="h-full cursor-not-allowed opacity-[0.85]">
                    {children}
                </div>
            );
        }
        return (
            <Link href={`/services/${service.slug}`} className="block h-full cursor-pointer focus-visible:outline-copper rounded-sm">
                {children}
            </Link>
        );
    };

    return (
        <CardWrap>
            <Card
                className={cn(
                    "group relative h-full flex flex-col overflow-hidden rounded-sm border bg-surface transition-all duration-200 ease-out text-left",
                    isComingSoon ? "border-border shadow-none" : "border-border shadow-sm shadow-navy-900/5 hover:-translate-y-[2px] hover:shadow-md"
                )}
            >
                {/* Top styling strip */}
                <div className={cn(
                    "absolute top-0 left-0 right-0 h-[2px] transition-colors duration-200",
                    isComingSoon ? "bg-muted" : "bg-copper/40 group-hover:bg-copper"
                )} />
                <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-white opacity-40" />

                <CardHeader className="pt-8 pb-4 px-6 md:px-8 relative">
                    <div className="mb-4 flex items-start justify-between">
                        <div className={cn(
                            "transition-colors duration-200 [&>svg]:stroke-[1.5]",
                            isComingSoon ? "text-muted-foreground" : "text-navy-900 group-hover:text-copper"
                        )}>
                            {service.icon}
                        </div>
                        {isComingSoon && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-muted text-muted-foreground border border-border">
                                Coming Soon
                            </span>
                        )}
                        {!isComingSoon && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-copper transform -translate-x-2 group-hover:translate-x-0">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        )}
                    </div>
                    <CardTitle className={cn(
                        "font-heading text-xl font-semibold tracking-tight",
                        isComingSoon ? "text-navy-900/70" : "text-navy-950"
                    )}>
                        {service.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="px-6 md:px-8 pb-8 flex-grow">
                    <p className={cn(
                        "font-sans text-[15px] leading-relaxed",
                        isComingSoon ? "text-muted-foreground" : "text-text-secondary"
                    )}>
                        {service.description}
                    </p>
                </CardContent>
            </Card>
        </CardWrap>
    );
}

export function ServicesDirectory() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [activeCategory, setActiveCategory] = React.useState<Category>("All");

    const filteredServices = SERVICES_DATA.filter((service) => {
        const matchesCategory = activeCategory === "All" || service.categories.includes(activeCategory);
        const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            service.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const isFiltered = searchQuery.length > 0 || activeCategory !== "All";

    const groupedServices = {
        "Diagnostics": filteredServices.filter(s => s.section === "Diagnostics"),
        "Repairs": filteredServices.filter(s => s.section === "Repairs"),
        "Common Vehicle Problems": filteredServices.filter(s => s.section === "Common Vehicle Problems"),
    };

    const mostRequested = SERVICES_DATA.filter(s => s.isMostRequested);

    return (
        <div className="w-full flex flex-col">

            {/* Quick Find Toolbar */}
            <section className="bg-bg py-10 md:py-16 border-b border-border sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div className="relative w-full md:w-96">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                                <Input
                                    placeholder="Search services..."
                                    className="pl-10 h-12 text-base rounded-sm shadow-sm"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    aria-label="Search services"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                                {CATEGORIES.map(category => (
                                    <button
                                        key={category}
                                        onClick={() => setActiveCategory(category)}
                                        className={cn(
                                            "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors border",
                                            activeCategory === category
                                                ? "bg-navy-950 text-white border-navy-950 shadow-md"
                                                : "bg-surface text-text-secondary border-border hover:bg-muted hover:text-navy-900"
                                        )}
                                        aria-pressed={activeCategory === category}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="bg-surface py-20 md:py-24">
                <div className="container mx-auto px-4 md:px-6">

                    {/* Featured / Most Requested (Hide when actively searching/filtering heavily to show direct results) */}
                    {!isFiltered && (
                        <div className="mb-24">
                            <Reveal>
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-8 tracking-tight flex items-center gap-3">
                                    <div className="w-1.5 h-6 bg-copper" />
                                    Most Requested
                                </h2>
                            </Reveal>
                            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {mostRequested.map((service, index) => (
                                    <StaggerItem key={service.id}>
                                        <ServiceCard service={service} />
                                    </StaggerItem>
                                ))}
                            </Stagger>
                        </div>
                    )}

                    {/* Sectioned Grids */}
                    {Object.entries(groupedServices).map(([sectionTitle, services]) => {
                        if (services.length === 0) return null;

                        return (
                            <div key={sectionTitle} className="mb-20 last:mb-0">
                                <Reveal>
                                    <h2 className="font-heading text-2xl font-bold text-navy-950 mb-8 tracking-tight flex items-center gap-3 border-b border-border pb-4">
                                        {sectionTitle}
                                    </h2>
                                </Reveal>
                                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {services.map((service) => (
                                        <StaggerItem key={service.id}>
                                            <ServiceCard service={service} />
                                        </StaggerItem>
                                    ))}
                                </Stagger>
                            </div>
                        );
                    })}

                    {filteredServices.length === 0 && (
                        <div className="py-20 text-center text-text-secondary">
                            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                            <p className="text-lg">No services found matching your criteria.</p>
                            <Button
                                variant="link"
                                className="text-copper mt-2"
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}

                </div>
            </div>

            {/* Diagnostic Confidence Strip (Compact) */}
            <div className="border-y border-border">
                <DiagnosticConfidenceStrip />
            </div>

            {/* "Not Sure What You Need?" Card */}
            <section className="bg-surface py-20 md:py-32">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <Card className="max-w-4xl mx-auto border-border shadow-md overflow-hidden rounded-sm relative bg-white">
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-copper to-brand-red" />
                            <CardContent className="p-8 md:p-12 text-center flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-6 border border-red-100">
                                    <Phone className="w-7 h-7 text-brand-red" />
                                </div>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                                    Not sure what to pick?
                                </h2>
                                <p className="text-lg text-text-secondary mb-10 max-w-2xl">
                                    Describe the symptoms and we'll help point you in the right direction. No guesswork, just clear answers.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                                    <Button size="lg" asChild className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg rounded-sm">
                                        <a href="tel:4063171405" aria-label="Call us for help at (406) 317-1405">
                                            Call Now
                                        </a>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild className="w-full sm:w-auto border-copper text-copper hover:bg-copper hover:text-white h-14 px-10 text-lg transition-colors rounded-sm">
                                        <Link href="/contact">
                                            Contact Us
                                        </Link>
                                    </Button>
                                </div>

                                <div className="text-sm text-muted-foreground pt-6 border-t border-border w-full max-w-sm">
                                    <p className="font-medium text-navy-900 mb-1">After-hours drop-off available.</p>
                                    <p>We'll confirm receipt the next business day.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </Reveal>
                </div>
            </section>
        </div>
    );
}

