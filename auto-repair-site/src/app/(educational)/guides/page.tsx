import { Metadata } from "next";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Link from "next/link";
import { BookOpen, ChevronRight, Search } from "lucide-react";
import { getAllGuideData } from "@/lib/guideContent";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Educational Guides | Benchmark Automotive Service",
    description: "Expert automotive guides for Missoula, MT drivers. Learn about diagnostics, used car inspections, and vehicle maintenance.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/guides",
    },
};

export default async function GuidesHubPage() {
    const guides = await getAllGuideData();
    const sortedGuides = guides.sort((a, b) => (a.order || 99) - (b.order || 99));

    return (
        <article className="flex flex-col min-h-[100dvh]">
            {/* HER0 */}
            <section className="bg-navy-950 text-white py-24 border-b border-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-white/5 px-3 py-1 text-sm font-medium mb-6">
                                <BookOpen className="h-4 w-4 text-copper" /> Educational Hub
                            </div>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                                Automotive Guides
                            </h1>
                            <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                                Professional insights to help you make informed decisions about your vehicle.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Guides Grid */}
            <section className="bg-surface py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedGuides.map((guide) => (
                            <StaggerItem key={guide.slug}>
                                <Link href={`/guides/${guide.slug}`} className="group block h-full">
                                    <Card className="h-full border-border hover:border-copper/50 transition-all duration-300 hover:shadow-lg bg-white overflow-hidden relative">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-copper scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
                                        <CardHeader className="pt-8 px-8">
                                            <div className="flex justify-between items-start mb-4">
                                                <span className="text-xs font-bold uppercase tracking-wider text-copper">
                                                    {guide.category}
                                                </span>
                                                <ChevronRight className="w-5 h-5 text-copper opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                            </div>
                                            <CardTitle className="font-heading text-2xl font-bold text-navy-950 group-hover:text-copper transition-colors">
                                                {guide.title}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="px-8 pb-8">
                                            <p className="text-text-secondary leading-relaxed">
                                                {guide.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </StaggerItem>
                        ))}
                    </Stagger>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
