
"use client";

import { usePathname } from 'next/navigation';

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    // This layout is ONLY for the landing page.
    // We use CSS to forcefully hide the global navbar and footer that leaks in from the RootLayout.
    // This approach keeps the main site structure untouched as requested.

    return (
        <>
            <style jsx global>{`
                body > nav, 
                body > footer { 
                   display: none !important; 
                }
            `}</style>
            <div className="landing-page-wrapper bg-white min-h-screen relative z-50">
                {children}
            </div>
        </>
    );
}
