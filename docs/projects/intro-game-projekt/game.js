let score = 0;
let scoreDisplay = document.getElementById("score");
let player = document.getElementById("player");

player.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = "Score: " + score;
    player.style.left =
        Math.random() * (window.innerWidth - player.offsetWidth) + "px";
    player.style.top =
        Math.random() * (window.innerHeight - player.offsetHeight) + "px";
});
