# JavaScript Cheatsheet

## Javascript in HTML einbinden

```html
<!-- Externes Skript -->
<script src="script.js"></script>

<!-- Externe Library einbinden -->
<script src="https://irgendeine-url.ch/library.min.js"></script>

<!-- Direkt im HTML -->
<script>
  alert("Hello World");
</script>
```

---

## HTML Elemente auswählen

```js
// Gib mir das Objekt mit der id "image"
let myImage = document.querySelector("#image");
let myImage = document.getElementById("image");

// Gib mir das Objekt mit der Klasse "item"
let item = document.querySelector(".item");

// Gib mir alle Objekte mit der Klasse "item"
let items = document.querySelectorAll(".item");
```

## HTML Elemente bearbeiten

```js
// Text und HTML verändern
myImage.style.color = "red";
myImage.textContent = "Hello";
myImage.innerHTML = "<b>Hello</b>";

// Klasse hinzufügen / entfernen
myImage.classList.add("active");
myImage.classList.remove("active");

// Element löschen
myImage.remove();

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
if (x > 10) {
  console.log("big");
} else if (x > 5) {
  console.log("medium");
} else {
  console.log("small");
}
```

---

## Variablen

```js
let x = 10; // changeable
```

---
