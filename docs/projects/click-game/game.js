let score = 0;
let scoreDisplay = document.getElementById("score");
let player = document.getElementById("player");
let playground = document.getElementById("playground");

player.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    setPosition(
        player,
        Math.random() * playground.clientWidth,
        Math.random() * playground.clientHeight,
    );
    player.style.backgroundColor = "blue";
});
