import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getServiceMarkdown, getAllServiceSlugs } from "@/lib/serviceContent";
import ReactMarkdown from "react-markdown";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { ServiceCTABand } from "@/components/widgets/service-cta-band";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { RelatedServices } from "@/components/widgets/related-services";
import { NewCustomerOffer } from "@/components/widgets/new-customer-offer";
import { serviceOfferConfigs } from "@/lib/serviceOfferConfigs";

/**
 * Splits markdown content at the end of a target section.
 * Looks for the section heading, then splits after the next
 * horizontal rule (---) that closes that section.
 * Returns [before, after] if found, or [fullContent, ""] if not.
 */
function splitMarkdownAfterSection(md: string, sectionHeading: string): [string, string] {
    // Find the target heading (e.g. "## What This Service Covers")
    const headingPattern = new RegExp(`^##\\s+${sectionHeading.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}`, "mi");
    const headingMatch = md.match(headingPattern);

    if (!headingMatch || headingMatch.index === undefined) {
        return [md, ""];
    }

    // From the heading position, find the next horizontal rule (---)
    const afterHeading = md.slice(headingMatch.index);
    // Match a line that is just --- (with optional whitespace)
    const hrMatch = afterHeading.match(/\n---\s*\n/);

    if (hrMatch && hrMatch.index !== undefined) {
        const splitIndex = headingMatch.index + hrMatch.index + hrMatch[0].length;
        return [md.slice(0, splitIndex), md.slice(splitIndex)];
    }

    // If no HR found after that section, just put the offer after the heading's content
    return [md, ""];
}

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
    const displayTitle = title.toLowerCase().includes("missoula") ? title : `${title} in Missoula, MT`;

    return {
        title: displayTitle,
        description: description || `Professional ${title.toLowerCase()} in Missoula. Accurate testing, honest recommendations, and confirmed repairs.`,
        alternates: {
            canonical: `https://www.benchmarkmissoula.com/services/${slug}`
        },
        openGraph: {
            url: `https://www.benchmarkmissoula.com/services/${slug}`,
            title: displayTitle,
            description: description || `Professional ${title.toLowerCase()} in Missoula. Accurate testing, honest recommendations, and confirmed repairs.`
        }
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

    const baseUrl = "https://www.benchmarkmissoula.com";
    const offerConfig = serviceOfferConfigs[slug];

    // Build the Service schema, optionally with an Offer
    const serviceSchema: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: serviceName,
        description: data.description || `Professional ${serviceName.toLowerCase()}`,
        serviceType: serviceName,
        areaServed: [
            {
                "@type": "City",
                "name": "Missoula, MT"
            },
            {
                "@type": "City",
                "name": "Lolo, MT"
            }
        ],
        provider: {
            "@type": "AutoRepair",
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        image: `${baseUrl}/diagnostic_hero_bg_v2.png`,
        url: `${baseUrl}/services/${slug}`
    };

    // Attach Offer structured data when an offer config exists
    if (offerConfig) {
        const priceValue = offerConfig.price.replace(/[^0-9.]/g, "");
        serviceSchema.hasOfferCatalog = {
            "@type": "OfferCatalog",
            name: `${serviceName} Offers`,
            itemListElement: [
                {
                    "@type": "Offer",
                    name: offerConfig.title,
                    price: priceValue,
                    priceCurrency: "USD",
                    description: [
                        offerConfig.description,
                        offerConfig.includes ? `Includes: ${offerConfig.includes.join(", ")}` : "",
                    ].filter(Boolean).join(" "),
                    eligibleCustomerType: "http://schema.org/NewCustomer",
                    availability: "https://schema.org/InStock",
                    ...(offerConfig.disclaimer ? { termsOfService: offerConfig.disclaimer } : {}),
                    url: `${baseUrl}/services/${slug}`
                }
            ]
        };
    }

    const schema = [
        serviceSchema,
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": `${baseUrl}/`
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": `${baseUrl}/services`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": serviceName,
                    "item": `${baseUrl}/services/${slug}`
                }
            ]
        }
    ] as Record<string, unknown>[];

    if (data.faqs && data.faqs.length > 0) {
        schema.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": data.faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        } as Record<string, unknown>);
    }

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

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Services", href: "/services" },
                    { label: serviceName }
                ]}
            />

            {/* Markdown Content Section */}
            <section className="py-12 md:py-28 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto">
                        {(() => {
                            const markdownStyles = `max-w-none text-text-secondary text-[17px] md:text-lg
                                [&>h1]:font-heading [&>h1]:text-4xl [&>h1]:text-navy-950 [&>h1]:font-bold [&>h1]:mt-12 [&>h1]:mb-6
                                [&>h2]:font-heading [&>h2]:text-3xl [&>h2]:text-navy-950 [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6
                                [&>h3]:font-heading [&>h3]:text-2xl [&>h3]:text-navy-950 [&>h3]:font-bold [&>h3]:mt-8 [&>h3]:mb-4
                                [&>p]:leading-relaxed [&>p]:mb-6
                                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                                [&>li]:my-2
                                [&>strong]:text-navy-950 [&>strong]:font-semibold
                                [&_a]:text-copper [&_a]:font-medium hover:[&_a]:underline`;

                            if (offerConfig) {
                                const [before, after] = splitMarkdownAfterSection(md, "What This Service Covers");
                                return (
                                    <>
                                        <div className={markdownStyles}>
                                            <ReactMarkdown>{before}</ReactMarkdown>
                                        </div>
                                        <NewCustomerOffer {...offerConfig} />
                                        {after && (
                                            <div className={markdownStyles}>
                                                <ReactMarkdown>{after}</ReactMarkdown>
                                            </div>
                                        )}
                                    </>
                                );
                            }

                            return (
                                <div className={markdownStyles}>
                                    <ReactMarkdown>{md}</ReactMarkdown>
                                </div>
                            );
                        })()}

                        {/* Dynamic FAQ Block */}
                        {data.faqs && data.faqs.length > 0 && (
                            <div className="mt-16 pt-16 border-t border-border">
                                <h2 id="faq-section" className="font-heading text-3xl font-bold text-navy-950 mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {data.faqs.map((faq, index) => (
                                        <div key={index} className="bg-bg p-6 rounded-sm border border-border">
                                            <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">{faq.question}</h3>
                                            <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Related Services block */}
            <RelatedServices slugs={data.related || []} />

            <ServiceCTABand />

            <FinalCtaBand />
        </article>
    );
}
