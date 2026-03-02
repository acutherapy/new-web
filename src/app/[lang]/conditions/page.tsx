"use client";

import Link from "@/components/LocalLink";
import { ArrowRight, Activity, Brain, HeartPulse } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConditionsIndexPage() {
    const { t } = useLanguage();

    const conditions = [
        {
            title: t.pages.conditionsPage.items.backNeck.title,
            description: t.pages.conditionsPage.items.backNeck.desc,
            href: "/conditions/back-neck-pain",
            image: "/images/sage_back_pain.png",
        },
        {
            title: t.pages.conditionsPage.items.stress.title,
            description: t.pages.conditionsPage.items.stress.desc,
            href: "/conditions/stress-anxiety",
            image: "/images/sage_zen.png",
        },
        {
            title: t.pages.conditionsPage.items.ptsd.title,
            description: t.pages.conditionsPage.items.ptsd.desc,
            href: "/conditions/ptsd-veterans",
            image: "/images/sage_dog_tags.png",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.conditionsPage.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    {t.pages.conditionsPage.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {conditions.map((condition) => (
                    <Link
                        key={condition.href}
                        href={condition.href}
                        className="group flex flex-col rounded-2xl bg-zinc-50 transition-all hover:bg-white hover:shadow-xl dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                    >
                        <div className="h-64 w-full overflow-hidden relative">
                            <img
                                src={condition.image}
                                alt={condition.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 flex flex-col flex-auto">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 group-hover:text-[#5F7161] transition-colors">
                                {condition.title}
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-auto">
                                {condition.description}
                            </p>
                            <span className="flex items-center text-[#5F7161] font-semibold group-hover:translate-x-1 transition-transform">
                                {t.pages.servicesPage.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-center bg-zinc-100 dark:bg-zinc-800 rounded-3xl p-12">
                <h3 className="text-2xl font-bold mb-4">{t.pages.conditionsPage.cta.title}</h3>
                <p className="mb-8 text-zinc-600 dark:text-zinc-400">
                    {t.pages.conditionsPage.cta.text}
                </p>
                <Link
                    href="/contact"
                    className="inline-block rounded-md bg-zinc-900 px-6 py-3 text-white font-medium hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
                >
                    {t.pages.conditionsPage.cta.button}
                </Link>
            </div>
        </div>
    );
}
