"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <div className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-teal-900/30 to-black/10" />
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 -z-20 h-full w-full object-cover"
                poster="/images/sage_green_hero.png"
            >
                <source src="/videos/202.mp4" type="video/mp4" />
                {/* Fallback image if video fails to load or is not supported */}
                <img
                    src="/images/sage_green_hero.png"
                    alt="Serene AcuTherapy Clinic"
                    className="absolute inset-0 -z-20 h-full w-full object-cover"
                />
            </video>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 font-serif">
                        {t.hero.headline}
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-zinc-200 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
                        {t.hero.subheadline}
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/book"
                            className="rounded-md bg-[#5F7161] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4A584C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5F7161]"
                        >
                            {t.hero.cta}
                        </Link>
                        <Link href="/services" className="text-sm font-semibold leading-6 text-white flex items-center gap-1 hover:text-teal-200 transition-colors">
                            {t.hero.explore} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
