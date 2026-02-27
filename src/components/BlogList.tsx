"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog";

interface BlogListProps {
    allPosts: BlogPost[];
}

export default function BlogList({ allPosts }: BlogListProps) {
    const { lang, t } = useLanguage();

    // Filter posts by current language
    // We assume posts have a 'lang' frontmatter field that matches 'EN', 'ZH', 'JA'
    const filteredPosts = allPosts.filter(post => post.lang === lang);

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.about.backHome}
            </Link>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.blog.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    {t.pages.blog.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <article key={post.slug} className="flex flex-col bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="h-48 w-full overflow-hidden relative bg-zinc-100 dark:bg-zinc-800">
                                {post.image ? (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                ) : (
                                    <div className="h-full w-full flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 text-zinc-400">
                                        <span className="text-4xl font-serif text-zinc-300 dark:text-zinc-700">Aa</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                                    <span className="bg-pale-yellow dark:bg-gold/20 text-navy dark:text-gold px-2 py-1 rounded-full">{post.category}</span>
                                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {post.date}</span>
                                </div>
                                <h2 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-50">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-gold transition-colors">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold text-gold hover:text-yellow-600">
                                    {t.pages.blog.readArticle} <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    ))
                ) : (
                    <div className="col-span-full text-center text-zinc-500 py-12">
                        <p>No posts found for this language.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
