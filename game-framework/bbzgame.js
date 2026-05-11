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

  function moveElement(element, deltaX, deltaY) {
    const currentX = parseInt(element.style.left) || 0;
    const currentY = parseInt(element.style.bottom) || 0;

    setPosition(element, currentX + deltaX, currentY + deltaY);
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

  function getY(element) {
    return parseFloat(element.style.bottom) || 0;
  }

  function getX(element) {
    return parseFloat(element.style.left) || 0;
  }

  function isOnGround(element, groundLevel = 10) {
    return getY(element) <= groundLevel;
  }

  global.initBBZGame = initGame;
  global.setPosition = setPosition;
  global.isColliding = isColliding;
  global.isKeyPressed = isKeyPressed;
  global.moveElement = moveElement;
  global.getY = getY;
  global.getX = getX;
  global.isOnGround = isOnGround;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGame, { once: true });
  } else {
    initGame();
  }
})(window);
