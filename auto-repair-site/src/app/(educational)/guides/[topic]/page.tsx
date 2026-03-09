import { getGuideBySlug, getServiceById, GUIDES } from "@/lib/linking";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";

export async function generateStaticParams() {
    return GUIDES.filter(g => g.renderingEnabled).map(guide => ({
        topic: guide.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const guide = getGuideBySlug(resolvedParams.topic);
    if (!guide) return { title: "Not Found" };
    return {
        title: guide.seo.title,
        description: guide.seo.description,
        alternates: { canonical: `/guides/${guide.slug}` }
    };
}

export default async function GuidePage({ params }: { params: Promise<{ topic: string }> }) {
    const resolvedParams = await params;
    const guide = getGuideBySlug(resolvedParams.topic);
    if (!guide) return notFound();

    const relatedService = getServiceById(guide.parentServiceId);

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <section className="bg-navy-950 py-20 text-surface">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl tracking-tight">
                    <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-surface/10 px-3 py-1 text-sm font-medium mb-6">
                        <BookOpen className="h-4 w-4 text-copper" /> Educational Guide
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">{guide.title}</h1>
                </div>
            </section>

            <section className="py-16 bg-surface typography-container">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    {/* Note: If markdown is passed in from CMS, a highly styled markdown renderer goes here. */}
                    <div className="prose prose-lg prose-headings:font-heading prose-headings:text-navy-950 prose-p:text-text-secondary w-full max-w-none mb-16 whitespace-pre-wrap">
                        {guide.content}
                    </div>

                    {relatedService && (
                        <div className="bg-bg border border-border p-8 rounded-xl mt-12">
                            <h3 className="font-heading text-2xl font-bold text-navy-950 mb-4">Related Service</h3>
                            <p className="text-text-secondary mb-6">Learn more about our professional {relatedService.name} services.</p>
                            <Button asChild variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-colors">
                                <Link href={`/services/${relatedService.slug}`} className="flex items-center gap-2">
                                    View Service Details <ArrowRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
