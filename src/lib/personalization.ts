"use client";

type Interest = "General" | "Back Pain" | "Stress" | "Auto Injury";

const STORAGE_KEY = "acutherapy_interest";

export const saveInterest = (interest: Interest) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, interest);
    }
};

export const getInterest = (): Interest => {
    if (typeof window !== "undefined") {
        return (localStorage.getItem(STORAGE_KEY) as Interest) || "General";
    }
    return "General";
};
