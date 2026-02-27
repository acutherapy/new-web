const fs = require('fs');
const path = require('path');

const baseDir = '/Users/guestaccount/.gemini/antigravity/playground/new web/src/app/conditions';
const conditions = ['auto-injury', 'back-neck-pain', 'ptsd-veterans', 'stress-anxiety', 'workers-comp'];

const internalLinksJSX = `
            {/* SEO Internal Linking */}
            <div className="mt-12 mb-12 border-t border-zinc-200 dark:border-zinc-800 pt-8">
                <h3 className="text-2xl font-bold mb-6 text-zinc-900 dark:text-zinc-50">
                    {t.nav.services || "Recommended Treatments"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/services/acupuncture" className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-zinc-900 group">
                        <h4 className="font-semibold text-lg text-navy dark:text-zinc-100 group-hover:text-gold transition-colors mb-2">
                            {t.footer.services?.acupuncture || "Acupuncture Therapy"} &rarr;
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Discover how targeted needle therapy promotes rapid healing and structural alignment.</p>
                    </Link>
                    <Link href="/services/medical-massage" className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-gold dark:hover:border-gold transition-colors bg-white dark:bg-zinc-900 group">
                        <h4 className="font-semibold text-lg text-navy dark:text-zinc-100 group-hover:text-gold transition-colors mb-2">
                            {t.footer.services?.massage || "Medical Massage"} &rarr;
                        </h4>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">Release deep tissue tension and improve range of motion effectively.</p>
                    </Link>
                </div>
            </div>
`;

for (const condition of conditions) {
    const clientPagePath = path.join(baseDir, condition, 'ClientPage.tsx');
    if (fs.existsSync(clientPagePath)) {
        let content = fs.readFileSync(clientPagePath, 'utf8');

        // Check if already injected
        if (content.includes('SEO Internal Linking')) {
            console.log(`Already added to ${condition}`);
            continue;
        }

        // We want to insert it right before: <div className="bg-pale-yellow
        const targetStr = '<div className="bg-pale-yellow';
        const parts = content.split(targetStr);
        if (parts.length === 2) {
            fs.writeFileSync(clientPagePath, parts[0] + internalLinksJSX + '\n            ' + targetStr + parts[1]);
            console.log(`Added internal links to ${condition}`);
        } else {
            console.log(`Could not find target string in ${condition}`);
        }
    }
}
