import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
    title: "Privacy Policy | Benchmark Automotive Service",
    description: "Learn how Benchmark Automotive Service in Missoula, MT handles and protects your personal information.",
};

export default function PrivacyPage() {
    return (
        <article className="flex flex-col min-h-[100dvh]">
            {/* HER0 */}
            <section className="bg-navy-950 text-white py-20 md:py-24 border-b border-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-white/80 max-w-2xl mx-auto">
                            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* CONTENT */}
            <section className="bg-white py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto prose prose-navy prose-lg">
                        <Reveal>
                            <p className="lead">
                                At {siteConfig.businessName}, we respect your privacy and are committed to protecting the personal information you share with us. This policy describes how we collect, use, and safeguard your data.
                            </p>

                            <h2>1. Information We Collect</h2>
                            <p>
                                We collect information that you voluntarily provide to us when you:
                            </p>
                            <ul>
                                <li>Request a service or quote via our website or phone.</li>
                                <li>Schedule an appointment.</li>
                                <li>Communicate with us via email or contact forms.</li>
                                <li>Sign up for newsletters or updates.</li>
                            </ul>
                            <p>
                                This information may include your name, email address, phone number, vehicle information (VIN, make, model, year), and service history.
                            </p>

                            <h2>2. How We Use Your Information</h2>
                            <p>
                                We use the information we collect to:
                            </p>
                            <ul>
                                <li>Provide and fulfill automotive services you request.</li>
                                <li>Communicate with you regarding your vehicle&apos;s status, appointments, and repair recommendations.</li>
                                <li>Send service reminders and maintenance notifications.</li>
                                <li>Improve our service offerings and customer experience.</li>
                                <li>Comply with legal and regulatory requirements.</li>
                            </ul>

                            <h2>3. Information Sharing and Disclosure</h2>
                            <p>
                                We do not sell or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our business (e.g., diagnostic software providers, part suppliers requiring VIN for fitment), provided they agree to keep this information confidential.
                            </p>
                            <p>
                                We may also disclose information if required by law or to protect the rights, property, or safety of {siteConfig.businessName}, our customers, or others.
                            </p>

                            <h2>4. Data Security</h2>
                            <p>
                                We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                            </p>

                            <h2>5. Call and Text Messaging</h2>
                            <p>
                                By providing your phone number, you consent to receive communications from us regarding your automotive service. This may include phone calls or SMS messages related to appointment confirmations, status updates, and repair approvals. Standard message and data rates may apply.
                            </p>

                            <h2>6. Your Rights</h2>
                            <p>
                                You have the right to review, update, or request the deletion of your personal information. If you wish to opt-out of future communications, you can contact us at {siteConfig.email} or call {siteConfig.phone.display}.
                            </p>

                            <h2>7. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
                            </p>

                            <h2>8. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <address className="not-italic bg-muted p-6 rounded-sm border border-border">
                                <strong>{siteConfig.businessName}</strong><br />
                                {siteConfig.address.street}<br />
                                {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                                Phone: {siteConfig.phone.display}<br />
                                Email: {siteConfig.email}
                            </address>
                        </Reveal>
                    </div>
                </div>
            </section>
        </article>
    );
}
