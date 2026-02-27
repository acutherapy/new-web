"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SitemapPage() {
    const { t } = useLanguage();

    const sections = [
        {
            title: t.nav.home,
            links: [
                { name: t.nav.home, href: "/" },
                { name: t.nav.about, href: "/about" },
                { name: t.nav.contact, href: "/contact" },
                { name: t.pages.book.title, href: "/book" },
                { name: t.nav.blog, href: "/blog" },
                { name: t.nav.successStory, href: "/success-stories" },
                { name: t.nav.whoWeHelp, href: "/who-we-help" },
            ]
        },
        {
            title: t.nav.conditions,
            links: [
                { name: t.nav.conditions, href: "/conditions" },
                { name: t.sections.conditions.items.backNeck.title, href: "/conditions/back-neck-pain" },
                { name: t.sections.conditions.items.stressAnxiety.title, href: "/conditions/stress-anxiety" },
                { name: t.sections.conditions.items.ptsdTrauma.title, href: "/conditions/ptsd-veterans" },
                { name: t.sections.patients.auto.title, href: "/conditions/auto-injury" },
                { name: t.pages.workersCompPage.title, href: "/conditions/workers-comp" },
            ]
        },
        {
            title: t.nav.services,
            links: [
                { name: t.nav.services, href: "/services" },
                { name: t.sections.services.acupuncture, href: "/services/acupuncture" },
                { name: t.sections.services.massage, href: "/services/medical-massage" },
                { name: t.sections.services.cupping, href: "/services/cupping" },
                { name: t.sections.services.insurance, href: "/insurance-payment" },
            ]
        },
        {
            title: t.nav.locations,
            links: [
                { name: t.pages.locations.honolulu.name, href: "/locations/honolulu" },
                { name: t.pages.locations.aiea.name, href: "/locations/aiea" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: t.pages.privacyPage.title, href: "/privacy" },
                { name: t.pages.termsPage.title, href: "/terms" },
            ]
        }
    ];

    return (
        <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">{t.pages.sitemapPage.title}</h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">{t.pages.sitemapPage.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {sections.map((section, index) => (
                        <div key={index} className="bg-white dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                                {section.title}
                            </h2>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link
                                            href={link.href}
                                            className="text-zinc-600 dark:text-zinc-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
