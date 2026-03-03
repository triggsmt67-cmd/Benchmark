import { ServiceContent } from "@/lib/content-schema";
import { CheckCircle2 } from "lucide-react";

interface Props {
    content: ServiceContent;
}

export function WhyChooseUs({ content }: Props) {
    if (!content.whyChooseUs || content.whyChooseUs.length === 0) return null;

    return (
        <section className="py-20 bg-navy-950 text-surface text-center">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">
                    Why Choose Us for {content.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {content.whyChooseUs.map((reason, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-surface/10 flex items-center justify-center">
                                <CheckCircle2 className="h-6 w-6 text-gold-soft" />
                            </div>
                            <p className="text-muted/90 text-lg leading-relaxed">{reason}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
