"use client";

import { useEffect } from "react";
import { saveInterest } from "@/lib/personalization";

export default function PersonalizationTracker({ interest }: { interest: string }) {
    useEffect(() => {
        saveInterest(interest as any);
    }, [interest]);

    return null; // Invisible component
}
