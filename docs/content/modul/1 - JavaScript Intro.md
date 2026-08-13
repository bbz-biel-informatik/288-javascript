# 1 - JavaScript Intro

HTML baut eine Webseite auf. CSS gestaltet sie. JavaScript sorgt dafür, dass auf der Webseite etwas passiert.

In diesem interaktiven Einstieg programmierst du direkt deine erste kleine Interaktion. Die einzelnen Teile und die Theorie dahinter lernst du im nächsten Kapitel genauer kennen.

## Weltraum-Roboter-Übung

In dieser Übung steuerst du einen Roboter auf einem fremden Planeten. Damit lernst du die grundlegenden Interaktionen mit JavaScript kennen.

Lade das vorbereitete [Weltraum-Roboter-Projekt](/assets/zips/space-robot-starter.zip) herunter und entpacke den Ordner auf deinem Computer.

Falls du VS Code und die benötigten Extensions noch nicht eingerichtet hast, folge zuerst der Anleitung im Kapitel [0 - JavaScript Setup](./0-javascript-setup).

1. Öffne den ganzen Projektordner in Visual Studio Code.
2. Klicke mit der rechten Maustaste auf die Datei `index.html`.
3. Wähle **Open with Live Server**. Die Webseite öffnet sich im Browser.
4. Falls diese Auswahl fehlt, installiere zuerst die Extension **Live Server**, wie im [JavaScript Setup](./0-javascript-setup#extensions-installieren) beschrieben.
5. Öffne danach die Datei `script.js`.

Die JavaScript-Datei ist bereits mit dem HTML verbunden. Du musst daran nichts ändern.

## 🎯 1.1 – Deine erste Interaktion

Kopiere den folgenden Code in die Datei `script.js`:

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");

blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Die verwendeten Befehle findest du im Cheatsheet:

* [`let`](./8-cheatsheet#variablen)
* [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen)
* [`addEventListener(...)`](./8-cheatsheet#events)
* [`style.backgroundColor`](./8-cheatsheet#html-elemente-bearbeiten)

Speichere die Datei und klicke im Browser auf den blauen Button.

**Was passiert?**

Der Hintergrund der Weltraum-Szene wird blau. Du hast deine erste Interaktion mit JavaScript programmiert.

## Was macht dieser Code?

Wir schauen uns den funktionierenden Code nun Schritt für Schritt an.

### Den Auslöser auswählen

```js
let blueButton = document.querySelector("#blueButton");
```

[`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) sucht ein Element im HTML. `#blueButton` bedeutet: Suche das Element mit der ID `blueButton`.

JavaScript merkt sich dieses Element unter dem Namen `blueButton`.

### Das Ziel auswählen

```js
let spaceScene = document.querySelector("#spaceScene");
```

Auch die Weltraum-Szene wird zuerst ausgewählt. Sie ist das Element, das wir später verändern wollen.

In `querySelector(...)` verwenden wir die gleichen Selektoren wie in CSS. Mit `#spaceScene` wählen wir zum Beispiel das Element mit der ID `spaceScene` aus. Im nächsten Kapitel erfährst du genauer, [warum wir `querySelector(...)` brauchen](./2-html-elemente-auswaehlen-bearbeiten-events#warum-brauchen-wir-queryselector).

Merke:

> Bevor JavaScript ein HTML-Element verwenden oder verändern kann, muss es dieses Element auswählen.

### Auf einen Klick reagieren

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Der [`addEventListener(...)`](./8-cheatsheet#events) wartet auf ein Ereignis. `"click"` bedeutet, dass der Code zwischen den geschweiften Klammern bei einem Mausklick ausgeführt wird.

Im nächsten Kapitel zerlegen wir diese erste Interaktion in ihre Teile. Danach programmierst du eigene Interaktionen für den Weltraum-Roboter.
