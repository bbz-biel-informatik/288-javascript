# 5 - If-Else

Bis jetzt läuft unser Code immer gleich ab: JavaScript arbeitet Zeile für Zeile ab, was wir ihm aufgetragen haben. Ein Programm muss aber **Entscheidungen** treffen können: Ist die Antwort richtig? Reicht der Punktestand zum Gewinnen?

Dafür brauchen wir `if` und `else`. Übersetzt bedeuten diese Wörter **wenn** und **sonst**. Und wir brauchen **Vergleiche**, um zwei Werte miteinander zu vergleichen.

## Lernziele

Nach diesem Kapitel kannst du:

- die Grundlagen von `if` und `else` erklären,
- Werte mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen,
- einen Vergleich als Bedingung in einer `if`-Anweisung verwenden und
- mit `else if` mehrere Möglichkeiten unterscheiden.

## Unser Beispiel in diesem Kapitel

In diesem Kapitel nehmen wir ein Quiz als Beispiel: Fragen werden beantwortet und Scores werden verglichen.

## Wie schreiben wir eine `if` Anweisung?

Eine `if`-Anweisung besteht aus einer **Bedingung** und einer **Aktion**:

```js
if (score >= 3) {
  statusText.textContent = "Gewonnen!";
}
```

Wir lesen diesen Code so:

> Wenn `score` grösser oder gleich `3` ist, zeige «Gewonnen!» an.

JavaScript geht dabei Schritt für Schritt vor:

1. `if` kündigt eine Entscheidung an.
2. In den runden Klammern steht die Bedingung: Ist `score` grösser oder gleich `3`?
3. Ist die Antwort «ja», wird der Code zwischen `{` und `}` ausgeführt.
4. Ist die Antwort «nein», überspringt JavaScript den ganzen Block.

Die Schreibweise von [`if`](../10-cheatsheet#if-else) findest du auch im Cheatsheet.

## Was macht `else`?

Manchmal soll JavaScript auch handeln, wenn die Antwort «nein» lautet. Dafür verwenden wir `else`. `else` bedeutet **sonst**:

```js
if (score >= 3) {
  statusText.textContent = "Gewonnen!";
} else {
  statusText.textContent = "Leider verloren.";
}
```

JavaScript wählt genau einen Weg:

- Ist der score hoch genug, erscheint `Gewonnen!`.
- Sonst erscheint `Leider verloren.`.

Ein `else` ist nicht immer nötig. Soll bei der Antwort «nein» einfach nichts passieren, lassen wir es weg.

## Eine Entscheidung in einem Event

Eine Entscheidung steht fast immer in einem [Event](../3-events/inhalt). Erst wenn geklickt wird, gibt es etwas zu entscheiden. In unserem Quiz prüfen wir beim Klick, was eingetippt wurde:

```js
let answerField = document.querySelector("#answerField");
let statusText = document.querySelector("#statusText");

checkButton.addEventListener("click", function () {
  if (answerField.value == "Madrid") {
    statusText.textContent = "Richtig!";
    score = score + 1;
  } else {
    statusText.textContent = "Falsch!";
  }
});
```

Bei jedem Klick prüft JavaScript die Bedingung neu. Deshalb kann dieselbe Entscheidung einmal «ja» und ein anderes Mal «nein» ergeben.

Das Event findest du unter [Events](../10-cheatsheet#events), das Auslesen eines Textfeldes unter [Text auslesen](../4-variablen/inhalt#text-auslesen).

## Werte vergleichen

In den runden Klammern von `if (...)` steht eine Bedingung. Ihr Ergebnis kann nur **wahr** oder **falsch** sein. Am häufigsten steht dort ein **Vergleich**.

Nehmen wir an, die Spielerin hat `3` Punkte gesammelt:

```js
let score = 3;
```

Mit diesen Zeichen vergleichen wir den Wert mit einer anderen Zahl:

```js
score == 3; // gleich
score != 0; // nicht gleich
score > 1; // grösser als
score < 5; // kleiner als
score >= 3; // grösser oder gleich
score <= 2; // kleiner oder gleich
```

| Vergleich    | Frage                         | Ergebnis     |
| ------------ | ----------------------------- | ------------ |
| `score == 3` | Sind es genau 3 Punkte?       | stimmt       |
| `score != 0` | Sind es nicht 0 Punkte?       | stimmt       |
| `score > 1`  | Ist es mehr als ein Punkt?    | stimmt       |
| `score < 5`  | Sind es weniger als 5 Punkte? | stimmt       |
| `score >= 3` | Sind es 3 oder mehr Punkte?   | stimmt       |
| `score <= 2` | Sind es höchstens 2 Punkte?   | stimmt nicht |

Wir können auch zwei Variablen miteinander vergleichen:

```js
if (scoreA > scoreB) {
  statusText.textContent = "Spielerin A gewinnt";
}
```

Und wir können Texte vergleichen. Texte stehen dabei in Anführungszeichen:

```js
answerField.value == "Madrid"; // Steht genau «Madrid» im Textfeld?
```

Die Vergleichszeichen findest du unter [If / Else](../10-cheatsheet#if-else) im Cheatsheet.

## Setzen oder vergleichen?

Wir müssen aufpassen, dass wir `=` und `==` nicht verwechseln. Die beiden Zeichen sehen ähnlich aus, haben aber verschiedene Aufgaben:

```js
score = 3; // setzt den Wert auf 3
score == 3; // fragt, ob der Wert gleich 3 ist
```

- Mit einem einzelnen `=` geben wir einer Variable einen Wert.
- Mit `==` vergleichen wir zwei Werte.

## Mehrere Möglichkeiten mit `else if`

Oft gibt es mehr als zwei Fälle. Unser Quiz soll am Schluss nicht nur «gewonnen» sagen, sondern einen Rang vergeben. Dafür hängen wir mit `else if` weitere Fragen an:

```js
if (score >= 5) {
  statusText.textContent = "Gold";
} else if (score >= 3) {
  statusText.textContent = "Silber";
} else if (score >= 1) {
  statusText.textContent = "Bronze";
} else {
  statusText.textContent = "Kein Rang";
}
```

Wichtig ist die Reihenfolge: JavaScript prüft die Bedingungen von oben nach unten und nimmt den **ersten** Weg, der stimmt. Alle anderen werden übersprungen.

| Wert von `score` | Angezeigter Rang |
| ---------------- | ---------------- |
| `6`              | `Gold`           |
| `4`              | `Silber`         |
| `2`              | `Bronze`         |
| `0`              | `Kein Rang`      |

Beginne deshalb immer beim «extremsten» Fall. Würden wir mit `score >= 1` starten, käme `Gold` nie zum Zug: Bei `6` Punkten stimmt bereits die erste Bedingung.

## Zusammenfassung

- `if` stellt eine Frage und führt Code nur aus, wenn die Antwort «ja» lautet.
- `else` bestimmt, was bei der Antwort «nein» passieren soll.
- Mit `==`, `!=`, `>`, `<`, `>=` und `<=` vergleichen wir zwei Werte.
- `=` setzt einen Wert, `==` vergleicht zwei Werte.
- Mit `else if` unterscheidet JavaScript mehrere Möglichkeiten und nimmt den ersten passenden Weg.

Im nächsten Kapitel lernst du den [Game Loop](../6-game-loop/inhalt) kennen. Damit prüft JavaScript solche Fragen nicht nur bei einem Klick, sondern viele Male pro Sekunde.

👉 Weiter zu den [Aufgaben](./aufgaben)
