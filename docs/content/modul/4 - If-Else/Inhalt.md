# 4 - If-Else

Wir wissen nun, wie wir Objekte bewegen können. Ein Spiel ist aber kein Film, sondern reagiert auf Eingaben. Die nächste Frage ist also: Wie können wir den Roboter mit den Tasten steuern? Dazu brauchen wir `if` und `else`. Übersetzt bedeuten diese Wörter **wenn** und **sonst**.

## Lernziele

Nach diesem Kapitel kannst du:

- die Grundlagen von `if` und `else` erklären,
- im Game Loop eine Steuerung einbauen,
- mit `if` auf eine Kollision reagieren und
- mit `else` bestimmen, was sonst passieren soll.

## Theorie: If und Else

### Wie schreiben wir eine `if` Anweisung?

Eine `if`-Anweisung besteht aus einer **Bedingung** und einer **Aktion**:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 2, 0);
}
```

Wir lesen diesen Code so:

> Wenn die rechte Pfeiltaste gedrückt ist, bewege den Roboter zwei Pixel nach rechts.

JavaScript geht dabei Schritt für Schritt vor:

1. `if` kündigt eine Entscheidung an.
2. [`isKeyPressed("ArrowRight")`](/jsgame/3-framework-docs#iskeypressed) prüft die Bedingung: Ist die rechte Pfeiltaste gerade gedrückt?
3. Ist die Antwort «ja», wird der Code zwischen `{` und `}` ausgeführt.
4. [`moveElement(robot, 2, 0)`](/jsgame/3-framework-docs#moveelement) bewegt den Roboter nach rechts.
5. Ist die Taste nicht gedrückt, überspringt JavaScript den Bewegungsbefehl.

Die Schreibweise von [`if`](../10-cheatsheet#if-else) findest du auch im Cheatsheet. Die beiden Spielfunktionen sind bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) dokumentiert.

<details>
<summary>Analogie: Der Roboter steht an einer Kreuzung</summary>

Stell dir vor, unser kleiner JavaScript-Roboter kommt an eine Kreuzung. Dort liest er ein Schild:

> Ist die rechte Pfeiltaste gedrückt?

Ist die Antwort «ja», fährt er nach rechts. Ist die Antwort «nein», fährt er nicht. Beim nächsten Durchlauf des Game Loops kommt er wieder an der Kreuzung vorbei und prüft dieselbe Frage erneut.

</details>

### Was macht `else`?

Manchmal soll JavaScript auch handeln, wenn die Antwort «nein» lautet. Dafür verwenden wir `else`. `else` bedeutet **sonst**:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 2, 0);
  statusText.textContent = "Roboter fährt";
} else {
  statusText.textContent = "Roboter wartet";
}
```

JavaScript wählt genau einen Weg:

- Ist die Taste gedrückt, bewegt sich der Roboter und der Text zeigt `Roboter fährt`.
- Sonst bewegt er sich nicht und der Text zeigt `Roboter wartet`.

Ein `else` ist nicht immer nötig. Soll bei der Antwort «nein» einfach nichts passieren, lassen wir es weg. Genau das machen wir bei den folgenden Bewegungs- und Kollisionsabfragen.

Die Entscheidung ist unter [If / Else](../10-cheatsheet#if-else), das Verändern des Textes unter [HTML-Elemente bearbeiten](../10-cheatsheet#html-elemente-bearbeiten) beschrieben. Die Spielfunktionen findest du bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

### Warum steht die Abfrage im Game Loop?

Eine Taste kann jederzeit gedrückt oder losgelassen werden. Deshalb muss JavaScript die Bedingung immer wieder prüfen:

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 2, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Bei jedem neuen Bild fragt der Game Loop erneut nach der Taste. Dadurch beginnt die Bewegung beim Drücken und endet beim Loslassen.

Den Aufbau des [`gameLoop`](../10-cheatsheet#listen-und-loops) findest du im Cheatsheet. Die Entscheidung steht unter [If / Else](../10-cheatsheet#if-else), die Spielfunktionen stehen in der Dokumentation bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

### Mehrere Tasten prüfen

Für jede Richtung können wir eine eigene Frage stellen:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, 2, 0);
}

if (isKeyPressed("ArrowLeft")) {
  moveElement(robot, -2, 0);
}
```

Die beiden `if`-Anweisungen werden unabhängig voneinander geprüft. JavaScript kann deshalb auch mehrere gleichzeitig gedrückte Tasten erkennen.

Die Schreibweise findest du unter [If / Else](../10-cheatsheet#if-else). Die Tastennamen und Bewegungsrichtungen stehen bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

### Kollisionen sind ebenfalls Fragen

Eine Bedingung kann auch prüfen, ob sich zwei Spielelemente berühren:

```js
if (isColliding(robot, energy)) {
  robot.style.backgroundColor = "red";
}
```

[`isColliding(robot, energy)`](/jsgame/3-framework-docs#iscolliding) fragt:

> Berühren sich der Roboter und die Energiekiste?

Wenn die Antwort stimmt, färbt [`robot.style.backgroundColor`](../10-cheatsheet#html-elemente-bearbeiten) den Hintergrund des Roboters rot. Wenn sie nicht stimmt, wird der Befehl übersprungen.

Auch diese Frage gehört in den Game Loop. Der Roboter bewegt sich fortlaufend, deshalb kann die Kollision bei jedem neuen Bild an einer anderen Stelle passieren.

## Zusammenfassung

- `if` stellt eine Frage und führt Code nur aus, wenn die Antwort «ja» lautet.
- `else` bestimmt, was bei der Antwort «nein» passieren soll.
- Im Game Loop werden Bedingungen bei jedem neuen Bild erneut geprüft.
- Mehrere einzelne `if`-Anweisungen können im gleichen Durchlauf ausgeführt werden.
- Tastatureingaben und Kollisionen können als Bedingungen verwendet werden.

Im nächsten Kapitel lernst du [Variablen](../5-variablen/inhalt) kennen. Damit kann sich JavaScript Zahlen und Texte merken und diese Werte während des Spiels verändern.

👉 Weiter zu den [Aufgaben](./aufgaben)
