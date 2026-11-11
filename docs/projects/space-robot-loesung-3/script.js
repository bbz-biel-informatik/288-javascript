// Lösung Kapitel 3 - Events
// Die Veränderungen aus Kapitel 2 passieren jetzt erst auf Knopfdruck.

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

// --- Aufgabe 3.1: Interaktion aus Kapitel 1 -----------------------------

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});

// --- Aufgabe 3.2 und 3.5: Alarm einschalten -----------------------------
// Im gleichen Event Listener passieren drei Dinge gleichzeitig.

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
  robot.style.width = "100px";
});

// --- Aufgabe 3.3: Status verändern --------------------------------------

statusButton.addEventListener("click", function () {
  statusText.textContent = "Roboter ist bereit!";
});

// --- Aufgabe 3.4: Roboter vergrössern -----------------------------------

sizeButton.addEventListener("click", function () {
  robot.style.width = "260px";
});

// --- Aufgabe 3.6: Energie entfernen -------------------------------------

removeButton.addEventListener("click", function () {
  energy.remove();
});

// --- Aufgabe 3.7: Hintergrundplaneten zerstören -------------------------
// Der Knopf mit der ID destroyPlanetButton wurde im index.html ergänzt.

destroyPlanetButton.addEventListener("click", function () {
  backgroundPlanet.remove();
  statusText.textContent = "Planet zerstört";
});

// --- Aufgabe 3.8 und 3.9: Auf die Tastatur reagieren --------------------
// Tastatur-Events hängen am document, nicht an einem Knopf.

document.addEventListener("keydown", function (event) {
  statusText.textContent = event.key;
  robot.style.width = "300px";
});

// --- Aufgabe 3.11: Eigener Modus (Beispiel: Nachtmodus) -----------------
// Ein Klick verändert mehrere HTML-Elemente und den Statustext.

modeButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "#05070f";
  robot.style.width = "100px";
  energy.style.backgroundColor = "#3b3b3b";
  statusText.textContent = "Nachtmodus aktiv";
});
