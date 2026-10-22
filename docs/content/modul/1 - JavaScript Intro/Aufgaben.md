# 1 - Aufgaben: JavaScript Intro

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 1.1 - Javascript code einfügen

Kopiere den folgenden Code in die Datei `script.js`.

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

Speichere die Datei und klicke im Browser auf den blauen Button.

**Was passiert?**

Der Hintergrund der Weltraum-Szene wird blau. Du hast deine erste Interaktion mit JavaScript programmiert.
