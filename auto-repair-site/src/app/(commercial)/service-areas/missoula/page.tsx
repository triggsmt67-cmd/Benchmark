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
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Missoula MT",
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
                                    As our hometown base, Missoula is where Benchmark Automotive Service established its foundation of honesty, precision, and diagnostic excellence. Local drivers rely on their vehicles heavily—from commuting across the valley on Reserve Street to navigating treacherous winter conditions and exploring the surrounding mountain roads. We know that undiagnosed vehicle issues disrupt your life, which is why we’ve built our facility precisely to address complex automotive problems with data-driven accuracy.
                                </p>
                                <p>
                                    Our shop, centrally located within Missoula, offers a different kind of repair experience. Instead of guessing at the problem or throwing parts at a symptom, we employ a philosophy of complete diagnosis. We want our neighbors to feel confident that their vehicles are reliable, safe, and ready for the demands of Montana living.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Missoula Drivers Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    In a city with numerous repair options, Missoula residents choose Benchmark Automotive Service because of our commitment to transparency and finding the root cause. We operate on the principle that accurate diagnostics save you money and prevent repetitive breakdowns.
                                </p>
                                <p>
                                    Modern vehicles are essentially rolling computer networks, which means that finding a true mechanical or electrical fault requires specialized equipment. Our experienced technicians use advanced oscilloscopes, computer scanners, and pinpoint manual testing to interpret data directly from your vehicle's systems.
                                </p>
                                <p>
                                    We provide honest repair recommendations. You won't face pressure to authorize unnecessary maintenance. Instead, we explain exactly what has failed, how it impacts your vehicle's safety or drivability, and what it will cost to fix it permanently.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Missoula</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Navigating Missoula's unique blend of stop-and-go traffic, seasonal temperature extremes, and variable road conditions leads to specific wear patterns on local vehicles:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Stop-and-Go Wear:</strong> Heavy traffic on corridors like Brooks Street and Reserve Street accelerates wear on brake pads, rotors, and transmission fluids.</li>
                                    <li><strong>Cold-Weather Battery Failures:</strong> Missoula winters demand strong cold-cranking amps. We frequently test electrical systems to ensure vehicles will start securely on sub-zero mornings.</li>
                                    <li><strong>Suspension Damage:</strong> Potholes from freeze-thaw cycles and rough dirt roads leading out of town stress struts, shocks, and control arms.</li>
                                    <li><strong>Check Engine Lights:</strong> Variations in temperature and altitude often trigger emissions system warnings and sensor performance issues.</li>
                                    <li><strong>Drivability Issues:</strong> Intermittent stalling or rough idling caused by fuel delivery or ignition failures.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Drivers We Regularly Help */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Missoula We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We help Missoula families, commuters, and adventurers who are tired of lingering automotive problems. Many of our customers arrive after visiting multiple other shops, still experiencing a warning light or unusual noise that hasn't been properly resolved.
                                </p>
                                <p>
                                    For example, a driver might face a vehicle that mysteriously dies overnight. Through careful <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">testing for parasitic battery drain</Link>, we can isolate the specific module failing to shut down. We also see vehicles struggling with performance issues where <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">check engine light diagnostics</Link> are crucial to separating a simple sensor fault from a deeper mechanical engine failure.
                                </p>
                                <p>
                                    By taking the time to test thoroughly, we establish trust and ensure our local community isn't wasting money on incorrect part replacements.
                                </p>
                            </div>
                        </Reveal>

                        {/* Popular Services */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our Missoula facility provides comprehensive bumper-to-bumper service. Some of our most highly requested services for local drivers include:
                                </p>
                                <p>
                                    Intricate <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> to resolve wiring faults, <Link href="/services/suspension-steering" className="text-copper hover:underline font-medium">suspension and steering components</Link> repair for a smooth ride across uneven roads, and vital <Link href="/services/fluid-services" className="text-copper hover:underline font-medium">fluid flushes and maintenance</Link> to prolong the operational life of your transmission and cooling systems.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Distance / Convenience */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Conveniently Located in Missoula</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Because we are located right in the heart of town, accessing our shop is incredibly convenient for Missoula residents. Whether you live in the South Hills, the Rattlesnake, or right downtown, you are only a short drive away from reliable, professional automotive care.
                                </p>
                                <p>
                                    We feature an after-hours key drop so you can leave your car with us securely according to your own schedule. Our digital inspection reports allow you to receive photographs and diagnostic notes directly on your phone, letting you review findings and approve work without having to leave your home or office during the day.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Directions */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Getting to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our facility is located at 1914 North Ave W. You can easily reach us from anywhere in Missoula. From the central Reserve Street corridor, simply head south toward North Ave W and turn east; we are located just a few blocks down. Drivers coming from downtown can take 3rd or 5th Street westward toward Reserve, and easily cut down to North Ave. Our central location is designed to minimize your travel time.
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
