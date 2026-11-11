// Lösung Kapitel 2 - HTML-Elemente auswählen und verändern
// Alle Veränderungen passieren direkt beim Laden der Seite.
// Events (Klick, Doppelklick, Hover) kommen erst im Kapitel 3.

// --- Alle Elemente auswählen --------------------------------------------
// Jedes Element wird nur einmal ausgewählt.

let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");
let backgroundPlanet = document.querySelector("#backgroundPlanet");
let energy = document.querySelector("#energy");

// --- Aufgabe 2.1 a: Das Weltall einfärben -------------------------------

spaceScene.style.backgroundColor = "yellow";

// --- Aufgabe 2.1 b: Den Statustext ändern -------------------------------

statusText.textContent = "Systeme werden geladen...";

// --- Aufgabe 2.1 c: Den Roboter vergrössern -----------------------------

robot.style.width = "250px";

// --- Aufgabe 2.1 d: Den Hintergrundplaneten einfärben -------------------

backgroundPlanet.style.backgroundColor = "green";

// --- Aufgabe 2.1 e: Ein Element mehrfach verändern ----------------------

energy.style.width = "200px";
energy.style.borderColor = "red";
energy.style.backgroundColor = "black";

// --- Aufgabe 2.2: Die Energie löschen -----------------------------------
// Diese Zeile steht unter den Veränderungen von 2.1 e.
// JavaScript arbeitet von oben nach unten: Zuerst wird die Kiste
// umgefärbt, dann verschwindet sie.

energy.remove();

// --- Interaktion aus Kapitel 1 ------------------------------------------
// Diese bleibt stehen, im Kapitel 3 bauen wir darauf auf.

let blueButton = document.querySelector("#blueButton");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
