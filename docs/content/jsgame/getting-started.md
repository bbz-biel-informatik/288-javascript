# Getting Started
Wilkommen im Gameprojekt. Das hier ist der Ausgangspunkt. Gehe Schritt für Schritt durch das Tutorial, damit du dein Game realisieren kannst.

## Gamekonzept
Erarbeite dir eine Idee für dein Spiel. (TBD)

## Projektstruktur
Für das Game empfiehlt sich die folgende Projektstruktur.

```
|-- index.html          <-- Hier ist das Game Menu
|-- index.css           <-- Hier ist das Game Menu Design
|-- game/
|   |-- game.js         <-- Hier kommt der Code für das Spiel
|   |-- game.html       <-- Hier kommen die HTML Elemente für das Spiel
|   |-- game.css        <-- Hier ist das nötige Design für das Spiel
|-- assets/           
    |-- images/         <-- Hier kommen die Grafiken/Bilder für das Spiel
    |-- sounds/         <-- Hier kommen die Sounds für das Spiel
```

### 1. Grundgerüst erstellen
Erstelle in einem ersten Schritt die Projektstruktur mit den nötigen Dateien und Ordnern, wie oben angezeigt.

### 2. HTML aufsetzen und Dateien mitenander 'verbinden'
Wir wollen nun in kleinen Schritten vorwärts gehen und sicher sein, dass unser Javascript funktioniert und verbunden ist, dass unser CSS funktioniert und verbunden ist usw. So können wir mit Confidence in's game development starten.

#### `index.html`
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Game</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1>Mein Game</h1>
    <a href="game/game.html">Spiel starten</a>
</body>
</html>
```

#### `game/game.html`
```html
<!DOCTYPE html>
<html lang="de">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein game</title>
    <link rel="stylesheet" href="game.css">
</head>

<body>
    <div id="wrapper">
        <div id="playground">

        </div>
    </div>
    <script src="https://bbz-biel-informatik.github.io/288-javascript/game-framework/bbzgame.js"></script>
    <script type="module" src="game.js"></script>
</body>

</html>
```

#### `game/game.css`
```css
body {
    overflow: hidden;
}
#wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    justify-items: center;
    align-content: center;
    background-color:cadetblue;
}
#playground {
    width: 1000px;
    height: 500px;
    border-radius: 5px;
    box-shadow: 10px 10px 10px 10px #1212121a;
    background-color: whitesmoke;
}
```

#### `game/game.js`
```javascript
console.log("hello from game.js")
```

Du solltest nun in der [console](../modul/1-javascript-intro.md#browser-konsole) folgende Ausgabe sehen:

```
hello from game.js
Initializing BBZGame Script...
```

🎉 Damit wissen wir, das javascript ist verbunden und wir können loslegen.


## Spiel aufsetzen 

## Game loop
Jedes Spiel basiert auf einem game loop. Das ist eine Schleife, die während dem Spielen immer wieder ganz schnell hinter einander durchlaufen wird. Bei jedem Durchlauf wird der Benutzerinput gecheckt (Welche Tasten werden gedrückt), Gegner und Spieler werden bewegt, Kollisionen werden gecheckt usw. Das sind sehr viele Berechnungen auf einmal. Im Optimalfall dauert der game loop maximal 1/30 Sekunde. Dann haben wir eine "FPS (Frames per second)" von 30.

Der Game loop ist auch die basis in unserem Spiel und dort, wo wir beginnen werden. In Javascript machen wir folgendes:

```js
// Anfangscode, zum Beispiel 
let player = document.querySelector("#player");


// Gameloop definieren
function gameLoop(){

    // ---------------------------------------------------------------------------
    // ----- Dieser Code hier wird nun x fach hintereinander schnell ausgeführt.
    // ----- Hier prüfen wir Input, verschieben unsere Figuren, usw.
    // ----- Zum Beispiel:
    if(isKeyPressed("ArrowUp")) {
        moveElement(player, 0, 1);
    }
    // ---------------------------------------------------------------------------

    // Diesen Loop hier immer wieder wiederholen. Das muss Immer ganz am Ende des Loops stehen
    window.requestAnimationFrame(gameLoop)
}

// Gameloop ausführen
gameLoop();
```

## Funktionen einbauen
Du bist nun soweit, um die Funktionen deines Spiels zu implementieren. Überlege dir, womit du beginnen willst und gehe dann schritt für schritt vorwärts. Es ist gut, wenn du immer kleine dinge planst, programmierst und testest. So stellst du sicher, dass der Code fortlaufend funktioniert und wenn nicht weisst du, was du verändert hast.

### Spielerbewegung
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
