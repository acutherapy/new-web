"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useLanguage();

    const languages = [
        { code: "EN", label: "English" },
        { code: "JA", label: "日本語" },
        { code: "ZH", label: "中文" }
    ];

    const handleSelect = (code: string) => {
        setLang(code as any);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-gold dark:text-zinc-400 dark:hover:text-gold px-2 py-1 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                title="Switch Language"
            >
                <Globe className="h-4 w-4" />
                <span>{lang}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-900 dark:ring-zinc-700 z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleSelect(language.code)}
                            className={`block w-full px-4 py-2 text-left text-sm ${lang === language.code
                                    ? "bg-zinc-100 text-gold dark:bg-zinc-800"
                                    : "text-zinc-700 hover:bg-zinc-50 dark:text-zinc-300 dark:hover:bg-zinc-800"
                                }`}
                        >
                            {language.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
