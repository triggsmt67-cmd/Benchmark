export type BaseSeoContent = {
    title: string;
    description: string;
    canonical?: string;
};

import { siteConfig } from "@/lib/siteConfig";

// Tier 1: Core Pages
export type LocationContent = {
    city: string;
    state: string;
    zipCode: string;
    slug: string; // e.g., 'missoula'
    coordinates: {
        lat: number;
        lng: number;
    };
    address: string;
    phone: string;
};

// Tier 2: Commercial Pages
export type ServiceContent = {
    id: string; // Internal reference ID
    slug: string; // URL path, e.g., 'brake-repair'
    name: string; // e.g., 'Brake Repair & Replacement'
    seo: BaseSeoContent;

    // Slots Content
    hero: {
        headline: string;
        subheadline: string;
    };
    overview: string;
    symptoms: string[];
    diagnosticProcess: string;
    repairProcess: string;
    whyChooseUs: string[];
    faqs: { question: string; answer: string }[];

    // Topic Clustering Logic
    relatedProblems: string[]; // Array of ProblemContent IDs
    relatedMaintenance: string[]; // Array of Maintenance IDs
    availableLocations: string[]; // Array of LocationContent Slugs indicating city support

    // Content Generation Rule: Minimum length thresholds can be applied here before rendering.
    renderingEnabled: boolean;
};

// Tier 3: Educational Pages
export type GuideContent = {
    id: string;
    slug: string; // e.g., 'how-long-do-brakes-last'
    title: string;
    seo: BaseSeoContent;
    content: string; // Rich text / markdown in future CMS
    parentServiceId: string; // Links back to a commercial service
    renderingEnabled: boolean;
};

export type ProblemContent = {
    id: string;
    slug: string; // e.g., 'squeaking-brakes'
    title: string;
    seo: BaseSeoContent;
    symptomsTitle: string;
    symptomsList: string[];
    diagnosticAdvice: string;
    recommendedServiceId: string; // Links to commercial offering
    renderingEnabled: boolean;
};

// DUMMY STATIC DATA LAYER (Pre-CMS readiness)
export const LOCATIONS: LocationContent[] = [
    {
        city: siteConfig.address.city,
        state: siteConfig.address.state,
        zipCode: siteConfig.address.zip,
        slug: siteConfig.address.city.toLowerCase(),
        coordinates: { lat: 46.8655, lng: -114.0414 }, // Missoula approximation
        address: siteConfig.address.street,
        phone: siteConfig.phone.display
    }
];

export const SERVICES: ServiceContent[] = [
    {
        id: "srv_brakes",
        slug: "brake-repair",
        name: "Brake Repair & Replacement",
        seo: {
            title: `Brake Repair Service in ${siteConfig.address.city} | ${siteConfig.businessName}`,
            description: "Expert brake pad replacement, rotor resurfacing, and full brake system diagnostics. Trusted local auto repair.",
        },
        hero: {
            headline: "Confident Stopping Power. No Shortcuts.",
            subheadline: "Complete brake system diagnostics and premium replacements, ensuring your safety on every drive."
        },
        overview: `Your brakes are the most critical safety system on your vehicle. At ${siteConfig.businessName}, we don't just 'slap pads on' — we perform a comprehensive inspection of your rotors, calipers, hydraulic lines, and master cylinder to ensure everything operates to OEM standards.`,
        symptoms: [
            "Squeaking, grinding, or squealing noises when applying brakes.",
            "Vibration or pulsation in the steering wheel or brake pedal.",
            "Spongy or soft brake pedal feel.",
            "Vehicle pulling to one side while braking.",
            "Dashboard brake warning light illuminated."
        ],
        diagnosticProcess: "We start with a test drive (if safe), followed by a visual inspection of pad thickness, rotor runout, and caliper operation. We check brake fluid moisture levels and inspect all lines for leaks.",
        repairProcess: "We replace worn components using premium OEM-equivalent friction materials and rotors. Caliper slide pins are cleaned and lubricated, and the entire system is bled if needed to ensure optimal hydraulic pressure.",
        whyChooseUs: [
            "We use only premium, low-dust, noise-free brake formulations.",
            "Every rotor replacement includes proper hub cleaning to prevent lateral runout.",
            "Backed by our 12-Month / 12,000-Mile warranty."
        ],
        faqs: [
            { question: "How often should I replace my brake pads?", answer: "Typically every 30,000 to 50,000 miles, but this varies heavily based on your driving habits (city vs. highway)." },
            { question: "Do I always need to replace my rotors with the pads?", answer: "Not always, but we highly recommend it if they are warped or below the minimum safe thickness. We will measure them accurately before recommending replacement." }
        ],
        relatedProblems: ["prob_squeaking_brakes", "prob_shaking_brakes"],
        relatedMaintenance: [],
        availableLocations: [siteConfig.address.city.toLowerCase()],
        renderingEnabled: true
    }
];

export const PROBLEMS: ProblemContent[] = [
    {
        id: "prob_squeaking_brakes",
        slug: "squeaking-brakes",
        title: "Why Are My Brakes Squeaking?",
        seo: {
            title: `Why Are My Brakes Squeaking? | ${siteConfig.businessName}`,
            description: "Learn the common causes of squeaking brakes, from worn pads to moisture, and when it's time to see a mechanic."
        },
        symptomsTitle: "Common Causes of Brake Squeak",
        symptomsList: [
            "Worn out brake pads hitting the built-in wear indicator (the 'squealer' tab).",
            "Surface rust or moisture after sitting overnight (usually goes away after a few stops).",
            "Glazed brake pads from heavy or aggressive braking.",
            "Lack of lubrication on caliper slide pins or backing plates.",
            "Cheap, low-quality brake pad materials."
        ],
        diagnosticAdvice: "If the squeal goes away after a few stops in the morning, it's likely just moisture. If the noise is constant, metallic, or turns into a grinding sound, you need an immediate inspection. Do not ignore persistent brake noises.",
        recommendedServiceId: "srv_brakes",
        renderingEnabled: true
    }
];

export const GUIDES: GuideContent[] = [
    {
        id: "guide_brake_lifespan",
        slug: "how-long-do-brakes-last",
        title: "How Long Do Brakes Really Last?",
        seo: {
            title: `How Long Do Brake Pads and Rotors Last? | ${siteConfig.businessName}`,
            description: "Understand the factors that affect your brake pad lifespan and how to maximize your brake system's durability."
        },
        content: "Brake longevity is totally dependent on physics and friction. A driver commuting entirely on the highway might get 70,000 miles out of a set of pads, while a city driver who frequently stops at red lights might need them replaced at 25,000 miles.\n\nKey factors include:\n\n1. **Driving Habits:** Hard stops generate immense heat and friction, accelerating wear.\n2. **Vehicle Weight:** Heavier SUVs and trucks naturally consume friction material faster than lightweight sedans.\n3. **Material Quality:** Ceramic pads often last longer and produce less dust than semi-metallic pads, but might cost more upfront.\n4. **Rotor Condition:** Slapping new pads onto heavily grooved rotors will chew up the new pads very quickly.\n\nTo maximize life, anticipate stops, avoid riding the brake pedal on downhills, and ensure your calipers are serviced regularly so they don't seize or drag.",
        parentServiceId: "srv_brakes",
        renderingEnabled: true
    }
];
