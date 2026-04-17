// Expose the framework as a classic browser script so it can be loaded from GitHub Pages.
(function exposeBBZGame(global) {
  function initGame() {
    const playground = document.querySelector(".playground");

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

  global.BBZGame = {
    initGame,
    setPosition,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGame, { once: true });
  } else {
    initGame();
  }
})(window);
