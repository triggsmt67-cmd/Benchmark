import { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Phone, Clock, KeySquare, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";

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
                                                <a href={`mailto:${siteConfig.email}`} className="font-medium text-navy-900 hover:text-copper transition-colors">{siteConfig.email}</a>
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

                                <form className="space-y-6" action="#" method="POST">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Name Line */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-navy-900 block">Name <span className="text-brand-red">*</span></label>
                                            <input type="text" id="name" required className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20" />
                                        </div>

                                        {/* Phone Line */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-navy-900 block">Phone <span className="text-brand-red">*</span></label>
                                            <input type="tel" id="phone" required className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Email Line */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-navy-900 block">Email <span className="text-muted-foreground font-normal">(optional but recommended)</span></label>
                                            <input type="email" id="email" className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20" />
                                        </div>

                                        {/* Vehicle Info */}
                                        <div className="space-y-2">
                                            <label htmlFor="vehicle" className="text-sm font-medium text-navy-900 block">Vehicle Year / Make / Model</label>
                                            <input type="text" id="vehicle" placeholder="e.g. 2018 Ford F-150" className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 placeholder:text-muted/60" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="issue" className="text-sm font-medium text-navy-900 block">Describe the Issue</label>
                                        <textarea id="issue" rows={4} className="flex w-full rounded-sm border border-input bg-surface px-4 py-3 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 resize-y" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="contact_method" className="text-sm font-medium text-navy-900 block">Preferred Contact Method</label>
                                        <select id="contact_method" className="flex h-12 w-full rounded-sm border border-input bg-surface px-4 py-2 text-[15px] outline-none transition-colors hover:border-copper/50 focus:border-copper focus:ring-1 focus:ring-copper/20 appearance-none bg-no-repeat bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2364748b%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[position:right_12px_center]">
                                            <option value="call">Call</option>
                                            <option value="text">Text</option>
                                            <option value="email">Email</option>
                                        </select>
                                    </div>

                                    <div className="pt-4 flex flex-col sm:flex-row gap-8 items-start sm:items-center justify-between">
                                        <Button type="button" size="lg" className="w-full sm:w-auto bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg rounded-sm">
                                            Schedule Service
                                        </Button>

                                        {/* What Happens Next - Compact format matching tone */}
                                        <div className="space-y-3 w-full sm:w-auto p-4 sm:p-0 bg-surface sm:bg-transparent rounded-sm border border-border sm:border-transparent">
                                            <h3 className="font-heading font-semibold text-navy-950 text-sm">What Happens Next</h3>
                                            <ol className="text-sm text-text-secondary space-y-2">
                                                <li className="flex gap-2">
                                                    <span className="text-copper font-medium">1.</span> We review your request.
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-copper font-medium">2.</span> We confirm availability.
                                                </li>
                                                <li className="flex gap-2">
                                                    <span className="text-copper font-medium">3.</span> We discuss next steps.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </form>
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
