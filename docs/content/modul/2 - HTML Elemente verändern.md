# HTML Elemente verändern

Mit Javascript kannst du HTML-Elemente auswählen und danach ihren Text, ihr HTML, ihr CSS oder ihre Klassen verändern.

## Elemente auswählen

Bevor du ein Element verändern kannst, musst du es zuerst im DOM auswählen.

```js
let myImage = document.getElementById("image");
```

Das sucht ein Element mit `id="image"` und speichert es in der Variable `myImage`.

Mit `querySelector()` kannst du CSS-Selektoren verwenden:

```js
let myImage = document.querySelector("#image");
let item = document.querySelector(".item");
```

- `#image` sucht nach einer `id`
- `.item` sucht nach einer Klasse

Wenn du mehrere Elemente auswählen willst, verwendest du `querySelectorAll()`:

```js
let items = document.querySelectorAll(".item");
```

## Elemente verändern

Wenn du ein Element ausgewählt hast, kannst du es mit Javascript anpassen.

```js
let myElement = document.querySelector("#player");
```

### Styles ändern

```js
myElement.style.backgroundColor = "blue";
myElement.style.color = "white";
myElement.style.width = "100px";
```

Damit änderst du CSS-Eigenschaften direkt mit Javascript.

### Text ändern

```js
myElement.textContent = "Hello";
```

Mit `textContent` setzt du normalen Text in ein Element.

### HTML einfügen

```js
myElement.innerHTML = "<b>Hello</b>";
```

Mit `innerHTML` fügst du HTML-Code in ein Element ein.

### Klassen hinzufügen oder entfernen

```js
myElement.classList.add("active");
myElement.classList.remove("active");
```

Damit kannst du CSS-Klassen dynamisch steuern.

### Elemente löschen oder hinzufügen

```js
myElement.remove();

let newElement = document.createElement("div");
newElement.textContent = "New Element";
document.body.appendChild(newElement);
```

So kannst du Elemente entfernen, neue Elemente erstellen und ins Dokument einfügen.

## Für das Click Game

Im Click Game brauchst du Zugriff auf diese HTML-Elemente:

```js
let player = document.getElementById("player");
let scoreDisplay = document.getElementById("score");
let playground = document.getElementById("playground");
```

Damit kannst du später den Player verändern, den Score anzeigen und die Grösse des Spielfelds auslesen.

## Aufgabe - Click Game vorbereiten

Wir bauen Schritt für Schritt ein kleines Spiel, bei dem man auf ein Element klickt, Punkte sammelt und sich das Element bewegt.

### 1: Player auswählen

Selektiere mit Javascript das HTML-Element mit der ID `player`.

```js
let player = document.getElementById("player");
```

### 2: Farbe ändern

Ändere danach die Hintergrundfarbe des Players.

```js
player.style.backgroundColor = "blue";
```

### 3: Score-Anzeige auswählen

Selektiere das HTML-Element mit der ID `score`.

```js
let scoreDisplay = document.getElementById("score");
```

Ändere danach den angezeigten Text.

```js
scoreDisplay.textContent = "Score: 0";
```

Wenn das funktioniert, kannst du im nächsten Thema Events verwenden, damit diese Änderungen erst bei einem Klick passieren.
