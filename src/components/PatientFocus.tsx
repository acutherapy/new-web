"use client";

import Link from "next/link";
import { Car, HardHat, Shield, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PatientFocus() {
    const { t } = useLanguage();

    const patientTypes = [
        {
            title: t.sections.patients.auto.title,
            description: t.sections.patients.auto.description,
            image: "/images/sage_auto.png",
            href: "/conditions/auto-injury"
        },
        {
            title: t.sections.patients.work.title,
            description: t.sections.patients.work.description,
            image: "/images/sage_worker_injury.png",
            href: "/insurance-payment"
        },
        {
            title: t.sections.patients.vets.title,
            description: t.sections.patients.vets.description,
            image: "/images/veterans-flag.png",
            href: "/conditions/ptsd-veterans"
        },
        {
            title: t.sections.patients.medicare.title,
            description: t.sections.patients.medicare.description,
            image: "/images/sage_medicare.png",
            href: "/insurance-payment"
        }
    ];

    return (
        <section className="py-16 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-[#2c3e50] dark:text-teal-500 mb-4">
                        {t.sections.patients.title}
                    </h2>
                    <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl mx-auto">
                        {t.sections.patients.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {patientTypes.map((type) => (
                        <div key={type.title} className="bg-white dark:bg-black rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow overflow-hidden group">
                            <div className="h-48 overflow-hidden relative">
                                <img
                                    src={type.image}
                                    alt={type.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#2c3e50] dark:text-zinc-100 mb-2">
                                    {type.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                                    {type.description}
                                </p>
                                <Link href={type.href} className="text-[#5F7161] font-semibold text-sm hover:underline flex items-center">
                                    {t.sections.patients.learnMore}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
