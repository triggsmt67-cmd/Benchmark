import { getServiceBySlug, SERVICES, LOCATIONS } from "@/lib/linking";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Slot Components
import { ServiceHero } from "@/components/widgets/slots/service-hero";
import { ServiceOverview } from "@/components/widgets/slots/service-overview";
import { CommonSymptoms } from "@/components/widgets/slots/common-symptoms";
import { DiagnosticProcess, RepairProcess } from "@/components/widgets/slots/process-blocks";
import { WhyChooseUs } from "@/components/widgets/slots/why-choose-us";
import { ServiceFaqs } from "@/components/widgets/slots/faqs";
import { InternalLinks } from "@/components/widgets/slots/internal-links";
import { FinalCtaBand } from "@/components/widgets/final-cta-band";
import { siteConfig } from "@/lib/siteConfig";

export async function generateStaticParams() {
    const params: { slug: string; city: string }[] = [];

    SERVICES.filter(s => s.renderingEnabled).forEach(service => {
        service.availableLocations.forEach(citySlug => {
            params.push({ slug: service.slug, city: citySlug });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);
    const location = LOCATIONS.find(l => l.slug === resolvedParams.city);

    if (!service || !location) return { title: "Not Found" };

    return {
        title: `${service.name} in ${location.city}, ${location.state} | ${siteConfig.businessName}`,
        description: `Leading ${service.name.toLowerCase()} for drivers in ${location.city}. ${service.seo.description}`,
        alternates: {
            canonical: `https://www.premiumauto.local/services/${service.slug}/${location.slug}`
        }
    };
}

export default async function CityServicePage({ params }: { params: Promise<{ slug: string; city: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);
    const location = LOCATIONS.find(l => l.slug === resolvedParams.city);

    if (!service || !location) return notFound();

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <ServiceHero content={service} location={location} />
            <ServiceOverview content={service} />
            <CommonSymptoms content={service} />
            <DiagnosticProcess content={service} />
            <RepairProcess content={service} />
            <WhyChooseUs content={service} />
            <InternalLinks content={service} />
            <ServiceFaqs content={service} />

            {/* Location specifics override logic can be injected here for SEO relevancy */}
            <section className="bg-bg py-12 border-t border-border">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="font-heading text-xl font-bold text-navy-950 mb-2">Proudly Serving {location.city}, {location.state}</h3>
                    <p className="text-text-secondary text-sm">Visit us at {location.address} for top-tier {service.name.toLowerCase()}.</p>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
