import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Areas We Serve Around Missoula | Benchmark Automotive Service",
    description: "Benchmark Automotive Service proudly provides professional automotive repair and diagnostics for drivers throughout Missoula and surrounding communities.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas",
        title: "Areas We Serve Around Missoula | Benchmark Automotive Service",
        description: "Benchmark Automotive Service proudly provides professional automotive repair and diagnostics for drivers throughout Missoula and surrounding communities.",
    }
};

export default function ServiceAreasIndexPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
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
                        Areas We Serve Around Missoula
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Professional diagnostics and confirmed repairs for vehicles traveling from across Western Montana to our single shop in Missoula.
                    </p>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-12">

                        <Reveal>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Benchmark Automotive Service is conveniently located at 1914 North Ave W, Missoula, MT 59801. We proudly welcome drivers from throughout the surrounding communities who are seeking high-quality diagnostics, professional maintenance, and honest repair recommendations. Instead of replacing parts on a guess, we find the root cause of vehicle failures.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Service Areas</h2>
                            <ul className="space-y-4 text-lg">
                                <li>
                                    <Link href="/service-areas/missoula" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Missoula, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/lolo" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Lolo, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/frenchtown" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Frenchtown, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/bonner" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Bonner, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/east-missoula" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        East Missoula, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/milltown" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Milltown, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/orchard-homes" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Orchard Homes, MT
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service-areas/target-range" className="font-medium text-copper hover:text-navy-950 transition-colors">
                                        Target Range, MT
                                    </Link>
                                </li>
                            </ul>
                        </Reveal>

                    </div>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
