"use client";

import Link from "@/components/LocalLink";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CuppingPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <Link href="/services" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.cuppingPage.backLink}
            </Link>

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {t.pages.cuppingPage.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none">
                <p className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
                    {t.pages.cuppingPage.intro}
                </p>

                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">{t.pages.cuppingPage.benefits.title}</h3>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                            <li>{t.pages.cuppingPage.benefits.pain}</li>
                            <li>{t.pages.cuppingPage.benefits.antiInflam}</li>
                            <li>{t.pages.cuppingPage.benefits.flow}</li>
                            <li>{t.pages.cuppingPage.benefits.calm}</li>
                        </ul>
                    </div>
                    <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl">
                        <h3 className="font-bold text-lg mb-2">{t.pages.cuppingPage.marks.title}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {t.pages.cuppingPage.marks.text}
                        </p>
                    </div>
                </div>
            </div>

            {/* SEO Internal Linking to Conditions */}
            <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                    {t.nav.conditions || "Conditions We Treat"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/conditions/auto-injury" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold">
                            {t.footer.quickLinks?.autoInjury || "Auto Injury / Whiplash"} &rarr;
                        </h4>
                    </Link>
                    <Link href="/conditions/workers-comp" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold">
                            {t.footer.quickLinks?.workInjury || "Workers Comp"} &rarr;
                        </h4>
                    </Link>
                    <Link href="/conditions/back-neck-pain" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold">
                            {t.footer.quickLinks?.backNeck || "Back & Neck Pain"} &rarr;
                        </h4>
                    </Link>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="text-zinc-500 mb-6">{t.pages.cuppingPage.combinedText}</p>
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-6 py-3 text-white font-medium hover:bg-yellow-600 transition-colors"
                >
                    {t.pages.cuppingPage.ctaButton}
                </Link>
            </div>
        </div >
    );
}
