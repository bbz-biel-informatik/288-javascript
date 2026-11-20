# 7 - Aufgaben: Funktionen

👉 [Übungen herunterladen](/assets/zips/uebungen-7-funktionen.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner.

## 🎯 7.1 – Begrüssung

👉 Ordner `1-begruessung`

`index.html`

<<< @/projects/uebungen-7-funktionen/1-begruessung/index.html

**a)** Schreibe eine Funktion `sayHello()`, die in `messageText` den Text `Hallo!` anzeigt. Rufe sie beim Klick auf `helloButton` auf.

Die Theorie findest du unter [Funktionen definieren und aufrufen](./inhalt#funktionen-definieren-und-aufrufen).

<details>
<summary>💡 Tipp anzeigen</summary>

Eine Funktion besteht aus zwei Teilen: der **Definition** und dem **Aufruf**.

```js
function sayHello() {
  messageText.textContent = "Hallo!";
}

helloButton.addEventListener("click", function () {
  sayHello();
});
```

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let messageText = document.querySelector("#messageText");
let helloButton = document.querySelector("#helloButton");

function sayHello() {
  messageText.textContent = "Hallo!";
}

helloButton.addEventListener("click", function () {
  sayHello();
});
```

Die Schreibweisen findest du unter [Funktionen](../10-cheatsheet#funktionen) und [Events](../10-cheatsheet#events).

</details>

**b)** Erweitere die Funktion mit einem **Parameter** `name`. Die Funktion soll `Hallo Nora!` anzeigen, wenn `Nora` im Feld `nameField` steht. Die Theorie dazu steht unter [Parameter](./inhalt#parameter).

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let nameField = document.querySelector("#nameField");

function sayHello(name) {
  messageText.textContent = "Hallo " + name + "!";
}

helloButton.addEventListener("click", function () {
  sayHello(nameField.value);
});
```

</details>

**c)** Der `byeButton` soll `Tschüss Nora!` anzeigen. Schreibe dafür eine zweite Funktion `sayBye(name)`.

**d)** Der `shoutButton` ruft deine Funktion `sayHello(...)` mit einem anderen Wert auf, zum Beispiel `sayHello("ALLE ZUSAMMEN")`.

**e) Erklären:** Was ist der Unterschied zwischen dem Definieren und dem Aufrufen einer Funktion? Was passiert, wenn du die Funktion nur definierst, aber nie aufrufst?

## 🎯 7.2 – Umrechner mit Funktionen

👉 Ordner `2-umrechner`

Das ist die gleiche Übung wie in [Kapitel 4](../4-variablen/aufgaben), nun aber mit Funktionen.

`index.html`

<<< @/projects/uebungen-7-funktionen/2-umrechner/index.html

**a)** Schreibe eine Funktion `zeigeErgebnis(text)`, die ihren Parameter in `resultText` anzeigt. Verwende sie danach bei allen drei Knöpfen.

**b)** Schreibe eine Funktion `rechneMeterInMeilen(meter)`, welche die Umrechnung macht und das Ergebnis anzeigt. `1` Meile sind `1609` Meter.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let inputField = document.querySelector("#inputField");
let resultText = document.querySelector("#resultText");
let meterButton = document.querySelector("#meterButton");

function zeigeErgebnis(text) {
  resultText.textContent = text;
}

function rechneMeterInMeilen(meter) {
  let meilen = meter / 1609;
  zeigeErgebnis(meter + " Meter sind " + meilen + " Meilen");
}

meterButton.addEventListener("click", function () {
  rechneMeterInMeilen(Number(inputField.value));
});
```

Eine Funktion darf eine andere Funktion aufrufen. `rechneMeterInMeilen(...)` verwendet hier `zeigeErgebnis(...)`.

</details>

**c)** Ergänze `rechneCelsiusInFahrenheit(grad)` und `rechnePfundInGramm(pfund)` nach dem gleichen Muster.

**d) Erklären:** Vergleiche deinen Code mit deiner Lösung aus Kapitel 4. Was ist übersichtlicher geworden?

## 🎯 7.3 – Game aufräumen

👉 Ordner `3-game`

In diesem Ordner liegt ein fertiges Energie-Spiel. Es verwendet den [Game Loop](../6-game-loop/inhalt) aus Kapitel 6: Steuerung mit den Pfeiltasten, eine Energiekiste und eine Energie-Anzeige. Der Game Loop ist dabei sehr lang geworden.

`script.js`

<<< @/projects/uebungen-7-funktionen/3-game/script.js

**a)** Verschiebe die vier `if`-Blöcke für die Tasten in eine neue Funktion `moveRobot()` und rufe sie im Game Loop auf. Teste danach, ob sich der Roboter noch genau gleich bewegt.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function moveRobot() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, speed);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -speed);
    energie -= 0.2;
  }
}

function gameLoop() {
  moveRobot();

  // Der restliche Code bleibt hier.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

**b)** Lagere auch die Anzeige in eine Funktion `updateAnzeige()` aus. Darin stehen die Zeile mit `energyText` und die Entscheidung für `gameStatus`.

**c)** Dein Game Loop sollte danach nur noch aus wenigen Zeilen bestehen:

```js
function gameLoop() {
  moveRobot();
  checkEnergy();
  updateAnzeige();

  window.requestAnimationFrame(gameLoop);
}
```

Schreibe dafür zusätzlich die Funktion `checkEnergy()` mit der Kollisionsprüfung.

**d) Erklären:** Warum ist ein kurzer Game Loop mit Funktionsaufrufen angenehmer zu lesen als ein langer Game Loop?
