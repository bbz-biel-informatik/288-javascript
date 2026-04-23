// Expose the framework as a classic browser script so it can be loaded from GitHub Pages.
(function exposeBBZGame(global) {
    const pressedKeys = {};

    window.addEventListener("keydown", (event) => {
        pressedKeys[event.key] = true;
    });

    window.addEventListener("keyup", (event) => {
        pressedKeys[event.key] = false;
    });

    function initGame() {
        console.log("Initializing BBZGame Script...");

        const playground = document.querySelector("#playground");

        if (playground) {
            playground.style.position = "relative";
        }

        const gameObjects = document.querySelectorAll(".gameobject, #player");

        gameObjects.forEach((obj) => {
            obj.style.position = "absolute";
        });
    }

    function setPosition(element, x, y) {
        element.style.left = `${x}px`;
        element.style.bottom = `${y}px`;
    }

    function movePlayer(deltaX, deltaY) {
        const player = document.querySelector("#player");
        const currentX = parseInt(player.style.left) || 0;
        const currentY = parseInt(player.style.bottom) || 0;

        setPosition(player, currentX + deltaX, currentY + deltaY);
    }

    function isColliding(firstElement, secondElement) {
        const firstRect = firstElement.getBoundingClientRect();
        const secondRect = secondElement.getBoundingClientRect();

        return !(
            firstRect.right < secondRect.left ||
            firstRect.left > secondRect.right ||
            firstRect.bottom < secondRect.top ||
            firstRect.top > secondRect.bottom
        );
    }

    function isKeyPressed(key) {
        return !!pressedKeys[key];
    }

    global.initBBZGame = initGame;
    global.setPosition = setPosition;
    global.isColliding = isColliding;
    global.isKeyPressed = isKeyPressed;
    global.movePlayer = movePlayer;

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initGame, { once: true });
    } else {
        initGame();
    }
})(window);
