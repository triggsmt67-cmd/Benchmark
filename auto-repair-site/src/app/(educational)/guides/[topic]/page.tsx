import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGuideMarkdown, getAllGuideSlugs } from "@/lib/guideContent";
import ReactMarkdown from "react-markdown";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { RelatedServices } from "@/components/widgets/related-services";
import { BookOpen } from "lucide-react";

// 1. Generate Static Params for build time
export async function generateStaticParams() {
    const slugs = await getAllGuideSlugs();
    return slugs.map((topic) => ({
        topic,
    }));
}

// 2. Metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const { topic } = resolvedParams;

    const result = await getGuideMarkdown(topic);

    if (!result) {
        return {
            title: "Guide Not Found"
        };
    }

    const { title, description } = result.data;

    return {
        title: `${title} | Benchmark Automotive Service`,
        description: description || `Professional automotive guide in Missoula, MT.`,
        alternates: {
            canonical: `https://www.benchmarkmissoula.com/guides/${topic}`
        },
        openGraph: {
            url: `https://www.benchmarkmissoula.com/guides/${topic}`,
            title: `${title} | Benchmark Automotive Service`,
            description: description || `Professional automotive guide in Missoula, MT.`
        }
    };
}

// 3. Page Assembly
export default async function GuidePage({ params }: { params: Promise<{ topic: string }> }) {
    const resolvedParams = await params;
    const { topic } = resolvedParams;

    // Server-side fetch of markdown content and frontmatter
    const mdResult = await getGuideMarkdown(topic);
    if (!mdResult) return notFound();

    const { content: md, data } = mdResult;
    const guideTitle = data.title || topic
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    const baseUrl = "https://www.benchmarkmissoula.com";

    const schema = [
        {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guideTitle,
            "description": data.description,
            "author": {
                "@type": "Organization",
                "name": "Benchmark Automotive Service"
            },
            "publisher": {
                "@type": "ProfessionalService",
                "@id": "https://www.benchmarkmissoula.com/#business"
            },
            "url": `${baseUrl}/guides/${topic}`
        },
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
                    "name": "Guides",
                    "item": `${baseUrl}/guides`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": guideTitle,
                    "item": `${baseUrl}/guides/${topic}`
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
            
            {/* Guide Hero */}
            <section className="bg-navy-950 text-white py-20 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-surface/10 px-3 py-1 text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4 text-copper" /> Educational Guide
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        {guideTitle}
                    </h1>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Guides", href: "/guides" },
                    { label: guideTitle }
                ]}
            />

            {/* Content Section */}
            <section className="py-12 md:py-24 bg-surface">
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
                                [&_a]:text-copper [&_a]:font-medium hover:[&_a]:underline">
                            <ReactMarkdown>{md}</ReactMarkdown>
                        </div>

                        {/* Dynamic FAQ Block */}
                        {data.faqs && data.faqs.length > 0 && (
                            <div className="mt-16 pt-16 border-t border-border">
                                <h2 className="font-heading text-3xl font-bold text-navy-950 mb-8">Frequently Asked Questions</h2>
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

            {/* Related content block */}
            <RelatedServices slugs={data.related || []} />

            <FinalCtaBand />
        </article>
    );
}
