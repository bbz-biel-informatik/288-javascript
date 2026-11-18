// Die Steuerung ist bereits fertig. Ergänze unten die Gegner.

let player = document.querySelector("#player");
let speed = 3;

setPosition(player, 60, 60);

function moveRobot() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(player, speed, 0);
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(player, -speed, 0);
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(player, 0, speed);
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(player, 0, -speed);
  }
}

function gameLoop() {
  moveRobot();

  // Hier kommt dein Code für die Gegner hin.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
