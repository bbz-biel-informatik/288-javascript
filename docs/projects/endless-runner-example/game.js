let player = document.querySelector("#player");

function gameLoop() {
    if (isKeyPressed("ArrowRight")) {
        moveElement(player, 10, 0);
    }

    if (isKeyPressed("ArrowUp")) {
        moveElement(player, 0, 10);
    }
    window.requestAnimationFrame(gameLoop);
}

gameLoop();
