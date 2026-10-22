# 3 - Aufgaben: Game Loop

👉 [Projektstand nach Kapitel 2 herunterladen](/assets/zips/space-robot-loesung-2.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 3.1 – Spielerbewegung

Lass den Roboter automatisch von links nach rechts fahren. Nutze dabei die Codeteile aus der Theorie und gehe wie folgt vor:

- Erstelle den Game Loop wie im [Aufbau eines Game Loops](./inhalt#aufbau-eines-game-loops).
- Setze den Roboter an einen festen Ort.
- Bewege den Roboter im Game Loop.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
// Wenn nicht bereits vorhanden, wähle den Roboter aus
let robot = document.querySelector("#robot");

// Setze den Roboter an eine Startposition
setPosition(robot, 50, 85);

// Game Loop erstellen
function gameLoop() {
  // Roboter bei jedem Durchlauf etwas nach rechts bewegen
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

## 🎯 3.2 – Bewegung ändern

Der Roboter bewegt sich nun nach rechts. Verändere den Code nacheinander so, dass Folgendes geschieht:

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
moveElement(robot, 0, 2); // nach oben
moveElement(robot, 2, 2); // diagonal nach oben rechts
moveElement(robot, 20, 0); // sehr schnell nach rechts
moveElement(robot, 0, -2); // nach unten
moveElement(robot, 0, -0.5); // sehr langsam nach unten
moveElement(robot, -2, 0); // nach links
```

Wie sich die drei Angaben des Befehls auswirken, findest du bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

</details>
