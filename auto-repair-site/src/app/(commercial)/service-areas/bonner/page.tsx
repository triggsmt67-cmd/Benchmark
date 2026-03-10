import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near Bonner MT | Benchmark Automotive Service",
    description: "Drivers from Bonner, Montana trust Benchmark Automotive Service in Missoula for professional diagnostics, brake repair, and electrical troubleshooting.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/bonner"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/bonner",
        title: "Auto Repair Near Bonner MT | Benchmark Automotive Service",
        description: "Drivers from Bonner, Montana trust Benchmark Automotive Service in Missoula for professional diagnostics, brake repair, and electrical troubleshooting.",
    }
};

export default function BonnerServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Bonner MT",
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
                "name": "Bonner, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/bonner"
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
                        Auto Repair for Drivers in Bonner, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Professional diagnostics, precise repairs, and clear answers for residents navigating the roads of Bonner, Montana.
                    </p>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Bonner, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from Bonner often travel to Missoula for professional automotive diagnostics and repair. The short drive down Interstate 90 connects the community directly to the resources and advanced technical expertise available at our facility. We understand that finding a reliable mechanic you can actually trust is challenging, which is why we’ve built our entire business model around accuracy, transparency, and doing the job right the very first time.
                                </p>
                                <p>
                                    When you rely on your vehicle to get to work, run errands, or explore Montana's rugged landscapes, you cannot afford guesswork. At Benchmark Automotive Service, we take the time to properly diagnose the root cause of the issue before ever recommending a replacement part. Our single Missoula location is fully equipped to handle complex electrical tracking, deep engine performance testing, and routine preventative maintenance.
                                </p>
                                <p>
                                    Whether you're contending with a sudden check engine light while heading into town or you've noticed a strange new noise coming from the chassis after navigating winter roads, our team is standing by to evaluate the problem comprehensively. We don't just clear codes and hope the problem goes away—we identify the failure, confirm the fix, and get you safely back to Bonner.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Drivers From Bonner Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Automotive repair has unfortunately gained a reputation for unnecessary upsells and misdiagnoses. Our shop was founded directly in response to these industry shortcomings. We maintain a firm, diagnostic-first philosophy. This means that when a Bonner resident brings their vehicle to us, they receive an objective analysis driven purely by data and confirmed testing.
                                </p>
                                <p>
                                    We employ experienced technicians who undergo continuous training to keep up with the complex electronics and computer networks embedded in modern vehicles. It's no longer enough to simply listen to an engine or swap out the most obvious component. Our team utilizes advanced scan tools, oscilloscopes, and pinpoint testing equipment to trace electrical faults down to the specific broken wire or failing module.
                                </p>
                                <p>
                                    Honest repair recommendations are the cornerstone of our operations. Once we locate the actual root cause of your vehicle's problem, we provide a clear, plain-language explanation of what has failed, why it failed, and what it will take to correctly repair it. We prioritize the repairs based on safety and drivability, allowing you to make an informed decision without aggressive pressure tactics.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Bonner</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    The environmental and driving conditions in Western Montana present specific challenges for vehicles. The temperature swings, winter road treatments, and variable road surfaces contribute directly to the types of wear and failures we regularly see in the shop.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Cold-Weather Battery Failures:</strong> Rapid temperature drops put massive strain on aging batteries. We frequently test batteries that have lost their cold-cranking amps, leaving drivers stranded on icy mornings.</li>
                                    <li><strong>Check Engine Lights:</strong> Fluctuating temperatures and long commutes can trigger emissions and sensor faults. Rather than guessing, we evaluate the live fuel trims and sensor data to find the exact anomaly.</li>
                                    <li><strong>Suspension Wear from Seasonal Roads:</strong> Potholes and frost heaves accelerate wear on struts, shocks, and ball joints. Proper suspension inspection is vital for safe handling at highway speeds.</li>
                                    <li><strong>Commuting-Related Vehicle Wear:</strong> For those driving daily from Bonner into Missoula, the consistent mileage speeds up the degradation of fluids, brakes, and belts. Preventative maintenance is critical to avoiding major breakdowns.</li>
                                    <li><strong>Electrical System Issues:</strong> Corrosion from road treatments can infiltrate wiring harnesses, leading to intermittent starting problems and failing accessories.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Drivers We Regularly Help */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Bonner We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We regularly assist individuals and families from the Bonner community who have grown frustrated with persistent vehicle issues that other shops have failed to resolve. Often, drivers bring us vehicles that have already had multiple parts replaced without success.
                                </p>
                                <p>
                                    A common scenario involves diagnosing a persistent check engine light. A vehicle might have a lean-running code, and the previous recommendation was simply to replace the oxygen sensors. When that fails, the driver brings the vehicle from Bonner to our Missoula shop. Through careful <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">check engine light diagnostics</Link>, we might find that the true issue is actually a tiny, hidden vacuum leak rather than the expensive sensors themselves.
                                </p>
                                <p>
                                    We also see many vehicles experiencing electrical anomalies. Identifying <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">battery drain problems</Link> is a frequent request; discovering exactly which module refuses to go to sleep when the car is parked requires patience and precise measurement. Furthermore, resolving intermittent electrical faults and confirming drivability problems before tearing engines apart is how we save our customers significant amounts of money and stress.
                                </p>
                            </div>
                        </Reveal>

                        {/* Popular Services */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our shop covers almost every aspect of automotive care. When Bonner residents visit our Missoula location, they typically request our specialized diagnostic capabilities and safety inspections.
                                </p>
                                <p>
                                    If your vehicle is behaving strangely, our <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> service is designed to isolate the fault accurately. Whether you need comprehensive <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake repair and inspection</Link> prior to winter driving, or a thorough <Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">vehicle inspection</Link> before purchasing a used car or heading out on a long trip, our team is ready to provide documented, visual evidence of your vehicle's condition. We also perform manufacturer-specified maintenance to keep your warranty fully intact.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Distance / Convenience */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We know that dropping off a vehicle for service requires planning, especially when you are commuting from out of town. Drivers from Bonner typically reach the shop via Interstate 90, making it a very straightforward trip.
                                </p>
                                <p>
                                    Once you arrive, we aim to make the process as seamless as possible. We offer an after-hours key drop so you can leave your vehicle securely either before work or late in the evening. Our digital inspection reports are sent directly to your smartphone or email, meaning you do not have to drive back and forth to Missoula just to look at the worn components yourself. You can review the photos, read the technician's notes, and approve repairs entirely remotely from your home or office.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Directions */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From Bonner to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Finding our shop is easy. From Bonner, take I-90 west toward Missoula. Continue on I-90 W until you reach the North Reserve Street exit. Head south on Reserve Street, then turn left onto North Ave W. Follow North Ave W eastward, and you will find Benchmark Automotive Service clearly marked. Our single, centralized location at 1914 North Ave W is strategically positioned to be accessible for the entire Missoula valley and surrounding communities.
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
