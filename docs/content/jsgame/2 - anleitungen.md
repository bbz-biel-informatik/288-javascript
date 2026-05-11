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

Der Spieler kann auch mit der Maus gesteuert werden. Das ist nützlich für Spiele, bei denen der Spieler mit dem Cursor zielt oder sich in Richtung der Maus bewegt.

Wir speichern die aktuelle Mausposition in zwei Variablen und aktualisieren sie mit dem `mousemove`-Event. Im gameLoop bewegen wir den Spieler dann in Richtung der Mausposition.

**Beispiel**

Der Spieler bewegt sich zur aktuellen Mausposition, sobald die Maus bewegt wird:

```js
let player = document.querySelector("#player");
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", function(event) {
    let rect = playground.getBoundingClientRect();
    // Wir müssen die Koordinaten der Maus noch auf das Spielfeld umrechnen
    mouseX = event.clientX - rect.left;
    mouseY = rect.bottom - event.clientY;
});
```

Nun setzen wir im gameLoop den Spieler direkt auf die Mausposition:
```js
function gameLoop(){
    setPosition(player, mouseX, mouseY);
    window.requestAnimationFrame(gameLoop)
}
```

-> Willst du den pointer komplett verschwinden lassen? Dann mach folgendes im CSS: 
```css
#playground {
    cursor: none;
}
```

### Gravitation (mit Sprung)

In einem Platformer fällt der Spieler nach unten, wenn er nicht auf dem Boden steht. Wir simulieren das mit einer `speedY`-Variable. Jedes Frame wird sie etwas kleiner (Gravitation), was den Spieler nach unten zieht. Beim Sprung setzen wir `speedY` auf einen grossen positiven Wert.

**Beispiel**

```js
let player = document.querySelector("#player");

// Neue Variablen, welche du brauchst:
let speedY = 0;  // Startgeschwindigkeit: keine Bewegung
let gravitation = 0.8
let groundLevel = 10
let jumpPower = 18;

setPosition(player, 100, 10);

function gameLoop(){

    // 1. Gravitation: Geschwindigkeit jedes Frame etwas verringern
    speedY = speedY - gravitation;

    // 2. Spieler entsprechend der Geschwindigkeit bewegen
    moveElement(player, 0, speedY);

    // 3. Boden-Check: Spieler darf nicht unter y=10 fallen
    if (isOnGround(player)) {
        setPosition(player, getX(player), groundLevel);
        speedY = 0;
    }

    // 4. Sprung: nur möglich, wenn der Spieler auf dem Boden ist
    if (isKeyPressed(" ") && isOnGround(player, groundLevel)) {
        speedY = jumpPower;
    }

    window.requestAnimationFrame(gameLoop)
}
```

> 💡 `speedY` ist die Geschwindigkeit in Y-Richtung. Positiv = nach oben, negativ = nach unten. Gravitation bedeutet: sie wird jedes Frame um 1 kleiner.
> 💡 `gravitation` ist die Stärke der Gravitation. Je höher, desto stärker die Gravitation.
> 💡 `groundLevel` ist die Y-Position des Bodens. Je höher, desto tiefer der Boden.
> 💡 `jumpPower` ist die Sprungkraft. Je höher, desto höher der Sprung.

### Hintergrund scrolling

Bei einem Side-Scroller soll der Hintergrund scrollen, um eine Bewegung zu simulieren. Das machen wir mit einem breiten Hintergrundbild, das wir kontinuierlich nach links verschieben. Sobald es komplett raus ist, setzen wir es zurück.

Füge im HTML ein Hintergrundbild hinzu:
```html
<img id="background" src="assets/images/background.png">
```

Im CSS machen wir es breit genug, dass es das ganze Spielfeld füllt:
```css
#background {
    width: 2000px;
    height: 500px;
}
```

**Beispiel**

```js
let background = document.querySelector("#background");
setPosition(background, 0, 0);

function gameLoop(){
    moveElement(background, -3, 0);

    // Wenn das Bild komplett links raus ist, zurück nach rechts setzen
    let currentX = parseFloat(background.style.left);
    if (currentX < -2000) {
        setPosition(background, 0, 0);
    }

    window.requestAnimationFrame(gameLoop)
}
```

<details>
<summary>Tipp: Nahtloses Scrolling</summary>

Für ein nahtloses Scrolling ohne Unterbrechung kannst du zwei Hintergrundbilder verwenden, die direkt hintereinander platziert werden. Sobald das erste Bild raus ist, nimmt das zweite seinen Platz ein und umgekehrt.

```js
let bg1 = document.querySelector("#background1");
let bg2 = document.querySelector("#background2");

setPosition(bg1, 0, 0);
setPosition(bg2, 1000, 0); // 1000 = Breite des Spielfeldes

function gameLoop(){
    moveElement(bg1, -3, 0);
    moveElement(bg2, -3, 0);

    if (parseFloat(bg1.style.left) < -1000) setPosition(bg1, 1000, 0);
    if (parseFloat(bg2.style.left) < -1000) setPosition(bg2, 1000, 0);

    window.requestAnimationFrame(gameLoop)
}
```
</details>


