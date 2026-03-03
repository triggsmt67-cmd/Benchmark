import { ServiceContent } from "@/lib/content-schema";
import { Search, PenTool } from "lucide-react";

interface Props {
    content: ServiceContent;
}

export function DiagnosticProcess({ content }: Props) {
    if (!content.diagnosticProcess) return null;

    return (
        <section className="py-16 bg-surface">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/3 bg-navy-950 text-surface p-8 rounded-xl shadow-lg relative overflow-hidden shrink-0 w-full">
                        <Search className="h-12 w-12 text-copper mb-4 relative z-10" />
                        <h3 className="font-heading text-2xl font-bold mb-2 relative z-10">Our Diagnostic Process</h3>
                        <p className="text-muted/80 text-sm relative z-10">We test, we don’t guess. Finding the root cause saves you money.</p>
                        {/* Background accent */}
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-navy-900 rounded-full opacity-50 z-0" />
                    </div>

                    <div className="md:w-2/3 md:pt-4">
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {content.diagnosticProcess}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function RepairProcess({ content }: Props) {
    if (!content.repairProcess) return null;

    return (
        <section className="py-16 bg-bg border-y border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
                    <div className="md:w-1/3 bg-surface p-8 rounded-xl shadow-md border border-copper/20 shrink-0 w-full md:order-last">
                        <PenTool className="h-12 w-12 text-brand-red mb-4" />
                        <h3 className="font-heading text-2xl font-bold text-navy-950 mb-2">The Repair</h3>
                        <p className="text-text-secondary text-sm">OEM-grade parts. Master technician execution. No cutting corners.</p>
                    </div>

                    <div className="md:w-2/3 md:pt-4">
                        <p className="text-text-secondary text-lg leading-relaxed">
                            {content.repairProcess}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
