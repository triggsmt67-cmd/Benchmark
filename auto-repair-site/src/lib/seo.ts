import { siteConfig } from "@/lib/siteConfig";

export interface CityEntity {
    name: string;
    sameAs: string[];
}

export const CITY_LOOKUP: Record<string, CityEntity> = {
    "missoula": {
        name: "Missoula, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Missoula,_Montana",
            "https://www.wikidata.org/wiki/Q189508"
        ]
    },
    "lolo": {
        name: "Lolo, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Lolo,_Montana",
            "https://www.wikidata.org/wiki/Q2213768"
        ]
    },
    "frenchtown": {
        name: "Frenchtown, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Frenchtown,_Montana",
            "https://www.wikidata.org/wiki/Q2493393"
        ]
    },
    "bonner": {
        name: "Bonner, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Bonner-West_Riverside,_Montana",
            "https://www.wikidata.org/wiki/Q2398418"
        ]
    },
    "east-missoula": {
        name: "East Missoula, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/East_Missoula,_Montana",
            "https://www.wikidata.org/wiki/Q2574041"
        ]
    },
    "milltown": {
        name: "Milltown, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Milltown,_Montana",
            "https://www.wikidata.org/wiki/Q6859871"
        ]
    },
    "orchard-homes": {
        name: "Orchard Homes, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Orchard_Homes,_Montana",
            "https://www.wikidata.org/wiki/Q2481636"
        ]
    },
    "target-range": {
        name: "Target Range, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Target_Range,_Montana",
            "https://www.wikidata.org/wiki/Q2353139"
        ]
    },
    "clinton": {
        name: "Clinton, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Clinton,_Montana",
            "https://www.wikidata.org/wiki/Q2212351"
        ]
    },
    "huson": {
        name: "Huson, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Huson,_Montana",
            "https://www.wikidata.org/wiki/Q14704879"
        ]
    },
    "wye": {
        name: "Wye, MT",
        sameAs: [
            "https://en.wikipedia.org/wiki/Wye,_Montana",
            "https://www.wikidata.org/wiki/Q10825316"
        ]
    }
};

export function getNormalizedCityEntity(rawCity: string): CityEntity {
    if (!rawCity) return CITY_LOOKUP["missoula"];
    const normalized = rawCity.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return CITY_LOOKUP[normalized] || CITY_LOOKUP["missoula"];
}

// ---------------------------------------------------------------------------
// Primitive node generators — return raw objects WITHOUT @context.
// @context is applied exactly ONCE at the @graph wrapper level.
// ---------------------------------------------------------------------------

function websiteNode() {
    return {
        "@type": "WebSite",
        "@id": "https://www.benchmarkmissoula.com/#website",
        "name": siteConfig.businessName,
        "url": "https://www.benchmarkmissoula.com",
        "description": "Automotive diagnostics and repair services in Missoula, Montana.",
        "publisher": {
            "@type": "AutoRepair",
            "@id": "https://www.benchmarkmissoula.com/#business"
        }
    };
}

function businessNode() {
    return {
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "image": "https://www.benchmarkmissoula.com/diagnostic_hero_bg_v2.png",
        "logo": "https://www.benchmarkmissoula.com/diagnostic_hero_bg_v2.png",
        "url": "https://www.benchmarkmissoula.com",
        "hasMap": "https://maps.app.goo.gl/k1AJiMky4sBqGitA9",
        "telephone": "+14063171405",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": siteConfig.address.street,
            "addressLocality": siteConfig.address.city,
            "addressRegion": siteConfig.address.state,
            "postalCode": siteConfig.address.zip,
            "addressCountry": siteConfig.address.country
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 46.855018,
            "longitude": -114.0255
        },
        "areaServed": Object.keys(CITY_LOOKUP).map(key => {
            const city = CITY_LOOKUP[key];
            return {
                "@type": "City",
                "name": city.name.split(",")[0],
                "sameAs": city.sameAs
            };
        }),
        "mainEntityOfPage": {
            "@type": "WebSite",
            "@id": "https://www.benchmarkmissoula.com/#website"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "description": "By appointment"
            }
        ]
    };
}

