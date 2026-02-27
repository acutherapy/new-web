const fs = require('fs');
const path = require('path');

const baseDir = '/Users/guestaccount/.gemini/antigravity/playground/new web/src/app/services';
const services = ['acupuncture', 'medical-massage', 'cupping'];

const internalLinksJSX = `
            {/* SEO Internal Linking to Conditions */}
            <div className="mt-12 border-t border-zinc-200 dark:border-zinc-800 pt-8 mb-12">
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                    {t.nav.conditions || "Conditions We Treat"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <Link href="/conditions/auto-injury" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold mb-1">
                            {t.footer.quickLinks?.autoInjury || "Auto Injury / Whiplash"} &rarr;
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Specialized No-Fault insurance treatments.</p>
                    </Link>
                    <Link href="/conditions/workers-comp" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold mb-1">
                            {t.footer.quickLinks?.workInjury || "Workers Comp"} &rarr;
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Return to work faster with natural relief.</p>
                    </Link>
                    <Link href="/conditions/back-neck-pain" className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors block">
                        <h4 className="font-semibold text-gold mb-1">
                            {t.footer.quickLinks?.backNeck || "Back & Neck Pain"} &rarr;
                        </h4>
                        <p className="text-xs text-zinc-600 dark:text-zinc-400">Holistic adjustment for chronic or acute pain.</p>
                    </Link>
                </div>
            </div>
`;

for (const service of services) {
    const clientPagePath = path.join(baseDir, service, 'ClientPage.tsx');
    if (fs.existsSync(clientPagePath)) {
        let content = fs.readFileSync(clientPagePath, 'utf8');

        // Check if already injected
        if (content.includes('SEO Internal Linking to Conditions')) {
            console.log(`Already added to ${service}`);
            continue;
        }

        // We want to insert it right before the Reviews component or the CTA div
        let targetStr = '<Reviews';
        if (!content.includes(targetStr)) {
            targetStr = '<div className="bg-pale-yellow';
        }

        const parts = content.split(targetStr);
        if (parts.length === 2) {
            fs.writeFileSync(clientPagePath, parts[0] + internalLinksJSX + '\n            ' + targetStr + parts[1]);
            console.log(`Added internal links to ${service}`);
        } else {
            console.log(`Could not find target string in ${service}`);
        }
    }
}
