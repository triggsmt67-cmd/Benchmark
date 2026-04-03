import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair in Missoula, MT | Benchmark Automotive Service",
    description: "Benchmark Automotive Service is the premier destination for Missoula drivers seeking professional automotive diagnostics, precise repairs, and honest service.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/missoula"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/missoula",
        title: "Auto Repair in Missoula, MT | Benchmark Automotive Service",
        description: "Benchmark Automotive Service is the premier destination for Missoula drivers seeking professional automotive diagnostics, precise repairs, and honest service.",
    }
};

export default function MissoulaServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": {
            "@type": "City",
            "name": "Missoula, MT"
        },
        "url": "https://www.benchmarkmissoula.com",
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://www.benchmarkmissoula.com/service-areas"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Missoula, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/missoula"
            }
        ]
    };

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([bSchema, breadcrumbSchema]) }}
            />
            {/* Hero */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                        Auto Repair for Drivers in Missoula, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Located right here in town, we provide Missoula residents with uncompromising diagnostics and confirmed repairs.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Missoula, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Missoula is home base for Benchmark Automotive Service. It’s where we work, where our customers live, and where we’ve built our reputation around accurate diagnostics, clear recommendations, and repairs based on what is actually wrong. For drivers in Missoula, that matters. Between daily commuting, stop-and-go traffic, changing weather, rough spring roads, and year-round vehicle use, problems show up fast when something in the system starts to fail.
                                </p>
                                <p>
                                    At Benchmark Automotive Service, we take a diagnostic-first approach. We inspect the vehicle, test the system causing the problem, confirm the cause, and explain what we found before recommending repairs. That applies whether you’re dealing with a warning light, a starting problem, brake noise, steering issues, or a car that just doesn’t feel right on the road.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Missoula Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Missoula Drivers Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers in Missoula come to us because they want more than a quick guess. They want to know what failed, why it failed, and what the repair is actually meant to fix.
                                </p>
                                <p>
                                    We work on everything from check engine lights and electrical problems to brake issues, suspension wear, drivability problems, and routine maintenance. Our process is built around accurate testing, clear communication, and repairs based on confirmed findings instead of trial-and-error part replacement.
                                </p>
                                <p>
                                    For local drivers, that means less wasted money, fewer repeat visits for the same unresolved issue, and a clearer understanding of what is urgent, what can wait, and what the next step should be.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues for Missoula Drivers */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Missoula Drivers</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Missoula vehicles deal with a mix of city traffic, highway driving, seasonal temperature swings, potholes, winter grime, and year-round commuting. That brings out a few common problems:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>battery and charging issues after cold weather or repeated short-trip driving</li>
                                    <li>brake wear from stop-and-go traffic, downhill braking, and changing road conditions</li>
                                    <li>suspension, tire, and alignment problems from potholes, rough pavement, and freeze-thaw damage</li>
                                    <li>warning lights tied to sensors, emissions systems, electrical faults, or drivability issues</li>
                                    <li>vibration, pulling, or uneven tire wear that becomes more noticeable at speed</li>
                                    <li>electrical problems caused by moisture, corrosion, or damaged wiring</li>
                                </ul>
                                <p>
                                    Some of these issues start small. Some don’t. The important part is figuring out which is which before the wrong repair gets recommended.
                                </p>
                            </div>
                        </Reveal>

                        {/* Services Missoula Drivers Commonly Need */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Services Missoula Drivers Commonly Need</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Missoula drivers often come to us for services like:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><Link href="/services/advanced-diagnostics" className="text-copper hover:underline font-medium">Advanced Diagnostics</Link></li>
                                    <li><Link href="/services/brake-repair" className="text-copper hover:underline font-medium">Brake Repair</Link></li>
                                    <li><Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">Electrical Diagnostics</Link></li>
                                    <li><Link href="/services/oil-change" className="text-copper hover:underline font-medium">Oil Change</Link></li>
                                    <li><Link href="/services/suspension-steering" className="text-copper hover:underline font-medium">Suspension &amp; Steering Repair</Link></li>
                                    <li><Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">Vehicle Inspection</Link></li>
                                </ul>
                                <p>
                                    If your vehicle has a warning light on, is making noise, won’t start, pulls to one side, shakes at speed, or just doesn’t feel right, we can work through the issue and help you understand the next step.
                                </p>
                            </div>
                        </Reveal>

                        {/* Conveniently Located in Missoula */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Conveniently Located in Missoula</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Because we are located in Missoula, it’s easy for local drivers to get the vehicle to us for testing, repair, or routine service. Whether you’re coming from central Missoula, Reserve Street, the South Hills, downtown, or nearby neighborhoods, the goal is the same: get the problem checked carefully before it turns into a bigger repair.
                                </p>
                                <p>
                                    If dropping the vehicle off during the day is difficult, after-hours drop-off is available. We’ll confirm receipt the next business day.
                                </p>
                            </div>
                        </Reveal>

                        {/* Schedule Service */}
                        <Reveal>
                            <div className="mt-12 p-8 bg-surface-secondary border border-border rounded-sm">
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-4">Schedule Service</h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    If you live in Missoula and want clear answers before moving forward with repairs, call Benchmark Automotive Service at <strong>(406) 317-1405</strong> to schedule service.<br /><br />
                                    After-hours drop-off is available. We’ll confirm receipt the next business day.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-medium rounded-sm transition-colors text-lg"
                                    >
                                        Schedule Service
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
