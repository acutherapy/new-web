"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, Car, ShieldCheck, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InsurancePage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.about.backHome}
            </Link>

            <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                {t.pages.insurance.title}
            </h1>

            <div className="prose dark:prose-invert max-w-none mb-12">
                <p className="text-xl text-zinc-600 dark:text-zinc-300">
                    {t.pages.insurance.subtitle}
                </p>
            </div>

            {/* Insurance Section */}
            <div className="mb-16">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <ShieldCheck className="h-6 w-6 text-gold" /> {t.pages.insurance.accepted}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {["HMSA (PPO & HMO)", "Kaiser Permanente (Referral required)", "UHA (University Health Alliance)", "HMAA", "Medicare (Select plans)", "VA Community Care (Veterans)"].map((plan) => (
                        <div key={plan} className="flex items-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="font-medium">{plan}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-4 text-sm text-zinc-500 italic">
                    {t.pages.insurance.verifyNote}
                </p>
            </div>

            {/* Special Coverage */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="p-6 bg-pale-yellow dark:bg-gold/20 rounded-xl border border-gold/20 dark:border-gold/20">
                    <Car className="h-8 w-8 text-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.pages.insurance.noFault.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        {t.pages.insurance.noFault.desc}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>{t.pages.insurance.noFault.list1}</li>
                        <li>{t.pages.insurance.noFault.list2}</li>
                    </ul>
                </div>

                <div className="p-6 bg-pale-yellow dark:bg-gold/20 rounded-xl border border-gold/20 dark:border-gold/20">
                    <Briefcase className="h-8 w-8 text-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t.pages.insurance.workComp.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                        {t.pages.insurance.workComp.desc}
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                        <li>{t.pages.insurance.workComp.list1}</li>
                        <li>{t.pages.insurance.workComp.list2}</li>
                    </ul>
                </div>
            </div>

            {/* Self-Pay Rates */}
            <div>
                <h2 className="text-2xl font-semibold mb-6">{t.pages.insurance.selfPay.title}</h2>
                <div className="overflow-hidden bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm">
                    <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                        <thead className="bg-zinc-50 dark:bg-zinc-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">{t.pages.insurance.selfPay.service}</th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-zinc-500 uppercase tracking-wider">{t.pages.insurance.selfPay.rate}</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.pages.insurance.selfPay.initial}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-zinc-600 dark:text-zinc-400">$220</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.pages.insurance.selfPay.followUp}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-zinc-600 dark:text-zinc-400">$175</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.pages.insurance.selfPay.massage}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-zinc-600 dark:text-zinc-400">$140</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">{t.pages.insurance.selfPay.cupping}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-zinc-600 dark:text-zinc-400">$75</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-6 py-3 text-white font-medium hover:bg-yellow-600 transition-colors"
                >
                    {t.pages.insurance.checkInsurance}
                </Link>
            </div>
        </div>
    );
}
