# 1 - HTML-Elemente auswählen, bearbeiten, Events

HTML baut eine Webseite auf. CSS gestaltet sie. JavaScript sorgt dafür, dass auf der Webseite etwas passiert.

In diesem Kapitel erstellst du eine kleine interaktive Webseite.

## Lernziele

Nach diesem Kapitel kannst du:

* ein HTML-Element mit JavaScript auswählen,
* ein HTML-Element mit JavaScript verändern,
* ein HTML-Element mit JavaScript löschen,
* auf einen Mausklick reagieren,
* auf einen Tastendruck reagieren und
* mehrere dieser Schritte zu einer Interaktion verbinden.

Die verwendeten Befehle findest du im Cheat Sheet:

* [HTML-Elemente auswählen](./7-cheatsheet#html-elemente-auswahlen)
* [HTML-Elemente bearbeiten](./7-cheatsheet#html-elemente-bearbeiten)
* [Events](./7-cheatsheet#events)

## Weltraum-Roboter Übung

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

Speichere die Datei und klicke im Browser auf den blauen Button.

**Was passiert?**

Der Hintergrund der Weltraum-Szene wird blau. Du hast deine erste Interaktion mit JavaScript programmiert.

## Was macht dieser Code?

Wir schauen uns den funktionierenden Code nun Schritt für Schritt an.

### Den Auslöser auswählen

```js
let blueButton = document.querySelector("#blueButton");
```

[`document.querySelector(...)`](./7-cheatsheet#html-elemente-auswahlen) sucht ein Element im HTML. `#blueButton` bedeutet: Suche das Element mit der ID `blueButton`.

JavaScript merkt sich dieses Element unter dem Namen `blueButton`.

### Das Ziel auswählen

```js
let spaceScene = document.querySelector("#spaceScene");
```

Auch die Weltraum-Szene wird zuerst ausgewählt. Sie ist das Element, das wir später verändern wollen.

In `querySelector(...)` verwenden wir die gleichen Selektoren wie in CSS. Mit `#spaceScene` wählen wir zum Beispiel das Element mit der ID `spaceScene` aus. Mehr dazu findest du in der Theorie unter [Warum brauchen wir `querySelector()`?](./6-theorie/1-html-elemente-auswaehlen-bearbeiten-events#warum-brauchen-wir-queryselector).

Merke:

> Bevor JavaScript ein HTML-Element verwenden oder verändern kann, muss es dieses Element auswählen.

### Auf einen Klick reagieren

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Der [`addEventListener(...)`](./7-cheatsheet#events) wartet auf ein Ereignis. `"click"` bedeutet, dass der Code zwischen den geschweiften Klammern bei einem Mausklick ausgeführt wird.

## Die Teile einer Interaktion

In unseren Interaktionen begegnen uns immer wieder dieselben Teile:

* **Auslöser auswählen:** Was wird angeklickt?
* **Ziel auswählen:** Was soll sich verändern?
* **Event bestimmen:** Worauf wartet JavaScript?
* **Aktion programmieren:** Was soll passieren?

Diese Teile müssen im Code nicht immer direkt nacheinander stehen. HTML-Elemente werden oft am Anfang der Datei ausgewählt und erst später verwendet. Ein ausgewähltes Element kann ausserdem bei mehreren Interaktionen gebraucht werden.

## 🎯 Aufgaben: Weltraum-Roboter programmieren

### 🎯 1.2 – Eine andere Farbe

Ändere im ersten Beispiel `"blue"` zu einer anderen Farbe. Speichere die Datei und teste den Button erneut.

### 🎯 1.3 – Alarm einschalten

Wenn der Button mit der ID `alarmButton` angeklickt wird, soll die Weltraum-Szene rot werden.

Achte dabei auf die Teile einer Interaktion:

* Wähle den Alarm-Button aus.
* Wähle die Weltraum-Szene aus, falls du das noch nicht gemacht hast.
* Füge dem Button einen Click Event Listener hinzu.
* Ändere darin die Hintergrundfarbe.

### 🎯 1.4 – Status verändern

Wenn der Button `statusButton` angeklickt wird, soll im Element `statusText` der Text `Roboter ist bereit!` erscheinen.

Verwende dafür [`textContent`](./7-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Codegerüst</summary>

```js
let statusButton = document.querySelector("________");
let statusText = document.querySelector("________");

statusButton.addEventListener("click", function() {
  statusText.textContent = "________________";
});
```

</details>

### 🎯 1.5 – Roboter vergrössern

Wenn der Button `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden.

Verwende dafür [`style.width`](./7-cheatsheet#html-elemente-bearbeiten).

### 🎯 1.6 – Energie entfernen

Wenn der Button `removeButton` angeklickt wird, soll das Element `energy` verschwinden.

Verwende dafür [`remove()`](./7-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist die Energie wieder da. Das HTML definiert den Startzustand der Seite neu.

### 🎯 1.7 – Mehrere Dinge gleichzeitig verändern

Erweitere den Alarm-Button. Bei einem Klick sollen zwei Dinge passieren:

* Die Weltraum-Szene wird rot.
* Im Status steht `Alarm!`.

In einem Event Listener dürfen mehrere Befehle stehen:

```js
alarmButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
});
```

## 🎯 1.8 – Tastatur-Event

JavaScript kann nicht nur auf Mausklicks, sondern auch auf die Tastatur reagieren.

```js
document.addEventListener("keydown", function(event) {
  statusText.textContent = "Eine Taste wurde gedrückt!";
});
```

Füge den Code ein, speichere die Datei und drücke im Browser eine beliebige Taste.

Der Unterschied:

* `click` reagiert auf einen Mausklick.
* `keydown` reagiert auf einen Tastendruck.

Im späteren Spiel werden wir die Spielfigur nicht mit diesem Event bewegen. Für eine flüssige Bewegung verwenden wir dort den Game Loop.

## 🎯 1.9 – Hintergrundplaneten zerstören

Im Hintergrund befindet sich ein Planet mit der ID `backgroundPlanet`. Füge dem Steuerpult einen neuen Button hinzu. Wenn dieser Button angeklickt wird, soll der Hintergrundplanet verschwinden.

Gehe dabei wie folgt vor:

* Erstelle im HTML einen neuen Button mit der ID `destroyPlanetButton`.
* Wähle den neuen Button mit [`document.querySelector(...)`](./7-cheatsheet#html-elemente-auswahlen) aus.
* Wähle den Hintergrundplaneten aus.
* Füge dem Button einen Click Event Listener hinzu.
* Entferne darin den Hintergrundplaneten mit [`remove()`](./7-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp für das HTML</summary>

Du kannst im Element mit der Klasse `button-row` eine weitere Steuerung ergänzen:

```html
<div class="control">
  <button id="destroyPlanetButton" class="control-button red" type="button"></button>
  <span class="control-label">Planet</span>
</div>
```

</details>

## 🎯 1.10 – Abschlussaufgabe

Programmiere deinen eigenen Modus für die Weltraum-Szene.

Dein Modus soll:

* durch einen Button gestartet werden,
* mindestens drei HTML-Elemente verändern und
* einen passenden Statustext anzeigen.

Mögliche Ideen:

* Nachtmodus
* Party-Modus
* Sicherheitsmodus
* Roboter-Wartung
* Weltraum-Notfall

Gehe bei jeder Interaktion gleich vor:

> Denke bei jeder Interaktion an Auslöser, Ziel, Event und Aktion.

## Zusammenfassung

HTML und CSS bestimmen, wie die Weltraum-Szene am Anfang aussieht. JavaScript macht sie interaktiv.

Du kannst nun:

* Elemente mit [`document.querySelector(...)`](./7-cheatsheet#html-elemente-auswahlen) auswählen,
* Elemente mit JavaScript [verändern und löschen](./7-cheatsheet#html-elemente-bearbeiten) und
* mit [`addEventListener(...)`](./7-cheatsheet#events) auf Klicks und Tastendrücke reagieren.

In einem Spiel müssen Bewegung, Tastatur und Kollisionen ständig geprüft werden. Dafür lernen wir später den Game Loop kennen.

Mehr Hintergrund zu den verwendeten Befehlen findest du in der Theorie [HTML-Elemente auswählen, bearbeiten, Events](./6-theorie/1-html-elemente-auswaehlen-bearbeiten-events).
