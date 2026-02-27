"use client";

import Link from "next/link";
import { ArrowRight, Activity, Brain, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ConditionCards() {
    const { t } = useLanguage();

    const conditions = [
        {
            title: t.sections.conditions.items.backNeck.title,
            description: t.sections.conditions.items.backNeck.description,
            image: "/images/sage_back_pain.png", // New model image
            href: "/conditions/back-neck-pain",
        },
        {
            title: t.sections.conditions.items.stressAnxiety.title,
            description: t.sections.conditions.items.stressAnxiety.description,
            image: "/images/sage_zen.png", // New zen stones image
            href: "/conditions/stress-anxiety",
        },
        {
            title: t.sections.conditions.items.ptsdTrauma.title,
            description: t.sections.conditions.items.ptsdTrauma.description,
            image: "/images/sage_dog_tags.png", // New dog tags image
            href: "/conditions/ptsd-veterans",
        },
    ];

    return (
        <section className="py-24 bg-white dark:bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-[#2c3e50] dark:text-teal-50 sm:text-4xl">
                        {t.sections.conditions.title} (DEBUG: NEW IMAGES)
                    </h2>
                    <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                        {t.sections.conditions.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {conditions.map((condition) => (
                        <div
                            key={condition.title}
                            className="flex flex-col rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm transition-all hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 overflow-hidden group"
                        >
                            <div className="h-56 w-full overflow-hidden relative">
                                <img
                                    src={condition.image}
                                    alt={condition.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-8 flex flex-col flex-auto">
                                <h3 className="mb-3 text-xl font-bold text-[#2c3e50] dark:text-zinc-50">
                                    {condition.title}
                                </h3>
                                <p className="mb-6 flex-auto text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {condition.description}
                                </p>
                                <Link
                                    href={condition.href}
                                    className="flex items-center gap-2 text-sm font-semibold text-[#5F7161] hover:text-[#4A584C] dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
                                >
                                    {t.sections.conditions.learnMore} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/conditions" className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:underline">
                        {t.sections.conditions.viewAll} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
