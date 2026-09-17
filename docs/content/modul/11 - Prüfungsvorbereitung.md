# Prüfungsvorbereitung: JavaScript

## Teil 1: 15 Multiple-Choice-Fragen

Kreuze bei jeder Frage **genau eine Antwort** an. Versuche es zuerst ohne Hilfsmittel. Nutze danach die verlinkten Abschnitte im Cheatsheet zum Nachschlagen.

In den Beispielen mit `gameStatus` oder `statusText` ist das passende HTML-Element bereits ausgewählt.

Die Fragen mit **★** verbinden mehrere bekannte Grundlagen. Insgesamt sind 16 der 20 Fragen Grundlagenfragen und vier etwas anspruchsvoller.

### HTML-Elemente und Events

Zum Nachschlagen: [Elemente auswählen](./9-cheatsheet#html-elemente-auswahlen), [Elemente bearbeiten](./9-cheatsheet#html-elemente-bearbeiten), [Events](./9-cheatsheet#events).

**1. Welcher JavaScript-Befehl wählt den Roboter im folgenden HTML aus?**

```html
<div id="robot">Roboter</div>
```

- [ ] A: `document.querySelector(".robot");`
- [ ] B: `document.querySelector("#robot");`
- [ ] C: `document.querySelector("robot");`
- [ ] D: `robot.remove();`

**2. Was passiert durch diesen Code?**

```html
<div id="robot">Roboter</div>
```

```js
let robot = document.querySelector("#robot");
robot.style.backgroundColor = "red";
```

- [ ] A: Der Text des Roboters wird durch das Wort `red` ersetzt.
- [ ] B: Der Roboter wird von der Webseite entfernt.
- [ ] C: Der Hintergrund der ganzen Webseite wird rot.
- [ ] D: Der Hintergrund des Roboters wird rot.

**3. Was musst du tun, damit sich der Text auf diesem Button zu «Hallo!» ändert?**

```html
<button id="helloButton">Begrüssung</button>
```

```js
let helloButton = document.querySelector("#helloButton");

helloButton.addEventListener("click", function () {
  helloButton.textContent = "Hallo!";
});
```

- [ ] A: Auf den Button «Begrüssung» klicken.
- [ ] B: Eine beliebige Taste auf der Tastatur drücken.
- [ ] C: Den Mauszeiger über den Button bewegen, ohne zu klicken.
- [ ] D: Eine Sekunde warten, ohne etwas zu tun.

### Variablen

Zum Nachschlagen: [Variablen](./9-cheatsheet#variablen).

**4. Was macht diese Codezeile?**

```js
let life = 1000;
```

- [ ] A: JavaScript prüft, ob `life` den Wert `1000` hat.
- [ ] B: Auf der Webseite erscheint automatisch die Zahl `1000`.
- [ ] C: Eine Variable namens `life` wird erstellt und erhält den Wert `1000`.
- [ ] D: Eine vorhandene Variable wird um `1000` erhöht.

**5. Welchen Wert enthält `score` nach diesen beiden Zeilen?**

```js
let score = 4;
score = score + 3;
```

- [ ] A: `4`
- [ ] B: `7`
- [ ] C: `3`
- [ ] D: `12`

**6. ★ Welchen Wert enthält `score`, nachdem alle Zeilen ausgeführt wurden?**

```js
let score = 8;
score = score + 4;
score = score * 3;
score = score - 6;
score = score / 5;
```

- [ ] A: `8`
- [ ] B: `12`
- [ ] C: `30`
- [ ] D: `6`

### Entscheidungen und Vergleiche

Zum Nachschlagen: [If / Else und Vergleiche](./9-cheatsheet#if-else), [Texte verändern](./9-cheatsheet#html-elemente-bearbeiten).

**7. Welcher Text wird nach diesem Code angezeigt?**

```js
let life = 100;

if (life <= 100) {
  gameStatus.textContent = "Wenig Energie";
} else {
  gameStatus.textContent = "Genug Energie";
}
```

- [ ] A: `Genug Energie`
- [ ] B: `100`
- [ ] C: `Wenig Energie`
- [ ] D: Beide Meldungen stehen hintereinander im Element.

**8. Wann wird der Code im `else`-Block ausgeführt?**

```js
if (life > 0) {
  gameStatus.textContent = "Spiel läuft";
} else {
  gameStatus.textContent = "Game Over";
}
```

- [ ] A: Wenn `life` den Wert `0` oder einen kleineren Wert hat.
- [ ] B: Bei jedem Durchlauf, zusätzlich zum `if`-Block.
- [ ] C: Nur wenn die Variable `life` noch nicht erstellt wurde.
- [ ] D: Sobald `life` kleiner als `1000` ist.

**9. ★ Welcher Text steht nach diesem Code in `gameStatus`?**

```js
let life = 800;

if (life >= 800) {
  gameStatus.textContent = "Volle Energie";
} else if (life > 0) {
  gameStatus.textContent = "Roboter beschädigt";
} else {
  gameStatus.textContent = "Game Over";
}
```

- [ ] A: `Roboter beschädigt`
- [ ] B: `Volle Energie`
- [ ] C: `Game Over`
- [ ] D: Alle drei Meldungen stehen hintereinander im Element.

### Funktionen

Zum Nachschlagen: [Funktionen](./9-cheatsheet#funktionen), [Variablen](./9-cheatsheet#variablen), [Texte verändern](./9-cheatsheet#html-elemente-bearbeiten).

**10. Welchen Wert enthält `life`, nachdem der gesamte Code ausgeführt wurde?**

```js
let life = 50;

function recharge() {
  life = 1000;
}

recharge();
```

- [ ] A: `50`
- [ ] B: `1050`
- [ ] C: `0`
- [ ] D: `1000`

**11. Welche Zeile musst du unten ergänzen, um die Funktion aufzurufen?**

```js
let life = 50;

function recharge() {
  life = 1000;
}

// Ergänze hier den Funktionsaufruf.
```

- [ ] A: `recharge();`
- [ ] B: `let recharge = 1000;`
- [ ] C: `function recharge() { }`
- [ ] D: `recharge.remove();`

**12. Welcher Text steht nach dem Funktionsaufruf in `statusText`?**

```js
function showMessage(message) {
  statusText.textContent = message;
}

showMessage("Hallo");
```

- [ ] A: `message`
- [ ] B: `showMessage`
- [ ] C: `Hallo`
- [ ] D: `statusText`

### Game Loop und Wiederholungen

Zum Nachschlagen: [Game Loop und zeitliche Wiederholung](./9-cheatsheet#listen-und-loops), [Funktionen](./9-cheatsheet#funktionen), [Variablen](./9-cheatsheet#variablen), [Texte verändern](./9-cheatsheet#html-elemente-bearbeiten).

**13. Welche Zeile startet den ersten Durchlauf des Game Loops?**

```js
let score = 0;

function gameLoop() {
  score = score + 1;
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

- [ ] A: `let score = 0;`
- [ ] B: `gameLoop();` ganz unten
- [ ] C: `function gameLoop() {`
- [ ] D: `score = score + 1;`

**14. In welchem Zeitabstand wird der Text mit diesem Code aktualisiert?**

```js
let timeLeft = 10;

setInterval(function () {
  timeLeft = timeLeft - 1;
  statusText.textContent = "Zeit: " + timeLeft;
}, 1000);
```

- [ ] A: Alle zehn Sekunden.
- [ ] B: Bei jedem neuen Bild des Browsers.
- [ ] C: Nur einmal beim Laden der Seite.
- [ ] D: Jede Sekunde.

**15. ★ Welcher Text steht in `statusText`, nachdem der wiederholte Codeblock genau zweimal ausgeführt wurde?**

```js
let life = 10;

setInterval(function () {
  life = life - 2;
  statusText.textContent = "Leben: " + life;
}, 1000);
```

- [ ] A: `Leben: 6`
- [ ] B: `Leben: 8`
- [ ] C: `Leben: 10`
- [ ] D: `Leben: 2`

## Teil 2: Den fertigen Weltraum-Roboter verstehen

Hier findest du den fertigen Code der gemeinsamen Theorieübung bis Kapitel 7. Die drei Codeblöcke gehören zu den Dateien `script.js`, `index.html` und `style.css`.

Lies den Code und beantworte anschliessend die fünf Aufgaben. Jede Aufgabe hat zwei Teile: **a) eine offene Frage für zwei bis drei Sätze** und **b) eine konkrete Frage für einen Satz**. Du musst dafür keinen neuen Code schreiben. HTML und CSS helfen dir, die Elemente zuzuordnen; die Fragen beziehen sich auf JavaScript.

Zum Ausprobieren kannst du die drei Dateien im [Projektstand nach Kapitel 7](/assets/zips/space-robot-loesung-7.zip) durch den jeweiligen Code ersetzen. Behalte den Ordner `assets` mit den Bildern bei. Zum Beantworten genügt es, den Code hier zu lesen.

Die Spielhilfen sind bereits aus der Theorie bekannt: `isKeyPressed(...)` prüft eine gedrückte Taste, `moveElement(...)` bewegt ein Element, `setPosition(...)` legt seine Position fest und `isColliding(...)` prüft eine Berührung. Du musst ihre interne Funktionsweise nicht erklären.

Zum Nachschlagen für den gesamten Beispielcode:

- [HTML-Elemente auswählen](./9-cheatsheet#html-elemente-auswahlen) und [verändern oder entfernen](./9-cheatsheet#html-elemente-bearbeiten)
- [Events](./9-cheatsheet#events), [Variablen und Rechnungen](./9-cheatsheet#variablen), [If / Else und Vergleiche](./9-cheatsheet#if-else)
- [Funktionen](./9-cheatsheet#funktionen), [Game Loop](./9-cheatsheet#listen-und-loops), [JavaScript in HTML einbinden](./9-cheatsheet#javascript-in-html-einbinden)
- Spielhilfen aus der Theorie: [Position und Bewegung](./3-game-loop#wie-konnen-wir-ein-element-bewegen), [Tasten prüfen](./4-if-else#wie-schreiben-wir-eine-if-anweisung), [Berührungen prüfen](./4-if-else#kollisionen-sind-ebenfalls-fragen)

### Datei: `script.js`

```js
// Lösung Kapitel 7 - Funktionen
// Die Spielerbewegung ist neu in die Funktion moveRobot() ausgelagert.

// --- Alle HTML-Elemente auswählen ---------------------------------------

// Auslöser (die Knöpfe)
let blueButton = document.querySelector("#blueButton");
let alarmButton = document.querySelector("#alarmButton");
let statusButton = document.querySelector("#statusButton");
let sizeButton = document.querySelector("#sizeButton");
let removeButton = document.querySelector("#removeButton");
let destroyPlanetButton = document.querySelector("#destroyPlanetButton");
let modeButton = document.querySelector("#modeButton");

// Ziele (die Elemente, die wir verändern wollen)
let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");
let energy = document.querySelector("#energy");
let backgroundPlanet = document.querySelector("#backgroundPlanet");
// Aufgabe 6.2: Zweite Anzeige für den Spielzustand
let gameStatus = document.querySelector("#gameStatus");

// --- Aufgabe 2.1: Eine andere Farbe -------------------------------------

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "yellow";
});

// --- Aufgabe 2.2 und 2.5: Alarm einschalten -----------------------------
// Im gleichen Event Listener passieren zwei Dinge gleichzeitig.

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
});

// --- Aufgabe 2.3: Status verändern --------------------------------------

statusButton.addEventListener("click", function () {
  statusText.textContent = "Roboter ist bereit!";
});

// --- Aufgabe 2.4: Roboter vergrössern -----------------------------------

sizeButton.addEventListener("click", function () {
  robot.style.width = "260px";
});

// --- Aufgabe 2.6: Energie entfernen -------------------------------------

removeButton.addEventListener("click", function () {
  energy.remove();
});

// --- Aufgabe 2.7: Hintergrundplaneten zerstören -------------------------
// Der Knopf mit der ID destroyPlanetButton wurde im index.html ergänzt.

destroyPlanetButton.addEventListener("click", function () {
  backgroundPlanet.remove();
  statusText.textContent = "Planet zerstört";
});

// --- Aufgabe 2.9: Eigener Modus (Beispiel: Nachtmodus) ------------------
// Ein Klick verändert mehrere HTML-Elemente und den Statustext.

modeButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "#05070f";
  robot.style.width = "100px";
  energy.style.backgroundColor = "#3b3b3b";
  statusText.textContent = "Nachtmodus aktiv";
});

