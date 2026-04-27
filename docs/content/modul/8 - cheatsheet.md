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
  // Wenn auf "ArrowRight" gedrückt wird
  if (event.key == "ArrowRight") {
    console.log("you pressed the right arrow");
  }

  // Alle möglichen Tasten findest du hier: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
});
```

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

## If / Else

```js
let score = 10; // Score ist eine Zahl
let city = "Warschau"; // City ist ein Text

// Führt den Block aus, wenn die Zahl Score grösser als 100 ist.
if (score > 100) {
  console.log("Guter score!");
}

// Vergleiche
if (city == "Warschau") // Gleichheit
if (city != "Warschau") // Ungleichheit
if (score > 10) // Grösser
if (score < 10) // Kleiner
if (score >= 10) // Grösser oder gleich
if (score <= 10) // Kleiner oder gleich

// If Else aneinander reihen
if (score > 100) {
  console.log("Guter score!");
} else if (score > 50) {
  console.log("Nicht schlecht!");
} else {
  console.log("Du kannst es besser!");
}

```


## Listen und Loops

```js
// Wähle alle Elemente mit der Klasse "item" (items ist eine Liste)
let items = document.querySelectorAll(".item");

// Gehe durch alle Elemente und ändere die Farbe
items.forEach(function (item) {
  item.style.color = "red";
});

//for loop: Zähle von 0 bis 10
for (let i = 0; i <= 10; i++) {
  console.log(i); // i ist die Variable, welche von 0 bis 10 zählt
}

// Interval loop
setInterval(function() {
  console.log("Dieser Code wird jede Sekunde ausgeführt");
}, 1000); // 1000 ms = 1 Sekunde

```

## Funktionen

```js
// Funktion definieren (ohne Parameter)
function sayHello() {
  console.log("Hello");
}

// Funktion aufrufen
sayHello();

// Funktion mit Parameter definieren
function greet(name) {
  console.log("Hello " + name);
}

// Funktion mit Argumenten aufrufen
greet("Max"); // "Hello Max"

// Funktion mit mehreren Parametern definieren
function styleElement(element, color, size) {
  element.style.color = color;
  element.style.width = size + "px";
  element.style.height = size + "px";
} 

// Funktion mit Argumenten aufrufen
let myElement = document.querySelector("#myElement");
styleElement(myElement, "red", 100); // Das Element wird rot und 100px gross 

```


