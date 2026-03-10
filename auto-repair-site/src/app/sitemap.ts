import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/serviceContent';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.benchmarkmissoula.com";

    // Core routes
    const routes = [
        '',
        '/services',
        '/about',
        '/contact',
        '/service-areas',
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
