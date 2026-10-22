# 6 - Vergleiche

Im letzten Kapitel hast du die Variable `life` kennengelernt. Sie kann speichern, wie viele Leben der Roboter gerade besitzt:

```js
let life = 1000;
```

Damit wollen wir nun Fragen beantworten wie:

> Wenn das Leben `0` ist, haben wir Game Over!

Dafür verbinden wir **Vergleiche** mit den bereits bekannten `if`-Anweisungen.

## Lernziele

Nach diesem Kapitel kannst du:

- Werte mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen,
- einen Vergleich als Bedingung in einer `if`-Anweisung verwenden,
- mit `else if` mehrere Möglichkeiten unterscheiden und
- mit `life` eine Game-Over-Bedingung programmieren.

## If-Anweisungen und Vergleiche

Bis jetzt haben wir mit `if` auf Tastatureingaben reagiert:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(robot, speed, 0);
}
```

In den runden Klammern von `if (...)` steht eine **Bedingung**. Ihr Ergebnis kann nur wahr oder falsch sein. [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) beantwortet die Frage nach der Taste für uns. Ein Vergleich kann an derselben Stelle eine Frage zu einem Wert beantworten.

Wollen wir zum Beispiel prüfen, ob das Leben des Roboters voll aufgeladen ist, können wir schreiben:

```js
if (life == 1000) {
  console.log("Das Leben ist voll aufgeladen");
}
```

Merke:

> Wir vergleichen Werte in einer `if`-Anweisung, um Entscheidungen zu treffen. Ein Vergleich ist immer wahr oder falsch.

Die Schreibweise von [`if`](../10-cheatsheet#if-else) steht im Cheatsheet. Die Spielfunktionen findest du bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

## Werte vergleichen

Mit diesen Zeichen vergleichen wir den Wert in `life` mit einer anderen Zahl:

```js
life == 1000; // gleich
life != 0; // nicht gleich
life > 0; // grösser als
life < 1000; // kleiner als
life >= 1000; // grösser oder gleich
life <= 100; // kleiner oder gleich
```

| Vergleich      | Frage                                   |
| -------------- | --------------------------------------- |
| `life == 1000` | Hat der Roboter genau 1000 Leben?       |
| `life != 0`    | Hat der Roboter nicht 0 Leben?          |
| `life > 0`     | Hat der Roboter mehr als null Leben?    |
| `life < 1000`  | Hat der Roboter weniger als 1000 Leben? |
| `life >= 1000` | Hat der Roboter 1000 oder mehr Leben?   |
| `life <= 100`  | Hat der Roboter höchstens 100 Leben?    |

Die Vergleichszeichen findest du unter [If / Else](../10-cheatsheet#if-else) im Cheatsheet.

## Ein Vergleich beantwortet eine Frage

Ein Vergleich kann nur zwei mögliche Antworten liefern:

- Der Vergleich stimmt.
- Der Vergleich stimmt nicht.

Nehmen wir an, `life` enthält den Wert `600`:

```js
let life = 600;
```

Dann stimmt `life > 0`, weil `600` grösser als `0` ist. Der Vergleich `life == 1000` stimmt dagegen nicht.

## Setzen oder vergleichen?

Wir müssen kurz aufpassen, dass wir die = und == nicht verwechseln.

Diese beiden Zeichen sehen ähnlich aus, haben aber verschiedene Aufgaben:

```js
life = 1000; // setzt den Wert auf 1000
life == 1000; // fragt, ob der Wert gleich 1000 ist
```

- Mit einem einzelnen `=` geben wir einer Variable einen Wert.
- Mit `==` vergleichen wir zwei Werte.

## Vergleiche in einer `if`-Anweisung

Bis jetzt haben wir mit `if` Fragen des Game Frameworks geprüft, zum Beispiel ob eine Taste gedrückt ist. An derselben Stelle kann auch ein Vergleich stehen:

```js
if (life >= 800) {
  gameStatus.textContent = "Dem Roboter geht es gut";
}
```

Wir lesen diesen Code so:

> Wenn `life` grösser oder gleich `800` ist, zeige an: «Dem Roboter geht es gut».

`gameStatus` ist eine zusätzliche Anzeige für den Spielzustand. Sie ist im Starterprojekt bereits vorbereitet, damit `statusText` weiterhin die aktuelle Anzahl Leben anzeigen kann.

Die Entscheidung steht unter [If / Else](../10-cheatsheet#if-else). Das Verändern des Textes findest du bei [`textContent`](../10-cheatsheet#html-elemente-bearbeiten).

## Zusammenfassung

- Ein Vergleich prüft zwei Werte.
- `=` setzt einen Wert, `==` vergleicht zwei Werte.
- Ein Vergleich kann als Bedingung in `if` stehen.
- Mit `else if` und `else` kann JavaScript genau einen von mehreren Wegen wählen.
- `if (life <= 0)` kann das Game Over auslösen.

👉 Weiter zu den [Aufgaben](./aufgaben)
