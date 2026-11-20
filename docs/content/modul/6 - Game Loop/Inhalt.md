# 6 - Game Loop

In einer normalen Interaktion wartet JavaScript auf ein einzelnes Ereignis, zum Beispiel einen Klick. Ein Spiel muss dagegen fortlaufend prüfen, was gerade passiert. Dafür verwenden wir einen **Game Loop**.

## Lernziele

Nach diesem Kapitel kannst du:

- erklären, warum ein Spiel einen Game Loop braucht,
- einen Game Loop definieren und starten,
- ein HTML-Element im Game Loop automatisch bewegen und
- im Game Loop auf Tasten und Kollisionen reagieren.

## Event und Game Loop im Vergleich

Ein Event wird nur ausgeführt, wenn das passende Ereignis eintritt:

```js
button.addEventListener("click", function () {
  statusText.textContent = "Button angeklickt";
});
```

Ein Game Loop wird dagegen während des Spiels immer wieder ausgeführt. So kann JavaScript laufend Eingaben, Bewegungen und Kollisionen prüfen.

## Aufbau eines Game Loops

Ein Game loop ist eine Funktion, welche ständig nacheinander wiederholt wird. Er wird als Funktion geschrieben. Für den Moment kannst du diesen Aufbau als festes Muster übernehmen:

```js
function gameLoop() {
  // Hier wird das Spiel aktualisiert.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Wir schauen uns das Muster Zeile für Zeile an:

- `function gameLoop() {` definiert eine Funktion mit dem Namen `gameLoop`. Alles zwischen den geschweiften Klammern gehört zum Game Loop.
- [`window.requestAnimationFrame(gameLoop);`](../10-cheatsheet#listen-und-loops) sagt dem Browser: Führe `gameLoop` beim nächsten Bild noch einmal aus. So plant jeder Durchlauf den nächsten Durchlauf.
- `}` beendet die Funktion.
- [`gameLoop();`](../10-cheatsheet#funktionen) ruft die Funktion zum ersten Mal auf und startet damit den Game Loop.

Der erste Aufruf ist wie das Anstossen eines Dominosteins: `gameLoop();` startet den ersten Durchlauf. Danach sorgt [`window.requestAnimationFrame(...)`](../10-cheatsheet#listen-und-loops) dafür, dass immer wieder ein neuer Durchlauf folgt.

## Wie können wir ein Element bewegen?

Zuerst wählen wir den Roboter aus und setzen ihn an seine Startposition. Diese Befehle stehen **vor** dem Game Loop, weil sie nur einmal ausgeführt werden sollen:

```js
let player = document.querySelector("#player");
setPosition(player, 50, 85);
```

[`setPosition(...)`](/jsgame/3-framework-docs#setposition) setzt ihn an eine Startposition: `50` Pixel vom linken und `85` Pixel vom unteren Rand entfernt.

Danach bewegen wir den Roboter im Game Loop bei jedem neuen Bild zwei Pixel nach rechts:

```js
function gameLoop() {
  moveElement(player, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

[`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erhält drei Angaben:

- `player`: das Element, das bewegt werden soll,
- `2`: die Bewegung auf der X-Achse; eine positive Zahl bewegt den Roboter nach rechts und
- `0`: die Bewegung auf der Y-Achse; `0` bedeutet, dass der Roboter nicht nach oben oder unten fährt.

Zwei Pixel sind nur eine kleine Strecke. Weil der Game Loop den Befehl bei jedem neuen Bild erneut ausführt, entsteht trotzdem eine flüssige Bewegung.

![Startposition 50, 85 und Bewegungsvektor 2, 0 des Roboters](/assets/images/bewegungsvektor.svg)

Stelle dir das Spielfeld als Koordinatensystem vor: Die X-Achse verläuft von links nach rechts, die Y-Achse von unten nach oben. Darum bewegt ein positiver X-Wert den Roboter nach rechts und ein positiver Y-Wert nach oben. Mit negativen Werten fährt er in die entgegengesetzte Richtung.

## Eine Spielfigur mit Tasten steuern

Ein Spiel soll auf Eingaben reagieren. Dafür kombinieren wir den Game Loop mit einer [`if`-Anweisung](../5-if-else/inhalt#wie-schreiben-wir-eine-if-anweisung):

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, 2, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

[`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) beantwortet die Frage: Ist diese Taste gerade gedrückt? Eine Taste kann jederzeit gedrückt oder losgelassen werden. Deshalb muss die Frage bei jedem neuen Bild erneut gestellt werden. Genau dafür ist der Game Loop da: Die Bewegung beginnt beim Drücken und endet beim Loslassen.

Für jede Richtung stellen wir eine eigene Frage:

```js
if (isKeyPressed("ArrowRight")) {
  moveElement(player, 2, 0);
}

if (isKeyPressed("ArrowLeft")) {
  moveElement(player, -2, 0);
}
```

Die beiden `if`-Anweisungen werden unabhängig voneinander geprüft. JavaScript erkennt deshalb auch zwei gleichzeitig gedrückte Tasten und die Figur fährt diagonal.

Die Schreibweise der Entscheidung findest du unter [If / Else](../10-cheatsheet#if-else), die Tastennamen bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed).

## Kollisionen sind ebenfalls Fragen

Eine Bedingung kann auch prüfen, ob sich zwei Spielelemente berühren:

```js
if (isColliding(player, alien)) {
  alien.remove();
}
```

[`isColliding(player, alien)`](/jsgame/3-framework-docs#iscolliding) fragt:

> Berühren sich der Roboter und das Alien?

Wenn die Antwort stimmt, löscht [`remove()`](../10-cheatsheet#html-elemente-bearbeiten) das Alien. Wenn sie nicht stimmt, wird der Befehl übersprungen.

Auch diese Frage gehört in den Game Loop. Die Figur bewegt sich fortlaufend, deshalb kann die Berührung bei jedem neuen Bild an einer anderen Stelle passieren.

## Was gehört in den Game Loop?

In den Game Loop gehört Code, der während des Spiels ständig geprüft oder aktualisiert werden muss, zum Beispiel:

- gedrückte Tasten prüfen,
- Spielfiguren bewegen und
- Kollisionen prüfen.

Einmalige Vorbereitungen gehören nicht in den Game Loop. HTML-Elemente wählen wir zum Beispiel vor dem Game Loop aus, damit JavaScript sie nicht bei jedem Durchlauf erneut suchen muss. Dasselbe gilt für Variablen: `let punkte = 0;` steht vor dem Game Loop, sonst würde der Wert bei jedem Bild wieder von vorne beginnen.

Im nächsten Kapitel [Funktionen](../7-funktionen/inhalt) lernst du, wie du einen lang gewordenen Game Loop wieder übersichtlich machst.

👉 Weiter zu den [Aufgaben](./aufgaben)
