# 4 - If-Else

Im letzten Kapitel hast du den Roboter mit einer ersten `if`-Anweisung gesteuert. Nun schauen wir genau an, wie JavaScript Entscheidungen trifft und mehrere Möglichkeiten unterscheiden kann.

Die Schreibweise findest du auch im Abschnitt [If / Else](./8-cheatsheet#if-else) des Cheatsheets.

## Lernziele

Nach diesem Kapitel kannst du:

- mit `if` und `else` Entscheidungen programmieren,
- Entscheidungen mit `else if` aneinanderketten und
- Werte mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen.

## Rückblick: Die Steuerung aus dem Game Loop

Mit diesem Code bewegt sich der Roboter nur, wenn die rechte Pfeiltaste gedrückt ist:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 5, 0);
}
```

[`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) stellt die Frage, ob die Taste gerade gedrückt ist. [`if`](./8-cheatsheet#if-else) entscheidet, ob die Bewegung ausgeführt oder übersprungen wird. [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) bewegt den Roboter.

## Eine Bedingung wird geprüft

Eine `if`-Anweisung beginnt immer mit einer Bedingung:

```js
if (score >= 10) {
  statusText.textContent = "Gewonnen!";
}
```

JavaScript prüft zuerst `score >= 10`. Das Ergebnis kann nur **stimmen** oder **nicht stimmen**.

- Stimmt die Bedingung, wird der Code zwischen `{` und `}` ausgeführt.
- Stimmt sie nicht, wird dieser Code übersprungen.

Die Schreibweise von [`if`](./8-cheatsheet#if-else) und das Verändern mit [`textContent`](./8-cheatsheet#html-elemente-bearbeiten) findest du im Cheatsheet.

<details>
<summary>Analogie: Der Roboter steht an einer Kreuzung</summary>

Stell dir vor, der JavaScript-Roboter steht an einer Kreuzung. Auf einem Schild steht eine Frage: «Ist die rechte Pfeiltaste gedrückt?» Nur wenn die Antwort stimmt, darf er nach rechts fahren. Danach kommt er im nächsten Durchlauf wieder an dieselbe Kreuzung und prüft erneut.

</details>

## Vergleiche

Mit diesen Zeichen vergleichen wir Werte:

```js
score == 10  // gleich
score != 10  // nicht gleich
score > 10   // grösser als
score < 10   // kleiner als
score >= 10  // grösser oder gleich
score <= 10  // kleiner oder gleich
```

Die Vergleichszeichen findest du auch unter [If / Else](./8-cheatsheet#if-else) im Cheatsheet.

Besonders wichtig ist der Unterschied zwischen **Setzen** und **Vergleichen**:

```js
score = 10;  // setzt den Wert
score == 10  // vergleicht den Wert
```

Mit einem einzelnen `=` verändern wir einen Wert. Mit `==` fragen wir, ob zwei Werte gleich sind.

## Was macht `else`?

```js
if (timeLeft > 0) {
  statusText.textContent = "Spiel läuft";
} else {
  statusText.textContent = "Game Over";
}
```

`else` bedeutet **sonst**. Der erste Block wird ausgeführt, wenn die Bedingung stimmt. Andernfalls wird der zweite Block ausgeführt. Es wird immer genau einer der beiden Wege genommen.

Die Entscheidung ist unter [If / Else](./8-cheatsheet#if-else), das Verändern des Textes unter [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten) beschrieben.

## Mehrere Möglichkeiten mit `else if`

```js
if (score >= 20) {
  statusText.textContent = "Gold";
} else if (score >= 10) {
  statusText.textContent = "Silber";
} else {
  statusText.textContent = "Bronze";
}
```

JavaScript prüft von oben nach unten. Sobald eine Bedingung stimmt, wird der passende Block ausgeführt. Die restlichen Bedingungen dieser Kette werden übersprungen.

Darum ist die Reihenfolge wichtig: Die höhere Punktzahl wird zuerst geprüft. Die Befehle sind im Cheatsheet unter [If / Else](./8-cheatsheet#if-else) und [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten) erklärt.

## Kette oder mehrere einzelne `if`?

Eine Kette wählt genau einen passenden Weg:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 5, 0);
} else if (isKeyPressed("ArrowLeft")) {
  moveElement(robot, -5, 0);
}
```

Mehrere einzelne `if` werden unabhängig voneinander geprüft:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 5, 0);
}

if (isKeyPressed("ArrowUp")) {
  moveElement(robot, 0, 5);
}
```

Bei den einzelnen `if`-Anweisungen können beide Bedingungen im gleichen Durchlauf stimmen. Dann bewegt sich der Roboter gleichzeitig nach rechts und nach oben. Die Schreibweise steht im [Cheatsheet](./8-cheatsheet#if-else), die Befehle des Game Frameworks bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

Merke:

> `if` prüft eine Frage. `else if` stellt eine weitere Frage. `else` bestimmt, was in allen anderen Fällen passiert.

## Aufgaben

### 🎯 4.1 – Vergleiche lesen

Entscheide bei jedem Vergleich, ob er **stimmt** oder **nicht stimmt**:

```js
5 == 5
5 != 3
8 > 10
8 < 10
10 >= 10
7 <= 4
```

Die Bedeutung aller Vergleichszeichen findest du unter [If / Else](./8-cheatsheet#if-else) im Cheatsheet.

<details>
<summary>✅ Lösung anzeigen</summary>

| Vergleich | Ergebnis | Begründung |
| --- | --- | --- |
| `5 == 5` | stimmt | Beide Zahlen sind gleich. |
| `5 != 3` | stimmt | Die Zahlen sind nicht gleich. |
| `8 > 10` | stimmt nicht | `8` ist nicht grösser als `10`. |
| `8 < 10` | stimmt | `8` ist kleiner als `10`. |
| `10 >= 10` | stimmt | `10` ist grösser oder gleich `10`. |
| `7 <= 4` | stimmt nicht | `7` ist weder kleiner noch gleich `4`. |

</details>

### 🎯 4.2 – In vier Richtungen steuern

Erweitere die Steuerung aus Kapitel 3 zu einer `if`-Kette. Der Roboter soll mit allen vier Pfeiltasten gesteuert werden:

| Taste | Bewegung mit `moveElement(robot, x, y)` |
| --- | --- |
| `"ArrowRight"` | `5, 0` |
| `"ArrowLeft"` | `-5, 0` |
| `"ArrowUp"` | `0, 5` |
| `"ArrowDown"` | `0, -5` |

Verwende für die erste Richtung `if` und für jede weitere Richtung `else if`. Die Schreibweise findest du unter [If / Else](./8-cheatsheet#if-else). Die Tastennamen und Bewegungen sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) dokumentiert.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 5, 0);
  } else if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -5, 0);
  } else if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, 5);
  } else if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -5);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Den Game Loop findest du unter [Listen und Loops](./8-cheatsheet#listen-und-loops), die Bedingungen unter [If / Else](./8-cheatsheet#if-else) und die Bewegungsbefehle in der [Framework-Dokumentation](/jsgame/3-framework-docs).

</details>

### 🎯 4.3 – Ein Befehlsterminal im Kontrollraum

Ergänze in `index.html` direkt unter dem Element `#statusText` ein Eingabefeld und einen Button:

```html
<input id="commandInput" type="text" placeholder="Befehl eingeben" />
<button id="commandButton" type="button">Ausführen</button>
```

Damit erhält der Kontrollraum ein kleines Befehlsterminal. Wähle in `script.js` das Eingabefeld, den neuen Button und den Statustext mit [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) aus.

Füge dem Button mit [`addEventListener(...)`](./8-cheatsheet#events) ein Click Event hinzu. Wenn im Eingabefeld genau `alarm` steht, soll im Statustext `Alarm ausgelöst!` erscheinen. Den eingegebenen Text liest du mit [`value`](./8-cheatsheet#eingabefeld-auslesen).

<details>
<summary>💡 Tipp anzeigen</summary>

Die Bedingung vergleicht den Inhalt des Eingabefelds mit einem Text:

```js
if (commandInput.value == "alarm") {
  // Verändere hier den Statustext.
}
```

Die Befehle findest du unter [If / Else](./8-cheatsheet#if-else), [Eingabefeld auslesen](./8-cheatsheet#eingabefeld-auslesen) und [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let commandInput = document.querySelector("#commandInput");
let commandButton = document.querySelector("#commandButton");
let statusText = document.querySelector("#statusText");

commandButton.addEventListener("click", function () {
  if (commandInput.value == "alarm") {
    statusText.textContent = "Alarm ausgelöst!";
  }
});
```

Alle verwendeten Befehle findest du im Cheatsheet unter [HTML-Elemente auswählen](./8-cheatsheet#html-elemente-auswahlen), [Events](./8-cheatsheet#events), [If / Else](./8-cheatsheet#if-else), [Eingabefeld auslesen](./8-cheatsheet#eingabefeld-auslesen) und [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten).

</details>

### 🎯 4.4 – Unbekannter Befehl

Ergänze die Bedingung des Befehlsterminals mit `else`. Wenn nicht `alarm` eingegeben wurde, soll im Statustext `Befehl unbekannt.` erscheinen.

Teste mindestens diese Eingaben:

- `alarm`
- `start`
- ein leeres Eingabefeld

Die Schreibweise von [`if` und `else`](./8-cheatsheet#if-else) findest du im Cheatsheet.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
commandButton.addEventListener("click", function () {
  if (commandInput.value == "alarm") {
    statusText.textContent = "Alarm ausgelöst!";
  } else {
    statusText.textContent = "Befehl unbekannt.";
  }
});
```

Die Befehle sind unter [Events](./8-cheatsheet#events), [If / Else](./8-cheatsheet#if-else), [Eingabefeld auslesen](./8-cheatsheet#eingabefeld-auslesen) und [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten) dokumentiert.

</details>

### 🚀 Bonus – Mehrere Roboterbefehle

Erweitere das Befehlsterminal mit `else if`. Programmiere mindestens vier dieser Befehle:

- `rechts`: Roboter 50 Pixel nach rechts bewegen
- `links`: Roboter 50 Pixel nach links bewegen
- `hoch`: Roboter 50 Pixel nach oben bewegen
- `runter`: Roboter 50 Pixel nach unten bewegen
- `alarm`: Weltraum-Szene rot färben
- `normal`: Weltraum-Szene wieder dunkelblau färben

Bei jedem erkannten Befehl soll ein passender Statustext erscheinen. Für alle anderen Eingaben bleibt `Befehl unbekannt.` im `else`-Block stehen.

Verwende nur Befehle, die du bereits kennst: [Elemente auswählen](./8-cheatsheet#html-elemente-auswahlen), [Events](./8-cheatsheet#events), [If / Else](./8-cheatsheet#if-else), [`value`](./8-cheatsheet#eingabefeld-auslesen), [Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

<details>
<summary>💡 Tipp anzeigen</summary>

Beginne mit einer Kette und ergänze einen Befehl nach dem anderen:

```js
if (commandInput.value == "rechts") {
  moveElement(robot, 50, 0);
  statusText.textContent = "Roboter fährt nach rechts.";
} else if (commandInput.value == "links") {
  // Zweiter Befehl
} else {
  statusText.textContent = "Befehl unbekannt.";
}
```

Die Entscheidung steht im [Cheatsheet](./8-cheatsheet#if-else), die Bewegung in der [Framework-Dokumentation](/jsgame/3-framework-docs#moveelement).

</details>
