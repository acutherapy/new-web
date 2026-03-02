"use client";

import Link from "@/components/LocalLink";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-zinc-50 border-t border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand & Bio */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-serif font-bold text-navy dark:text-gold">
                            {t.footer.brand.title} <span className="font-sans text-xs tracking-widest text-gold uppercase">{t.footer.brand.subtitle}</span>
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                            {t.footer.brand.description}
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/acutherapyclinic" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="https://www.instagram.com/acutherapyclinic/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="https://www.youtube.com/@queenAffirmation" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-gold">
                                <Youtube className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 font-serif">
                            {t.footer.quickLinks.title}
                        </h4>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li>
                                <Link href="/conditions/workers-comp" className="hover:text-gold">
                                    {t.footer.quickLinks.workInjury}
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions/auto-injury" className="hover:text-gold">
                                    {t.footer.quickLinks.autoInjury}
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions/ptsd-veterans" className="hover:text-gold">
                                    {t.footer.quickLinks.ptsdVeterans}
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions/back-neck-pain" className="hover:text-gold">
                                    {t.footer.quickLinks.backNeck}
                                </Link>
                            </li>
                            <li>
                                <Link href="/conditions/stress-anxiety" className="hover:text-gold">
                                    {t.footer.quickLinks.stressAnxiety}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 font-serif">
                            {t.footer.services.title}
                        </h4>
                        <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <li>
                                <Link href="/services/acupuncture" className="hover:text-gold">
                                    {t.footer.services.acupuncture}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/medical-massage" className="hover:text-gold">
                                    {t.footer.services.massage}
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/cupping" className="hover:text-gold">
                                    {t.footer.services.cupping}
                                </Link>
                            </li>
                            <li>
                                <Link href="/insurance-payment" className="hover:text-gold">
                                    {t.footer.services.insurance}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4 font-serif">
                            {t.nav.locations}
                        </h4>
                        <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                            <div>
                                <Link href="/locations/honolulu" className="font-medium hover:text-teal-600 dark:hover:text-teal-400 block mb-1">
                                    {t.pages.locations.honolulu.name}
                                </Link>
                                <div className="text-xs space-y-0.5">
                                    <p>{t.pages.locations.honolulu.address}</p>
                                    <a href={`tel:${t.pages.locations.honolulu.phone.replace(/\D/g, '')}`} className="hover:text-teal-600 dark:hover:text-teal-400 block transition-colors">
                                        {t.pages.locations.honolulu.phone}
                                    </a>
                                </div>
                            </div>

                            <div>
                                <Link href="/locations/aiea" className="font-medium hover:text-teal-600 dark:hover:text-teal-400 block mb-1">
                                    {t.pages.locations.aiea.name}
                                </Link>
                                <div className="text-xs space-y-0.5">
                                    <p>{t.pages.locations.aiea.address}</p>
                                    <a href={`tel:${t.pages.locations.aiea.phone.replace(/\D/g, '')}`} className="hover:text-teal-600 dark:hover:text-teal-400 block transition-colors">
                                        {t.pages.locations.aiea.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2">
                                <a href="mailto:services@acutherapy.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                                    services@acutherapy.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
                    <p>© {new Date().getFullYear()} AcuTherapy. {t.footer.legal.rights}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                            {t.footer.legal.privacy}
                        </Link>
                        <Link href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                            {t.footer.legal.terms}
                        </Link>
                        <Link href="/website-map" className="hover:text-zinc-900 dark:hover:text-zinc-100">
                            {t.footer.legal.sitemap}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