// --- Game Loop vorbereiten ----------------------------------------------

setPosition(robot, 50, 85);

// Aufgabe 5.1: Die Geschwindigkeit steht nur noch an einer Stelle.
let speed = 2;

// Aufgabe 5.2: Der Roboter startet mit 1000 Leben.
let life = 1000;

// --- Aufgabe 7.1: Die Spielerbewegung auslagern -------------------------

function moveRobot() {
  // --- Aufgabe 4.1: Den Roboter steuern ---------------------------------
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }
}

function gameLoop() {
  // Aufgabe 7.1: Die Spielerbewegung steht jetzt in einer eigenen Funktion.
  moveRobot();

  // --- Aufgabe 4.2: Energie einsammeln ----------------------------------

  if (isColliding(robot, energy)) {
    // Leben mit der Energiekiste wieder auffüllen
    life = 1000;
    energy.remove();
  }

  // Aktuelle Leben anzeigen
  statusText.textContent = "Leben: " + life;

  // Aufgabe 6.2: Spielzustand aus den Leben ableiten
  if (life >= 800) {
    gameStatus.textContent = "Volle Energie";
  } else if (life > 0) {
    gameStatus.textContent = "Roboter beschädigt";
  } else {
    gameStatus.textContent = "Game Over";
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

### Datei: `index.html`

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weltraum-Roboter</title>
    <link rel="stylesheet" href="./style.css" />
  </head>

  <body>
    <main class="app">
      <h1>Weltraum-Roboter</h1>

      <!-- Weltraum-Szene -->
      <section id="spaceScene" class="space-scene">
        <div id="backgroundPlanet" class="background-planet"></div>

        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>

        <div class="ground-planet"></div>
        <img id="robot" src="./assets/robot.png" />

        <div id="energy" class="energy-crate">
          <span class="crate-icon">⚡</span>
          <span>Energie</span>
        </div>
      </section>

      <!-- Steuerpult -->
      <section class="control-panel">
        <div class="status-display">
          <p id="statusText">Roboter wartet auf einen Befehl.</p>
          <p id="gameStatus">Spiel läuft.</p>
        </div>

        <div class="button-row">
          <div class="control">
            <button
              id="blueButton"
              class="control-button blue"
              type="button"
            ></button>
            <span class="control-label">Licht</span>
          </div>

          <div class="control">
            <button
              id="alarmButton"
              class="control-button red"
              type="button"
            ></button>
            <span class="control-label">Alarm</span>
          </div>

          <div class="control">
            <button
              id="statusButton"
              class="control-button green"
              type="button"
            ></button>
            <span class="control-label">Status</span>
          </div>

          <div class="control">
            <button
              id="sizeButton"
              class="control-button yellow"
              type="button"
            ></button>
            <span class="control-label">Boost</span>
          </div>

          <div class="control">
            <button
              id="removeButton"
              class="control-button orange"
              type="button"
            ></button>
            <span class="control-label">Energie</span>
          </div>

          <div class="control">
            <button
              id="destroyPlanetButton"
              class="control-button red"
              type="button"
            ></button>
            <span class="control-label">Planet</span>
          </div>

          <div class="control">
            <button
              id="modeButton"
              class="control-button purple"
              type="button"
            ></button>
            <span class="control-label">Modus</span>
          </div>
        </div>
      </section>
    </main>

    <script src="https://bbz-biel-informatik.github.io/288-javascript/game-framework/bbzgame.js"></script>
    <script src="./script.js"></script>
  </body>
</html>
```

### Datei: `style.css`

```css
* {
  box-sizing: border-box;
}

/* Die Seite füllt genau das Browserfenster. Dadurch gibt es nichts zu
   scrollen und die Pfeiltasten scrollen die Seite nicht mehr weg. */
html,
body {
  height: 100%;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: white;
  background-color: #0b1020;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
}

h1 {
  margin-top: 0;
}

/* Die Weltraum-Szene */

.space-scene {
  position: relative;
  overflow: hidden;
  /* Die Szene nimmt den Platz ein, der neben Titel und Steuerpult übrig bleibt. */
  flex: 1;
  min-height: 0;
  border: 4px solid #4a5578;
  border-radius: 15px;
  background-color: #121a35;
}

.background-planet {
  position: absolute;
  top: 70px;
  right: 90px;
  width: 130px;
  height: 130px;
  border: 6px solid #8d4523;
  border-radius: 50%;
  background-color: #c26a3c;
}

.ground-planet {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 180px;
  border: 8px solid #426e80;
  border-bottom: 0;
  border-radius: 50% 50% 0 0;
  background-color: #274c5e;
}

.star {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: white;
}

.star-1 {
  top: 60px;
  left: 90px;
}

.star-2 {
  top: 140px;
  left: 320px;
}

.star-3 {
  top: 260px;
  right: 180px;
}

.star-4 {
  top: 320px;
  left: 160px;
}

.star-5 {
  top: 50px;
  left: 520px;
}

#robot {
  position: absolute;
  z-index: 2;
  bottom: 85px;
  left: calc(50% - 130px);
  width: 160px;
  height: auto;
  image-rendering: pixelated;
}

.energy-crate {
  position: absolute;
  z-index: 2;
  right: 140px;
  bottom: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 90px;
  border: 3px solid #9a6a00;
  border-radius: 10px;
  color: #5d4100;
  background-color: #ffd875;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
}

.crate-icon {
  font-size: 30px;
}

/* Das Steuerpult */

.control-panel {
  /* Das Steuerpult behält immer seine volle Höhe. */
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  padding: 20px 30px;
  border: 4px solid #4a5578;
  border-radius: 15px;
  background-color: #39415f;
}

.status-display {
  width: 360px;
  display: grid;
  gap: 10px;
}

#statusText,
#gameStatus {
  margin: 0;
  padding: 12px 15px;
  border: 3px solid #1c2032;
  border-radius: 8px;
  background-color: #0b1020;
  font-family: monospace;
  font-weight: bold;
  text-align: center;
}

