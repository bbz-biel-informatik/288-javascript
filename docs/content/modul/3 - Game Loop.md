# 3 - Game Loop

::: tip 📦 Projektstand zu Beginn dieses Kapitels
Hier ist das Weltraum-Roboter-Projekt mit allen gelösten Aufgaben aus Kapitel 2 - HTML-Elemente auswählen, bearbeiten, Events:

👉 [Projektstand nach Kapitel 2 herunterladen](/assets/zips/space-robot-loesung-2.zip)

Lade den Ordner herunter, wenn du eine Aufgabe nicht fertig gelöst hast oder etwas
bei dir nicht funktioniert. So startest du dieses Kapitel auf dem gleichen Stand wie alle anderen.
:::

In einer normalen Interaktion wartet JavaScript auf ein einzelnes Ereignis, zum Beispiel einen Klick. Ein Spiel muss dagegen fortlaufend prüfen, was gerade passiert. Dafür verwenden wir einen **Game Loop**.

## Lernziele

Nach diesem Kapitel kannst du:

- erklären, warum ein Spiel einen Game Loop braucht,
- einen Game Loop definieren und starten und
- ein HTML-Element im Game Loop automatisch bewegen.

## Event und Game Loop im Vergleich

Ein Event wird nur ausgeführt, wenn das passende Ereignis eintritt:

```js
button.addEventListener("click", function () {
  statusText.textContent = "Button angeklickt";
});
```

Ein Game Loop wird dagegen während des Spiels immer wieder ausgeführt. So kann JavaScript laufend Eingaben, Bewegungen und Kollisionen prüfen.

<details>
<summary>Analogie: Der Game Loop ist wie ein Film</summary>

Ein Film besteht aus vielen einzelnen Bildern, die schnell nacheinander gezeigt werden. Bei jedem neuen Bild kann sich eine Figur ein kleines Stück bewegen. Dadurch sieht die Bewegung für uns flüssig aus.

Der Game Loop funktioniert ähnlich: Bei jedem neuen Bild schickt JavaScript unseren kleinen Roboter durch das HTML und lässt ihn seine Aufträge ausführen. Der Roboter bewegt Spielfiguren, prüft Eingaben oder kontrolliert Kollisionen. Danach beginnt beim nächsten Bild ein neuer Durchlauf.

</details>

## Aufbau eines Game Loops

Ein Game Loop wird als Funktion geschrieben. Funktionen behandeln wir später ausführlich. Für den Moment kannst du diesen Aufbau als festes Muster übernehmen:

```js
function gameLoop() {
  // Hier wird das Spiel aktualisiert.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Wir schauen uns das Muster Zeile für Zeile an:

- `function gameLoop() {` definiert eine Funktion mit dem Namen `gameLoop`. Alles zwischen den geschweiften Klammern gehört zum Game Loop.
- [`window.requestAnimationFrame(gameLoop);`](./9-cheatsheet#listen-und-loops) sagt dem Browser: Führe `gameLoop` beim nächsten Bild noch einmal aus. So plant jeder Durchlauf den nächsten Durchlauf.
- `}` beendet die Funktion.
- [`gameLoop();`](./9-cheatsheet#funktionen) ruft die Funktion zum ersten Mal auf und startet damit den Game Loop.

Der erste Aufruf ist wie das Anstossen eines Dominosteins: `gameLoop();` startet den ersten Durchlauf. Danach sorgt [`window.requestAnimationFrame(...)`](./9-cheatsheet#listen-und-loops) dafür, dass immer wieder ein neuer Durchlauf folgt.

## Wie können wir ein Element bewegen?

Zuerst wählen wir den Roboter aus und setzen ihn an seine Startposition. Diese Befehle stehen **vor** dem Game Loop, weil sie nur einmal ausgeführt werden sollen:

```js
let robot = document.querySelector("#robot");
setPosition(robot, 50, 85);
```

[`setPosition(...)`](/jsgame/3-framework-docs#setposition) setzt ihn an eine Startposition: `50` Pixel vom linken und `85` Pixel vom unteren Rand entfernt.

Danach bewegen wir den Roboter im Game Loop bei jedem neuen Bild zwei Pixel nach rechts:

```js
function gameLoop() {
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

[`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erhält drei Angaben:

- `robot`: das Element, das bewegt werden soll,
- `2`: die Bewegung auf der X-Achse; eine positive Zahl bewegt den Roboter nach rechts und
- `0`: die Bewegung auf der Y-Achse; `0` bedeutet, dass der Roboter nicht nach oben oder unten fährt.

Zwei Pixel sind nur eine kleine Strecke. Weil der Game Loop den Befehl bei jedem neuen Bild erneut ausführt, entsteht trotzdem eine flüssige Bewegung.

![Startposition 50, 85 und Bewegungsvektor 2, 0 des Roboters](/assets/images/bewegungsvektor.svg)

Stelle dir das Spielfeld als Koordinatensystem vor: Die X-Achse verläuft von links nach rechts, die Y-Achse von unten nach oben. Darum bewegt ein positiver X-Wert den Roboter nach rechts und ein positiver Y-Wert nach oben. Mit negativen Werten fährt er in die entgegengesetzte Richtung.

## Was gehört in den Game Loop?

In den Game Loop gehört Code, der während des Spiels ständig geprüft oder aktualisiert werden muss, zum Beispiel:

- gedrückte Tasten prüfen,
- Spielfiguren bewegen und
- Kollisionen prüfen.

Einmalige Vorbereitungen gehören nicht in den Game Loop. HTML-Elemente wählen wir zum Beispiel vor dem Game Loop aus, damit JavaScript sie nicht bei jedem Durchlauf erneut suchen muss.

## Aufgaben

### 🎯 3.1 – Spielerbewegung

Lass den Roboter automatisch von links nach rechts fahren. Nutze dabei die Codeteile aus der Theorie und gehe wie folgt vor:

- Erstelle den Game Loop wie im [Aufbau eines Game Loops](#aufbau-eines-game-loops).
- Setze den Roboter an einen festen Ort.
- Bewege den Roboter im Game Loop.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
// Wenn nicht bereits vorhanden, wähle den Roboter aus
let robot = document.querySelector("#robot");

// Setze den Roboter an eine Startposition
setPosition(robot, 50, 85);

// Game Loop erstellen
function gameLoop() {
  // Roboter bei jedem Durchlauf etwas nach rechts bewegen
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

</details>

### 🎯 3.2 – Bewegung ändern

Der Roboter bewegt sich nun nach rechts. Verändere den Code nacheinander so, dass Folgendes geschieht:

- Der Roboter bewegt sich nach oben.
- Der Roboter bewegt sich diagonal nach oben rechts.
- Der Roboter bewegt sich sehr schnell nach rechts.
- Der Roboter bewegt sich nach unten. Tipp: Verändere die Anfangsposition, um den Effekt zu sehen.
- Der Roboter bewegt sich sehr langsam nach unten.
- Der Roboter bewegt sich nach links.

> Denke dabei visuell und stelle dir das Spielfeld als Koordinatensystem vor.

<details>
<summary>✅ Lösung anzeigen</summary>

Teste jeweils nur eine der folgenden Zeilen im Game Loop:

```js
moveElement(robot, 0, 2); // nach oben
moveElement(robot, 2, 2); // diagonal nach oben rechts
moveElement(robot, 20, 0); // sehr schnell nach rechts
moveElement(robot, 0, -2); // nach unten
moveElement(robot, 0, -0.5); // sehr langsam nach unten
moveElement(robot, -2, 0); // nach links
```

Wie sich die drei Angaben des Befehls auswirken, findest du bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

</details>
