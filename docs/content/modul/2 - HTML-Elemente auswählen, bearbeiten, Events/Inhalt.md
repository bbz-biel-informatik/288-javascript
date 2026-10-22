# 2 - HTML-Elemente auswählen, bearbeiten, Events

Nach deiner ersten Interaktion schauen wir nun genauer an, was dabei im Hintergrund geschieht. Anschliessend programmierst du weitere Interaktionen für den Weltraum-Roboter.

## Lernziele

Nach diesem Kapitel kannst du:

- ein HTML-Element mit JavaScript auswählen,
- ein HTML-Element mit JavaScript verändern,
- ein HTML-Element mit JavaScript löschen,
- auf einen Mausklick reagieren,
- auf einen Tastendruck reagieren und
- mehrere dieser Schritte zu einer Interaktion verbinden.

Die verwendeten Befehle findest du im Cheatsheet:

- [HTML-Elemente auswählen](../9-cheatsheet#html-elemente-auswahlen)
- [HTML-Elemente bearbeiten](../9-cheatsheet#html-elemente-bearbeiten)
- [Events](../9-cheatsheet#events)

## Theorie: HTML Elemente auf Knopfdruck verändern.

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
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

JavaScript ist also nützlich, wenn sich die Webseite während der Benutzung verändern soll.

<details>
<summary>Analogie: JavaScript ist wie ein Roboter</summary>

Stell dir JavaScript wie einen kleinen Roboter vor, der sich durch deine Webseite bewegt. HTML zeigt ihm, welche Elemente vorhanden sind, und CSS zeigt ihm, wie sie aussehen. Mit JavaScript gibst du dem Roboter Aufträge wie: «Finde den blauen Knopf. Warte auf einen Klick. Färbe danach die Weltraum-Szene blau.»

Der Roboter verändert dabei die vorhandenen HTML-Elemente und ihre CSS-Eigenschaften. Er kann aber nur einen Auftrag ausführen, wenn wir ihm genau sagen, welches Element gemeint ist und was damit geschehen soll.

</details>

### HTML-Element auswählen

**Warum brauchen wir `querySelector()`?**

Auf einer Webseite gibt es viele Elemente. JavaScript muss deshalb zuerst wissen, mit welchem Element es arbeiten soll.

```js
document.querySelector("#blueButton");
```

[`document.querySelector(...)`](../9-cheatsheet#html-elemente-auswahlen) durchsucht das Dokument. `"#blueButton"` ist ein CSS-Selektor und bezeichnet das Element mit der ID `blueButton`.

Der Befehl liefert das gefundene HTML-Element zurück. Damit wir es später wiederverwenden können, speichern wir es in einer Variable:

```js
let blueButton = document.querySelector("#blueButton");
```

Von rechts nach links gelesen bedeutet die Zeile:

1. Suche im Dokument nach `#blueButton`.
2. Nimm das gefundene HTML-Element.
3. Speichere es unter dem Namen `blueButton`.

`blueButton` ist danach nicht der Text `"blueButton"`. Die Variable verweist auf das wirkliche HTML-Element im Browser. Mehr dazu lernst du im Kapitel [Variablen](../5-variablen/inhalt).

### Warum wählen wir Auslöser und Ziel aus?

Bei einer Interaktion gibt es oft zwei verschiedene Elemente:

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");
```

- `blueButton` ist der **Auslöser**. Auf dieses Element wird geklickt.
- `spaceScene` ist das **Ziel**. Dieses Element wird verändert.

Auslöser und Ziel können dasselbe Element sein, müssen es aber nicht.

### Events

**Was macht ein Event Listener?**

Ein Event ist ein Ereignis im Browser, zum Beispiel ein Klick oder ein Tastendruck. Ein Event Listener gibt JavaScript den Auftrag, auf ein bestimmtes Ereignis zu warten.

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

Beim Laden der Seite wird die Farbe noch nicht verändert. JavaScript merkt sich zuerst nur den Auftrag:

> Wenn `blueButton` angeklickt wird, führe den Code zwischen `{` und `}` aus.

Erst beim Klick wird dieser Code ausgeführt.

Der JavaScript-Roboter steht also nicht die ganze Zeit vor dem Knopf und fragt nach. Der Event Listener ist wie ein Bewegungsmelder: Er wartet, bis der Klick stattfindet, und gibt dem Roboter dann den vorbereiteten Auftrag.

**Was bedeutet `function()` im Event Listener?**

Das ist eine Funktion. Sie enthält den Code, der beim Event ausgeführt wird. Den genauen Aufbau erklären wir später im Kapitel [Funktionen](../7-funktionen/inhalt).

### HTML Elemente verändern

Ein ausgewähltes HTML-Element besitzt Eigenschaften, die JavaScript verändern kann:

```js
spaceScene.style.backgroundColor = "blue";
```

Mit [`style.backgroundColor`](../9-cheatsheet#html-elemente-bearbeiten) verändern wir die CSS-Hintergrundfarbe. Mit `=` setzen wir den neuen Wert.

Steht dieser Befehl in einem Click Event, ändert sich die Farbe erst beim Klick:

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

Wir können nicht nur die Hintergrundfarbe verändern. Zum Beispiel können wir:

```js
statusText.textContent = "Roboter ist bereit!";
robot.style.width = "150px";
robot.style.borderColor = "yellow";
energy.remove();
```

- [`textContent`](../9-cheatsheet#html-elemente-bearbeiten) verändert den sichtbaren Text.
- [`style.width`](../9-cheatsheet#html-elemente-bearbeiten) verändert die Breite eines Elements.
- [`style.borderColor`](../9-cheatsheet#html-elemente-bearbeiten) verändert seine Rahmenfarbe.
- [`remove()`](../9-cheatsheet#html-elemente-bearbeiten) entfernt ein Element aus der Webseite.

Auch hier setzen wir mit `=` jeweils einen neuen Wert. Welche Eigenschaft wir verändern, hängt davon ab, was auf der Webseite passieren soll.

### Mehrere Dinge gleichzeitig verändern

JavaScript führt die Befehle in einer Funktion von oben nach unten aus:

```js
alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
  robot.style.width = "80px";
});
```

Ein einziger Klick kann deshalb mehrere Veränderungen auslösen. Die verwendeten Befehle findest du bei [Events](../9-cheatsheet#events) und [HTML-Elemente bearbeiten](../9-cheatsheet#html-elemente-bearbeiten) im Cheatsheet.

### Ein HTML-Element entfernen

Mit [`remove()`](../9-cheatsheet#html-elemente-bearbeiten) können wir ein ausgewähltes Element aus der Webseite entfernen:

```js
energy.remove();
```

`remove()` entfernt das Element aus der aktuellen Webseite im Browser. Die ursprüngliche HTML-Datei wird dabei nicht umgeschrieben. Beim Neuladen baut der Browser die Seite wieder aus dem HTML auf. Deshalb erscheint das Element erneut.

### Die Teile einer Interaktion

In unseren Interaktionen begegnen uns immer wieder dieselben Teile:

- **Auslöser auswählen:** Was wird angeklickt?
- **Ziel auswählen:** Was soll sich verändern?
- **Event bestimmen:** Worauf wartet JavaScript?
- **Aktion programmieren:** Was soll passieren?

Diese Teile müssen im Code nicht immer direkt nacheinander stehen. HTML-Elemente werden oft am Anfang der Datei ausgewählt und erst später verwendet. Ein ausgewähltes Element kann ausserdem bei mehreren Interaktionen gebraucht werden.

**Debugging**: Oft kommt es vor, dass einer dieser Teile fehlt oder falsch zusammengesetzt ist.

## Zusammenfassung

HTML und CSS bestimmen, wie die Weltraum-Szene am Anfang aussieht. JavaScript macht sie interaktiv.

Du kannst nun:

- Elemente mit [`document.querySelector(...)`](../9-cheatsheet#html-elemente-auswahlen) auswählen,
- Elemente mit JavaScript [verändern und löschen](../9-cheatsheet#html-elemente-bearbeiten) und
- mit [`addEventListener(...)`](../9-cheatsheet#events) auf Klicks reagieren.

In einem Spiel müssen Bewegung, Tastatur und Kollisionen ständig geprüft werden. Dafür verwenden wir im nächsten Kapitel den Game Loop.

## Beispiel aus dem Alltag: Ein Onlineshop

Die gleichen Schritte werden auch in echten Webseiten verwendet. In einem Onlineshop kann zum Beispiel neben jedem Produkt im Warenkorb ein Knopf **Entfernen** stehen:

1. JavaScript wählt den Entfernen-Knopf und das zugehörige Produkt aus.
2. Ein [`addEventListener(...)`](../9-cheatsheet#events) wartet auf den Klick.
3. Nach dem Klick entfernt [`remove()`](../9-cheatsheet#html-elemente-bearbeiten) das Produkt aus der sichtbaren Liste.
4. Mit [`textContent`](../9-cheatsheet#html-elemente-bearbeiten) kann JavaScript danach die angezeigte Anzahl der Produkte aktualisieren.

Das Thema ist anders als beim Weltraum-Roboter, aber das Muster bleibt gleich: **Elemente auswählen, auf ein Event warten und eine Aktion ausführen.**

👉 Weiter zu den [Aufgaben](./aufgaben)
