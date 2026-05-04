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
