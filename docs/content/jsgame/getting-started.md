# Getting Started
Wilkommen im Gameprojekt. Das hier ist der Ausgangspunkt. Gehe Schritt für Schritt durch das Tutorial, damit du dein Game realisieren kannst.

## Gamekonzept

## Projektstruktur


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
