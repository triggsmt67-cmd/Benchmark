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
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Frenchtown MT",
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
                                    Drivers living in Frenchtown frequently traverse Interstate 90 to reach our single, fully-equipped shop located centrally in Missoula. Because highway commuting and heavy agricultural use place severe demands on Frenchtown vehicles, residents require a shop capable of performing precision diagnostics rather than superficial inspections. Benchmark Automotive Service was built exactly for this purpose.
                                </p>
                                <p>
                                    When you bring your vehicle in from out West, we focus our full attention on discovering the root cause of the problem. Modern sedans, heavily loaded trucks, and fleet vehicles all rely on an intricate web of modules and sensors. Our technicians dive deep into the data streams to isolate anomalies, saving you from replacing perfectly good parts.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Frenchtown Drivers Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Frenchtown residents choose Benchmark Automotive Service to escape the dealership bottleneck without sacrificing high-end capabilities. They value our diagnostic-first methodology, which eliminates the frustrating cycle of incomplete repairs.
                                </p>
                                <p>
                                    We employ experienced technicians trained to evaluate complex electrical and mechanical systems holistically. Because we do not run a franchise quota, we provide honest repair recommendations based solely on safety, longevity, and drivability. We test individual circuits to prove what has failed before quoting any repairs, giving you data-backed answers rather than high-pressure sales pitches.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Frenchtown</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    The unique combination of rural roads, agricultural towing, and high-speed interstate commuting brings a specific set of wear patterns to our diagnostic bays from Frenchtown:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Interstate Transmission Wear:</strong> Commuting long distances regularly requires clean, high-performing transmission fluid and secure shift-solenoid operation.</li>
                                    <li><strong>Battery Drain:</strong> Exposure to the cold Montana environment often causes aging batteries to lose their holding voltage entirely.</li>
                                    <li><strong>Suspension Fatigue:</strong> Rough county roads quickly degrade ball joints and stabilizer links, causing noticeable steering deviations.</li>
                                    <li><strong>Electrical Component Failure:</strong> Dirt entry and rapid vibration often compromise wiring harnesses on heavy-use rural vehicles.</li>
                                    <li><strong>Advanced Check Engine Lights:</strong> Consistent highway driving can highlight catalytic converter and mass-airflow sensor deterioration.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Drivers We Regularly Help */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Frenchtown We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We regularly serve Frenchtown drivers who are struggling with elusive dashboard warnings or severe drivability issues. Our facility is known for tackling scenarios where a light keeps returning intermittently after the primary code has supposedly been handled elsewhere.
                                </p>
                                <p>
                                    When tracking a strange power loss issue or misfire, utilizing intense <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">check engine light diagnostics</Link> prevents customers from endlessly swapping spark plugs without analyzing the fuel trims. When a truck consistently has a dead battery every morning, finding the root cause requires methodical <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">battery drain investigation</Link> instead of just selling another alternator.
                                </p>
                                <p>
                                    Additionally, diagnosing failing window regulators or blown internal modules via our comprehensive <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> tools provides our regional clients undeniable peace of mind.
                                </p>
                            </div>
                        </Reveal>

                        {/* Popular Services */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    When making the trip from Frenchtown, drivers usually request essential stability and safety operations alongside deep-level network diagnostics.
                                </p>
                                <p>
                                    Ensuring stopping power at highway speeds makes our <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake inspection and repair</Link> extremely popular. In addition to brakes, drivers also utilize our shop to maintain their powertrain fluid intervals natively. And of course, getting a complete <Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">vehicle inspection</Link> prior to buying a used four-wheel-drive allows our customers to bypass hidden repair disasters.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Distance / Convenience */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Connecting to our Missoula facility is exceptionally easy for Frenchtown residents thanks to Interstate 90. Drivers can head directly into town and access Reserve Street without navigating dense downtown cross-traffic.
                                </p>
                                <p>
                                    We offer an after-hours key drop so your schedule remains entirely in your control, and provide detailed diagnostic findings equipped with photos sent straight to your phone so you can confidently authorize repairs remotely without returning into Missoula midday.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Directions */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From Frenchtown to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    From Frenchtown, jump directly onto Interstate 90 East. Follow I-90 E until you take the Reserve Street exit heading southbound. Continue down Reserve Street, then turn left eastward onto North Ave W. You will see our shop centrally located at 1914 North Ave W, fully equipped to resolve your vehicle’s challenges.
                                </p>
                            </div>
                        </Reveal>

                        {/* Call to Action */}
                        <Reveal>
                            <div className="mt-12 p-8 bg-surface-secondary border border-border rounded-sm">
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-4">Ready for Reliable Auto Repair?</h2>
                                <p className="text-text-secondary text-lg mb-8">
                                    Stop wondering if your vehicle is actually fixed. Experience the difference of premium independent automotive care centered on definitive answers.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/contact"
                                        className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-medium rounded-sm transition-colors text-lg"
                                    >
                                        Schedule Service Today
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
