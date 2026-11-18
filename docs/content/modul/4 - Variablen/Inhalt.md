# 4 - Variablen

Bis jetzt haben wir HTML-Elemente ausgewählt, verändert und auf Klicks reagiert. Unser JavaScript kann sich aber noch nichts merken. Genau das brauchen wir dauernd: einen Punktestand, ein Guthaben oder eine eingetippte Zahl.

Damit sich JavaScript einen Wert merken und ihn später verändern kann, verwenden wir eine **Variable**.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Variable mit `let` definieren,
- den Wert einer Variable verändern,
- mit Variablen und den Operatoren `+`, `-`, `*` und `/` rechnen,
- einen Text aus einem Textfeld auslesen und in einer Variable speichern und
- Zahlen und Texte unterscheiden.

## Unser Beispiel in diesem Kapitel

Jedes Spiel hat irgendwo einen Punktestand (score). Das ist ein gutes Beispiel für eine Variable. Wenn der Spieler erfolg hat, erhöht sich der score. Bei Misserfolg verringert er sich.

## Eine Variable definieren

Zu Beginn des Spiels steht der Punktestand auf `0`. Beim ersten Erstellen einer Variable schreiben wir `let`:

```js
let score = 0;
```

- `let` erstellt die Variable.
- `score` ist der Name der Variable.
- `=` legt einen Wert in der Variable ab.
- `0` ist der gespeicherte Wert.

Ab jetzt kann JavaScript den Namen `score` verwenden, um auf die gespeicherte Zahl zuzugreifen.

Merke:

> `let` brauchen wir nur, wenn wir eine Variable neu erstellen.

