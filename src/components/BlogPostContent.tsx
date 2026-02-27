"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { BlogPost } from "@/lib/blog";

export default function BlogPostContent({ post }: { post: BlogPost }) {
    const { t } = useLanguage();

    return (
        <article className="container mx-auto px-4 py-16 max-w-3xl">
            <Link href="/blog" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.blog.title}
            </Link>

            <header className="mb-8 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 mb-4">
                    <span className="bg-pale-yellow dark:bg-gold/20 text-navy dark:text-gold px-3 py-1 rounded-full">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 font-serif leading-tight">
                    {post.title}
                </h1>
            </header>

            <div className="prose prose-lg dark:prose-invert mx-auto">
                <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>

            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
                <Link href="/book" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                    {t.pages.book.title}
                </Link>
            </div>
        </article>
    );
}
