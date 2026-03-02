"use client";

import Link from "@/components/LocalLink";
import { ArrowLeft } from "lucide-react";
import PersonalizationTracker from "@/components/PersonalizationTracker";
import { useLanguage } from "@/contexts/LanguageContext";
import Reviews from "@/components/Reviews";

export default function BackPainPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <PersonalizationTracker interest="Back Pain" />
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.backPainPage.backLink}
            </Link>

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {t.pages.backPainPage.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
                    {t.pages.backPainPage.intro}
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.pages.backPainPage.how.title}</h2>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>{t.pages.backPainPage.how.acu}</li>
                    <li>{t.pages.backPainPage.how.cup}</li>
                    <li>{t.pages.backPainPage.how.electro}</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.pages.backPainPage.common.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                        <h3 className="font-bold">{t.pages.backPainPage.common.sciatica.title}</h3>
                        <p className="text-sm">{t.pages.backPainPage.common.sciatica.desc}</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
                        <h3 className="font-bold">{t.pages.backPainPage.common.whiplash.title}</h3>
                        <p className="text-sm">{t.pages.backPainPage.common.whiplash.desc}</p>
                    </div>
                </div>
            </div>

            <Reviews category="Back Pain" />


            {/* SEO Internal Linking */}
            <div className="mt-12 mb-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                    {t.nav.services || "Recommended Treatments"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/services/acupuncture" className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-zinc-900 group">
                        <h4 className="font-semibold text-lg text-navy dark:text-zinc-100 group-hover:text-gold transition-colors mb-2">
                            {t.footer.services?.acupuncture || "Acupuncture Therapy"} &rarr;
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.pages.servicesPage.items.acupuncture.desc || "Discover how targeted needle therapy promotes rapid healing and structural alignment."}</p>
                    </Link>
                    <Link href="/services/medical-massage" className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-zinc-900 group">
                        <h4 className="font-semibold text-lg text-navy dark:text-zinc-100 group-hover:text-gold transition-colors mb-2">
                            {t.footer.services?.massage || "Medical Massage"} &rarr;
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{t.pages.servicesPage.items.massage.desc || "Release deep tissue tension and improve range of motion effectively."}</p>
                    </Link>
                </div>
            </div>

            <div className="bg-pale-yellow dark:bg-gold/20 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">
                    {t.pages.backPainPage.cta.title}
                </h3>
                <p className="mb-6">{t.pages.backPainPage.cta.text}</p>
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-6 py-3 text-white font-medium hover:bg-yellow-600 transition-colors"
                >
                    {t.pages.backPainPage.cta.button}
                </Link>
            </div>
        </div>
    );
}
