import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { Reveal } from "@/components/motion/Reveal";

export function Footer() {
    return (
        <footer className="bg-navy-950 text-white border-t border-navy-900">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <Reveal direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
                        {/* Brand & NAP */}
                        <div className="space-y-4 md:col-span-1">
                            <h3 className="font-heading text-2xl font-bold text-surface">{siteConfig.businessName}</h3>
                            <p className="text-muted/80 text-sm leading-relaxed">
                                A trusted local shop delivering precise diagnostics, honest recommendations, and repairs built to last.
                            </p>
                            <address className="not-italic space-y-2 pt-4 text-sm text-surface">
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
                                    <a href={`mailto:${siteConfig.email}`} className="hover:text-copper transition-colors">{siteConfig.email}</a>
                                </div>
                            </address>
                            <div className="pt-2">
                                <a 
                                    href="https://maps.app.goo.gl/k1AJiMky4sBqGitA9" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-xs font-semibold uppercase tracking-wider text-copper hover:text-surface transition-colors flex items-center gap-2"
                                >
                                    Read our Reviews
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="space-y-4">
                            <h4 className="font-heading text-lg font-semibold text-surface">Quick Links</h4>
                            <nav className="flex flex-col space-y-2 text-sm text-muted/80">
                                <Link href="/services" className="hover:text-copper transition-colors">Our Services</Link>
                                <Link href="/#about" className="hover:text-copper transition-colors">About Us</Link>
                                <a 
                                    href="https://maps.app.goo.gl/k1AJiMky4sBqGitA9" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-copper transition-colors"
                                >
                                    Customer Reviews
                                </a>
                                <Link href="/contact" className="hover:text-copper transition-colors">Schedule Appointment</Link>
                            </nav>
                        </div>

                        {/* Areas We Serve */}
                        <div className="space-y-4">
                            <h4 className="font-heading text-lg font-semibold text-surface">Areas We Serve</h4>
                            <nav className="flex flex-col space-y-2 text-sm text-muted/80">
                                <Link href="/service-areas/missoula" className="hover:text-copper transition-colors">Missoula</Link>
                                <Link href="/service-areas/lolo" className="hover:text-copper transition-colors">Lolo</Link>
                                <Link href="/service-areas/frenchtown" className="hover:text-copper transition-colors">Frenchtown</Link>
                                <Link href="/service-areas/bonner" className="hover:text-copper transition-colors">Bonner</Link>
                                <Link href="/service-areas/east-missoula" className="hover:text-copper transition-colors">East Missoula</Link>
                                <Link href="/service-areas/milltown" className="hover:text-copper transition-colors">Milltown</Link>
                                <Link href="/service-areas/orchard-homes" className="hover:text-copper transition-colors">Orchard Homes</Link>
                                <Link href="/service-areas/target-range" className="hover:text-copper transition-colors">Target Range</Link>
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
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <p>&copy; {new Date().getFullYear()} {siteConfig.businessName}. All rights reserved.</p>
                        <span className="hidden md:inline">|</span>
                        <p>Powered by <a href="https://truepath406.com" target="_blank" rel="noopener noreferrer" className="hover:text-surface transition-colors font-medium">Truepathdigital</a></p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-surface transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-surface transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
