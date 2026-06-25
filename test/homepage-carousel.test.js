const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/styles/styles.css", "utf8");

const startSectionMatch = html.match(/<section id="start"[\s\S]*?<\/section>/);
assert.ok(startSectionMatch, "start section exists");

const startSection = startSectionMatch[0];
const carouselMatch = startSection.match(/<div class="intro-carousel"[\s\S]*?<\/div>/);
assert.ok(carouselMatch, "start section contains an intro carousel");

const carousel = carouselMatch[0];
const carouselImages = [...carousel.matchAll(/<img\b[^>]*class="[^"]*\bzoomable\b[^"]*"[^>]*>/g)];
assert.equal(carouselImages.length, 4, "intro carousel contains four zoomable images");

for (const image of carouselImages) {
    assert.match(image[0], /\balt="[^"]+"/, "each carousel image has alt text");
}

assert.match(css, /\.intro-carousel-track\s*\{[\s\S]*animation:\s*intro-carousel/, "carousel track is animated");
assert.match(css, /@keyframes\s+intro-carousel/, "carousel keyframes exist");
assert.match(css, /prefers-reduced-motion:\s*reduce/, "reduced motion users are respected");