#statusText {
  color: #51d88a;
}

#gameStatus {
  color: #ffd166;
  letter-spacing: 0.04em;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.control {
  text-align: center;
}

.control-label {
  display: block;
  margin-top: 8px;
  color: #c3cbe6;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
}

.control-button {
  display: block;
  width: 45px;
  height: 45px;
  border: 4px solid #1c2032;
  border-radius: 50%;
  cursor: pointer;
}

.control-button:active {
  border-width: 6px;
}

.blue {
  background-color: #4aa3ff;
}

.red {
  background-color: #ff5a5a;
}

.green {
  background-color: #51d88a;
}

.yellow {
  background-color: #ffd875;
}

.orange {
  background-color: #ff9a3c;
}

.purple {
  background-color: #b07cff;
}

@media (max-width: 700px) {
  .background-planet {
    top: 50px;
    right: 40px;
    width: 90px;
    height: 90px;
  }

  .ground-planet {
    height: 130px;
  }

  #robot {
    bottom: 55px;
    left: calc(50% - 90px);
    width: 180px;
  }

  .energy-crate {
    right: 30px;
    bottom: 65px;
    width: 85px;
    height: 70px;
  }

  .control-panel {
    flex-direction: column;
  }

  .status-display {
    width: 100%;
  }
}
```

### Fünf Fragen zum Code

Beziehe deine Antworten auf den fertigen Spielcode oben. Begründe bei **a)** deine Überlegungen in **zwei bis drei Sätzen**. Beantworte **b)** jeweils in **einem Satz**.

**16. Leben und Variablen**

**a)** Wozu braucht das Spiel die Variable `life`? Erkläre, wie sie mit den Aktionen des Spielers zusammenhängt.

**b)** Wann wird die Zeile `life -= 1;` in `moveRobot()` ausgeführt?

**17. Buttons und Events**

**a)** Wie arbeiten HTML und JavaScript zusammen, damit ein Button im Spiel etwas verändert? Erkläre den Ablauf an einem Button deiner Wahl aus dem Code.

**b)** Welche Breite erhält der Roboter, wenn der Button «Boost» angeklickt wird?

**18. Steuerung und Bedingungen**

**a)** Warum braucht die Tastatursteuerung in `moveRobot()` Bedingungen? Erkläre am Beispiel von `ArrowLeft`, wie eine Tasteneingabe zur passenden Bewegung führt.

**b)** Um wie viele Pixel und in welche Richtung bewegt `moveElement(robot, -speed, 0);` den Roboter bei einem Aufruf, wenn `speed` den Wert `2` hat?

**19. Wiederholungen im Spiel**

**a)** Warum benötigt dieses Spiel einen Game Loop? Erkläre anhand eines Beispiels aus dem Code, weshalb eine einmalige Ausführung beim Start nicht genügt.

**b)** Welche Codezeile zeigt die aktuelle Anzahl Leben auf der Webseite an?

**20. ★ Energie und Spielzustand**

**a)** Welche Aufgabe hat die Energiekiste im Spiel? Erkläre den Zusammenhang zwischen dem Einsammeln, der Variable `life` und der Meldung in `gameStatus`.

**b)** Der Roboter hat `50` Leben, berührt die Energiekiste und keine Pfeiltaste ist gedrückt: Welche Meldung steht am Ende dieses Game-Loop-Durchlaufs in `gameStatus`?
