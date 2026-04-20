# HTML Events

Mit Events reagiert dein Javascript auf Aktionen von Benutzerinnen und Benutzern. Zum Beispiel auf einen Klick oder auf eine Taste.

## Click Events

Mit einem Click Event reagierst du darauf, dass auf ein Element geklickt wird.

```js
player.addEventListener("click", function (event) {
  player.style.backgroundColor = "blue";
});
```

Sobald auf `player` geklickt wird, wird die Funktion ausgeführt.

## Aufbau

```js
element.addEventListener("click", function (event) {
  // Code bei Klick
});
```

- `element` ist das HTML-Element
- `"click"` ist das Event
- `event` enthält Informationen zum Klick

## Keyboard Events

Mit Keyboard Events reagiert dein Javascript auf Tastatureingaben.

```js
document.addEventListener("keydown", function (event) {
  if (event.key == "s") {
    console.log("you pressed s");
  }
});
```

Hier wird geprüft, ob die Taste `s` gedrückt wurde.

Der Aufbau sieht so aus:

```js
document.addEventListener("keydown", function (event) {
  // Code bei Tastendruck
});
```

- `"keydown"` bedeutet: eine Taste wurde gedrückt
- `event.key` sagt dir, welche Taste gedrückt wurde

Keyboard Events brauchst du zum Beispiel für Figurensteuerung, Shortcuts oder Spiele mit Tastatursteuerung.

## Aufgabe - Click Game fertigstellen

In der ersten Aufgabe hast du den Player und die Score-Anzeige ausgewählt. Jetzt reagiert das Spiel auf Klicks.

### 1: Hintergrundfarbe erst bei Klick ändern

Die Hintergrundfarbe soll sich erst ändern, wenn man auf den Player klickt.

```js
player.addEventListener("click", function () {
  player.style.backgroundColor = "blue";
});
```

### 2: Position bei jedem Klick verändern

Bei jedem Klick soll sich der Player an eine zufällige Position bewegen.

Tipps:

- Mit `Math.random()` erhältst du eine Zufallszahl zwischen `0` und `1`.
- Mit `playground.clientWidth` und `playground.clientHeight` kannst du Breite und Höhe des Spielfelds auslesen.
- Verwende die Funktion `setPosition(element, x, y)`. Diese Funktion kommt aus dem BBZ-Game-Framework und setzt das Element an die Position `x` und `y`.

Beispiel:

```js
setPosition(player, 100, 200);
```

Möglicher Aufbau:

```js
let playground = document.getElementById("playground");

player.addEventListener("click", function () {
  let x = Math.random() * playground.clientWidth;
  let y = Math.random() * playground.clientHeight;

  setPosition(player, x, y);
});
```

### 3: Score hinzufügen

Erstelle einen Score, der bei jedem Klick um `1` erhöht wird.

Tipps:

- Erstelle eine Variable: `let score = 0;`
- Erhöhe den Score im Click Event.
- Verwende `textContent`, um den Score im HTML anzuzeigen.

Beispiel:

```js
let score = 0;

player.addEventListener("click", function () {
  score = score + 1;
  scoreDisplay.textContent = "Score: " + score;
});
```

### 4: Alles kombinieren

Am Ende sollen Farbe, Position und Score im gleichen Click Event verändert werden.

```js
let player = document.getElementById("player");
let scoreDisplay = document.getElementById("score");
let playground = document.getElementById("playground");
let score = 0;

player.addEventListener("click", function () {
  score = score + 1;
  scoreDisplay.textContent = "Score: " + score;

  player.style.backgroundColor = "blue";

  let x = Math.random() * playground.clientWidth;
  let y = Math.random() * playground.clientHeight;
  setPosition(player, x, y);
});
```

## Bonus

- Ändere die Farbe bei jedem Klick zufällig.
- Mache das Element kleiner, je höher der Score ist.
- Verwende ein Keyboard Event, um das Spiel mit einer Taste neu zu starten.
