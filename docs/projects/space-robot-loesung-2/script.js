// Lösung Kapitel 2 - HTML-Elemente auswählen und verändern
// Alle Veränderungen passieren direkt beim Laden der Seite.
// Events (Klick, Tastatur) kommen erst im Kapitel 3.

// --- Alle Elemente auswählen --------------------------------------------

let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let gameStatus = document.querySelector("#gameStatus");
let robot = document.querySelector("#robot");
let energy = document.querySelector("#energy");
let backgroundPlanet = document.querySelector("#backgroundPlanet");
let star1 = document.querySelector(".star-1");
let star2 = document.querySelector(".star-2");

// --- Aufgabe 2.1: Das Weltall einfärben ---------------------------------

spaceScene.style.backgroundColor = "yellow";

// --- Aufgabe 2.2: Den Statustext ändern ---------------------------------

statusText.textContent = "Systeme werden geladen...";

// --- Aufgabe 2.3: Den Roboter vergrössern -------------------------------

robot.style.width = "250px";

// --- Aufgabe 2.4: Trainingsrunde ----------------------------------------

gameStatus.textContent = "Bereit zum Start";
backgroundPlanet.style.backgroundColor = "green";
spaceScene.style.borderColor = "white";
energy.style.backgroundColor = "purple";
robot.style.width = "120px";
statusText.textContent = "Nicolas";

// --- Aufgabe 2.5: Ein Element mehrfach verändern ------------------------

energy.style.width = "200px";
energy.style.borderColor = "red";
energy.style.backgroundColor = "black";

// --- Aufgabe 2.8: Mehrere Sterne löschen --------------------------------
// Aufgabe 2.6 (energy.remove()) und 2.7 (backgroundPlanet.remove()) sind
// hier auskommentiert, damit man die Veränderungen oben noch sieht.

// energy.remove();
// backgroundPlanet.remove();

star1.remove();
star2.remove();

// --- Aufgabe 2.9: Dein eigener Nachtmodus -------------------------------
// Ein Beispiel. Die Zeilen überschreiben die Werte von oben.

spaceScene.style.backgroundColor = "#05070f";
robot.style.width = "100px";
backgroundPlanet.style.backgroundColor = "#2b2b2b";
energy.style.backgroundColor = "#3b3b3b";
statusText.textContent = "Nachtmodus aktiv";

// --- Interaktion aus Kapitel 1 ------------------------------------------
// Diese bleibt stehen, im Kapitel 3 bauen wir darauf auf.

let blueButton = document.querySelector("#blueButton");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
