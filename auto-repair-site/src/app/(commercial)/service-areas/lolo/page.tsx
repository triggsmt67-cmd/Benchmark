import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "Auto Repair for Lolo, MT Drivers | Benchmark Automotive Service",
    description: "Benchmark Automotive Service helps Lolo drivers with diagnostics, brake repair, electrical issues, inspections, oil changes, and suspension repair from our Missoula shop.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/service-areas/lolo"
    },
    openGraph: {
        url: "https://www.benchmarkmissoula.com/service-areas/lolo",
        title: "Auto Repair for Lolo, MT Drivers | Benchmark Automotive Service",
        description: "Benchmark Automotive Service helps Lolo drivers with diagnostics, brake repair, electrical issues, inspections, oil changes, and suspension repair from our Missoula shop.",
    }
};

export default function LoloServiceAreaPage() {
    const bSchema = {
        "@context": "https://schema.org",
        "@type": "AutoRepair",
        "@id": "https://www.benchmarkmissoula.com/#autorepair",
        "name": siteConfig.businessName,
        "url": "https://www.benchmarkmissoula.com/",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1914 North Ave W",
            "addressLocality": "Missoula",
            "addressRegion": "MT",
            "postalCode": "59801",
            "addressCountry": "US"
        },
        "telephone": "+14063171405",
        "areaServed": ["Missoula", "Lolo", "Frenchtown", "Bonner", "East Missoula", "Milltown", "Orchard Homes", "Target Range"]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.benchmarkmissoula.com/service-areas/lolo#service",
        "name": "Auto Repair for Lolo, MT Drivers",
        "serviceType": "Auto repair and diagnostic services",
        "provider": { "@id": "https://www.benchmarkmissoula.com/#autorepair" },
        "areaServed": {
            "@type": "City",
            "name": "Lolo, MT"
        },
        "url": "https://www.benchmarkmissoula.com/service-areas/lolo"
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
                "name": "Lolo",
                "item": "https://www.benchmarkmissoula.com/service-areas/lolo"
            }
        ]
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Do you have a shop in Lolo?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, Benchmark Automotive Service is located in Missoula, but we serve drivers from Lolo and nearby communities who are looking for definitive diagnostic testing."
                }
            },
            {
                "@type": "Question",
                "name": "Is it worth driving from Lolo for auto repair?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If the issue needs proper diagnostics, clear recommendations, or repeat-problem testing, yes. Finding the actual cause before replacing parts saves you from making multiple trips for the same problem."
                }
            },
            {
                "@type": "Question",
                "name": "Can I drop my vehicle off before or after work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we offer an after-hours drop-off option for convenience. If dropping the vehicle off during the day is difficult, you can leave it securely, and we will confirm receipt the next business day."
                }
            },
            {
                "@type": "Question",
                "name": "What should I do if my check engine light comes on before driving into Missoula?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If the light is flashing or the vehicle is running rough, avoid driving it and call us first. If the light is steady and the vehicle feels normal, you can safely drive it in and schedule check engine light diagnosis."
                }
            },
            {
                "@type": "Question",
                "name": "Do you work on brake problems for Lolo commuters?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we handle all types of brake repair, including addressing the noise, vibration, pulling, and longer stopping distances that are common from highway commuting."
                }
            }
        ]
    };

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify([bSchema, serviceSchema, breadcrumbSchema, faqSchema]) }}
            />
            
            {/* Hero */}
            <section className="bg-navy-950 text-white py-24 md:py-32 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                        Auto Repair for Lolo Drivers Who Want the Problem Found First
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                        If you live in Lolo, a small vehicle problem can turn into a long day fast. Most trips into Missoula mean Highway 93, cold starts in winter, higher-speed driving, and enough distance that you do not want to keep bringing the same vehicle back for the same issue.<br/><br/>
                        Benchmark Automotive Service is in Missoula, and we help Lolo drivers find the actual cause before parts get replaced.
                    </p>
                    <div className="mt-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 font-medium rounded-sm transition-colors text-lg"
                        >
                            Schedule Service
                        </Link>
                    </div>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: "Lolo" }
                ]}
            />

            <section className="py-12 md:py-24 bg-surface">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto space-y-16">

                        {/* Why Drivers Choose Benchmark */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Why Lolo Drivers Choose Benchmark</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    When you are already driving into Missoula, you want to know the trip is worth it. Our customers from Lolo come to us because they want their vehicle&apos;s issue diagnosed correctly the first time. They want clear recommendations and to know exactly what is urgent and what can wait.
                                </p>
                                <p>
                                    Nobody wants repeat visits for the exact same issue. We focus on proper testing and straightforward communication, so you have the facts you need to make decisions about your vehicle.
                                </p>
                            </div>
                        </Reveal>

                        {/* Common Symptoms / When to Call */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">When Lolo Drivers Usually Call Us</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    A symptom that seems minor in town can become much more noticeable at highway speeds. Lolo drivers typically reach out when they experience:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>A check engine light that comes on before the commute into Missoula</li>
                                    <li>Brake vibration, squeaking, or grinding noise after repeated highway driving</li>
                                    <li>Battery, charging, or starting issues during cold Montana mornings</li>
                                    <li>Steering pull or uneven tire wear noticed on longer stretches of road</li>
                                    <li>Suspension noise, clunking, or instability on rough or uneven roads</li>
                                    <li>Electrical problems that seem to come and go unpredictably</li>
                                    <li>A/C or heat issues that you notice before starting a longer drive</li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Typical Vehicle Wear */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Typical Vehicle Wear for Highway 93 Drivers</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Driving regularly between Lolo and Missoula puts specific kinds of wear on your vehicle. Highway-speed commuting combined with stop-and-go traffic once you enter Missoula means your brakes work harder and wear out from regular high-speed deceleration.
                                </p>
                                <p>
                                    Beyond brakes, Bitterroot-area winter driving and cold Montana starts are notoriously tough on batteries and starting systems. Similarly, rougher roads and seasonal road damage often lead to suspension wear, alignment issues, uneven tire wear, and steering pull over time. Catching these wear patterns early helps keep your vehicle reliable for the commute.
                                </p>
                            </div>
                        </Reveal>

                        {/* Services Helpful for Lolo Drivers */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Services Helpful for Lolo Drivers</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    We offer a complete range of services. Here is how our approach helps you address common problems:
                                </p>
                                <ul className="list-disc pl-6 space-y-4">
                                    <li>
                                        <Link href="/services/advanced-diagnostics" className="text-copper hover:underline font-medium">Advanced Diagnostics</Link> &amp; <Link href="/services/check-engine-light" className="text-copper hover:underline font-medium">Check Engine Light</Link>: 
                                        If the concern starts with a warning light, our diagnostic process can help identify what the vehicle is actually reporting instead of just guessing at parts.
                                    </li>
                                    <li>
                                        <Link href="/services/brake-repair" className="text-copper hover:underline font-medium">Brake Repair</Link>: 
                                        If you notice longer stopping distances, squeaking, or steering wheel vibration when exiting the highway, having your brakes properly inspected is the best starting point.
                                    </li>
                                    <li>
                                        <Link href="/services/electrical-diagnostics" className="text-copper hover:underline font-medium">Electrical Diagnostics</Link>: 
                                        For battery drains, charging system faults, or inconsistent electrical issues that leave you stranded on cold mornings.
                                    </li>
                                    <li>
                                        <Link href="/services/suspension-steering" className="text-copper hover:underline font-medium">Suspension &amp; Steering</Link>: 
                                        If the issue shows up as vibration, pulling, clunking, or uneven tire wear, we can inspect your steering and suspension components to find the worn part.
                                    </li>
                                    <li>
                                        <Link href="/services/oil-change" className="text-copper hover:underline font-medium">Oil Changes &amp; Maintenance</Link>: 
                                        Keeping up with regular fluid changes and preventative maintenance is the best way to avoid unexpected breakdowns on Highway 93.
                                    </li>
                                </ul>
                            </div>
                        </Reveal>

                        {/* Getting Service from Lolo */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Getting Service from Lolo</h2>
                            <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
                                <p>
                                    Getting to Benchmark Automotive Service is simple. Lolo drivers usually come north on US-93 straight into Missoula. Our shop is located at <strong>1914 North Ave W</strong>.
                                </p>
                                <p>
                                    We understand that coordinating a drop-off during business hours can be challenging. We offer a convenient after-hours drop-off option. Simply park your vehicle, leave your keys in our secure drop box, and we will confirm receipt the next business day. When your vehicle is evaluated, we&apos;ll communicate our findings clearly before any work begins.
                                </p>
                            </div>
                        </Reveal>

                        {/* FAQ Section */}
                        <Reveal>
                            <h2 className="font-heading text-3xl font-bold text-navy-950 mb-6">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqSchema.mainEntity.map((faq, index) => (
                                    <div key={index} className="bg-white p-6 rounded-sm border border-border shadow-sm">
                                        <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">{faq.name}</h3>
                                        <p className="text-text-secondary leading-relaxed">{faq.acceptedAnswer.text}</p>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
