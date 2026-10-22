# 7 - Aufgaben: Funktionen

👉 [Projektstand nach Kapitel 6 herunterladen](/assets/zips/space-robot-loesung-6.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 7.1 – Spielerbewegung auslagern

Suche im Game Loop die vier `if`-Blöcke für `ArrowRight`, `ArrowLeft`, `ArrowUp` und `ArrowDown`.

1. Verschiebe alle vier Blöcke in eine neue Funktion namens `moveRobot`.
2. Rufe `moveRobot()` im Game Loop auf.
3. Teste, ob sich der Roboter noch gleich bewegt.

Die Schreibweisen findest du unter [Funktionen](../9-cheatsheet#funktionen) und [If / Else](../9-cheatsheet#if-else). Die Framework-Befehle sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erklärt.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function moveRobot() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
    life -= 1;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
    life -= 1;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
    life -= 1;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
    life -= 1;
  }
}

function gameLoop() {
  moveRobot();

  // Der restliche Code bleibt hier.
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die verwendeten Schreibweisen stehen unter [Funktionen](../9-cheatsheet#funktionen), [If / Else](../9-cheatsheet#if-else), [Variablen](../9-cheatsheet#variablen) und [Listen und Loops](../9-cheatsheet#listen-und-loops). Die Framework-Befehle sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erklärt.

</details>
