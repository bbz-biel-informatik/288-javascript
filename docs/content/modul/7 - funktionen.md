# Funktionen

## Worum geht es?

Funktionen fassen Code zusammen.

So können wir denselben Code mehrfach verwenden, ohne ihn immer wieder neu zu schreiben.

```js
function sayHello() {
  console.log("Hello");
}

sayHello();
```

Eine Funktion wird zuerst definiert. Danach kann sie mit ihrem Namen aufgerufen werden.

## Funktion ohne Parameter

Diese Funktion hat keine zusätzlichen Werte:

```js
function showMessage() {
  console.log("Willkommen");
}

showMessage();
```

Alles in `{ ... }` gehört zur Funktion.

## Funktion mit Parameter

Parameter sind Werte, die wir einer Funktion mitgeben.

```js
function greet(name) {
  console.log("Hello " + name);
}

greet("Max");
greet("Nora");
```

`name` ist der Parameter.

`"Max"` und `"Nora"` sind Argumente. Das sind die Werte, die wir beim Aufrufen mitgeben.

## Funktion mit mehreren Parametern

Eine Funktion kann mehrere Parameter haben.

```js
function styleElement(element, color, size) {
  element.style.color = color;
  element.style.width = size + "px";
  element.style.height = size + "px";
}

let box = document.querySelector("#box");
styleElement(box, "red", 100);
```

Diese Funktion verändert ein HTML Element.

## return

Mit `return` gibt eine Funktion einen Wert zurück.

```js
function double(number) {
  return number * 2;
}

let result = double(5);
console.log(result);
```

`result` hat danach den Wert `10`.

## Warum Funktionen im Click Game?

Im Click Game passiert vieles immer wieder:

* Score Text aktualisieren
* Spieler zufällig platzieren
* Spielergrösse anpassen
* Game Over Meldung anzeigen
* Spiel zurücksetzen

Wenn wir dafür Funktionen schreiben, bleibt der Code übersichtlicher.

## Vorbereitung im Click Game

Für die nächsten Aufgaben brauchen wir diese Elemente und Variablen:

```js
let player = document.querySelector("#player");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");

let scoreValue = 0;
let timeLeft = 10;
let highscore = 0;
```

Falls du `#timer` oder `#highscore` noch nicht im HTML hast, erstelle diese Elemente zuerst.

## Aufgabe 1: Score Text als Funktion

Erstelle eine Funktion `updateScore()`.

Diese Funktion soll den Score Text im HTML aktualisieren.

<details>
<summary>Tipp</summary>

```js
function updateScore() {
  score.textContent = "Score: " + scoreValue;
}
```

Rufe `updateScore()` immer dann auf, wenn sich `scoreValue` verändert.

</details>

## Aufgabe 2: Spieler zufällig platzieren

Erstelle eine Funktion `movePlayerRandom()`.

Diese Funktion soll:

* eine zufällige x-Position erstellen
* eine zufällige y-Position erstellen
* den Spieler mit `setPosition(player, x, y)` platzieren

<details>
<summary>Tipp</summary>

```js
function movePlayerRandom() {
  let x = Math.random() * 500;
  let y = Math.random() * 300;

  setPosition(player, x, y);
}
```

Rufe `movePlayerRandom()` im Click Event des Spielers auf.

</details>

## Aufgabe 3: Spielergrösse als Funktion

Im if-else Kapitel hast du den Spieler kleiner gemacht, wenn der Score steigt.

Erstelle nun eine Funktion `updatePlayerSize()`.

Diese Funktion soll:

* prüfen, wie hoch `scoreValue` ist
* die passende Grösse setzen

<details>
<summary>Tipp</summary>

```js
function updatePlayerSize() {
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
}
```

Rufe `updatePlayerSize()` im Click Event direkt nach dem Erhöhen des Scores auf.

</details>

## Aufgabe 4: Feedback Funktion mit return

Erstelle eine Funktion `getFeedback(score)`.

Diese Funktion soll je nach Score einen Text zurückgeben.

<details>
<summary>Tipp</summary>

```js
function getFeedback(score) {
  if (score > 20) {
    return "Sehr gut!";
  } else if (score > 10) {
    return "Gut!";
  } else if (score > 5) {
    return "Das kannst du besser";
  } else {
    return "Schlecht!";
  }
}
```

So kannst du die Funktion verwenden:

```js
let feedback = getFeedback(scoreValue);
alert("Game Over. Dein Score: " + scoreValue + ". " + feedback);
```

</details>

## Aufgabe 5: Game Over als Funktion

Erstelle eine Funktion `showGameOver()`.

Diese Funktion soll:

* den Feedback Text mit `getFeedback(scoreValue)` holen
* den Highscore prüfen
* die Game Over Meldung anzeigen
* Score und Timer zurücksetzen
* HTML Texte aktualisieren

<details>
<summary>Tipp</summary>

```js
function showGameOver() {
  let feedback = getFeedback(scoreValue);

  if (scoreValue > highscore) {
    highscore = scoreValue;
  }

  alert("Game Over. Dein Score: " + scoreValue + ". " + feedback);

  scoreValue = 0;
  timeLeft = 10;

  updateScore();
  timer.textContent = "Time: " + timeLeft;
}
```

Rufe `showGameOver()` auf, wenn `timeLeft == 0` ist.

</details>

## Aufgabe 6: Click Event aufräumen

Am Schluss soll dein Click Event kürzer werden.

Beispiel:

```js
player.addEventListener("click", function () {
  scoreValue += 1;

  updateScore();
  updatePlayerSize();
  movePlayerRandom();
});
```

Teste danach:

* Beim Klick steigt der Score.
* Der Spieler springt an eine zufällige Position.
* Der Spieler wird bei höherem Score kleiner.
* Bei Game Over erscheint die passende Meldung.
