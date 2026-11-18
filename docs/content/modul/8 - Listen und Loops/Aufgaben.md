# 8 - Aufgaben: Listen und Loops

👉 [Übungen herunterladen](/assets/zips/uebungen-8-listen-und-loops.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner.

## 🎯 8.1 – Playlist

👉 Ordner `1-playlist`

`index.html`

<<< @/projects/uebungen-8-listen-und-loops/1-playlist/index.html

In der `script.js` ist bereits eine Liste vorbereitet:

<<< @/projects/uebungen-8-listen-und-loops/1-playlist/script.js

**a)** Beim Klick auf `showButton` sollen alle Songs in `listText` erscheinen. Gehe dafür mit [`forEach(...)`](./inhalt#warum-brauchen-wir-einen-loop) durch die Liste.

<details>
<summary>💡 Tipp anzeigen</summary>

Sammle den Text in einer Variable und hänge bei jedem Durchlauf einen Song an:

```js
let text = "";

songs.forEach(function (song) {
  text = text + song + "\n";
});

listText.textContent = text;
```

`\n` bedeutet «neue Zeile».

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let songs = ["Bohemian Rhapsody", "Lose Yourself", "Rolling in the Deep"];

let showButton = document.querySelector("#showButton");
let listText = document.querySelector("#listText");

showButton.addEventListener("click", function () {
  let text = "";

  songs.forEach(function (song) {
    text = text + song + "\n";
  });

  listText.textContent = text;
});
```

Die Schreibweise findest du unter [Listen und Loops](../10-cheatsheet#listen-und-loops).

</details>

**b)** Füge der Liste zwei weitere Songs hinzu. Was musst du am Loop ändern?

**c)** Nummeriere die Songs, sodass `1. Bohemian Rhapsody` erscheint. Du brauchst dafür eine Zählvariable aus [Kapitel 4](../4-variablen/inhalt).

## 🎯 8.2 – Karten

👉 Ordner `2-karten`

Hier verändern wir viele HTML-Elemente auf einmal.

`index.html`

<<< @/projects/uebungen-8-listen-und-loops/2-karten/index.html

**a)** Beim Klick auf `colorButton` sollen **alle** Karten eine farbige Hintergrundfarbe bekommen. Wähle sie mit [`document.querySelectorAll(...)`](../10-cheatsheet#html-elemente-auswahlen) aus und gehe mit `forEach(...)` durch.

<details>
<summary>💡 Tipp anzeigen</summary>

`querySelectorAll` liefert eine Liste von Elementen. Die Klasse schreiben wir mit einem Punkt:

```js
let karten = document.querySelectorAll(".karte");

karten.forEach(function (karte) {
  karte.style.backgroundColor = "gold";
});
```

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let karten = document.querySelectorAll(".karte");
let colorButton = document.querySelector("#colorButton");

colorButton.addEventListener("click", function () {
  karten.forEach(function (karte) {
    karte.style.backgroundColor = "gold";
  });
});
```

</details>

**b)** Der `clearButton` löscht alle Karten mit [`remove()`](../10-cheatsheet#html-elemente-bearbeiten).

**c)** Verwende statt `"gold"` den Framework-Befehl [`randomColor()`](/jsgame/3-framework-docs#randomcolor), damit jede Karte eine andere Farbe bekommt. Binde dafür das Game Framework in der `index.html` ein:

```html
<script src="https://bbz-biel-informatik.github.io/288-javascript/game-framework/bbzgame.js"></script>
```

**d) Erklären:** Was ist der Unterschied zwischen `querySelector` und `querySelectorAll`?

## 🎯 8.3 – Gegner

👉 Ordner `3-gegner`

Im Spielfeld sind drei Gegner mit der Klasse `enemy`. Die Steuerung des Roboters ist bereits fertig.

`index.html`

<<< @/projects/uebungen-8-listen-und-loops/3-gegner/index.html

**a)** Wähle alle Gegner mit [`document.querySelectorAll(".enemy")`](../10-cheatsheet#html-elemente-auswahlen) aus und speichere sie in der Variable `enemies`.

**b)** Schreibe eine Funktion `moveEnemies()`, die mit `forEach(...)` durch alle Gegner geht und jeden mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) um `2` Pixel nach links bewegt.

**c)** Rufe `moveEnemies()` im `gameLoop()` direkt nach `moveRobot()` auf.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let enemies = document.querySelectorAll(".enemy");

function moveEnemies() {
  enemies.forEach(function (enemy) {
    moveElement(enemy, -2, 0);
  });
}

function gameLoop() {
  moveRobot();
  moveEnemies();

  window.requestAnimationFrame(gameLoop);
}
```

Der gleiche Code funktioniert unabhängig davon, ob es drei oder dreissig Gegner gibt.

</details>

**d)** Füge in der `index.html` einen vierten Gegner hinzu. Was musst du am JavaScript ändern?

**e) Zusatz:** Prüfe mit [`isColliding(...)`](/jsgame/3-framework-docs#iscolliding) im Loop, ob der Roboter einen Gegner berührt, und zeige in `statusText` `Getroffen!` an.
