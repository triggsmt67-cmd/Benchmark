import Link from "next/link";
import { getServiceMarkdown } from "@/lib/serviceContent";
import { getGuideMarkdown } from "@/lib/guideContent";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PrecisionDivider } from "@/components/widgets/precision-divider";

interface RelatedServicesProps {
    slugs: string[];
}

export async function RelatedServices({ slugs }: RelatedServicesProps) {
    if (!slugs || slugs.length === 0) return null;

    // Fetch details for each related item, skip if it doesn't exist
    const items = (await Promise.all(
        slugs.map(async (slug) => {
            // Try service first
            const service = await getServiceMarkdown(slug);
            if (service) {
                return {
                    slug,
                    type: 'services',
                    title: service.data.title,
                    description: service.data.description,
                };
            }
            // Try guide next
            const guide = await getGuideMarkdown(slug);
            if (guide) {
                return {
                    slug,
                    type: 'guides',
                    title: guide.data.title,
                    description: guide.data.description,
                };
            }
            return null;
        })
    )).filter((s): s is { slug: string; type: 'services' | 'guides'; title: string; description: string } => s !== null);

    if (items.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-surface-secondary border-t border-border/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6 tracking-tight">
                            Related Content
                        </h2>
                        <PrecisionDivider />
                    </div>
                </Reveal>

                <Stagger
                    className={`grid gap-6 md:gap-8 ${items.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                            items.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto' :
                                'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                        }`}
                >
                    {items.map((item, index) => (
                        <StaggerItem key={index} className="h-full">
                            <Link href={`/${item.type}/${item.slug}`} className="block h-full group">
                                <Card className="relative h-full flex flex-col overflow-hidden rounded-sm border border-border bg-white shadow-sm shadow-navy-900/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                                    {/* Bespoke Copper Top Edge Rule */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper/30 group-hover:bg-copper transition-colors duration-300" />

                                    <CardHeader className="pt-8 pb-4 px-6 md:px-8">
                                        <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy-950 group-hover:text-copper transition-colors duration-200">
                                            {item.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 md:px-8 pb-8 flex-grow">
                                        <p className="font-sans text-[15px] leading-relaxed text-text-secondary line-clamp-2">
                                            {item.description}
                                        </p>
                                    </CardContent>

                                    {/* Reveal-style decorative element */}
                                    <div className="mt-auto px-8 pb-6 text-xs font-semibold uppercase tracking-widest text-copper/60 group-hover:text-copper transition-colors">
                                        {item.type === 'guides' ? 'Read Guide' : 'View Service'} &rarr;
                                    </div>
                                </Card>
                            </Link>
                        </StaggerItem>
                    ))}
                </Stagger>
            </div>
        </section>
    );
}