Die Schreibweise findest du unter [Variablen](../10-cheatsheet#variablen) im Cheatsheet.

## Den Wert verändern

Startet eine neue Runde, setzen wir den Punktestand wieder auf `0`. Die Variable existiert bereits, deshalb schreiben wir **kein** zweites `let`:

```js
score = 0;
```

Der alte Wert wird dabei durch den neuen ersetzt:

```text
vorher: score → 12
danach: score → 0
```

Meistens wissen wir beim Programmieren aber gar nicht, welcher Wert gerade gespeichert ist. Bei einem Treffer wollen wir nur sagen: Zähle einen Punkt dazu.

```js
score = score + 1;
```

JavaScript arbeitet dabei von rechts nach links:

1. Lies den aktuellen Wert von `score`.
2. Rechne `1` dazu.
3. Speichere das Ergebnis wieder in `score`.

Standen vorher `3` Punkte darin, sind es danach `4`.

Die vier Rechenoperatoren funktionieren so:

```js
score = score + 1; // addieren
score = score - 5; // subtrahieren
score = score * 2; // multiplizieren
score = score / 2; // dividieren
```

### Kurzschreibweise

Wenn das Ergebnis wieder in derselben Variable landet, geht es auch kürzer:

```js
score = score + 1;
score += 1;
```

Beide Zeilen bedeuten genau dasselbe:

| Lange Schreibweise  | Kurzschreibweise | Bedeutung              |
| ------------------- | ---------------- | ---------------------- |
| `score = score + 1` | `score += 1`     | `1` addieren           |
| `score = score - 5` | `score -= 5`     | `5` subtrahieren       |
| `score = score * 2` | `score *= 2`     | mit `2` multiplizieren |
| `score = score / 2` | `score /= 2`     | durch `2` dividieren   |

Die Kurzschreibweisen findest du auch im [Cheatsheet](../10-cheatsheet#variablen).

## Zahl oder Text? - Datentypen

Variablen können sehr unterschiedliche Werte enthalten. Im Kurs brauchen wir vor allem zwei: **Zahlen** und **Texte**. Texte schreiben wir mit Anführungszeichen:

```js
let score = 0; // Zahl
let spielerName = "Nora"; // Text
```

Die Struktur bleibt immer dieselbe: `let ____ = ____`. Auch ein HTML-Element können wir so speichern, das kennen wir bereits:

```js
let startButton = document.querySelector("#startButton");
```

Zahl und Text sehen für uns ähnlich aus, aber JavaScript behandelt sie unterschiedlich:

- Mit der Zahl `10` kann JavaScript rechnen.
- `"10"` ist ein Text und wird wie ein Wort behandelt.

Das sehen wir beim `+` besonders gut:

```js
let summe = 10 + 1; // 11
let anzeige = "Punkte: " + 10; // "Punkte: 10"
```

## Text auslesen

Vor dem Spiel tippen die Spielerinnen und Spieler ihren Namen in ein Textfeld. Mit [`value`](../10-cheatsheet#html-elemente-bearbeiten) lesen wir diesen Text aus und speichern ihn in einer Variable:

```js
let nameField = document.querySelector("#nameField");
let spielerName = nameField.value; // z. B. "Nora"
```

Das funktioniert immer gleich:

1. Das Textfeld mit `document.querySelector(...)` auswählen.
2. Mit `.value` den eingetippten Text lesen.
3. Den Text in einer Variable speichern.

Wichtig ist: Aus einem Textfeld kommt **immer ein Text**, auch wenn eine Zahl darin steht. Tippt jemand `5` ein, erhalten wir `"5"` als Text. Rechnen wir damit, hängt JavaScript die Werte einfach aneinander:

```js
let falsch = nameField.value + 1; // "51" statt 6
```

Damit JavaScript rechnen kann, verwandeln wir den Text mit `Number(...)` in eine Zahl:

```js
let startScore = Number(nameField.value); // 5 als Zahl
let richtig = startScore + 1; // 6
```

Merke:

> Alles, was aus einem Textfeld kommt, ist ein Text. Wollen wir eine Zahl zum Rechnen, brauchen wir `Number(...)`.

## Gespeicherter Wert und sichtbarer Text

Eine Variable ist nicht automatisch auf der Webseite sichtbar. Der Wert existiert zunächst nur im Speicher von JavaScript. Damit ihn jemand sieht, schreiben wir ihn in ein HTML-Element:

```js
scoreText.textContent = score;
scoreText.textContent = "Punkte: " + score;
```

[`textContent`](../10-cheatsheet#html-elemente-bearbeiten) verändert den sichtbaren Text. Das `+` verbindet dabei einen Text mit dem aktuellen Wert aus der Variable.

## Variablennamen

Die Namen bestimmen wir selbst. Würden wir schreiben:

```js
let x = 0;
```

ist für uns Menschen nicht erkennbar, ob damit Punkte, Geld oder eine Temperatur gemeint ist. Treffende Namen helfen, den eigenen Code später wieder zu verstehen und Fehler schneller zu finden.

Für Variablennamen gelten einige Regeln:

- Ein Name darf keine Leerzeichen enthalten.
- Ein Name sollte mit einem Buchstaben beginnen.
- Gross- und Kleinschreibung sind wichtig: `score` und `Score` wären zwei verschiedene Namen.
- Bei mehreren Wörtern schreiben wir das erste klein und die folgenden mit einem Grossbuchstaben. Das ist Konvention, keine Regel.

```js
let scoreProTreffer = 10;
let spielerName = "Carla";
```

## Zusammenfassung

> Eine Variable speichert einen Wert unter einem Namen.

- Mit `let score = 0` erstellen wir eine Variable.
- Mit `score = 0` ersetzen wir ihren Wert, mit `score = score + 1` oder kurz `score += 1` rechnen wir mit dem aktuellen Wert weiter.
- Zahlen stehen ohne, Texte mit Anführungszeichen.
- Mit `.value` lesen wir den Text aus einem Textfeld in eine Variable.
- `Number(...)` verwandelt diesen Text in eine Zahl, damit wir rechnen können.
- Mit `textContent` zeigen wir einen gespeicherten Wert an.

Im nächsten Kapitel [If-Else](../5-if-else/inhalt) lernst du, wie JavaScript gespeicherte Werte prüft und daraus Entscheidungen ableitet.

👉 Weiter zu den [Aufgaben](./aufgaben)
