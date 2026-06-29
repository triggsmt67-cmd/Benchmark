import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { getServiceAreaDetailSchema, serializeSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Auto Repair for Lolo, MT Drivers",
    description: "Benchmark Automotive Service helps Lolo drivers with diagnostics, brake repair, electrical issues, inspections, oil changes, and suspension repair from our Missoula shop.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/lolo"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/lolo",
        title: "Auto Repair for Lolo, MT Drivers",
        description: "Benchmark Automotive Service helps Lolo drivers with diagnostics, brake repair, electrical issues, inspections, oil changes, and suspension repair from our Missoula shop.",
    }
};

export default function LoloServiceAreaPage() {
    const faqs = [
        {
            question: "Do you serve drivers from Lolo?",
            answer: "Yes. Benchmark Automotive Service is located in Missoula and helps drivers from Lolo and nearby communities."
        },
        {
            question: "Is it worth driving into Missoula for auto repair?",
            answer: "It depends on the problem. For basic maintenance, convenience matters. But if the issue is hard to diagnose, keeps coming back, or only happens sometimes, a clear answer can save time and money."
        },
        {
            question: "Can I drop my vehicle off after hours?",
            answer: "Yes. After-hours drop-off is available. We will confirm receipt the next business day."
        },
        {
            question: "Do you handle both maintenance and repairs?",
            answer: "Yes. We handle routine maintenance, inspections, diagnostics, brake repair, suspension and steering work, electrical issues, starting and charging problems, heating and A/C concerns, and other common auto repair needs."
        },
        {
            question: "What if I am not sure what is wrong with my vehicle?",
            answer: "That is normal. Tell us what you are noticing, when it happens, and whether it happens during city driving, highway driving, braking, turning, cold starts, or longer trips. We will help you figure out the right next step."
        },
        {
            question: "Where is Benchmark Automotive Service located?",
            answer: "Benchmark Automotive Service is located at 1914 North Ave W in Missoula."
        }
    ];

    const schema = getServiceAreaDetailSchema({
        citySlug: "lolo",
        cityName: "Lolo",
        title: "Auto Repair for Lolo, MT Drivers",
        faqs
    });

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
            />

            {/* Hero Section */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15]">
                                Auto Repair for Drivers in Lolo, MT
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                                Benchmark Automotive Service is in Missoula. We work with a lot of drivers who come in from nearby communities like Lolo because they want the problem figured out before they start spending money on repairs.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                If your vehicle has a warning light, brake noise, starting issue, electrical problem, suspension noise, or something that only shows up on Highway 93, we can help you sort it out.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                We handle maintenance, inspections, diagnostics, and full-service auto repair from our Missoula shop.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
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
                            <p className="text-sm text-white/70">
                                Located at {siteConfig.address.street} in Missoula. After-hours drop-off available.
                            </p>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5 relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-navy-800 shadow-xl bg-navy-900 flex items-center justify-center">
                            <Image
                                src="/images/Inspection Bay.webp"
                                alt="Benchmark Automotive Service auto repair shop in Missoula, MT"
                                fill
                                className="object-cover opacity-80"
                                sizes="(max-w-1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-left">
                                <span className="text-xs font-semibold tracking-wider text-copper uppercase bg-navy-950/70 py-1 px-2.5 rounded-sm inline-block mb-2">
                                    Our Missoula Shop
                                </span>
                                <p className="text-sm text-white/95 font-medium leading-normal">
                                    Clean, professional diagnostics bay at Benchmark Automotive Service.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Navigation */}
            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Lolo" }
                ]}
            />

            {/* Is It Worth Driving Section */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Is It Worth Driving from Lolo to Missoula for Auto Repair?
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    Sometimes the closest shop is the right choice.
                                </p>
                                <p>
                                    But if the problem is hard to pin down, the shortest drive is not always the cheapest answer.
                                </p>
                                <p>
                                    That is where Benchmark fits. We test first. We explain what we find. Then we help you decide what actually needs to happen next.
                                </p>
                                <p>
                                    That matters when your vehicle is part of your daily routine. Work. School. Family schedules. Trips into Missoula. A car problem gets expensive fast when everyone is guessing.
                                </p>
                                <p>
                                    If you are already coming into Missoula, after-hours drop-off can also make the visit easier to work around your day.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Common Vehicle Issues We See from Lolo Drivers */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Common Vehicle Issues We See from Lolo Drivers
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Lolo driving is not complicated, but it does put vehicles through a real mix.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Highway 93. Cold starts. Rough side roads. Regular trips into Missoula. Braking, steering, suspension, and battery issues can show up fast when a vehicle is driven that way every week.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Common concerns include:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                                    {[
                                        "Brake noise, vibration, or pulsation",
                                        "Steering wheel shake at highway speed",
                                        "Uneven tire wear or pulling",
                                        "Suspension clunks or rough handling",
                                        "Check engine lights",
                                        "Battery or starting problems in cold weather",
                                        "Electrical issues that come and go",
                                        "Heating, A/C, or cooling system problems",
                                        "Maintenance before longer drives"
                                    ].map((issue, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-[15px]">
                                            <div className="h-2 w-2 rounded-full bg-copper shrink-0 mt-2" />
                                            <span>{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-text-secondary text-lg leading-relaxed pt-2">
                                    If something feels different on the drive into town, it is usually worth checking before it turns into a bigger repair.
                                </p>
                            </div>

                            {/* Local Issues Image */}
                            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md bg-surface flex items-center justify-center">
                                <Image
                                    src="/images/Brake & Suspension Evaluation.webp"
                                    alt="Technician inspecting brakes at Benchmark Automotive Service in Missoula, MT"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Full-Service Auto Repair for Lolo Drivers */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Full-Service Auto Repair for Lolo Drivers
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                You do not need to know the exact repair before you call. Most people only know what they are noticing. A noise. A shake. A light on the dash. A car that starts fine one day and acts up the next.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                That is enough to start. Benchmark Automotive Service helps Lolo drivers with:
                            </p>
                        </div>
                    </Reveal>

                    <div className="max-w-3xl mx-auto">
                        <Reveal>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                                    { label: "Drivability problems", href: "/services/engine-and-performance" },
                                    { label: "Pre-purchase inspections", href: "/services/pre-purchase-inspection" }
                                ].map((service, idx) => (
                                    <div key={idx} className="flex items-center gap-3 py-2.5 px-4 rounded-sm border border-transparent hover:border-border hover:bg-bg/50 transition-colors">
                                        <div className="h-2 w-2 rounded-full bg-copper" />
                                        <Link href={service.href} className="text-[15px] font-medium text-copper hover:text-brand-red transition-colors">
                                            {service.label}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                            <p className="text-text-secondary text-lg leading-relaxed mt-6">
                                Tell us what the vehicle is doing, when it happens, and how often. We will help you decide the next step.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* When to Call Benchmark */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                When to Call Benchmark
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                Call us if:
                            </p>
                            <ul className="space-y-3.5 pl-2">
                                {[
                                    "Your vehicle shakes, pulls, or vibrates on Highway 93",
                                    "Your brakes feel different or make noise",
                                    "Your check engine light is on",
                                    "Your car struggles to start in cold weather",
                                    "Your steering feels loose, stiff, or uneven",
                                    "The issue comes and goes",
                                    "You want an inspection before a longer trip",
                                    "You are behind on maintenance and want a clear starting point"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-text-secondary text-lg leading-relaxed">
                                        <CheckCircle2 className="h-5 w-5 text-copper shrink-0 mt-1" strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-text-secondary text-lg leading-relaxed pt-4 border-t border-border/60">
                                <p className="font-semibold text-navy-950">You do not need to diagnose it yourself.</p>
                                <p>That is our job.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* What Happens After You Schedule */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    What Happens After You Schedule
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    If you are coming from Lolo, the process should be simple. Here is the basic flow:
                                </p>
                                <ol className="space-y-4 pl-2">
                                    {[
                                        "Call or schedule service online.",
                                        "Tell us what the vehicle is doing.",
                                        "Drop it off during business hours or use after-hours drop-off.",
                                        "We confirm receipt the next business day.",
                                        "We inspect or diagnose the issue.",
                                        "We explain what we found before repairs move forward."
                                    ].map((step, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-text-secondary text-lg leading-relaxed">
                                            <span className="flex items-center justify-center h-7 w-7 rounded-full bg-navy-950 text-white text-sm font-bold shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                                <p className="text-text-secondary text-lg leading-relaxed pt-2">
                                    No mystery. No guessing. No surprise repair path without a conversation first.
                                </p>
                            </div>

                            {/* Scheduling Image */}
                            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md bg-surface flex items-center justify-center">
                                <Image
                                    src="/images/Benchmark Automotive.webp"
                                    alt="After-hours drop-off area at Benchmark Automotive Service in Missoula, MT"
                                    fill
                                    className="object-cover"
                                    sizes="(max-w-1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Why Lolo Drivers Choose Benchmark */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Why Lolo Drivers Choose Benchmark
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    Driving into Missoula only makes sense if the shop gives you better answers.
                                </p>
                                <p>
                                    Benchmark is built around a simple idea: understand the problem before recommending the repair.
                                </p>
                                <p>
                                    That is especially important with electrical issues, warning lights, intermittent problems, drivability concerns, or anything that only happens under certain road conditions.
                                </p>
                                <p>
                                    Parts are expensive. Labor is expensive. Guessing is expensive.
                                </p>
                                <p className="font-medium text-navy-950 text-xl">
                                    Testing first keeps the conversation honest.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Proof / Process Block (Instead of Lolo-specific reviews) */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    A Repair Process Built Around Clear Answers
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                    Before repairs move forward, Benchmark focuses on finding the issue, explaining the findings, and getting approval. That keeps the conversation clear and helps customers understand what needs attention now, what can wait, and what may not be the problem at all.
                                </p>
                            </div>

                            {/* Proof Image Placeholder */}
                            <div className="bg-bg border border-dashed border-border rounded-sm flex flex-col items-center justify-center p-8 text-center min-h-[300px] aspect-video relative overflow-hidden shadow-sm">
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper" />
                                <ShieldCheck className="h-10 w-10 text-copper mb-3 stroke-[1.5]" />
                                <h3 className="font-heading text-lg font-bold text-navy-950 mb-1">
                                    Diagnostics &amp; Inspection Process
                                </h3>
                                <p className="text-sm text-text-secondary max-w-sm">
                                    [Real photo placeholder: A photo of diagnostic equipment, technician working in the bay, vehicle inspection, or shop team.]
                                </p>
                                <span className="text-xs text-copper font-semibold mt-4">
                                    Suggested alt: Technician using diagnostic equipment at Benchmark Automotive Service
                                </span>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Location Section */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Location details */}
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Located in Missoula, Serving Lolo Drivers
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We are located in Missoula and help drivers from Lolo and the surrounding area.
                                </p>
                                
                                <div className="bg-surface border border-border p-8 rounded-sm relative overflow-hidden shadow-sm space-y-6">
                                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-copper" />
                                    <div className="space-y-2">
                                        <h3 className="font-heading text-xl font-bold text-navy-950">
                                            {siteConfig.businessName}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {siteConfig.address.street}<br />
                                            {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                                        </p>
                                        <p className="text-text-secondary text-sm">
                                            Phone: {siteConfig.phone.display}
                                        </p>
                                    </div>
                                    
                                    <div className="border-t border-border pt-4 space-y-2">
                                        <h4 className="font-heading text-base font-bold text-navy-950">Hours</h4>
                                        <ul className="text-sm text-text-secondary space-y-1.5">
                                            <li className="flex justify-between">
                                                <span>Monday – Friday:</span>
                                                <span className="font-medium text-navy-950">8:00 AM – 5:00 PM</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Saturday:</span>
                                                <span className="font-medium text-navy-950">By Appointment</span>
                                            </li>
                                            <li className="flex justify-between">
                                                <span>Sunday:</span>
                                                <span className="font-medium text-brand-red">Closed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                                    <Link
                                        href="/contact"
                                        className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-sm"
                                    >
                                        Schedule Service
                                    </Link>
                                    <a
                                        href={`tel:${siteConfig.phone.link}`}
                                        className="inline-flex justify-center items-center bg-white border border-border text-navy-950 hover:bg-bg px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-xs"
                                    >
                                        Call {siteConfig.phone.display}
                                    </a>
                                </div>
                            </div>

                            {/* Map element */}
                            <div className="w-full h-[350px] md:h-[450px] rounded-sm overflow-hidden border border-border shadow-sm bg-surface">
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

            {/* FAQs for Lolo Drivers */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 text-center tracking-tight">
                                FAQs for Lolo Drivers
                            </h2>
                            <PrecisionDivider className="mx-auto" />
                        </div>
                    </Reveal>

                    <div className="max-w-3xl mx-auto space-y-6 mb-16">
                        {[
                            {
                                q: "Do you serve drivers from Lolo?",
                                a: "Yes. Benchmark Automotive Service is located in Missoula and helps drivers from Lolo and nearby communities."
                            },
                            {
                                q: "Is it worth driving into Missoula for auto repair?",
                                a: "It depends on the problem. For basic maintenance, convenience matters. But if the issue is hard to diagnose, keeps coming back, or only happens sometimes, a clear answer can save time and money."
                            },
                            {
                                q: "Can I drop my vehicle off after hours?",
                                a: "Yes. After-hours drop-off is available. We will confirm receipt the next business day."
                            },
                            {
                                q: "Do you handle both maintenance and repairs?",
                                a: "Yes. We handle routine maintenance, inspections, diagnostics, brake repair, suspension and steering work, electrical issues, starting and charging problems, heating and A/C concerns, and other common auto repair needs."
                            },
                            {
                                q: "What if I am not sure what is wrong with my vehicle?",
                                a: "That is normal. Tell us what you are noticing, when it happens, and whether it happens during city driving, highway driving, braking, turning, cold starts, or longer trips. We will help you figure out the right next step."
                            },
                            {
                                q: "Where is Benchmark Automotive Service located?",
                                a: "Benchmark Automotive Service is located at 1914 North Ave W in Missoula."
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

                    {/* Link back to parent Service Area Hub page */}
                    <Reveal>
                        <div className="text-center pt-8 border-t border-border">
                            <Link href="/service-areas" className="inline-flex items-center text-base font-semibold text-copper hover:text-navy-950 transition-colors">
                                <ArrowRight className="mr-2 h-5 w-5 rotate-180" /> View all service areas
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Schedule Auto Repair Near Lolo (Final CTA Section) */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-navy-950 to-navy-900 border-t-4 border-brand-red">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-surface mb-6">
                            Schedule Auto Repair Near Lolo
                        </h2>
                        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                            If you live in Lolo and need auto repair, diagnostics, maintenance, or an inspection, call Benchmark Automotive Service or schedule online.
                        </p>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Tell us what is going on with the vehicle. We will help you figure out whether it needs maintenance, diagnostic testing, an inspection, or repair.
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
                            Located at 1914 North Ave W in Missoula. Serving Missoula, Lolo, and nearby communities.
                        </p>
                    </Reveal>
                </div>
            </section>
        </article>
    );
}
