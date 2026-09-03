# 7 - Funktionen

👉 [Projektstand nach Kapitel 6 herunterladen](/assets/zips/space-robot-loesung-6.zip)

Unser Game Loop wird immer länger. Mit **Funktionen** können wir zusammengehörige Befehle unter einem Namen zusammenfassen.

> Eine Funktion ist wie ein Rezept: Wir schreiben es einmal auf und können es danach mit seinem Namen ausführen.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Funktion mit und ohne Parameter definieren und
- eine Funktion aufrufen.

## Funktionen definieren und aufrufen

So geben wir mehreren Befehlen den Namen `collectEnergy`:

```js
function collectEnergy() {
  life = 1000;
  energy.remove();
}
```

Das ist die **Definition**. JavaScript merkt sich die Befehle, führt sie aber noch nicht aus.

Mit dem Namen und runden Klammern rufen wir die Funktion auf:

```js
collectEnergy();
```

> Definieren: `function collectEnergy() { ... }`; aufrufen: `collectEnergy();`

Die Schreibweise findest du im Cheatsheet unter [Funktionen](./9-cheatsheet#funktionen).

Wir kennen Funktionen bereits aus dem Game Framework. Zum Beispiel ruft dieser Befehl die Funktion `moveElement` auf:

```js
moveElement(robot, speed, 0);
```

Diese Funktion haben aber in dem Fall nicht wir definiert, sondern sie kommen von einem anderen Ort. Namentlich vom script, dass wir im HTML laden.

## Parameter

Eine eigene Funktion kann ebenfalls Werte erhalten:

```js
function driveRobot(x, y) {
  moveElement(robot, x, y);
  life -= 1;
}

driveRobot(speed, 0);
driveRobot(-speed, 0);
```

`x` und `y` sind **Parameter**: Platzhalter für die Werte beim Aufruf. Beim ersten Aufruf fährt der Roboter nach rechts, beim zweiten nach links.

Diese Parameter wirklen innerhalb der Funktion `{ }` genau wie wariablen. Wenn wir die Funktion aufrufen, können wir die Parameter selber bestimmen.

## Aufgabe: Spielerbewegung auslagern

Suche im Game Loop die vier `if`-Blöcke für `ArrowRight`, `ArrowLeft`, `ArrowUp` und `ArrowDown`.

1. Verschiebe alle vier Blöcke in eine neue Funktion namens `moveRobot`.
2. Rufe `moveRobot()` im Game Loop auf.
3. Teste, ob sich der Roboter noch gleich bewegt.

Die Schreibweisen findest du unter [Funktionen](./9-cheatsheet#funktionen) und [If / Else](./9-cheatsheet#if-else). Die Framework-Befehle sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erklärt.

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

Die verwendeten Schreibweisen stehen unter [Funktionen](./9-cheatsheet#funktionen), [If / Else](./9-cheatsheet#if-else), [Variablen](./9-cheatsheet#variablen) und [Listen und Loops](./9-cheatsheet#listen-und-loops). Die Framework-Befehle sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erklärt.

</details>

## Zusammenfassung

- Eine Funktion bündelt Befehle unter einem Namen.
- Die Definition speichert die Befehle. Der Aufruf führt sie aus.
- Parameter sind Platzhalter für Werte.
