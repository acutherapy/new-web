import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "zh", "ja", "ko", "es"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Exclude static files and api routes
    if (
        pathname.startsWith('/_next') ||
        pathname.includes('/images/') ||
        pathname.includes('/videos/') ||
        pathname.includes('/api/') ||
        pathname.includes('.')
    ) {
        return NextResponse.next();
    }

    // Rewrite /landing/injury-recovery/cn -> /zh/landing/injury-recovery/cn just in case 
    // they hit old URLs, wait they already hit it.

    // Actually, we redirect them to the localized URL
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images|videos|.*\\..*).*)'],
};
