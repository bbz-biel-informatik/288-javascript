# JavaScript Cheatsheet

## Javascript in HTML einbinden

```html
<!-- Externes Skript -->
<script src="script.js"></script>

<!-- Externe Library einbinden -->
<script src="https://irgendeine-url.ch/library.min.js"></script>

<!-- Direkt im HTML -->
<script>
  // Beispielcode
  alert("Hello World");
</script>
```

---

## HTML Elemente auswählen

```js
// Gib mir das Objekt mit der id "image"
let myImage = document.querySelector("#image");

// Gib mir das Objekt mit der Klasse "item"
let item = document.querySelector(".item");

// Gib mir alle Objekte mit der Klasse "item"
let items = document.querySelectorAll(".item");
```

## HTML Elemente bearbeiten

```js
// Wähle das Element mit der id "image"
let myElement = document.querySelector("#image");

// Style verändern
myElement.style.color = "red"; // Farbe ändern
myElement.style.fontSize = "12px"; // Textgrösse ändern
myElement.style.width = "100px"; // Grösser - kleiner machen

// Inhalt verändern
myElement.textContent = "Hello";
myElement.innerHTML = "<b>Hello</b>";

// Klasse hinzufügen / entfernen
myElement.classList.add("myClass");
myElement.classList.remove("myClass");

// Element löschen
myElement.remove();

// Element hinzufügen
let newElement = document.createElement("div"); // Neues div-Element erstellen
newElement.textContent = "New Element"; // Element bearbeiten
document.body.appendChild(newElement); // Ins Dokument einfügen
```

## Events

```js
// Wenn auf das Bild geklickt wird
myImage.addEventListener("click", function (event) {
  // Setze einen schwarzen Ramen.
  myImage.style.borderColor = "black";
});

// Wenn eine Taste gedrückt wird
document.addEventListener("keydown", function (event) {
  // Wenn auf "s" gedrückt wird
  if (event.key == "s") {
    console.log("you pressed s");
  }
});
```

---

## Variablen
Variablen sind Platzhalter für Werte. Es gibt verschiedene Arten von Variablen, zum Beispiel:

- Zahlen
- Texte
- Objekte (Zum Beispiel HTML Objekte)
- undefined / null

```js
let zahl = 1; // Zahl definieren
let lieblingsfarbe = "blau"; // Text definieren

zahl = 2; // Variable verändern
let neueZahl = zahl + 10; // Variable berechnen

// Berechnungen
zahl + 10; // Addition
zahl - 10; // Subtraktion
zahl * 10; // Multiplikation
zahl / 10; // Division
```

---

## Listen und Loops

```js
// Wähle alle Elemente mit der Klasse "item"
let items = document.querySelectorAll(".item");

// Gehe durch alle Elemente und ändere die Farbe
items.forEach(function (item) {
  item.style.color = "red";
});
```

---

## Funktionen

```js
function greet(name) {
  return "Hello " + name;
}

greet("Max");
```

---

## If / Else

```js
let year = 10;

// Führt den Block aus, wenn das Jahr grösser oder gleich 2000 ist.
if (year >= 2000) {
  console.log("welcome to the 2000s");
}

// Wenn das Jahr grösser als 2000 ist
if (year >= 2000) {
  console.log("welcome to the 2000s");
  // Sonst, wenn das Jahr aber grösser als 1990 ist.
} else if (year >= 1990) {
  console.log("welcome to the 90s!");
  // Sonst, wenn das Jahr grösser als 1980 ist.
} else if (year >= 1980) {
  console.log("welcome to the 80s!");
  // Sonst, wenn nichts von allem zutrifft
} else {
  console.log("Welcome to the 70s or before!");
}
```

---
