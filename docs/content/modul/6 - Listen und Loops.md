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
let enemies = document.querySelectorAll(".enemy");
```

Somit haben wir alle elemente mit der Klasse "enemy" in einer Liste gespeichert. Wollen wir nun jedes einzelne Element verändern, können wir das so machen:

```js
enemies.forEach(enemy => {
  // Zum beispiel das Bild von allen Feinden verändern
  enemy.src = "/assets/some-image.png"

  // oder alle feinde nach links bewegen
  moveElment(enemy, -10, 0);
})
```



`querySelectorAll(...)` wählt mehrere Elemente aus. Das Resultat kann mit einem Loop durchlaufen werden.

## 🎮 Aufgaben

### 1: Countdown Timer

Im Eat Game soll die Zeit herunterzählen. Wenn die Zeit 0 erreicht, ist das Spiel vorbei. Wenn der Spieler das Food isst, soll die Zeit wieder auf 20 Sekunden zurückgesetzt werden.

Überlege dir, wie du das lösen könntest. Du brauchst sicher eine Variable für die Zeit, ein [`setInterval(...)`](./8-cheatsheet#listen-und-loops) und eine [`if`](./8-cheatsheet#if-else) Bedingung, um zu prüfen, ob die Zeit 0 erreicht hat. Wenn du nicht weiterkommst, findest du hier einen Tipp:

<details>
<summary>Vorgehen</summary>

```js

/*
* Erstelle eine Variable `timeLeft` und setze sie auf 20.
* Selektiere das HTML Element `#timer`.
* Verwende `setInterval(...)` mit 1000ms.
* Im setInterval, verringere `timeLeft` jeweils um 1.
* Aktualisiere ebenfalls den Text im HTML.
* Wenn `timeLeft` 0 erreicht, stoppe den Timer und zeige "Game Over" an (mit Alert).
*/
```

</details>

<details>
<summary>Lösung</summary>

```js
let timeLeft = 20;
let timer = document.querySelector("#timer");

// ...

setInterval(function() {
  timeLeft -= 1;
  timer.textContent = "Time: " + timeLeft;
}, 1000);
```

</details>


### 2: Food zufällig neu platzieren

Wenn der Spieler das Food isst, soll das Food an eine neue, zufällige Position springen. Überlege dir, wie du das lösen könntest. Du brauchst sicher die Funktion `setPosition(...)` und die Funktion `Math.random()`, um zufällige Zahlen zu generieren. Wenn du nicht weiterkommst, findest du hier einen Tipp:


`Math.random()` gibt eine zufällige Zahl zwischen 0 und 1 zurück. Wenn du z. B. eine Zahl zwischen 0 und 500 möchtest, kannst du `let myNumber = Math.random() * 500` verwenden.

<details>
<summary>Vorgehen</summary>

```js
/*
* Erstelle zwei zufällige Zahlen `x` und `y` (2 Verschiedene Variablen x und y).
* Verwende `setPosition(food, x, y)`.
* Platziere diesen Code dort, wo der Score erhöht wird.
*/
```
</details>

  <details>
  <summary>Lösung</summary>

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
