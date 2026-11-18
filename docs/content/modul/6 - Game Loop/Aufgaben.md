# 6 - Aufgaben: Game Loop

👉 [Übungen herunterladen](/assets/zips/uebungen-6-game-loop.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner. Alle drei Übungen verwenden das [Game Framework](/jsgame/3-framework-docs). Es ist in der `index.html` bereits eingebunden.

## 🎯 6.1 – Bewegung

👉 Ordner `1-bewegung`

`index.html`

<<< @/projects/uebungen-6-game-loop/1-bewegung/index.html

**a)** Lass den Roboter automatisch von links nach rechts fahren. Gehe so vor:

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

**b)** Verändere den Code nacheinander so, dass Folgendes geschieht:

- Der Roboter bewegt sich nach oben.
- Der Roboter bewegt sich diagonal nach oben rechts.
- Der Roboter bewegt sich sehr schnell nach rechts.
- Der Roboter bewegt sich nach unten. Tipp: Verändere die Anfangsposition, um den Effekt zu sehen.
- Der Roboter bewegt sich sehr langsam nach unten.
- Der Roboter bewegt sich nach links.

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

## 🎯 6.2 – Steuerung

👉 Ordner `2-steuerung`

`index.html`

<<< @/projects/uebungen-6-game-loop/2-steuerung/index.html

**a)** Steuere den Roboter mit den Pfeiltasten. Die Theorie findest du unter [Eine Spielfigur mit Tasten steuern](./inhalt#eine-spielfigur-mit-tasten-steuern). Beachte die genaue Schreibweise der Tastennamen:

| Richtung | Tastenname     |
| -------- | -------------- |
| rechts   | `"ArrowRight"` |
| links    | `"ArrowLeft"`  |
| oben     | `"ArrowUp"`    |
| unten    | `"ArrowDown"`  |

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let player = document.querySelector("#player");

setPosition(player, 60, 60);

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

gameLoop();
```

Wenn zwei passende Tasten gedrückt sind, stimmen zwei Bedingungen. Beide Bewegungsbefehle werden ausgeführt und der Roboter fährt diagonal.

</details>

**b)** Setze die Energiekiste (`#energy`) mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition) an eine Stelle im Spielfeld, zum Beispiel `600, 200`.

**c)** Lass die Energiekiste verschwinden, wenn der Roboter sie berührt. Die Theorie dazu steht unter [Kollisionen sind ebenfalls Fragen](./inhalt#kollisionen-sind-ebenfalls-fragen).

<details>
<summary>💡 Tipp anzeigen</summary>

Wähle die Energiekiste einmal **vor** dem Game Loop aus:

```js
let energy = document.querySelector("#energy");
```

Prüfe danach **im** Game Loop mit [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding), ob sich `player` und `energy` berühren, und lösche sie mit [`remove()`](../10-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
// NEU: Energiekiste vor dem Game Loop auswählen und platzieren
let energy = document.querySelector("#energy");
setPosition(energy, 600, 200);

function gameLoop() {
  // Die Steuerung von oben bleibt hier stehen.

  // NEU: Kollision prüfen und Energiekiste löschen
  if (isColliding(player, energy)) {
    energy.remove();
  }

  window.requestAnimationFrame(gameLoop);
}
```

</details>

**d)** Zeige im `statusText` an, was gerade passiert, zum Beispiel `Energie eingesammelt`.

## 🎯 6.3 – Energie-Spiel

👉 Ordner `3-energie`

Jetzt bauen wir ein kleines Spiel. Du brauchst dafür alles aus den Kapiteln [Variablen](../4-variablen/inhalt), [If-Else](../5-if-else/inhalt) und [Game Loop](./inhalt).

`index.html`

<<< @/projects/uebungen-6-game-loop/3-energie/index.html

Programmiere Schritt für Schritt:

**a)** Die Steuerung mit den Pfeiltasten wie in Übung 6.2.

**b)** Eine Variable `energie` mit dem Wert `100`. Sie steht **vor** dem Game Loop. Bei jeder Bewegung verliert der Roboter `0.2` Energie.

**c)** `energyText` zeigt laufend die aktuelle Energie an, zum Beispiel `Energie: 87`.

**d)** Berührt der Roboter die Energiekiste, wird `energie` wieder auf `100` gesetzt und die Kiste gelöscht.

**e)** `gameStatus` zeigt `Spiel läuft.`, solange `energie` grösser als `0` ist. Sonst erscheint `Game Over`.

<details>
<summary>💡 Tipp anzeigen</summary>

Die Energie sinkt nur, wenn sich der Roboter tatsächlich bewegt. Die Rechnung gehört deshalb **in denselben `if`-Block** wie der Bewegungsbefehl:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(player, speed, 0);
  energie -= 0.2;
}
```

Für die Anzeige runden wir die Zahl mit `Math.round(energie)`, sonst erscheinen sehr viele Nachkommastellen.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let player = document.querySelector("#player");
let energy = document.querySelector("#energy");
let energyText = document.querySelector("#energyText");
let gameStatus = document.querySelector("#gameStatus");

let speed = 3;
let energie = 100;

setPosition(player, 60, 60);
setPosition(energy, 600, 200);

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, speed);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -speed);
    energie -= 0.2;
  }

  if (isColliding(player, energy)) {
    energie = 100;
    energy.remove();
  }

  energyText.textContent = "Energie: " + Math.round(energie);

  if (energie > 0) {
    gameStatus.textContent = "Spiel läuft.";
  } else {
    gameStatus.textContent = "Game Over";
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die verwendeten Befehle findest du unter [Variablen](../10-cheatsheet#variablen), [If / Else](../10-cheatsheet#if-else) und [Listen und Loops](../10-cheatsheet#listen-und-loops) sowie bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed), [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) und [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding).

</details>

**f) Zusatz:** Bei `Game Over` soll sich der Roboter nicht mehr bewegen können. Überlege dir, wo du dafür eine Bedingung einbauen kannst.
