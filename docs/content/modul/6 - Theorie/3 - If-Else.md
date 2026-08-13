# 3 - If-Else

Mit `if`, `else if` und `else` kann JavaScript abhängig von einer Bedingung unterschiedliche Wege nehmen.

Die Schreibweise findest du auch im Abschnitt [If-Else](../7-cheatsheet#if-else) des Cheatsheets.

## Eine Bedingung wird geprüft

```js
if (score >= 10) {
  statusText.textContent = "Gewonnen!";
}
```

JavaScript prüft zuerst `score >= 10`. Das Ergebnis kann nur **stimmen** oder **nicht stimmen**.

* Stimmt die Bedingung, wird der Code zwischen `{` und `}` ausgeführt.
* Stimmt sie nicht, wird dieser Code übersprungen.

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

Besonders wichtig ist der Unterschied zwischen Setzen und Vergleichen:

```js
score = 10;       // setzt den Wert
score == 10       // vergleicht den Wert
```

## Was macht `else`?

```js
if (timeLeft > 0) {
  statusText.textContent = "Spiel läuft";
} else {
  statusText.textContent = "Game Over";
}
```

`else` bedeutet **sonst**. Der erste Block wird ausgeführt, wenn die Bedingung stimmt. Andernfalls wird der zweite Block ausgeführt. Es wird immer genau einer der beiden Wege genommen.

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

Darum ist die Reihenfolge wichtig: Die höhere Punktzahl wird zuerst geprüft.

## Kette oder mehrere einzelne `if`?

Eine Kette wählt genau einen passenden Weg:

```js
if (mode == "alarm") {
  controlRoom.style.backgroundColor = "red";
} else if (mode == "night") {
  controlRoom.style.backgroundColor = "darkblue";
}
```

Mehrere einzelne `if` werden unabhängig voneinander geprüft:

```js
if (isColliding(player, food)) {
  score += 1;
}

if (timeLeft <= 0) {
  statusText.textContent = "Game Over";
}
```

Hier können bei einem Durchlauf beide Bedingungen stimmen und beide Blöcke ausgeführt werden.

Merke:

> `if` prüft eine Frage. `else if` stellt eine weitere Frage. `else` bestimmt, was in allen anderen Fällen passiert.
