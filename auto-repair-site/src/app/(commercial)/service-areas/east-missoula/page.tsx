import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair Near East Missoula MT | Benchmark Automotive Service",
    description: "East Missoula drivers trust Benchmark Automotive Service for precise diagnostics, electrical repair, and honest vehicle inspections right here in town.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/east-missoula"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/east-missoula",
        title: "Auto Repair Near East Missoula MT | Benchmark Automotive Service",
        description: "East Missoula drivers trust Benchmark Automotive Service for precise diagnostics, electrical repair, and honest vehicle inspections right here in town.",
    }
};

export default function EastMissoulaServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "areaServed": "East Missoula MT",
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
                "name": "East Missoula, MT",
                "item": "https://www.benchmarkmissoula.com/service-areas/east-missoula"
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
                        Auto Repair for Drivers in East Missoula, MT
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Unrelenting accuracy and honest automotive care located right across the Missoula valley.
                    </p>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "East Missoula, MT" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Drivers from East Missoula know the importance of a properly running vehicle when navigating canyon roadways and dense town traffic. By crossing directly through Missoula to Benchmark Automotive Service, East Missoula residents unlock access to a professional facility dedicated entirely to advanced diagnostics and proven mechanical repairs. While our single centralized shop is located in mid-town, we draw customers from the eastern limits who are tired of throwing parts at lingering automotive problems.
                                </p>
                                <p>
                                    We believe your safety requires certainty. Instead of merely swapping components based on a guess, we find the root cause of every symptom you describe, using our state-of-the-art diagnostic equipment to provide clear, definitive answers.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Drivers From East Missoula Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Automotive repair shouldn't involve high-pressure sales or anxiety. Our diagnostic-first philosophy protects you from wasting resources on inaccurate repairs.
                                </p>
                                <p>
                                    Before we recommend any replacement part, our experienced technicians physically test the component in question to prove that it is failing. From checking an individual fuel injector's firing pattern on an oscilloscope to manually tracing voltage drops across heavy-duty battery cables, we provide an objective analysis.
                                </p>
                                <p>
                                    We summarize our findings via honest repair recommendations delivered cleanly without confusing jargon, allowing you to prioritize the longevity of your vehicle accurately.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Common Vehicle Issues for Drivers in East Missoula</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Living near the canyon corridor subjects vehicles to intense seasonal variations, creating frequent visits for:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li><strong>Cold-Weather Defaults:</strong> Winter temperatures plummet rapidly down the canyon, frequently destroying weakened batteries.</li>
                                    <li><strong>Engine Thermostat Failures:</strong> Fluctuating daily driving temperatures can cause cooling systems and thermostats to stick.</li>
                                    <li><strong>Suspension Damage:</strong> Winding roads and localized unpaved streets deteriorate tie rods, ball joints, and shocks.</li>
                                    <li><strong>Intermittent Sensor Misreads:</strong> Humidity and road debris can frequently cloud MAF sensors and trigger dashboard lights.</li>
                                    <li><strong>Warning Lights:</strong> Deep freeze-thaw cycles frequently compromise plastic casing on electrical systems causing sudden warning errors.</li>
                                </ul>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Drivers From East Missoula We Regularly Help</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Our typical East Missoula customer frequently arrives after struggling with a sporadic loss of engine power, an unstable idle, or a warning chime that they cannot seem to clear at the local parts store.
                                </p>
                                <p>
                                    When an engine randomly shudders at stoplights, utilizing deep <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">check engine light testing</Link> prevents an expensive and useless fuel system swap. For cars that randomly drop power overnight or lose radio settings, performing patient <Link href="/services/battery-drain" className="text-copper hover:underline font-medium">battery drain diagnostics</Link> remains crucial to finding the parasitic draw hidden in the network.
                                </p>
                                <p>
                                    Additionally, diagnosing the entire chassis for hidden shorts requires precise <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">electrical diagnostics</Link>, a service we specialize deeply in right here in Missoula.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Popular Services</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    East Missoula residents depend on us for both deep-level troubleshooting and essential preventative steps.
                                </p>
                                <p>
                                    Maintaining absolute stopping authority through the canyon makes a comprehensive <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">brake repair and inspection</Link> incredibly important before the snow falls. Similarly, bringing newly purchased used cars to us for a rigorous <Link href="/services/vehicle-inspection" className="text-copper hover:underline font-medium">vehicle inspection</Link> ensures that pre-existing safety failures are identified well before you sign the ownership papers.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving Distance and Convenience</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Driving from East Missoula to Benchmark Automotive Service is practically a straight shot across town. The trip typically takes just a few minutes, making us an incredibly accessible resource for drivers seeking premium-grade care without traveling out of the local valley.
                                </p>
                                <p>
                                    Our shop implements an after-hours key drop and comprehensive digital inspection reporting sent to your phone. This means you do not have to rearrange your weekday schedule to view the findings of your car repair or to drop your vehicle off securely.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Driving From East Missoula to Benchmark Automotive Service</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    From East Missoula, take MT-200 W crossing into the main Missoula grid. You can proceed down Broadway Street or take Interstate 90 W to bypass downtown traffic entirely. Either route allows you to immediately access Reserve Street heading south. Make a final turn onto North Ave W, and you'll find our single diagnostic facility located easily at 1914 North Ave W, ready to assist you.
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
