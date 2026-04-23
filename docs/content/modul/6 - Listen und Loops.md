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

Die `setInterval(...)` Funktion ist besonders nützlich für Timer. Genau das brauchen wir im Click Game für den herunterzählenden Timer.

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
let feedbackMessages = ["Sehr gut!", "Gut!", "Das kannst du besser", "Schlecht!"];
```

Die Liste `feedbackMessages` enthält vier Texte.

Wir können auch HTML Elemente als Liste erhalten. Das ist nützlich, wenn wir z. B. alle Elemente mit einer bestimmten Klasse auswählen wollen:

```js
let hudElements = document.querySelectorAll(".hud");
```

`querySelectorAll(...)` wählt mehrere Elemente aus. Das Resultat kann mit einem Loop durchlaufen werden.

## Aufgabe 1: Timer mit setInterval

Wir bleiben beim Click Game.

Der Timer soll jede Sekunde um 1 kleiner werden.

Gehe dabei wie folgt vor:

* Erstelle eine Variable `timeLeft` und setze sie auf 10.
* Erstelle ein HTML Element mit der ID `timer`, falls du es noch nicht hast.
* Selektiere das Element mit `document.querySelector("#timer")`.
* Verwende `setInterval(...)`.
* Verringere `timeLeft` jede Sekunde um 1.
* Aktualisiere den Text im HTML.

<details>
<summary>Tipp</summary>

```js
let timeLeft = 10;
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

* Prüfe mit `if`, ob `timeLeft > 0` ist.
* Nur dann soll `timeLeft` kleiner werden.
* Wenn `timeLeft == 0` ist, soll `"Game Over"` in der Konsole ausgegeben werden.

<details>
<summary>Tipp</summary>

```js
setInterval(function() {
  if (timeLeft > 0) {
    timeLeft -= 1;
    timer.textContent = "Time: " + timeLeft;
  } else {
    console.log("Game Over");
  }
}, 1000);
```

</details>

## Aufgabe 3: Countdown mit for loop testen

Teste einen normalen `for` loop für einen Countdown.

Gib in der Konsole die Zahlen 10 bis 0 aus.

<details>
<summary>Lösung</summary>

```js
for (let i = 10; i >= 0; i--) {
  console.log(i);
}
```

</details>

## Aufgabe 4: HUD Elemente mit forEach stylen

Im Click Game gibt es mehrere Anzeige-Elemente, zum Beispiel:

* Score
* Timer
* Highscore

Gib diesen HTML Elementen die Klasse `hud`.

Danach sollen alle HUD Elemente mit `querySelectorAll(...)` ausgewählt und mit `forEach(...)` gestylt werden.

<details>
<summary>Tipp</summary>

```js
let hudElements = document.querySelectorAll(".hud");

hudElements.forEach(function (hudElement) {
  hudElement.style.fontSize = "20px";
  hudElement.style.fontWeight = "bold";
});
```

</details>

## Aufgabe 5: Feedback Texte als Liste

Erstelle eine Liste mit den Feedback Texten aus dem if-else Kapitel:

```js
let feedbackMessages = ["Sehr gut!", "Gut!", "Das kannst du besser", "Schlecht!"];
```

Gib danach alle Texte mit `forEach(...)` in der Konsole aus.

<details>
<summary>Tipp</summary>

```js
feedbackMessages.forEach(function (message) {
  console.log(message);
});
```

</details>
