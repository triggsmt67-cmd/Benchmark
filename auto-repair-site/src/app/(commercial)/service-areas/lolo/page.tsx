import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near Lolo MT | Benchmark Automotive Service",
    description: "Drivers from Lolo, Montana choose Benchmark Automotive Service in Missoula for reliable diagnostics, brake repairs, and trusted engine performance testing.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/lolo"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/lolo",
        title: "Auto Repair Near Lolo MT | Benchmark Automotive Service",
        description: "Drivers from Lolo, Montana choose Benchmark Automotive Service in Missoula for reliable diagnostics, brake repairs, and trusted engine performance testing.",
    }
};

export default function LoloServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": {
            "@type": "City",
            "name": "Lolo, MT"
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
                "name": "Lolo, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/lolo"
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
                        Auto Repair for Drivers in Lolo, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Honest repair recommendations and targeted diagnostic precision for drivers commuting up Highway 93.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Lolo, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                                                {/* Introduction */}
                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    As a Lolo resident, finding an auto shop you can rely on is crucial when you are commuting up Highway 93 daily. Instead of simply swapping out parts and hoping the issue is resolved, Benchmark Automotive Service provides an alternative: definitive testing. Whether you are dealing with a frustrating electrical drain, a transmission feeling sluggish, or your engine light is constantly on, our Missoula facility is built to give you hard facts.
                                </p>
                                <p>
                                    We do not believe in trial and error. Every repair we recommend is backed by data from our comprehensive diagnostic process. We hook up the scopes, test the circuits, and verify the failure point so your vehicle requires just one trip to the shop.
                                </p>
                            </div>
                        </Reveal>

                                                {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">A Standard of Excellence for Lolo Locals</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our reputation with Lolo drivers is built on honest communication and technical precision. We don't just clear fault codes; we trace why they originated in the first place. You will know the exact health of your car, the rationale behind our repairs, and how it directly benefits your daily drive.
                                </p>
                                <p>
                                    Whether it is time for routine fluid services, extensive suspension overhauls, or uncovering complex drivetrain faults, our trained technicians have the patience and the advanced equipment required to treat your vehicle properly.
                                </p>
                            </div>
                        </Reveal>

                                                {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Typical Vehicle Wear in the Bitterroot</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Living in the Bitterroot Valley usually means long commutes and coping with significant temperature shifts, putting localized strain on your car:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Rapid battery degradation from sub-zero winter starts</li>
                                    <li>Premature brake pad wear from downhill highway deceleration</li>
                                    <li>Strut and tie-rod fatigue from navigating off-highway routes</li>
                                    <li>Engine misfires triggered by unmanaged sensor faults</li>
                                    <li>Uneven tire wear or pulling caused by neglected alignment</li>
                                </ul>
                                <p>
                                    Catching these signs early keeps smaller issues from developing into catastrophic failures. A professional inspection gives you the leverage to plan maintenance before it becomes an emergency.
                                </p>
                            </div>
                        </Reveal>

                        {/* Services Lolo Drivers Commonly Need */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Services Lolo Drivers Commonly Need</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from Lolo often come to us for services like:
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
                                    If your vehicle has a warning light on, won’t start, is making noise, pulls to one side, or just doesn’t feel right on the road, we can work through the problem and help you understand the next step.
                                </p>
                            </div>
                        </Reveal>

                        {/* Getting Here from Lolo */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Getting Here from Lolo</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Getting to our shop from Lolo is straightforward for drivers heading into Missoula. Many customers make the trip in for diagnostics, repair, or maintenance because they want the issue checked carefully before committing to repairs.
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
                                    If you live in Lolo and want clear answers before moving forward with repairs, call Benchmark Automotive Service at <strong>(406) 317-1405</strong> to schedule service.<br /><br />
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
