import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Phone, Clock, KeySquare, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
    title: "Contact",
    description: "Schedule your automotive service or diagnostic appointment with Benchmark Automotive in Missoula.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-grow pt-28 pb-16 md:pt-36 md:pb-24 bg-bg">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="mb-12 md:mb-16">
                            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy-950 mb-4 tracking-tight">
                                Schedule Service or Get in Touch
                            </h1>
                            <p className="text-lg text-text-secondary max-w-2xl">
                                Whether it’s routine maintenance or a complex diagnostic issue, we’re here to help.
                            </p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        {/* Left Column: Contact Info Panel */}
                        <div className="lg:col-span-5 xl:col-span-4">
                            <Reveal delay={0.1}>
                                <div className="bg-surface border border-border shadow-sm rounded-sm relative overflow-hidden">
                                    {/* Copper Hairline */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper" />
                                    <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-white opacity-40" />

                                    <div className="p-8 space-y-8">
                                        {/* Address & Phone */}
                                        <div className="space-y-4">
                                            <h3 className="font-heading text-xl font-bold text-navy-950">{siteConfig.businessName}</h3>

                                            <div className="flex items-start gap-4 text-text-secondary">
                                                <MapPin className="h-5 w-5 text-copper shrink-0 mt-0.5" strokeWidth={1.5} />
                                                <div className="leading-relaxed">
                                                    <p>{siteConfig.address.street}</p>
                                                    <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-4 text-text-secondary">
                                                <Phone className="h-5 w-5 text-copper shrink-0" strokeWidth={1.5} />
                                                <p className="font-medium text-navy-900">{siteConfig.phone.display}</p>
                                            </div>

                                            <div className="flex items-center gap-4 text-text-secondary">
                                                <Mail className="h-5 w-5 text-copper shrink-0" strokeWidth={1.5} />
                                                <a href={`mailto:${siteConfig.email}`} className="font-medium text-copper hover:text-copper-dark transition-colors">{siteConfig.email}</a>
                                            </div>
                                        </div>

                                        {/* Hours */}
                                        <div className="space-y-4 pt-4 border-t border-border">
                                            <div className="flex items-start gap-4">
                                                <Clock className="h-5 w-5 text-copper shrink-0 mt-0.5" strokeWidth={1.5} />
                                                <div className="w-full">
                                                    <h4 className="font-semibold text-navy-950 mb-2">Hours</h4>
                                                    <ul className="space-y-2 text-sm text-text-secondary">
                                                        <li className="flex justify-between">
                                                            <span>Monday – Friday:</span>
                                                            <span className="font-medium text-navy-900">8:00 AM – 5:00 PM</span>
                                                        </li>
                                                        <li className="flex justify-between">
                                                            <span>Saturday:</span>
                                                            <span className="font-medium text-navy-900">By Appointment</span>
                                                        </li>
                                                        <li className="flex justify-between text-brand-red">
                                                            <span>Sunday:</span>
                                                            <span className="font-medium">Closed</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* After Hours */}
                                        <div className="space-y-3 pt-6 border-t border-border">
                                            <div className="flex items-start gap-4">
                                                <KeySquare className="h-5 w-5 text-copper shrink-0 mt-0.5" strokeWidth={1.5} />
                                                <div>
                                                    <h4 className="font-semibold text-navy-950">After Hours Drop-Off Available</h4>
                                                    <p className="text-sm text-text-secondary mt-1">
                                                        We’ll confirm receipt the next business day.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:col-span-7 xl:col-span-8">
                            <Reveal delay={0.2}>
                                <div className="mb-8">
                                    <h2 className="text-xl font-bold text-navy-950 mb-2">Service Request Form</h2>
                                    <p className="text-text-secondary">
                                        Provide a few details and we’ll follow up promptly.
                                    </p>
                                </div>

                                <ContactForm />
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Full Width Map Section */}
                <div className="mt-20 md:mt-32 w-full h-[400px] md:h-[500px] relative font-sans">
                    <Reveal delay={0.1}>
                        <div className="w-full h-full">
                            <iframe
                                src={siteConfig.mapUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-[400px] md:h-[500px]"
                                title={`Map of ${siteConfig.businessName} location`}
                            ></iframe>
                        </div>
                    </Reveal>
                </div>
            </main>
        </div>
    );
}
