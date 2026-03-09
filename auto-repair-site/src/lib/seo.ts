import { siteConfig } from "@/lib/siteConfig";

export function generateWebSiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://benchmarkmissoula.com/#website",
        "name": siteConfig.businessName,
        "url": "https://benchmarkmissoula.com",
        "description": "Automotive diagnostics and repair services in Missoula, Montana.",
        "publisher": {
            "@type": "AutoRepair",
            "@id": "https://benchmarkmissoula.com/#business"
        }
    };
}

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://benchmarkmissoula.com/#business",
        "name": siteConfig.businessName,
        "image": "https://benchmarkmissoula.com/images/shop-interior.jpg",
        "url": "https://benchmarkmissoula.com",
        "telephone": "+14063171405", // Normalized to standard E.164
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
            "latitude": 42.3314, // Replace with actual Missoula MT coords if needed later (Missoula is ~46.8, -114.0)
            "longitude": -83.0458
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
