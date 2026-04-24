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

## 🎮 Aufgaben

### Aufgabe 1: Eat Game starten

Nun starten wir ein neues Spiel: Eat Game.


In diesem Spiel wird der Spieler mit der Tastatur bewegt. Ziel ist es, Food (Etwas zu essen) einzusammeln. Jedes Mal, wenn der Spieler Food berührt, gibt es einen Punkt.

Lade das vorbereitete Projekt herunter und schaue dir das HTML / Javascript an. Das meiste wird dir bereits bekannt vorkommen!

[Eat Game Starter ZIP](/assets/zips/eat-game-starter.zip)

### Aufgabe 2: Spieler mit der Tastatur bewegen

Der Spieler soll mit den Pfeiltasten bewegt werden.

Gehe dabei wie folgt vor:

* Verwende einen [`keydown`](./8-cheatsheet#events) Event.
* Prüfe mit `if`, `else if`, welche Taste gedrückt wurde.
* Verwende `movePlayer(...)`, um den Spieler zu bewegen.

`movePlayer(deltaX, deltaY)` bewegt den Spieler um `deltaX` Pixel nach rechts und `deltaY` Pixel nach oben.

---Bis hier gecheckt---

<details>
<summary>Tipp</summary>

```js
let player = document.querySelector("#player");

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    movePlayer(10, 0);
  } else if (event.key == "ArrowLeft") {
    movePlayer(-10, 0);
  } else if (event.key == "ArrowUp") {
    movePlayer(0, 10);
  } else if (event.key == "ArrowDown") {
    movePlayer(0, -10);
  }
});
```

</details>

### Aufgabe 3: Food essen

Jetzt soll geprüft werden, ob der Spieler das Food berührt.

Das Game Framework hat dafür die Funktion:

```js
isColliding(player, food);
```

Gehe dabei wie folgt vor:

* Selektiere das Food Element mit `document.querySelector("#food")`.
* Erstelle eine Variable `scoreValue` und setze sie auf 0.
* Prüfe nach jeder Bewegung, ob `isColliding(player, food)` stimmt.
* Wenn ja, erhöhe den Score um 1.
* Aktualisiere den Score Text.

<details>
<summary>Tipp</summary>

```js
let food = document.querySelector("#food");
let score = document.querySelector("#score");
let scoreValue = 0;

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    movePlayer(10, 0);
  } else if (event.key == "ArrowLeft") {
    movePlayer(-10, 0);
  } else if (event.key == "ArrowUp") {
    movePlayer(0, 10);
  } else if (event.key == "ArrowDown") {
    movePlayer(0, -10);
  }

  if (isColliding(player, food)) {
    scoreValue += 1;
    score.textContent = "Score: " + scoreValue;
  }
});
```

</details>

### Aufgabe 4 (Zusatz): Bewegung begrenzen
-> Mache diese Aufgabe, wenn du noch genügend Zeit hast.

Der Spieler soll nicht links aus dem Spielfeld laufen.

Für den Anfang lösen wir nur die linke Seite.

Gehe dabei wie folgt vor:

* Erstelle eine Variable `playerX` und setze sie auf 0.
* Wenn `ArrowLeft` gedrückt wird, prüfe zuerst ob `playerX > 0` ist.
* Nur dann darf der Spieler nach links bewegt werden.
* Passe `playerX` bei jeder Rechts- und Linksbewegung an.

<details>
<summary>Tipp</summary>

```js
let playerX = 0;

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    movePlayer(10, 0);
    playerX += 10;
  } else if (event.key == "ArrowLeft") {
    if (playerX > 0) {
      movePlayer(-10, 0);
      playerX -= 10;
    }
  }
});
```

</details>
