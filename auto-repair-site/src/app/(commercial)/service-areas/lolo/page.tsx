import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { ArrowRight } from "lucide-react";
import { getServiceAreaDetailSchema, serializeSchema } from "@/lib/seo";

export const metadata: Metadata = {
    title: "Auto Repair for Lolo Drivers",
    description: "Auto repair, diagnostics and maintenance for Lolo drivers at our Missoula shop. Find our address, drop-off information and how to request an appointment.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/lolo"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/lolo",
        title: "Auto Repair for Lolo Drivers",
        description: "Auto repair, diagnostics and maintenance for Lolo drivers at our Missoula shop. Find our address, drop-off information and how to request an appointment.",
    }
};

export default function LoloServiceAreaPage() {
    const faqs = [
        {
                "question": "Is the shop in Lolo?",
                "answer": "No. Benchmark Automotive Service is in Missoula at 1914 North Ave W. We serve drivers from Lolo and nearby communities."
        },
        {
                "question": "Can I drop off my car after hours?",
                "answer": "Yes. Arrange your visit with the shop and ask for the current drop-off instructions. We'll confirm receipt the next business day."
        },
        {
                "question": "Does the online form book my appointment?",
                "answer": "The form sends an appointment request. The shop will contact you to confirm availability before your visit."
        }
];

    const schema = getServiceAreaDetailSchema({
        citySlug: "lolo",
        cityName: "Lolo",
        title: "Auto Repair for Lolo Drivers",
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
                                Auto Repair for Lolo Drivers
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                                Benchmark Automotive Service is at 1914 North Ave W in Missoula. We serve Lolo drivers who need maintenance, an inspection or help with a car problem they haven&apos;t been able to pin down.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                Call or request an appointment online. Tell us what&apos;s happening with your vehicle, and we&apos;ll contact you to confirm availability.
                            </p>

                            
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
                                <Link
                                    href="/contact"
                                    className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-semibold rounded-sm transition-colors text-lg shadow-sm"
                                >
                                    Request an Appointment
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
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-left">
                                <span className="text-xs font-semibold tracking-wider text-copper uppercase bg-navy-950/70 py-1 px-2.5 rounded-sm inline-block mb-2">
                                    Our Missoula Shop
                                </span>
                                <p className="text-sm text-white/95 font-medium leading-normal">
                                    Inside our Missoula shop.
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

            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Plan your visit to our Missoula shop</h2>
                        <PrecisionDivider />
                        <p>If you&apos;re fitting a repair visit around work or a trip into Missoula, get in touch before bringing the vehicle over. We can talk through the problem and confirm an appointment.</p>
                        <p>After-hours drop-off is available. Ask us for the current instructions when you arrange your visit. We&apos;ll confirm receipt the next business day after an after-hours drop-off.</p>
                        <p>The online form sends an appointment request. Wait for confirmation from the shop before planning your drop-off.</p>
                    </div>
                </Reveal></div>
            </section>
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Tell us what the car is doing</h2>
                        <PrecisionDivider />
                        <p>You don&apos;t need to know which part failed. A description of the problem gives us a place to start.</p>
                        <p>Does the steering wheel shake at highway speed? Maybe the car starts normally most mornings, then won&apos;t start after sitting for a few days. Let us know when it happens and whether the problem comes and goes.</p>
                        <p>If you notice something on the drive between Lolo and Missoula, describe the conditions. Knowing whether you were braking, turning or driving at a steady speed helps us understand what to check.</p>
                        <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-border">
                            <Image src="/images/brake-suspension-evaluation.webp" alt="Brake and suspension inspection" fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
                        </div>
                    </div>
                </Reveal></div>
            </section>
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Repairs, diagnostics and maintenance</h2>
                        <PrecisionDivider />
                        <p>We handle routine service as well as problems that need testing before we can recommend a repair. Choose a service to learn more:</p>
                        <ul className="list-disc pl-6 space-y-3"><li><Link href="/services/engine-and-performance" className="text-copper underline underline-offset-4 hover:text-brand-red">Engine and check engine light diagnostics</Link></li>
<li><Link href="/services/electrical-diagnostics" className="text-copper underline underline-offset-4 hover:text-brand-red">Electrical diagnostics, battery drain and charging problems</Link></li>
<li><Link href="/services/brake-repair" className="text-copper underline underline-offset-4 hover:text-brand-red">Brake repair</Link></li>
<li><Link href="/services/oil-change" className="text-copper underline underline-offset-4 hover:text-brand-red">Oil changes and maintenance</Link></li>
<li><Link href="/services/suspension-steering" className="text-copper underline underline-offset-4 hover:text-brand-red">Suspension and steering repair</Link></li>
<li><Link href="/services/vehicle-inspection" className="text-copper underline underline-offset-4 hover:text-brand-red">Vehicle inspections</Link></li>
<li><Link href="/services/pre-purchase-inspection" className="text-copper underline underline-offset-4 hover:text-brand-red">Pre-purchase inspections</Link></li>
<li><Link href="/services/ac-heating" className="text-copper underline underline-offset-4 hover:text-brand-red">Heating and A/C service</Link></li>
<li><Link href="/services/engine-overheating" className="text-copper underline underline-offset-4 hover:text-brand-red">Engine overheating and cooling system concerns</Link></li></ul>
                        <p>Not sure where to start? Describe the problem when you contact us.</p>
                    </div>
                </Reveal></div>
            </section>
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Understand the findings before deciding on repairs</h2>
                        <PrecisionDivider />
                        <p>We start by inspecting or testing the problem, then explain what we find and discuss the recommended work before repairs move forward.</p>
                        <p>Ask us what the repair addresses and what still needs checking. A problem that comes and goes may take more investigation, especially if it isn&apos;t happening when the car reaches the shop.</p>
                    </div>
                </Reveal></div>
            </section>
            {/* Location Section */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Location details */}
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Address and hours
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Our shop is at 1914 North Ave W in Missoula. Call before bringing your vehicle over so we can confirm your appointment.
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
                                        Request an Appointment
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

            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Questions before your visit</h2>
                        <PrecisionDivider />
                        {faqs.map((faq) => (
                            <div key={faq.question} className="bg-white p-6 rounded-sm border border-border">
                                <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">{faq.question}</h3>
                                <p>{faq.answer}</p>
                            </div>
                        ))}
                        <Link href="/service-areas" className="inline-flex items-center text-copper hover:text-navy-950"><ArrowRight className="mr-2 h-5 w-5 rotate-180" />View all service areas</Link>
                    </div>
                </Reveal></div>
            </section>
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6"><Reveal>
                    <div className="max-w-3xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">Request an appointment</h2>
                        <PrecisionDivider />
                        <p>Call <a href={`tel:${siteConfig.phone.link}`} className="text-copper underline">{siteConfig.phone.display}</a> or send your vehicle details through our contact form. Tell us what service you need or what you&apos;ve noticed, and we&apos;ll follow up to arrange the visit.</p>
                        <Link href="/contact" className="inline-flex justify-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-semibold rounded-sm">Request an Appointment</Link>
                    </div>
                </Reveal></div>
            </section>
        </article>
    );
}
