# 5 - If-Else

Bis jetzt läuft unser Code immer gleich ab: Der Goblin arbeitet Zeile für Zeile ab, was wir ihm aufgetragen haben. Ein Programm muss aber **Entscheidungen** treffen können:

- Ist die eingetippte Antwort richtig oder falsch?
- Ist es heute warm genug für ein T-Shirt?
- Welches Team hat mehr Tore?

Dafür brauchen wir `if` und `else`. Übersetzt bedeuten diese Wörter **wenn** und **sonst**. Und wir brauchen **Vergleiche**, um zwei Werte miteinander zu vergleichen.

## Lernziele

Nach diesem Kapitel kannst du:

- die Grundlagen von `if` und `else` erklären,
- Werte mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen,
- einen Vergleich als Bedingung in einer `if`-Anweisung verwenden und
- mit `else if` mehrere Möglichkeiten unterscheiden.

## Wie schreiben wir eine `if` Anweisung?

Eine `if`-Anweisung besteht aus einer **Bedingung** und einer **Aktion**:

```js
if (temperatur >= 25) {
  outfitText.textContent = "T-Shirt";
}
```

Wir lesen diesen Code so:

> Wenn `temperatur` grösser oder gleich `25` ist, zeige «T-Shirt» an.

JavaScript geht dabei Schritt für Schritt vor:

1. `if` kündigt eine Entscheidung an.
2. In den runden Klammern steht die Bedingung: Ist `temperatur` grösser oder gleich `25`?
3. Ist die Antwort «ja», wird der Code zwischen `{` und `}` ausgeführt.
4. Ist die Antwort «nein», überspringt JavaScript den ganzen Block.

