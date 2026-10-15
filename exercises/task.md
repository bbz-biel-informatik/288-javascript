# Transferaufgabe: Mini-Shop

Du machst einen kleinen Shop interaktiv: Drei Produkte stehen bereit, der Warenkorb zeigt **0** und unten steht eine Begrüssung.

Öffne `index.html` im Browser und schreibe deinen Code in `script.js`. HTML und CSS sind vorbereitet. Speichere nach jeder Änderung und lade die Seite neu. Beim Neuladen beginnt der Shop wieder bei 0.

Du musst die Befehle nicht auswendig kennen. Verwende jeweils das Cheatsheet:
[Cheatsheet](https://bbz-biel-informatik.github.io/288-javascript/modul/9-cheatsheet)

## 1. Events und HTML-Elemente auswählen

**a**) Wenn du auf «Kaufen» klickst, soll der Kauf im Status angezeigt werden. Beginne mit dem T-Shirt und ergänze danach die beiden anderen Kaufen-Buttons. Zum Beispiel soll folgendes in der Anzeige stehen:

- Klick auf T-shirt: "T-shirt wurde gekauft"
- Klick auf Sneaker: "Sneaker wurde gekauft"
- Klick auf Rucksack: "Rucksack wurde gekauft"

> **Tipp:** Wähle zuerst den Button aus, dann füge die Ereignisbehandlung hinzu. Wähle auch den Statustext aus und ändere seinen Inhalt beim Klick.

**b**) Welche Befehle hast du verwendet, um den Button auszuwählen, auf den Klick zu reagieren und den Text zu verändern? Erkläre ihre Aufgaben kurz in eigenen Worten.

## 2. Variablen

**a)** Erstelle eine **neue** Variable `anzahlArtikel`, die bei **0** startet. Jeder Klick auf einen Kaufen-Button erhöht sie um **1**. Zeige die aktuelle Anzahl oben im Warenkorb an. Auch mehrmaliges Kaufen desselben Produkts zählt jedes Mal dazu.

> **Anspruchsvoll:** Diese Aufgabe kombiniert Variablen, Events und HTML-Veränderungen. In einer Prüfung würde die Frage einfacher lauten, wie in b).

**b) Erklären:** Zeige an deinem Code ein Beispiel für eine Variable: Wie definierst du sie und wie veränderst du ihren Wert? Wozu verwendest du die Zahl 0?

## 3. if / else

**a)** Prüfe nach jedem Kauf die neue Anzahl. Bei **mehr als 5 Artikeln** soll im Status **«Hast du genug Geld?»** stehen. Sonst erscheint **«Zum Warenkorb hinzugefügt.»**. Verwende dafür `if`. Wichtig ist hier einerseits das if statement, aber auch "wo" wir das platzieren. Es kann sein, dass du das pro Knopf definieren musst.

**b)** Teste mit genau **5** und danach mit **6** Artikeln. Welche Meldung erscheint jeweils? Erkläre in worten, was das if / else statement beschreibt: "wenn ..., dann ..."
