"use client";

import Link, { LinkProps } from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import React from "react";

export default function LocalLink({ href, children, ...props }: LinkProps & { children?: React.ReactNode, className?: string, target?: string }) {
    const context = useLanguage();
    const fallbackLang = (context?.language || context?.lang || "en").toLowerCase();
    const langPrefix = `/${fallbackLang}`;

    let finalHref = href;
    if (typeof href === "string" && href.startsWith("/")) {
        // Prevent double prefixing
        if (!href.startsWith("/en/") && !href.startsWith("/zh/") && !href.startsWith("/ja/") &&
            href !== "/en" && href !== "/zh" && href !== "/ja") {
            // Special case for root
            if (href === "/") {
                finalHref = langPrefix;
            } else {
                finalHref = `${langPrefix}${href}`;
            }
        }
    }

    return <Link href={finalHref} {...props}>{children}</Link>;
}
