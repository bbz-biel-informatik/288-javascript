# 4 - Listen und Loops

Listen fassen mehrere Werte zusammen. Loops führen Code wiederholt aus. Zusammen helfen sie uns, viele Spielelemente mit wenig Code zu bearbeiten.

Die wichtigsten Schreibweisen findest du im Abschnitt [Listen und Loops](../7-cheatsheet#listen-und-loops) des Cheatsheets.

## Eine Liste speichert mehrere Werte

```js
let colors = ["red", "green", "blue"];
```

Die eckigen Klammern zeigen, dass `colors` eine Liste ist. Die einzelnen Werte sind mit Kommas getrennt.

In einem Spiel können auch mehrere HTML-Elemente gemeinsam ausgewählt werden:

```js
let enemies = document.querySelectorAll(".enemy");
```

`querySelectorAll(...)` sucht nicht nur das erste passende Element. Es liefert alle Elemente mit der Klasse `enemy` als Sammlung zurück.

## Warum brauchen wir einen Loop?

Die Variable `enemies` enthält mehrere Elemente. Ein Befehl wie `enemies.remove()` weiss deshalb nicht, welcher einzelne Gegner gemeint ist.

Mit `forEach(...)` gehen wir durch die Sammlung:

```js
enemies.forEach(function(enemy) {
  enemy.remove();
});
```

Bei jedem Durchlauf verweist `enemy` auf genau ein Element:

1. erster Gegner → entfernen
2. zweiter Gegner → entfernen
3. dritter Gegner → entfernen

Der gleiche Code funktioniert unabhängig davon, ob es zwei oder zwanzig Gegner gibt.

## Wiederholung nach Zeit

`setInterval(...)` führt einen Codeblock in einem festen Zeitabstand erneut aus:

```js
setInterval(function() {
  timeLeft = timeLeft - 1;
  timer.textContent = "Zeit: " + timeLeft;
}, 1000);
```

`1000` Millisekunden entsprechen einer Sekunde. JavaScript merkt sich den Auftrag und ruft die Funktion danach immer wieder auf.

Das eignet sich zum Beispiel für einen Countdown. Für flüssige Bewegungen in einem Spiel verwenden wir stattdessen den Game Loop.

## Der Game Loop

Ein Spiel muss fortlaufend Eingaben, Bewegungen und Kollisionen prüfen. Dafür gibt es eine Funktion, die sich selbst für das nächste Bild des Spiels einplant:

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 5, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Der Ablauf ist:

1. `gameLoop()` wird einmal gestartet.
2. JavaScript prüft die Eingabe und verändert das Spiel.
3. `requestAnimationFrame(gameLoop)` plant den nächsten Durchlauf.
4. Beim nächsten Bild beginnt der Ablauf erneut.

Wie `requestAnimationFrame(...)` intern arbeitet, müssen wir für unsere Spiele nicht genauer kennen. Wichtig ist:

> Alles in `gameLoop()` wird während des Spiels immer wieder ausgeführt.

## Zwei Arten von Wiederholung

* `forEach(...)` wiederholt Code einmal für jedes Element einer Liste.
* Der Game Loop wiederholt Code fortlaufend, solange das Spiel läuft.

Merke:

> Eine Liste beantwortet die Frage „Welche Elemente?“. Ein Loop beantwortet die Frage „Wie oft soll der Code ausgeführt werden?“.
