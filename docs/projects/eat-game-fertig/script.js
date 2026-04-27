let player = document.querySelector("#player");
let food = document.querySelector("#food");
let scoreText = document.querySelector("#score");
let score = 0;

document.addEventListener("keydown", function (event) {
    handlePlayerMovement(event);
    if (isColliding(player, food)) {
        updateScore();
        setPosition(food, Math.random() * 500, Math.random() * 500);
    }
});

function updateScore(){
    score++;
    scoreText.textContent = "Score: " + score;
}

function handlePlayerMovement(event) {
    if (event.key === "ArrowLeft") {
        moveElement(player, -10, 0);
    } else if (event.key === "ArrowRight") {
        moveElement(player, 10, 0);
    } else if (event.key === "ArrowUp") {
        moveElement(player, 0, 10);
    } else if (event.key === "ArrowDown") {
        moveElement(player, 0, -10);
    }
} 

function createEnemy() {
    const enemy = document.createElement("img");
    enemy.src = "./assets/enemy.png"; // Stelle sicher, dass du ein Bild namens "enemy.png" im richtigen Verzeichnis hast
    enemy.classList.add("enemy");
    setPosition(enemy, 1400, Math.random() * 500);
    document.querySelector("#playground").appendChild(enemy);
}

setInterval(() => {
    createEnemy();
}, 2000);

setInterval(() => {
    let enemies = document.querySelectorAll(".enemy")
    enemies.forEach(enemy => {
        moveElement(enemy, -10, 0)
        if(isColliding(enemy, player)) {
            alert("Game over")
        }
    })
}, 100)
