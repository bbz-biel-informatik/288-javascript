# 1 - HTML-Elemente auswählen, bearbeiten, Events

In der Weltraum-Roboter-Übung hast du zuerst eine funktionierende Interaktion programmiert. Jetzt schauen wir genauer an, was dabei im Hintergrund geschieht.

Die Befehle dazu findest du auch im Cheat Sheet:

* [HTML-Elemente auswählen](../7-cheatsheet#html-elemente-auswahlen)
* [HTML-Elemente bearbeiten](../7-cheatsheet#html-elemente-bearbeiten)
* [Events](../7-cheatsheet#events)

## HTML, CSS und JavaScript haben verschiedene Aufgaben

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

JavaScript ist also nützlich, wenn sich die Webseite während der Benutzung verändern soll.

## Das DOM: JavaScripts Sicht auf die Webseite

Der Browser liest das HTML und erstellt daraus eine Struktur mit allen HTML-Elementen. Diese Struktur nennt man **DOM**.

`document` steht in JavaScript für die aktuell geöffnete Webseite. Der JavaScript-Goblin kann darin nach Elementen suchen und sie verändern.

## Warum brauchen wir `querySelector()`?

Auf einer Webseite gibt es viele Elemente. JavaScript muss deshalb zuerst wissen, mit welchem Element es arbeiten soll.

```js
document.querySelector("#blueButton");
```

[`document.querySelector(...)`](../7-cheatsheet#html-elemente-auswählen) durchsucht das Dokument. `"#blueButton"` ist ein CSS-Selector und bezeichnet das Element mit der ID `blueButton`.

Der Befehl liefert das gefundene HTML-Element zurück. Damit wir es später wiederverwenden können, speichern wir es in einer Variable:

```js
let blueButton = document.querySelector("#blueButton");
```

Von rechts nach links gelesen bedeutet die Zeile:

1. Suche im Dokument nach `#blueButton`.
2. Nimm das gefundene HTML-Element.
3. Speichere es unter dem Namen `blueButton`.

`blueButton` ist danach nicht der Text `"blueButton"`. Die Variable verweist auf das wirkliche HTML-Element im Browser. Mehr dazu findest du in der Theorie zu den [Variablen](./2-variablen).

## Warum wählen wir Auslöser und Ziel aus?

Bei einer Interaktion gibt es oft zwei verschiedene Elemente:

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");
```

* `blueButton` ist der **Auslöser**. Auf dieses Element wird geklickt.
* `spaceScene` ist das **Ziel**. Dieses Element wird verändert.

Auslöser und Ziel können dasselbe Element sein, müssen es aber nicht.

## Was macht ein Event Listener?

Ein Event ist ein Ereignis im Browser, zum Beispiel ein Klick oder ein Tastendruck. Ein Event Listener gibt JavaScript den Auftrag, auf ein bestimmtes Ereignis zu warten.

```js
blueButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "blue";
});
```

Beim Laden der Seite wird die Farbe noch nicht verändert. JavaScript merkt sich zuerst nur den Auftrag:

> Wenn `blueButton` angeklickt wird, führe den Code zwischen `{` und `}` aus.

Erst beim Klick wird dieser Code ausgeführt.

## Was bedeutet `function()` im Event Listener?

Der Event Listener muss wissen, welcher Code später ausgeführt werden soll. Dieser Code steht in einer Funktion:

```js
function() {
  spaceScene.style.backgroundColor = "blue";
}
```

Die Funktion wird nicht sofort ausgeführt. Der Event Listener ruft sie beim Klick auf. Im Kapitel [Funktionen](./5-funktionen) wird dieser Aufbau genauer erklärt.

## Wie wird ein Element verändert?

Das ausgewählte HTML-Element besitzt Eigenschaften, die JavaScript verändern kann:

```js
spaceScene.style.backgroundColor = "blue";
statusText.textContent = "Roboter ist bereit!";
robot.style.width = "150px";
```

* `style.backgroundColor` verändert die CSS-Hintergrundfarbe.
* `textContent` verändert den sichtbaren Text.
* `style.width` verändert die CSS-Breite.

Mit `=` wird jeweils ein neuer Wert gesetzt.

## Warum kann ein Event mehrere Dinge verändern?

JavaScript führt die Befehle in der Funktion von oben nach unten aus:

```js
alarmButton.addEventListener("click", function() {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
  robot.style.width = "80px";
});
```

Ein einziger Klick kann deshalb mehrere Veränderungen auslösen.

## Was passiert bei `remove()`?

```js
energy.remove();
```

[`remove()`](../7-cheatsheet#html-elemente-bearbeiten) entfernt das ausgewählte Element aus dem aktuellen DOM. Die ursprüngliche HTML-Datei wird dabei nicht umgeschrieben. Beim Neuladen baut der Browser die Seite wieder aus dem HTML auf. Deshalb erscheint das Element erneut.

## Click und Keydown

Der Aufbau bleibt bei verschiedenen Events ähnlich:

```js
button.addEventListener("click", function() {
  statusText.textContent = "Button angeklickt";
});
```

```js
document.addEventListener("keydown", function(event) {
  statusText.textContent = "Taste gedrückt: " + event.key;
});
```

Beim Tastatur-Event enthält `event` Informationen zum Ereignis. `event.key` sagt uns, welche Taste gedrückt wurde.

Merke:

> Zuerst auswählen, dann zuhören, danach verändern.
