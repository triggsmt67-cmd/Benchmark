import { MetadataRoute } from 'next';
import { getAllServiceData } from '@/lib/serviceContent';
import { getAllGuideData } from '@/lib/guideContent';
import { PROBLEMS } from '@/lib/content-schema';

function parseLastReviewed(value: unknown): Date | undefined {
    if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value;
    }

    if (typeof value !== 'string') {
        return undefined;
    }

    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.benchmarkmissoula.com";

    // Core routes
    const routes = [
        '',
        '/about',
        '/services',
        '/contact',
        '/service-areas',
        '/guides',
        '/site-map',
        '/service-areas/missoula',
        '/service-areas/lolo',
        '/service-areas/frenchtown',
        '/service-areas/bonner',
        '/service-areas/east-missoula',
        '/service-areas/milltown',
        '/service-areas/orchard-homes',
        '/service-areas/target-range'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
    }));

    // Dynamic service routes (from markdown)
    const services = await getAllServiceData();
    const serviceRoutes = services.map((service) => {
        const lastModified = parseLastReviewed(service.lastReviewed);
        return {
            url: `${baseUrl}/services/${service.slug}`,
            ...(lastModified ? { lastModified } : {}),
        };
    });

    // Dynamic guide routes (from markdown)
    const guides = await getAllGuideData();
    const guideRoutes = guides.map((guide) => {
        const lastModified = parseLastReviewed(guide.lastReviewed);
        return {
            url: `${baseUrl}/guides/${guide.slug}`,
            ...(lastModified ? { lastModified } : {}),
        };
    });

    // Dynamic problem routes (from static array)
    const problemRoutes = PROBLEMS
        .filter(p => p.renderingEnabled)
        .map((p) => ({
            url: `${baseUrl}/problems/${p.slug}`,
        }));

    return [...routes, ...serviceRoutes, ...guideRoutes, ...problemRoutes];
}
