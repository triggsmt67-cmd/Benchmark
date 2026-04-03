import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near Frenchtown MT | Benchmark Automotive Service",
    description: "Drivers from Frenchtown, Montana rely on Benchmark Automotive Service in Missoula for accurate diagnostics, electrical troubleshooting, and complex engine testing.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/frenchtown"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/frenchtown",
        title: "Auto Repair Near Frenchtown MT | Benchmark Automotive Service",
        description: "Drivers from Frenchtown, Montana rely on Benchmark Automotive Service in Missoula for accurate diagnostics, electrical troubleshooting, and complex engine testing.",
    }
};

export default function FrenchtownServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": {
            "@type": "City",
            "name": "Frenchtown, MT"
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
                "name": "Frenchtown, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/frenchtown"
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
                        Auto Repair for Drivers in Frenchtown, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Definitive diagnostic answers and uncompromising mechanical repairs for Interstate 90 commuters.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Frenchtown, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    If you live in Frenchtown, making the quick trip down I-90 into Missoula is worth it when you need auto repairs done correctly the first time. At Benchmark Automotive Service, we cater to Frenchtown residents who are tired of shops guessing at problems. Whether you are dealing with a mysterious warning light, an electrical glitch, or a work truck that is losing power, we provide definitive diagnostic answers before you spend any money on parts.
                                </p>
                                <p>
                                    Our entire philosophy revolves around testing rather than assuming. Before we recommend any repairs, we thoroughly interrogate your vehicle's systems to isolate the exact point of failure. For drivers navigating rural roads, hauling trailers, or just making the daily commute from Frenchtown, that level of mechanical certainty prevents breakdowns and wasted money.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Frenchtown Residents Trust Us</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    People from the Frenchtown area choose our shop because they expect transparency. You want to understand exactly what broke, why it happened, and how our proposed repair will solve it. 
                                </p>
                                <p>
                                    From standard fluid changes and brake jobs to complex modules, starting systems, and tough drivability issues, we handle it all. Our mechanics rely on professional-grade data, extensive visual inspections, and pinpoint testing to ensure we only repair what is genuinely broken.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Local Wear and Tear in Frenchtown</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Driving in and around Frenchtown exposes vehicles to intense seasonal weather, high-speed interstate conditions, and dirt roads. These environments frequently lead to:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>Compromised batteries or failing charging systems during deep winter freezes</li>
                                    <li>Accelerated suspension and linkage wear caused by rural potholes</li>
                                    <li>Brake pulsation and pad depletion from heavy towing or stop-and-go highway traffic</li>
                                    <li>Check engine lights triggered by misfiring spark plugs or failing emissions sensors</li>
                                    <li>Alignment and tire balance issues that cause steering wheel vibration at highway speeds</li>
                                </ul>
                                <p>
                                    Detecting these under-the-hood problems early is the key to minimizing repair bills. If you notice a strange noise or lag in performance, let us isolate the root issue while it is still manageable.
                                </p>
                            </div>
                        </Reveal>

                        {/* Services Frenchtown Drivers Commonly Need */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Services Frenchtown Drivers Commonly Need</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from Frenchtown often come to us for services like:
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
                                    If your vehicle has a warning light on, is making noise, feels rough at speed, won’t start, or just doesn’t feel right on the road, we can work through the issue and help you understand the next step.
                                </p>
                            </div>
                        </Reveal>

                        {/* Getting Here from Frenchtown */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Visiting Us from Frenchtown</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Finding our facility is incredibly easy for Frenchtown residents taking I-90 into Missoula. Our customers consistently tell us the brief drive is entirely justified by the peace of mind our thorough diagnostic process provides.
                                </p>
                                <p>
                                    If your schedule makes a daytime visit tough, take advantage of our secure after-hours drop-off system. Simply leave your vehicle outside regular hours, and we will contact you the following morning.
                                </p>
                            </div>
                        </Reveal>

                        {/* Schedule Service */}
                        <Reveal>
                            <div className="mt-12 p-8 bg-surface-secondary border border-border rounded-sm">
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-4">Schedule Service</h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    If you live in Frenchtown and want clear answers before moving forward with repairs, call Benchmark Automotive Service at <strong>(406) 317-1405</strong> to schedule service.<br /><br />
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
