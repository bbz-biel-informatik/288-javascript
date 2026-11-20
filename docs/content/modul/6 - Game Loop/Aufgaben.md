# 6 - Aufgaben: Game Loop

👉 [Übungen herunterladen](/assets/zips/uebungen-6-game-loop.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html`. Die Übung verwendet das [Game Framework](/jsgame/3-framework-docs). Es ist in der `index.html` bereits eingebunden.

Du arbeitest an **einem einzigen Projekt**. Die drei Aufgaben bauen aufeinander auf: Dein Code aus 6.1 bleibt stehen und wird in 6.2 und 6.3 erweitert. Geschrieben wird alles in der `script.js`.

Das Spielfeld enthält nur den Roboter und ein Alien. Es gibt keine Knöpfe. Alles, was passiert, steuerst du im Game Loop.

`index.html`

<<< @/projects/uebungen-6-game-loop/index.html

## 🎯 6.1 – Den Roboter bewegen

**a)** Lass den Roboter automatisch von links nach rechts fliegen. Gehe so vor:

- Wähle den Roboter mit [`document.querySelector(...)`](../10-cheatsheet#html-elemente-auswahlen) aus.
- Setze ihn mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition) an eine Startposition.
- Erstelle den Game Loop wie im [Aufbau eines Game Loops](./inhalt#aufbau-eines-game-loops).
- Bewege ihn im Game Loop mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let player = document.querySelector("#player");

// Startposition: 50 Pixel von links, 85 Pixel von unten
setPosition(player, 50, 85);

function gameLoop() {
  // Bei jedem Durchlauf 2 Pixel nach rechts
  moveElement(player, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

**b)** Verändere die Zahlen im `moveElement(...)` nacheinander so, dass Folgendes geschieht:

- Der Roboter fliegt nach oben.
- Der Roboter fliegt diagonal nach oben rechts.
- Der Roboter fliegt sehr schnell nach rechts.
- Der Roboter fliegt nach unten. Tipp: Verändere die Anfangsposition, um den Effekt zu sehen.
- Der Roboter fliegt sehr langsam nach unten.
- Der Roboter fliegt nach links.

> Denke dabei visuell und stelle dir das Spielfeld als Koordinatensystem vor.

<details>
<summary>✅ Lösung anzeigen</summary>

Teste jeweils nur eine der folgenden Zeilen im Game Loop:

```js
moveElement(player, 0, 2); // nach oben
moveElement(player, 2, 2); // diagonal nach oben rechts
moveElement(player, 20, 0); // sehr schnell nach rechts
moveElement(player, 0, -2); // nach unten
moveElement(player, 0, -0.5); // sehr langsam nach unten
moveElement(player, -2, 0); // nach links
```

Wie sich die drei Angaben des Befehls auswirken, findest du bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

</details>

**c) Erklären:** Warum steht `setPosition(...)` **vor** dem Game Loop und nicht darin? Teste es und beschreibe, was passiert.

## 🎯 6.2 – Den Roboter mit Tasten steuern

Jetzt soll der Roboter nicht mehr von selbst fliegen, sondern auf die Pfeiltasten reagieren. Du arbeitest in **derselben** `script.js` weiter.

**a)** Ersetze das `moveElement(...)` im Game Loop durch eine [`if`-Anweisung](../5-if-else/inhalt#wie-schreiben-wir-eine-if-anweisung): Der Roboter soll nur nach rechts fliegen, solange die Taste Pfeil rechts gedrückt ist. Die Theorie findest du unter [Eine Spielfigur mit Tasten steuern](./inhalt#eine-spielfigur-mit-tasten-steuern).

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let player = document.querySelector("#player");

setPosition(player, 60, 60);

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 3, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Nur der Game Loop hat sich verändert: Die Bewegung steht jetzt in einer `if`-Anweisung.

</details>

**b)** Ergänze die drei anderen Pfeiltasten. Beachte die genaue Schreibweise der Tastennamen:

| Richtung | Tastenname     |
| -------- | -------------- |
| rechts   | `"ArrowRight"` |
| links    | `"ArrowLeft"`  |
| oben     | `"ArrowUp"`    |
| unten    | `"ArrowDown"`  |

<details>
<summary>💡 Tipp anzeigen</summary>

Jede Richtung bekommt eine **eigene** `if`-Anweisung. Schreibe sie untereinander in den Game Loop. Mit einem negativen Wert fliegt der Roboter in die Gegenrichtung.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 3, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -3, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, 3);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -3);
  }

  window.requestAnimationFrame(gameLoop);
}
```

</details>

**c)** Probiere aus, was passiert, wenn du zwei Pfeiltasten gleichzeitig drückst. Erkläre, warum das so ist.

