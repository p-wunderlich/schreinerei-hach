# Leistungen-Bereich Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the sparse homepage services list with a stronger `Individuelle Schreinerarbeiten fuer Zuhause` section using a highlight block, three service tiles, and a contact call-to-action.

**Architecture:** Keep the static site architecture unchanged. Modify only `index.html`, `assets/styles/styles.css`, and add one focused Node assertion test for the services section structure.

**Tech Stack:** Static HTML5, CSS3, Node built-in `assert` and `fs` test scripts, no build tooling.

---

## File Structure

- Modify `index.html`: Replace the `#leistungen` unordered list with semantic service highlight and service tile markup.
- Modify `assets/styles/styles.css`: Add scoped styles for the new services layout and mobile behavior.
- Create `test/services-section.test.js`: Assert the new copy, structure, CTA anchor, and CSS hooks exist.

## Task 1: Add failing services-section test

**Files:**
- Create: `test/services-section.test.js`

- [ ] **Step 1: Write the failing test**

Create `test/services-section.test.js`:

```js
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node test/services-section.test.js`

Expected: FAIL with an assertion that the new main headline is missing.

## Task 2: Implement services HTML and CSS

**Files:**
- Modify: `index.html`
- Modify: `assets/styles/styles.css`

- [ ] **Step 1: Replace services section HTML**

Replace the current `section#leistungen` list with a `.services-layout`, `.services-highlight`, `.services-list`, and three `.service-item` articles. Keep the existing `id="leistungen"`.

- [ ] **Step 2: Add scoped CSS**

Add desktop styles for the two-column layout and tile presentation. Add mobile styles inside the existing `@media (max-width: 768px)` block so the layout becomes one column.

- [ ] **Step 3: Run the services test**

Run: `node test/services-section.test.js`

Expected: PASS.

## Task 3: Regression verification

**Files:**
- Test: `test/homepage-carousel.test.js`
- Test: `test/projects-pages.test.js`
- Test: `test/services-section.test.js`

- [ ] **Step 1: Run all Node assertion tests**

Run:

```bash
node test/homepage-carousel.test.js
node test/projects-pages.test.js
node test/services-section.test.js
```

Expected: all commands exit `0`.

- [ ] **Step 2: Inspect final diff**

Run: `git diff -- index.html assets/styles/styles.css test/services-section.test.js`

Expected: diff only contains the services-section implementation and focused test.
