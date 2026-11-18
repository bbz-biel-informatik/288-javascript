// Dieser Code funktioniert bereits. Deine Aufgabe ist es, ihn mit Funktionen aufzuräumen.

let player = document.querySelector("#player");
let energy = document.querySelector("#energy");
let energyText = document.querySelector("#energyText");
let gameStatus = document.querySelector("#gameStatus");

let speed = 3;
let energie = 100;

setPosition(player, 60, 60);
setPosition(energy, 600, 200);

function gameLoop() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -speed, 0);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, speed);
    energie -= 0.2;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -speed);
    energie -= 0.2;
  }

  if (isColliding(player, energy)) {
    energie = 100;
    energy.remove();
  }

  energyText.textContent = "Energie: " + Math.round(energie);

  if (energie > 0) {
    gameStatus.textContent = "Spiel läuft.";
  } else {
    gameStatus.textContent = "Game Over";
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
