# 8 - Aufgaben: Listen und Loops

👉 [Projektstand nach Kapitel 7 herunterladen](/assets/zips/space-robot-loesung-7.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 8.1 – Gegner zum bestehenden Spiel hinzufügen

Arbeite mit deinem Weltraum-Roboter-Projekt aus Kapitel 7 weiter. Darin hast du bereits die Funktion `moveRobot()` programmiert und im Game Loop aufgerufen. Nun ergänzen wir das Spiel mit mehreren Gegnern.

Füge diese drei Gegner in der `index.html` innerhalb von `spaceScene` ein:

```html
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 700px; bottom: 70px; width: 70px;" />
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 850px; bottom: 180px; width: 70px;" />
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 1000px; bottom: 290px; width: 70px;" />
```

Erweitere danach deine `script.js`:

1. Wähle mit [`document.querySelectorAll(...)`](../10-cheatsheet#html-elemente-auswahlen) alle Elemente mit der Klasse `enemy` aus und speichere sie in der Variable `enemies`.
2. Definiere eine neue [Funktion](../10-cheatsheet#funktionen) mit dem Namen `moveEnemies`.
3. Gehe darin mit [`forEach(...)`](../10-cheatsheet#listen-und-loops) durch alle Gegner.
4. Bewege jeden Gegner mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) um `2` Pixel nach links.
5. Rufe `moveEnemies()` in deinem bestehenden [`gameLoop()`](../10-cheatsheet#listen-und-loops) direkt nach `moveRobot()` auf.

Teste dein Spiel. Der Roboter soll sich weiterhin mit den Pfeiltasten steuern lassen, während alle drei Gegner automatisch nach links fliegen.
