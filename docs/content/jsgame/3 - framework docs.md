# Framework Dokumentation

Diese Seite dokumentiert die grundlegenden Funktionen des BBZ Game Frameworks.

---

# initBBZGame

`initBBZGame` bereitet das Spielfeld und die Spielobjekte vor.

Normalerweise musst du diese Funktion nicht selbst aufrufen. Das Framework ruft sie automatisch auf, sobald die Webseite geladen ist.

```js
initBBZGame();
```

## Was macht die Funktion?

Die Funktion sucht im HTML nach dem Element `#playground`.

```html
<div id="playground"></div>
```

Dieses Element wird als Spielfeld vorbereitet.

Danach sucht die Funktion nach:

- allen Elementen mit der Klasse `.gameobject`
- dem Element mit der ID `#player`

Diese Elemente werden so vorbereitet, dass sie frei im Spielfeld positioniert werden können.

## Beispiel HTML

```html
<div id="playground">
  <img id="player" src="./assets/player.png">
  <img class="gameobject" id="coin" src="./assets/coin.png">
</div>
```

In diesem Beispiel werden `#player` und `#coin` vom Framework vorbereitet.

## Wann selbst aufrufen?

Du brauchst `initBBZGame()` nur dann selbst aufzurufen, wenn du sicherstellen möchtest, dass das Framework nachträglich nochmals vorbereitet wird.

```js
initBBZGame();
```

Für normale Spiele reicht es, das Script einzubinden.

```html
<script src="/game-framework/bbzgame.js"></script>
```

## Wichtig

Dein Spielfeld sollte die ID `playground` haben.

```html
<div id="playground">
  <!-- Hier kommen deine Spielobjekte hinein -->
</div>
```

Dein Spieler sollte die ID `player` haben.

```html
<img id="player" src="./assets/player.png">
```

Andere bewegliche Objekte sollten die Klasse `gameobject` haben.

```html
<img class="gameobject" src="./assets/enemy.png">
```

---

# isColliding

Mit `isColliding` prüfst du, ob sich zwei HTML Elemente berühren oder überlappen.

Die Funktion gibt `true` oder `false` zurück.

```js
isColliding(firstElement, secondElement);
```

## Rückgabewert

| Rückgabewert | Bedeutung |
| --- | --- |
| `true` | Die Elemente berühren oder überlappen sich. |
| `false` | Die Elemente berühren sich nicht. |

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `firstElement` | Das erste HTML Element. |
| `secondElement` | Das zweite HTML Element. |

## Einfaches Beispiel

```js
let player = document.querySelector("#player");
let coin = document.querySelector("#coin");

if (isColliding(player, coin)) {
  console.log("Münze eingesammelt!");
}
```

Der Code in der `if` Anweisung wird nur ausgeführt, wenn sich Spieler und Münze berühren.

## Beispiel mit Score

```js
let player = document.querySelector("#player");
let coin = document.querySelector("#coin");
let score = 0;

setInterval(function() {
  if (isColliding(player, coin)) {
    score = score + 1;
    setPosition(coin, Math.random() * 600, Math.random() * 300);
  }
}, 100);
```

Alle `100` Millisekunden wird geprüft, ob der Spieler die Münze berührt.

Wenn ja:

- der Score wird erhöht
- die Münze wird an eine neue zufällige Position gesetzt

## Beispiel mit Game Over

```js
let player = document.querySelector("#player");
let enemy = document.querySelector("#enemy");

setInterval(function() {
  if (isColliding(player, enemy)) {
    console.log("Game Over");
  }
}, 100);
```

## Wichtig

`isColliding` prüft die rechteckige Fläche der Elemente.

Auch wenn ein Bild durchsichtig ist, zählt die ganze rechteckige Bildfläche.

---

# isKeyPressed

Mit `isKeyPressed` prüfst du, ob eine Taste gerade gedrückt ist.

Die Funktion gibt `true` oder `false` zurück.

```js
isKeyPressed(key);
```

## Rückgabewert

| Rückgabewert | Bedeutung |
| --- | --- |
| `true` | Die Taste ist gerade gedrückt. |
| `false` | Die Taste ist gerade nicht gedrückt. |

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `key` | Der Name der Taste als Text. |

