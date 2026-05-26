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

// --- Neue Variablen ---
let mouseX = 0;
let mouseY = 0;
// ------------------------


// --- Neuer Code ---
document.addEventListener("mousemove", function(event) {
    let rect = playground.getBoundingClientRect();
    // Wir müssen die Koordinaten der Maus noch auf das Spielfeld umrechnen
    mouseX = event.clientX - rect.left;
    mouseY = rect.bottom - event.clientY;
});
// ------------------------

```

Nun setzen wir im gameLoop den Spieler direkt auf die Mausposition:
```js
function gameLoop(){
    // --- Neuer Code ---
    setPosition(player, mouseX, mouseY);
    // ------------------------

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

// ---- Neue Variablen ---
let speedY = 0;  // Startgeschwindigkeit: keine Bewegung
let gravitation = 0.8
let groundLevel = 10
let jumpPower = 18;
// ------------------------

setPosition(player, 100, 10);

function gameLoop(){

    // --- Neuer Code ---

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

    // --- Ende des neuen Codes ---

    window.requestAnimationFrame(gameLoop)
}
```

> 💡 `speedY` ist die Geschwindigkeit in Y-Richtung. Positiv = nach oben, negativ = nach unten. Gravitation bedeutet: sie wird jedes Frame um 1 kleiner. <br>
> 💡 `gravitation` ist die Stärke der Gravitation. Je höher, desto stärker die Gravitation.<br>
> 💡 `groundLevel` ist die Y-Position des Bodens. Je höher, desto tiefer der Boden.<br>
> 💡 `jumpPower` ist die Sprungkraft. Je höher, desto höher der Sprung.<br>

### Hintergrund scrolling

Bei einem Side-Scroller soll der Hintergrund scrollen, um eine Bewegung zu simulieren. Anstatt ein Bild zu verschieben, nutzen wir den Playground selbst als Hintergrund und verschieben dessen `backgroundPosition`.

Füge im CSS dem Playground ein Hintergrundbild hinzu:
```css
#playground {
    background-image: url(/assets/images/background.png);
    background-size: cover;
    background-repeat: repeat-x;
}
```

Im JavaScript verschieben wir die Hintergrundposition jedes Frame um ein paar Pixel nach links:

```js
let playground = document.querySelector("#playground");
let backgroundPosition = 0;

function gameLoop(){

    // Hintergrund nach links scrollen
    backgroundPosition -= 3; 
    playground.style.backgroundPosition = backgroundPosition + "px 0px";

    window.requestAnimationFrame(gameLoop)
}
```

> 💡 Der Hintergrund wird laufend nach links verschoben. Durch das `background-repeat: repeat-x` wird das Bild immer wieder aneinandergereiht, sodass ein endloser Hintergrund entsteht. Überlege dir, was du verändern musst, damit der Hintergrund schneller oder langsamer scrollt.

### Gegner / Hindernisse spawnen

Gegner oder Hindernisse erscheinen oft regelmässig am Rand des Spielfeldes. Wir erstellen sie dynamisch mit JavaScript und fügen sie dem `playground` hinzu. Wir benutzen direkt eine Funktion, um den Code übersichtlicher zu gestalten. Die Funktion schreiben wir zuerst (ich würde das nach dem Gameloop machen) und dann rufen wir sie in einem intervall auf.

**Beispiel**

Alle 2 Sekunden erscheint ein neuer Gegner auf der rechten Seite:

```js
function spawnEnemy() {
    // Neues img-Element erstellen
    let enemy = document.createElement("img");
    enemy.src = "/assets/images/enemy.png";

    // Diese Klasse können wir im CSS dann so anpassen, wie wir wollen
    enemy.classList.add("enemy");

    // Dem Spielfeld hinzufügen
    let playground = document.querySelector("#playground");
    playground.appendChild(enemy);

    // An eine Startposition setzen (rechts, zufällige Höhe)
    setPosition(enemy, 700, Math.random() * 400);
}

