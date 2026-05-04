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
