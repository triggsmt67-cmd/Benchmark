import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
    title: "Terms of Service | Benchmark Automotive Service",
    description: "Terms and conditions for automotive repair and maintenance services at Benchmark Automotive Service in Missoula, MT.",
};

export default function TermsPage() {
    return (
        <article className="flex flex-col min-h-[100dvh]">
            {/* HER0 */}
            <section className="bg-navy-950 text-white py-20 md:py-24 border-b border-navy-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <Reveal>
                        <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Terms of Service
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
                                By accessing our website or engaging our services, you agree to the following terms and conditions. Please read them carefully.
                            </p>

                            <h2>1. Service Authorizations</h2>
                            <p>
                                By scheduling service with {siteConfig.businessName}, you authorize our technicians to perform the specific diagnostics or repairs requested. We will provide an estimate before beginning any major work, and we will not exceed the authorized amount without your additional consent.
                            </p>

                            <h2>2. Parts and Labor Warranty</h2>
                            <p>
                                We stand behind our work. Unless otherwise specified in writing on your repair order, most repairs performed at {siteConfig.businessName} are backed by a limited 12-Month / 12,000-Mile warranty (whichever comes first). 
                            </p>
                            <ul>
                                <li>The warranty covers defects in materials and workmanship.</li>
                                <li>It does not cover normal wear and tear, abuse, or repairs necessitated by subsequent accidents or modifications.</li>
                                <li>Commercial use vehicles may have different warranty terms.</li>
                            </ul>

                            <h2>3. Payment Terms</h2>
                            <p>
                                Payment in full is required at the time the vehicle is picked up. We accept major credit cards, debit cards, and cash. Vehicles not picked up within three (3) business days of service completion may be subject to storage fees.
                            </p>

                            <h2>4. Vehicle Storage and Liability</h2>
                            <p>
                                While we take every precaution to secure vehicles left in our care, {siteConfig.businessName} is not responsible for loss or damage to vehicles or articles left in vehicles in case of fire, theft, or any other cause beyond our control. After-hours drop-off is provided as a convenience; the vehicle remains the owner&apos;s responsibility until the shop opens and the vehicle is formally checked in.
                            </p>

                            <h2>5. Diagnostic Fees</h2>
                            <p>
                                Complex electrical and mechanical diagnostics require specialized equipment and expertise. A diagnostic fee may apply to any vehicle that requires testing to identify the cause of a failure. If you choose to proceed with the recommended repair, the diagnostic fee may be applied toward the total repair cost at the shop&apos;s discretion.
                            </p>

                            <h2>6. Content Accuracy</h2>
                            <p>
                                The information provided on this website is for educational and informational purposes only. While we strive for accuracy, automotive technology changes rapidly. We recommend a physical inspection by a professional before making repair decisions based on online content.
                            </p>

                            <h2>7. Governing Law</h2>
                            <p>
                                These terms are governed by the laws of the State of Montana. Any disputes arising from our services will be handled in the jurisdiction of Missoula County.
                            </p>

                            <h2>8. Contact</h2>
                            <p>
                                For questions regarding these terms, please contact us at {siteConfig.phone.display} or visit our shop during business hours.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>
        </article>
    );
}
