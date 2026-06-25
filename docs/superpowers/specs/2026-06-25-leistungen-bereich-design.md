# Leistungen-Bereich Design

## Ziel

Der aktuelle Leistungen-Bereich wirkt zu leer, weil er nur aus einer kurzen Liste besteht. Der neue Bereich soll sofort verständlich machen, wofür Schreinerei Hach im privaten Wohnumfeld angefragt werden kann: individuelle Schreinerarbeiten fuer Zuhause, mit handwerklicher Umsetzung im Bestand.

## Umfang

Diese Aenderung betrifft nur den Abschnitt `#leistungen` auf der Homepage `index.html` und die zugehoerigen Styles in `assets/styles/styles.css`.

Nicht im Umfang:

- Neue Projektseiten
- Neue Bilder oder Bildbearbeitung
- Aenderungen an Kontaktformular, Navigation oder Projektbereich
- JavaScript-Erweiterungen

## Inhaltliche Richtung

Der Bereich wird nicht als gleichwertige Leistungsliste aufgebaut. Stattdessen bekommt er einen starken Hauptblock mit dem Leitmotiv:

> Individuelle Schreinerarbeiten fuer Zuhause

Der Text darunter soll konkret und lokal wirken. Er erklaert in 2-3 Saetzen, dass es um passgenaue Loesungen, Arbeiten im Bestand und saubere Abstimmung von Moebeln, Innenausbau, Boden und Renovierung geht.

Darunter oder daneben folgen drei kompakte Leistungskacheln:

1. `Moebel nach Mass`
   - Einbauten
   - Stauraum
   - Sonderloesungen fuer vorhandene Raeume

2. `Innenausbau & Montage`
   - Decken
   - Verkleidungen
   - Anschluesse und handwerkliche Details

3. `Boden & Renovierung`
   - Bodenverlegung
   - Modernisierung
   - Koordination vor Ort

Ein kurzer Call-to-Action fuehrt zum Kontaktbereich:

`Projekt anfragen`

## Layout

Desktop:

- Zweispaltiger Aufbau
- Links ein dunkler Hauptblock mit Ueberschrift, Beschreibung und Kontakt-Link
- Rechts drei helle, kompakte Kacheln
- Die Kacheln sollen wie konkrete Angebotsbereiche wirken, nicht wie dekorative Infoboxen

Mobile:

- Alle Elemente werden einspaltig untereinander angezeigt
- Der Hauptblock kommt zuerst
- Danach folgen die drei Kacheln
- Der Kontakt-Link bleibt direkt im Hauptblock sichtbar

## Visuelle Anforderungen

- Bestehende Farbwelt weiterverwenden: dunkles Grau und Gold/Bronze aus den vorhandenen CSS-Variablen
- Keine neue Bildsprache und keine Icon-Abhaengigkeit
- Kacheln mit ruhiger Umrandung, kleinem Radius und klarer Typografie
- Der Bereich soll dichter und wertiger wirken, aber nicht wie eine Marketing-Landingpage
- Genug Abstand zwischen Hauptblock und Kacheln, damit die Struktur auf kleinen Bildschirmen nicht gedrueckt wirkt

## Technische Umsetzung

- HTML in `index.html` semantisch erweitern
- Vorhandene `section#leistungen` beibehalten, damit Navigation und Anker unveraendert funktionieren
- Neue Klassen fuer den Leistungen-Bereich einfuehren, zum Beispiel:
  - `.services-layout`
  - `.services-highlight`
  - `.services-list`
  - `.service-item`
- CSS bleibt in `assets/styles/styles.css`
- Keine neuen Libraries
- Kein neues JavaScript

## Test- und Pruefpunkte

- Homepage laedt ohne Layout-Bruch
- Navigation zu `#leistungen` funktioniert weiterhin
- Mobile Ansicht unter 768px ist einspaltig und lesbar
- Text laeuft nicht aus Kacheln oder Button
- Bestehende Homepage-Tests bleiben gruen
- Manuelle Browser-Pruefung auf Desktop und Mobile empfohlen

## Entscheidung

Die gewaehlt Richtung ist Variante B aus der visuellen Abstimmung: ein Schwerpunktblock plus Nebenleistungen. Der Schwerpunkttext wird jedoch nicht als `Innenausbau & Renovierung aus einer Hand`, sondern als `Individuelle Schreinerarbeiten fuer Zuhause` formuliert.
