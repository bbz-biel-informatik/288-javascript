// Lösung Kapitel 2 - HTML-Elemente auswählen, bearbeiten, Events

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
