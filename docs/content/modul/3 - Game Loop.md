# 3 - Game Loop

In einer normalen Interaktion wartet JavaScript auf ein einzelnes Ereignis, zum Beispiel einen Klick. Ein Spiel muss dagegen fortlaufend prüfen, was gerade passiert. Dafür verwenden wir einen **Game Loop**.

Die wichtigsten Befehle findest du im Abschnitt [Listen und Loops](./8-cheatsheet#listen-und-loops) des Cheatsheets und in der [Dokumentation des Game Frameworks](/jsgame/3-framework-docs).

## Lernziele

Nach diesem Kapitel kannst du:

* erklären, warum ein Spiel einen Game Loop braucht,
* einen Game Loop definieren und starten und
* Code im Game Loop wiederholt ausführen.

## Event und Game Loop im Vergleich

Ein Event wird nur ausgeführt, wenn das passende Ereignis eintritt:

```js
button.addEventListener("click", function() {
  statusText.textContent = "Button angeklickt";
});
```

Den [`addEventListener(...)`](./8-cheatsheet#events) findest du im Cheatsheet.

Ein Game Loop wird dagegen während des Spiels immer wieder ausgeführt. So kann JavaScript laufend Eingaben, Bewegungen und Kollisionen prüfen.

## Aufbau eines Game Loops

Ein Game Loop wird als Funktion geschrieben. Funktionen behandeln wir später ausführlich. Für den Moment kannst du diesen Aufbau als festes Muster übernehmen:

```js
function gameLoop() {
  // Hier wird das Spiel aktualisiert.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die Definition und den Aufruf einer [Funktion](./8-cheatsheet#funktionen) sowie [`requestAnimationFrame(...)`](./8-cheatsheet#listen-und-loops) findest du im Cheatsheet.

Der Ablauf ist:

1. Mit `function gameLoop()` definieren wir den Game Loop.
2. Mit `gameLoop()` starten wir ihn einmal.
3. Der Code in der Funktion wird ausgeführt.
4. `requestAnimationFrame(gameLoop)` plant den nächsten Durchlauf.
5. Beim nächsten Bild beginnt der Ablauf wieder von vorne.

Wie `requestAnimationFrame(...)` im Browser intern funktioniert, müssen wir nicht genauer kennen.

Merke:

> `gameLoop()` wird einmal gestartet. Danach plant der Game Loop seinen nächsten Durchlauf immer wieder selbst.

## Eine Taste fortlaufend prüfen

Für eine flüssige Bewegung prüfen wir im Game Loop, ob eine Taste gerade gedrückt ist:

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 5, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

[`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) prüft die Taste. [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) bewegt das ausgewählte HTML-Element. Die [`if`-Bedingung](./8-cheatsheet#if-else) schauen wir im nächsten Kapitel genauer an.

Solange die rechte Pfeiltaste gedrückt bleibt, wird der Spieler bei jedem Durchlauf ein kleines Stück bewegt. Dadurch wirkt die Bewegung flüssig.

## Was gehört in den Game Loop?

In den Game Loop gehört Code, der während des Spiels ständig geprüft oder aktualisiert werden muss, zum Beispiel:

* gedrückte Tasten prüfen,
* Spielfiguren bewegen und
* Kollisionen prüfen.

Einmalige Vorbereitungen gehören nicht in den Game Loop. HTML-Elemente wählen wir zum Beispiel vor dem Game Loop aus, damit JavaScript sie nicht bei jedem Durchlauf erneut suchen muss.

## Aufgaben

In den kommenden Übungen erweitern wir das bereits verwendete Weltraum-Roboter-Projekt. Wir starten kein neues Spiel. Die genauen Aufgaben werden später ergänzt.
