import type { NewCustomerOfferProps } from "@/components/widgets/new-customer-offer";

/**
 * Per-page offer configurations.
 *
 * Key   = service slug (matches the .md filename without extension)
 * Value = props for the <NewCustomerOffer> component
 *
 * To add an offer to any service page:
 *   1. Add a new entry here keyed by the slug
 *   2. The offer will automatically render after the
 *      "What This Service Covers" section (or after the first heading
 *      if that section isn't found)
 *
 * To remove an offer, simply delete or comment out the entry.
 */
const defaultOffer: NewCustomerOfferProps = {
    eyebrow: "New Customer Offer",
    title: "Full Synthetic Oil Service",
    price: "$79.95",
    description:
        "A simple first visit with clear recommendations and no pressure.",
    includes: [
        "Full synthetic oil",
        "Premium oil filter",
        "Multi-point inspection",
        "Fluid top-off",
    ],
    ctaLabel: "Book Appointment",
    ctaHref: "/contact",
    disclaimer: "First-time customers only. Up to 5 quarts.",
};

export const serviceOfferConfigs: Record<string, NewCustomerOfferProps> = {
    // — Maintenance section —
    "fluid-services": { ...defaultOffer },
    "oil-change": { ...defaultOffer },
    "general-maintenance": { ...defaultOffer },
    "undercarriage-and-suspension": { ...defaultOffer },
    "how-cold-weather-affects-your-car": { ...defaultOffer },
    "auto-repair-missoula-mt": { ...defaultOffer },
};
