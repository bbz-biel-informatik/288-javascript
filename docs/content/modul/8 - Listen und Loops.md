# 8 - Listen und Loops

👉 [Projektstand nach Kapitel 7 herunterladen](/assets/zips/space-robot-loesung-7.zip)

Listen fassen mehrere Werte zusammen. Loops führen Code wiederholt aus. Zusammen helfen sie uns, viele Spielelemente mit wenig Code zu bearbeiten.

Die wichtigsten Schreibweisen findest du im Abschnitt [Listen und Loops](./9-cheatsheet#listen-und-loops) des Cheatsheets.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Liste definieren,
- mit `forEach(...)` durch eine Liste gehen,
- mehrere HTML-Elemente auswählen und verändern.

## Eine Liste speichert mehrere Werte

```js
let colors = ["red", "green", "blue"];
```

Die eckigen Klammern zeigen, dass `colors` eine Liste ist. Die einzelnen Werte sind mit Kommas getrennt. Doch wozu brauchen wir das? Es kann vorkommen, dass wir mehrere Elemente gemeinsam verändern / bewegen möchten. Das können wir mit dem folgenden Befehl machen. Wir haben nun nicht mehr ein HTML element, sondern alle Elemente mit der gegebenen Klasse als Liste gespeichert.

```js
let enemies = document.querySelectorAll(".enemy");
```

[`document.querySelectorAll(...)`](./9-cheatsheet#html-elemente-auswahlen) sucht nicht nur das erste passende Element. Es liefert alle Elemente mit der Klasse `enemy` als Sammlung zurück.

## Warum brauchen wir einen Loop?

Die Variable `enemies` enthält nun mehrere Elemente. [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) kann aber immer nur ein einzelnes Element bewegen. Mit forEach können wir bei jedem Element vorbeischauen und etwas machen. Das sieht dann ca. folgendermassen aus:

Mit [`forEach(...)`](./9-cheatsheet#listen-und-loops) gehen wir durch die Sammlung:

```js
enemies.forEach(function (enemy) {
  moveElement(enemy, -5, 0);
});
```

Bei jedem Durchlauf verweist `enemy` auf genau ein Element:

1. erster Gegner → 5 Pixel nach links bewegen
2. zweiter Gegner → 5 Pixel nach links bewegen
3. dritter Gegner → 5 Pixel nach links bewegen

Der Loop weist unseren kleinen Javascript-roboter an, bei allen Gegnern vorbei zu gehen und jeden einzeln ein kleines Stück nach links zu schieben. Der gleiche Code funktioniert unabhängig davon, ob es zwei oder zwanzig Gegner gibt.

## Wiederholung nach Zeit

[`setInterval(...)`](./9-cheatsheet#listen-und-loops) führt einen Codeblock in einem festen Zeitabstand erneut aus:

```js
setInterval(function () {
  timeLeft = timeLeft - 1;
  timer.textContent = "Zeit: " + timeLeft;
}, 1000);
```

`1000` Millisekunden entsprechen einer Sekunde. JavaScript merkt sich den Auftrag und ruft die Funktion danach immer wieder auf.

Das eignet sich zum Beispiel für einen Countdown. Für flüssige Bewegungen in einem Spiel verwenden wir stattdessen den [Game Loop](./3-game-loop).

## Aufgaben

### 🎯 8.1 – Gegner zum bestehenden Spiel hinzufügen

Arbeite mit deinem Weltraum-Roboter-Projekt aus Kapitel 7 weiter. Darin hast du bereits die Funktion `moveRobot()` programmiert und im Game Loop aufgerufen. Nun ergänzen wir das Spiel mit mehreren Gegnern.

Füge diese drei Gegner in der `index.html` innerhalb von `spaceScene` ein:

```html
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 700px; bottom: 70px; width: 70px;" />
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 850px; bottom: 180px; width: 70px;" />
<img class="enemy" src="./assets/enemy.png" style="position: absolute; left: 1000px; bottom: 290px; width: 70px;" />
```

Erweitere danach deine `script.js`:

1. Wähle mit [`document.querySelectorAll(...)`](./9-cheatsheet#html-elemente-auswahlen) alle Elemente mit der Klasse `enemy` aus und speichere sie in der Variable `enemies`.
2. Definiere eine neue [Funktion](./9-cheatsheet#funktionen) mit dem Namen `moveEnemies`.
3. Gehe darin mit [`forEach(...)`](./9-cheatsheet#listen-und-loops) durch alle Gegner.
4. Bewege jeden Gegner mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) um `2` Pixel nach links.
5. Rufe `moveEnemies()` in deinem bestehenden [`gameLoop()`](./9-cheatsheet#listen-und-loops) direkt nach `moveRobot()` auf.

Teste dein Spiel. Der Roboter soll sich weiterhin mit den Pfeiltasten steuern lassen, während alle drei Gegner automatisch nach links fliegen.