// Alle 2000 Millisekunden einen neuen Gegner spawnen
setInterval(spawnEnemy, 2000);
```

Im CSS ist wichtig, dass wir `position: absolute` setzen, ansonsten wird das Element nicht an der richtigen Position platziert. `z-index` ist ebenfalls nützlich, damit die Gegner über dem Spieler liegen.

```css
.enemy {
    width: 80px;
    height: 80px;
    position: absolute;
    z-index: 20;
}
```


### Gegner / Hindernisse bewegen

Gegner, die gespawnt wurden, müssen auch bewegt werden. Da es mehrere Gegner gleichzeitig geben kann, selektieren wir alle auf einmal mit `querySelectorAll` und bewegen sie in einer Schleife.

**Beispiel**

Alle Gegner bewegen sich im gameLoop nach links:

```js
function gameLoop(){

    // --- Neuer Code ---
    let enemies = document.querySelectorAll(".enemy");

    enemies.forEach(function(enemy) {
        moveElement(enemy, -4, 0);

        // Gegner entfernen, wenn er links raus ist
        if (getX(enemy) < -100) {
            enemy.remove();
        }
    });
    // --- Ende des neuen Codes ---

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

        // ---- Neuer Code ----

        if (isColliding(player, enemy)) {
            console.log("Game Over!");
            // Hier kannst du z.B. das Spiel stoppen oder eine Game-Over-Anzeige einblenden
        }

        // ---- Ende des neuen Codes ----
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

Im CSS kannst du es oben links positionieren und ein wenig stylen (hier ein Vorschlag):
```css
#score {
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background-color: black;
    padding: 5px;
}
```

**Beispiel**
Hier erhöhen wir den Score um 1, wenn der Spieler einen coin berührt. Wichtig sind die Variablen `score` und `scoreDisplay`. Wir deklarieren diese ausserhalb des GameLoops, da diese während der ganzen Spiellaufzeit bestehen bleiben.

Im gameloop selbst erhöhen wir den Score um 1 und schreiben das ergebnis in den scoreDisplay.

```js
let player = document.querySelector("#player");
let coin = document.querySelector("#coin");

// ----  Neuer score code ----
let score = 0;
let scoreDisplay = document.querySelector("#score");
// ---------------------------

function gameLoop(){
    if (isColliding(player, coin)) {
        // ---- Neuer score code -----
        score += 1;
        scoreDisplay.textContent = "Score: " + score;
        // ---------------------------

        // nicht score relevant, wir setzen nur das coin an eine neue Position.
        setPosition(coin, Math.random() * 900, Math.random() * 400);
    }

    window.requestAnimationFrame(gameLoop)
}
```


### Highscore speichern

Den Highscore speichern wir im `localStorage` des Browsers. So bleibt er auch nach dem Neuladen der Seite erhalten. Mehr zu `localStorage` findest du hier: [W3Schools: localStorage](https://www.w3schools.com/jsref/prop_win_localstorage.asp)

**Beispiel**

Hier prüfen wir, ob der aktuelle Score besser ist als der gespeicherte Highscore. Ist dies der Fall, wird der neue Score gespeichert. Dazu definieren wir direkt eine Funktion, welche wir später aufrufen. Wir müssen das nicht, machen es aber, damit wir den Code übersichtlicher gestalten können. 

```js
// Highscore speichern – nur wenn der neue Score besser ist
function saveHighscore(score) {
    let currentHighscore = localStorage.getItem("highscore") || 0;

    if (score > currentHighscore) {
        localStorage.setItem("highscore", score);
    }
}

// Highscore anzeigen
function showHighscore() {
    let highscore = localStorage.getItem("highscore") || 0;
    document.querySelector("#highscore").textContent = "Highscore: " + highscore;
}
```

Füge im HTML ein Element für den Highscore hinzu:
```html
<div id="highscore">Highscore: 0</div>
```

Rufe `saveHighscore(score)` auf, wenn das Spiel endet, und `showHighscore()` beim Laden der Seite.


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


### Schiessen

Folge diesem Tutorial, wenn du in deinem Game Schüsse einbauen möchtest.

Zum Beispiel in einem Space Shooter: Beim Drücken der Leertaste spawnen wir einen neuen Schuss. Im gameLoop bewegen wir alle Schüsse nach oben.

**HTML**

Wir brauchen kein HTML für die Schüsse – wir erstellen sie dynamisch per JavaScript.

**CSS**

Jeder Schuss wird ein `<div>` mit der Klasse `.bullet` sein. So können wir das ein wenig designen. Wichtig ist `position: absolute` und `z-index: 20`, damit der Schuss über dem Spieler liegt.
```css
.bullet {
    width: 10px;
    height: 20px;
    background-color: yellow;
    border-radius: 5px;
    position: absolute;
    z-index: 20;
}
```

**JavaScript**

Wir erstellen die Funktion `spawnBullet()`, welche einen neuen `<div>` erstellt, ihm die Klasse `bullet` gibt und ihn an der aktuellen Spielerposition positioniert. Im gameLoop können wir dann Schüsse spawnen und nach oben bewegen.

```js
let player = document.querySelector("#player");

// Schuss spawnen
function spawnBullet() {

    // Neues Element erstellen und Klasse zuweisen
    let bullet = document.createElement("div");
    bullet.classList.add("bullet");
    document.querySelector("#playground").appendChild(bullet);

    // Schuss an der aktuellen Spielerposition starten
    setPosition(bullet, getX(player), getY(player));
}

function gameLoop(){

    // Leertaste: neuen Schuss spawnen
    if (isKeyPressed(" ")) {
        spawnBullet();
    }

    // Alle Schüsse nach oben bewegen
    document.querySelectorAll(".bullet").forEach(function(bullet) {
        moveElement(bullet, 0, 10);

        // Schuss entfernen, wenn er oben raus ist
        if (getY(bullet) > 500) {
            bullet.remove();
        }
    });

    window.requestAnimationFrame(gameLoop)
}
```
> 💡 Wenn wir nach rechts schiessen wollen, müssen wir im gameloop die x-Koordinate des Schusses erhöhen, anstatt die y-Koordinate:

```js
moveElement(bullet, 10, 0);
```

> 💡 Weil `isKeyPressed` jeden Frame `true` zurückgibt solange die Taste gedrückt ist, werden sehr viele Schüsse auf einmal gespawnt. Tipp: Füge eine Cooldown-Variable hinzu, damit nur alle paar Frames ein Schuss abgefeuert wird.

<details>
<summary>Tipp: Cooldown</summary>

```js
let bulletCooldown = 0;

function gameLoop(){

    if (isKeyPressed(" ") && bulletCooldown <= 0) {
        spawnBullet();
        bulletCooldown = 15; // 15 Frames warten bis zum nächsten Schuss
    }

    bulletCooldown -= 1;

    // ...
}
```
</details>

### Autonome Gegner

In manchen Spielen bewegen sich Gegner selbständig auf den Spieler zu oder von ihm weg. Wir berechnen dazu die Richtung vom Gegner zum Spieler und bewegen den Gegner jeden Frame ein Stück in diese Richtung.

**Beispiel**

Gegner platzieren:

```js

// Das habt ihr bereits im Code
let player = document.querySelector("#player");
let enemy = document.querySelector("#enemy");

// Hier setzen wir die Anfangsposition des Gegners.
setPosition(enemy, 800, 300);
```

Im gameLoop berechnen wir die Richtung und bewegen den Gegner:

```js
function gameLoop(){

    // ---- Neuer Code ----

    // Abstand zwischen Gegner und Spieler berechnen
    let dx = getX(player) - getX(enemy);
    let dy = getY(player) - getY(enemy);

    // Gegner 2px pro Frame in Richtung Spieler bewegen
    let speed = 2;
    moveElement(enemy, dx * speed / 100, dy * speed / 100);

    // ---- Ende Neuer Code ----

    window.requestAnimationFrame(gameLoop)
}
```

> 💡 `dx` und `dy` sind die Abstände in X- und Y-Richtung. Wenn wir diese als Bewegung verwenden, bewegt sich der Gegner immer direkt auf den Spieler zu. Mit einem negativen `speed` bewegt er sich vom Spieler weg.

### Sound
In einem Spiel dürfen Soundeffekte nicht fehlen. Zum Beispiel ein Schussgeräusch, wenn der Spieler schiesst, oder ein Explosionston, wenn ein Gegner zerstört wird.

**Beispiel**
```js
// Soundeffekt laden (Füge das oben in den Code ein.)
let gameoversound = new Audio("/assets/sounds/gameover.mp3");

// Wenn das Spiel vorbei ist. Muss nicht in einer Funktion sein.
function gameOver(){

    // Soundeffekt abspielen im gameOver Zustand
    gameoversound.play();

    // Wenn der sound fertig ist, können wir z.B ein Gameover alert anzeigen.
    gameoversound.onended = function() {
        alert("Game Over!");
        window.location.href = "/"; // Zurück zum Hauptmenü oder Seite neu laden
    };
}
``` 


