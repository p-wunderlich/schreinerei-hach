const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/styles/styles.css", "utf8");

const servicesSectionMatch = html.match(/<section id="leistungen"[\s\S]*?<\/section>/);
assert.ok(servicesSectionMatch, "services section exists");

const servicesSection = servicesSectionMatch[0];
assert.match(servicesSection, /Individuelle Schreinerarbeiten f(?:ü|&uuml;|ue)r Zuhause/, "services section has the new main headline");
assert.match(servicesSection, /href="#kontakt"[\s\S]*Projekt anfragen/, "services section links to contact");
assert.doesNotMatch(servicesSection, /<ul>[\s\S]*<li>M(?:ö|&ouml;|oe)bel nach Ma(?:ß|&szlig;|ss)<\/li>/, "old plain services list was replaced");

const serviceItems = [...servicesSection.matchAll(/<article class="service-item">[\s\S]*?<\/article>/g)];
assert.equal(serviceItems.length, 3, "services section contains three service tiles");

for (const title of ["Möbel nach Maß", "Innenausbau & Montage", "Boden & Renovierung"]) {
    assert.match(servicesSection, new RegExp(title), `services section contains ${title}`);
}

for (const className of ["services-layout", "services-highlight", "services-list", "service-item", "services-cta"]) {
    assert.match(css, new RegExp(`\\.${className}\\b`), `${className} styles exist`);
}

assert.match(css, /@media\s*\(max-width:\s*768px\)[\s\S]*\.services-layout/, "services layout has mobile styles");
