"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "@/components/LocalLink";
import { MapPin, Phone, Clock, ArrowRight, Car } from "lucide-react";
import Reviews from "@/components/Reviews";

export default function AieaLocationPage() {
    const { t } = useLanguage();
    const info = t.pages.locations.aiea;

    return (
        <div className="bg-white dark:bg-black min-h-screen pt-24 pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold text-teal-900 dark:text-zinc-100 mb-6">
                        {info.name}
                    </h1>
                    <p className="text-xl text-zinc-600 dark:text-zinc-400">
                        {t.pages.about.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Info Column */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                                <MapPin className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                    {t.pages.contact.clinicLocation}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                                    {info.address}
                                </p>
                                <a
                                    href={info.mapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium mt-2"
                                >
                                    View on Google Maps <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                                <Phone className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                    {t.pages.contact.phoneFax}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    Phone: {info.phone}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    Fax: {info.fax}
                                </p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                                <Clock className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                    {t.pages.contact.hours}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
                                    {info.hours}
                                </p>
                            </div>
                        </div>

                        {/* Parking */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-50 dark:bg-teal-900/30 rounded-lg">
                                <Car className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                    Parking
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {info.parking}
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <Link
                                href="/book"
                                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 transition-colors w-full sm:w-auto"
                            >
                                {t.pages.about.visit.book}
                            </Link>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 relative bg-zinc-100 dark:bg-zinc-800">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://maps.google.com/maps?q=98-211%20Pali%20Momi%20St%2C%20Aiea%2C%20HI%2096701&t=m&z=15&output=embed&iwloc=near`}
                        ></iframe>
                    </div>

                </div>
            </div>
            <Reviews category="Aiea" />
        </div>
    );
}