Die Schreibweise von [`if`](../10-cheatsheet#if-else) findest du auch im Cheatsheet.

<details>
<summary>Analogie: Der Goblin steht an einer Kreuzung</summary>

Unser kleiner JavaScript-Goblin kommt an eine Kreuzung. Dort liest er ein Schild:

> Ist `temperatur` grösser oder gleich `25`?

Ist die Antwort «ja», geht er den Weg mit den Aufträgen in den geschweiften Klammern. Ist die Antwort «nein», läuft er daran vorbei und macht beim nächsten Auftrag weiter.

</details>

## Was macht `else`?

Manchmal soll JavaScript auch handeln, wenn die Antwort «nein» lautet. Dafür verwenden wir `else`. `else` bedeutet **sonst**:

```js
if (cityField.value == "Madrid") {
  cityResult.textContent = "Richtig!";
} else {
  cityResult.textContent = "Falsch!";
}
```

JavaScript wählt genau einen Weg:

- Steht `Madrid` im Feld, erscheint `Richtig!`.
- Sonst erscheint `Falsch!`.

Ein `else` ist nicht immer nötig. Soll bei der Antwort «nein» einfach nichts passieren, lassen wir es weg.

## Eine Entscheidung in einem Event

Eine Entscheidung steht fast immer in einem [Event](../3-events/inhalt). Erst wenn geklickt wird, gibt es etwas zu entscheiden:

```js
let cityField = document.querySelector("#cityField");
let cityResult = document.querySelector("#cityResult");

cityButton.addEventListener("click", function () {
  if (cityField.value == "Madrid") {
    cityResult.textContent = "Richtig!";
  } else {
    cityResult.textContent = "Falsch!";
  }
});
```

Bei jedem Klick prüft JavaScript die Bedingung neu. Deshalb kann dieselbe Entscheidung einmal «ja» und ein anderes Mal «nein» ergeben.

Das Event findest du unter [Events](../10-cheatsheet#events), das Auslesen eines Textfeldes mit [`value`](../10-cheatsheet#html-elemente-bearbeiten) im Cheatsheet.

## Werte vergleichen

In den runden Klammern von `if (...)` steht eine Bedingung. Ihr Ergebnis kann nur **wahr** oder **falsch** sein. Am häufigsten steht dort ein **Vergleich**.

Nehmen wir an, Team A hat `3` Tore geschossen:

```js
let toreA = 3;
```

Mit diesen Zeichen vergleichen wir den Wert mit einer anderen Zahl:

```js
toreA == 3; // gleich
toreA != 0; // nicht gleich
toreA > 1; // grösser als
toreA < 5; // kleiner als
toreA >= 3; // grösser oder gleich
toreA <= 2; // kleiner oder gleich
```

| Vergleich    | Frage                                | Ergebnis     |
| ------------ | ------------------------------------ | ------------ |
| `toreA == 3` | Hat Team A genau 3 Tore?             | stimmt       |
| `toreA != 0` | Hat Team A nicht 0 Tore?             | stimmt       |
| `toreA > 1`  | Hat Team A mehr als ein Tor?         | stimmt       |
| `toreA < 5`  | Hat Team A weniger als 5 Tore?       | stimmt       |
| `toreA >= 3` | Hat Team A 3 oder mehr Tore?         | stimmt       |
| `toreA <= 2` | Hat Team A höchstens 2 Tore?         | stimmt nicht |

Wir können auch zwei Variablen miteinander vergleichen:

```js
if (toreA > toreB) {
  winnerText.textContent = "Team A gewinnt";
}
```

Und wir können Texte vergleichen:

```js
cityField.value == "Madrid"; // Steht genau «Madrid» im Textfeld?
```

Die Vergleichszeichen findest du unter [If / Else](../10-cheatsheet#if-else) im Cheatsheet.

## Setzen oder vergleichen?

Wir müssen aufpassen, dass wir `=` und `==` nicht verwechseln. Die beiden Zeichen sehen ähnlich aus, haben aber verschiedene Aufgaben:

```js
toreA = 3; // setzt den Wert auf 3
toreA == 3; // fragt, ob der Wert gleich 3 ist
```

- Mit einem einzelnen `=` geben wir einer Variable einen Wert.
- Mit `==` vergleichen wir zwei Werte.

## Mehrere Möglichkeiten mit `else if`

Oft gibt es mehr als zwei Fälle. Dann hängen wir mit `else if` weitere Fragen an:

```js
if (temperatur >= 25) {
  outfitText.textContent = "T-Shirt";
} else if (temperatur >= 15) {
  outfitText.textContent = "Pullover";
} else if (temperatur >= 5) {
  outfitText.textContent = "Jacke";
} else {
  outfitText.textContent = "Wintermantel";
}
```

Wichtig ist die Reihenfolge: JavaScript prüft die Bedingungen von oben nach unten und nimmt den **ersten** Weg, der stimmt. Alle anderen werden übersprungen.

| Temperatur | Angezeigtes Outfit |
| ---------- | ------------------ |
| `30`       | `T-Shirt`          |
| `18`       | `Pullover`         |
| `8`        | `Jacke`            |
| `-2`       | `Wintermantel`     |

Beginne deshalb immer beim «extremsten» Fall. Würden wir mit `temperatur >= 5` starten, käme `T-Shirt` nie zum Zug: Bei `30` Grad stimmt bereits die erste Bedingung.

## Zusammenfassung

- `if` stellt eine Frage und führt Code nur aus, wenn die Antwort «ja» lautet.
- `else` bestimmt, was bei der Antwort «nein» passieren soll.
- Mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen wir zwei Werte.
- `=` setzt einen Wert, `==` vergleicht zwei Werte.
- Mit `else if` unterscheidet JavaScript mehrere Möglichkeiten und nimmt den ersten passenden Weg.

Im nächsten Kapitel lernst du den [Game Loop](../6-game-loop/inhalt) kennen. Damit prüft JavaScript solche Fragen nicht nur bei einem Klick, sondern viele Male pro Sekunde.

👉 Weiter zu den [Aufgaben](./aufgaben)
