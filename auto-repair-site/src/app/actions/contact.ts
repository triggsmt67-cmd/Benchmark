"use server";

import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

const resend = new Resend(process.env.RESEND_API_KEY!);

export type ContactFormState = {
    success: boolean;
    message?: string;
    error?: string;
};

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const vehicle = formData.get("vehicle") as string;
    const issue = formData.get("issue") as string;
    const contactMethod = formData.get("contact_method") as string;

    if (!name || !phone) {
        return { success: false, error: "Name and phone are required." };
    }

    try {
        const { error } = await resend.emails.send({
            from: "Benchmark Automotive <onboarding@resend.dev>",
            to: ["triggsmt67@gmail.com"],
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

        if (error) {
            console.error("Resend error:", error);
            return { success: false, error: "Failed to send request. Please try again." };
        }

        return { success: true, message: "Thank you! We have received your request." };
    } catch (error) {
        console.error("Unknown error:", error);
        return { success: false, error: "An unexpected error occurred. Please try again." };
    }
}
