# 9 - Übungen

In diesem Kapitel gibt es Übungen, um die verschiedenen Konzepte zu vertiefen. Zur guten Vorbereitung, versuche, die KI wenig einzusetzen und wenn, dann nur zum Verständnis. Überlege dir jeweils, was du brauchst und schaue die Befehle im [Cheatsheet](./10-cheatsheet) nach.

Übungen mit \*, \*\* oder \*\*\* gekennzeichnet:

\* = einfcher
\*\* = schwieriger
\*\*\* = schwierig

## 1 - Der Einkaufswagen \*\*\*

👉 [Projekt herunterladen](/assets/zips/uebung-1-einkaufswagen.zip)

Wir haben folgendes HTML. Schau dir das HTML an, öffne es im Liveserver und versuche, das Javascript dazu zu schreiben. Das Ziel ist es, dass durch Klick auf den Knopf "In den Warenkorb", die Zahl der Artikel im Warenkorb eins nach oben geht.

`index.html`

<<< @/projects/uebung-1-einkaufswagen/index.html

`script.js`

<<< @/projects/uebung-1-einkaufswagen/script.js

## 2 - Instagram \*\*\*

👉 [Projekt herunterladen](/assets/zips/uebung-2-instagram.zip)

Wir haben folgendes HTML. Schau dir das HTML an, öffne es im Liveserver und versuche, das Javascript dazu zu schreiben. Das Ziel ist es, dass durch Klick auf den Knopf "Like", die Zahl an Likes um eins zu vergrössern.

`index.html`

<<< @/projects/uebung-2-instagram/index.html

`script.js`

<<< @/projects/uebung-2-instagram/script.js

## 3 - Quizz \*\*\*

👉 [Projekt herunterladen](/assets/zips/uebung-3-quiz-spanien.zip)

Wir haben folgendes HTML. Schau dir das HTML an, öffne es im Liveserver und versuche, das Javascript dazu zu komplettieren. Das ziel ist es, dass nach einem Klick auf den Knopf "Prüfen" in der Auswertung 'Richtig!' steht, wenn im Textfeld 'Madrid' eingegeben wurde. Sonst soll 'Falsch' erscheinen.

`index.html`

<<< @/projects/uebung-3-quiz-spanien/index.html

`script.js`

<<< @/projects/uebung-3-quiz-spanien/script.js

Die Funktion `showAnswer()` ist schon vorbereitet. Sie liest mit [`.value`](./10-cheatsheet#html-elemente-bearbeiten) den Text, der im Textfeld steht, und gibt ihn mit [`console.log(...)`](./10-cheatsheet#debugging) in der Konsole aus. Tippe eine Antwort ein, klicke auf "Prüfen" und schaue in der Konsole nach.

Damit wir mit der Antwort weiterarbeiten können, speichern wir sie in einer [Variable](./10-cheatsheet#variablen):

```js
let answer = answerInput.value;
```

Jetzt steht in `answer` der Text aus dem Textfeld, zum Beispiel `"Madrid"`. Diese Variable kannst du in einem [`if`](./10-cheatsheet#if-else) mit `==` vergleichen und danach mit [`textContent`](./10-cheatsheet#html-elemente-bearbeiten) die Auswertung anzeigen.

Wichtig: Die Zeile muss **in** der Funktion stehen. Sonst liest JavaScript das Textfeld nur einmal beim Laden der Seite, wenn es noch leer ist.

## 4.1 - Dark mode knopf \*\*

👉 [Projekt herunterladen](/assets/zips/uebung-4-darkmode.zip)

Wir haben folgendes HTML. Schau dir das HTML an, öffne es im Liveserver und versuche, das Javascript dazu zu komplettieren. Das ziel ist es, dass wenn wir auf den Knopf drücken, soll die Website im Darkmode erscheinen. Das heisst: Der Hintergrund scharz und der Text weiss.

`index.html`

<<< @/projects/uebung-4-darkmode/index.html

`script.js`

<<< @/projects/uebung-4-darkmode/script.js

## 4.2 - Dark mode knopf \*\*\*

Erweitere die Aufgabe aus 4.1 so, dass der Knopf wie ein Switch funktioniert: 1x drücken -> Dark mode geht and. Beim nächsten mal drücken -> Dark mode geht off. Hinweis: Du kannst eine Variable verwenden, welche zwischen 0 und 1 wechselt.
