let answerInput = document.querySelector("#answerInput");
let checkButton = document.querySelector("#checkButton");
let result = document.querySelector("#result");

// Diese Funktion gibt die Antwort aus dem Textfeld in der Konsole aus.
function checkAnswer(answer) {
  result.textContent = "Hello world";
}

checkButton.addEventListener("click", function () {
  checkAnswer(answerInput.value);
});
