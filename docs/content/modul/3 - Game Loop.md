# 3 - Game Loop

In einer normalen Interaktion wartet JavaScript auf ein einzelnes Ereignis, zum Beispiel einen Klick. Ein Spiel muss dagegen fortlaufend prüfen, was gerade passiert. Dafür verwenden wir einen **Game Loop**.

Die wichtigsten Befehle findest du im Abschnitt [Listen und Loops](./8-cheatsheet#listen-und-loops) des Cheatsheets und in der [Dokumentation des Game Frameworks](/jsgame/3-framework-docs).

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

Den [`addEventListener(...)`](./8-cheatsheet#events) findest du im Cheatsheet.

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

Der Game Loop ist ein endloser Loop. Bei jedem neuen Bild führt er seine Befehle erneut aus und berechnet den aktuellen Zustand des Spiels.

> `gameLoop()` wird einmal gestartet. Danach plant der Game Loop seinen nächsten Durchlauf immer wieder selbst.

## Framework einbinden

Manchmal benötigen wir Code, den jemand anderes bereits geschrieben hat. Statt diesen Code selbst zu kopieren, können wir eine weitere JavaScript-Datei als **Framework** einbinden. Ein Framework ist wie ein Werkzeugkoffer: Es stellt fertige Funktionen bereit, die wir in unserem eigenen Code verwenden können.

Eine solche Datei wird mit `script` eingebunden, genau wie unser eigenes `script.js`. Die Datei kann im Projekt liegen oder von einer anderen Quelle im Internet geladen werden. Wie JavaScript-Dateien mit [`script`](./8-cheatsheet#javascript-in-html-einbinden) eingebunden werden, findest du im Cheatsheet.

### 🎯 Vorbereitung – Unser Game Framework einbinden

Wir verwenden für das Roboter-Spiel das BBZ Game Framework. Es enthält Funktionen, mit denen wir später Spielelemente positionieren, bewegen und auf gedrückte Tasten reagieren können.

Füge in `index.html` direkt **vor** der bestehenden Zeile für `script.js` die Zeile für das Game Framework ein:

```html
<script src="https://bbz-biel-informatik.github.io/288-javascript/game-framework/bbzgame.js"></script>
<script src="./script.js"></script>
```

Die Reihenfolge ist wichtig: Zuerst lädt der Browser das Game Framework. Danach kann dein eigenes `script.js` dessen Funktionen verwenden. Du musst die Funktionen des Frameworks nicht in dein `script.js` kopieren.

## Ein Element fortlaufend bewegen

Durch die fortlaufenden Durchläufe des Loops können wir Objekte auf unserem Spielfeld flüssig bewegen. Mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition) setzen wir ein Objekt zuerst an seine Startposition. Danach bewegt [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) das Objekt bei jedem Durchlauf ein kleines Stück weiter. Beide Funktionen gehören zu unserem Game Framework.

Zuerst wählen wir den Roboter aus und setzen ihn an eine Startposition. Diese Vorbereitungen stehen **vor** dem Game Loop und werden nur einmal ausgeführt:

```js
let robot = document.querySelector("#robot");
setPosition(robot, 50, 85);
```

[`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) wählt den Roboter aus. [`setPosition(...)`](/jsgame/3-framework-docs#setposition) setzt ihn 50 Pixel vom linken und 85 Pixel vom unteren Rand entfernt.

Im Game Loop bewegen wir ihn bei jedem neuen Bild zwei Pixel nach rechts:

```js
function gameLoop() {
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

[`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erhält drei Angaben:

- `robot`: Welches Element soll sich bewegen?
- `2`: Wie viele Pixel bewegt es sich auf der X-Achse? Eine positive Zahl bewegt es nach rechts.
- `0`: Wie viele Pixel bewegt es sich auf der Y-Achse? `0` bedeutet, dass es sich nicht nach oben oder unten bewegt.

Eine Bewegung um zwei Pixel wäre allein kaum sichtbar. Weil der Game Loop diesen Befehl immer wieder ausführt, fährt der Roboter flüssig nach rechts. Im nächsten Kapitel verbinden wir diese Bewegung mit den Pfeiltasten.

## Was gehört in den Game Loop?

In den Game Loop gehört Code, der während des Spiels ständig geprüft oder aktualisiert werden muss, zum Beispiel:

- gedrückte Tasten prüfen,
- Spielfiguren bewegen und
- Kollisionen prüfen.

Einmalige Vorbereitungen gehören nicht in den Game Loop. HTML-Elemente wählen wir zum Beispiel vor dem Game Loop aus, damit JavaScript sie nicht bei jedem Durchlauf erneut suchen muss.

## Aufgaben

### 🎯 3.1 – Spielerbewegung

Lass den Roboter automatisch nach rechts fahren:

1. Stelle sicher, dass du das [Game Framework](#framework-einbinden) in `index.html` eingebunden hast.
2. Wähle den Roboter in `script.js` mit [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) aus.
3. Setze ihn mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition) an die Startposition `50, 85`.
4. Erstelle und starte einen [Game Loop](#aufbau-eines-game-loops).
5. Bewege den Roboter darin mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) bei jedem Durchlauf zwei Pixel nach rechts.

Speichere die Dateien und lade die Webseite neu. Der Roboter sollte nun selbstständig von links nach rechts fahren.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let robot = document.querySelector("#robot");
setPosition(robot, 50, 85);

function gameLoop() {
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die verwendeten Befehle findest du bei [HTML-Elemente auswählen](./8-cheatsheet#html-elemente-auswahlen), [Listen und Loops](./8-cheatsheet#listen-und-loops), [Funktionen](./8-cheatsheet#funktionen) und in der [Dokumentation des Game Frameworks](/jsgame/3-framework-docs).

</details>

### 🎯 3.2 – Geschwindigkeit erhöhen

Der Roboter fährt noch langsam. Verändere den Code so, dass er sich schneller nach rechts bewegt.

Speichere die Datei und lade die Webseite neu, um deine Änderung zu testen.

<details>
<summary>💡 Tipp anzeigen</summary>

Schau dir die drei Angaben in [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) an. Welche Zahl bestimmt, wie weit sich der Roboter bei jedem Durchlauf nach rechts bewegt?

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let robot = document.querySelector("#robot");
setPosition(robot, 50, 85);

function gameLoop() {
  moveElement(robot, 5, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Statt `5` kannst du auch eine andere positive Zahl ausprobieren. Je grösser die Zahl ist, desto weiter bewegt sich der Roboter bei jedem Durchlauf und desto schneller fährt er nach rechts.

</details>

## Steuerung

Bis jetzt fährt der Roboter bei jedem Durchlauf automatisch nach rechts. Für eine Steuerung soll die Bewegung nur stattfinden, wenn die passende Taste gedrückt ist.

Mit [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed) kann das Game Framework prüfen, ob eine Taste gerade gedrückt ist. Wir stellen diese Prüfung in eine `if`-Anweisung:

```js
function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 5, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

`if` bedeutet **wenn**. Bei jedem Durchlauf fragt JavaScript:

> Wenn die rechte Pfeiltaste gedrückt ist, was soll passieren?

Ist die Taste gedrückt, führt JavaScript den Code zwischen `{` und `}` aus und [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) bewegt den Roboter. Ist die Taste nicht gedrückt, wird die Bewegung übersprungen. Weil der Game Loop diese Frage immer wieder stellt, reagiert der Roboter flüssig auf die Taste.

Die Schreibweise von [`if`](./8-cheatsheet#if-else) findest du im Cheatsheet. Wie Bedingungen, `else if`, `else` und Vergleiche genau funktionieren, lernst du im nächsten Kapitel [If-Else](./4-if-else).

### 🎯 3.3 – Den Roboter steuern

Ersetze die automatische Bewegung aus Aufgabe 3.2 durch die Steuerung mit der rechten Pfeiltaste:

1. Prüfe im Game Loop mit [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed), ob `"ArrowRight"` gedrückt ist.
2. Bewege den Roboter nur dann mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) nach rechts.
3. Lade die Webseite neu und halte die rechte Pfeiltaste gedrückt.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let robot = document.querySelector("#robot");
setPosition(robot, 50, 85);

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 5, 0);
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die verwendeten Befehle findest du bei [HTML-Elemente auswählen](./8-cheatsheet#html-elemente-auswahlen), [If / Else](./8-cheatsheet#if-else), [Listen und Loops](./8-cheatsheet#listen-und-loops), [Funktionen](./8-cheatsheet#funktionen) und in der [Dokumentation des Game Frameworks](/jsgame/3-framework-docs).

</details>

### 🚀 Zusatzaufgabe – In alle Richtungen

Schaffst du es, die Bewegungen nach oben, unten, links und rechts alle zu programmieren?

Ergänze für jede Pfeiltaste eine eigene `if`-Anweisung. Die Tastennamen findest du bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed). Welche positiven und negativen Werte den Roboter in die verschiedenen Richtungen bewegen, ist bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) erklärt.