// ---------------------------------------------------------------------------
// Legacy exports — preserved for any external callers. These now delegate
// to the primitive node generators and add @context for standalone use.
// ---------------------------------------------------------------------------

export function generateWebSiteSchema() {
    return { "@context": "https://schema.org", ...websiteNode() };
}

export function generateLocalBusinessSchema() {
    return { "@context": "https://schema.org", ...businessNode() };
}

// ---------------------------------------------------------------------------
// Unified Graph Builder — the ONLY output wrapper.
// Accepts an array of raw node objects, strips any stray @context from
// individual nodes, and wraps them in a single { @context, @graph } object.
// ---------------------------------------------------------------------------

export function buildUnifiedGraph(nodes: any[]): { "@context": string; "@graph": any[] } {
    const cleanedNodes = nodes.map(node => {
        if (node && node["@context"]) {
            const { "@context": _, ...rest } = node;
            return rest;
        }
        return node;
    });

    return {
        "@context": "https://schema.org",
        "@graph": cleanedNodes
    };
}

// ---------------------------------------------------------------------------
// Text sanitization & serialization
// ---------------------------------------------------------------------------

export function escapeText(str: string): string {
    if (!str) return "";
    return str
        .replace(/"/g, '\u201C') // Replace straight double quotes with curly open
        .replace(/\n/g, " ")
        .replace(/\r/g, "")
        .replace(/[\u0000-\u001F\u007F-\u009F]/g, "")
        .trim();
}

export function serializeSchema(schema: any): string {
    return JSON.stringify(schema)
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e');
}

// ---------------------------------------------------------------------------
// Schema interfaces
// ---------------------------------------------------------------------------

export interface ServiceSchemaOptions {
    slug: string;
    name: string;
    description: string;
    offerConfig?: {
        title: string;
        price: string;
        description: string;
        includes?: string[];
        disclaimer?: string;
    };
    faqs?: { question: string; answer: string }[];
}

export interface CityServiceSchemaOptions {
    slug: string;
    serviceName: string;
    serviceDescription: string;
    citySlug: string;
    cityName: string;
    cityState: string;
    faqs?: { question: string; answer: string }[];
}

export interface ServiceAreaDetailSchemaOptions {
    citySlug: string;
    cityName: string;
    title: string;
    faqs: { question: string; answer: string }[];
}

// ---------------------------------------------------------------------------
// HOMEPAGE — unified graph with WebSite + AutoRepair
// ---------------------------------------------------------------------------

export function getHomepageSchema(): { "@context": string; "@graph": any[] } {
    return buildUnifiedGraph([
        websiteNode(),
        businessNode()
    ]);
}

// ---------------------------------------------------------------------------
// GUIDE DETAIL — unified graph: WebSite + AutoRepair + Article + Breadcrumbs + FAQ
// ---------------------------------------------------------------------------

export interface GuideDetailSchemaOptions {
    slug: string;
    title: string;
    description: string;
    faqs?: { question: string; answer: string }[];
}

export function getGuideDetailSchema(options: GuideDetailSchemaOptions): { "@context": string; "@graph": any[] } {
    const pageUrl = `https://www.benchmarkmissoula.com/guides/${options.slug}`;

    const article = {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        "headline": escapeText(options.title),
        "description": escapeText(options.description),
        "author": {
            "@type": "Organization",
            "name": "Benchmark Automotive Service"
        },
        "publisher": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "url": pageUrl
    };

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Guides",
                "item": "https://www.benchmarkmissoula.com/guides"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeText(options.title),
                "item": pageUrl
            }
        ]
    };

    const nodes: any[] = [websiteNode(), businessNode(), article, breadcrumbs];

    if (options.faqs && options.faqs.length > 0) {
        nodes.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": escapeText(faq.question),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": escapeText(faq.answer)
                }
            }))
        });
    }

    return buildUnifiedGraph(nodes);
}

