# 5 - Aufgaben: Variablen

👉 [Projektstand nach Kapitel 4 herunterladen](/assets/zips/space-robot-loesung-4.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 5.1 – Geschwindigkeit zentral festlegen

In deinem bisherigen Game Loop steht die Geschwindigkeit direkt in jedem Bewegungsbefehl. Erstelle stattdessen eine Variable mit dem Namen `speed` und dem Wert `2`.

Verwende danach in allen vier Aufrufen von [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) die Variable `speed`. So kannst du die Geschwindigkeit des Roboters später an einer einzigen Stelle verändern.

Beachte: Für eine Bewegung nach links oder unten muss der Wert weiterhin negativ sein. Die Theorie findest du unter [Eine Variable definieren](./inhalt#eine-variable-definieren).

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let speed = 2;

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Ändere nur den Wert von `speed` und teste, wie sich die Bewegung verändert. Die verwendeten Befehle findest du unter [Variablen](../10-cheatsheet#variablen), [If / Else](../10-cheatsheet#if-else) und in der Dokumentation zu [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

</details>

## 🎯 5.2 – Der Roboter hat nun ein Leben

Unser kleiner Roboter soll nun etwas leiden, um das Spiel interessanter zu machen. Wir wollen Folgendes implementieren:

- Der Roboter hat `1000` Leben.
- Für jede gedrückte Pfeiltaste verliert der Roboter pro Durchlauf ein Leben.
- Wenn der Roboter die Energiekiste berührt, werden seine Leben wieder auf `1000` gesetzt.
- Im Statustext wird immer die aktuelle Anzahl Leben angezeigt, zum Beispiel `Leben: 742`.

Du brauchst dafür die folgenden Theoriekapitel:

- [Eine Variable definieren](./inhalt#eine-variable-definieren)
- [Den Wert verändern](./inhalt#den-wert-verandern)
- [Werte ändern](./inhalt#werte-andern)
- [Gespeicherter Wert und sichtbarer Text](./inhalt#gespeicherter-wert-und-sichtbarer-text)

<details>
<summary>💡 Tipp 1 anzeigen</summary>

Die Leben sollen nur sinken, wenn sich der Roboter tatsächlich bewegt. Suche deshalb im Game Loop die `if`-Blöcke, in denen [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) ausgeführt wird.

Setze die Rechnung zum Verringern von `life` jeweils **in denselben `if`-Block** wie den Bewegungsbefehl. Ausserhalb der Bedingung würden die Leben auch sinken, wenn keine Taste gedrückt ist. Im `else`-Block würden sie genau dann sinken, wenn die Taste nicht gedrückt ist.

Die Schreibweise einer Bedingung findest du unter [If / Else](../10-cheatsheet#if-else), das Rechnen mit dem aktuellen Wert unter [Werte ändern](./inhalt#werte-andern).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let speed = 2;

// NEU: Leben zu Beginn festlegen
let life = 1000;

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
    // NEU: Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
    // NEU: Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
    // NEU: Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
    // NEU: Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isColliding(robot, energy)) {
    // NEU: Leben mit der Energiekiste auffüllen
    life = 1000;
    energy.remove();
  }

  // NEU: Aktuelle Leben anzeigen
  statusText.textContent = "Leben: " + life;

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

Im nächsten Kapitel [Vergleiche](../6-vergleiche/inhalt) lernst du, wie JavaScript den gespeicherten Wert prüft und daraus ein Game Over ableitet.
