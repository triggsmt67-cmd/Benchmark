import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near Milltown MT | Benchmark Automotive Service",
    description: "Benchmark Automotive Service in Missoula provides Milltown residents with precise, diagnostic-first vehicle repair, electrical testing, and maintenance.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/milltown"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/milltown",
        title: "Auto Repair Near Milltown MT | Benchmark Automotive Service",
        description: "Benchmark Automotive Service in Missoula provides Milltown residents with precise, diagnostic-first vehicle repair, electrical testing, and maintenance.",
    }
};

export default function MilltownServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Milltown MT",
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
                "name": "Milltown, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/milltown"
            }
        ]
    };

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([bSchema, breadcrumbSchema]) }}
            />
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                        Auto Repair for Drivers in Milltown, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Professional automotive repair, brake inspection, and electrical testing for drivers heading west from Milltown.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Milltown, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from Milltown often make the short trip into Missoula when they want a vehicle problem diagnosed correctly before money gets spent on the wrong repair. Whether it’s a warning light, a starting problem, brake noise, suspension wear, or a car that just doesn’t feel right, Benchmark Automotive Service gives Milltown drivers a place to get clear answers before parts are replaced.
                                </p>
                                <p>
                                    At Benchmark Automotive Service, we take a diagnostic-first approach. We inspect the vehicle, test the system causing the problem, confirm the cause, and explain what we found before recommending repairs. For Milltown drivers dealing with commuting, changing weather, rough roads, and year-round Montana driving conditions, that kind of accuracy matters.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Drivers From Milltown Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Many drivers from Milltown come to us because they want more than a quick guess. They want to know what failed, why it failed, and what the repair is actually meant to fix.
                                </p>
                                <p>
                                    We work on everything from check engine lights and electrical problems to brake issues, suspension wear, starting problems, drivability concerns, and routine maintenance. Our process is built around careful testing, clear recommendations, and repairs based on confirmed findings instead of trial-and-error part replacement.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Milltown Drivers</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Milltown vehicles often see a mix of highway travel, local driving, changing weather, and seasonal road wear. That can bring out problems like:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>battery and charging issues after cold weather or repeated short-trip driving</li>
                                    <li>warning lights tied to sensors, electrical faults, or drivability issues</li>
                                    <li>suspension and steering wear from rough roads, potholes, and freeze-thaw damage</li>
                                    <li>brake wear from traffic, changing road conditions, and heavier vehicle use</li>
                                    <li>electrical problems caused by moisture, corrosion, or damaged wiring</li>
                                    <li>vibration, pulling, or uneven tire wear that becomes more noticeable at speed</li>
                                </ul>
                                <p>
                                    Some of these issues show up slowly. Others don’t. The important part is figuring out what is actually wrong before it turns into a bigger repair or leads to money spent on the wrong parts.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Services Milltown Drivers Commonly Need</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from Milltown often come to us for services like:
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
                                    If your vehicle has a warning light on, is making noise, won’t start, pulls to one side, shakes at speed, or just doesn’t feel right on the road, we can work through the issue and help you understand the next step.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Getting Here from Milltown</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Getting to our shop from Milltown is straightforward for drivers heading into Missoula. Many customers make the short drive in because they want the problem checked carefully before committing to repairs.
                                </p>
                                <p>
                                    If dropping the vehicle off during the day is difficult, after-hours drop-off is available. We’ll confirm receipt the next business day.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <div className="mt-12 p-8 bg-surface-secondary border border-border rounded-sm">
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-4">Schedule Service</h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    If you live in Milltown and want clear answers before moving forward with repairs, call Benchmark Automotive Service at <strong>(406) 317-1405</strong> to schedule service.<br /><br />
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
