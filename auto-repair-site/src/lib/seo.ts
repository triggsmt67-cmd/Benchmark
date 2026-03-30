import { siteConfig } from "@/lib/siteConfig";

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
        "@type": "ProfessionalService",
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
        "areaServed": [
            {
                "@type": "City",
                "name": "Missoula",
                "sameAs": "https://www.google.com/maps?cid=10852396155502161751" 
            },
            {
                "@type": "City",
                "name": "Lolo",
                "sameAs": "https://en.wikipedia.org/wiki/Lolo,_Montana"
            }
        ],
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
