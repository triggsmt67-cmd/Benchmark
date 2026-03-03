import { ServiceContent } from "@/lib/content-schema";
import { AlertCircle } from "lucide-react";

interface Props {
    content: ServiceContent;
}

export function CommonSymptoms({ content }: Props) {
    if (!content.symptoms || content.symptoms.length === 0) return null;

    return (
        <section className="py-16 bg-bg border-y border-border">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-950 mb-8">
                    Signs You Need {content.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                    {content.symptoms.map((symptom, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-surface p-4 rounded-lg shadow-sm border border-border/50">
                            <AlertCircle className="h-5 w-5 text-brand-red shrink-0 mt-0.5" />
                            <p className="text-text-secondary">{symptom}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
