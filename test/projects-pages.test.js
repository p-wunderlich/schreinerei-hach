const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/styles/styles.css", "utf8");

assert.doesNotMatch(html, /href="#referenzen"/, "navigation no longer links to references");
assert.doesNotMatch(html, /<section id="referenzen"/, "references section was removed");

const projectsSectionMatch = html.match(/<section id="projekte"[\s\S]*?<\/section>/);
assert.ok(projectsSectionMatch, "projects section exists");

const projectsSection = projectsSectionMatch[0];
const projectCards = [...projectsSection.matchAll(/<a\b[^>]*class="[^"]*\bproject-card\b[^"]*"[^>]*href="([^"]+\.html)"[\s\S]*?<\/a>/g)];
assert.equal(projectCards.length, 6, "projects section contains six linked project cards");

for (const card of projectCards) {
    assert.match(card[0], /<img\b[^>]*alt="[^"]+"/, "each project card has a preview image with alt text");
    assert.match(card[0], /<h3>[^<]+<\/h3>/, "each project card has a heading");
}

const projectPages = projectCards.map(card => card[1]);
assert.equal(new Set(projectPages).size, 6, "each project card links to a unique project page");

for (const pagePath of projectPages) {
    assert.ok(fs.existsSync(pagePath), `${pagePath} exists`);
    const page = fs.readFileSync(pagePath, "utf8");

    assert.match(page, /<link rel="stylesheet" href="assets\/styles\/styles\.css">/, `${pagePath} uses shared stylesheet`);
    assert.match(page, /<nav>[\s\S]*index\.html#projekte[\s\S]*<\/nav>/, `${pagePath} keeps the shared menu with project anchor`);
    assert.match(page, /<main class="project-detail">/, `${pagePath} contains a project detail layout`);
    assert.match(page, /<div class="project-gallery"/, `${pagePath} contains a gallery`);
    assert.match(page, /<img\b[^>]*class="[^"]*\bzoomable\b[^"]*"[^>]*alt="[^"]+"/, `${pagePath} has zoomable gallery images with alt text`);
    assert.match(page, /<script src="assets\/scripts\/lightbox\.js"><\/script>/, `${pagePath} uses the shared lightbox script`);
}

assert.ok(fs.existsSync("assets/scripts/lightbox.js"), "shared lightbox script exists");
assert.match(css, /\.project-grid/, "project grid styles exist");
assert.match(css, /\.project-card/, "project card styles exist");
assert.match(css, /\.project-detail/, "project detail styles exist");
assert.match(css, /\.project-gallery/, "project gallery styles exist");
assert.match(css, /@media\s*\(max-width:\s*768px\)[\s\S]*\.project-grid/, "project grid has mobile styles");
