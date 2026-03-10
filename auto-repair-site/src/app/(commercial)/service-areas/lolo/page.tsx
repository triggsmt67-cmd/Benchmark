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
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Lolo MT",
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
                                    Lolo residents frequently travel north to Missoula for reliable, high-end automotive diagnostics and maintenance. The drive up Highway 93 provides Lolo drivers direct access to Benchmark Automotive Service, where they can receive independent, dealership-level care without the pressure and pricing structures common to large franchise chains. Because Lolo drivers rely heavily on their vehicles for long commutes and traversing the Bitterroot Valley, having a shop that focuses precisely on repairing the right parts the very first time is completely essential to keeping schedules intact.
                                </p>
                                <p>
                                    Our single location in Missoula allows us to house the most advanced diagnostic scanners, oscilloscopes, and electrical tracking equipment available today. Whether you depend on a heavy-duty truck for hauling and agricultural work, or a fuel-efficient compact car for commuting directly into the city, we can verify your system performance, discover the root of any issues, and get you back home securely.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Drivers From Lolo Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We often see drivers from Lolo seek out our services because they are frustrated with "parts cannons"—repair strategies that involve swapping components randomly until a symptom disappears. Our diagnostic-first philosophy protects you from wasting money and enduring multiple, repetitive trips to a repair shop.
                                </p>
                                <p>
                                    Our technicians are deeply experienced with all aspects of modern automotive networks, including complex CAN bus communications and computerized ignition systems. Before replacing an oxygen sensor or a transmission control module, we will literally test the circuit outputs to definitively prove the part has failed.
                                </p>
                                <p>
                                    Transparency and honest repair recommendations define the Benchmark experience. We pride ourselves on clear, concise communication, providing digital inspection reports straight to your phone.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Lolo</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    The combination of highway mileage, steep valley topography, and punishing Montana winters creates unique strain on vehicles driven in and out of Lolo:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Highway Commuting Wear:</strong> The daily drive up US-93 into Missoula rapidly ages fluids. We handle a high volume of oil changes, transmission servicing, and differential fluid replacements for commuting vehicles.</li>
                                    <li><strong>Cold-Weather Starts:</strong> Dropping temperatures severely impact aging batteries. We evaluate batteries for proper cold-cranking amps to ensure your car will start consistently before work.</li>
                                    <li><strong>Rural Road Strain:</strong> Unpaved access roads outside the Lolo town center vibrate and wear down critical suspension and steering components rapidly. </li>
                                    <li><strong>Brake System Aging:</strong> Descending from elevations or dealing with highway traffic stops causes rapid heat-cycling on brake pads and rotors. </li>
                                    <li><strong>Persistent Electrical Gremlins:</strong> Heavy moisture and temperature shifts can lead to failing electronics. </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Drivers We Regularly Help */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Lolo We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Many of the customers we serve from Lolo arrive specifically because another facility could not resolve a severe drivability or check engine light concern. Often, they come to us when a car unexpectedly leaves them stranded on their commute.
                                </p>
                                <p>
                                    For example, resolving a severe <Link href="/services/car-wont-start" className="text-copper hover:underline font-medium">no-start condition</Link> is a priority operation for our team. Rather than casually suggesting a new starter, we evaluate the entire starting and charging circuit to guarantee the source of the electrical failure. In instances where the battery keeps dying repeatedly over night, thorough <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> are crucial to isolating the precise module remaining awake and bleeding energy from the vehicle.
                                </p>
                                <p>
                                    With any complex lighting or dashboard error, isolating the symptoms with direct testing is how we have earned a significant volume of regular customers commuting up from the Bitterroot Valley.
                                </p>
                            </div>
                        </Reveal>

                        {/* Popular Services */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    When Lolo residents bring their vehicles into Missoula, they are often scheduling high-value, critical maintenance steps prioritizing the longevity of their vehicles.
                                </p>
                                <p>
                                    Ensuring peak stopping safety is paramount for high-speed valley traffic, making our <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake inspection and repair</Link> services heavily utilized. Additionally, we use data-logging to provide professional <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">engine component testing</Link> for strange lean-running conditions, and offer full-synthetic <Link href="/services/oil-change" className="text-copper hover:underline font-medium">fluid intervals</Link> to ensure your internal engine components are protected under high-stress conditions.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Distance / Convenience */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We strive to minimize the inconvenience of getting to our Missoula shop from the Lolo area. The drive via US-93 N straight up Reserve Street makes accessing our facility extremely easy. For maximum flexibility, drivers routinely utilize our secure overnight key-drop box when heading into town early for work.
                                </p>
                                <p>
                                    Furthermore, since our technicians send completed digital inspections straight to your phone via text message, you can review photographs and approve services remotely alongside your coffee, without making a mid-day trip up the highway.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Directions */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From Lolo to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Head north out of Lolo on US-93 N, continuing onto Brooks Street/US Highway 93. Continue northbound by taking a left onto South Reserve Street. Proceed north on Reserve Street through the major intersections, then turn right onto North Ave W. You will see Benchmark Automotive Service immediately down the street on the right side. Our single hub facility at 1914 North Ave W awaits your vehicle.
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
