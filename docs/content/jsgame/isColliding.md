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
