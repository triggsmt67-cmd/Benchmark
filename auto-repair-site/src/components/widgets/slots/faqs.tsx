import { ServiceContent } from "@/lib/content-schema";

interface Props {
    content: ServiceContent;
}

export function ServiceFaqs({ content }: Props) {
    if (!content.faqs || content.faqs.length === 0) return null;

    return (
        <section className="py-20 bg-bg border-t border-border">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-10 text-center">
                    Frequently Asked Questions
                </h2>

                <div className="w-full">
                    {content.faqs.map((faq) => (
                        <details key={faq.question} className="group border-b border-border">
                            <summary className="cursor-pointer py-4 text-lg font-medium text-navy-900 focus-visible:outline-2 focus-visible:outline-brand-red">
                                {faq.question}
                            </summary>
                            <p className="text-text-secondary leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
