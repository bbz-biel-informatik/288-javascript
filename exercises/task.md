# Transferaufgabe: Mini-Shop

Du machst einen kleinen Shop interaktiv: Drei Produkte stehen bereit, der Warenkorb zeigt **0** und unten steht eine Begrüssung.

Öffne `index.html` im Browser und schreibe deinen Code in `script.js`. HTML und CSS sind vorbereitet. Speichere nach jeder Änderung und lade die Seite neu. Beim Neuladen beginnt der Shop wieder bei 0.

## 1. Events und HTML-Elemente auswählen

**a**) Wenn du auf «Kaufen» klickst, soll unten im Status **«Zum Warenkorb hinzugefügt.»** stehen. Beginne mit dem T-Shirt und ergänze danach die beiden anderen Kaufen-Buttons.

> **Tipp:** Wähle zuerst den Button aus, dann füge die Ereignisbehandlung hinzu. Wähle auch den Statustext aus und ändere seinen Inhalt beim Klick.

**b**) Welche Befehle hast du verwendet, um den Button auszuwählen, auf den Klick zu reagieren und den Text zu verändern? Erkläre ihre Aufgaben kurz in eigenen Worten.

**Cheatsheet:** [HTML auswählen: `document.querySelector()`](../docs/content/modul/9%20-%20Cheatsheet.md#html-elemente-auswählen), [Events: `addEventListener("click", function (event) { … })`](../docs/content/modul/9%20-%20Cheatsheet.md#events), [Text ändern: `textContent`](../docs/content/modul/9%20-%20Cheatsheet.md#html-elemente-bearbeiten).

## 2. Variablen

**a)** Erstelle eine Variable `anzahlArtikel`, die bei **0** startet. Jeder Klick auf einen Kaufen-Button erhöht sie um **1**. Zeige die aktuelle Anzahl oben im Warenkorb an. Auch mehrmaliges Kaufen desselben Produkts zählt jedes Mal dazu.

> **Anspruchsvoll:** Diese Aufgabe kombiniert Variablen, Events und HTML-Veränderungen. In einer Prüfung würde die Frage einfacher lauten, wie in b).

**b) Erklären:** Zeige an deinem Code ein Beispiel für eine Variable: Wie definierst du sie und wie veränderst du ihren Wert? Wozu verwendest du die Zahl 0?

## 3. if / else

**a)** Prüfe nach jedem Kauf die neue Anzahl. Bei **mehr als 5 Artikeln** soll im Status **«Hast du genug Geld?»** stehen. Sonst erscheint **«Zum Warenkorb hinzugefügt.»**. Verwende dafür `if` und `else` und ersetze damit die bisherige Statusmeldung aus Aufgabe 1.

**b)** Teste mit genau **5** und danach mit **6** Artikeln. Welche Meldung erscheint jeweils? Erkläre in worten, was das if / else statement beschreibt: "wenn ..., dann ..."
