import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, MapPin, Phone } from "lucide-react";
import type { ServiceAreaProfile } from "@/lib/serviceAreaProfiles";
import { getServiceAreaDetailSchema, serializeSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";
import { Breadcrumbs } from "@/components/widgets/breadcrumbs";

export function TrustedServiceAreaPage({ profile }: { profile: ServiceAreaProfile }) {
    const schema = getServiceAreaDetailSchema({
        citySlug: profile.slug,
        cityName: profile.cityName,
        title: profile.title,
        faqs: profile.faqs.map((faq) => ({
            question: faq.q,
            answer: faq.a
        }))
    });

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
            />

            <section className="bg-navy-950 text-white py-20 md:py-28 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-copper mb-4">
                        {profile.eyebrow}
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
                        {profile.title}
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/85 leading-relaxed">
                        {profile.description}
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link href="/contact" className="inline-flex justify-center bg-brand-red hover:bg-brand-red-hover text-white px-7 py-3.5 rounded-sm font-semibold">
                            Schedule Service
                        </Link>
                        <a href={`tel:${siteConfig.phone.link}`} className="inline-flex items-center justify-center gap-2 border border-white/60 hover:bg-white hover:text-navy-950 px-7 py-3.5 rounded-sm font-semibold transition-colors">
                            <Phone className="h-4 w-4" aria-hidden="true" />
                            {siteConfig.phone.display}
                        </a>
                    </div>
                </div>
            </section>

            <Breadcrumbs
                items={[
                    { label: "Home", href: "/" },
                    { label: "Service Areas", href: "/service-areas" },
                    { label: profile.cityName }
                ]}
            />

            <section className="bg-surface py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6">
                                Why {profile.cityName} Drivers Come to Our Missoula Shop
                            </h2>
                            <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
                                {profile.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                            </div>
                            <div className="mt-8 border-l-4 border-copper bg-copper/5 px-5 py-4">
                                <p className="font-semibold text-navy-950 mb-1">Clear location information</p>
                                <p className="text-text-secondary">{profile.routeNote}</p>
                            </div>
                        </div>
                        <figure>
                            <Image
                                src="/images/Benchmark Automotive.webp"
                                alt={`Benchmark Automotive Service facility serving ${profile.cityName} drivers`}
                                width={1200}
                                height={900}
                                className="w-full rounded-sm border border-border object-cover shadow-md"
                            />
                            <figcaption className="mt-3 text-sm text-muted-foreground">
                                Benchmark Automotive Service is located at {siteConfig.inlineAddress}.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="bg-bg py-16 md:py-24 border-y border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                            Vehicle Conditions We Consider Around {profile.cityName}
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Local driving conditions provide context. The repair recommendation still comes from inspection, measurement, and testing on the individual vehicle.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {profile.localConditions.map((condition) => (
                            <div key={condition.title} className="bg-white border border-border p-7 rounded-sm">
                                <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">{condition.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{condition.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        <div className="lg:col-span-3">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-8">
                                Services Commonly Relevant to {profile.cityName} Drivers
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-5">
                                {profile.services.map((service) => (
                                    <Link key={service.href} href={service.href} className="group border border-border bg-white p-6 rounded-sm hover:border-copper transition-colors">
                                        <h3 className="font-heading text-xl font-bold text-navy-950 group-hover:text-copper transition-colors mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-text-secondary leading-relaxed">{service.description}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <aside className="lg:col-span-2 bg-navy-950 text-white p-8 rounded-sm">
                            <h2 className="font-heading text-2xl font-bold mb-6">When the Trip to Benchmark Makes Sense</h2>
                            <ul className="space-y-4">
                                {profile.visitReasons.map((reason) => (
                                    <li key={reason} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-copper shrink-0 mt-0.5" aria-hidden="true" />
                                        <span className="text-white/85">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/about" className="inline-flex mt-7 text-copper font-semibold hover:underline">
                                Read about our technicians and process
                            </Link>
                        </aside>
                    </div>
                </div>
            </section>

            <section className="bg-bg py-16 md:py-24 border-y border-border">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-10">
                        Questions from {profile.cityName} Drivers
                    </h2>
                    <div className="space-y-6">
                        {profile.faqs.map((faq) => (
                            <div key={faq.q} className="bg-white border border-border p-6 rounded-sm">
                                <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">{faq.q}</h3>
                                <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-navy-950 text-white py-16 md:py-20">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <MapPin className="h-7 w-7 text-copper mx-auto mb-4" aria-hidden="true" />
                    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                        Schedule Auto Repair from {profile.cityName}
                    </h2>
                    <p className="text-white/80 text-lg max-w-2xl mx-auto">
                        Tell us what the vehicle is doing and when it happens. We will help determine the right diagnostic or service starting point.
                    </p>
                    <Link href="/contact" className="inline-flex mt-8 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-sm font-semibold">
                        Contact Benchmark Automotive Service
                    </Link>
                </div>
            </section>
        </article>
    );
}
