import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Phone, ArrowRight, MapPin } from "lucide-react";
import { getServiceAreasHubSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Areas We Serve Around Missoula",
    description: "Benchmark Automotive Service proudly provides professional automotive repair and diagnostics for drivers throughout Missoula and surrounding communities.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas",
        title: "Areas We Serve Around Missoula",
        description: "Benchmark Automotive Service proudly provides professional automotive repair and diagnostics for drivers throughout Missoula and surrounding communities.",
    }
};

export default function ServiceAreasIndexPage() {
    const faqs = [
        {
            q: "Do you only serve Missoula drivers?",
            a: "No. Benchmark Automotive Service is located in Missoula and serves drivers from nearby communities including Lolo, Frenchtown, Bonner, East Missoula, Clinton, Huson, Wye, and surrounding areas."
        },
        {
            q: "Is it worth driving into Missoula for auto repair?",
            a: "It depends on the problem. For routine maintenance, convenience matters. But for diagnostics, warning lights, brake concerns, electrical issues, suspension noise, or problems that are hard to pin down, a clear diagnosis can save time and money."
        },
        {
            q: "Do you offer after-hours drop-off?",
            a: "Yes. After-hours drop-off is available. We’ll confirm receipt the next business day."
        },
        {
            q: "Can I schedule online?",
            a: "Yes. You can schedule service online or call the shop directly at (406) 317-1405."
        },
        {
            q: "What if I am not sure what service my vehicle needs?",
            a: "That is okay. Tell us what you are noticing, and we’ll help determine the right next step."
        }
    ];

    const schema = getServiceAreasHubSchema(faqs);

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* 1. Hero Section */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up leading-[1.15] max-w-4xl">
                        Auto Repair for Missoula and Nearby Communities
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        Benchmark Automotive Service is located in Missoula and helps drivers from Lolo, Frenchtown, Bonner, East Missoula, Clinton, Huson, Wye, and the surrounding area.
                    </p>
                    <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
                        If you are looking for clear diagnostics, routine maintenance, inspections, or full-service auto repair near Missoula, we can help you figure out the right next step before you spend money on repairs.
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-in-up mb-8 w-full sm:w-auto" style={{ animationDelay: "200ms" }}>
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-sm"
                        >
                            Schedule Service
                        </Link>
                        <a
                            href={`tel:${siteConfig.phone.link}`}
                            className="inline-flex justify-center items-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-950 px-8 py-4 font-semibold rounded-sm transition-all text-lg"
                        >
                            Call {siteConfig.phone.display}
                        </a>
                    </div>
                    <p className="text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: "250ms" }}>
                        Located at {siteConfig.address.street} in Missoula. After-hours drop-off available.
                    </p>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas" }
                ]}
            />

            {/* 2. Why Nearby Drivers Come to Benchmark */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Why Nearby Drivers Come to Benchmark
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    For many drivers outside Missoula, the closest shop is not always the clearest choice.
                                </p>
                                <p>
                                    Benchmark Automotive Service focuses on testing first, explaining what we find, and helping you make a repair decision with confidence. That matters when your vehicle has a warning light, brake concern, electrical issue, starting problem, suspension noise, or a problem that only happens on the highway.
                                </p>
                                <p>
                                    If you rely on your vehicle for work, commuting, family schedules, or regular trips into Missoula, guessing gets expensive fast.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 3. What Nearby Drivers Usually Want (Proof / Process Section) */}
            <section className="py-16 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                What Nearby Drivers Usually Want
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    Most nearby drivers are not looking for a flashy repair shop. They want clear answers before the repair bill starts growing.
                                </p>
                                <p>
                                    Benchmark Automotive Service focuses on inspection, testing, clear findings, and approval before moving forward. Whether you are coming from Lolo, Frenchtown, Bonner, East Missoula, or another nearby community, the goal is the same: understand the problem first, then decide what repair actually makes sense.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 4. Areas We Serve Near Missoula */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mb-12 text-left">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight mb-4">
                                Areas We Serve Near Missoula
                            </h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Benchmark Automotive Service is based in Missoula and serves drivers from nearby communities who want clear answers, practical repair guidance, and full-service auto repair from one shop.
                            </p>
                        </div>
                    </Reveal>

                    {/* Service Area Cards Grid (Real Pages Only) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                        {[
                            {
                                name: "Lolo, MT",
                                copy: "Drivers from Lolo often deal with Highway 93 commuting, winter starts, brake wear, and steering or suspension issues from regular Bitterroot Valley driving.",
                                linkText: "View auto repair near Lolo",
                                url: "/service-areas/lolo"
                            },
                            {
                                name: "Frenchtown, MT",
                                copy: "Frenchtown drivers often rely on I-90, rural roads, towing, and winter driving. We help with diagnostics, maintenance, brakes, inspections, and full-service repairs.",
                                linkText: "View auto repair near Frenchtown",
                                url: "/service-areas/frenchtown"
                            },
                            {
                                name: "Bonner, MT",
                                copy: "For Bonner and Milltown-area drivers, regular trips into Missoula can reveal brake noise, vibration, warning lights, and maintenance needs before they become bigger problems.",
                                linkText: "View auto repair near Bonner",
                                url: "/service-areas/bonner"
                            },
                            {
                                name: "East Missoula, MT",
                                copy: "Benchmark helps East Missoula drivers with diagnostics, brake repair, maintenance, inspections, electrical concerns, and general auto repair from our Missoula shop.",
                                linkText: "View auto repair near East Missoula",
                                url: "/service-areas/east-missoula"
                            }
                        ].map((area, idx) => (
                            <Reveal key={idx} delay={idx * 0.05}>
                                <Card className="group relative h-full flex flex-col justify-between overflow-hidden rounded-sm border bg-surface border-border shadow-sm shadow-navy-900/5 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-md text-left">
                                    {/* Bespoke Copper Top Edge Rule */}
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper/40 group-hover:bg-copper transition-colors duration-200" />
                                    
                                    {/* Subtle Edge Highlight for Materiality */}
                                    <div className="absolute top-[2px] left-0 right-0 h-[1px] bg-white opacity-40" />

                                    <CardHeader className="pt-8 pb-4 px-6 md:px-8">
                                        <CardTitle className="font-heading text-xl font-bold tracking-tight text-navy-950">
                                            {area.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-6 md:px-8 pb-4 flex-grow">
                                        <p className="font-sans text-[15px] leading-relaxed text-text-secondary">
                                            {area.copy}
                                        </p>
                                    </CardContent>
                                    <div className="px-6 md:px-8 pb-8 pt-2">
                                        <Link 
                                            href={area.url} 
                                            className="inline-flex items-center text-sm font-semibold transition-colors text-copper hover:text-navy-950"
                                        >
                                            {area.linkText}
                                            <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </Card>
                            </Reveal>
                        ))}
                    </div>

                    {/* Other Nearby Communities We Serve */}
                    <Reveal>
                        <div className="bg-bg border border-border p-8 rounded-sm max-w-3xl mx-auto shadow-sm text-center">
                            <h3 className="font-heading text-xl font-bold text-navy-950 mb-4">
                                Other Nearby Communities We Serve
                            </h3>
                            <p className="text-text-secondary text-lg leading-relaxed mb-4">
                                We also help drivers from Clinton, Huson, Wye, <Link href="/service-areas/milltown" className="font-medium text-copper hover:underline">Milltown</Link>, <Link href="/service-areas/orchard-homes" className="font-medium text-copper hover:underline">Orchard Homes</Link>, <Link href="/service-areas/target-range" className="font-medium text-copper hover:underline">Target Range</Link>, and surrounding Missoula-area communities.
                            </p>
                            <p className="text-text-secondary text-lg leading-relaxed">
                                If you are not sure whether it makes sense to bring your vehicle to Benchmark, call us and tell us what is going on. We’ll help you figure out the right next step.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 5. Full-Service Auto Repair Near Missoula */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Full-Service Auto Repair Near Missoula
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                Benchmark Automotive Service helps nearby drivers with routine maintenance, inspections, diagnostics, and repairs. Whether you know exactly what your vehicle needs or you are just noticing something feels off, we can help you decide the right next step.
                            </p>
                        </div>
                    </Reveal>

                    <div className="max-w-3xl mx-auto">
                        <Reveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "Check engine light diagnostics", href: "/services/check-engine-light" },
                                    { label: "Advanced diagnostics", href: "/services/advanced-diagnostics" },
                                    { label: "Electrical diagnostics", href: "/services/electrical-diagnostics" },
                                    { label: "Brake repair", href: "/services/brake-repair" },
                                    { label: "Oil changes and maintenance", href: "/services/oil-change" },
                                    { label: "Battery and charging system testing", href: "/services/battery-drain" },
                                    { label: "Suspension and steering repair", href: "/services/suspension-steering" },
                                    { label: "Vehicle inspections", href: "/services/vehicle-inspection" },
                                    { label: "Heating and A/C concerns", href: "/services/ac-heating" },
                                    { label: "Cooling system repair", href: "/services/fluid-services" },
                                    { label: "Drivability and performance issues", href: "/services/engine-and-performance" },
                                    { label: "Pre-purchase inspections", href: "/services/pre-purchase-inspection" }
                                ].map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-3 py-2.5 px-4 rounded-sm border border-transparent hover:border-border hover:bg-surface/50 transition-colors">
                                        <div className="h-2 w-2 rounded-full bg-copper" />
                                        <Link href={service.href} className="text-[15px] font-medium text-copper hover:text-brand-red transition-colors">
                                            {service.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* 6. Coming From Outside Missoula? Here’s How Scheduling Works */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 text-center">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Coming From Outside Missoula? Here’s How Scheduling Works
                            </h2>
                            <PrecisionDivider className="mx-auto" />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    If you are driving in from a nearby community, call ahead or schedule online and tell us what your vehicle is doing.
                                </p>
                                <p>
                                    We’ll help determine whether you need routine maintenance, an inspection, or diagnostic testing. After-hours drop-off is available, and we’ll confirm receipt the next business day.
                                </p>
                                <p>
                                    Our goal is to make the visit as clear and practical as possible, especially if you are planning around work, school, commuting, or family schedules.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full sm:w-auto">
                                <Link
                                    href="/contact"
                                    className="w-full sm:w-auto inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-sm"
                                >
                                    Schedule Service
                                </Link>
                                <a
                                    href={`tel:${siteConfig.phone.link}`}
                                    className="w-full sm:w-auto inline-flex justify-center items-center bg-white border border-border text-navy-950 hover:bg-bg px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-xs"
                                >
                                    Call {siteConfig.phone.display}
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 7. Location Section */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Location Details Card */}
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Located in Missoula
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We are located in Missoula and serve drivers from nearby communities throughout the Missoula area.
                                </p>
                                
                                <div className="bg-surface border border-border p-8 rounded-sm relative overflow-hidden shadow-sm">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper" />
                                    <div className="space-y-4">
                                        <h3 className="font-heading text-xl font-bold text-navy-950">
                                            {siteConfig.businessName}
                                        </h3>
                                        <div className="flex items-start gap-3 text-text-secondary">
                                            <MapPin className="h-5 w-5 text-copper shrink-0 mt-1" strokeWidth={1.5} />
                                            <div className="text-[15px] leading-relaxed">
                                                <p>{siteConfig.address.street}</p>
                                                <p>{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 text-text-secondary">
                                            <Phone className="h-5 w-5 text-copper shrink-0" strokeWidth={1.5} />
                                            <a href={`tel:${siteConfig.phone.link}`} className="text-[15px] font-semibold text-navy-950 hover:text-copper transition-colors">
                                                {siteConfig.phone.display}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Iframe */}
                            <div className="w-full h-[350px] md:h-[400px] rounded-sm overflow-hidden border border-border shadow-sm bg-surface">
                                <iframe
                                    src={siteConfig.mapUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map of ${siteConfig.businessName} location`}
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* 8. FAQs About Our Service Area */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 text-center tracking-tight">
                                FAQs About Our Service Area
                            </h2>
                            <PrecisionDivider className="mx-auto" />
                        </div>
                    </Reveal>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "Do you only serve Missoula drivers?",
                                a: "No. Benchmark Automotive Service is located in Missoula and serves drivers from nearby communities including Lolo, Frenchtown, Bonner, East Missoula, Clinton, Huson, Wye, and surrounding areas."
                            },
                            {
                                q: "Is it worth driving into Missoula for auto repair?",
                                a: "It depends on the problem. For routine maintenance, convenience matters. But for diagnostics, warning lights, brake concerns, electrical issues, suspension noise, or problems that are hard to pin down, a clear diagnosis can save time and money."
                            },
                            {
                                q: "Do you offer after-hours drop-off?",
                                a: "Yes. After-hours drop-off is available. We’ll confirm receipt the next business day."
                            },
                            {
                                q: "Can I schedule online?",
                                a: "Yes. You can schedule service online or call the shop directly at (406) 317-1405."
                            },
                            {
                                q: "What if I am not sure what service my vehicle needs?",
                                a: "That is okay. Tell us what you are noticing, and we’ll help determine the right next step."
                            }
                        ].map((faq, index) => (
                            <Reveal key={index} delay={index * 0.05}>
                                <div className="bg-white p-6 md:p-8 rounded-sm border border-border shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-copper" />
                                    <h3 className="font-heading text-lg md:text-xl font-bold text-navy-900 mb-3 pl-2">
                                        {faq.q}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed pl-2 text-[15px]">
                                        {faq.a}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. Final CTA Section */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-navy-950 to-navy-900 border-t-4 border-brand-red">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-surface mb-6">
                            Need Auto Repair Near Missoula?
                        </h2>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Call Benchmark Automotive Service or schedule online. We’ll help you figure out whether your vehicle needs maintenance, an inspection, diagnostic testing, or repair.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white h-14 px-10 text-lg font-semibold rounded-sm transition-colors shadow-sm"
                            >
                                Schedule Service
                            </Link>

                            <a
                                href={`tel:${siteConfig.phone.link}`}
                                className="w-full sm:w-auto inline-flex justify-center items-center bg-transparent border border-surface text-surface hover:bg-surface hover:text-navy-950 h-14 px-10 text-lg font-semibold transition-colors rounded-sm"
                            >
                                <Phone className="h-5 w-5 mr-2" /> Call {siteConfig.phone.display}
                            </a>
                        </div>
                        
                        <p className="text-xs text-white/60 max-w-xl mx-auto leading-relaxed">
                            Located in Missoula. Serving nearby communities including Lolo, Frenchtown, Bonner, East Missoula, Clinton, Huson, Wye, Milltown, Orchard Homes, Target Range, and surrounding areas.
                        </p>
                    </Reveal>
                </div>
            </section>
        </article>
    );
}
