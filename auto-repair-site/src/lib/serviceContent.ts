import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface ServiceData {
    title: string;
    description: string;
    category: string;
    featured: boolean;
    order: number;
    related?: string[];
    [key: string]: any;
}

export async function getServiceMarkdown(slug: string): Promise<{ content: string; data: ServiceData } | null> {
    try {
        const filePath = path.join(process.cwd(), "src", "content", "services", `${slug}.md`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        return { content, data: data as ServiceData };
    } catch (e) {
        return null;
    }
}

export async function getAllServiceSlugs(): Promise<string[]> {
    try {
        const dirPath = path.join(process.cwd(), "src", "content", "services");
        const files = await fs.readdir(dirPath);
        return files
            .filter(file => file.endsWith(".md"))
            .map(file => file.replace(/\.md$/, ""));
    } catch (e) {
        return [];
    }
}

export async function getAllServiceData(): Promise<(ServiceData & { slug: string })[]> {
    const slugs = await getAllServiceSlugs();
    const services = await Promise.all(
        slugs.map(async (slug) => {
            const result = await getServiceMarkdown(slug);
            if (!result) return null;
            return {
                ...result.data,
                slug
            };
        })
    );
    return services.filter((s): s is ServiceData & { slug: string } => s !== null);
}
