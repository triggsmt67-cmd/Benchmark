import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { siteConfig } from "@/lib/siteConfig";
import { PrecisionDivider } from "@/components/widgets/precision-divider";
import { Phone, ArrowRight, MapPin, KeySquare, CheckCircle2, Wrench, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Auto Repair Near Frenchtown, MT | Benchmark Automotive Service",
    description: "Benchmark Automotive Service in Missoula serves Frenchtown drivers with precise diagnostics, steering and suspension repair, heating/cooling services, and full mechanical repairs.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/frenchtown"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/frenchtown",
        title: "Auto Repair Near Frenchtown, MT | Benchmark Automotive Service",
        description: "Benchmark Automotive Service in Missoula serves Frenchtown drivers with precise diagnostics, steering and suspension repair, heating/cooling services, and full mechanical repairs.",
    }
};

export default function FrenchtownServiceAreaPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.benchmarkmissoula.com/service-areas/frenchtown#service",
        "name": "Auto Repair for Frenchtown, MT Drivers",
        "serviceType": "Auto repair and diagnostic services",
        "provider": { "@id": "https://www.benchmarkmissoula.com/#business" },
        "areaServed": {
            "@type": "City",
            "name": "Frenchtown, MT"
        },
        "url": "https://www.benchmarkmissoula.com/service-areas/frenchtown"
    };
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.benchmarkmissoula.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Service Areas",
                "item": "https://www.benchmarkmissoula.com/service-areas"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Frenchtown",
                "item": "https://www.benchmarkmissoula.com/service-areas/frenchtown"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you serve drivers from Frenchtown?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Benchmark Automotive Service is located in Missoula and regularly helps commuters and families traveling in from Frenchtown, Huson, and along the I-90 corridor."
                }
            },
            {
                "@type": "Question",
                "name": "Is the drive from Frenchtown to Missoula worth it for auto service?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. While standard maintenance can be done anywhere, complex electrical diagnostics, high-speed steering vibrations, or check engine light troubleshooting are best handled by a shop specializing in testing rather than part-guessing."
                }
            },
            {
                "@type": "Question",
                "name": "Can I drop off my car outside of normal business hours?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. We offer a secure after-hours drop-off system. Leave your vehicle and drop the keys in our secure box; we will confirm receipt the next business morning."
                }
            },
            {
                "@type": "Question",
                "name": "What types of vehicle maintenance and repairs do you offer?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We handle all core auto repair needs, including advanced electrical testing, check engine light scans, brake replacements, oil changes, battery testing, steering/suspension adjustments, and cooling system repairs."
                }
            },
            {
                "@type": "Question",
                "name": "What if my vehicle has an issue but no warning light is on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "That is very common. Mechanical issues like worn wheel bearings, ball joints, or brake noise will not trigger dashboard lights. Tell us the noises or vibrations you experience, and we will perform a physical inspection to isolate the cause."
                }
            },
            {
                "@type": "Question",
                "name": "Where is Benchmark Automotive Service located?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Benchmark Automotive Service is located at 1914 North Ave W in Missoula, which is easily accessible via the Reserve Street exit off I-90."
                }
            }
        ]
    };

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceSchema, breadcrumbSchema, faqSchema]) }}
            />

            {/* Hero Section */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-[1.15]">
                                Auto Repair for Drivers in Frenchtown, MT
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                                Commuting from the Frenchtown valley requires a reliable vehicle. Benchmark Automotive Service in Missoula provides local drivers with definitive diagnostic answers before any repairs are performed.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                Whether you commute daily on Interstate 90, navigate the gravel frontage roads, or head out toward Frenchtown Pond, we keep your engine, brakes, and suspension working safely.
                            </p>
                            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
                                We handle maintenance, mechanical inspections, electrical troubleshooting, and general automotive repair.
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
                                Conveniently located at {siteConfig.address.street} in Missoula. Secure night drop-off box available.
                            </p>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5 relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-navy-800 shadow-xl bg-navy-900 flex items-center justify-center">
                            <Image
                                src="/images/Inspection Bay.webp"
                                alt="Benchmark Automotive Service repair facility serving Frenchtown commuters"
                                fill
                                className="object-cover opacity-80"
                                sizes="(max-w-1024px) 100vw, 40vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 text-left">
                                <span className="text-xs font-semibold tracking-wider text-copper uppercase bg-navy-950/70 py-1 px-2.5 rounded-sm inline-block mb-2">
                                    Missoula Service Bay
                                </span>
                                <p className="text-sm text-white/95 font-medium leading-normal">
                                    Thorough inspections and diagnostic testing at our Missoula shop.
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
                    { label: "Frenchtown" }
                ]}
            />

            {/* Is the Drive Worth It Section */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Is the Drive from Frenchtown to Missoula Worth It for Auto Care?
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    For basic maintenance, staying as close to home as possible makes sense.
                                </p>
                                <p>
                                    But if you are dealing with a complex issue, a warning light that won't go out, or an intermittent noise, the closest shop might not have the diagnostic equipment or experience to find the root cause.
                                </p>
                                <p>
                                    That is where Benchmark comes in. We run systematic testing first, verify what is broken, and explain our findings before we touch a wrench.
                                </p>
                                <p>
                                    For Frenchtown residents making regular trips into Missoula for groceries, work, or school, our shop is an easy stop. Our secure after-hours drop-off means you can leave your vehicle overnight without disrupting your schedule.
                                </p>
                                <p>
                                    Avoiding misdiagnosed repairs saves you time and keeps your vehicle safe on the highway.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Unique Driving Demands and Wear in the Frenchtown Valley */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Unique Driving Demands and Wear in the Frenchtown Valley
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Living in Frenchtown means putting your vehicle through high-speed highway commutes, variable river valley weather, and washboard gravel roads.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Traveling Interstate 90 regularly at 80 mph exposes minor wheel imbalances, worn suspension bushings, and steering alignment issues quickly. Additionally, winter winds blowing through the Alberton Gorge bring sudden freezing temperatures that strain batteries and cooling systems.
                                </p>
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    Common vehicle issues we address for Frenchtown drivers include:
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                                    {[
                                        "Steering wheel shake or vibration at 75+ mph",
                                        "Suspension wear from washboard and gravel roads",
                                        "Rapid brake wear and rotor warping from highway stops",
                                        "Check engine lights related to emissions or misfires",
                                        "Weak batteries failing during winter cold snaps",
                                        "Coolant and thermostat issues in mountain driving",
                                        "Headlight fogging that impacts safety during wildlife crossings",
                                        "Wheel alignments after hitting deep potholes"
                                    ].map((issue, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-text-secondary text-[15px]">
                                            <div className="h-2 w-2 rounded-full bg-copper shrink-0 mt-2" />
                                            <span>{issue}</span>
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-text-secondary text-lg leading-relaxed pt-2">
                                    Catching these wear-and-tear symptoms early prevents roadside breakdowns on your daily Missoula commute.
                                </p>
                            </div>

                            {/* Local Issues Image */}
                            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md bg-surface flex items-center justify-center">
                                <Image
                                    src="/images/Brake & Suspension Evaluation.webp"
                                    alt="Technician performing suspension and steering inspection for a Frenchtown commuter vehicle"
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

            {/* Comprehensive Mechanical Care for Frenchtown Commuters */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Comprehensive Mechanical Care for Frenchtown Commuters
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                You do not need to diagnose the failure before calling us. Most of our customers simply describe what they are noticing—a loose feel in the steering, a squeal in the brakes, or an engine that hesitates when merging onto I-90.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                That description is all we need to start. Benchmark Automotive Service supports Frenchtown drivers with:
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
                                Explain the symptoms to us, and we will perform targeted testing to outline the safest path forward.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* When to Schedule an Appointment with Us */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                When to Schedule an Appointment with Us
                            </h2>
                            <PrecisionDivider />
                            <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                Book a diagnostic appointment if:
                            </p>
                            <ul className="space-y-3.5 pl-2">
                                {[
                                    "Your vehicle feels unstable, vibrates, or pulls at freeway speeds",
                                    "Your brakes screech, grind, or feel soft under pressure",
                                    "A warning light appears on your instrument panel",
                                    "Your engine struggles to turn over during freezing valley mornings",
                                    "You notice rattling or clunking sounds when driving on washboard dirt roads",
                                    "Your lights, radio, or power windows act up inconsistently",
                                    "You want an inspection before taking a road trip outside western Montana",
                                    "You want to catch up on delayed factory-recommended maintenance"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-text-secondary text-lg leading-relaxed">
                                        <CheckCircle2 className="h-5 w-5 text-copper shrink-0 mt-1" strokeWidth={2} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-text-secondary text-lg leading-relaxed pt-4 border-t border-border/60">
                                <p className="font-semibold text-navy-950">You do not need to guess which parts to replace.</p>
                                <p>We test the components first to verify the problem.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Our Simple Five-Step Service Flow */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Our Simple Five-Step Service Flow
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We make vehicle repairs straightforward for Frenchtown residents. Here is how we work:
                                </p>
                                <ol className="space-y-4 pl-2">
                                    {[
                                        "Request your appointment online or call our shop.",
                                        "Describe the symptoms or problems your vehicle is experiencing.",
                                        "Drop your car off, or use our secure night-drop box.",
                                        "Our technicians perform target inspections and electrical testing.",
                                        "We call you to explain what we found and get your approval before starting any repair."
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
                                    We maintain clear communication. No unexpected fees, and no repairs without your direct consent.
                                </p>
                            </div>

                            {/* Scheduling Image */}
                            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md bg-surface flex items-center justify-center">
                                <Image
                                    src="/images/Benchmark Automotive.webp"
                                    alt="Benchmark Automotive Service shop check-in and vehicle drop-off"
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

            {/* Why Frenchtown Residents Choose Benchmark Automotive */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                Why Frenchtown Residents Choose Benchmark Automotive
                            </h2>
                            <PrecisionDivider />
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed mt-6">
                                <p>
                                    Making a short drive into Missoula is only worthwhile if you get dependable answers and quality work.
                                </p>
                                <p>
                                    Benchmark is structured around a diagnostic-first model. We isolate the electrical fault, mechanical failure, or engine sensor issue before advising a part replacement.
                                </p>
                                <p>
                                    This testing is especially critical for highway commuters who need their vehicles to handle high speeds, heavy temperature drops, and local winter driving safely.
                                </p>
                                <p>
                                    By testing first, we prevent unnecessary repairs and keep your costs down.
                                </p>
                                <p className="font-medium text-navy-950 text-xl">
                                    Verifying the fault keeps our repairs honest and reliable.
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Factual Diagnosis Over Guesswork */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Factual Diagnosis Over Guesswork
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed mt-6">
                                    Our technicians use dedicated scan tools, lab scopes, and physical inspections to trace issues to their source. We show you what failed, explain why it requires replacement, and help you determine which repairs are urgent and which can wait.
                                </p>
                            </div>

                            {/* Diagnostic Testing Image */}
                            <div className="relative w-full aspect-video md:aspect-[4/3] rounded-sm overflow-hidden border border-border shadow-md bg-surface flex items-center justify-center">
                                <Image
                                    src="/images/electrical-diagnostics.jpg"
                                    alt="Diagnostic equipment connected to a vehicle battery during testing at Benchmark Automotive Service"
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

            {/* Serving Frenchtown from Our Missoula Facility */}
            <section className="py-16 md:py-24 bg-bg border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Location details */}
                            <div className="space-y-6">
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
                                    Serving Frenchtown from Our Missoula Facility
                                </h2>
                                <PrecisionDivider />
                                <p className="text-lg text-text-secondary leading-relaxed">
                                    We are based in Missoula, serving drivers from Frenchtown, Huson, and across the valley.
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

            {/* FAQs for Frenchtown Drivers */}
            <section className="py-16 md:py-24 bg-surface border-b border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <Reveal>
                        <div className="max-w-3xl mx-auto space-y-6 mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 text-center tracking-tight">
                                FAQs for Frenchtown Drivers
                            </h2>
                            <PrecisionDivider className="mx-auto" />
                        </div>
                    </Reveal>

                    <div className="max-w-3xl mx-auto space-y-6 mb-16">
                        {[
                            {
                                q: "Do you serve drivers from Frenchtown?",
                                a: "Yes. Benchmark Automotive Service is located in Missoula and regularly helps commuters and families traveling in from Frenchtown, Huson, and along the I-90 corridor."
                            },
                            {
                                q: "Is the drive from Frenchtown to Missoula worth it for auto service?",
                                a: "Yes. While standard maintenance can be done anywhere, complex electrical diagnostics, high-speed steering vibrations, or check engine light troubleshooting are best handled by a shop specializing in testing rather than part-guessing."
                            },
                            {
                                q: "Can I drop off my car outside of normal business hours?",
                                a: "Yes. We offer a secure after-hours drop-off system. Leave your vehicle and drop the keys in our secure box; we will confirm receipt the next business morning."
                            },
                            {
                                q: "Do you handle both maintenance and repairs?",
                                a: "Yes. We manage general maintenance, physical checkups, engine scans, brake pads, steering alignment, electrical problems, and full heating and cooling repairs."
                            },
                            {
                                q: "What if I am not sure what is wrong with my vehicle?",
                                a: "That is completely normal. Describe the sounds, vibrations, or behaviors you notice while driving. We will run physical and electrical diagnostic testing to locate the source of the problem."
                            },
                            {
                                q: "Where is Benchmark Automotive Service located?",
                                a: "Benchmark Automotive Service is located at 1914 North Ave W in Missoula, MT, which is easily accessible via the Reserve Street exit off I-90."
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

                    {/* Link back to parent Service Hub page */}
                    <Reveal>
                        <div className="text-center pt-8 border-t border-border">
                            <Link href="/service-areas" className="inline-flex items-center text-base font-semibold text-copper hover:text-navy-950 transition-colors">
                                <ArrowRight className="mr-2 h-5 w-5 rotate-180" /> View all service areas
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* Schedule Auto Repair Near Frenchtown (Final CTA Section) */}
            <section className="py-20 md:py-24 bg-gradient-to-r from-navy-950 to-navy-900 border-t-4 border-brand-red">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <Reveal>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-surface mb-6">
                            Schedule Auto Repair Near Frenchtown
                        </h2>
                        <p className="text-white/85 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                           If you reside in Frenchtown or Huson and require diagnostic scans, brake service, steering repairs, or general maintenance, call Benchmark Automotive or book an appointment online.
                        </p>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Describe the symptoms you are noticing, and our technicians will perform systematic testing to get your vehicle driving safely again.
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
                            Located at 1914 North Ave W in Missoula. Serving Missoula, Frenchtown, Huson, and nearby communities.
                        </p>
                    </Reveal>
                </div>
            </section>
        </article>
    );
}
