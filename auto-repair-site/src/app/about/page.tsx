import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpenCheck, ShieldCheck, Wrench } from "lucide-react";
import { getAboutPageSchema, serializeSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
    title: "About Our Missoula Auto Repair Shop",
    description: "Meet Benchmark Automotive Service in Missoula and learn how our ASE Master Technicians inspect, diagnose, document, and verify automotive repairs.",
    alternates: {
        canonical: "https://www.benchmarkmissoula.com/about"
    }
};

const standards = [
    {
        icon: Award,
        title: "ASE Master Technician Review",
        description: "Our service information is reviewed by ASE Master Technicians before publication and when technical updates are made."
    },
    {
        icon: Wrench,
        title: "Testing Before Parts",
        description: "We use physical inspection, measurements, scan data, circuit testing, and test drives to confirm the cause before recommending work."
    },
    {
        icon: BookOpenCheck,
        title: "Clear Documentation",
        description: "We separate urgent safety concerns from maintenance and explain the evidence behind each recommendation."
    },
    {
        icon: ShieldCheck,
        title: "Repair Verification",
        description: "After the repair, we repeat the relevant test or road-test the vehicle under the conditions that produced the original concern."
    }
];

export default function AboutPage() {
    const schema = getAboutPageSchema();

    return (
        <article className="flex flex-col min-h-[100dvh]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }}
            />

            <section className="bg-navy-950 text-white py-20 md:py-28 border-b border-navy-900">
                <div className="container mx-auto px-4 md:px-6">
                    <p className="text-sm font-semibold uppercase tracking-widest text-copper mb-4">
                        About Benchmark Automotive Service
                    </p>
                    <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight max-w-4xl">
                        A Missoula Auto Repair Shop Built Around Accurate Answers
                    </h1>
                    <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/85 leading-relaxed">
                        Benchmark Automotive Service combines more than 20 years of hands-on automotive experience with a diagnostic-first repair process. Our goal is simple: understand the problem, show you the evidence, and help you make a clear decision.
                    </p>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6">
                                Real Technicians. A Real Missoula Facility.
                            </h2>
                            <div className="space-y-5 text-lg text-text-secondary leading-relaxed">
                                <p>
                                    Our shop at {siteConfig.address.street} handles routine maintenance, brake and suspension work, electrical faults, drivability problems, warning lights, inspections, and difficult intermittent concerns.
                                </p>
                                <p>
                                    We do not treat a trouble code as a diagnosis. The code tells us where to begin testing. Measurements, component behavior, wiring integrity, mechanical condition, and the customer&apos;s description determine what actually failed.
                                </p>
                                <p>
                                    That same standard applies to this website. Service pages and educational guides are based on work performed in the shop and reviewed by ASE Master Technicians for technical accuracy.
                                </p>
                            </div>
                        </div>
                        <figure>
                            <Image
                                src="/images/Benchmark Automotive.webp"
                                alt="Front counter and team member inside Benchmark Automotive Service in Missoula"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm border border-border object-cover shadow-md"
                                priority
                            />
                            <figcaption className="mt-3 text-sm text-muted-foreground">
                                Benchmark Automotive Service, 1914 North Ave W in Missoula, Montana.
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="bg-bg py-16 md:py-24 border-y border-border">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mb-12">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-4">
                            How We Protect Your Trust
                        </h2>
                        <p className="text-lg text-text-secondary">
                            Automotive advice affects safety and can lead to expensive decisions. These are the standards we use in the shop and in the information we publish.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {standards.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="bg-white border border-border p-7 rounded-sm">
                                <Icon className="h-7 w-7 text-copper mb-4" aria-hidden="true" />
                                <h3 className="font-heading text-xl font-bold text-navy-950 mb-3">{title}</h3>
                                <p className="text-text-secondary leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-surface py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <figure>
                            <Image
                                src="/images/Inspection Bay.webp"
                                alt="Vehicle being inspected inside the Benchmark Automotive Service repair bay"
                                width={1200}
                                height={900}
                                className="w-full rounded-sm border border-border object-cover shadow-md"
                            />
                            <figcaption className="mt-3 text-sm text-muted-foreground">
                                A vehicle inspection in the Benchmark Automotive Service repair bay.
                            </figcaption>
                        </figure>
                        <div>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-950 mb-6">
                                What You Can Expect
                            </h2>
                            <ul className="space-y-4 text-lg text-text-secondary">
                                <li>Clear authorization before repair work begins.</li>
                                <li>An explanation of what is urgent and what can wait.</li>
                                <li>A written estimate based on inspection and testing.</li>
                                <li>High-quality parts selected for the vehicle and repair.</li>
                                <li>Post-repair testing appropriate to the original concern.</li>
                            </ul>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Link href="/services" className="inline-flex justify-center bg-brand-red hover:bg-brand-red-hover text-white px-7 py-3.5 rounded-sm font-semibold">
                                    Explore Our Services
                                </Link>
                                <Link href="/contact" className="inline-flex justify-center border border-copper text-copper hover:bg-copper hover:text-white px-7 py-3.5 rounded-sm font-semibold transition-colors">
                                    Schedule Service
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    );
}
