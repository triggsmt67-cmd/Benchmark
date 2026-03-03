import { KeySquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";

interface AfterHoursDropOffProps {
    title?: string;
    description?: string;
    assuranceMsg?: string;
    microText?: string;
    ctaHref?: string;
}

export function AfterHoursDropOff({
    title = "After Hours Drop-Off Available",
    description = "Drop your vehicle off securely after hours and we\u2019ll follow up the next business day with a diagnostic plan and next steps.",
    assuranceMsg = "We\u2019ll confirm receipt the next business day.",
    microText = "Keys and instructions can be left in our secure drop box.",
    ctaHref = `tel:${siteConfig.phone.link}`
}: AfterHoursDropOffProps) {
    return (
        <section className="bg-bg py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto rounded-xl border border-border bg-surface shadow-sm overflow-hidden relative">
                    {/* Subtle Copper Accent Divider */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-copper/20 via-copper to-copper/20" />

                    <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 justify-between">
                        <div className="flex gap-5 items-start">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-950">
                                <KeySquare className="h-6 w-6 text-copper" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-heading text-lg font-semibold text-navy-950">
                                    {title}
                                </h3>
                                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                                    {description}
                                </p>
                                <div className="pt-1">
                                    <p className="inline-flex items-center gap-1.5 font-medium text-navy-900 text-sm">
                                        <span className="flex h-1.5 w-1.5 rounded-full bg-copper"></span>
                                        {assuranceMsg}
                                    </p>
                                </div>
                                {microText && (
                                    <p className="text-xs text-muted-foreground pt-1">
                                        {microText}
                                    </p>
                                )}
                            </div>
                        </div>

                        {ctaHref && (
                            <div className="w-full md:w-auto shrink-0 md:pl-4">
                                <Button
                                    variant="outline"
                                    asChild
                                    className="w-full md:w-auto border-navy-900 text-navy-900 hover:bg-navy-50"
                                >
                                    <a href={ctaHref}>Call for Details</a>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
