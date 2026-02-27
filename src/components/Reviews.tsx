"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

export default function Reviews({ category }: { category?: string }) {
    const { t } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    const reviews = t.pages.reviews.list;

    const filteredReviews = category
        ? reviews.filter(r => r.categories.includes(category))
        : reviews;

    // Fallback to all reviews if filter returns empty
    const displayReviews = filteredReviews.length > 0 ? filteredReviews : reviews;

    useEffect(() => {
        setActiveIndex(0); // Reset index when category changes
    }, [category]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % displayReviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [displayReviews.length]);

    return (
        <section className="py-20 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        {t.pages.reviews.title}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 fill-current" />
                            ))}
                        </div>
                        <span className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">{t.pages.reviews.ratingLabel}</span>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                        >
                            {displayReviews.map((review, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 text-center relative">
                                        <Quote className="w-12 h-12 text-teal-100 dark:text-teal-900/30 absolute top-4 left-4" />
                                        <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-300 font-serif italic mb-6 relative z-10">
                                            "{review.text}"
                                        </p>
                                        <div className="flex flex-col items-center">
                                            <div className="font-bold text-zinc-900 dark:text-white">{review.author}</div>
                                            <div className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4" />
                                                {review.source}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {displayReviews.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex
                                    ? "bg-teal-600"
                                    : "bg-zinc-300 dark:bg-zinc-700 hover:bg-teal-400"
                                    }`}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