// ---------------------------------------------------------------------------
// PROBLEM/SYMPTOM DETAIL — unified graph: WebSite + AutoRepair + Article + Breadcrumbs
// ---------------------------------------------------------------------------

export interface ProblemDetailSchemaOptions {
    slug: string;
    title: string;
    description: string;
}

export function getProblemDetailSchema(options: ProblemDetailSchemaOptions): { "@context": string; "@graph": any[] } {
    const pageUrl = `https://www.benchmarkmissoula.com/problems/${options.slug}`;

    const article = {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        "headline": escapeText(options.title),
        "description": escapeText(options.description),
        "author": {
            "@type": "Organization",
            "name": "Benchmark Automotive Service"
        },
        "publisher": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "url": pageUrl
    };

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Symptom Troubleshooting",
                "item": "https://www.benchmarkmissoula.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeText(options.title),
                "item": pageUrl
            }
        ]
    };

    return buildUnifiedGraph([websiteNode(), businessNode(), article, breadcrumbs]);
}

// ---------------------------------------------------------------------------
// SERVICES HUB — unified graph with WebSite + AutoRepair + ItemList + Breadcrumbs
// ---------------------------------------------------------------------------

export function getServicesHubSchema(services: { title: string; description: string; slug: string }[]): { "@context": string; "@graph": any[] } {
    const pageUrl = "https://www.benchmarkmissoula.com/services";

    const itemList = {
        "@type": "ItemList",
        "@id": `${pageUrl}#itemlist`,
        "name": "Benchmark Automotive Service Offerings",
        "description": "Comprehensive list of auto repair and diagnostic services in Missoula, MT.",
        "itemListElement": services.map((s, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "Service",
                "@id": `https://www.benchmarkmissoula.com/services/${s.slug}#service`,
                "name": escapeText(s.title),
                "description": escapeText(s.description),
                "url": `https://www.benchmarkmissoula.com/services/${s.slug}`,
                "provider": {
                    "@id": "https://www.benchmarkmissoula.com/#business"
                }
            }
        }))
    };

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": pageUrl
            }
        ]
    };

    return buildUnifiedGraph([
        websiteNode(),
        businessNode(),
        itemList,
        breadcrumbs
    ]);
}

// ---------------------------------------------------------------------------
// SERVICE DETAIL — unified graph: WebSite + AutoRepair + Service + Breadcrumbs + FAQ
// ---------------------------------------------------------------------------

export function getServiceDetailSchema(options: ServiceSchemaOptions): { "@context": string; "@graph": any[] } {
    const pageUrl = `https://www.benchmarkmissoula.com/services/${options.slug}`;

    const service: any = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": escapeText(options.name),
        "description": escapeText(options.description),
        "serviceType": escapeText(options.name),
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": Object.keys(CITY_LOOKUP).map(key => {
            const city = CITY_LOOKUP[key];
            return {
                "@type": "City",
                "name": city.name.split(",")[0],
                "sameAs": city.sameAs
            };
        }),
        "image": "https://www.benchmarkmissoula.com/diagnostic_hero_bg_v2.png",
        "url": pageUrl
    };

    if (options.offerConfig) {
        const priceValue = options.offerConfig.price.replace(/[^0-9.]/g, "");
        service.hasOfferCatalog = {
            "@type": "OfferCatalog",
            "name": `${escapeText(options.name)} Offers`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": escapeText(options.offerConfig.title),
                    "price": priceValue,
                    "priceCurrency": "USD",
                    "description": [
                        escapeText(options.offerConfig.description),
                        options.offerConfig.includes ? `Includes: ${options.offerConfig.includes.map(escapeText).join(", ")}` : "",
                    ].filter(Boolean).join(" "),
                    "eligibleCustomerType": "http://schema.org/NewCustomer",
                    "availability": "https://schema.org/InStock",
                    "url": pageUrl,
                    ...(options.offerConfig.disclaimer ? { "termsOfService": escapeText(options.offerConfig.disclaimer) } : {})
                }
            ]
        };
    }

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.benchmarkmissoula.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeText(options.name),
                "item": pageUrl
            }
        ]
    };

    const nodes: any[] = [websiteNode(), businessNode(), service, breadcrumbs];

    if (options.faqs && options.faqs.length > 0) {
        nodes.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": escapeText(faq.question),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": escapeText(faq.answer)
                }
            }))
        });
    }

    return buildUnifiedGraph(nodes);
}

