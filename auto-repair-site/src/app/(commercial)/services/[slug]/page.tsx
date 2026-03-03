import { getServiceBySlug, SERVICES } from "@/lib/linking";
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

// 1. Generate Static Params for build time
export async function generateStaticParams() {
    return SERVICES.filter(s => s.renderingEnabled).map((service) => ({
        slug: service.slug,
    }));
}

// 2. Generate Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) return { title: "Service Not Found" };

    return {
        title: service.seo.title,
        description: service.seo.description,
        alternates: {
            canonical: service.seo.canonical || `https://www.premiumauto.local/services/${service.slug}`
        }
    };
}

// 3. Page Assembly
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.slug);

    if (!service) return notFound();

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <ServiceHero content={service} />
            <ServiceOverview content={service} />
            <CommonSymptoms content={service} />
            <DiagnosticProcess content={service} />
            <RepairProcess content={service} />
            <WhyChooseUs content={service} />
            <InternalLinks content={service} />
            <ServiceFaqs content={service} />
            <FinalCtaBand />
        </article>
    );
}
