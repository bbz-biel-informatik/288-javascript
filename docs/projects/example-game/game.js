// Wir können das Elment bereits vorher auswählen
let playground = document.querySelector("#playground");

document.addEventListener("keydown", function(event) {
    // Dieser Code wird ausgeführt, wenn eine Taste gedrückt wird
    playground.style.backgroundColor = "blue";
});


// Wir müssen das Element auswählen, welches wir anklicken wollen
let player = document.querySelector("#player");

player.addEventListener("click", function() {
    // Dieser Code wird ausgeführt, wenn das Element angeklickt wird
    player.style.width = "200px";
    player.style.height = "200px";
});