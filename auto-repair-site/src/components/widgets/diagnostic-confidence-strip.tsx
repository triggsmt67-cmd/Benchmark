import { Search, Zap, CheckCircle2 } from "lucide-react";

export function DiagnosticConfidenceStrip() {
    return (
        <section className="bg-surface py-20 border-b border-border">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-4 inline-block relative">
                        Why Accurate Diagnostics Matter
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-copper rounded-full"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Block 1 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 p-4 rounded-full bg-bg border border-border group-hover:border-copper/50 transition-colors">
                            <Search className="h-8 w-8 text-navy-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">Test Before Replace</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Modern vehicles are complex. Proper testing prevents unnecessary parts replacement and saves long-term cost.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 p-4 rounded-full bg-bg border border-border group-hover:border-copper/50 transition-colors">
                            <Zap className="h-8 w-8 text-navy-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">Advanced Electrical Expertise</h3>
                        <p className="text-text-secondary leading-relaxed">
                            From sensor faults to intermittent wiring issues, we use professional-grade scan tools and methodical testing procedures.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col items-center text-center group">
                        <div className="mb-6 p-4 rounded-full bg-bg border border-border group-hover:border-copper/50 transition-colors">
                            <CheckCircle2 className="h-8 w-8 text-navy-700" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">Confirmed Repairs</h3>
                        <p className="text-text-secondary leading-relaxed">
                            Every repair is verified before your vehicle leaves the shop. No guessing. No shortcuts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
