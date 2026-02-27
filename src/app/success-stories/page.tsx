"use client";

import Link from "next/link";
import { ArrowLeft, Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SuccessStoriesPage() {
    const { t } = useLanguage();

    const testimonials = [
        {
            id: 1,
            category: t.pages.successStories.testimonials.backPain.category,
            text: t.pages.successStories.testimonials.backPain.text,
            author: "Michael T.",
            role: "Patient since 2023",
        },
        {
            id: 2,
            category: t.pages.successStories.testimonials.anxiety.category,
            text: t.pages.successStories.testimonials.anxiety.text,
            author: "Sarah L.",
            role: "Patient since 2024",
        },
        {
            id: 3,
            category: t.pages.successStories.testimonials.auto.category,
            text: t.pages.successStories.testimonials.auto.text,
            author: "David K.",
            role: "Auto Accident Recovery",
        },
        {
            id: 4,
            category: t.pages.successStories.testimonials.wellness.category,
            text: t.pages.successStories.testimonials.wellness.text,
            author: "Jennifer P.",
            role: "Wellness Member",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.about.backHome}
            </Link>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.successStories.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    {t.pages.successStories.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {testimonials.map((story) => (
                    <div key={story.id} className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 relative">
                        <Quote className="absolute top-8 right-8 h-8 w-8 text-gold-100 dark:text-gold/20" />
                        <div className="flex items-center gap-1 mb-4 text-amber-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                        </div>
                        <span className="inline-block rounded-full bg-pale-yellow dark:bg-gold/20 px-3 py-1 text-xs font-medium text-navy dark:text-gold mb-4">
                            {story.category}
                        </span>
                        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6 italic">
                            "{story.text}"
                        </p>
                        <div>
                            <p className="font-bold text-zinc-900 dark:text-zinc-100">{story.author}</p>
                            <p className="text-sm text-zinc-500">{story.role}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-navy rounded-3xl p-8 md:p-16 text-center text-white">
                <h2 className="text-3xl font-bold mb-6">{t.pages.successStories.cta.title}</h2>
                <p className="text-zinc-200 mb-8 max-w-2xl mx-auto">
                    {t.pages.successStories.cta.subtitle}
                </p>
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-white px-8 py-3 text-navy font-bold hover:bg-pale-yellow transition-colors"
                >
                    {t.pages.successStories.cta.button}
                </Link>
            </div>
        </div>
    );
}
