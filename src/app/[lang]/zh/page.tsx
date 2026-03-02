"use client";

import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Hero from "@/components/Hero";
import SymptomChecker from "@/components/SymptomChecker";
import PatientFocus from "@/components/PatientFocus";
import ConditionCards from "@/components/ConditionCards";
import Reviews from "@/components/Reviews";

export default function ChineseHomePage() {
    const { setLang } = useLanguage();

    useEffect(() => {
        setLang("ZH");
    }, [setLang]);

    return (
        <>
            <Hero />
            <PatientFocus />
            <SymptomChecker />
            <ConditionCards />
            <Reviews />
        </>
    );
}
