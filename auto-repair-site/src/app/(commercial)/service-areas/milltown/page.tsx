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
        "@type": "AutoRepair",
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
                                    Drivers from Milltown frequently travel along Interstate 90 or MT-200 to our single, fully-capable shop located centrally in Missoula. We know that maintaining a dependable vehicle requires access to professionals who prioritize data-driven testing. Milltown residents rely heavily on their cars and light trucks for daily hauling, navigating tricky winter conditions, and making regular trips across the valley, making downtime or incomplete repairs completely unacceptable.
                                </p>
                                <p>
                                    At Benchmark Automotive Service, we take the stress out of automotive trouble by implementing a strict policy to test and confirm before we ever recommend replacing a part. We operate out of highly-equipped bays where our diagnostic specialists can pinpoint electrical anomalies and deeply embedded mechanical issues.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Drivers From Milltown Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Milltown drivers seek out our facility because of our unyielding commitment to our diagnostic-first philosophy. We don't believe in gambling with your money. If your vehicle exhibits an intermittent judder or an erratic fuel economy change, we measure the sensor feedback directly to identify the failing component.
                                </p>
                                <p>
                                    Our shop provides honest repair recommendations that clearly detail the condition of your vehicle. You receive accurate cost breakdowns and understand precisely why a repair is necessary before you approve any work. With significantly experienced technicians managing the workflow, we guarantee every repair holds up to the rugged realities of living in Montana.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Milltown</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Vehicles in the Milltown community are subjected to extreme environmental shifts, which commonly spawn issues like:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Engine Thermostat Stuck Open or Closed:</strong> Sub-zero winter mornings cause mechanical thermostat springs to fail, leading to overheating or no interior cabin heat.</li>
                                    <li><strong>Corroded Electrical Wiring:</strong> Road salts rapidly damage exposed ground straps, leading to intermittent failures.</li>
                                    <li><strong>Cold-Weather Battery Failures:</strong> Aging lead-acid batteries fail to maintain sufficient cranking amps during a deep freeze.</li>
                                    <li><strong>Towing Strain on Braking Systems:</strong> Hauling trailers through the area rapidly warps brake rotors and severely depletes pad thickness.</li>
                                    <li><strong>Complex Air/Fuel Imbalances:</strong> Sensor fouling from highway driving often disrupts engine power causing stalling or hesitation.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Milltown We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    When an engine control module constantly throws an unfamiliar code, residents from Milltown know they can trust our facility to provide concrete answers.
                                </p>
                                <p>
                                    For vehicles producing unusual smoke profiles or running inconsistently, our rigorous <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">check engine light testing</Link> completely prevents misdiagnosed sensor replacements. Similarly, when a car is fully immobilized, isolating the core issue within the network requires patient <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> to ensure we mend the root fault safely.
                                </p>
                                <p>
                                    Tracking down parasitic battery draws using highly sensitive digital testing for <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">intermittent battery drain problems</Link> protects you from casually throwing expensive new batteries under the hood week after week.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We manage essential safety features and foundational vehicle health.
                                </p>
                                <p>
                                    Comprehensive <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake inspection and component replacement</Link> is routinely requested by drivers relying on strong stopping authority. In addition to repairs, we frequently complete rigorous, photographed <Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">multi-point vehicle inspections</Link> to give owners full visibility into the wear and tear hiding underneath their daily driver.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    The brief transit from Milltown into Missoula is straightforward. This extremely close geographic proximity makes our shop the ideal primary service center. By offering after-hours vehicle drop-off mechanisms and entirely remote digital inspection reports synced directly to your email, we preserve your daily schedule while maintaining full transparency regarding your vehicle's condition.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From Milltown to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Navigating from Milltown is incredibly fast. Jump on Interstate 90 W heading toward Missoula, taking the Reserve Street exit southbound. Proceed down Reserve Street past the shopping centers and take a left heading east onto North Ave W. You will see us shortly on your right, situated prominently at 1914 North Ave W within Missoula.
                                </p>
                            </div>
                        </Reveal>

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
