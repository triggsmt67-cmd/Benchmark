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

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
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

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
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
                "sameAs": city.sameAs[0]
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

export function buildUnifiedGraph(nodes: any[]) {
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

export function getBaseGraph(pageUrl: string, pageName: string) {
    const business = generateLocalBusinessSchema();
    const website = generateWebSiteSchema();
    
    const webpage = {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        "url": pageUrl,
        "name": pageName,
        "isPartOf": {
            "@id": "https://www.benchmarkmissoula.com/#website"
        },
        "about": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        }
    };
    
    return [business, website, webpage];
}

export function getServicesHubSchema(services: { title: string; description: string; slug: string }[]) {
    const pageUrl = "https://www.benchmarkmissoula.com/services";
    const pageName = "Services in Missoula, MT";
    const base = getBaseGraph(pageUrl, pageName);
    
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
                "name": s.title,
                "description": s.description,
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
    
    return buildUnifiedGraph([...base, itemList, breadcrumbs]);
}

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

export function getServiceDetailSchema(options: ServiceSchemaOptions) {
    const pageUrl = `https://www.benchmarkmissoula.com/services/${options.slug}`;
    const pageName = `${options.name} in Missoula, MT`;
    const base = getBaseGraph(pageUrl, pageName);
    
    const service: any = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": options.name,
        "description": options.description,
        "serviceType": options.name,
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Missoula, MT",
                "sameAs": "https://en.wikipedia.org/wiki/Missoula,_Montana"
            },
            {
                "@type": "City",
                "name": "Lolo, MT",
                "sameAs": "https://en.wikipedia.org/wiki/Lolo,_Montana"
            }
        ],
        "image": "https://www.benchmarkmissoula.com/diagnostic_hero_bg_v2.png",
        "url": pageUrl
    };
    
    if (options.offerConfig) {
        const priceValue = options.offerConfig.price.replace(/[^0-9.]/g, "");
        service.hasOfferCatalog = {
            "@type": "OfferCatalog",
            "name": `${options.name} Offers`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "name": options.offerConfig.title,
                    "price": priceValue,
                    "priceCurrency": "USD",
                    "description": [
                        options.offerConfig.description,
                        options.offerConfig.includes ? `Includes: ${options.offerConfig.includes.join(", ")}` : "",
                    ].filter(Boolean).join(" "),
                    "eligibleCustomerType": "http://schema.org/NewCustomer",
                    "availability": "https://schema.org/InStock",
                    "url": pageUrl,
                    ...(options.offerConfig.disclaimer ? { "termsOfService": options.offerConfig.disclaimer } : {})
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
                "name": options.name,
                "item": pageUrl
            }
        ]
    };
    
    const nodes = [...base, service, breadcrumbs];
    
    if (options.faqs && options.faqs.length > 0) {
        const faqPage = {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
        nodes.push(faqPage);
    }
    
    return buildUnifiedGraph(nodes);
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

export function getCityServiceSchema(options: CityServiceSchemaOptions) {
    const cityEntity = getNormalizedCityEntity(options.citySlug);
    const pageUrl = `https://www.benchmarkmissoula.com/services/${options.slug}/${options.citySlug}`;
    const pageName = `${options.serviceName} in ${options.cityName}, ${options.cityState} | ${siteConfig.businessName}`;
    const base = getBaseGraph(pageUrl, pageName);
    
    const service: any = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `${options.serviceName} in ${options.cityName}, ${options.cityState}`,
        "description": options.serviceDescription,
        "serviceType": options.serviceName,
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": {
            "@type": "City",
            "name": cityEntity.name.split(",")[0],
            "sameAs": cityEntity.sameAs[0]
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
                "name": options.serviceName,
                "item": `https://www.benchmarkmissoula.com/services/${options.slug}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": options.cityName,
                "item": pageUrl
            }
        ]
    };
    
    const nodes = [...base, service, breadcrumbs];
    
    if (options.faqs && options.faqs.length > 0) {
        const faqPage = {
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            "mainEntity": options.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };
        nodes.push(faqPage);
    }
    
    return buildUnifiedGraph(nodes);
}

export function getServiceAreasHubSchema(faqs: { q: string; a: string }[]) {
    const pageUrl = "https://www.benchmarkmissoula.com/service-areas";
    const pageName = "Areas We Serve Around Missoula";
    const base = getBaseGraph(pageUrl, pageName);
    
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
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };
    
    return buildUnifiedGraph([...base, breadcrumbs, faqPage]);
}

export interface ServiceAreaDetailSchemaOptions {
    citySlug: string;
    cityName: string;
    title: string;
    faqs: { question: string; answer: string }[];
}

export function getServiceAreaDetailSchema(options: ServiceAreaDetailSchemaOptions) {
    const cityEntity = getNormalizedCityEntity(options.citySlug);
    const pageUrl = `https://www.benchmarkmissoula.com/service-areas/${options.citySlug}`;
    const pageName = options.title;
    const base = getBaseGraph(pageUrl, pageName);
    
    const service = {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        "name": `Auto Repair for ${cityEntity.name} Drivers`,
        "serviceType": "Auto repair and diagnostic services",
        "provider": {
            "@id": "https://www.benchmarkmissoula.com/#business"
        },
        "areaServed": {
            "@type": "City",
            "name": cityEntity.name.split(",")[0],
            "sameAs": cityEntity.sameAs[0]
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
                "name": options.cityName,
                "item": pageUrl
            }
        ]
    };
    
    const faqPage = {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        "mainEntity": options.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
    
    return buildUnifiedGraph([...base, service, breadcrumbs, faqPage]);
}
