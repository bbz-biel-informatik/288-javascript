# 2 - HTML-Elemente auswählen, bearbeiten, Events

Nach deiner ersten Interaktion schauen wir nun genauer an, was dabei im Hintergrund geschieht. Anschliessend programmierst du weitere Interaktionen für den Weltraum-Roboter.

## Lernziele

Nach diesem Kapitel kannst du:

* ein HTML-Element mit JavaScript auswählen,
* ein HTML-Element mit JavaScript verändern,
* ein HTML-Element mit JavaScript löschen,
* auf einen Mausklick reagieren,
* auf einen Tastendruck reagieren und
* mehrere dieser Schritte zu einer Interaktion verbinden.

Die verwendeten Befehle findest du im Cheatsheet:

* [HTML-Elemente auswählen](./8-cheatsheet#html-elemente-auswahlen)
* [HTML-Elemente bearbeiten](./8-cheatsheet#html-elemente-bearbeiten)
* [Events](./8-cheatsheet#events)

## Theorie: Die erste Interaktion verstehen

### HTML, CSS und JavaScript haben verschiedene Aufgaben

HTML beschreibt, welche Elemente beim Laden der Seite vorhanden sind. CSS bestimmt, wie diese Elemente am Anfang aussehen. JavaScript kann die vorhandene Seite später verändern.

Deshalb ist diese CSS-Regel nicht dasselbe wie eine Veränderung mit JavaScript:

```css
#spaceScene {
  background-color: blue;
}
```

Mit CSS ist die Weltraum-Szene von Anfang an blau. Mit JavaScript kann sie erst nach einem Klick blau werden:

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Den [`addEventListener(...)`](./8-cheatsheet#events) und das Verändern von [HTML-Elementen](./8-cheatsheet#html-elemente-bearbeiten) findest du auch im Cheatsheet.

JavaScript ist also nützlich, wenn sich die Webseite während der Benutzung verändern soll.

### Das DOM: JavaScripts Sicht auf die Webseite

Der Browser liest das HTML und erstellt daraus eine Struktur mit allen HTML-Elementen. Diese Struktur nennt man **DOM**.

`document` steht in JavaScript für die aktuell geöffnete Webseite. Der JavaScript-Goblin kann darin nach Elementen suchen und sie verändern.

### Warum brauchen wir `querySelector()`?

Auf einer Webseite gibt es viele Elemente. JavaScript muss deshalb zuerst wissen, mit welchem Element es arbeiten soll.

```js
document.querySelector("#blueButton");
```

[`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) durchsucht das Dokument. `"#blueButton"` ist ein CSS-Selektor und bezeichnet das Element mit der ID `blueButton`.

Der Befehl liefert das gefundene HTML-Element zurück. Damit wir es später wiederverwenden können, speichern wir es in einer Variable:

```js
let blueButton = document.querySelector("#blueButton");
```

Von rechts nach links gelesen bedeutet die Zeile:

1. Suche im Dokument nach `#blueButton`.
2. Nimm das gefundene HTML-Element.
3. Speichere es unter dem Namen `blueButton`.

`blueButton` ist danach nicht der Text `"blueButton"`. Die Variable verweist auf das wirkliche HTML-Element im Browser. Mehr dazu lernst du im Kapitel [Variablen](./5-variablen).

### Warum wählen wir Auslöser und Ziel aus?

Bei einer Interaktion gibt es oft zwei verschiedene Elemente:

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");
```

* `blueButton` ist der **Auslöser**. Auf dieses Element wird geklickt.
* `spaceScene` ist das **Ziel**. Dieses Element wird verändert.

Auslöser und Ziel können dasselbe Element sein, müssen es aber nicht.

### Was macht ein Event Listener?

Ein Event ist ein Ereignis im Browser, zum Beispiel ein Klick oder ein Tastendruck. Ein Event Listener gibt JavaScript den Auftrag, auf ein bestimmtes Ereignis zu warten.

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Beim Laden der Seite wird die Farbe noch nicht verändert. JavaScript merkt sich zuerst nur den Auftrag:

> Wenn `blueButton` angeklickt wird, führe den Code zwischen `{` und `}` aus.

Erst beim Klick wird dieser Code ausgeführt.

### Was bedeutet `function()` im Event Listener?

Der Event Listener muss wissen, welcher Code später ausgeführt werden soll. Dieser Code steht in einer Funktion:

```js
function() {
  spaceScene.style.backgroundColor = "blue";
}
```

Die Funktion wird nicht sofort ausgeführt. Der Event Listener ruft sie beim Klick auf. Im Kapitel [Funktionen](./7-funktionen) wird dieser Aufbau genauer erklärt.

## Theorie: Die Hintergrundfarbe verändern

Ein ausgewähltes HTML-Element besitzt Eigenschaften, die JavaScript verändern kann:

```js
spaceScene.style.backgroundColor = "blue";
```

Mit [`style.backgroundColor`](./8-cheatsheet#html-elemente-bearbeiten) verändern wir die CSS-Hintergrundfarbe. Mit `=` setzen wir den neuen Wert.

Steht dieser Befehl in einem Click Event, ändert sich die Farbe erst beim Klick:

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

### Die Teile einer Interaktion

In unseren Interaktionen begegnen uns immer wieder dieselben Teile:

* **Auslöser auswählen:** Was wird angeklickt?
* **Ziel auswählen:** Was soll sich verändern?
* **Event bestimmen:** Worauf wartet JavaScript?
* **Aktion programmieren:** Was soll passieren?

Diese Teile müssen im Code nicht immer direkt nacheinander stehen. HTML-Elemente werden oft am Anfang der Datei ausgewählt und erst später verwendet. Ein ausgewähltes Element kann ausserdem bei mehreren Interaktionen gebraucht werden.

## 🎯 Aufgaben: Die Hintergrundfarbe verändern

### 🎯 2.1 – Eine andere Farbe

Ändere im ersten Beispiel `"blue"` zu einer anderen Farbe. Speichere die Datei und teste den Button erneut.

### 🎯 2.2 – Alarm einschalten

Wenn der Button mit der ID `alarmButton` angeklickt wird, soll die Weltraum-Szene rot werden.

Achte dabei auf die Teile einer Interaktion:

* Wähle den Alarm-Button aus.
* Wähle die Weltraum-Szene aus, falls du das noch nicht gemacht hast.
* Füge dem Button einen Click Event Listener hinzu.
* Ändere darin die Hintergrundfarbe.

## Theorie: Text und Grösse verändern

Wir können nicht nur Farben verändern. Diese zwei Befehle verändern den sichtbaren Text und die Breite eines Elements:

```js
statusText.textContent = "Roboter ist bereit!";
robot.style.width = "150px";
```

* [`textContent`](./8-cheatsheet#html-elemente-bearbeiten) verändert den sichtbaren Text.
* [`style.width`](./8-cheatsheet#html-elemente-bearbeiten) verändert die CSS-Breite.

Auch hier setzen wir mit `=` jeweils einen neuen Wert.

## 🎯 Aufgaben: Text und Grösse verändern

### 🎯 2.3 – Status verändern

Wenn der Button `statusButton` angeklickt wird, soll im Element `statusText` der Text `Roboter ist bereit!` erscheinen.

Verwende dafür [`textContent`](./8-cheatsheet#html-elemente-bearbeiten).

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

### 🎯 2.4 – Roboter vergrössern

Wenn der Button `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden.

Verwende dafür [`style.width`](./8-cheatsheet#html-elemente-bearbeiten).

## Theorie: Mehrere Dinge gleichzeitig verändern

JavaScript führt die Befehle in einer Funktion von oben nach unten aus:

```js
alarmButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
  robot.style.width = "80px";
});
```

Ein einziger Klick kann deshalb mehrere Veränderungen auslösen.

## 🎯 Aufgabe 2.5 – Mehrere Dinge gleichzeitig verändern

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

## Theorie: Ein HTML-Element entfernen

Mit `remove()` können wir ein ausgewähltes Element aus der Webseite entfernen:

```js
energy.remove();
```

[`remove()`](./8-cheatsheet#html-elemente-bearbeiten) entfernt das Element aus dem aktuellen DOM. Die ursprüngliche HTML-Datei wird dabei nicht umgeschrieben. Beim Neuladen baut der Browser die Seite wieder aus dem HTML auf. Deshalb erscheint das Element erneut.

## 🎯 Aufgaben: HTML-Elemente entfernen

### 🎯 2.6 – Energie entfernen

Wenn der Button `removeButton` angeklickt wird, soll das Element `energy` verschwinden.

Verwende dafür [`remove()`](./8-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist die Energie wieder da. Das HTML definiert den Startzustand der Seite neu.

### 🎯 2.7 – Hintergrundplaneten zerstören

Im Hintergrund befindet sich ein Planet mit der ID `backgroundPlanet`. Füge dem Steuerpult einen neuen Button hinzu. Wenn dieser Button angeklickt wird, soll der Hintergrundplanet verschwinden.

Gehe dabei wie folgt vor:

* Erstelle im HTML einen neuen Button mit der ID `destroyPlanetButton`.
* Wähle den neuen Button mit [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) aus.
* Wähle den Hintergrundplaneten aus.
* Füge dem Button einen Click Event Listener hinzu.
* Entferne darin den Hintergrundplaneten mit [`remove()`](./8-cheatsheet#html-elemente-bearbeiten).

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

## Theorie: Auf einen Tastendruck reagieren

JavaScript kann nicht nur auf Mausklicks, sondern auch auf die Tastatur reagieren:

```js
document.addEventListener("keydown", function(event) {
  statusText.textContent = "Eine Taste wurde gedrückt!";
});
```

Der [`addEventListener(...)`](./8-cheatsheet#events) hört hier auf das Event `keydown`. Dieses Event tritt ein, wenn eine Taste gedrückt wird.

Der Parameter `event` enthält Informationen zum Tastendruck. Mit `event.key` können wir später prüfen, welche Taste gedrückt wurde.

Der Unterschied:

* `click` reagiert auf einen Mausklick.
* `keydown` reagiert auf einen Tastendruck.

Im Spiel bewegen wir die Spielfigur später nicht direkt mit diesem Event. Für eine flüssige Bewegung verwenden wir im nächsten Kapitel den Game Loop.

## 🎯 Aufgabe 2.8 – Tastatur-Event

Füge den Code aus dem vorherigen Abschnitt ein. Speichere die Datei und drücke im Browser eine beliebige Taste.

Ändere danach den Statustext zu einer eigenen Nachricht und teste das Tastatur-Event erneut.

## 🎯 2.9 – Abschlussaufgabe

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

* Elemente mit [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) auswählen,
* Elemente mit JavaScript [verändern und löschen](./8-cheatsheet#html-elemente-bearbeiten) und
* mit [`addEventListener(...)`](./8-cheatsheet#events) auf Klicks und Tastendrücke reagieren.

In einem Spiel müssen Bewegung, Tastatur und Kollisionen ständig geprüft werden. Dafür verwenden wir im nächsten Kapitel den Game Loop.