### Gegner / Hindernisse spawnen

Gegner oder Hindernisse erscheinen oft regelmässig am Rand des Spielfeldes. Wir erstellen sie dynamisch mit JavaScript und fügen sie dem `playground` hinzu.

**Beispiel**

Alle 2 Sekunden erscheint ein neuer Gegner auf der rechten Seite:

```js
function spawnEnemy() {
    // Neues img-Element erstellen
    let enemy = document.createElement("img");
    enemy.src = "assets/images/enemy.png";
    enemy.classList.add("gameobject", "enemy");
    enemy.style.width = "80px";
    enemy.style.height = "80px";

    // Dem Spielfeld hinzufügen
    let playground = document.querySelector("#playground");
    playground.appendChild(enemy);

    // An eine Startposition setzen (rechts, zufällige Höhe)
    setPosition(enemy, 1000, Math.random() * 400);
}

// Alle 2000 Millisekunden einen neuen Gegner spawnen
setInterval(spawnEnemy, 2000);
```


### Gegner / Hindernisse bewegen

Gegner, die gespawnt wurden, müssen auch bewegt werden. Da es mehrere Gegner gleichzeitig geben kann, selektieren wir alle auf einmal mit `querySelectorAll` und bewegen sie in einer Schleife.

**Beispiel**

Alle Gegner bewegen sich im gameLoop nach links:

```js
function gameLoop(){
    let enemies = document.querySelectorAll(".enemy");

    enemies.forEach(function(enemy) {
        moveElement(enemy, -4, 0);

        // Gegner entfernen, wenn er links raus ist
        if (parseFloat(enemy.style.left) < -100) {
            enemy.remove();
        }
    });

    window.requestAnimationFrame(gameLoop)
}
```

<details>
<summary>Warum .enemy.remove()?</summary>
Gegner, die das Spielfeld verlassen haben, brauchen wir nicht mehr. Mit `enemy.remove()` löschen wir das HTML-Element komplett aus dem DOM. Das spart Speicher und verhindert, dass das Spiel mit der Zeit langsamer wird.
</details>


### Kollision erkennen

