# if - else

## Worum geht es?

Mit `if`, `else if` und `else` kann JavaScript Entscheidungen treffen.

Ein `if` prüft eine Bedingung. Wenn diese Bedingung stimmt, wird der Code in den geschweiften Klammern ausgeführt.

```js
let age = 18;

if (age >= 18) {
  console.log("Du bist volljährig");
}
```

In diesem Beispiel wird `"Du bist volljährig"` in der Konsole ausgegeben, weil `age` grösser oder gleich 18 ist.

## if

Ein `if` braucht immer eine Bedingung in runden Klammern:

```js
if (age >= 16) {
  console.log("Du darfst Töffli fahren");
}
```

Aufbau:

* `if` → prüft eine Bedingung
* `(age >= 16)` → Bedingung
* `{ ... }` → Code, der nur ausgeführt wird, wenn die Bedingung stimmt

## else

Mit `else` definieren wir, was passieren soll, wenn die Bedingung nicht stimmt.

```js
let temperature = 8;

if (temperature > 20) {
  console.log("Es ist warm");
} else {
  console.log("Es ist eher kalt");
}
```

`else` braucht keine eigene Bedingung. Es bedeutet einfach: sonst.

## else if

Mit `else if` können mehrere Möglichkeiten geprüft werden.

```js
let city = "Warschau";

if (city == "Warschau") {
  console.log("Das liegt in Polen!");
} else if (city == "Berlin") {
  console.log("Das liegt in Deutschland!");
} else {
  console.log("Diese Stadt kenne ich nicht");
}
```

JavaScript prüft von oben nach unten. Sobald eine Bedingung stimmt, wird dieser Block ausgeführt. Die restlichen `else if` und `else` Blöcke werden dann übersprungen.

## Vergleiche

In Bedingungen vergleichen wir Werte miteinander.

Diese Vergleiche brauchst du am meisten:

```js
if (city == "Warschau") // Gleich
if (city != "Warschau") // Nicht gleich
if (score > 10)         // Grösser als
if (score < 10)         // Kleiner als
if (score >= 10)        // Grösser oder gleich
if (score <= 10)        // Kleiner oder gleich
```

Wichtig:

* `=` setzt einen Wert
* `==` vergleicht zwei Werte

```js
let score = 10;   // Wert setzen (Wird in Variablen benutzt)

if (score == 10) { // Vergleich (Wird in Bedingungen benutzt)
  console.log("Score ist 10");
}
```

## if / else if / else oder mehrere if?

Es gibt einen wichtigen Unterschied zwischen diesen zwei Varianten:

```js
if (temperature > 30) {
  console.log("Es ist heiss");
} else if (temperature > 20) {
  console.log("Es ist angenehm");
} else if (temperature > 10) {
  console.log("Es ist kühl");
} else {
  console.log("Es ist kalt");
}
```

Hier wird nur ein Block ausgeführt. Sobald eine Bedingung stimmt, wird der Rest übersprungen.

```js
if (temperature > 30) {
  console.log("Es ist heiss");
}

if (temperature > 20) {
  console.log("Es ist angenehm");
}

if (temperature > 10) {
  console.log("Es ist kühl");
}
```

Hier wird jede Bedingung einzeln geprüft. Wenn `temperature` zum Beispiel 32 ist, stimmen alle drei Bedingungen und alle drei Texte werden ausgegeben. (Das wäre hier nicht optimal)

Merke:

* `if / else if / else` → genau eine passende Variante auswählen
* mehrere `if` → mehrere Dinge unabhängig voneinander prüfen

## Aufgabe 1: Game Over Meldung verbessern

In der Variablen-Aufgabe haben wir bereits eine Game Over Logik eingebaut:

```js
if (timeLeft == 0) {
  alert("Game Over. Dein Score: " + scoreValue);
  scoreValue = 0;
  timeLeft = 10;
}
```

Jetzt soll die Meldung genauer werden. Je nach Score soll eine andere Bewertung angezeigt werden:

* Mehr als 20 Punkte: `"Sehr gut!"`
* Mehr als 10 Punkte: `"Gut!"`
* Mehr als 5 Punkte: `"Das kannst du besser"`
* 5 Punkte oder weniger: `"Schlecht!"`

Gehe dabei wie folgt vor:

* Prüfe den `scoreValue` mit `if`, `else if` und `else`. Theorie: [Else if](#if--else-if--else-oder-mehrere-if)
* Baue die entsprechende Meldung in das `alert` ein.

<details>
<summary>Tipps</summary>

(Es gibt mehrere Möglichkeiten, hier eine davon)

```js
if (scoreValue > 20) {
  alert("Game Over. Dein Score: " + scoreValue + ". Sehr gut!");
} else if (scoreValue > 10) {
  alert("Game Over. Dein Score: " + scoreValue + ". Gut!");
} else if (scoreValue > 5) {
  alert("Game Over. Dein Score: " + scoreValue + ". Das kannst du besser");
} else {
  alert("Game Over. Dein Score: " + scoreValue + ". Schlecht!");
}
```
</details>

## Aufgabe 2: Highscore einbauen

Nun soll sich das Spiel den besten Score merken.

Gehe dabei wie folgt vor:

* Erstelle eine [globale](4-variablen#scope-von-variablen) Variable `highscore` und setze sie auf 0.
* Erstelle ein HTML Element für den Highscore und gib ihm die ID `highscore`.
* Selektiere das Element im JavaScript mit `document.querySelector("#highscore")`.
* Wenn das Spiel vorbei ist, prüfe ob `scoreValue` grösser als `highscore` ist.
* Wenn ja, speichere den neuen Highscore und aktualisiere den Text im HTML.

<details>
<summary>Lösung</summary>

```js
let highscore = 0;
let highscoreElement = document.querySelector("#highscore");

if (scoreValue > highscore) {
  highscore = scoreValue;
  highscoreElement.textContent = "Highscore: " + highscore;
}
```

</details>

## Aufgabe 3: Spieler wird kleiner 

Wenn der Score steigt, soll der Spieler schwieriger zu treffen sein.

Gehe dabei wie folgt vor:

* Setze die Breite und Höhe des Spielers am Anfang auf `100px`.
* Wenn `scoreValue` grösser als 10 ist, mache den Spieler kleiner.
* Wenn `scoreValue` grösser als 20 ist, mache den Spieler nochmals kleiner.

```js
player.style.width = "100px"; // So setzt du die Breite eines HTML Elements
player.style.height = "100px"; // So setzt du die Höhe eines HTML Elements
```

<details>
<summary>Tipp: Wo platzieren wir den code?</summary>
Der Code kommt am besten in die Click Event Funktion des Spielers. Denn dort wird der Score erhöht, und wir wollen ja direkt danach prüfen, ob der Spieler kleiner werden soll.

```js
player.addEventListener("click", function () {
  scoreValue += 1;
  score.textContent = "Score: " + scoreValue;
  // Hier kommt der Code hin, um den Spieler kleiner zu machen
});
```
</details>


<details>
<summary>Tipps (If statement)</summary>

```js
if (scoreValue > 20) {
  player.style.width = "50px";
  player.style.height = "50px";
} else if (scoreValue > 10) {
  player.style.width = "75px";
  player.style.height = "75px";
} else {
  player.style.width = "100px";
  player.style.height = "100px";
}
```

</details>
