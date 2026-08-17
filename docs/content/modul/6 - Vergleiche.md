# 6 - Vergleiche

Im letzten Kapitel hast du die Variable `life` kennengelernt. Sie kann speichern, wie viele Leben der Roboter gerade besitzt:

```js
let life = 1000;
```

JavaScript kennt den Wert nun. Damit daraus eine Spielregel entsteht, muss JavaScript den Wert prüfen können:

> Hat der Roboter noch Leben oder ist das Spiel vorbei?

Dafür verbinden wir **Vergleiche** mit den bereits bekannten `if`-Anweisungen.

## Lernziele

Nach diesem Kapitel kannst du:

- Werte mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen,
- einen Vergleich als Bedingung in einer `if`-Anweisung verwenden,
- mit `else if` mehrere Möglichkeiten unterscheiden und
- mit `life` eine Game-Over-Bedingung programmieren.

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

| Vergleich | Frage |
| --- | --- |
| `life == 1000` | Hat der Roboter genau 1000 Leben? |
| `life != 0` | Hat der Roboter nicht null Leben? |
| `life > 0` | Hat der Roboter mehr als null Leben? |
| `life < 1000` | Hat der Roboter weniger als 1000 Leben? |
| `life >= 1000` | Hat der Roboter 1000 oder mehr Leben? |
| `life <= 100` | Hat der Roboter höchstens 100 Leben? |

