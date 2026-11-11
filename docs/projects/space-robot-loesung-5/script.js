// Lösung Kapitel 5 - If-Else
// Der Roboter wird jetzt mit den Pfeiltasten gesteuert.

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

// --- Aufgabe 3.1: Interaktion aus Kapitel 1 ---------------------------

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});

// --- Aufgabe 3.2 und 3.5: Alarm einschalten -----------------------------
// Im gleichen Event Listener passieren zwei Dinge gleichzeitig.

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
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

// --- Aufgabe 3.11: Eigener Modus (Beispiel: Nachtmodus) ------------------
// Ein Klick verändert mehrere HTML-Elemente und den Statustext.

modeButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "#05070f";
  robot.style.width = "100px";
  energy.style.backgroundColor = "#3b3b3b";
  statusText.textContent = "Nachtmodus aktiv";
});

// --- Game Loop vorbereiten ----------------------------------------------

setPosition(robot, 50, 85);

function gameLoop() {
  // --- Aufgabe 5.1: Den Roboter steuern ---------------------------------
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, 2, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -2, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, 2);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -2);
  }

  // --- Aufgabe 5.2: Energie einsammeln ----------------------------------

  if (isColliding(robot, energy)) {
    energy.remove();
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
