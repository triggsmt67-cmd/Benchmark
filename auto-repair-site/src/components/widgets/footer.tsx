import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
    return (
        <footer className="bg-navy-950 text-white border-t border-navy-900">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <Reveal direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
                        {/* Brand & NAP */}
                        <div className="space-y-4">
                            <h3 className="font-heading text-2xl font-bold text-surface">{siteConfig.businessName}</h3>
                            <p className="text-muted/80 text-sm leading-relaxed">
                                A trusted local shop delivering precise diagnostics, honest recommendations, and repairs built to last.
                            </p>
                            <div className="space-y-2 pt-4 text-sm text-surface">
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                                    <span className="whitespace-pre-line">{siteConfig.formattedAddress}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-copper shrink-0" />
                                    <a href={`tel:${siteConfig.phone.link}`} className="hover:text-copper transition-colors">{siteConfig.phone.display}</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-copper shrink-0" />
                                    <a href="mailto:service@benchmarkauto.local" className="hover:text-copper transition-colors">service@benchmarkauto.local</a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="font-heading text-lg font-semibold text-surface">Quick Links</h4>
                            <nav className="flex flex-col space-y-2 text-sm text-muted/80">
                                <Link href="/#services" className="hover:text-copper transition-colors">Our Services</Link>
                                <Link href="/#about" className="hover:text-copper transition-colors">About Us</Link>
                                <Link href="/#testimonials" className="hover:text-copper transition-colors">Customer Reviews</Link>
                                <Link href="/contact" className="hover:text-copper transition-colors">Schedule Appointment</Link>
                            </nav>
                        </div>

                        {/* Business Hours */}
                        <div className="space-y-4">
                            <h4 className="font-heading text-lg font-semibold text-surface">Hours</h4>
                            <div className="space-y-2 text-sm text-muted/80">
                                {siteConfig.formattedBusinessHours.map((hours, index) => (
                                    <div key={index} className={`flex justify-between items-center ${index < siteConfig.formattedBusinessHours.length - 1 ? 'border-b border-navy-900 pb-2' : 'pb-2'}`}>
                                        <span>{hours.label}</span>
                                        <span className={hours.time === 'Closed' ? 'text-brand-red font-medium' : 'text-surface font-medium'}>{hours.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA / Service Area */}
                        <div className="space-y-4">
                            <h4 className="font-heading text-lg font-semibold text-surface">Service Area</h4>
                            <p className="text-sm text-muted/80">
                                Proudly serving {siteConfig.address.city} and surrounding neighborhoods with premium independent automotive repair.
                            </p>
                            <div className="pt-4">
                                <Button asChild className="w-full bg-brand-red hover:bg-brand-red-hover text-white">
                                    <Link href="/contact">Schedule Service</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>

                <div className="mt-12 pt-8 border-t border-navy-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/60">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-surface transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-surface transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
