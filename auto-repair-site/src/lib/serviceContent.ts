import fs from "fs/promises";
import path from "path";

export async function getServiceMarkdown(slug: string): Promise<string | null> {
    try {
        const filePath = path.join(process.cwd(), "src", "content", "services", `${slug}.md`);
        const content = await fs.readFile(filePath, "utf-8");
        return content;
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
