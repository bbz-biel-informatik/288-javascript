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

## Warum Funktionen im Eat Game?

Im Eat Game passiert vieles immer wieder:

* Spieler bewegen
* Score Text aktualisieren
* Food neu platzieren
* Timer aktualisieren
* Spiel zurücksetzen

Wenn wir dafür Funktionen schreiben, bleibt der Code übersichtlicher.

## Vorbereitung im Eat Game

Für die nächsten Aufgaben brauchen wir diese Elemente und Variablen:

```js
let player = document.querySelector("#player");
let food = document.querySelector("#food");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");

let scoreValue = 0;
let timeLeft = 20;
```

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

</details>

## Aufgabe 2: Bewegung auslagern

Im if-else Kapitel steht die Bewegung direkt im `keydown` Event.

Jetzt lagern wir die Bewegung in eine Funktion aus.

Erstelle eine Funktion `handlePlayerMovement(event)`.

Diese Funktion soll:

* prüfen, welche Taste gedrückt wurde
* `movePlayer(...)` mit den passenden Werten aufrufen

<details>
<summary>Tipp</summary>

```js
function handlePlayerMovement(event) {
  if (event.key == "ArrowRight") {
    movePlayer(10, 0);
  } else if (event.key == "ArrowLeft") {
    movePlayer(-10, 0);
  } else if (event.key == "ArrowUp") {
    movePlayer(0, 10);
  } else if (event.key == "ArrowDown") {
    movePlayer(0, -10);
  }
}
```

Danach wird dein Event kürzer:

```js
document.addEventListener("keydown", function(event) {
  handlePlayerMovement(event);
});
```

</details>



## Aufgabe 3: Food neu platzieren

Erstelle eine Funktion `moveFoodRandom()`.

Diese Funktion soll:

* eine zufällige x-Position erstellen
* eine zufällige y-Position erstellen
* das Food mit `setPosition(food, x, y)` platzieren

<details>
<summary>Tipp</summary>

```js
function moveFoodRandom() {
  let x = Math.random() * 500;
  let y = Math.random() * 300;

  setPosition(food, x, y);
}
```

</details>

## Aufgabe 4: Food essen als Funktion

Erstelle eine Funktion `checkFoodCollision()`.

Diese Funktion soll:

* prüfen, ob `isColliding(player, food)` stimmt
* wenn ja, den Score erhöhen
* den Score Text aktualisieren
* das Food neu platzieren

<details>
<summary>Tipp</summary>

```js
function checkFoodCollision() {
  if (isColliding(player, food)) {
    scoreValue += 1;
    updateScore();
    moveFoodRandom();
  }
}
```

Rufe `checkFoodCollision()` direkt nach der Bewegung auf.

</details>

## Aufgabe 5: Timer als Funktion

Erstelle eine Funktion `updateTimer()`.

Diese Funktion soll:

* prüfen, ob `timeLeft > 0` ist
* den Timer verringern
* den Text im HTML aktualisieren
* bei 0 das Spiel beenden

<details>
<summary>Tipp</summary>

```js
function updateTimer() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    timer.textContent = "Time: " + timeLeft;
  } else {
    alert("Game Over. Dein Score: " + scoreValue);
  }
}

setInterval(updateTimer, 1000);
```

</details>

## Aufgabe 6: Event aufräumen

Am Schluss soll dein `keydown` Event kurz bleiben.

Beispiel:

```js
document.addEventListener("keydown", function(event) {
  handlePlayerMovement(event);
  checkFoodCollision();
});
```

Teste danach:

* Der Spieler bewegt sich mit den Pfeiltasten.
* Wenn der Spieler Food berührt, steigt der Score.
* Das Food springt an eine neue zufällige Position.
* Der Timer zählt herunter.
