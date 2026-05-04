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
