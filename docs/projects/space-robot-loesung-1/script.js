// Lösung Kapitel 1 - JavaScript Intro
// Aufgabe 1.1: Der blaue Knopf färbt die Weltraum-Szene blau.

// Auslöser auswählen
let blueButton = document.querySelector("#blueButton");

// Ziel auswählen
let spaceScene = document.querySelector("#spaceScene");

// Auf den Klick reagieren und die Aktion ausführen
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
