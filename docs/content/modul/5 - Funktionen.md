# 5 - Funktionen

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

## Aufgaben

### 🎯 5.1 – Score Text als Funktion

Erstelle eine Funktion `updateScore()`, welche den Score erhöht und den Text im HTML aktualisiert und rufe die Funktion dort auf, wo der Score erhöht wird. Solchen Code in eine Funktion zu packen, dient einerseits der Übersicht, andererseits können wir die Funktion dann überall aufrufen, wenn wir den Score erhöhen wollen.

<details>
<summary>Lösung</summary>

```js
function updateScore() {
  scoreValue += 1; // Score erhöhen
  score.textContent = "Score: " + scoreValue; // Text im HTML aktualisieren
}
```

</details>

### 🎯 5.2 – Bewegung auslagern

Im if-else Kapitel steht die Bewegung direkt im `keydown` Event.

Jetzt lagern wir die Bewegung in eine Funktion aus.

Erstelle eine Funktion `handlePlayerMovement(event)`.

Diese Funktion soll:

* prüfen, welche Taste gedrückt wurde
* `movePlayer(...)` mit den passenden Werten aufrufen

<details>
<summary>Lösung</summary>

```js
function handlePlayerMovement(event) {
  if (event.key == "ArrowRight") {
    moveElement(player, 10, 0);
  } else if (event.key == "ArrowLeft") {
    moveElement(player, -10, 0);
  } else if (event.key == "ArrowUp") {
    moveElement(player, 0, 10);
  } else if (event.key == "ArrowDown") {
    moveElement(player, 0, -10);
  }
}
```

Danach wird dein Event kürzer:

```js
document.addEventListener("keydown", function(event) {
  handlePlayerMovement(event);
  // ... Weiterer code
});
```

</details>



### 🎯 5.3 – Feinde platzieren

Nun wollen wir Feinde auf dem Spielfeld platzieren, welche der Spieler vermeiden muss. Wir gehen in zwei Schritten vor:

1. Erstelle eine Funktion `createEnemy()`, welche ein [neues HTML Element erstellt](./7-cheatsheet#html-elemente-bearbeiten), (img) es mit einem Bild füllt und es an eine zufällige Position setzt [setPosition](/jsgame/3 - framework docs#setposition). Rufe die Funktion mit [setInverval](/modul/7-cheatsheet#listen-und-loops) alle 3 Sekunden auf.

2. Bewegung: erstelle ein neues [setInverval](/modul/7-cheatsheet#listen-und-loops), in welchem du jede 0.1 Sekunden [alle feinde selektierst](/modul/4-listen-und-loops#listen) und nach links bewegst.

<details>
<summary>Lösung Teil 1</summary>

```js
function createEnemy() {
    const enemy = document.createElement("img");

    // Das Element ist ein Bild und soll src="./assets/enemy.png" haben.
    enemy.src = "./assets/enemy.png"; 
    enemy.classList.add("enemy");

    // Das Element positionieren
    setPosition(enemy, 1400, Math.random() * 500);

    // Das Element soll im playground positioniert werden.
    document.querySelector("#playground").appendChild(enemy);
}


// Alle 2 Sekunden ufrufen
setInterval(() => {
    createEnemy();
}, 2000);

```
</details>


<details>
<summary>Lösung Teil 2</summary>

```js
// Führe jede 0.1 Sekunde aus
setInterval(() => {
    // Alle Feinde selektieren
    let enemies = document.querySelectorAll(".enemy")

    enemies.forEach(enemy => {
        // Jeder einzelne Feind bewegen
        moveElement(enemy, -10, 0)
    })
}, 100)
```
</details>

### 🎯 5.4 – Game Over bei Gegnerberührung
Damit unser Spiel fertig ist, brauchen wir nur noch genau ein if statement am richtigen ort, welches prüft, ob die Feinde uns bewegen. Weisst du, wo wir das brauchen?

Tipp: Wir müssen die Kollision nach jeder Bewegung der Feinde prüfen.


<details>
<summary>Lösung</summary>

```js
// Führe jede 0.1 Sekunde aus
setInterval(() => {
    let enemies = document.querySelectorAll(".enemy")
    enemies.forEach(enemy => {
        moveElement(enemy, -10, 0)

        // ----- Hier kommt der collision check hin -----
        if(isColliding(enemy, player)) {
            alert("Game over")
        }
    })
}, 100)
```
</details>

Wir sind nun fertig mit unserem zweiten Spiel!! Well done 🎉

Mehr Hintergrund findest du in der Theorie zu den [Funktionen](./6-theorie/5-funktionen).
