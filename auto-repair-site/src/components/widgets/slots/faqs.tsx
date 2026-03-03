import { ServiceContent } from "@/lib/content-schema";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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

                <Accordion type="single" collapsible className="w-full">
                    {content.faqs.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border-border">
                            <AccordionTrigger className="text-left font-medium text-navy-900 hover:text-brand-red py-4 text-lg">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-text-secondary leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
