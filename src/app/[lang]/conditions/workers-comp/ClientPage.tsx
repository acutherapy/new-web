"use client";

import Link from "@/components/LocalLink";
import { ArrowLeft } from "lucide-react";
import PersonalizationTracker from "@/components/PersonalizationTracker";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WorkersCompPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <PersonalizationTracker interest="Workers' Comp" />
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.workersCompPage.backLink}
            </Link>

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {t.pages.workersCompPage.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
                    {t.pages.workersCompPage.intro}
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.pages.workersCompPage.insurance.title}</h2>
                <p>
                    {t.pages.workersCompPage.insurance.text}
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">{t.pages.workersCompPage.common.title}</h2>
                <ul className="list-disc pl-6 space-y-2 mb-8">
                    <li>{t.pages.workersCompPage.common.strains}</li>
                    <li>{t.pages.workersCompPage.common.back}</li>
                    <li>{t.pages.workersCompPage.common.carpal}</li>
                    <li>{t.pages.workersCompPage.common.slip}</li>
                </ul>
            </div>


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

            <div className="bg-pale-yellow dark:bg-gold/20 p-8 rounded-2xl text-center mt-12">
                <h3 className="text-2xl font-bold text-navy dark:text-white mb-4">
                    {t.pages.workersCompPage.cta.title}
                </h3>
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-6 py-3 text-white font-medium hover:bg-yellow-600 transition-colors"
                >
                    {t.pages.workersCompPage.cta.button}
                </Link>
            </div>
        </div>
    );
}
