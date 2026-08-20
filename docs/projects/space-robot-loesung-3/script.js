// Lösung Kapitel 3 - Game Loop
// Der Code aus Kapitel 2 bleibt bestehen. Neu kommt der Game Loop dazu.

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

// --- Aufgabe 3.1: Spielerbewegung ---------------------------------------
// Diese Vorbereitung wird nur einmal ausgeführt und steht darum
// vor dem Game Loop.

setPosition(robot, 50, 85);

function gameLoop() {
  // Der Roboter fährt bei jedem Bild zwei Pixel nach rechts.
  moveElement(robot, 2, 0);

  window.requestAnimationFrame(gameLoop);
}

gameLoop();

// --- Aufgabe 3.2: Bewegung ändern ---------------------------------------
// Zum Ausprobieren jeweils nur eine dieser Zeilen im Game Loop verwenden:
//
// moveElement(robot, 0, 2);    // nach oben
// moveElement(robot, 2, 2);    // diagonal nach oben rechts
// moveElement(robot, 20, 0);   // sehr schnell nach rechts
// moveElement(robot, 0, -2);   // nach unten
// moveElement(robot, 0, -0.5); // sehr langsam nach unten
// moveElement(robot, -2, 0);   // nach links
