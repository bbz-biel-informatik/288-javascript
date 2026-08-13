# 2 - Variablen

Eine Variable gibt einem Wert einen Namen. Dadurch kann JavaScript den Wert später wiederfinden, verwenden und verändern.

Die Befehle findest du auch im Abschnitt [Variablen](../7-cheatsheet#variablen) des Cheatsheets.

## Eine beschriftete Box im Speicher

Du kannst dir eine Variable wie eine beschriftete Box vorstellen:

```js
let score = 0;
```

* `let` erstellt die Variable.
* `score` ist ihr Name.
* `=` weist ihr einen Wert zu.
* `0` ist der gespeicherte Wert.

Der Name sollte beschreiben, was gespeichert wird. `score` ist deshalb hilfreicher als ein Name wie `x`.

## Definieren und verändern

Beim ersten Erstellen schreiben wir `let`:

```js
let score = 0;
```

Danach existiert die Variable bereits. Um nur ihren Wert zu verändern, schreiben wir kein zweites `let`:

```js
score = 10;
```

Der alte Wert `0` wird dabei durch `10` ersetzt.

## Mit dem aktuellen Wert rechnen

```js
score = score + 1;
```

JavaScript liest zuerst den aktuellen Wert rechts vom `=`. Es addiert `1` und speichert das Ergebnis wieder in derselben Variable.

Die Kurzform bedeutet dasselbe:

```js
score += 1;
```

## Zahl oder Text?

In diesem Kurs verwenden wir vor allem Zahlen und Texte:

```js
let score = 10;
let playerName = "Nora";
```

Texte stehen in Anführungszeichen, Zahlen nicht. Das ist wichtig:

```js
let number = 10;
let text = "10";
```

Beide sehen für uns ähnlich aus, aber JavaScript behandelt sie unterschiedlich. Mit Zahlen kann gerechnet werden. Texte werden mit `+` aneinandergehängt.

```js
let points = 10 + 5;         // 15
let label = "Score: " + 5;  // "Score: 5"
```

## Gespeicherter Wert und sichtbarer Text

Eine Variable ist nicht automatisch auf der Webseite sichtbar:

```js
let scoreValue = 0;
```

Der Wert existiert zunächst nur im Speicher von JavaScript. Damit die Spielerinnen und Spieler ihn sehen, muss JavaScript ein HTML-Element aktualisieren:

```js
scoreValue += 1;
scoreText.textContent = "Score: " + scoreValue;
```

Hier haben `scoreValue` und `scoreText` verschiedene Aufgaben:

* `scoreValue` speichert die Zahl.
* `scoreText` verweist auf das HTML-Element der Anzeige.

## Auch HTML-Elemente können gespeichert werden

```js
let player = document.querySelector("#player");
```

`querySelector(...)` liefert das gefundene HTML-Element zurück. Die Variable `player` merkt sich dieses Element. Deshalb können wir es später verwenden:

```js
player.style.width = "100px";
player.remove();
```

## Wo ist eine Variable verfügbar?

Eine Variable kann nur in dem Bereich verwendet werden, in dem sie erstellt wurde. Dieser Bereich heisst **Scope**.

```js
let score = 0;

function updateScore() {
  let points = 1;
  score = score + points;
}
```

`score` wurde ausserhalb der Funktion erstellt und ist auch innerhalb der Funktion verfügbar. `points` wurde innerhalb der Funktion erstellt und ist nur dort verfügbar.

Merke:

> Eine Variable speichert einen Wert unter einem Namen. `let` brauchst du beim Erstellen, aber nicht beim späteren Verändern.
