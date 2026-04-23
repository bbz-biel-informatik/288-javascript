# Listen und Loops

## Worum geht es?

Loops führen Code mehrmals aus.

Das ist praktisch, wenn wir nicht jede Zeile einzeln schreiben möchten.

```js
setInterval(function() {
  console.log("Dieser Code wird jede Sekunde ausgeführt");
}, 1000);
```

In diesem Beispiel wird der Code jede Sekunde ausgeführt.

## setInterval

`setInterval(...)` führt Code immer wieder aus.

```js
setInterval(function() {
  console.log("Dieser Code wird jede Sekunde ausgeführt");
}, 1000);
```

`1000` bedeutet 1000 Millisekunden. Das ist eine Sekunde.
Würden wir `500` schreiben, würde der Code alle 0.5 Sekunden ausgeführt werden. (500 ms = 0.5 s)

Die `setInterval(...)` Funktion ist besonders nützlich für Timer. Im Eat Game brauchen wir sie für den Countdown.

## for loop

Ein `for` loop zählt mit einer Variable hoch.

```js
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

Aufbau:

* `let i = 0` → Startwert
* `i <= 10` → Bedingung
* `i++` → nach jedem Durchlauf um 1 erhöhen

Der Code läuft so lange, bis die Bedingung nicht mehr stimmt.

Das `i` ist eine Variable, welche innerhalb des Blocks `{ ... }` existiert und verwendet werden kann. Sie wird bei jedem Durchlauf um 1 erhöht.

## forEach

Mit `forEach` gehen wir durch jedes Element einer Liste.

Im nachfolgenden Beispiel wählen wir alle Elemente mit der Klasse `hud` aus und ändern die Farbe zu rot:

```js
let hudElements = document.querySelectorAll(".hud");

hudElements.forEach(function (hudElement) {
  hudElement.style.color = "red";
});
```

Erklärung:

* `hudElements` ist die Liste
* `forEach(...)` geht durch die Liste
* `hudElement` ist immer das aktuelle Element
* Der Code in `{ ... }` wird für jedes Element ausgeführt

## Listen

Listen speichern mehrere Werte.

Eine Liste wird in JavaScript mit eckigen Klammern geschrieben:

```js
let foodColors = ["red", "green", "blue", "yellow"];
```

Die Liste `foodColors` enthält vier Texte.

Wir können auch HTML Elemente als Liste erhalten. Das ist nützlich, wenn wir z. B. alle Elemente mit einer bestimmten Klasse auswählen wollen:

```js
let hudElements = document.querySelectorAll(".hud");
```

`querySelectorAll(...)` wählt mehrere Elemente aus. Das Resultat kann mit einem Loop durchlaufen werden.

## Aufgabe 1: Countdown Timer

Im Eat Game soll die Zeit herunterzählen.

Gehe dabei wie folgt vor:

* Erstelle eine Variable `timeLeft` und setze sie auf 20.
* Selektiere das HTML Element `#timer`.
* Verwende `setInterval(...)`.
* Verringere `timeLeft` jede Sekunde um 1.
* Aktualisiere den Text im HTML.

<details>
<summary>Tipp</summary>

```js
let timeLeft = 20;
let timer = document.querySelector("#timer");

setInterval(function() {
  timeLeft -= 1;
  timer.textContent = "Time: " + timeLeft;
}, 1000);
```

</details>

## Aufgabe 2: Timer bei 0 stoppen

Der Timer soll nicht unter 0 zählen.

Erweitere den Code aus Aufgabe 1:

* Speichere `setInterval(...)` in einer Variable `timerInterval`.
* Prüfe mit `if`, ob `timeLeft > 0` ist.
* Nur dann soll `timeLeft` kleiner werden.
* Wenn `timeLeft == 0` ist, soll das Spiel stoppen.

<details>
<summary>Tipp</summary>

```js
let timerInterval = setInterval(function() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    timer.textContent = "Time: " + timeLeft;
  } else {
    clearInterval(timerInterval);
    alert("Game Over");
  }
}, 1000);
```

</details>

## Aufgabe 3: Food zufällig neu platzieren

Wenn der Spieler das Food isst, soll das Food an eine neue zufällige Position springen.

Gehe dabei wie folgt vor:

* Erstelle zwei zufällige Zahlen `x` und `y`.
* Verwende `setPosition(food, x, y)`.
* Platziere diesen Code dort, wo der Score erhöht wird.

<details>
<summary>Tipp</summary>

```js
if (isColliding(player, food)) {
  scoreValue += 1;
  score.textContent = "Score: " + scoreValue;

  let x = Math.random() * 500;
  let y = Math.random() * 300;
  setPosition(food, x, y);
}
```

</details>

## Aufgabe 4: Hintergrundfarbe zufällig ändern

Erstelle eine Liste mit möglichen Hintergrundfarben:

```js
let backgroundColors = ["lightblue", "lightgreen", "lightyellow", "lightpink"];
```

Wenn Food gegessen wird, soll eine zufällige Farbe aus dieser Liste gewählt werden.

Der Hintergrund des Spielfelds soll dann diese Farbe bekommen.

Gehe dabei wie folgt vor:

* Selektiere das Spielfeld mit `document.querySelector("#playground")`.
* Erstelle eine Liste `backgroundColors`.
* Wähle mit `Math.random()` eine zufällige Farbe aus der Liste.
* Ändere `playground.style.backgroundColor`.

<details>
<summary>Tipp</summary>

```js
let playground = document.querySelector("#playground");
let backgroundColors = ["lightblue", "lightgreen", "lightyellow", "lightpink"];

let randomIndex = Math.floor(Math.random() * backgroundColors.length);
playground.style.backgroundColor = backgroundColors[randomIndex];
```

</details>
