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
