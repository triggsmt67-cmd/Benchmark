import Link from "next/link";
import { getServiceMarkdown } from "@/lib/serviceContent";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PrecisionDivider } from "@/components/widgets/precision-divider";

interface RelatedServicesProps {
    slugs: string[];
}

export async function RelatedServices({ slugs }: RelatedServicesProps) {
    if (!slugs || slugs.length === 0) return null;

    // Fetch details for each related service, skip if it doesn't exist
    const services = (await Promise.all(
        slugs.slice(0, 3).map(async (slug) => {
            const data = await getServiceMarkdown(slug);
            if (!data) return null;
            return {
                slug,
                title: data.data.title,
                description: data.data.description,
            };
        })
    )).filter((s): s is { slug: string; title: string; description: string } => s !== null);

    if (services.length === 0) return null;

    return (
        <section className="py-24 md:py-32 bg-surface-secondary border-t border-border/50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <Reveal>
                    <div className="mb-16">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6 tracking-tight">
                            Related Services
                        </h2>
                        <PrecisionDivider />
                    </div>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <StaggerItem key={index} className="h-full">
                            <Link href={`/services/${service.slug}`} className="block h-full group">
                                <Card className="relative h-full flex flex-col overflow-hidden rounded-sm border border-border bg-surface shadow-sm shadow-navy-900/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md">
                                    {/* Bespoke Copper Top Edge Rule */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper/30 group-hover:bg-copper transition-colors duration-300" />

                                    <CardHeader className="pt-8 pb-4 px-6 md:px-8">
                                        <CardTitle className="font-heading text-xl font-semibold tracking-tight text-navy-950 group-hover:text-copper transition-colors duration-200">
                                            {service.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 md:px-8 pb-8">
                                        <p className="font-sans text-[15px] leading-relaxed text-text-secondary line-clamp-2">
                                            {service.description}
                                        </p>
                                    </CardContent>

                                    {/* Reveal-style decorative element */}
                                    <div className="mt-auto px-8 pb-6 text-xs font-semibold uppercase tracking-widest text-copper/60 group-hover:text-copper transition-colors">
                                        View Details &rarr;
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