## Einfaches Beispiel

```js
if (isKeyPressed("ArrowRight")) {
  console.log("Pfeil rechts ist gedrückt");
}
```

## Spieler dauerhaft bewegen

`isKeyPressed` ist praktisch für Bewegungen, die flüssig laufen sollen.

```js
let player = document.querySelector("#player");

setInterval(function() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 5, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -5, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, 5);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -5);
  }
}, 20);
```

Dieser Code prüft alle `20` Millisekunden, welche Pfeiltasten gedrückt sind.

Dadurch kann sich der Spieler flüssig bewegen.

## Häufige Tastennamen

| Taste | Text für `isKeyPressed` |
| --- | --- |
| Pfeil nach rechts | `"ArrowRight"` |
| Pfeil nach links | `"ArrowLeft"` |
| Pfeil nach oben | `"ArrowUp"` |
| Pfeil nach unten | `"ArrowDown"` |
| Leertaste | `" "` |
| Taste A | `"a"` |
| Taste D | `"d"` |

## Wichtig

Der Tastenname muss genau stimmen.

```js
isKeyPressed("ArrowRight"); // richtig
isKeyPressed("arrowright"); // falsch
```

Gross- und Kleinschreibung ist wichtig.

---

# moveElement

Mit `moveElement` bewegst du ein HTML Element von seiner aktuellen Position aus weiter.

```js
moveElement(element, deltaX, deltaY);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `element` | Das HTML Element, das bewegt werden soll. |
| `deltaX` | Bewegung nach links oder rechts in Pixeln. |
| `deltaY` | Bewegung nach oben oder unten in Pixeln. |

## Richtung

| Wert | Wirkung |
| --- | --- |
| `deltaX` positiv | Bewegung nach rechts |
| `deltaX` negativ | Bewegung nach links |
| `deltaY` positiv | Bewegung nach oben |
| `deltaY` negativ | Bewegung nach unten |

## Einfaches Beispiel

```js
let player = document.querySelector("#player");

moveElement(player, 10, 0);
```

Der Spieler bewegt sich `10px` nach rechts.

## Spieler mit Pfeiltasten bewegen

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

## Gegner automatisch bewegen

```js
let enemy = document.querySelector("#enemy");

setInterval(function() {
  moveElement(enemy, -5, 0);
}, 100);
```

Der Gegner bewegt sich alle `100` Millisekunden `5px` nach links.

## Wichtig

`moveElement` bewegt ein Element relativ zu seiner aktuellen Position.

Wenn ein Element zuerst an eine genaue Startposition soll, verwende vorher `setPosition`.

```js
let enemy = document.querySelector("#enemy");

setPosition(enemy, 800, 100);
moveElement(enemy, -10, 0);
```

---

# setPosition

Mit `setPosition` setzt du ein HTML Element an eine bestimmte Stelle im Spielfeld.

Die Funktion verändert die CSS Werte `left` und `bottom`.

```js
setPosition(element, x, y);
```

## Parameter

| Parameter | Bedeutung |
| --- | --- |
| `element` | Das HTML Element, das positioniert werden soll. |
| `x` | Abstand vom linken Rand in Pixeln. |
| `y` | Abstand vom unteren Rand in Pixeln. |

## Einfaches Beispiel

```js
let player = document.querySelector("#player");

setPosition(player, 100, 50);
```

Der Spieler steht danach:

- `100px` vom linken Rand entfernt
- `50px` vom unteren Rand entfernt

## Beispiel mit einem Gegner

```js
let enemy = document.querySelector("#enemy");

setPosition(enemy, 1400, 200);
```

Der Gegner wird weit rechts im Spielfeld platziert.

## Zufällige Position

Mit `Math.random()` kannst du eine zufällige Position berechnen.

```js
let enemy = document.querySelector("#enemy");

setPosition(enemy, 1400, Math.random() * 500);
```

`Math.random() * 500` ergibt eine zufällige Zahl zwischen `0` und `500`.

## Wichtig

Das Element muss im HTML existieren, bevor du `setPosition` verwendest.

```js
let player = document.querySelector("#player");

setPosition(player, 100, 50);
```

Wenn `player` nicht gefunden wird, funktioniert die Funktion nicht.
