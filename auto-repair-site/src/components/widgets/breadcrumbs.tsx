import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
    items: {
        label: string;
        href?: string;
    }[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="py-6 border-b border-navy-50/50 bg-white/50 backdrop-blur-sm sticky top-[72px] z-20">
            <div className="container mx-auto px-4 md:px-6">
                <ol className="flex items-center space-x-2 text-[13px] font-medium text-text-secondary uppercase tracking-wider">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="h-3 w-3 mx-2 text-navy-200" strokeWidth={3} />
                            )}
                            {item.href ? (
                                <Link
                                    href={item.href}
                                    className="hover:text-copper transition-colors duration-200"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-navy-400 cursor-default">{item.label}</span>
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
}
