import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, reason, preferredLocation, contactMethod, language } = body;

        // Check for API Key
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { error: 'Resend API key not configured' },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);

        // Determine Email Subject based on Language
        let subjectPrefix = '[Website Appointment]';
        if (language === 'ZH') subjectPrefix = '[中文网站预约]';
        else if (language === 'JA') subjectPrefix = '[日本語サイト予約]';

        // 1. Send Notification to Clinic
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'AcuTherapy Website <onboarding@resend.dev>',
            to: ['leyzax@gmail.com'],
            replyTo: 'leyzax@gmail.com',
            subject: `${subjectPrefix} New Patient Request: ${name}`,
            html: `
                <h2>New Appointment Request</h2>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                
                <h3>1. Client Info</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Status:</strong> New Patient</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Preferred Contact:</strong> <span style="color: #0d9488; font-weight: bold;">${contactMethod}</span></li>
                </ul>

                <h3>2. Appointment Details</h3>
                <ul>
                    <li><strong>Location:</strong> ${preferredLocation}</li>
                    <li><strong>Reason/Symptoms:</strong> ${reason}</li>
                </ul>
                
                <br/>
                <p style="color: #666; font-size: 12px;">Sent from AcuTherapy Website</p>
            `,
        });

        if (adminError) {
            console.error('Resend Admin Error:', adminError);
            return NextResponse.json({ error: adminError.message }, { status: 400 });
        }

        // 2. Send Confirmation to User
        if (email) {
            await resend.emails.send({
                from: 'AcuTherapy Clinics <onboarding@resend.dev>',
                to: [email],
                replyTo: 'leyzax@gmail.com',
                subject: `We received your appointment request`,
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h2 style="color: #0d9488;">Appointment Request Received</h2>
                        <p>Dear ${name},</p>
                        <p>Thank you for choosing AcuTherapy Clinics. We have received your request for an appointment at our <strong>${preferredLocation}</strong> location.</p>
                        
                        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="margin: 0 0 10px 0;"><strong>Your Details:</strong></p>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li><strong>Phone:</strong> ${phone}</li>
                                <li><strong>Reason:</strong> ${reason}</li>
                                <li><strong>Preferred Contact:</strong> ${contactMethod}</li>
                            </ul>
                        </div>

                        <p>Our team will review your request and contact you shortly via <strong>${contactMethod}</strong> to schedule your specific time slot.</p>
                        <br/>
                        <p>Warm regards,</p>
                        <p>The AcuTherapy Team</p>
                        <p><a href="https://acutherapy.netlify.app" style="color: #0d9488;">acutherapy.netlify.app</a></p>
                    </div>
                `,
            });
        }

        return NextResponse.json({ success: true, data: adminData });

    } catch (error) {
        console.error('Server Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
