import { MetadataRoute } from 'next';
import { generateSitemapUrls } from '@/lib/linking';

export default function sitemap(): MetadataRoute.Sitemap {
    const urls = generateSitemapUrls();

    return urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://www.premiumauto.local/' ? 1 : 0.8,
    }));
}
