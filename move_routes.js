const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, 'src', 'app');
const langDir = path.join(appDir, '[lang]');

if (!fs.existsSync(langDir)) {
    fs.mkdirSync(langDir);
}

const entries = fs.readdirSync(appDir);

const exclude = ['api', 'sitemap.ts', 'robots.ts', 'favicon.ico', 'icon.png', 'apple-icon.png', '[lang]', 'globals.css'];

for (const entry of entries) {
    if (exclude.includes(entry)) continue;

    const src = path.join(appDir, entry);
    const dest = path.join(langDir, entry);

    fs.renameSync(src, dest);
    console.log(`Moved ${entry} to [lang]/`);
}
