# 5 - Variablen

Unser Roboter kann sich bewegen und Energie einsammeln. Ein Spiel braucht aber auch Werte, die sich während des Spielens verändern. Der Roboter soll deshalb eine bestimmte Anzahl Leben besitzen:

1. Zu Beginn hat der Roboter `1000` Leben.
2. Solange eine Bewegungstaste gedrückt ist, verliert er bei jedem Durchlauf des Game Loops ein Leben.
3. Beim Einsammeln von Energie werden seine Leben wieder auf `1000` gesetzt.
4. Später soll das Spiel enden, wenn keine Leben mehr übrig sind.

Damit das funktioniert, muss sich JavaScript die aktuelle Anzahl Leben merken und verändern können. Dafür verwenden wir eine **Variable**.

Die Schreibweisen findest du auch unter [Variablen](../9-cheatsheet#variablen) im Cheatsheet.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Variable mit `let` definieren,
- den Wert einer Variable verändern,
- mit Variablen und den Operatoren `+`, `-`, `*` und `/` rechnen und
- Zahlen und Texte unterscheiden.

## Eine beschriftete Box im Speicher

Du kannst dir eine Variable wie eine beschriftete Box vorstellen:

```js
let life = 1000;
```

- `let` erstellt die Variable.
- `life` ist der Name der Variable.
- `=` legt einen Wert in der Variable ab.
- `1000` ist der gespeicherte Wert.

Der Name sollte beschreiben, was gespeichert wird. `life` ist deshalb hilfreicher als ein Name wie `x`.

## Eine Variable definieren

Beim ersten Erstellen einer Variable schreiben wir `let`:

```js
let life = 1000;
```

Ab jetzt kann JavaScript den Namen `life` verwenden, um auf die gespeicherte Zahl `1000` zuzugreifen.

Merke:

> `let` brauchen wir nur, wenn wir eine Variable neu erstellen.

Die Schreibweise zum [Definieren einer Variable](../9-cheatsheet#variablen) findest du im Cheatsheet.

## Den Wert verändern

Wenn der Roboter ein Leben verliert, soll aus `1000` der neue Wert `999` werden. Die Variable existiert bereits, deshalb schreiben wir kein zweites `let`:

```js
life = 999;
```

Der alte Wert wird dabei durch den neuen Wert ersetzt.

```text
vorher: life → 1000
danach: life → 999
```

Mit `=` setzen wir also einen neuen Wert. Die Schreibweise findest du unter [Variablen](../9-cheatsheet#variablen) im Cheatsheet.

## Werte ändern

Meistens wissen wir beim Programmieren nicht genau, welcher Wert gerade in `life` gespeichert ist. Wir wollen nur sagen: Ziehe ein Leben vom aktuellen Wert ab.

```js
life = life - 1;
```

JavaScript arbeitet dabei von rechts nach links:

1. Lies den aktuellen Wert von `life`.
2. Ziehe `1` ab.
3. Speichere das Ergebnis wieder in `life`.

Wenn vorher `1000` gespeichert war, steht danach `999` in der Variable.

Soll der Wert einmal um ein Leben steigen, addieren wir `1`:

```js
life = life + 1;
```

Die vier Rechenoperatoren funktionieren so:

```js
life = life + 1; // addieren
life = life - 1; // subtrahieren
life = life * 2; // multiplizieren
life = life / 2; // dividieren
```

### Kurzschreibweise

Wenn das Ergebnis wieder in derselben Variable gespeichert wird, bietet JavaScript eine kürzere Schreibweise an:

```js
life = life - 1;
life -= 1;
```

Beide Zeilen bedeuten genau dasselbe. Bei der Kurzschreibweise steht der Rechenoperator direkt vor dem `=`:

| Lange Schreibweise | Kurzschreibweise | Bedeutung |
| --- | --- | --- |
| `life = life + 1` | `life += 1` | `1` addieren |
| `life = life - 1` | `life -= 1` | `1` subtrahieren |
| `life = life * 2` | `life *= 2` | mit `2` multiplizieren |
| `life = life / 2` | `life /= 2` | durch `2` dividieren |

Du kannst beide Schreibweisen verwenden. Die Kurzform ist praktisch, weil wir den Variablennamen nicht zweimal schreiben müssen.

Die Rechnungen und Kurzschreibweisen mit [`+=`, `-=`, `*=` und `/=`](../9-cheatsheet#variablen) findest du auch im Cheatsheet.

## Zahl oder Text? - Datentypen

Bis jetzt haben wir Variablen als Zahlen gesehen. Variablen können aber sehr unterschiedliche Werte beinhalten! Zum Beispiel:

- Text
- Liste
- HTML Element
- Komplexes Objekt {}

HTML Element haben wir bereits im ersten Kapitel angeschaut. Das hier bedeutet nichts anderes als "Finde das HTML Element und speichere es in einer Variable":

```js
let robot = document.querySelector("#robot“);

```

Die Struktur bleibt immer dieselbe: `let ____ = ____`

Texte definieren wir genau gleich, nur verwenden wir `"`:

```js
let life = 1000;
let status = "Roboter bereit"; // Das hier ist nun ein Text und keine Zahl. Beachte die Anführungszeichen
```

Beide sehen für uns ähnlich aus, aber JavaScript behandelt sie unterschiedlich:

- Mit der Zahl `1000` kann JavaScript rechnen.
- `"1000"` ist ein Text und wird wie ein Wort behandelt.

Das sehen wir beim `+` besonders gut, wenn wir mit Variablen rechnen:

```js
let result = 1000 + 1; // 1001
let label = "Leben: " + 1000; // "Leben: 1000"
```

## Gespeicherter Wert und sichtbarer Text

Eine Variable ist nicht automatisch auf der Webseite sichtbar:

```js
let life = 1000;
```

Der Wert existiert zunächst nur im Speicher von JavaScript. Damit die Spielerinnen und Spieler ihn sehen, schreiben wir ihn in ein HTML-Element. Das kennen wir bereits, nun aber können wir eine Variable verwenden:

```js
statusText.textContent = "Leben: " + life;
```

[`textContent`](../9-cheatsheet#html-elemente-bearbeiten) verändert den sichtbaren Text. Das `+` verbindet den Text `"Leben: "` mit dem aktuellen Wert aus `life`.

## Variablennamen

Die Variablennamen können wir komplett selbst bestimmen. Um den Code übersichtlich zu halten, ist es wichtig, die Variablen treffend zu benennen! Würden wir z.b folgendes schreiben:

```js
let x = 1000;
```

Und verwenden x als Leben des spielers, ist es für mich als Mensch sehr schwierig zu verstehen, was genau gemeint ist. Wir wählen treffende Namen, um:

- den eigenen Code später wieder zu verstehen,
- Variablen nicht miteinander zu verwechseln,
- Fehler schneller zu finden und
- mit anderen Personen am gleichen Code zu arbeiten.

Für Variablennamen gelten einige Regeln:

- Ein Name darf keine Leerzeichen enthalten.
- Ein Name sollte mit einem Buchstaben beginnen.
- Gross- und Kleinschreibung sind wichtig: `life` und `Life` wären zwei verschiedene Namen.
- Besteht ein Name aus mehreren Wörtern, schreiben wir das erste Wort klein und beginnen die folgenden Wörter mit einem Grossbuchstaben. Das ist aber eher konvention als Regel

```js
let playerName = "Nora";
let remainingLife = 1000;
```

Das Erstellen von Variablen mit [`let`](../9-cheatsheet#variablen) findest du auch im Cheatsheet.

## Zusammenfassung

> Eine Variable speichert einen Wert unter einem Namen.

- Mit `let life = 1000` erstellen wir eine Variable.
- Mit `life = 999` ersetzen wir ihren Wert.
- Mit `life = life - 1` oder kurz `life -= 1` verändern wir den aktuellen Wert.
- Zahlen stehen ohne, Texte mit Anführungszeichen.
- Mit `textContent` können wir einen gespeicherten Wert anzeigen.
- Variablennamen sind treffend zu wählen.

👉 Weiter zu den [Aufgaben](./aufgaben)
