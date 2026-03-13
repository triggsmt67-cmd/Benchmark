import Link from "next/link";
import { Check } from "lucide-react";

export interface NewCustomerOfferProps {
    eyebrow?: string;
    title: string;
    price: string;
    description?: string;
    includes?: string[];
    ctaLabel?: string;
    ctaHref?: string;
    disclaimer?: string;
}

export function NewCustomerOffer({
    eyebrow = "New Customer Offer",
    title,
    price,
    description,
    includes,
    ctaLabel = "Book Appointment",
    ctaHref = "/contact",
    disclaimer,
}: NewCustomerOfferProps) {
    return (
        <aside
            id="new-customer-offer"
            aria-label={eyebrow}
            className="my-10 md:my-14 border border-border rounded-sm bg-[#FDFCFA] overflow-hidden"
        >
            {/* Top accent line */}
            <div className="h-[3px] bg-brand-red" />

            <div className="px-5 py-6 md:px-8 md:py-8">
                {/* Eyebrow */}
                {eyebrow && (
                    <p className="text-[13px] font-semibold tracking-wide uppercase text-copper mb-2">
                        {eyebrow}
                    </p>
                )}

                {/* Headline + Price row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-3">
                    <h3 className="font-heading text-[22px] md:text-2xl font-bold text-navy-950 leading-tight">
                        {title}
                    </h3>
                    <span className="font-heading text-[28px] md:text-3xl font-bold text-navy-950 tabular-nums leading-none">
                        {price}
                    </span>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-[15px] md:text-base text-text-secondary leading-relaxed mb-5">
                        {description}
                    </p>
                )}

                {/* Includes list */}
                {includes && includes.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {includes.map((item) => (
                            <li
                                key={item}
                                className="flex items-start gap-2.5 text-[15px] text-text-secondary"
                            >
                                <Check
                                    className="w-4 h-4 text-copper mt-0.5 flex-shrink-0"
                                    strokeWidth={2.5}
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* CTA */}
                <Link
                    href={ctaHref}
                    className="inline-flex items-center justify-center w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-12 px-8 text-[15px] font-medium rounded-sm transition-colors"
                >
                    {ctaLabel}
                </Link>

                {/* Disclaimer */}
                {disclaimer && (
                    <p className="mt-4 text-[13px] text-muted-foreground leading-snug">
                        {disclaimer}
                    </p>
                )}
            </div>
        </aside>
    );
}
