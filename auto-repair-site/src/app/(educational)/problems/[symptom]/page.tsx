import { getProblemBySlug, getServiceById, PROBLEMS } from "@/lib/linking";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";

export async function generateStaticParams() {
    return PROBLEMS.filter(p => p.renderingEnabled).map(problem => ({
        symptom: problem.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ symptom: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const problem = getProblemBySlug(resolvedParams.symptom);
    if (!problem) return { title: "Not Found" };
    return {
        title: problem.seo.title,
        description: problem.seo.description,
        alternates: { canonical: `/problems/${problem.slug}` }
    };
}

export default async function SymptomPage({ params }: { params: Promise<{ symptom: string }> }) {
    const resolvedParams = await params;
    const problem = getProblemBySlug(resolvedParams.symptom);
    if (!problem) return notFound();

    const relatedService = getServiceById(problem.recommendedServiceId);

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <section className="bg-navy-950 py-20 text-surface">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-copper/30 bg-surface/10 px-3 py-1 text-sm font-medium mb-6">
                        <AlertCircle className="h-4 w-4 text-brand-red" /> Troubleshooting Guide
                    </div>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{problem.title}</h1>
                </div>
            </section>

            <section className="py-16 bg-surface">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="font-heading text-2xl font-bold text-navy-950 mb-6">{problem.symptomsTitle}</h2>
                    <ul className="space-y-4 mb-12">
                        {problem.symptomsList.map((sym, i) => (
                            <li key={i} className="flex gap-3 text-lg text-text-secondary">
                                <CheckCircle2 className="h-6 w-6 text-copper shrink-0 mt-1" />
                                <span>{sym}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="bg-bg p-8 rounded-xl border border-border mb-12">
                        <h3 className="font-heading text-xl font-bold text-navy-950 mb-4">Diagnostics Advice</h3>
                        <p className="text-text-secondary leading-relaxed">{problem.diagnosticAdvice}</p>
                    </div>

                    {relatedService && (
                        <div className="bg-brand-red/5 border border-brand-red/20 p-8 rounded-xl shadow-sm text-center">
                            <h3 className="font-heading text-2xl font-bold text-navy-950 mb-4">Need Professional Diagnostics?</h3>
                            <p className="text-text-secondary mb-6">Our master technicians can accurately diagnose and repair the root cause using our {relatedService.name} service.</p>
                            <Button asChild className="bg-brand-red hover:bg-brand-red-hover text-white">
                                <Link href={`/services/${relatedService.slug}`} className="flex items-center gap-2">
                                    Learn about {relatedService.name} <ArrowRight className="h-4 w-4" />
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
