import fs from 'fs/promises';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

async function processDirectory(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name);
            if (['.tsx', '.ts', '.md', '.json', '.js', '.mjs', '.css'].includes(ext)) {
                await processFile(fullPath);
            }
        }
    }
}

async function processFile(filePath) {
    try {
        const content = await fs.readFile(filePath, 'utf-8');
        if (content.includes('—')) {
            // Replace any em-dash with optional surrounding whitespace with a normalized " - "
            const newContent = content.replace(/\s*—\s*/g, ' - ');
            await fs.writeFile(filePath, newContent, 'utf-8');
            console.log(`Updated: ${path.relative(process.cwd(), filePath)}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
    }
}

async function main() {
    console.log(`Scanning directory: ${srcDir}`);
    await processDirectory(srcDir);
    console.log('Done!');
}

main().catch(console.error);
