# Anleitungen 


### Spieler / Objekte platzieren 
Im game gibt es einige Objekte, welche bereits zu Beginn auf dem Spielfeld sind. Zum beispiel der Player, wenn du ein Spiel hast, mit welchem du den player bewegst.

- Jedes Objekt auf dem Spielfeld ist ein Bild. Füge das entsprechend Bild im assets/images Ordner ein.
- Füge im HTML ein img Element hinzu, welches das Bild darstellt. Gib dem Bild eine sinnvolle `id` gemäss deines Spielkonzepts, z.B. `player`.
- Setze die Groesse des Bildes im CSS. Z.B. `100px`.
- Nun müssen wir das Bild noch positionieren. Das machen wir mit der javascript methode `setPosition(x,y)`.

**Beispiel**

Ich habe ein Bild `assets/images/player.png`.
Im HTML setze ich folgendes Element in mein `playground`: 
```html
<img id="player" src="assets/images/player.png">
```
Im CSS füge ich folgendes hinzu: 
```css
#player {
    width: 100px;
    height: 100px;
}
```
Im Javascript Code füge ich folgendes hinzu:
```js
let player = document.querySelector("#player");
setPosition(player, 10, 10);
```

<details>

<summary>Warum 10, 10 ?</summary>
Ihr müsst euch das Spielfeld wie ein Koordinatensystem vorstellen. Wir können unsere Objekte über die X-Achse und die Y-Achse anordnen: `setPosition(player, x, y)`.

![Koordinatensystem](/assets/images/koordinatensystem.png)


</details>



### Spielerbewegung mit Tastatur

Im game gibt es einige Elemente, mit denen der Spieler interagieren kann. Ein typisches Element ist der Spieler selber. Er kann in einem Top Down Game, wie Space Invaders, durch die horizontalen Achsen nach links und rechts bewegt werden. Oder in einem Platformer, wie Super Mario, sowohl horizontal als auch vertikal bewegt werden.

Wir brauchen die beiden Methoden [`isKeyPressed(...)`](./3 - framework docs#iskeypressed) und [`moveElement(...)`](./3 - framework docs#moveelement). Mit einem `if` prüfen wir, ob eine Taste gedrückt wird. Wenn ja, dann bewegen wir das Objekt mit `moveElement(...)` in die entsprechende Richtung.

**Beispiel**

Ich möchte, dass ich meinen Player mit den Pfeiltasten nach links und rechts bewegen kann.

Wir selektieren den Player, wenn wir das nicht bereits haben:
```js
let player = document.querySelector("#player");
```

Nun hören wir im gameLoop darauf, welche Taste wir drücken:
```js
function gameLoop(){
    if (isKeyPressed("ArrowLeft")){
        moveElement(player, -10, 0)
    }
    if (isKeyPressed("ArrowRight")){
        moveElement(player, 10, 0)
    }
    
    window.requestAnimationFrame(gameLoop)
}

```

### Spielerbewegung mit der Maus
(TBD)


### Gravitation (mit Sprung)
(TBD)

### Hintergrund scrolling
(TBD)

### Gegner / Hindernisse spawnen
(TBD)

### Gegner / Hindernisse bewegen
(TBD)

### Autonome Gegner
(TBD)

### Score
(TBD)

### Highscoreliste
(TBD)

### Leveldesign (Platformer)
(TBD)

### Leveldesign (Top Down)
(TBD)
