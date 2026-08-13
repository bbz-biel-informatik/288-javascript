# 5 - Funktionen

Eine Funktion fasst mehrere Befehle unter einem Namen zusammen. Wir können diesen Code danach gezielt aufrufen und wiederverwenden.

Die Schreibweise findest du auch im Abschnitt [Funktionen](../7-cheatsheet#funktionen) des Cheatsheets.

## Funktion definieren und aufrufen

```js
function updateScore() {
  scoreValue = scoreValue + 1;
  scoreText.textContent = "Score: " + scoreValue;
}
```

Mit `function updateScore()` definieren wir die Funktion. Der Code zwischen `{` und `}` wird dabei noch nicht ausgeführt.

Erst dieser Befehl ruft die Funktion auf:

```js
updateScore();
```

Du kannst dir die Definition wie ein Rezept vorstellen. Der Aufruf bedeutet: Führe das Rezept jetzt aus.

## Warum verwenden wir Funktionen?

Ohne Funktion müssten wir denselben Code an mehreren Stellen wiederholen. Eine Funktion gibt diesem Ablauf einen Namen:

```js
function showGameOver() {
  statusText.textContent = "Game Over";
  player.remove();
}
```

Danach reicht an jeder passenden Stelle:

```js
showGameOver();
```

Das macht den Code kürzer und verständlicher. Wenn sich der Ablauf ändert, müssen wir ihn nur in der Funktion anpassen.

## Parameter geben einer Funktion Werte mit

Eine Funktion kann für unterschiedliche Werte verwendet werden:

```js
function changeStatus(message) {
  statusText.textContent = message;
}

changeStatus("Spiel gestartet");
changeStatus("Game Over");
```

`message` ist ein Parameter. Innerhalb der Funktion ist er ein Platzhalter für den mitgegebenen Wert.

Beim ersten Aufruf enthält `message` den Text `"Spiel gestartet"`. Beim zweiten Aufruf enthält er `"Game Over"`.

## Mehrere Parameter

```js
function movePlayer(x, y) {
  moveElement(player, x, y);
}

movePlayer(10, 0);
movePlayer(0, 10);
```

Die Reihenfolge ist wichtig: Der erste Wert gehört zum ersten Parameter, der zweite Wert zum zweiten Parameter.

## Funktionen und Events

Auch ein Event Listener benötigt eine Funktion:

```js
startButton.addEventListener("click", function() {
  statusText.textContent = "Spiel gestartet";
});
```

Die Funktion beschreibt, was beim Klick passieren soll. Der Browser ruft sie erst auf, wenn das Event eintritt.

Wir können dafür auch eine benannte Funktion verwenden:

```js
function startGame() {
  statusText.textContent = "Spiel gestartet";
}

startButton.addEventListener("click", startGame);
```

Hier steht `startGame` ohne Klammern, weil der Event Listener die Funktion erst bei einem Klick aufrufen soll.

## Funktionen im Game Loop

Der Game Loop ist ebenfalls eine Funktion:

```js
function gameLoop() {
  moveEnemies();
  checkCollisions();
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Kleine, passend benannte Funktionen machen sichtbar, welche Aufgaben in jedem Durchlauf erledigt werden.

Merke:

> Eine Funktion wird zuerst definiert und später aufgerufen. Parameter machen dieselbe Funktion für verschiedene Werte nutzbar.
