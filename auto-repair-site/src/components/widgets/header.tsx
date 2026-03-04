import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
            {/* Top Banner */}
            <div className="bg-navy-950 text-white py-2 px-4 md:px-6 flex justify-between items-center text-sm font-sans">
                <div className="hidden md:flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-copper" />
                    <span>{siteConfig.inlineAddress}</span>
                </div>
                <div className="flex items-center gap-2 md:gap-4 ml-auto">
                    <a href={`tel:${siteConfig.phone.link}`} className="flex items-center gap-1.5 hover:text-copper transition-colors">
                        <Phone className="h-4 w-4 text-copper" />
                        <span className="font-semibold">{siteConfig.phone.display}</span>
                    </a>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="font-heading text-2xl font-bold tracking-tight text-navy-950">
                            {siteConfig.businessName}
                        </span>
                    </Link>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className="text-text-secondary hover:text-brand-red transition-colors">
                        Home
                    </Link>
                    <Link href="/services" className="text-text-secondary hover:text-brand-red transition-colors">
                        Services
                    </Link>
                    <Link href="/#about" className="text-text-secondary hover:text-brand-red transition-colors">
                        About
                    </Link>
                    <Link href="/#testimonials" className="text-text-secondary hover:text-brand-red transition-colors">
                        Reviews
                    </Link>
                    <Link href="/contact" className="text-text-secondary hover:text-brand-red transition-colors">
                        Contact
                    </Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:inline-flex bg-brand-red hover:bg-brand-red-hover text-white rounded-md px-6">
                        <Link href="/contact">Schedule Service</Link>
                    </Button>
                    {/* Mobile Menu Toggle could be added here */}
                </div>
            </div>
        </header>
    );
}
