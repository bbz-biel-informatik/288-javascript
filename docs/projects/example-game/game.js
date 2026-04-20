// Wir können das Elment bereits vorher auswählen
let playground = document.querySelector("#playground");

document.addEventListener("keydown", function(event) {
    // Dieser Code wird ausgeführt, wenn eine Taste gedrückt wird
    playground.style.backgroundColor = "blue";
});