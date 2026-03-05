"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

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
                    <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
                        <span className="font-heading text-2xl font-bold tracking-tight text-navy-950">
                            {siteConfig.businessName}
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <Link href="/" className={`transition-colors ${pathname === "/" ? "text-brand-red" : "text-text-secondary hover:text-brand-red"}`}>
                        Home
                    </Link>
                    <Link href="/services" className={`transition-colors ${(pathname === "/services" || pathname.startsWith("/services/")) ? "text-brand-red" : "text-text-secondary hover:text-brand-red"}`}>
                        Services
                    </Link>
                    <Link href="/#about" className="text-text-secondary hover:text-brand-red transition-colors">
                        About
                    </Link>
                    <Link href="/#testimonials" className="text-text-secondary hover:text-brand-red transition-colors">
                        Reviews
                    </Link>
                    <Link href="/contact" className={`transition-colors ${pathname === "/contact" ? "text-brand-red" : "text-text-secondary hover:text-brand-red"}`}>
                        Contact
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:inline-flex bg-brand-red hover:bg-brand-red-hover text-white rounded-md px-6">
                        <Link href="/contact">Schedule Service</Link>
                    </Button>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden flex items-center justify-center p-2 text-navy-950 hover:text-brand-red transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-white border-b border-border shadow-lg overflow-y-auto pb-32">
                    <nav className="flex flex-col py-6 px-6 gap-2 font-medium text-lg">
                        <Link href="/" className={`py-4 border-b border-muted/30 transition-colors ${pathname === "/" ? "text-brand-red font-semibold" : "text-navy-950 hover:text-brand-red"}`} onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <Link href="/services" className={`py-4 border-b border-muted/30 transition-colors ${(pathname === "/services" || pathname.startsWith("/services/")) ? "text-brand-red font-semibold" : "text-navy-950 hover:text-brand-red"}`} onClick={closeMobileMenu}>
                            Services
                        </Link>
                        <Link href="/#about" className="py-4 border-b border-muted/30 text-navy-950 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>
                            About
                        </Link>
                        <Link href="/#testimonials" className="py-4 border-b border-muted/30 text-navy-950 hover:text-brand-red transition-colors" onClick={closeMobileMenu}>
                            Reviews
                        </Link>
                        <Link href="/contact" className={`py-4 mb-4 transition-colors ${pathname === "/contact" ? "text-brand-red font-semibold" : "text-navy-950 hover:text-brand-red"}`} onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        <Button asChild className="w-full bg-brand-red hover:bg-brand-red-hover text-white rounded-md py-6 text-lg" onClick={closeMobileMenu}>
                            <Link href="/contact">Schedule Service</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
