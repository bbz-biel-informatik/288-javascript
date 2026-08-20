// Lösung Kapitel 7 - Funktionen
// Die Spielerbewegung ist neu in die Funktion moveRobot() ausgelagert.

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
// Aufgabe 6.2: Zweite Anzeige für den Spielzustand
let gameStatus = document.querySelector("#gameStatus");

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

// --- Game Loop vorbereiten ----------------------------------------------

setPosition(robot, 50, 85);

// Aufgabe 5.1: Die Geschwindigkeit steht nur noch an einer Stelle.
let speed = 2;

// Aufgabe 5.2: Der Roboter startet mit 1000 Leben.
let life = 1000;

// --- Aufgabe 7.1: Die Spielerbewegung auslagern -------------------------

function moveRobot() {
  // --- Aufgabe 4.1: Den Roboter steuern ---------------------------------
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
    // Beim Fahren ein Leben abziehen
    life -= 1;
  }
}

function gameLoop() {
  // Aufgabe 7.1: Die Spielerbewegung steht jetzt in einer eigenen Funktion.
  moveRobot();

  // --- Aufgabe 4.2: Energie einsammeln ----------------------------------

  if (isColliding(robot, energy)) {
    // Leben mit der Energiekiste wieder auffüllen
    life = 1000;
    energy.remove();
  }

  // Aktuelle Leben anzeigen
  statusText.textContent = "Leben: " + life;

  // Aufgabe 6.2: Spielzustand aus den Leben ableiten
  if (life >= 800) {
    gameStatus.textContent = "Volle Energie";
  } else if (life > 0) {
    gameStatus.textContent = "Roboter beschädigt";
  } else {
    gameStatus.textContent = "Game Over";
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
