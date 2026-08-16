import { SERVICES, GUIDES, LOCATIONS, ServiceContent, GuideContent } from "./content-schema";

export { SERVICES, GUIDES, LOCATIONS };
export type { ServiceContent, GuideContent };
/**
 * Internal Linking Automation Engine
 * Computes logical topic clusters without hardcoded pathways.
 */

export function getServiceBySlug(slug: string): ServiceContent | undefined {
    return SERVICES.find(s => s.slug === slug && s.renderingEnabled);
}

export function getServiceById(id: string): ServiceContent | undefined {
    return SERVICES.find(s => s.id === id && s.renderingEnabled);
}


export function getGuideBySlug(slug: string): GuideContent | undefined {
    return GUIDES.find(g => g.slug === slug && g.renderingEnabled);
}

// Cluster Resolution Logic

export function getGuidesForService(serviceId: string): GuideContent[] {
    return GUIDES.filter(g =>
        g.parentServiceId === serviceId && g.renderingEnabled
    );
}

export function getServiceAvailability(serviceId: string) {
    const service = getServiceById(serviceId);
    if (!service) return [];

    return LOCATIONS.filter(l => service.availableLocations.includes(l.slug));
}

export function generateSitemapUrls() {
    const urls: string[] = [];
    const baseUrl = "https://www.benchmarkmissoula.com";

    // Core
    urls.push(`${baseUrl}/`);
    urls.push(`${baseUrl}/contact`);

    // Commercial Base & Locations
    SERVICES.forEach(service => {
        if (!service.renderingEnabled) return;

        // Base Service Page
        urls.push(`${baseUrl}/services/${service.slug}`);

        // Service + City Combinations
        service.availableLocations.forEach(locSlug => {
            urls.push(`${baseUrl}/services/${service.slug}/${locSlug}`);
        });
    });



    GUIDES.forEach(guide => {
        if (guide.renderingEnabled) {
            urls.push(`${baseUrl}/guides/${guide.slug}`);
        }
    });

    return urls;
}
