import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src/content/services');

async function getAllServiceSlugs() {
    const files = await fs.readdir(contentDir);
    return new Set(
        files.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
    );
}

function extractLinks(markdown) {
    const links = [];

    // Pattern 1: /services/slug
    const regex1 = /\[.*?\]\(\/services\/([a-zA-Z0-9-]+)\)/g;
    let match;
    while ((match = regex1.exec(markdown)) !== null) {
        links.push({ slug: match[1], type: 'normalized' });
    }

    // Pattern 2: /slug (missing /services/ prefix)
    const regex2 = /\[.*?\]\(\/(?!services\/)([a-zA-Z0-9-]+)\)/g;
    while ((match = regex2.exec(markdown)) !== null) {
        links.push({ slug: match[1], type: 'missing-prefix' });
    }

    return links;
}

function getSuggestedFix(brokenSlug, validSlugs) {
    let closestMatch = null;
    let highestSimilarity = 0;

    for (const validSlug of validSlugs) {
        const similarity = countMatchingCharacters(brokenSlug, validSlug) / Math.max(brokenSlug.length, validSlug.length);
        if (similarity > highestSimilarity) {
            highestSimilarity = similarity;
            closestMatch = validSlug;
        }
    }

    return highestSimilarity > 0.4 ? closestMatch : 'none';
}

function countMatchingCharacters(str1, str2) {
    let matches = 0;
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
        if (str1[i] === str2[i]) matches++;
    }
    return matches;
}

async function auditLinks() {
    console.log("Starting enhanced service link audit...\n");
    const validSlugs = await getAllServiceSlugs();
    const fileNames = await fs.readdir(contentDir);
    const mdFiles = fileNames.filter(f => f.endsWith('.md'));

    let globalIssuesFound = false;

    for (const file of mdFiles) {
        const filePath = path.join(contentDir, file);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        const { data, content } = matter(fileContent);
        const links = extractLinks(content);

        let fileHasIssues = false;
        let errors = [];

        // Check body links
        for (const { slug, type } of links) {
            if (type === 'missing-prefix') {
                fileHasIssues = true;
                globalIssuesFound = true;
                errors.push(`      - Non-normalized: /${slug} (Should be /services/${slug})`);
            } else if (!validSlugs.has(slug)) {
                fileHasIssues = true;
                globalIssuesFound = true;
                const fix = getSuggestedFix(slug, validSlugs);
                errors.push(`      - Broken: /services/${slug}  |  Suggestion: /services/${fix}`);
            }
        }

        // Check frontmatter related
        if (data.related && Array.isArray(data.related)) {
            for (const relatedSlug of data.related) {
                if (!validSlugs.has(relatedSlug)) {
                    fileHasIssues = true;
                    globalIssuesFound = true;
                    const fix = getSuggestedFix(relatedSlug, validSlugs);
                    errors.push(`      - Frontmatter Broken: related: ${relatedSlug}  |  Suggestion: ${fix}`);
                }
            }
        }

        if (!fileHasIssues) {
            console.log(`✅ OK: ${file}`);
        } else {
            console.log(`❌ ISSUES: ${file} →`);
            errors.forEach(err => console.log(err));
        }
    }

    if (!globalIssuesFound) {
        console.log("\n✅ All service links are valid and normalized.");
    } else {
        console.log("\n❌ Audit complete. Issues were found.");
        process.exit(1);
    }
}

auditLinks().catch(err => {
    console.error(err);
    process.exit(1);
});
