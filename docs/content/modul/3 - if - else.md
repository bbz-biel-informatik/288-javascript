# 3 - If-Else

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

## Aufgaben

### 🎯 3.1 – Click Game fertig machen

Wir beenden nun das click game. Was noch fehlt ist ein klassisches "game over" wenn die Zeit abgelaufen ist. Dazu verwenden wir ein [if](#if) statement in der timer funktion. Überlege dir, wie du das machen würdest!

<details>
<summary>Tipp Vorgehensweise</summary>

- Prüfe in der timer funktion, ob die Variable "timeLeft" [kleiner oder gleich 0](#vergleiche) ist.
- Wenn ja, mache ein `alert('Game Over!')`

```js
setInterval(() => {
    timeLeft -= 1;
    timer.textContent = timeLeft + "s";

    // Hier kommt der check
}, 1000)
```

</details>

Mehr Hintergrund findest du in der Theorie zu [If-Else](./6-theorie/3-if-else).

<details>
<summary>Lösung</summary>

```js
setInterval(() => {
   timeLeft -= 1;
   timer.textContent = timeLeft + "s";

   if(timeLeft <= 0){
    alert('Game Over! du hast ' + score + ' Punkte!')
   }
}, 1000)

```
</details>

-> Gratuliere, du hast jetzt das click game fertig! 🎉



### 🎯 3.2 – Eat Game starten

Nun starten wir ein neues Spiel: Eat Game.


In diesem Spiel wird der Spieler mit der Tastatur bewegt. Ziel ist es, Food (Etwas zu essen) einzusammeln. Jedes Mal, wenn der Spieler Food berührt, gibt es einen Punkt.

Lade das vorbereitete Projekt herunter und schaue dir das HTML / Javascript an. Das meiste wird dir bereits bekannt vorkommen!

[Eat Game Starter ZIP](/assets/zips/eat-game-starter.zip)

### 🎯 3.3 – Spieler mit der Tastatur bewegen

Der Spieler soll mit den Pfeiltasten bewegt werden.

Gehe dabei wie folgt vor:

* Verwende einen [`keydown`](./7-cheatsheet#events) Event.
* Prüfe mit `if`, `else if`, welche Taste gedrückt wurde.
* Verwende `moveElement(...)`, um den Spieler zu bewegen.

`moveElement(element, deltaX, deltaY)` bewegt das zuvor selektierte Element um `deltaX` Pixel nach rechts und `deltaY` Pixel nach oben.


<details>
<summary>Lösung</summary>

```js
let player = document.querySelector("#player");

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    moveElement(player, 10, 0);
  } else if (event.key == "ArrowLeft") {
    moveElement(player, -10, 0);
  } else if (event.key == "ArrowUp") {
    moveElement(player, 0, 10);
  } else if (event.key == "ArrowDown") {
    moveElement(player, 0, -10);
  }
});
```

</details>

### 🎯 3.4 – Food essen (Collision)

Jetzt soll geprüft werden, ob der Spieler das Food berührt.

Das Game Framework hat dafür die Funktion:

```js
isColliding(player, food);
```

Gehe dabei wie folgt vor:

* Selektiere das Food Element mit `document.querySelector("#food")`.
* Prüfe nach jeder Bewegung, ob `isColliding(player, food)` stimmt.
* Wenn ja, zeige mit `alert` an, dass das Food gegessen wurde.

<details>
<summary>Lösung</summary>

```js
let food = document.querySelector("#food");
let score = document.querySelector("#score");

document.addEventListener("keydown", function(event) {
  if (event.key == "ArrowRight") {
    moveElement(player, 10, 0);
  } else if (event.key == "ArrowLeft") {
    moveElement(player, -10, 0);
  } else if (event.key == "ArrowUp") {
    moveElement(player, 0, 10);
  } else if (event.key == "ArrowDown") {
    moveElement(player, 0, -10);
  }

  if (isColliding(player, food)) {
    alert("Food gegessen!");
  }
});
```

</details>

### 🎯 3.5 – Food essen (Score)
Nun soll anstelle von `alert` der Score erhöht werden, wenn das Food gegessen wird.
(Tipp: Alert können wir oft nutzen, um zu schauen, ob etwas funktioniert. Sobald es aber funktioniert, wollen wir meistens etwas anderes machen, damit das Spiel besser wird. In diesem Fall den Score erhöhen)

Das Ziel ist es, dass wir eine score Variable haben, welche jedes Mal um 1 erhöht wird, wenn das Food gegessen wird. Außerdem soll der neue Score auch im HTML angezeigt werden. Gehe dabei wie folgt vor:

* Erstelle eine Variable `scoreValue` und setze sie auf 0.
* Selektiere das Score Element mit `document.querySelector("#score")`.
* Wenn das Food gegessen wird, erhöhe `scoreValue` um 1.
* Aktualisiere den Score Text.

-> Hinweis: Der Score wird sich nun immer weiter erhöhen, wenn du mit dem Food in Berührung bleibst. Das ist in diesem Fall nicht schlimm, da es ja nur ein Test ist. Später werden wir das so lösen, dass das Food an eine neue Position springt, sobald es gegessen wird.

<details>
<summary>Lösung</summary>

```js
let scoreValue = 0;
let score = document.querySelector("#score");

document.addEventListener("keydown", function(event) {
  // ... Bewegungscode ...
  

  if (isColliding(player, food)) {
    scoreValue += 1; // Score erhöhen
    score.textContent = "Score: " + scoreValue; // Text im HTML aktualisieren
  }
});
```
</details>
