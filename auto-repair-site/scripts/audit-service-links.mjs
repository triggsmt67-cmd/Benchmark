import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/services');
const rootDir = process.cwd();

async function getAllServiceSlugs() {
    const files = await fs.readdir(contentDir);
    return new Set(
        files.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
    );
}

async function getFilesRecursively(dir, exts) {
    let results = [];
    const list = await fs.readdir(dir, { withFileTypes: true });
    for (const file of list) {
        const filePath = path.join(dir, file.name);
        if (file.isDirectory()) {
            results = results.concat(await getFilesRecursively(filePath, exts));
        } else {
            if (exts.some(ext => file.name.endsWith(ext))) {
                results.push(filePath);
            }
        }
    }
    return results;
}

function extractLinks(content) {
    const links = [];

    // Pattern 1: /services/slug
    const regex1 = /\/services\/([a-zA-Z0-9-]+)/g;
    let match;
    while ((match = regex1.exec(content)) !== null) {
        links.push({ slug: match[1], type: 'normalized' });
    }

    return links;
}

function getSuggestedFix(brokenSlug, validSlugs) {
    let closestMatch = null;
    let highestSimilarity = 0;

    for (const validSlug of validSlugs) {
        let matches = 0;
        for (let i = 0; i < Math.min(brokenSlug.length, validSlug.length); i++) {
            if (brokenSlug[i] === validSlug[i]) matches++;
        }
        const similarity = matches / Math.max(brokenSlug.length, validSlug.length);
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            closestMatch = validSlug;
        }
    }

    return highestSimilarity > 0.4 ? closestMatch : 'none';
}

async function auditLinks() {
    console.log("Starting repository-wide service link audit...\n");
    const validSlugs = await getAllServiceSlugs();

    // Get all files to scan
    const srcFiles = await getFilesRecursively(path.join(rootDir, 'src'), ['.md', '.ts', '.tsx']);
    const llmsFile = path.join(rootDir, 'public', 'llms.txt');
    const allFiles = [...srcFiles];

    try {
        await fs.access(llmsFile);
        allFiles.push(llmsFile);
    } catch (_e) {} // ignore if llms.txt doesn't exist

    let globalIssuesFound = false;

    for (const filePath of allFiles) {
        const file = path.relative(rootDir, filePath);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const fileExt = path.extname(file);

        let contentToScan = fileContent;
        let frontmatterData = {};

        if (fileExt === '.md') {
            const parsed = matter(fileContent);
            frontmatterData = parsed.data;
            contentToScan = parsed.content;
        }

        const links = extractLinks(contentToScan);

        let fileHasIssues = false;
        let errors = [];

        // Check body/code links
        for (const { slug } of links) {
            if (!validSlugs.has(slug)) {
                fileHasIssues = true;
                globalIssuesFound = true;
                const fix = getSuggestedFix(slug, validSlugs);
                errors.push(`      - Broken: /services/${slug}  |  Suggestion: /services/${fix}`);
            }
        }

        // Check frontmatter related (only for services)
        if (filePath.includes('/src/content/services') && frontmatterData.related && Array.isArray(frontmatterData.related)) {
            for (const relatedSlug of frontmatterData.related) {
                if (!validSlugs.has(relatedSlug)) {
                    fileHasIssues = true;
                    globalIssuesFound = true;
                    const fix = getSuggestedFix(relatedSlug, validSlugs);
                    errors.push(`      - Frontmatter Broken: related: ${relatedSlug}  |  Suggestion: ${fix}`);
                }
            }
        }

        if (fileHasIssues) {
            console.log(`❌ ISSUES: ${file} →`);
            errors.forEach(err => console.log(err));
        }
    }

    if (!globalIssuesFound) {
        console.log("\n✅ All service links across the repository are valid and normalized.");
    } else {
        console.log("\n❌ Audit complete. Issues were found.");
        process.exit(1);
    }
}

auditLinks().catch(err => {
    console.error(err);
    process.exit(1);
});
