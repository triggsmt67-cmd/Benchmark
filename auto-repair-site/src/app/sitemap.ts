import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/serviceContent';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://benchmarkmissoula.com";

    // Core routes
    const routes = [
        '',
        '/services',
        '/about',
        '/contact'
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic service routes
    const serviceSlugs = await getAllServiceSlugs();
    const serviceRoutes = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...serviceRoutes];
}
