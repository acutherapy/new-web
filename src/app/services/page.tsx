"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.pages.servicesPage.items.acupuncture.title,
            description: t.pages.servicesPage.items.acupuncture.desc,
            href: "/services/acupuncture",
            image: "/images/clinic_detail_needles.png"
        },
        {
            title: t.pages.servicesPage.items.massage.title,
            description: t.pages.servicesPage.items.massage.desc,
            href: "/services/medical-massage",
            image: "/images/sage_massage.png" // Sage massage specific
        },
        {
            title: t.pages.servicesPage.items.cupping.title,
            description: t.pages.servicesPage.items.cupping.desc,
            href: "/services/cupping",
            image: "/images/cupping.png"
        },
        {
            title: t.pages.servicesPage.items.carePlans.title,
            description: t.pages.servicesPage.items.carePlans.desc,
            href: "/services/care-plans",
            image: "/images/herbs.png"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-16">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.about.backHome}
            </Link>

            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.servicesPage.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    {t.pages.servicesPage.subtitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {services.map((service) => (
                    <Link
                        key={service.href}
                        href={service.href}
                        className="group block bg-zinc-50 dark:bg-zinc-900 rounded-2xl overflow-hidden transition-all hover:shadow-lg border border-transparent hover:border-gold/20 dark:hover:border-gold/20"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-gold">
                                {service.title}
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                {service.description}
                            </p>
                            <span className="inline-flex items-center text-sm font-semibold text-gold group-hover:translate-x-1 transition-transform">
                                {t.pages.servicesPage.learnMore} <ArrowRight className="ml-1 h-4 w-4" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
