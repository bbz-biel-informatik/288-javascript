# 1 - JavaScript macht HTML interaktiv

HTML baut eine Webseite auf. CSS gestaltet sie. JavaScript sorgt dafür, dass auf der Webseite etwas passiert.

In diesem Kapitel arbeitest du in einem kleinen **Control Room**. Darin befinden sich ein Roboter, ein Hindernis, eine Statusanzeige und mehrere Buttons. Mit JavaScript programmierst du die Steuerung dazu.

> Der JavaScript-Goblin bleibt unsere Analogie: Er wartet im Hintergrund auf einen Auftrag und verändert dann die Webseite. Die sichtbare Figur im Control Room ist ein Roboter.

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

## Control Room starten

Falls du VS Code und die benötigten Extensions noch nicht eingerichtet hast, folge zuerst der Anleitung im Kapitel [0 - JavaScript Setup](./0-javascript-setup).

Lade das vorbereitete Control-Room-Projekt herunter und entpacke den Ordner auf deinem Computer.

> Das neue Control-Room-Starterprojekt wird in einer nächsten Runde als ZIP ergänzt.

1. Öffne den ganzen Projektordner in Visual Studio Code.
2. Öffne die Datei `index.html` mit Live Server.
3. Öffne danach die Datei `script.js`.

Die JavaScript-Datei ist bereits mit dem HTML verbunden. Du musst daran nichts ändern.

## Deine erste Interaktion

Kopiere den folgenden Code in die Datei `script.js`:

```js
let blueButton = document.querySelector("#blueButton");
let controlRoom = document.querySelector("#controlRoom");

blueButton.addEventListener("click", function() {
  controlRoom.style.backgroundColor = "blue";
});
```

Speichere die Datei und klicke im Browser auf den blauen Button.

**Was passiert?**

Der Hintergrund des Control Rooms wird blau. Du hast deine erste Interaktion mit JavaScript programmiert.

## Was macht dieser Code?

Wir schauen uns den funktionierenden Code nun Schritt für Schritt an.

### 1. Den Auslöser auswählen

```js
let blueButton = document.querySelector("#blueButton");
```

[`document.querySelector(...)`](./7-cheatsheet#html-elemente-auswahlen) sucht ein Element im HTML. `#blueButton` bedeutet: Suche das Element mit der ID `blueButton`.

JavaScript merkt sich dieses Element unter dem Namen `blueButton`.

### 2. Das Ziel auswählen

```js
let controlRoom = document.querySelector("#controlRoom");
```

Auch der Control Room wird zuerst ausgewählt. Er ist das Element, das wir später verändern wollen.

Merke:

> Bevor JavaScript ein HTML-Element verwenden oder verändern kann, muss es dieses Element auswählen.

### 3. Auf einen Klick reagieren

```js
blueButton.addEventListener("click", function() {
  controlRoom.style.backgroundColor = "blue";
});
```

Der [`addEventListener(...)`](./7-cheatsheet#events) wartet auf ein Ereignis. `"click"` bedeutet, dass der Code zwischen den geschweiften Klammern bei einem Mausklick ausgeführt wird.

Der JavaScript-Goblin erhält also folgenden Auftrag:

1. Warte auf einen Klick auf den blauen Button.
2. Gehe danach zum Control Room.
3. Ändere seine Hintergrundfarbe zu Blau.

## Das Grundmuster

Für unsere Interaktionen verwenden wir immer dasselbe Muster:

```js
let trigger = document.querySelector("...");
let target = document.querySelector("...");

trigger.addEventListener("click", function() {
  target.style.backgroundColor = "...";
});
```

1. **Auslöser auswählen:** Was wird angeklickt?
2. **Ziel auswählen:** Was soll sich verändern?
3. **Event bestimmen:** Worauf wartet JavaScript?
4. **Aktion programmieren:** Was soll passieren?

## Aufgaben: Control Room programmieren

### 1. Eine andere Farbe

Ändere im ersten Beispiel `"blue"` zu einer anderen Farbe. Speichere die Datei und teste den Button erneut.

### 2. Alarm einschalten

Wenn der Button mit der ID `alarmButton` angeklickt wird, soll der Control Room rot werden.

Gehe nach dem Grundmuster vor:

* Wähle den Alarm-Button aus.
* Wähle den Control Room aus, falls du das noch nicht gemacht hast.
* Füge dem Button einen Click Event Listener hinzu.
* Ändere darin die Hintergrundfarbe.

### 3. Status verändern

Wenn der Button `statusButton` angeklickt wird, soll im Element `statusText` der Text `System ist bereit!` erscheinen.

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

### 4. Roboter vergrössern

Wenn der Button `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden.

Verwende dafür [`style.width`](./7-cheatsheet#html-elemente-bearbeiten).

### 5. Hindernis entfernen

Wenn der Button `removeButton` angeklickt wird, soll das Element `obstacle` verschwinden.

Verwende dafür [`remove()`](./7-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist das Hindernis wieder da. Das HTML definiert den Startzustand der Seite neu.

### 6. Mehrere Dinge gleichzeitig verändern

Erweitere den Alarm-Button. Bei einem Klick sollen zwei Dinge passieren:

* Der Control Room wird rot.
* Im Status steht `Alarm!`.

In einem Event Listener dürfen mehrere Befehle stehen:

```js
alarmButton.addEventListener("click", function() {
  controlRoom.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
});
```

## Tastatur-Event

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

## Abschlussaufgabe

Programmiere deinen eigenen Modus für den Control Room.

Dein Modus soll:

* durch einen Button gestartet werden,
* mindestens drei HTML-Elemente verändern und
* einen passenden Statustext anzeigen.

Mögliche Ideen:

* Nachtmodus
* Party-Modus
* Sicherheitsmodus
* Roboter-Wartung

Gehe bei jeder Interaktion gleich vor:

> Auslöser auswählen → Ziel auswählen → Event bestimmen → Aktion programmieren

## Zusammenfassung

HTML und CSS bestimmen, wie der Control Room am Anfang aussieht. JavaScript macht ihn interaktiv.

Du kannst nun:

* Elemente mit [`document.querySelector(...)`](./7-cheatsheet#html-elemente-auswahlen) auswählen,
* Elemente mit JavaScript [verändern und löschen](./7-cheatsheet#html-elemente-bearbeiten) und
* mit [`addEventListener(...)`](./7-cheatsheet#events) auf Klicks und Tastendrücke reagieren.

Bis jetzt wurde der JavaScript-Goblin durch einzelne Events geweckt. In einem Spiel müssen Bewegung, Tastatur und Kollisionen ständig geprüft werden. Dafür lernen wir später den Game Loop kennen.

Mehr Hintergrund zu den verwendeten Befehlen findest du in der Theorie [HTML verändern mit Events](./6-theorie/1-html-veraendern-mit-events).