// ---------------------------------------------------------------------------
// CITY SERVICE PAGE — unified graph: WebSite + AutoRepair + Service + Breadcrumbs + FAQ
// ---------------------------------------------------------------------------

export function getCityServiceSchema(options: CityServiceSchemaOptions): { "@context": string; "@graph": any[] } {
    const cityEntity = getNormalizedCityEntity(options.citySlug);
    const pageUrl = `https://www.benchmarkmissoula.com/services/${options.slug}/${options.citySlug}`;

    const service: any = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": escapeText(`${options.serviceName} in ${options.cityName}, ${options.cityState}`),
        "description": escapeText(options.serviceDescription),
        "serviceType": escapeText(options.serviceName),
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": {
            "@type": "City",
            "name": cityEntity.name.split(",")[0],
            "sameAs": cityEntity.sameAs
        },
        "image": "https://www.benchmarkmissoula.com/diagnostic_hero_bg_v2.png",
        "url": pageUrl
    };

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.benchmarkmissoula.com/services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeText(options.serviceName),
                "item": `https://www.benchmarkmissoula.com/services/${options.slug}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": escapeText(options.cityName),
                "item": pageUrl
            }
        ]
    };

    const nodes: any[] = [websiteNode(), businessNode(), service, breadcrumbs];

    if (options.faqs && options.faqs.length > 0) {
        nodes.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": escapeText(faq.question),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": escapeText(faq.answer)
                }
            }))
        });
    }

    return buildUnifiedGraph(nodes);
}

// ---------------------------------------------------------------------------
// SERVICE AREAS HUB — unified graph: WebSite + AutoRepair + Breadcrumbs + FAQ
// ---------------------------------------------------------------------------

export function getServiceAreasHubSchema(faqs: { q: string; a: string }[]): { "@context": string; "@graph": any[] } {
    const pageUrl = "https://www.benchmarkmissoula.com/service-areas";

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": pageUrl
            }
        ]
    };

    const faqPage = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": escapeText(faq.q),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": escapeText(faq.a)
            }
        }))
    };

    return buildUnifiedGraph([websiteNode(), businessNode(), breadcrumbs, faqPage]);
}

// ---------------------------------------------------------------------------
// SERVICE AREA DETAIL — unified graph: WebSite + AutoRepair + Service + Breadcrumbs + FAQ
// ---------------------------------------------------------------------------

export function getServiceAreaDetailSchema(options: ServiceAreaDetailSchemaOptions): { "@context": string; "@graph": any[] } {
    const cityEntity = getNormalizedCityEntity(options.citySlug);
    const pageUrl = `https://www.benchmarkmissoula.com/service-areas/${options.citySlug}`;

    const service = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": escapeText(`Auto Repair for ${cityEntity.name} Drivers`),
        "serviceType": "Auto repair and diagnostic services",
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": {
            "@type": "City",
            "name": cityEntity.name.split(",")[0],
            "sameAs": cityEntity.sameAs
        },
        "url": pageUrl
    };

    const breadcrumbs = {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://www.benchmarkmissoula.com/service-areas"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": escapeText(options.cityName),
                "item": pageUrl
            }
        ]
    };

    const nodes: any[] = [websiteNode(), businessNode(), service, breadcrumbs];

    if (options.faqs && options.faqs.length > 0) {
        nodes.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": escapeText(faq.question),
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": escapeText(faq.answer)
                }
            }))
        });
    }

    return buildUnifiedGraph(nodes);
}
