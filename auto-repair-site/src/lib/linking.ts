import { SERVICES, PROBLEMS, GUIDES, LOCATIONS, ServiceContent, ProblemContent, GuideContent } from "./content-schema";

export { SERVICES, PROBLEMS, GUIDES, LOCATIONS };
export type { ServiceContent, ProblemContent, GuideContent };
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

export function getProblemBySlug(slug: string): ProblemContent | undefined {
    return PROBLEMS.find(p => p.slug === slug && p.renderingEnabled);
}

export function getGuideBySlug(slug: string): GuideContent | undefined {
    return GUIDES.find(g => g.slug === slug && g.renderingEnabled);
}

// Cluster Resolution Logic
export function getRelatedProblemsForService(serviceId: string): ProblemContent[] {
    const service = getServiceById(serviceId);
    if (!service) return [];

    return PROBLEMS.filter(p =>
        service.relatedProblems.includes(p.id) && p.renderingEnabled
    );
}

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
    const baseUrl = "https://benchmarkmissoula.com";

    // Core
    urls.push(`${baseUrl}/`);
    urls.push(`${baseUrl}/about`);
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

    // Educational
    PROBLEMS.forEach(problem => {
        if (problem.renderingEnabled) {
            urls.push(`${baseUrl}/problems/${problem.slug}`);
        }
    });

    GUIDES.forEach(guide => {
        if (guide.renderingEnabled) {
            urls.push(`${baseUrl}/guides/${guide.slug}`);
        }
    });

    return urls;
}
