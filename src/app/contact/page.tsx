"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-serif font-bold text-navy dark:text-zinc-50 mb-8 text-center">
                {t.pages.contact.title}
            </h1>

            <div className="space-y-24">
                {/* Honolulu Location */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-2xl font-bold text-teal-900 dark:text-zinc-100 mb-6">
                                    {t.pages.locations.honolulu.name}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-teal-600 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.clinicLocation}</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                                                {t.pages.locations.honolulu.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="h-6 w-6 text-teal-600 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.phoneFax}</p>
                                            <p className="text-zinc-600 dark:text-zinc-400">
                                                Ph: {t.pages.locations.honolulu.phone}<br />
                                                Fax: {t.pages.locations.honolulu.fax}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-teal-600 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.email}</p>
                                            <a href="mailto:services@acutherapy.com" className="text-teal-600 hover:underline">
                                                services@acutherapy.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-2xl font-bold text-teal-900 dark:text-zinc-100 mb-6">
                                    {t.pages.contact.hours}
                                </h2>
                                <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                    <p>{t.pages.locations.honolulu.hours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="space-y-8 h-full">
                            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 relative bg-zinc-100 dark:bg-zinc-800">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.388705291708!2d-157.8633856244588!3d21.31952208035118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e75a666e637%3A0x6644f19b5e390!2s1650%20Liliha%20St%20%23208%2C%20Honolulu%2C%20HI%2096817!5e0!3m2!1sen!2sus!4v1707521000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: '100%' }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Aiea Location */}
                <section>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-2xl font-bold text-teal-900 dark:text-zinc-100 mb-6">
                                    {t.pages.locations.aiea.name}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 text-teal-600 mt-1 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.clinicLocation}</p>
                                            <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                                                {t.pages.locations.aiea.address}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Phone className="h-6 w-6 text-teal-600 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.phoneFax}</p>
                                            <p className="text-zinc-600 dark:text-zinc-400">
                                                Ph: {t.pages.locations.aiea.phone}<br />
                                                Fax: {t.pages.locations.aiea.fax}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-teal-600 shrink-0" />
                                        <div>
                                            <p className="font-semibold text-zinc-900 dark:text-zinc-100">{t.pages.contact.email}</p>
                                            <a href="mailto:services@acutherapy.com" className="text-teal-600 hover:underline">
                                                services@acutherapy.com
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                                <h2 className="text-2xl font-bold text-teal-900 dark:text-zinc-100 mb-6">
                                    {t.pages.contact.hours}
                                </h2>
                                <div className="space-y-3 text-zinc-600 dark:text-zinc-400">
                                    <p>{t.pages.locations.aiea.hours}</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="space-y-8 h-full">
                            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 relative bg-zinc-100 dark:bg-zinc-800">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "100%" }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://maps.google.com/maps?q=98-211%20Pali%20Momi%20St%2C%20Aiea%2C%20HI%2096701&t=m&z=15&output=embed&iwloc=near`}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="mt-12 text-center">
                <Link
                    href="/book"
                    className="inline-block rounded-md bg-gold px-8 py-3 text-white font-bold hover:bg-opacity-90 transition-colors"
                >
                    {t.pages.contact.bookOnline}
                </Link>
            </div>
        </div>
    );
}
