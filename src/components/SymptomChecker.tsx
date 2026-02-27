"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SymptomChecker() {
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const { t, lang } = useLanguage();

    const uiText = {
        EN: {
            promptPrefix: "Symptom Check: ",
            analysisTitle: "Analysis Result:",
            error: "Sorry, our AI service is currently unavailable. Please try again later."
        },
        JA: {
            promptPrefix: "症状チェック: ",
            analysisTitle: "分析結果:",
            error: "申し訳ありませんが、AIサービスは現在利用できません。後でもう一度お試しください。"
        },
        ZH: {
            promptPrefix: "症状检查: ",
            analysisTitle: "分析结果:",
            error: "抱歉，由于技术原因无法连接AI服务。请稍后再试。"
        }
    };

    const currentText = uiText[lang] || uiText.EN;

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setIsSearching(true);
        setResult(null);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: "user", content: `${currentText.promptPrefix}${query}. Please provide a brief general analysis from a holistic TCM perspective and suggest it might be related to. Disclaimer: Not medical advice.` }
                    ],
                    language: lang === 'JA' ? 'Japanese' : lang === 'ZH' ? 'Chinese (Simplified)' : 'English'
                }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.error || 'Failed to analyze');

            setResult(data.content);
        } catch (error) {
            console.error("Symptom check error:", error);
            setResult(currentText.error);
        } finally {
            setIsSearching(false);
        }
    };

    return (
        <section className="bg-teal-50 py-16 dark:bg-zinc-900 border-y border-teal-100 dark:border-zinc-800">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-serif font-bold text-teal-900 dark:text-white mb-4">
                    {t.sections.symptom.title}
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                    {t.sections.symptom.subtitle}
                </p>

                <form onSubmit={handleSearch} className="max-w-xl mx-auto relative mb-8">
                    <input
                        type="text"
                        placeholder={t.sections.symptom.placeholder}
                        className="w-full rounded-full border border-teal-200 py-4 pl-6 pr-14 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-black dark:border-zinc-700 dark:text-white"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 bottom-2 rounded-full bg-teal-600 p-2 text-white hover:bg-teal-700 transition-colors"
                        disabled={isSearching}
                        title={t.sections.symptom.button}
                    >
                        {isSearching ? <Loader2 className="h-6 w-6 animate-spin" /> : <Search className="h-6 w-6" />}
                    </button>
                </form>

                {result && (
                    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-teal-100 dark:border-zinc-700 text-left animate-in fade-in slide-in-from-bottom-4">
                        <h3 className="font-semibold text-teal-900 dark:text-teal-400 mb-2">{currentText.analysisTitle}</h3>
                        <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">{result}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
