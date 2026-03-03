import { siteConfig } from "@/lib/siteConfig";

export function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "name": siteConfig.businessName,
        "image": "https://www.premiumauto.local/images/shop-interior.jpg",
        "@id": "https://www.premiumauto.local",
        "url": "https://www.premiumauto.local",
        "telephone": siteConfig.phone.schema,
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
            "latitude": 42.3314,
            "longitude": -83.0458
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
            }
        ]
    };
}
