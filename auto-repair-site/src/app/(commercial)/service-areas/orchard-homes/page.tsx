import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near Orchard Homes MT | Benchmark Automotive Service",
    description: "Benchmark Automotive Service provides drivers in Orchard Homes, MT with honest mechanic services, brake repair, and electrical troubleshooting in Missoula.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/orchard-homes"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/orchard-homes",
        title: "Auto Repair Near Orchard Homes MT | Benchmark Automotive Service",
        description: "Benchmark Automotive Service provides drivers in Orchard Homes, MT with honest mechanic services, brake repair, and electrical troubleshooting in Missoula.",
    }
};

export default function OrchardHomesServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "Orchard Homes MT",
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
                "name": "Orchard Homes, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/orchard-homes"
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
                        Auto Repair for Drivers in Orchard Homes, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Definitive diagnostic analysis and trusted neighborhood repairs located practically in your own backyard.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Orchard Homes, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        {/* Introduction */}
                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    As close neighbors to our facility, drivers navigating Orchard Homes have exceptionally quick access to Benchmark Automotive Service via the central Reserve Street and 3rd Street grids. We recognize that despite being hyper-local to the city of Missoula, agricultural plots and frequently dirt-packed adjacent lanes create unique wearing situations for the vehicles operating within Orchard Homes.
                                </p>
                                <p>
                                    Our shop operates differently from conventional repair centers. Rather than pushing rapid, superficial volume through our bays, we focus distinctly on accurately identifying root-cause mechanical failures. Our goal is to assure surrounding neighborhood drivers that they are never sold a part based on pure guesswork. Every electrical short and knocking noise is scientifically verified by trained technicians prior to recommending components.
                                </p>
                            </div>
                        </Reveal>

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Orchard Homes Drivers Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Trust is difficult to establish, especially within the automotive repair industry. We earn the confidence of the Orchard Homes community by deploying our diagnostic-first perspective across every vehicle.
                                </p>
                                <p>
                                    You will find unparalleled data analysis occurring within our Missoula shop. Utilizing oscilloscopes and complex bidirectional communication testing, our technicians command sensor networks to ensure nothing is overlooked. If a part has truly begun failing, we utilize specialized tools to force the symptoms safely out of hiding, protecting you from premature repair investments. We only proceed with a clear, concise approval built upon honest repair recommendations that explicitly detail the necessity of the labor.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Vehicle Issues */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in Orchard Homes</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Vehicles moving from neighborhood roads tightly into city gridlocks face rapid temperature cycles and intense component stress.
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Constant Engine Start/Stops:</strong> Repeated short trips never allow massive V8 engines to adequately evaporate condensation out of their crankcases, leading to significant oil contamination.</li>
                                    <li><strong>Frequent Check Engine Codes:</strong> Oxygen sensors fail prematurely due to constant urban idling and thermal changes.</li>
                                    <li><strong>Battery Plate Failure:</strong> Constant rapid, high-draw starting loads strip batteries of holding charge during winter deep-freezes.</li>
                                    <li><strong>Suspension Bushing Rot:</strong> Dust and local environmental moisture destroy rubberized chassis linkages causing squeaking.</li>
                                    <li><strong>Severe Brake Wear:</strong> Constant braking for pedestrian traffic across cross streets quickly limits rotor lifespan.</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Drivers We Regularly Help */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From Orchard Homes We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our technicians frequently assist residents suffering from complex warning sensors that other local mechanics struggle to effectively manage. We refuse to use the generic scan-tool approach that only patches immediate dashboard faults without actually curing the vehicle.
                                </p>
                                <p>
                                    When tracking lean air-fuel ratios, applying careful <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">intense check engine light testing</Link> stops drivers from tossing expensive sensors into an exhaust system that actually has a cracked intake manifold. To tackle annoying power losses, executing pinpoint <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link> tracks the dead short right to an incredibly frayed wire under the hood.
                                </p>
                                <p>
                                    If a family minivan repeatedly needs jumping in the driveway, utilizing our precision <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">battery drain diagnostics</Link> helps you completely restore peace of mind knowing the car will turn over safely.
                                </p>
                            </div>
                        </Reveal>

                        {/* Popular Services */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Because of our hyper-local vicinity, Orchard Homes residents routinely utilize our full catalog of maintenance properties alongside deep-level problem-solving.
                                </p>
                                <p>
                                    Getting high-quality <Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">general vehicle inspection</Link> prior to winter ensures all wiper, coolant, and lighting systems meet strict safety factors. Completing rigorous <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake repair and pad replacement</Link> keeps massive metal-on-metal damages from permanently scarring your driveline parts.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Distance / Convenience */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our shop sits adjacent to the Orchard Homes area. You barely require a commute to access top-tier mechanical care. Because we employ an entirely digital framework with detailed text message inspection reports outlining wear metrics, you can quickly drop your car into our after-hours security box and receive our final diagnosis the next morning right on your mobile screen.
                                </p>
                            </div>
                        </Reveal>

                        {/* Driving Directions */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From Orchard Homes to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    From within Orchard Homes, reaching our location couldn't be simpler. You can utilize 3rd Street or Spurgin Road to access Reserve Street moving south. From Reserve Street, take the quick turn east onto North Ave W. You will see Benchmark Automotive Service directly on your right. Located at 1914 North Ave W, we are positioned specifically to maintain Missoula’s local neighborhoods safely.
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
