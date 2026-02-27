
import { Resend } from 'resend';

// Initialize Resend with your API Key
// You should store this in your .env.local file as RESEND_API_KEY
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { firstName, lastName, phone, injuryType, email, injuryDate, offerType } = body;

        // Send the email
        const { data, error } = await resend.emails.send({
            from: 'AcquTherapy Leads <onboarding@resend.dev>', // Use your verified domain in production
            to: ['leyzax@gmail.com'], // The email address to receive leads
            subject: `[${offerType || 'General Lead'}] ${firstName} ${lastName}`,
            html: `
        <h1>New Lead Capture</h1>
        <p><strong>Source:</strong> ${offerType || 'General Website'}</p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Not provided'}</p>
        <p><strong>Injury Type:</strong> ${injuryType || 'N/A'}</p>
        <p><strong>Injury Date:</strong> ${injuryDate || 'Not provided'}</p>
        <hr />
        <p>Please contact this lead immediately.</p>
      `,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
