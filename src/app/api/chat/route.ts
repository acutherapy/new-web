import { NextResponse } from 'next/server';
import OpenAI from 'openai';

// This is where we securely process the API key on the server side
export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages, language = 'English' } = body;

        // Check if API key is configured
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'OpenAI API key not configured' },
                { status: 500 }
            );
        }

        const openai = new OpenAI({
            apiKey: apiKey,
        });

        const systemPrompt = `You are a helpful and knowledgeable AI assistant for **AcuTherapy Clinics**, a premier acupuncture and holistic health center in Hawaii.
        
        **Your Goal:** Provide accurate, helpful, and empathetic assistance to potential and current patients. Encourage them to book an appointment for personalized care.
        
        **Clinic Information:**
        We have two convenient locations:
        1.  **Honolulu (Liliha) Clinic:**
            *   **Address:** 1650 Liliha St, Suite 208, Honolulu, HI 96817
            *   **Phone:** (808) 528-7177
            *   **Parking:** Convenient location right on Liliha Street with easy free parking and access behind the building.
            *   **Hours:** Mon-Fri: 8am - 5pm, Sat: 8am - 12pm.
        
        2.  **Aiea / Pearl City Clinic:**
            *   **Address:** 98-211 Pali Momi St, Suite 604, Aiea, HI 96701
            *   **Phone:** (808) 452-1900
            *   **Parking:** Located in the Pearl Ridge Office Building with easy free parking and access (Pali Momi Medical Center parking).
            *   **Hours:** Mon-Fri: 8am - 5pm, Sat: 8am - 12pm.
        
        **Services:**
        *   Acupuncture (TCM, Japanese style, Trigger Point/Dry Needling)
        *   Medical Massage (Deep Tissue, Myofascial Release, Tuina)
        *   Cupping Therapy
        *   Herbal Medicine
        
        **Specialties:**
        *   **Pain Management:** Back pain, neck pain, sciatica, headaches, migraines.
        *   **Auto Injury (No-Fault):** We handle all insurance paperwork. 100% coverage often available.
        *   **Workers' Compensation:** We are authorized providers for work injuries.
        *   **Veterans (VA):** We are a VA Community Care Provider. Treatment is covered for eligible veterans.
        *   **Stress & Anxiety:** Holistic nervous system regulation.
        
        **Insurance Accepted:**
        *   We accept most major insurances including HMSA, UHA, HMAA, Kaiser (with referral), VA, No-Fault (Auto), and Workers' Comp.
        *   We also offer transparent self-pay rates.
        
        **Key Instructions:**
        *   **Do NOT diagnose medical conditions.** If a user describes symptoms, suggest that acupuncture *may help* but advise them to book a consultation for a proper assessment.
        *   **Tone:** Warm, professional, reassuring.
        *   **Language:** Respond in the language the user speaks to you in (or as specified in the 'language' parameter: ${language}).
        *   **Call to Action:** When appropriate, encourage users to book online at our website or call the clinic directly.
        `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemPrompt
                },
                ...messages
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        return NextResponse.json({
            content: completion.choices[0].message.content
        });

    } catch (error) {
        console.error('Error calling OpenAI:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
