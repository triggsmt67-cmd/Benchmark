import assert from 'node:assert/strict';
const base = process.argv[2] || 'http://127.0.0.1:3001';
const canonicalBase = 'https://www.benchmarkmissoula.com';
for (const path of ['/', '/services', '/services/electrical-diagnostics', '/service-areas/lolo', '/site-map', '/contact', '/services/brake-repair/missoula', '/guides/how-to-choose-a-mechanic']) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''), path);
    const html = await response.text();
    const headTags = html.match(/<(?:meta|link)\b[^>]*>/g) || [];
    assert.ok(!headTags.some(tag => /name="(?:robots|googlebot)"/.test(tag) && /noindex/.test(tag)), path);
    const canonical = headTags.filter(tag => /rel="canonical"/.test(tag));
    assert.equal(canonical.length, 1, path);
    assert.ok(canonical[0].includes(`href="${canonicalBase}${path === '/' ? '' : path}`), path);
    assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
    const motionTags = html.match(/<div\b[^>]*data-content-motion="true"[^>]*>/g) || [];
    assert.ok(motionTags.length > 0, `Missing content wrappers: ${path}`);
    assert.ok(motionTags.every(tag => !/opacity:\s*0(?:;|")/.test(tag)), `Hidden initial content: ${path}`);
    assert.match(html, /<details[^>]*class="md:hidden group"/);
    assert.match(html, /<summary[^>]*aria-label="Toggle Menu"/);
    if (path === '/') {
        assert.match(html, /href="\/services\/electrical-diagnostics"[^>]*>[\s\S]*?Electrical Diagnostics/);
        assert.ok(!html.includes('testing \\u2014 not guesswork'));
    }
    if (path === '/services/electrical-diagnostics') {
        assert.match(html, /When the problem happens matters/);
        assert.match(html, /MC-11024858-0001/);
        assert.match(html, /Request an Appointment/);
        assert.ok(!html.includes('Reviewed by ASE Master Technicians'));
        assert.ok(!html.includes('Above 50mA'));
        const graphs = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
        const webpage = graphs.flatMap(graph => graph['@graph'] || []).find(node => node['@type'] === 'WebPage');
        assert.ok(webpage && !webpage.reviewedBy && !webpage.lastReviewed);
    }
    if (path === '/services') {
        assert.match(html, /href="\/services\/engine-and-performance"/);
        assert.match(html, /Start Here/);
        assert.ok(!html.includes('Most Requested'));
        assert.ok(!html.includes('og-services.jpg'));
        assert.ok(!html.includes('Why Diagnostic Accuracy is the Foundation'));
        assert.match(html, /our diagnostic approach/);
        assert.match(html, /<noscript>[\s\S]*?service-directory-controls[\s\S]*?All services and guides/);
    }
    if (path === '/contact') {
        assert.match(html, /min-w-0 break-all/);
        assert.equal((html.match(/<main\b/g) || []).length, 1, 'Contact has one main landmark');
        assert.match(html, /Contact &amp; Service Requests in Missoula/);
        assert.match(html, /Sending the form requests an appointment/);
        assert.match(html, /Request an Appointment/);
        assert.match(html, /href="\/privacy"/);
        assert.ok(!html.includes('follow up promptly'));
    }
    if (path === '/service-areas/lolo') {
        assert.ok(!html.includes('(max-w-1024px)'));
        assert.match(html, /brake-suspension-evaluation/);
        assert.ok(!html.includes('Real photo placeholder:'));
        assert.ok(!html.includes('Suggested alt:'));
    }
    if (path === '/site-map') assert.match(html, /<title>Sitemap \| Benchmark Automotive Service<\/title>/);
    console.log(`PASS ${path}`);
}
for (const path of ['/indexing-check-missing', '/services/indexing-check-missing', '/services/brake-repair/not-a-real-city', '/services/electrical-diagnostics/missoula']) {
    assert.equal((await fetch(base + path)).status, 404, path);
    console.log(`PASS 404 ${path}`);
}

for (const path of ['/diagnostic_hero_bg_v2.png', '/images/Benchmark%20Automotive.webp', '/images/Inspection%20Bay.webp', '/images/electrical-diagnostics.jpg', '/apple-icon.png']) {
    const response = await fetch(base + path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get('content-type') || '', /^image\//, path);
    console.log(`PASS image ${path}`);
}

const optimizedImage = await fetch(base + '/_next/image?url=%2Fimages%2Fbrake-suspension-evaluation.webp&w=640&q=75');
assert.equal(optimizedImage.status, 200, 'Lolo optimized image');
assert.match(optimizedImage.headers.get('content-type') || '', /^image\//);
console.log('PASS optimized Lolo image');
