# 4 - Aufgaben: If-Else

👉 [Projektstand nach Kapitel 3 herunterladen](/assets/zips/space-robot-loesung-3.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

In den folgenden Aufgaben setzt du die Theorie Schritt für Schritt in deinem Roboterprojekt um. Ergänze dabei immer den bestehenden Code, statt für jede Aufgabe einen neuen Game Loop zu erstellen.

## 🎯 4.1 – Den Roboter steuern

Wir wissen nun, wie wir den [Roboter bewegen](../3-game-loop/inhalt#wie-konnen-wir-ein-element-bewegen) und wie wir [auf eine gedrückte Taste reagieren](./inhalt#wie-schreiben-wir-eine-if-anweisung). Das ist alles, was wir brauchen, um den Roboter mit den Pfeiltasten zu steuern.

Programmiere die Steuerung des Roboters. Beachte dabei die genaue Schreibweise der Tastennamen:

| Richtung | Tastenname     |
| -------- | -------------- |
| rechts   | `"ArrowRight"` |
| links    | `"ArrowLeft"`  |
| oben     | `"ArrowUp"`    |
| unten    | `"ArrowDown"`  |

Die Tastennamen findest du bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed), die Werte für alle Richtungen bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 2, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -2, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, 2);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -2);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Wenn zwei passende Tasten gedrückt sind, stimmen zwei Bedingungen. Beide Bewegungsbefehle werden ausgeführt und der Roboter fährt diagonal.

Die verwendeten Befehle findest du im Cheatsheet unter [If / Else](../10-cheatsheet#if-else) und [Listen und Loops](../10-cheatsheet#listen-und-loops) sowie in der Framework-Dokumentation bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

</details>

## 🎯 4.2 – Energie einsammeln

Lass die Energiekiste verschwinden, wenn der Roboter sie berührt.

Die nötige Theorie findest du unter [Kollisionen sind ebenfalls Fragen](./inhalt#kollisionen-sind-ebenfalls-fragen). Wenn du nicht mehr weisst, wie man zum Beispiel ein Element auswählt, verändert oder löscht, schaue im [Cheatsheet](../10-cheatsheet) nach.

<details>
<summary>💡 Tipp anzeigen</summary>

Wähle die Energiekiste einmal **vor** dem Game Loop aus. Ihre ID ist `energy`:

```js
let energy = document.querySelector("#energy");
```

Prüfe danach **im** Game Loop mit [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding), ob sich `robot` und `energy` berühren.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
// NEU: Energiekiste vor dem Game Loop auswählen
let energy = document.querySelector("#energy");

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 2, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -2, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, 2);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -2);
  }

  // NEU: Kollision prüfen und Energiekiste löschen
  if (isColliding(robot, energy)) {
    energy.remove();
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

[`document.querySelector(...)`](../10-cheatsheet#html-elemente-auswahlen) wählt die Energiekiste aus, [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding) prüft die Berührung und [`remove()`](../10-cheatsheet#html-elemente-bearbeiten) löscht sie.
