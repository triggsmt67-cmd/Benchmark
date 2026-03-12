import { Metadata } from "next";
import { ServicesDirectory } from "@/components/widgets/services-directory";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Services in Missoula, MT",
    description: "Explore diagnostic, repair, and common vehicle problem pages. Clear answers and confirmed repairs in Missoula.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/services",
    },
    openGraph: {
        title: "Professional Auto Services in Missoula, MT | Benchmark Automotive Service",
        description: "From advanced diagnostics to routine maintenance, explore our full range of professional auto services in Missoula.",
        url: "https://www.benchmarkmissoula.com/services",
        siteName: "Benchmark Automotive Service",
        images: [
            {
                url: "/images/og-services.jpg",
                width: 1200,
                height: 630,
                alt: "Benchmark Automotive Services Hub",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

import { getAllServiceData } from "@/lib/serviceContent";
import { ServiceItem } from "@/components/widgets/services-directory";

export default async function ServicesHubPage() {
    const rawData = await getAllServiceData();

    // Sort all services by the 'order' field to maintain exact layout control
    const sortedData = rawData.sort((a, b) => (a.order || 99) - (b.order || 99));

    const services: ServiceItem[] = sortedData.map(data => {
        let cats = ["All"];
        if (Array.isArray(data.categories)) {
            cats = data.categories.map(c => (c === "Repair" ? "Repairs" : c === "Problem" ? "Vehicle Problems" : c));
        } else if (typeof data.category === "string") {
            const rawCat = data.category === "Repair" ? "Repairs" : data.category === "Problem" ? "Vehicle Problems" : data.category;
            cats = [rawCat, "All"];
        } else if (typeof data.categories === "string") {
            const rawCat = data.categories === "Repair" ? "Repairs" : data.categories === "Problem" ? "Vehicle Problems" : data.categories;
            cats = [rawCat, "All"];
        }

        let defaultSection = cats[0] !== "All" ? cats[0] : "Common Vehicle Problems";
        if (defaultSection === "Vehicle Problems") {
            defaultSection = "Common Vehicle Problems";
        }

        return {
            id: data.slug,
            title: data.title || data.slug.replace("-", " "),
            description: data.description || "",
            slug: data.slug,
            categories: cats as ServiceItem["categories"],
            section: (data.section || defaultSection) as ServiceItem["section"],
            isMostRequested: data.isMostRequested === true || data.featured === true,
            isComingSoon: data.isComingSoon === true,
            icon: data.icon as string | undefined
        };
    });

    return (
        <article className="flex flex-col min-h-[100dvh]">
            {/* Structured Data: ItemList of Services */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Benchmark Automotive Service Offerings",
                        "description": "Comprehensive list of auto repair and diagnostic services in Missoula, MT.",
                        "itemListElement": services.map((s, index) => ({
                            "@type": "ListItem",
                            "position": index + 1,
                            "item": {
                                "@type": "Service",
                                "name": s.title,
                                "description": s.description,
                                "url": `https://www.benchmarkmissoula.com/services/${s.slug}`,
                                "provider": {
                                    "@type": "AutoRepair",
                                    "name": "Benchmark Automotive Service"
                                }
                            }
                        }))
                    })
                }}
            />

            {/* Structured Data: BreadcrumbList */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
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
                                "name": "Services",
                                "item": "https://www.benchmarkmissoula.com/services"
                            }
                        ]
                    })
                }}
            />

            {/* HER0 */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                                Services in Missoula, MT
                            </h1>
                            <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
                                Clear answers, confirmed repairs, and straightforward communication.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href="tel:4063171405"
                                    className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white h-14 px-8 text-lg font-medium rounded-sm transition-colors"
                                    aria-label="Call Now"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </a>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/30 hover:bg-white/10 text-white h-14 px-8 text-lg font-medium rounded-sm transition-colors"
                                >
                                    Request Service <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>

                            {/* Micro Trust Line */}
                            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-x-6 gap-y-4 pt-8 border-t border-white/10 text-[15px] font-medium text-white/80">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                                    <span>Diagnostics-first approach</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                                    <span>After-hours drop-off available</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />
                                    <span>We&apos;ll confirm receipt the next business day</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            <ServicesDirectory initialServices={services} />

            <FinalCtaBand />
        </article>
    );
}
