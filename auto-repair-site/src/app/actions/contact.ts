"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export type ContactFormState = {
    success: boolean;
    message?: string;
    error?: string;
};

function escapeHtml(unsafe: string): string {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const nameRaw = formData.get("name") as string;
    const phoneRaw = formData.get("phone") as string;

    if (!nameRaw || !phoneRaw) {
        return { success: false, error: "Name and phone are required." };
    }

    const name = escapeHtml(nameRaw);
    const phone = escapeHtml(phoneRaw);
    const email = escapeHtml(formData.get("email") as string || "");
    const vehicle = escapeHtml(formData.get("vehicle") as string || "");
    const issue = escapeHtml(formData.get("issue") as string || "");
    const contactMethod = escapeHtml(formData.get("contact_method") as string || "");

    const fromAddress = "Benchmark Automotive <notifications@benchmarkmissoula.com>";
    const apiKeyPrefix = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.substring(0, 8) + '...' : 'MISSING';

    console.log(`[Contact Form] Attempting to send email. Sender: ${fromAddress}, API Key Prefix: ${apiKeyPrefix}, NODE_ENV: ${process.env.NODE_ENV}`);

    try {
        const response = await resend.emails.send({
            from: fromAddress,
            to: ["triggsmt67@gmail.com", "driggs@benchmarkautomotiveservice.com"],
            subject: `New Service Request from ${name}`,
            text: `
Name: ${name}
Phone: ${phone}
Email: ${email || "N/A"}
Vehicle: ${vehicle || "N/A"}
Issue: ${issue || "N/A"}
Preferred Contact Method: ${contactMethod}
            `,
            html: `
            <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #333;">
                <table style="width: 100%; max-width: 600px; border-collapse: collapse; border: 1px solid #eaeaea; text-align: left;">
                    <thead>
                        <tr style="background-color: #f9f9f9;">
                            <th style="padding: 12px; border: 1px solid #eaeaea; width: 35%;">Field</th>
                            <th style="padding: 12px; border: 1px solid #eaeaea; width: 65%;">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Source Form</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea; color: #e85d04; font-weight: bold;">Service Request Form</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Customer Name</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Phone</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Email</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">${email || "N/A"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Vehicle</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">${vehicle || "N/A"}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px; border: 1px solid #eaeaea;">Contact Method</td>
                            <td style="padding: 12px; border: 1px solid #eaeaea; text-transform: capitalize;">${contactMethod}</td>
                        </tr>
                    </tbody>
                </table>
    
                <div style="background-color: #f8f9fa; border-radius: 6px; padding: 20px; margin-top: 24px; max-width: 560px;">
                    <div style="font-weight: 700; margin-bottom: 12px; color: #4b5563; font-size: 15px;">Customer Message:</div>
                    <div style="font-style: italic; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">"${issue || "No additional details provided."}"</div>
                </div>
            </div>`
        });

        if (response.error) {
            console.error("[Contact Form] Resend API Error:", JSON.stringify(response.error, null, 2));
            return { success: false, error: "Failed to send request. Please try again." };
        }

        console.log("[Contact Form] Email sent successfully:", response.data?.id);
        return { success: true, message: "Thank you! We have received your request." };
    } catch (error) {
        console.error("[Contact Form] Unknown error caught:", error);
        return { success: false, error: "An unexpected error occurred. Please try again." };
    }
}
