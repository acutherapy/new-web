"use client";

import Link from "@/components/LocalLink";
import { ArrowLeft, Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SuccessStoriesPage() {
    const { t } = useLanguage();

    // We explicitly define a minimal type for the review from the translated object
    const testimonials = t.pages.reviews.list.map((review: { categories: string[], text: string, author: string, source: string, rating: number }, idx: number) => ({
        id: idx,
        category: review.categories.join(", "),
        text: review.text,
        author: review.author,
        role: review.source,
        rating: review.rating
    }));

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
                    <div key={story.id} className="bg-white dark:bg-zinc-900 shadow-sm p-8 rounded-2xl border border-zinc-100 dark:border-zinc-800 relative hover:shadow-md transition-shadow">
                        <Quote className="absolute top-8 right-8 h-8 w-8 text-gold-100 dark:text-gold/10" />
                        <div className="flex items-center gap-1 mb-4 text-yellow-400">
                            {[...Array(story.rating || 5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {story.category.split(",").slice(0, 3).map((cat, i) => (
                                <span key={i} className="inline-block outline outline-1 outline-gold/30 rounded-full bg-pale-yellow dark:bg-gold/10 px-3 py-1 text-xs font-semibold text-navy dark:text-gold">
                                    {cat.trim()}
                                </span>
                            ))}
                        </div>
                        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 italic leading-relaxed">
                            "{story.text}"
                        </p>
                        <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-6 mt-auto">
                            <div>
                                <p className="font-bold text-zinc-900 dark:text-zinc-100 text-lg">{story.author}</p>
                                <div className="text-sm text-zinc-500 flex items-center gap-1.5 mt-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                                    {story.role || "Google Review"}
                                </div>
                            </div>
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
