import { Metadata } from "next";
import Link from "next/link";
import { getAllServiceData } from "@/lib/serviceContent";
import { getAllGuideData } from "@/lib/guideContent";
import { PROBLEMS } from "@/lib/content-schema";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { Reveal } from "@/components/motion/Reveal";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { buildUnifiedGraph, serializeSchema, generateWebSiteSchema, generateLocalBusinessSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Sitemap | Benchmark Automotive Service",
    description: "Navigate all pages, services, service areas, and auto repair guides for Benchmark Automotive Service in Missoula, MT.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/site-map"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/site-map",
        title: "Sitemap | Benchmark Automotive Service",
        description: "Navigate all pages, services, service areas, and auto repair guides for Benchmark Automotive Service in Missoula, MT.",
    }
};

export default async function SitemapPage() {
    // Fetch dynamic content on the server side
    const services = await getAllServiceData();
    const guides = await getAllGuideData();

    // Core static routes
    const corePages = [
        { label: "Home", href: "/" },
        { label: "Our Services Directory", href: "/services" },
        { label: "Schedule Service / Contact", href: "/contact" },
        { label: "Service Areas Directory", href: "/service-areas" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ];

    // Local Service Areas
    const serviceAreas = [
        { label: "Missoula, MT", href: "/service-areas/missoula" },
        { label: "Lolo, MT", href: "/service-areas/lolo" },
        { label: "Frenchtown, MT", href: "/service-areas/frenchtown" },
        { label: "Bonner, MT", href: "/service-areas/bonner" },
        { label: "East Missoula, MT", href: "/service-areas/east-missoula" },
        { label: "Milltown, MT", href: "/service-areas/milltown" },
        { label: "Orchard Homes, MT", href: "/service-areas/orchard-homes" },
        { label: "Target Range, MT", href: "/service-areas/target-range" },
    ];

    // Filter problems that are enabled for rendering
    const enabledProblems = PROBLEMS.filter((p) => p.renderingEnabled);

    // Unified graph schema for the sitemap page
    const schema = buildUnifiedGraph([
        generateWebSiteSchema(),
        generateLocalBusinessSchema(),
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.benchmarkmissoula.com/site-map#breadcrumb",
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
                    "name": "Sitemap",
                    "item": "https://www.benchmarkmissoula.com/site-map"
                }
            ]
        }
    ]);

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
            />

            {/* Hero Section */}
            <section className="bg-navy-950 text-white py-20 md:py-28 border-b border-navy-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 animate-fade-in-up leading-[1.15] max-w-4xl">
                        Sitemap Directory
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Easily browse all automotive services, local service areas, symptom scopes, and educational guides at Benchmark Automotive Service.
                    </p>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Sitemap" }
                ]}
            />

            {/* Sitemap Grid */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-7xl mx-auto">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-950 tracking-tight mb-2">
                                Website Directory
                            </h2>
                            <PrecisionDivider />

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                                
                                {/* Core Pages Group */}
                                <div className="bg-white p-6 rounded-sm border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-t-[3px] border-t-copper hover:shadow-md transition-shadow duration-350">
                                    <h3 className="font-heading text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-muted/30">
                                        Core Pages
                                    </h3>
                                    <ul className="space-y-3 flex flex-col">
                                        {corePages.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.href} 
                                                    className="text-[15px] font-medium text-text-secondary hover:text-copper hover:translate-x-1 inline-block transition-all duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Service Areas Group */}
                                <div className="bg-white p-6 rounded-sm border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-t-[3px] border-t-copper hover:shadow-md transition-shadow duration-350">
                                    <h3 className="font-heading text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-muted/30">
                                        Service Areas
                                    </h3>
                                    <ul className="space-y-3 flex flex-col">
                                        {serviceAreas.map((item, idx) => (
                                            <li key={idx}>
                                                <Link 
                                                    href={item.href} 
                                                    className="text-[15px] font-medium text-text-secondary hover:text-copper hover:translate-x-1 inline-block transition-all duration-200"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Services Group */}
                                <div className="bg-white p-6 rounded-sm border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-t-[3px] border-t-copper hover:shadow-md transition-shadow duration-350 md:col-span-1 lg:col-span-1">
                                    <h3 className="font-heading text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-muted/30">
                                        Automotive Services
                                    </h3>
                                    <ul className="space-y-3 flex flex-col max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                        {services.map((item) => (
                                            <li key={item.slug}>
                                                <Link 
                                                    href={`/services/${item.slug}`} 
                                                    className="text-[15px] font-medium text-text-secondary hover:text-copper hover:translate-x-1 inline-block transition-all duration-200"
                                                >
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Guides & Symptoms Group */}
                                <div className="bg-white p-6 rounded-sm border border-border shadow-[0_4px_20px_rgba(0,0,0,0.02)] border-t-[3px] border-t-copper hover:shadow-md transition-shadow duration-350">
                                    <h3 className="font-heading text-lg font-bold text-navy-950 mb-4 pb-2 border-b border-muted/30">
                                        Resources & Symptoms
                                    </h3>
                                    
                                    <div className="space-y-6 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-300 mb-2">Symptom Guides</h4>
                                            <ul className="space-y-3 flex flex-col">
                                                {enabledProblems.map((item) => (
                                                    <li key={item.slug}>
                                                        <Link 
                                                            href={`/problems/${item.slug}`} 
                                                            className="text-[15px] font-medium text-text-secondary hover:text-copper hover:translate-x-1 inline-block transition-all duration-200"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-300 mb-2">Technical Guides</h4>
                                            <ul className="space-y-3 flex flex-col">
                                                {guides.map((item) => (
                                                    <li key={item.slug}>
                                                        <Link 
                                                            href={`/guides/${item.slug}`} 
                                                            className="text-[15px] font-medium text-text-secondary hover:text-copper hover:translate-x-1 inline-block transition-all duration-200"
                                                        >
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </article>
    );
}
