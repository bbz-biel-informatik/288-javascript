# 1 - JavaScript Intro

HTML baut eine Webseite auf. CSS gestaltet sie. JavaScript sorgt dafür, dass auf der Webseite etwas passiert.

Wir machen zu Beginn zusammen ein Beispiel. Wichtig dabei ist, das Grundkonzept von Javascript zu verstehen. Die genauen Befehle werden später erklärt.

**Debugging**

Wenn etwas nicht funtioniert (was zu beginn sehr oft vorkommt), schaue dir das letzte Kapitel "Debugging" an. Debugging bedeutet, fehler zu suchen und ist ein wichtiger Skill beim programmieren.

## Kickoff

Lade das vorbereitete [Weltraum-Roboter-Projekt](/assets/zips/space-robot-starter.zip) herunter und entpacke den Ordner auf deinem Computer. Darin enthalten ist das Projekt, mit welchem wir nun arbeiten werden.

Falls du VS Code und die benötigten Extensions noch nicht eingerichtet hast, folge zuerst der Anleitung im Kapitel [0 - JavaScript Setup](./0-javascript-setup).

1. Öffne den ganzen Projektordner in Visual Studio Code, wie im Setup unter [Einen Projektordner öffnen](./0-javascript-setup#einen-projektordner-offnen) beschrieben.
2. Klicke mit der rechten Maustaste auf die Datei `index.html`.
3. Wähle **Open with Live Server**. Die Webseite öffnet sich im Browser.
4. Falls diese Auswahl fehlt, installiere zuerst die Extension **Live Server**, wie im [JavaScript Setup](./0-javascript-setup#extensions-installieren) beschrieben.

-> Du solltest nun das Projekt auf dem Browser sehen. Aktuell passiert aber noch nichts mit den Knöpfen. Das ändern wir am Ende des Kapitels.

## Projektstruktur

Im Projektordner findest du diese Dateien und Ordner:

```text
space-robot-starter/
├── assets/
├── index.html
├── style.css
└── script.js
```

- `index.html` enthält die HTML-Elemente der Webseite, zum Beispiel den Roboter und die Knöpfe.
- `style.css` gestaltet die Webseite und sorgt für das Aussehen der Weltraum-Szene.
- `script.js` enthält den JavaScript-Code, der die Webseite interaktiv macht.
- Im Ordner `assets` liegen die Bilder für das Projekt.

Am Ende der Datei `index.html` steht diese Zeile:

```html
<script src="./script.js"></script>
```

Das `script`-Element verbindet die Datei `script.js` mit der Webseite. Dadurch lädt der Browser den JavaScript-Code aus dieser Datei. Diese Verbindung ist im Starterprojekt bereits vorbereitet und muss nicht verändert werden.

## 🎯 1.1 - Javascript code einfügen

Kopiere den folgenden Code in die Datei `script.js`.

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

<details>
<summary>Die neuen Befehle im Überblick – wir erklären sie später noch genau</summary>

- Mit [`let`](./9-cheatsheet#variablen) merken wir uns etwas unter einem eigenen Namen.
- Mit [`document.querySelector(...)`](./9-cheatsheet#html-elemente-auswahlen) wählen wir ein HTML-Element aus.
- Mit [`addEventListener(...)`](./9-cheatsheet#events) reagieren wir auf ein Ereignis wie einen Klick.
- Mit [`style.backgroundColor`](./9-cheatsheet#html-elemente-bearbeiten) verändern wir die Hintergrundfarbe eines HTML-Elements.

</details>

Speichere die Datei und klicke im Browser auf den blauen Button.

**Was passiert?**

Der Hintergrund der Weltraum-Szene wird blau. Du hast deine erste Interaktion mit JavaScript programmiert.

## Was macht dieser Code?

Wir schauen uns den funktionierenden Code nun Schritt für Schritt an.

### Den Auslöser auswählen

```js
let blueButton = document.querySelector("#blueButton");
```

[`document.querySelector(...)`](./9-cheatsheet#html-elemente-auswahlen) sucht ein Element im HTML. `#blueButton` bedeutet: Suche das Element mit der ID `blueButton`.

JavaScript merkt sich dieses Element unter dem Namen `blueButton`.

### Das Ziel auswählen

```js
let spaceScene = document.querySelector("#spaceScene");
```

Auch die Weltraum-Szene wird zuerst ausgewählt. Sie ist das Element, das wir später verändern wollen.

In `querySelector(...)` verwenden wir die gleichen Selektoren wie in CSS. Mit `#spaceScene` wählen wir zum Beispiel das Element mit der ID `spaceScene` aus. Im nächsten Kapitel erfährst du genauer, [warum wir `querySelector(...)` brauchen](./2-html-elemente-auswaehlen-bearbeiten-events#warum-brauchen-wir-queryselector).

Merke:

> Bevor JavaScript ein HTML-Element verwenden oder verändern kann, muss es dieses Element auswählen. (mit querySelector)

### Auf einen Klick reagieren

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

Der [`addEventListener(...)`](./9-cheatsheet#events) wartet auf ein Ereignis. `"click"` bedeutet, dass der Code zwischen den geschweiften Klammern bei einem Mausklick ausgeführt wird.

Ein Ereignis nennt man in JavaScript **Event**. Wie Events funktionieren und was der Event Listener genau macht, lernst du im nächsten Kapitel in der [Event-Theorie](./2-html-elemente-auswaehlen-bearbeiten-events#was-macht-ein-event-listener).

### Die Hintergrundfarbe verändern

```js
spaceScene.style.backgroundColor = "blue";
```

Sobald der blaue Knopf angeklickt wird, führt JavaScript diese Zeile aus. Mit [`style.backgroundColor`](./9-cheatsheet#html-elemente-bearbeiten) verändert JavaScript die CSS-Hintergrundfarbe der ausgewählten Weltraum-Szene. Der neue Wert ist `"blue"`, also blau.

Im nächsten Kapitel zerlegen wir diese erste Interaktion noch genauer in ihre Teile. Danach programmierst du eigene Interaktionen für den Weltraum-Roboter.