<details>
<summary>✅ Lösung anzeigen</summary>

Der Roboter fliegt diagonal. Die `if`-Anweisungen werden unabhängig voneinander geprüft. Sind zwei passende Tasten gedrückt, stimmen zwei Bedingungen und beide Bewegungsbefehle werden im selben Durchlauf ausgeführt.

</details>

**d)** Verändere die Geschwindigkeit des Roboters. Verwende dafür eine [Variable](../4-variablen/inhalt) `speed`, die **vor** dem Game Loop steht.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let speed = 3;

// ... im Game Loop:
if (isKeyPressed("ArrowRight")) {
  moveElement(player, speed, 0);
}
```

So musst du nur eine einzige Zahl ändern, wenn der Roboter schneller oder langsamer werden soll.

</details>

## 🎯 6.3 – Das Alien einfangen

Im Spielfeld steht von Anfang an ein Alien mit der ID `alien`. Bisher passiert damit nichts. Das ändern wir jetzt - wieder in **derselben** `script.js`.

**a)** Wähle das Alien **vor** dem Game Loop mit [`document.querySelector(...)`](../10-cheatsheet#html-elemente-auswahlen) aus und speichere es in einer Variable `alien`.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let alien = document.querySelector("#alien");
```

Die Zeile steht zuoberst bei den anderen `querySelector`-Zeilen. Im Game Loop hat sie nichts verloren: JavaScript müsste das Alien sonst bei jedem Bild erneut suchen.

</details>

**b)** Lass das Alien verschwinden, sobald der Roboter es berührt. Die Theorie dazu steht unter [Kollisionen sind ebenfalls Fragen](./inhalt#kollisionen-sind-ebenfalls-fragen).

<details>
<summary>💡 Tipp anzeigen</summary>

Prüfe **im** Game Loop mit [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding), ob sich `player` und `alien` berühren, und lösche das Alien mit [`remove()`](../10-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

So sieht die fertige `script.js` nach allen drei Aufgaben aus:

```js
let player = document.querySelector("#player");
let alien = document.querySelector("#alien");

let speed = 3;

setPosition(player, 60, 60);

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, speed, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -speed, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, speed);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -speed);
  }

  // NEU: Kollision prüfen und Alien löschen
  if (isColliding(player, alien)) {
    alien.remove();
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die verwendeten Befehle findest du unter [If / Else](../10-cheatsheet#if-else) und [HTML-Elemente bearbeiten](../10-cheatsheet#html-elemente-bearbeiten) sowie bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed), [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) und [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding).

</details>

**c)** Statt das Alien zu löschen: Setze es bei einer Berührung mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition) an eine neue Stelle. So kannst du es immer wieder einfangen.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
if (isColliding(player, alien)) {
  setPosition(alien, 200, 300);
}
```

</details>

**d) Zusatz:** Zähle mit einer [Variable](../4-variablen/inhalt), wie oft der Roboter das Alien schon eingefangen hat, und schreibe die Zahl mit `console.log(...)` in die [Konsole](../11-debugging).

<details>
<summary>💡 Tipp anzeigen</summary>

Die Variable steht **vor** dem Game Loop:

```js
let punkte = 0;
```

Im Game Loop erhöhst du sie bei einer Berührung:

```js
punkte = punkte + 1;
```

</details>
