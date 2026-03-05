import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceMarkdown, getAllServiceSlugs } from "@/lib/serviceContent";
import ReactMarkdown from "react-markdown";
import { Reveal } from "@/components/motion/Reveal";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { ServiceCTABand } from "@/components/widgets/service-cta-band";

// 1. Generate Static Params for build time
export async function generateStaticParams() {
    const slugs = await getAllServiceSlugs();
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const result = await getServiceMarkdown(slug);

    if (!result) {
        return {
            title: "Service Not Found"
        };
    }

    const { title, description } = result.data;

    return {
        title: `${title} in Missoula, MT | Benchmark Automotive Service`,
        description: description || `Professional ${title.toLowerCase()} in Missoula. Accurate testing, honest recommendations, and confirmed repairs.`,
    };
}

// 3. Page Assembly
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Server-side fetch of markdown content and frontmatter
    const mdResult = await getServiceMarkdown(slug);
    if (!mdResult) return notFound();

    const { content: md, data } = mdResult;
    const serviceName = data.title || slug
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            name: "Benchmark Automotive Service",
            image: "/logo.png",
            url: `https://benchmarkautomotive.com/services/${slug}`,
            telephone: "+1-406-317-1405",
            address: {
                "@type": "PostalAddress",
                streetAddress: "1914 North Ave W",
                addressLocality: "Missoula",
                addressRegion: "MT",
                postalCode: "59801",
                addressCountry: "US"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: serviceName,
            areaServed: {
                "@type": "City",
                name: "Missoula"
            },
            provider: {
                "@type": "AutoRepair",
                name: "Benchmark Automotive Service",
                telephone: "+1-406-317-1405",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "1914 North Ave W",
                    addressLocality: "Missoula",
                    addressRegion: "MT",
                    postalCode: "59801",
                    addressCountry: "US"
                }
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: []
        }
    ];

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* Service Hero */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                        {serviceName}
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Professional {serviceName.toLowerCase()} in Missoula. Accurate testing, honest recommendations, and confirmed repairs.
                    </p>
                </div>
            </section>

            {/* Markdown Content Section */}
            <section className="py-20 md:py-28 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="max-w-none text-text-secondary text-[17px] md:text-lg
                                [&>h1]:font-heading [&>h1]:text-4xl [&>h1]:text-navy-950 [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
                                [&>h2]:font-heading [&>h2]:text-3xl [&>h2]:text-navy-950 [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6
                                [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:text-navy-950 [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
                                [&>p]:leading-relaxed [&>p]:mb-6
                                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                                [&>li]:my-2
                                [&>strong]:text-navy-950 [&>strong]:font-semibold
                                [&>a]:text-copper [&>a]:font-medium hover:[&>a]:underline">
                            <ReactMarkdown>{md}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </section>

            <ServiceCTABand />

            <FinalCtaBand />
        </article>
    );
}
