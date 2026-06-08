import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            },
            {
                userAgent: ['GPTBot', 'OAI-SearchBot', 'Google-Extended', 'Anthropic-ai', 'PerplexityBot', 'ClaudeBot', 'Claude-Web'],
                allow: '/',
            },
        ],
        sitemap: 'https://www.benchmarkmissoula.com/sitemap.xml',
    }
}
