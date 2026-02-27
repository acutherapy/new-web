"use client";

import Link from "next/link";
import { Users, Car, Heart, Shield, HardHat, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhoWeHelpPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.whoWeHelp.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    {t.pages.whoWeHelp.subtitle}
                </p>
            </div>

            <div className="space-y-16">
                {/* Veterans */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 rounded-2xl overflow-hidden h-64 shadow-lg">
                        <img src="/images/veterans-flag.png" alt="Veteran Services" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="h-8 w-8 text-gold" />
                            <h2 className="text-3xl font-bold">{t.pages.whoWeHelp.veterans.title}</h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                            {t.pages.whoWeHelp.veterans.desc}
                        </p>
                        <Link href="/conditions/ptsd-veterans" className="text-gold font-bold hover:underline">
                            {t.pages.whoWeHelp.veterans.link} &rarr;
                        </Link>
                    </div>
                </div>

                {/* Auto Accident Victims */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 rounded-2xl overflow-hidden h-64 shadow-lg">
                        <img src="/images/sage_auto.png" alt="Rehabilitation" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Car className="h-8 w-8 text-gold" />
                            <h2 className="text-3xl font-bold">{t.pages.whoWeHelp.auto.title}</h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                            {t.pages.whoWeHelp.auto.desc}
                        </p>
                        <Link href="/conditions/auto-injury" className="text-gold font-bold hover:underline">
                            {t.pages.whoWeHelp.auto.link} &rarr;
                        </Link>
                    </div>
                </div>
                {/* Worker's Compensation */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 rounded-2xl overflow-hidden h-64 shadow-lg">
                        <img src="/images/sage_worker_injury.png" alt="Worker's Compensation" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <HardHat className="h-8 w-8 text-gold" />
                            <h2 className="text-3xl font-bold">{t.pages.whoWeHelp.work.title}</h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                            {t.pages.whoWeHelp.work.desc}
                        </p>
                        <Link href="/conditions/workers-comp" className="text-gold font-bold hover:underline">
                            {t.pages.whoWeHelp.work.link} &rarr;
                        </Link>
                    </div>
                </div>

                {/* Medicare & Self-Pay */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 rounded-2xl overflow-hidden h-64 shadow-lg">
                        <img src="/images/sage_medicare.png" alt="Medicare & Self-Pay" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <CreditCard className="h-8 w-8 text-gold" />
                            <h2 className="text-3xl font-bold">{t.pages.whoWeHelp.medicare.title}</h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                            {t.pages.whoWeHelp.medicare.desc}
                        </p>
                        <Link href="/insurance-payment" className="text-gold font-bold hover:underline">
                            {t.pages.whoWeHelp.medicare.link} &rarr;
                        </Link>
                    </div>
                </div>

                {/* Chronic Pain Sufferers */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 rounded-2xl overflow-hidden h-64 shadow-lg">
                        <img src="/images/clinic_detail_needles.png" alt="Pain Relief" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="h-8 w-8 text-gold" />
                            <h2 className="text-3xl font-bold">{t.pages.whoWeHelp.chronic.title}</h2>
                        </div>
                        <p className="text-lg text-zinc-600 dark:text-zinc-300 mb-6">
                            {t.pages.whoWeHelp.chronic.desc}
                        </p>
                        <Link href="/conditions/back-neck-pain" className="text-gold font-bold hover:underline">
                            {t.pages.whoWeHelp.chronic.link} &rarr;
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mt-24 text-center">
                <h2 className="text-3xl font-bold mb-6">{t.pages.whoWeHelp.cta.title}</h2>
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-8 py-4 text-lg font-bold text-white hover:bg-yellow-600 transition-colors shadow-lg shadow-navy/20"
                >
                    {t.pages.whoWeHelp.cta.button}
                </Link>
            </div>
        </div>
    );
}
