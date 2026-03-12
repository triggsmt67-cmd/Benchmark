import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface GuideData {
    title: string;
    description: string;
    category: string;
    featured: boolean;
    order: number;
    related?: string[];
    faqs?: { question: string; answer: string }[];
    lastReviewed?: string;
    [key: string]: unknown;
}

export async function getGuideMarkdown(slug: string): Promise<{ content: string; data: GuideData } | null> {
    try {
        const filePath = path.join(process.cwd(), "src", "content", "guides", `${slug}.md`);
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(fileContent);
        return { content, data: data as GuideData };
    } catch {
        return null;
    }
}

export async function getAllGuideSlugs(): Promise<string[]> {
    try {
        const dirPath = path.join(process.cwd(), "src", "content", "guides");
        const files = await fs.readdir(dirPath);
        return files
          .filter(file => file.endsWith(".md"))
          .map(file => file.replace(/\.md$/, ""));
    } catch {
        return [];
    }
}

export async function getAllGuideData(): Promise<(GuideData & { slug: string })[]> {
    const slugs = await getAllGuideSlugs();
    const guides = await Promise.all(
      slugs.map(async (slug) => {
          const result = await getGuideMarkdown(slug);
          if (!result) return null;
          return {
              ...result.data,
              slug
          };
      })
    );
    return guides.filter((g): g is GuideData & { slug: string } => g !== null);
}
