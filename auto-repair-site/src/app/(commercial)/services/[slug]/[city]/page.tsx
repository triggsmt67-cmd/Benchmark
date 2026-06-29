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
import { getCityServiceSchema, serializeSchema } from "@/lib/seo";

export async function generateStaticParams() {
    const params: { slug: string; city: string }[] = [];

    SERVICES.filter(s => s.renderingEnabled).forEach(service => {
        LOCATIONS.forEach(location => {
            params.push({
                slug: service.slug,
                city: location.slug
            });
        });
    });

    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);
    const location = LOCATIONS.find(loc => loc.slug === resolvedParams.city);

    if (!service) {
        return {
            title: "Service Not Found"
        };
    }

    // Handle legacy route safety
    const cityName = location?.city || "Missoula";
    const cityState = location?.state || "MT";

    const displayTitle = `${service.name} in ${cityName}, ${cityState} | ${siteConfig.businessName}`;
    const displayDesc = service.seo.description;

    return {
        title: displayTitle,
        description: displayDesc,
        alternates: {
            canonical: `https://www.benchmarkmissoula.com/services/${resolvedParams.slug}/${resolvedParams.city}`
        },
        openGraph: {
            url: `https://www.benchmarkmissoula.com/services/${resolvedParams.slug}/${resolvedParams.city}`,
            title: displayTitle,
            description: displayDesc
        }
    };
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);
    const location = LOCATIONS.find(loc => loc.slug === resolvedParams.city);

    if (!service) {
        return notFound();
    }

    // Handle legacy route safety
    const cityName = location?.city || "Missoula";
    const cityState = location?.state || "MT";

    const schema = getCityServiceSchema({
        slug: service.slug,
        serviceName: service.name,
        serviceDescription: service.seo.description,
        citySlug: resolvedParams.city,
        cityName,
        cityState,
        faqs: service.faqs
    });

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
            />
            {/* Pass location or mock location if legacy route */}
            <ServiceHero 
                content={service} 
                location={location || {
                    city: "Missoula",
                    state: "MT",
                    zipCode: "59801",
                    slug: "missoula",
                    coordinates: { lat: 46.855018, lng: -114.0255 },
                    address: "1914 North Ave W",
                    phone: "(406) 317-1405"
                }} 
            />
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
                    <h3 className="font-heading text-xl font-bold text-navy-950 mb-2">Proudly Serving {cityName}, {cityState}</h3>
                    <p className="text-text-secondary text-sm">Visit us at {location?.address || "1914 North Ave W"} for top-tier {service.name.toLowerCase()}.</p>
                </div>
            </section>

            <FinalCtaBand />
        </article>
    );
}
