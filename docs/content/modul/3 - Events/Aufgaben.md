# 3 - Aufgaben: Events

👉 [Projektstand nach Kapitel 2 herunterladen](/assets/zips/space-robot-loesung-2.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Denke bei jeder Aufgabe an die [vier Teile einer Interaktion](./inhalt#die-teile-einer-interaktion): Auslöser, Ziel, Event und Aktion.

## 🎯 3.1 – Aus «sofort» wird «auf Knopfdruck»

Im letzten Kapitel haben sich alle Veränderungen sofort beim Laden der Seite ausgeführt. Das räumen wir nun auf.

1. Lösche in `script.js` alle direkten Veränderungen aus Kapitel 2, also Zeilen wie `spaceScene.style.backgroundColor = "yellow";` und `energy.remove();`.
2. Behalte alle Zeilen mit `document.querySelector(...)`. Die Elemente brauchen wir weiterhin.
3. Behalte den Click-Code aus Kapitel 1.

Lade die Seite neu. Sie sollte wieder normal aussehen, und der Licht-Knopf sollte die Szene blau färben.

<details>
<summary>Lösung anzeigen</summary>

```js
// Auslöser (die Knöpfe)
let blueButton = document.querySelector("#blueButton");

// Ziele (die Elemente, die wir verändern wollen)
let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");
let energy = document.querySelector("#energy");

// Interaktion aus Kapitel 1
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

</details>

## 🎯 3.2 – Alarm einschalten

Wenn der Knopf mit der ID `alarmButton` angeklickt wird, soll die Weltraum-Szene rot werden.

Gehe der Reihe nach vor:

- Wähle den Alarm-Knopf aus.
- Die Weltraum-Szene ist bereits ausgewählt.
- Füge dem Knopf einen Click Event Listener hinzu.
- Verändere darin die Hintergrundfarbe.

<details>
<summary>Tipp: Diese Befehle brauchst du</summary>

Um den Alarm-Knopf auszuwählen:

```js
let alarmButton = document.querySelector("#alarmButton");
```

Verwende danach [`addEventListener(...)`](../11-cheatsheet#events) und [`style.backgroundColor`](../11-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let alarmButton = document.querySelector("#alarmButton");

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
});
```

</details>

## 🎯 3.3 – Status verändern

Wenn der Knopf `statusButton` angeklickt wird, soll im Element `statusText` der Text `Roboter ist bereit!` erscheinen.

Verwende dafür [`textContent`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp: Codegerüst</summary>

```js
let statusButton = document.querySelector("________");

statusButton.addEventListener("________", function () {
  statusText.textContent = "________";
});
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let statusButton = document.querySelector("#statusButton");

statusButton.addEventListener("click", function () {
  statusText.textContent = "Roboter ist bereit!";
});
```

</details>

## 🎯 3.4 – Roboter vergrössern

Wenn der Knopf `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden. Denke wieder an die vier Teile einer Interaktion.

Was du verändern musst, ist [`style.width`](../11-cheatsheet#html-elemente-bearbeiten).

## 🎯 3.5 – Mehrere Dinge gleichzeitig verändern

Erweitere den Alarm-Knopf aus Aufgabe 3.2. Bei einem Klick sollen nun drei Dinge passieren:

- Die Weltraum-Szene wird rot.
- Im `statusText` steht `Planetenalarm`.
- Der Roboter wird `100px` breit.

Lies bei Bedarf nochmals nach, wie man [mehrere Dinge gleichzeitig verändert](./inhalt#mehrere-dinge-gleichzeitig-verandern). Du brauchst dafür **keinen** zweiten Event Listener.

<details>
<summary>Lösung anzeigen</summary>

```js
alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
  robot.style.width = "100px";
});
```

</details>

## 🎯 3.6 – Energie entfernen

Wenn der Knopf `removeButton` angeklickt wird, soll das Element `energy` verschwinden.

Verwende dafür [`remove()`](../11-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist die Energie wieder da. Das HTML bestimmt den Startzustand der Seite.

## 🎯 3.7 – Hintergrundplaneten zerstören

Im Hintergrund befindet sich ein Planet mit der ID `backgroundPlanet`. Füge dem Steuerpult einen **neuen Knopf** hinzu. Wenn dieser Knopf angeklickt wird, soll der Planet verschwinden.

Gehe dabei wie folgt vor:

- Erstelle im HTML einen neuen Knopf mit der ID `destroyPlanetButton`.
- Wähle den neuen Knopf mit [`document.querySelector(...)`](../11-cheatsheet#html-elemente-auswahlen) aus.
- Wähle den Hintergrundplaneten aus.
- Füge dem Knopf einen Click Event Listener hinzu.
- Entferne darin den Hintergrundplaneten mit [`remove()`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp für das HTML</summary>

Du kannst im Element mit der Klasse `button-row` eine weitere Steuerung ergänzen:

```html
<div class="control">
  <button
    id="destroyPlanetButton"
    class="control-button red"
    type="button"
  ></button>
  <span class="control-label">Planet</span>
</div>
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let destroyPlanetButton = document.querySelector("#destroyPlanetButton");
let backgroundPlanet = document.querySelector("#backgroundPlanet");

destroyPlanetButton.addEventListener("click", function () {
  backgroundPlanet.remove();
  statusText.textContent = "Planet zerstört";
});
```

</details>

## 🎯 3.8 – Auf die Tastatur reagieren

Nun ein anderes Event. Wenn irgendeine Taste gedrückt wird, soll im `statusText` der Name dieser Taste erscheinen.

Lies bei Bedarf nochmals die Theorie zu den [Tastatur-Events](./inhalt#tastatur-events).

<details>
<summary>Tipp</summary>

Tastatur-Events hängen wir an `document`, nicht an einen Knopf:

```js
document.addEventListener("keydown", function (event) {
  // event.key ist der Name der gedrückten Taste
});
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
document.addEventListener("keydown", function (event) {
  statusText.textContent = event.key;
});
```

Drücke nun verschiedene Tasten und beobachte den Statustext. Was steht dort, wenn du die Leertaste oder die Pfeiltasten drückst?

</details>

## 🎯 3.9 – Tastendruck mit Wirkung

Wenn eine Taste gedrückt wird, soll der Roboter `300px` breit werden.

Verwende wieder ein `"keydown"`-Event. Auf eine **bestimmte** Taste zu reagieren lernst du später im Kapitel [If-Else](../5-if-else/inhalt). Hier genügt irgendeine Taste.

## 🎯 3.10 – Fehlersuche

In diesem Code sind drei Fehler. Finde sie, ohne den Code auszuprobieren.

```js
let alarmButton = document.querySelector("#alarmButton");

alarmButton.addEventListener("klick", function () {
  spaceScene.style.backgroundColor = red;
}
```

<details>
<summary>Lösung anzeigen</summary>

1. Das Event heisst `"click"`, nicht `"klick"`. Englische Event-Namen sind fest vorgegeben.
2. Der Farbwert ist ein Text und braucht Anführungszeichen: `"red"`.
3. Am Ende fehlt das Schliessen: `});`

```js
let alarmButton = document.querySelector("#alarmButton");

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
});
```

</details>

## 🎯 3.11 – Abschlussaufgabe: Dein eigener Modus

Programmiere auf dem Knopf `modeButton` deinen eigenen Modus für die Weltraum-Szene.

Dein Modus soll:

- durch einen Klick auf `modeButton` gestartet werden,
- mindestens drei HTML-Elemente verändern und
- einen passenden Statustext anzeigen.

Mögliche Ideen:

- Nachtmodus
- Party-Modus – später kannst du mit [`setInterval(...)`](../9-listen-und-loops/inhalt#wiederholung-nach-zeit) die Farben automatisch wiederholt wechseln
- Sicherheitsmodus
- Roboter-Wartung
- Weltraum-Notfall

> Denke bei jeder Interaktion an Auslöser, Ziel, Event und Aktion.
