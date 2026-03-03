import { ServiceContent } from "@/lib/content-schema";
import { getRelatedProblemsForService, getGuidesForService } from "@/lib/linking";
import Link from "next/link";
import { ArrowRight, BookOpen, AlertTriangle } from "lucide-react";

interface Props {
    content: ServiceContent;
}

export function InternalLinks({ content }: Props) {
    const relatedProblems = getRelatedProblemsForService(content.id);
    const guides = getGuidesForService(content.id);

    if (relatedProblems.length === 0 && guides.length === 0) return null;

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-950 mb-8 border-b border-border pb-4">
                    Learn More About {content.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Related Problems (Educational Conversion) */}
                    {relatedProblems.length > 0 && (
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900 mb-4">
                                <AlertTriangle className="h-5 w-5 text-brand-red" />
                                Common Symptoms
                            </h3>
                            <ul className="space-y-3">
                                {relatedProblems.map(prob => (
                                    <li key={prob.id}>
                                        <Link href={`/problems/${prob.slug}`} className="group flex items-center justify-between p-3 rounded-md hover:bg-bg border border-transparent hover:border-border transition-all">
                                            <span className="text-text-secondary group-hover:text-navy-950 font-medium transition-colors">{prob.title}</span>
                                            <ArrowRight className="h-4 w-4 text-copper opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Guides (Authority Building) */}
                    {guides.length > 0 && (
                        <div>
                            <h3 className="flex items-center gap-2 text-lg font-bold text-navy-900 mb-4">
                                <BookOpen className="h-5 w-5 text-navy-700" />
                                Educational Guides
                            </h3>
                            <ul className="space-y-3">
                                {guides.map(guide => (
                                    <li key={guide.id}>
                                        <Link href={`/guides/${guide.slug}`} className="group flex items-center justify-between p-3 rounded-md hover:bg-bg border border-transparent hover:border-border transition-all">
                                            <span className="text-text-secondary group-hover:text-navy-950 font-medium transition-colors">{guide.title}</span>
                                            <ArrowRight className="h-4 w-4 text-copper opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
