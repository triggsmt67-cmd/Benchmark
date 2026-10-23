import { Metadata } from "next";
import { ServicesDirectory } from "@/components/widgets/services-directory";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { Reveal } from "@/components/motion/Reveal";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Phone, ArrowRight } from "lucide-react";
import { getServicesHubSchema, serializeSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Auto Repair & Diagnostic Services in Missoula",
    description: "Browse auto repair, maintenance, inspections, and vehicle problem diagnostics at Benchmark Automotive Service in Missoula. Find a service or request an appointment.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/services",
    },
    openGraph: {
        title: "Auto Repair & Diagnostic Services in Missoula | Benchmark Automotive Service",
        description: "From advanced diagnostics to routine maintenance, explore our full range of professional auto services in Missoula.",
        url: "https://www.benchmarkmissoula.com/services",
        siteName: "Benchmark Automotive Service",
        images: [
            {
                url: "/images/Inspection%20Bay.webp",
                width: 1200,
                height: 900,
                alt: "Vehicle inspection bay at Benchmark Automotive Service",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

import { getAllServiceData } from "@/lib/serviceContent";
import { getAllGuideData } from "@/lib/guideContent";
import { ServiceItem } from "@/components/widgets/services-directory";

export default async function ServicesHubPage() {
    const [rawServices, rawGuides] = await Promise.all([
        getAllServiceData(),
        getAllGuideData()
    ]);

    // Map services
    const services: ServiceItem[] = rawServices.map(data => {
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
            isComingSoon: data.isComingSoon === true,
            icon: data.icon as string | undefined,
            order: data.order || 99
        };
    });

    // Map guides
    const guideItems: ServiceItem[] = rawGuides.map(data => ({
        id: data.slug,
        title: data.title,
        description: data.description,
        slug: data.slug,
        categories: ["Guides", "All"],
        section: "Educational Guides",
        icon: "CarFront",
        basePath: "/guides",
        order: data.order || 99
    }));

    // Combine and sort
    const allItems = [...services, ...guideItems].sort((a, b) => (a.order || 99) - (b.order || 99));

    return (
        <article className="flex flex-col min-h-[100dvh]">
            {/* Structured Data: Unified Graph */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: serializeSchema(getServicesHubSchema(services))
                }}
            />

            {/* HER0 */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                                Auto Repair &amp; Diagnostics in Missoula
                            </h1>
                            <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
                                Find the service or vehicle concern closest to what you need. Browse repairs, maintenance and inspections, or start with a symptom such as a no-start, overheating or a new noise. If you’re unsure which page fits, call <a href={`tel:${siteConfig.phone.link}`} className="underline underline-offset-4">{siteConfig.phone.display}</a> and describe the concern.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <a
                                    href={`tel:${siteConfig.phone.link}`}
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

            <ServicesDirectory initialServices={allItems} />

            <FinalCtaBand />
        </article>
    );
}
