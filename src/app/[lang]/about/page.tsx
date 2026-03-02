"use client";

import Link from "@/components/LocalLink";
import { ArrowLeft, MapPin, Mail, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-16 max-w-5xl">
            <Link href="/" className="inline-flex items-center text-sm text-zinc-500 hover:text-gold mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" /> {t.pages.about.backHome}
            </Link>

            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                    {t.pages.about.title}
                </h1>
                <p className="text-xl text-zinc-600 dark:text-zinc-300 max-w-3xl mx-auto">
                    {t.pages.about.subtitle}
                </p>
            </div>

            {/* Philosophy Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div>
                    <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                        <img src="/images/clinic-interior.png" alt="AcuTherapy Clinic Interior" className="object-cover w-full h-full" />
                    </div>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
                        {t.pages.about.philosophy.title}
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                        {t.pages.about.philosophy.content1}
                    </p>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        {t.pages.about.philosophy.content2}
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <h2 className="text-3xl font-bold text-center text-zinc-900 dark:text-zinc-50 mb-12">
                {t.pages.about.team.title}
            </h2>
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-8 mb-24 -mx-4 px-4 md:px-0">
                {/* Doctor 4 - Dr. Choon Kia Yeo */}
                <div className="w-[85%] md:w-1/3 flex-shrink-0 px-4 snap-center">
                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-center border border-zinc-100 dark:border-zinc-800">
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <img src="/images/dr-choon-kia-yeo.png" alt="Dr. Choon Kia Yeo" className="w-full h-full object-cover scale-100 object-top" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Dr. Choon Kia Yeo</h3>
                        <p className="text-gold text-sm font-medium mb-3">{t.pages.about.team.choonKia.role}</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {t.pages.about.team.choonKia.bio}
                        </p>
                    </div>
                </div>
                {/* Doctor 1 */}
                <div className="w-[85%] md:w-1/3 flex-shrink-0 px-4 snap-center">
                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-center border border-zinc-100 dark:border-zinc-800">
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <img src="/images/doctor-cai.png" alt="Dr. David Cai" className="w-full h-full object-cover scale-110 object-top" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Dr. David Cai L. Ac., L. M. T.</h3>
                        <p className="text-gold text-sm font-medium mb-3">{t.pages.about.team.jane.role}</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {t.pages.about.team.jane.bio}
                        </p>
                    </div>
                </div>

                {/* Doctor 2 */}
                <div className="w-[85%] md:w-1/3 flex-shrink-0 px-4 snap-center">
                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-center border border-zinc-100 dark:border-zinc-800">
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <img src="/images/doctor-lisa.png" alt="Lisa Long" className="w-full h-full object-cover scale-110 object-top" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Lisa Long,O.M.D., L.M.T.</h3>
                        <p className="text-gold text-sm font-medium mb-3">{t.pages.about.team.john.role}</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {t.pages.about.team.john.bio}
                        </p>
                    </div>
                </div>
                {/* Doctor 3 - Shu-Kai Tsao */}
                <div className="w-[85%] md:w-1/3 flex-shrink-0 px-4 snap-center">
                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-center border border-zinc-100 dark:border-zinc-800">
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <img src="/images/shu-kai-tsao.png" alt="Shu-Kai Tsao" className="w-full h-full object-cover scale-110 object-top" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Shu-Kai Tsao</h3>
                        <p className="text-gold text-sm font-medium mb-3">{t.pages.about.team.shuKai.role}</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {t.pages.about.team.shuKai.bio}
                        </p>
                    </div>
                </div>
                {/* Staff */}
                <div className="w-[85%] md:w-1/3 flex-shrink-0 px-4 snap-center">
                    <div className="h-full bg-zinc-50 dark:bg-zinc-900 rounded-xl p-6 text-center border border-zinc-100 dark:border-zinc-800">
                        <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white dark:border-zinc-800 shadow-md">
                            <img src="/images/staff-anne.png" alt="Anne Alenton" className="w-full h-full object-cover scale-110 object-top" />
                        </div>
                        <h3 className="text-xl font-bold mb-1">Anne Alenton</h3>
                        <p className="text-gold text-sm font-medium mb-3">{t.pages.about.team.sarah.role}</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            {t.pages.about.team.sarah.bio}
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info */}
            <div className="bg-navy text-white rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t.pages.about.visit.title}</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="h-6 w-6 text-gold mt-1" />
                                <div>
                                    <p className="font-semibold">Honolulu Clinic</p>
                                    <p className="text-zinc-300">1650 Liliha St, Suite 208<br />Honolulu, HI 96817</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-gold" />
                                <p>(808) 528-7177</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-gold" />
                                <p>Fax: (808) 212-9459</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-gold" />
                                <a href="mailto:services@acutherapy.com" className="hover:text-gold transition-colors">services@acutherapy.com</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-6">{t.pages.about.visit.hours.title}</h2>
                        <div className="space-y-2">
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span>{t.pages.about.visit.hours.monFri}</span>
                                <span>9:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2">
                                <span>{t.pages.about.visit.hours.sat}</span>
                                <span>9:00 AM - 12:00 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-white/20 pb-2 text-gold">
                                <span>{t.pages.about.visit.hours.sun}</span>
                                <span>Closed</span>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Link
                                href="/book"
                                className="inline-block rounded-md bg-white px-6 py-3 text-navy font-bold hover:bg-pale-yellow transition-colors"
                            >
                                {t.pages.about.visit.book}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
