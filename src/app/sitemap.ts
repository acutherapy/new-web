import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://acutherapy-web.vercel.app';
    const languages = ['en', 'zh', 'ja', 'ko', 'es'];

    const routes = [
        { path: '', priority: 1, changeFrequency: 'monthly' as const },
        { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/services', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/services/acupuncture', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/services/medical-massage', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/services/cupping', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions/back-neck-pain', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions/stress-anxiety', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions/ptsd-veterans', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions/auto-injury', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/conditions/workers-comp', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/who-we-help', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/insurance-payment', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/locations/honolulu', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/locations/aiea', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/success-stories', priority: 0.7, changeFrequency: 'monthly' as const },
        { path: '/book', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
        { path: '/blog', priority: 0.6, changeFrequency: 'weekly' as const },
        { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
        { path: '/website-map', priority: 0.5, changeFrequency: 'monthly' as const },
        // Landing Pages
        { path: '/landing/new-patient-special', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/landing/injury-recovery', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/landing/injury-recovery/cn', priority: 0.9, changeFrequency: 'monthly' as const },
        { path: '/landing/spring-promo', priority: 1.0, changeFrequency: 'monthly' as const },
        { path: '/landing/spring-promo/cn', priority: 1.0, changeFrequency: 'monthly' as const },
    ];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Global Root redirects to /en, but let's list it anyway.
    sitemapEntries.push({
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
    });

    languages.forEach((lang) => {
        routes.forEach((route) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route.path}`,
                lastModified: new Date(),
                changeFrequency: route.changeFrequency,
                priority: route.priority,
            });
        });
    });

    return sitemapEntries;
}