Die Vergleichszeichen findest du unter [If / Else](./9-cheatsheet#if-else) im Cheatsheet.

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

Diese beiden Zeichen sehen ähnlich aus, haben aber verschiedene Aufgaben:

```js
life = 1000; // setzt den Wert auf 1000
life == 1000; // fragt, ob der Wert gleich 1000 ist
```

- Mit einem einzelnen `=` geben wir einer Variable einen Wert.
- Mit `==` vergleichen wir zwei Werte.

Die Schreibweisen findest du unter [Variablen](./9-cheatsheet#variablen) und [If / Else](./9-cheatsheet#if-else) im Cheatsheet.

## Vergleiche in einer `if`-Anweisung

Bis jetzt haben wir mit `if` Fragen des Game Frameworks geprüft, zum Beispiel ob eine Taste gedrückt ist. An derselben Stelle kann auch ein Vergleich stehen:

```js
if (life <= 0) {
  statusText.textContent = "Game Over";
}
```

Wir lesen diesen Code so:

> Wenn `life` kleiner oder gleich `0` ist, zeige «Game Over» an.

Ist noch mindestens ein Leben übrig, wird der Code zwischen `{` und `}` übersprungen.

Die Entscheidung steht unter [If / Else](./9-cheatsheet#if-else). Das Verändern des Textes findest du bei [`textContent`](./9-cheatsheet#html-elemente-bearbeiten).

## Zwei Wege mit `else`

Mit `else` können wir bestimmen, was passieren soll, solange das Spiel noch nicht vorbei ist:

```js
if (life <= 0) {
  statusText.textContent = "Game Over";
} else {
  statusText.textContent = "Leben: " + life;
}
```

JavaScript führt genau einen der beiden Blöcke aus:

- `life` ist `0` oder kleiner: Das Spiel ist vorbei.
- `life` ist grösser als `0`: Die verbleibenden Leben werden angezeigt.

Die verwendeten Befehle findest du unter [If / Else](./9-cheatsheet#if-else) und [HTML-Elemente bearbeiten](./9-cheatsheet#html-elemente-bearbeiten).

## Mehrere Möglichkeiten mit `else if`

Mit `else if` können wir weitere Bedingungen anfügen:

```js
if (life >= 1000) {
  statusText.textContent = "Volle Energie";
} else if (life > 0) {
  statusText.textContent = "Roboter beschädigt";
} else {
  statusText.textContent = "Game Over";
}
```

JavaScript prüft von oben nach unten. Sobald eine Bedingung stimmt, führt es den passenden Block aus und überspringt den Rest der Kette.

Bei `life = 600` passiert Folgendes:

1. `life >= 1000` stimmt nicht.
2. `life > 0` stimmt. Deshalb erscheint `Roboter beschädigt`.
3. Der `else`-Block wird übersprungen.

Darum ist die Reihenfolge wichtig: Zuerst prüfen wir, ob der Roboter noch alle Leben hat. Danach prüfen wir, ob überhaupt noch Leben vorhanden sind.

Die Befehle findest du im Cheatsheet unter [If / Else](./9-cheatsheet#if-else) und [HTML-Elemente bearbeiten](./9-cheatsheet#html-elemente-bearbeiten).

## Mehrere `if` oder eine `else if`-Kette?

Mehrere einzelne `if`-Anweisungen beantworten unabhängige Fragen. Im Kapitel If-Else konnte der Roboter deshalb gleichzeitig nach rechts und nach oben fahren.

Eine `else if`-Kette wählt dagegen genau **einen** Weg. Sobald eine Bedingung stimmt, werden die restlichen Möglichkeiten übersprungen.

Merke:

> Mehrere Dinge dürfen gleichzeitig passieren: mehrere `if` verwenden.
>
> Genau eine Möglichkeit soll gewählt werden: `if`, `else if` und `else` verwenden.

## Aufgaben

### 🎯 6.1 – Leben vergleichen

Der Roboter hat `600` Leben:

```js
let life = 600;
```

Entscheide bei jedem Vergleich, ob er **stimmt** oder **nicht stimmt**:

```js
life == 600;
life != 0;
life > 1000;
life < 1000;
life >= 600;
life <= 100;
```

Die Bedeutung aller Vergleichszeichen findest du unter [If / Else](./9-cheatsheet#if-else) im Cheatsheet.

<details>
<summary>✅ Lösung anzeigen</summary>

| Vergleich | Ergebnis | Begründung |
| --- | --- | --- |
| `life == 600` | stimmt | `life` enthält den Wert `600`. |
| `life != 0` | stimmt | `600` ist nicht gleich `0`. |
| `life > 1000` | stimmt nicht | `600` ist nicht grösser als `1000`. |
| `life < 1000` | stimmt | `600` ist kleiner als `1000`. |
| `life >= 600` | stimmt | `600` ist grösser oder gleich `600`. |
| `life <= 100` | stimmt nicht | `600` ist weder kleiner noch gleich `100`. |

</details>

### 🎯 6.2 – Game Over testen

Programmiere eine Entscheidung mit drei möglichen Texten:

- Bei 1000 oder mehr Leben erscheint `Volle Energie`.
- Bei einem bis 999 Leben erscheint `Roboter beschädigt`.
- Bei null Leben erscheint `Game Over`.

Verwende dafür `if`, `else if` und `else`. Teste deinen Code nacheinander mit den Werten `1000`, `600` und `0` für `life`.

<details>
<summary>💡 Tipp anzeigen</summary>

Beginne mit der höchsten Anzahl Leben:

```js
if (life >= 1000) {
  statusText.textContent = "Volle Energie";
}
```

Ergänze danach eine weitere Bedingung und den Fall für alle übrigen Werte. Die Schreibweise findest du unter [If / Else](./9-cheatsheet#if-else).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let life = 1000; // Teste danach die Werte 600 und 0.

if (life >= 1000) {
  statusText.textContent = "Volle Energie";
} else if (life > 0) {
  statusText.textContent = "Roboter beschädigt";
} else {
  statusText.textContent = "Game Over";
}
```

| Wert von `life` | Angezeigter Text |
| --- | --- |
| `1000` | `Volle Energie` |
| `600` | `Roboter beschädigt` |
| `0` | `Game Over` |

Die verwendeten Befehle findest du unter [Variablen](./9-cheatsheet#variablen), [If / Else](./9-cheatsheet#if-else) und [HTML-Elemente bearbeiten](./9-cheatsheet#html-elemente-bearbeiten).

</details>

## Zusammenfassung

- Ein Vergleich prüft zwei Werte.
- `=` setzt einen Wert, `==` vergleicht zwei Werte.
- Ein Vergleich kann als Bedingung in `if` stehen.
- Mit `else if` und `else` kann JavaScript genau einen von mehreren Wegen wählen.
- `if (life <= 0)` kann das Game Over auslösen.
