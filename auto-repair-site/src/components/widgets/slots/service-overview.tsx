import { ServiceContent } from "@/lib/content-schema";
import { Wrench } from "lucide-react";

interface Props {
    content: ServiceContent;
}

export function ServiceOverview({ content }: Props) {
    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-10 w-10 bg-navy-950 rounded-lg flex items-center justify-center">
                            <Wrench className="h-5 w-5 text-copper" />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy-950">
                            Service Overview
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed">
                        {content.overview}
                    </p>
                </div>
            </div>
        </section>
    );
}
