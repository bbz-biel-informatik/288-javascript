# 2 - HTML Elemente verändern

## HTML Objekte

Alles, was wir auf einer Webseite sehen, sind **HTML-Elemente**.
Diese Elemente bilden zusammen das sogenannte **DOM (Document Object Model)**.

Wichtig:

* Jedes HTML-Element kann mit JavaScript verändert werden
* Elemente können gelöscht oder hinzugefügt werden
* JavaScript kann auf Ereignisse reagieren (z. B. Klicks, Tastatureingaben)

Beispiel aus unserem Projekt:

```html
<div id="wrapper">
  <div id="playground">
    <h1 id="title">Welcome to my little game!</h1>
    <div id="score">Score: 0</div>
    <img id="player" src="./assets/player_pink.png" />
  </div>
</div>
```

Hier hat jedes wichtige Element eine **id**, damit wir es später gezielt ansprechen können.

---

## HTML Elemente auswählen

Bevor wir ein Element verändern können, müssen wir es **auswählen**.

Das machen wir mit `document.querySelector()`:

```js
let playground = document.querySelector("#playground");
```

Erklärung:

* `document` → steht für die gesamte Webseite
* `querySelector(...)` → sucht ein Element
* `#playground` → CSS-Selector für eine id

Das Ergebnis speichern wir in einer Variable (Konzept schauen wir später an). Diese Variable enthält jetzt das HTML-Element, das wir später verändern können.

## HTML Elemente verändern

Jedes HTML-Element hat Eigenschaften, die wir verändern können.

Beispiel:

```js
playground.style.backgroundColor = "red";
```

Damit ändern wir die Hintergrundfarbe.

Allgemein:

* playground: das ausgewählte Element
* style.backgroundColor: die Eigenschaft
* "red": der neue Wert

## Style verändern

Damit können wir CSS direkt über JavaScript beeinflussen.

```js
let myElement = document.querySelector("#myElement");

// Farbe ändern
myElement.style.color = "red";

// Hintergrund ändern
myElement.style.backgroundColor = "blue";

// Grösse ändern
myElement.style.width = "100px";
```

## Inhalt verändern

```js
let myElement = document.querySelector("#myElement");

// Text setzen
myElement.textContent = "Hello";

// HTML setzen
myElement.innerHTML = "<b>Hello</b>";
```

Unterschied:

* `textContent` → nur Text
* `innerHTML` → kann auch HTML enthalten

## Element löschen

```js
let myElement = document.querySelector("#myElement");

myElement.remove();
```

Damit wird das Element komplett aus der Seite entfernt.


Hier ist eine passende Aufgabe, die direkt auf dem bestehenden Projekt aufbaut:

## 🎮 Aufgabe – Erste Schritte mit JavaScript

Tipp: Nutze das [Cheat Sheet](./8-cheatsheet) als Hilfe, um die Aufgaben zu lösen.


### 1: JavaScript Datei erstellen & verbinden

Erstelle im Projekt eine neue Datei:

```text
script.js
```

Verbinde nun das Javascript im HTML (immer am Ende vom Body).

-> Wichtig: Das Script **immer am Ende vom Body**, damit alle HTML Elemente bereits geladen sind.

Teste kurz:

```js
console.log("JS verbunden!");
```

Wenn du die Seite öffnest, solltest du die Ausgabe in der [Konsole](./1-javascript-intro#browser-konsole) sehen.


### 2: Score verändern

Überlege dir, wie du nun mit Javascript den score verändern kannst, sodass steht "Score: 10".

<details>
<summary>Tipps</summary>
- Wähle das Element mit der id `score` aus <br>
- Setze den Text auf `Score: 10`
</details>

### 3: Titel verändern

Ändere die Farbe des Titels mit JavaScript

<details>
<summary>Tipps</summary>
- Wähle das Element mit der id `title` aus <br>
- Ändere die Farbe über `style.color`
</details>


### 4: Spielfeld stylen

Ändere die Hintergrundfarbe des Spielfelds (`#playground`) über JavaScript.

<details>
<summary>Tipps</summary>
Wähle zuerst das Element `#playground` aus und ändere dann die Hintergrundfarbe mit `style.backgroundColor` (z. B. auf "lightblue").
</details>


### 5: Spieler verändern

* Vergrössere den Spieler auf 150 x 150 Pixel (Mit JavaScript)
* Verschiebe den Spieler nach rechts (z. B. 200px) und nach oben (z. B. 100px)

### 6: Spieler entfernen
Entferne den Spieler komplett von der Seite (Mit JavaScript).

-> Nimm den Code danach wieder raus, damit der Spieler wieder da ist.

💡 Ziel der Aufgabe:

* JavaScript Datei einbinden
* Elemente auswählen (`querySelector`)
* Inhalte und Styles verändern
