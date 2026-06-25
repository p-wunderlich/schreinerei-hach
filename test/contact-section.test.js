const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("assets/styles/styles.css", "utf8");

const contactSectionMatch = html.match(/<section id="kontakt"[\s\S]*?<\/section>/);
assert.ok(contactSectionMatch, "contact section exists");

const contactSection = contactSectionMatch[0];
assert.match(contactSection, /class="contact-layout"/, "contact section uses a two-zone layout");
assert.match(contactSection, /class="contact-intro"/, "contact section has an intro block");
assert.match(contactSection, /class="contact-panel"/, "contact section has a styled form panel");
assert.match(contactSection, /class="contact-card-list"/, "contact section groups direct contact options");

assert.match(contactSection, /<form class="contact-form"/, "contact form exists");
for (const field of ["name", "email", "message"]) {
    assert.match(contactSection, new RegExp(`\\b(?:id|name)="${field}"`), `${field} field exists`);
    assert.match(contactSection, new RegExp(`\\b(?:id|name)="${field}"[\\s\\S]*?required|required[\\s\\S]*?\\b(?:id|name)="${field}"`), `${field} field is required`);
}

assert.match(contactSection, /href="tel:\+4961314827226"/, "landline is clickable");
assert.match(contactSection, /href="tel:\+4917663241527"/, "mobile number is clickable");
assert.match(contactSection, /href="mailto:info@schreinerei-hach\.com"/, "email is clickable");

for (const className of ["contact-layout", "contact-intro", "contact-panel", "contact-form-grid", "contact-card", "contact-submit"]) {
    assert.match(css, new RegExp(`\\.${className}\\b`), `${className} styles exist`);
}

assert.match(css, /@media\s*\(max-width:\s*768px\)[\s\S]*\.contact-layout/, "contact layout has mobile styles");
