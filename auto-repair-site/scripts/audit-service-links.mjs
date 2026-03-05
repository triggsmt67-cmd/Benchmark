import fs from 'fs/promises';
import path from 'path';

const contentDir = path.join(process.cwd(), 'src/content/services');

async function getAllServiceSlugs() {
    const files = await fs.readdir(contentDir);
    return new Set(
        files.filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, ''))
    );
}

function extractLinks(markdown) {
    const regex = /\[.*?\]\(\/services\/([a-zA-Z0-9-]+)\)/g;
    const links = [];
    let match;
    while ((match = regex.exec(markdown)) !== null) {
        links.push(match[1]);
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

    // If the similarity isn't good enough, assume no good suggestion.
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
    console.log("Starting service link audit...\n");
    const validSlugs = await getAllServiceSlugs();
    const fileNames = await fs.readdir(contentDir);
    const mdFiles = fileNames.filter(f => f.endsWith('.md'));

    let globalIssuesFound = false;

    for (const file of mdFiles) {
        const filePath = path.join(contentDir, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const links = extractLinks(content);

        let fileHasIssues = false;
        let errors = [];

        for (const slug of links) {
            if (!validSlugs.has(slug)) {
                fileHasIssues = true;
                globalIssuesFound = true;
                const fix = getSuggestedFix(slug, validSlugs);
                errors.push(`      - Broken: /services/${slug}  |  Suggestion: /services/${fix}`);
            }
        }

        if (!fileHasIssues) {
            console.log(`✅ OK: ${file} has no broken service links`);
        } else {
            console.log(`❌ BROKEN: ${file} →`);
            errors.forEach(err => console.log(err));
        }
    }

    if (!globalIssuesFound) {
        console.log("\n✅ All service links are valid.");
    } else {
        console.log("\n❌ Audit complete. Some broken links were found.");
    }
}

auditLinks().catch(console.error);
