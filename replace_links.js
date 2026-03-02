const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(path.join(process.cwd(), 'src'));
let changedFiles = 0;

for (const file of files) {
    // Skip the LocalLink component itself so it doesn't try to import itself
    if (file.includes('LocalLink.tsx')) continue;

    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // Replace next/link import
    if (content.includes('import Link from "next/link"') || content.includes("import Link from 'next/link'")) {
        content = content.replace(/import\s+Link\s+from\s+["']next\/link["']/g, 'import Link from "@/components/LocalLink"');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        changedFiles++;
    }
}

console.log(`Replaced Link imports in ${changedFiles} files.`);
