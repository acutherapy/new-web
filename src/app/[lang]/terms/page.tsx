"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function TermsPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-zinc-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">{t.pages.termsPage.title}</h1>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8">{t.pages.termsPage.lastUpdated}</p>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="whitespace-pre-line text-lg text-zinc-700 dark:text-zinc-300 mb-12 leading-relaxed">
                        {t.pages.termsPage.intro}
                    </p>

                    <div className="space-y-12">
                        {t.pages.termsPage.sections.map((section, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                                    {section.heading}
                                </h2>
                                <p className="whitespace-pre-line text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
