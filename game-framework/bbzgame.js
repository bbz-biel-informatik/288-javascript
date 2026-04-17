// game-lib.js

function initGame() {
    // Select playground
    let playground = document.querySelector(".playground");

    if (playground) {
        playground.style.position = "relative"; // parent should be relative
    }

    // Select all game objects
    let gameObjects = document.querySelectorAll(".gameobject, #player");

    gameObjects.forEach(function(obj) {
        obj.style.position = "absolute";
    });
}

// Run automatically
initGame();

function setPosition(element, x, y) {
    element.style.left = x + "px";
    element.style.bottom = y + "px";
}
