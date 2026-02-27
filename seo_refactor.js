const fs = require('fs');
const path = require('path');

const baseDir = '/Users/guestaccount/.gemini/antigravity/playground/new web/src/app';

const pagesToRefactor = {
    'conditions/auto-injury': {
        title: "Auto Injury Recovery & Whiplash Treatment in Honolulu, HI | AcuTherapy Clinics",
        description: "Specialized auto accident injury treatment, no-fault insurance accepted. Expert acupuncture and medical massage for whiplash in Honolulu and Aiea."
    },
    'conditions/workers-comp': {
        title: "Workers' Comp Acupuncture & Injury Rehab in Honolulu | AcuTherapy",
        description: "We accept Workers' Compensation for work-related injuries. Relieve pain and accelerate recovery with our certified acupuncturists in Honolulu and Aiea."
    },
    'conditions/back-neck-pain': {
        title: "Advanced Back & Neck Pain Relief in Honolulu, HI | AcuTherapy Clinics",
        description: "Effective holistic treatments for back pain, neck stiffness, and sciatica. Relieve chronic pain naturally with our expert acupuncture team in Hawaii."
    },
    'conditions/stress-anxiety': {
        title: "Acupuncture for Stress, Anxiety & Insomnia in Honolulu | AcuTherapy",
        description: "Find natural relief from stress, anxiety, and sleep disorders. Experience deep relaxation with our traditional Chinese medicine and acupuncture."
    },
    'conditions/ptsd-veterans': {
        title: "PTSD & Pain Management for Veterans (VA Care) in Honolulu",
        description: "Proudly serving Veterans in Hawaii. Specialized VA-approved acupuncture and massage for PTSD, chronic pain, and stress management at AcuTherapy Clinics."
    },
    'services/acupuncture': {
        title: "Expert Acupuncture Therapy in Honolulu & Aiea, HI | AcuTherapy Clinics",
        description: "Traditional and modern acupuncture treatments for pain relief, injury recovery, and holistic wellness. Book your session in Honolulu or Aiea today."
    },
    'services/medical-massage': {
        title: "Professional Medical Massage in Honolulu, HI | Pain Relief Massage",
        description: "Targeted medical massage therapy to relieve muscle tension, treat injuries, and improve mobility. Serving Honolulu, Pearl City, and Aiea."
    },
    'services/cupping': {
        title: "Cupping Therapy & Traditional Chinese Medicine in Honolulu, HI",
        description: "Experience the healing benefits of Cupping Therapy. Reduce inflammation, promote blood flow, and relieve muscle soreness at AcuTherapy Clinics."
    },
    'locations/honolulu': {
        title: "Honolulu Acupuncture Clinic | Specialists in Pain Relief & Injury",
        description: "Visit AcuTherapy Clinics in Honolulu (Liliha St). Expert acupuncturists specializing in auto injuries, back pain, and holistic wellness."
    },
    'locations/aiea': {
        title: "Aiea / Pearl City Acupuncture Clinic | AcuTherapy Clinics",
        description: "Our Aiea branch offers top-rated acupuncture, massage, and injury recovery services. Conveniently located near Pearl City, HI."
    }
};

for (const [route, meta] of Object.entries(pagesToRefactor)) {
    const pagePath = path.join(baseDir, route, 'page.tsx');
    const clientPath = path.join(baseDir, route, 'ClientPage.tsx');

    if (fs.existsSync(pagePath)) {
        const content = fs.readFileSync(pagePath, 'utf8');
        
        // If already refactored, skip
        if (!content.includes('"use client"') && !content.includes("'use client'")) {
            console.log(`Skipping ${route}, already seems to be server component.`);
            continue;
        }

        // Move to ClientPage.tsx
        fs.writeFileSync(clientPath, content);

        // Generate new metadata page.tsx
        const newPageContent = `import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: ${JSON.stringify(meta.title)},
  description: ${JSON.stringify(meta.description)},
};

export default function Page() {
  return <ClientPage />;
}
`;
        fs.writeFileSync(pagePath, newPageContent);
        console.log(`Refactored ${route}`);
    } else {
        console.error(`File not found: ${pagePath}`);
    }
}
