"use client";

import { useState, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SymptomChecker() {
    const [query, setQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [usageCount, setUsageCount] = useState(0);
    const { t, lang } = useLanguage();

    useEffect(() => {
        const count = parseInt(localStorage.getItem('acu_ai_usage_count') || '0');
        setUsageCount(count);
    }, []);

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
        },
        KO: {
            promptPrefix: "증상 확인: ",
            analysisTitle: "분석 결과:",
            error: "죄송합니다. 현재 AI 서비스를 사용할 수 없습니다. 나중에 다시 시도해 주세요."
        },
        ES: {
            promptPrefix: "Control de síntomas: ",
            analysisTitle: "Resultado del análisis:",
            error: "Lo sentimos, nuestro servicio de IA no está disponible en este momento. Por favor, inténtelo de nuevo más tarde."
        }
    };

    const currentText = uiText[lang] || uiText.EN;

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim() || usageCount >= 5) return;

        setIsSearching(true);
        setResult(null);

        const newCount = usageCount + 1;
        setUsageCount(newCount);
        localStorage.setItem('acu_ai_usage_count', newCount.toString());

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: [
                        { role: "user", content: `${currentText.promptPrefix}${query}. Please provide a brief general analysis from a holistic TCM perspective and suggest it might be related to. Disclaimer: Not medical advice.` }
                    ],
                    language: lang === 'JA' ? 'Japanese' : lang === 'ZH' ? 'Chinese (Simplified)' : lang === 'KO' ? 'Korean' : lang === 'ES' ? 'Spanish' : 'English'
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
                        disabled={usageCount >= 5}
                        placeholder={
                            usageCount >= 5
                                ? (lang === 'ZH' ? "已达到免费次数上限" : lang === 'JA' ? "利用制限に達しました" : lang === 'KO' ? "무료 횟수 초과" : lang === 'ES' ? "Límite alcanzado" : "Limit reached")
                                : t.sections.symptom.placeholder
                        }
                        className="w-full rounded-full border border-teal-200 py-4 pl-6 pr-14 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500 dark:bg-black dark:border-zinc-700 dark:text-white disabled:opacity-50 disabled:bg-zinc-50 dark:disabled:bg-zinc-800"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="absolute right-2 top-2 bottom-2 rounded-full bg-teal-600 p-2 text-white hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:bg-zinc-400"
                        disabled={isSearching || usageCount >= 5}
                        title={t.sections.symptom.button}
                    >
                        {isSearching ? <Loader2 className="h-6 w-6 animate-spin" /> : <Search className="h-6 w-6" />}
                    </button>
                </form>

                {usageCount >= 5 && (
                    <div className="max-w-xl mx-auto bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl shadow-sm border border-amber-200 dark:border-amber-800/30 text-center mb-8 animate-in fade-in slide-in-from-bottom-4">
                        <p className="text-amber-800 dark:text-amber-200 mb-4 font-medium">
                            {lang === 'ZH' ? "您已达到免费AI咨询次数上限 (5/5)。" : lang === 'JA' ? "無料AI相談の制限（5/5）に達しました。" : lang === 'KO' ? "무료 AI 상담 한도(5/5)에 도달했습니다." : lang === 'ES' ? "Ha alcanzado el límite de consultas gratuitas de IA (5/5)." : "You have reached the free AI consultation limit (5/5)."}
                        </p>
                        <a href="/book" className="inline-block bg-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-navy/90 transition-colors">
                            {lang === 'ZH' ? "在线预约" : lang === 'JA' ? "ご予約" : lang === 'KO' ? "예약하기" : lang === 'ES' ? "Reservar Cita" : "Book an Appointment"}
                        </a>
                        <p className="mt-3 text-sm text-amber-700 dark:text-amber-400/80">
                            {lang === 'ZH' ? "或致电 : " : lang === 'JA' ? "またはお電話 : " : lang === 'KO' ? "또는 전화 : " : lang === 'ES' ? "O llame al: " : "Or call: "}
                            <span className="font-bold">(808) 528-7177</span>
                        </p>
                    </div>
                )}

                {result && (
                    <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm border border-teal-100 dark:border-zinc-700 text-left animate-in fade-in slide-in-from-bottom-4 mb-8">
                        <h3 className="font-semibold text-teal-900 dark:text-teal-400 mb-2">{currentText.analysisTitle}</h3>
                        <p className="text-zinc-700 dark:text-zinc-300 whitespace-pre-wrap">{result}</p>
                    </div>
                )}
            </div>
        </section>
    );
}
