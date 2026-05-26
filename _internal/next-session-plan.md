# afd-check light-riso, Plan für die nächste Session

**Stand:** 2026-05-26. Basis: 4x5-Persona-Panel auf der light-riso-Storyline (Dashboard: `_panel/panel-feedback.html`). Produktion v3 auf afd-check.de unverändert. light-riso ist eine unshipped Exploration, 3 Varianten (1-subtle / 2-medium / 3-bold) + Picker in `light-riso/`.

## Zuerst entscheiden (blockt den Rest)
**Welche Variante wird die Basis?** 1-subtle, 2-medium oder 3-bold. Alle Fixes unten werden auf die gewählte Variante gebaut (oder weiter auf alle 3, falls der Vergleich erhalten bleiben soll). Empfehlung: eine wählen, dann fokussiert härten. Panel-Review nutzte 2-medium als Referenz.

## Die Fixes, nach Wirkung (Panel-Quelle in Klammern)

### 1. Wertende Urteilsfelder neutralisieren [A, B, D] HÖCHSTER HEBEL
Der eine Eingriff, der drei Panels gleichzeitig entschärft. Die Felder `pattern`, `consequence`, `question` in `guide-data.js` (bzw. inline GUIDE_DATA der Varianten) verkaufen Meinung als Fakt, während die Seite mit „Keine Meinung, nur Abstimmungen" wirbt.
- Streichen ODER strikt auf belegte Verhaltensbeschreibung umstellen: kein Motiv, keine Suggestivfrage, keine wertenden Adjektive.
- Beispiele zum Entschärfen: „Härte ohne System löst nichts" (Urteil), „Angst mobilisiert Stimmen" (security), „Die Entlastung fließt nach oben. Immer." (establishment), Suggestivfragen wie „stolz auf ein Deutschland mit SA-Parolen?".
- Test: würde ein neutraler Beobachter den Satz als Faktum oder als Wertung lesen. Nur Faktum bleibt.

### 2. Sichtbare Methodik- und Transparenz-Seite [B, D]
Einziges glattes „unzulässig" im Faktencheck-Panel. Aktuell kein Autor prominent, kein Datum, keine offengelegte Auswahllogik.
- Autor/Impressum prominent (nicht nur Footer-Link), Aktualisierungsdatum.
- Auswahlkriterien der Abstimmungen offenlegen (warum diese 3-4, wie ausgewählt).
- Dokumentierte Lücken für den Leser sichtbar machen, nicht nur im Datenfile, z. B. „Grundsatzprogramm 2016 enthält kein Rentenkonzept" (steht bisher nur in `program-quotes-coverage.md`).

### 3. Evidenz ausbalancieren und sauber kategorisieren [B, D]
- Eigene AfD-Gegenanträge als gleichwertige Belege in Beat 4 zeigen, nicht fast nur Nein-Stimmen.
- Thema **patriotism**: die „votes" sind Gerichtsurteile und Verfassungsschutz-Vorgänge, keine Abstimmungen. Kategorie umtaggen oder trennen, sonst sprengt es die „so stimmt sie ab"-Logik.
- Prüfen, ob n=3-4 Abstimmungen das jeweilige Urteil tragen, sonst Urteil zurücknehmen oder Evidenz erweitern.

### 4. „Fairerweise" wirklich offen lassen [A, B]
Beat 5 nennt reale Zugeständnisse, aber Beat 6/7 entkräften sie sofort. Der Wähler merkt, dass das Spiel feststeht.
- Mindestens einige Themen ohne abschließende Abwertung enden lassen.
- Das Zugeständnis stehen lassen, nicht im selben Atemzug zurücknehmen.

### 5. Accessibility auf AA [C] (P0)
- Collapsibles („Die Zahlen im Kontext", „Frag dich selbst") von `div onclick` auf `<button aria-expanded>` mit Tastatur-Fokus umstellen.
- `--text-muted` von #78716C auf rund #665F58 abdunkeln (von ~4.0:1 auf ~4.6:1 gegen die Creme).

### 6. Schnell-Leser bedienen [A, C]
Tobias (Nichtwähler, Schnell-Leser) steigt nach Beat 3 aus. Beat 3 (zwei lange Zitate) und Beat 4 (vier Vote-Karten) sind Textwände.
- Beat 3/4 straffen: Zusatz-Votes und zweites Programmzitat hinter ein „mehr" klappen.
- Ein einzeiliges Fazit pro Thema ganz oben für Scanner.

### 7. Wayfinding schließen [C]
- Scroll-Hinweis/Edge-Fade an der Topic-Pill-Reihe (scrollt sonst unsichtbar).
- Positionsanzeige „Thema X von 10".
- Am letzten Thema ein Rückweg statt Sackgasse (`Nächstes Thema` verschwindet aktuell ersatzlos).

## Kosmetisch
- `_panel/panel-feedback.html` nutzt ASCII-transliterierte Umlaute (Waehler statt Wähler). Auf nativ umstellen, wenn das Dashboard geteilt wird.

## Verifikation für die nächste Session
Pro geänderter Variante mit frischem headless Chromium (NICHT CDP 9222, stale lehrjahre.com Service-Worker) gegen lokalen `python3 -m http.server`, Viewport 430x900: helle Creme, Barlow Condensed löst auf, ein Akzent, 7-Beat-Reihenfolge intakt, Programmzitate mit nativen Umlauten, neue Buttons keyboard-fokussierbar, null Console-Fehler. Danach `/project-checkpoint`.
