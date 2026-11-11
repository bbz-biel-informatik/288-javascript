// Lösung Kapitel 3 - Events
// Die Veränderungen aus Kapitel 2 passieren jetzt erst auf ein Ereignis.
// Wir verwenden drei Events: click, wheel und mouseover.

// --- Alle HTML-Elemente auswählen ---------------------------------------

// Auslöser (die Knöpfe)
let blueButton = document.querySelector("#blueButton");
let alarmButton = document.querySelector("#alarmButton");
let statusButton = document.querySelector("#statusButton");
let sizeButton = document.querySelector("#sizeButton");
let removeButton = document.querySelector("#removeButton");
let modeButton = document.querySelector("#modeButton");

// Ziele (die Elemente, die wir verändern wollen)
let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");
let energy = document.querySelector("#energy");
let backgroundPlanet = document.querySelector("#backgroundPlanet");

// --- Aufgabe 3.1: Interaktion aus Kapitel 1 -----------------------------
// Die direkten Veränderungen aus Kapitel 2 sind gelöscht,
// die querySelector-Zeilen oben sind geblieben.

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});

// --- Aufgabe 3.2 a und e: Alarm einschalten -----------------------------
// Im gleichen Event Listener passieren drei Dinge gleichzeitig.

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
  robot.style.width = "100px";
});

// --- Aufgabe 3.2 b: Status verändern ------------------------------------

statusButton.addEventListener("click", function () {
  statusText.textContent = "Roboter ist bereit!";
});

// --- Aufgabe 3.2 c: Roboter vergrössern ---------------------------------

sizeButton.addEventListener("click", function () {
  robot.style.width = "260px";
});

// --- Aufgabe 3.2 d: Energie entfernen -----------------------------------

removeButton.addEventListener("click", function () {
  energy.remove();
  statusText.textContent = "Energie entladen";
});

// --- Aufgabe 3.3: Sternensprung (Mausrad) -------------------------------
// Auslöser ist hier kein Knopf, sondern die Weltraum-Szene selber.
// Die Drehrichtung können wir noch nicht unterscheiden, dafür braucht es if.
// randomColor() ist eine fertige Funktion aus dem Game Framework.

spaceScene.addEventListener("wheel", function () {
  spaceScene.style.backgroundColor = randomColor();
  statusText.textContent = "Sternensprung!";
});

// --- Aufgabe 3.4: Den Roboter berühren (Hover) --------------------------
// Auslöser ist hier kein Knopf, sondern der Roboter selber.

robot.addEventListener("mouseover", function () {
  statusText.textContent = "Du berührst den Roboter";
});

// Zusatz: mouseout setzt den Text wieder zurück.

robot.addEventListener("mouseout", function () {
  statusText.textContent = "Roboter wartet auf einen Befehl.";
});

// --- Aufgabe 3.6: Den Roboter bewegen -----------------------------------
// Auslöser und Ziel sind hier dasselbe Element: der Roboter.
// setPosition gibt ihm einmal beim Laden einen klaren Startpunkt.

setPosition(robot, 300, 85);

robot.addEventListener("click", function () {
  moveElement(robot, 20, 0);
  statusText.textContent = "Roboter marschiert";
});

// --- Aufgabe 3.7: Eigener Modus (Beispiel: Nachtmodus) ------------------
// Ein Klick verändert mehrere HTML-Elemente und den Statustext.

modeButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "#05070f";
  robot.style.width = "100px";
  backgroundPlanet.style.backgroundColor = "#2b2b2b";
  statusText.textContent = "Nachtmodus aktiv";
});