Mit [`isColliding(...)`](./3 - framework docs#iscolliding) kannst du prüfen, ob zwei Objekte sich berühren. Das ist die Basis für fast alle Spielinteraktionen: Spieler sammelt eine Münze ein, Spieler trifft einen Gegner, Kugel trifft ein Ziel.

**Beispiel: Gegner berührt den Spieler**

```js
let player = document.querySelector("#player");

function gameLoop(){
    let enemies = document.querySelectorAll(".enemy");

    enemies.forEach(function(enemy) {
        moveElement(enemy, -4, 0);

        if (isColliding(player, enemy)) {
            console.log("Game Over!");
            // Hier kannst du z.B. das Spiel stoppen oder eine Game-Over-Anzeige einblenden
        }
    });

    window.requestAnimationFrame(gameLoop)
}
```

**Beispiel: Spieler sammelt eine Münze ein**

```js
let player = document.querySelector("#player");
let coin = document.querySelector("#coin");
let score = 0;

function gameLoop(){
    if (isColliding(player, coin)) {
        score += 1;
        console.log("Score: " + score);
        // Münze an neue zufällige Position setzen
        setPosition(coin, Math.random() * 900, Math.random() * 400);
    }

    window.requestAnimationFrame(gameLoop)
}
```


### Score

Der Score wird in einer Variable gespeichert und bei jedem relevanten Ereignis (z.B. Münze eingesammelt, Gegner überlebt) erhöht. Damit der Spieler den Score sieht, zeigen wir ihn in einem HTML-Element an.

Füge im HTML ein Element für den Score hinzu – ausserhalb des `playground`:
```html
<div id="score">Score: 0</div>
```

Im CSS kannst du es oben links positionieren:
```css
#score {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
}
```

**Beispiel**

```js
let player = document.querySelector("#player");
let coin = document.querySelector("#coin");
let scoreDisplay = document.querySelector("#score");
let score = 0;

function gameLoop(){
    if (isColliding(player, coin)) {
        score += 1;
        scoreDisplay.textContent = "Score: " + score;
        setPosition(coin, Math.random() * 900, Math.random() * 400);
    }

    window.requestAnimationFrame(gameLoop)
}
```


### Highscoreliste

Den Highscore speichern wir im `localStorage` des Browsers. So bleibt er auch nach dem Neuladen der Seite erhalten. Wir speichern mehrere Einträge und zeigen die Top 5 an.

**Beispiel**

```js
// Score am Ende des Spiels speichern
function saveHighscore(playerName, score) {
    // Bestehende Highscores laden (oder leeres Array, falls noch keine vorhanden)
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    // Neuen Eintrag hinzufügen
    highscores.push({ name: playerName, score: score });

    // Nach Score absteigend sortieren
    highscores.sort(function(a, b) { return b.score - a.score });

    // Nur die Top 5 behalten
    highscores = highscores.slice(0, 5);

    // Zurück in localStorage speichern
    localStorage.setItem("highscores", JSON.stringify(highscores));
}

// Highscores anzeigen
function showHighscores() {
    let highscores = JSON.parse(localStorage.getItem("highscores")) || [];
    let list = document.querySelector("#highscore-list");
    list.innerHTML = "";

    highscores.forEach(function(entry) {
        let item = document.createElement("li");
        item.textContent = entry.name + ": " + entry.score;
        list.appendChild(item);
    });
}
```

Füge im HTML eine Liste hinzu:
```html
<ol id="highscore-list"></ol>
```

Rufe `saveHighscore("Spieler1", score)` auf, wenn das Spiel endet, und `showHighscores()` beim Laden der Highscore-Seite.


### Leveldesign (Platformer)

In einem Platformer besteht die Welt aus Plattformen, auf denen der Spieler laufen und springen kann. Wir definieren die Plattformen als Array und erstellen sie dynamisch im JavaScript.

**Beispiel**

Plattformen als Array definieren und auf dem Spielfeld platzieren:

```js
const platforms = [
    { x: 0,   y: 0,   width: 300 },
    { x: 350, y: 120, width: 200 },
    { x: 600, y: 250, width: 150 },
    { x: 200, y: 320, width: 180 },
];

platforms.forEach(function(platform) {
    let el = document.createElement("div");
    el.classList.add("gameobject", "platform");
    el.style.width = platform.width + "px";
    el.style.height = "20px";
    el.style.backgroundColor = "saddlebrown";
    document.querySelector("#playground").appendChild(el);
    setPosition(el, platform.x, platform.y);
});
```

Im gameLoop prüfen wir für jede Plattform, ob der Spieler darauf landet:

```js
let player = document.querySelector("#player");
let velocityY = 0;
const gravity = -1;

function gameLoop(){
    velocityY += gravity;
    moveElement(player, 0, velocityY);

    let onGround = false;

    document.querySelectorAll(".platform").forEach(function(platform) {
        if (isColliding(player, platform) && velocityY <= 0) {
            let platformY = parseFloat(platform.style.bottom);
            setPosition(player, parseFloat(player.style.left), platformY + 20);
            velocityY = 0;
            onGround = true;
        }
    });

    // Sprung nur möglich, wenn auf dem Boden oder einer Plattform
    if (isKeyPressed(" ") && onGround) {
        velocityY = 18;
    }

    window.requestAnimationFrame(gameLoop)
}
```


### Leveldesign (Top Down)

In einem Top-Down-Spiel bewegt sich der Spieler in alle vier Richtungen. Hindernisse und Wände begrenzen die Bewegung. Wir definieren Hindernisse ähnlich wie Plattformen als Array.

**Beispiel**

Hindernisse als Array definieren und platzieren:

```js
const obstacles = [
    { x: 200, y: 150, width: 80, height: 80 },
    { x: 400, y: 300, width: 120, height: 40 },
    { x: 600, y: 100, width: 60, height: 200 },
];

obstacles.forEach(function(obs) {
    let el = document.createElement("div");
    el.classList.add("gameobject", "obstacle");
    el.style.width = obs.width + "px";
    el.style.height = obs.height + "px";
    el.style.backgroundColor = "darkslategray";
    document.querySelector("#playground").appendChild(el);
    setPosition(el, obs.x, obs.y);
});
```

Im gameLoop bewegen wir den Spieler und prüfen Kollisionen mit Hindernissen. Bei einer Kollision machen wir die Bewegung rückgängig:

```js
let player = document.querySelector("#player");
setPosition(player, 50, 50);

function gameLoop(){
    let moved = false;

    if (isKeyPressed("ArrowLeft"))  { moveElement(player, -5, 0);  moved = true; }
    if (isKeyPressed("ArrowRight")) { moveElement(player, 5, 0);   moved = true; }
    if (isKeyPressed("ArrowUp"))    { moveElement(player, 0, 5);   moved = true; }
    if (isKeyPressed("ArrowDown"))  { moveElement(player, 0, -5);  moved = true; }

    // Kollision mit Hindernissen: Bewegung rückgängig machen
    document.querySelectorAll(".obstacle").forEach(function(obstacle) {
        if (isColliding(player, obstacle)) {
            if (isKeyPressed("ArrowLeft"))  moveElement(player, 5, 0);
            if (isKeyPressed("ArrowRight")) moveElement(player, -5, 0);
            if (isKeyPressed("ArrowUp"))    moveElement(player, 0, -5);
            if (isKeyPressed("ArrowDown"))  moveElement(player, 0, 5);
        }
    });

    window.requestAnimationFrame(gameLoop)
}
```