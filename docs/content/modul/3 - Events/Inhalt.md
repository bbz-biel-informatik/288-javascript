# 3 - Events

Im letzten Kapitel haben deine Veränderungen immer sofort beim Laden der Seite stattgefunden. Jetzt sorgen wir dafür, dass sie erst dann passieren, **wenn** die Benutzerin etwas tut: einen Knopf anklickt oder eine Taste drückt.

Dafür brauchen wir **Events**.

## Lernziele

Nach diesem Kapitel kannst du:

- erklären, was ein JavaScript-Event ist und wofür man es einsetzt,
- auf einen Mausklick reagieren,
- auf einen Tastendruck reagieren,
- den Unterschied zwischen Klick- und Tastatur-Events erklären und
- selber eine Interaktion programmieren: «Wenn auf X geklickt wird, soll Y passieren.»

Die verwendeten Befehle findest du im Cheatsheet:

- [Events](../11-cheatsheet#events)
- [HTML-Elemente auswählen](../11-cheatsheet#html-elemente-auswahlen)
- [HTML-Elemente bearbeiten](../11-cheatsheet#html-elemente-bearbeiten)

## Theorie: Auf Ereignisse reagieren

### Was ist ein Event?

Ein **Event** ist ein Ereignis im Browser. Beispiele:

- Jemand klickt auf einen Knopf.
- Jemand drückt eine Taste.
- Jemand bewegt die Maus.

Der Browser merkt diese Ereignisse selber. Wir müssen ihm nur sagen, bei welchem Ereignis er welchen Code ausführen soll.

### Was macht ein Event Listener?

Ein Event Listener ist ein Auftrag an JavaScript: «Warte auf dieses Ereignis und führe danach diesen Code aus.»

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

Wir lesen diesen Code so:

> Wenn `blueButton` angeklickt wird, färbe `spaceScene` blau.

Wichtig ist der Zeitpunkt. Beim Laden der Seite wird die Farbe **noch nicht** verändert. JavaScript merkt sich zuerst nur den Auftrag. Erst beim Klick wird der Code zwischen `{` und `}` ausgeführt.

<details>
<summary>Analogie: Der Bewegungsmelder</summary>

Unser kleiner JavaScript-Roboter steht nicht die ganze Zeit vor dem Knopf und fragt: «Wurde schon geklickt? Wurde schon geklickt?»

Der Event Listener ist eher wie ein Bewegungsmelder: Er wird einmal montiert und wartet. Sobald der Klick passiert, gibt er dem Roboter den vorbereiteten Auftrag.

</details>

### Die vier Teile von `addEventListener(...)`

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

| Teil                               | Bedeutung                               |
| ---------------------------------- | --------------------------------------- |
| `blueButton`                       | Der **Auslöser**: Worauf wird geklickt? |
| `addEventListener(...)`            | Der Auftrag: Warte auf ein Ereignis.    |
| `"click"`                          | Das **Event**: Worauf wird gewartet?    |
| `spaceScene.style.backgroundColor` | Die **Aktion**: Was soll passieren?     |

Achte auf das Ende: `});` Hier werden eine geschweifte Klammer, eine runde Klammer und ein Semikolon geschlossen. Das vergisst man am Anfang leicht.

### Auslöser und Ziel sind oft zwei Elemente

Bei einer Interaktion gibt es meistens zwei verschiedene Elemente:

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

- `blueButton` ist der **Auslöser**. Auf dieses Element wird geklickt.
- `spaceScene` ist das **Ziel**. Dieses Element wird verändert.

Beide müssen mit [`document.querySelector(...)`](../11-cheatsheet#html-elemente-auswahlen) ausgewählt werden, genau wie im Kapitel [HTML-Elemente auswählen und verändern](../2-html-elemente-auswaehlen-und-veraendern/inhalt). Auslöser und Ziel können dasselbe Element sein, müssen es aber nicht.

### Was bedeutet `function()` im Event Listener?

Das ist eine Funktion. Sie ist die Verpackung für den Code, der beim Event ausgeführt werden soll. Alles zwischen `{` und `}` gehört zu dieser Verpackung.

Den genauen Aufbau von Funktionen schauen wir im Kapitel [Funktionen](../8-funktionen/inhalt) an. Für jetzt genügt: Was passieren soll, schreiben wir zwischen die geschweiften Klammern.

### Mehrere Dinge gleichzeitig verändern

In der Funktion dürfen beliebig viele Befehle stehen. JavaScript führt sie von oben nach unten aus:

```js
alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
  robot.style.width = "80px";
});
```

Ein einziger Klick löst hier drei Veränderungen aus.

### Mehrere Knöpfe, mehrere Event Listener

Jeder Knopf braucht seinen eigenen Event Listener:

```js
alarmButton.addEventListener("click", function () {
  statusText.textContent = "Alarm!";
});

statusButton.addEventListener("click", function () {
  statusText.textContent = "Alles in Ordnung";
});
```

Welcher Code ausgeführt wird, hängt davon ab, welcher Knopf angeklickt wurde.

### Tastatur-Events

Bisher haben wir auf Klicks gewartet. Genauso können wir auf einen **Tastendruck** warten. Dafür verwenden wir das Event `"keydown"`:

```js
document.addEventListener("keydown", function (event) {
  statusText.textContent = "Es wurde eine Taste gedrückt";
});
```

Der Unterschied zum Klick-Event ist der Auslöser:

| Event       | Auslöser    | Typische Verwendung        |
| ----------- | ----------- | -------------------------- |
| `"click"`   | ein Element | Knöpfe im Steuerpult       |
| `"keydown"` | `document`  | Steuerung mit der Tastatur |

Warum `document`? Eine Taste wird nicht «auf einem Knopf» gedrückt, sondern irgendwo auf der Seite. Darum hängen wir das Tastatur-Event an die ganze Seite, also an `document`.

In den runden Klammern steht bei Tastatur-Events `function (event)`. Damit bekommt der Code Informationen über das Ereignis, zum Beispiel **welche** Taste gedrückt wurde:

```js
document.addEventListener("keydown", function (event) {
  statusText.textContent = event.key;
});
```

`event.key` ist der Name der gedrückten Taste, zum Beispiel `"a"` oder `"ArrowRight"`. Um nur auf **eine bestimmte** Taste zu reagieren, brauchen wir eine Entscheidung mit `if`. Das lernst du im Kapitel [If-Else](../5-if-else/inhalt). Eine fertige Vorlage dazu steht im Cheatsheet bei [Events](../11-cheatsheet#events).

### Die Teile einer Interaktion

Bei jeder Interaktion stellen wir uns dieselben vier Fragen:

- **Auslöser:** Worauf wird geklickt oder welche Taste wird gedrückt?
- **Ziel:** Was soll sich verändern?
- **Event:** Worauf wartet JavaScript, `"click"` oder `"keydown"`?
- **Aktion:** Was genau soll passieren?

Diese Teile müssen im Code nicht direkt nacheinander stehen. HTML-Elemente werden oft am Anfang der Datei ausgewählt und erst weiter unten verwendet. Ein ausgewähltes Element kann ausserdem in mehreren Interaktionen gebraucht werden.

**Debugging:** Funktioniert eine Interaktion nicht, fehlt meistens einer dieser vier Teile oder er ist falsch geschrieben. Gehe die Fragen der Reihe nach durch.

## Zusammenfassung

Du kannst nun:

- mit [`addEventListener("click", ...)`](../11-cheatsheet#events) auf einen Klick reagieren,
- mit [`document.addEventListener("keydown", ...)`](../11-cheatsheet#events) auf einen Tastendruck reagieren und
- in einem Event Listener mehrere HTML-Elemente [verändern oder löschen](../11-cheatsheet#html-elemente-bearbeiten).

Merke dir das Muster:

> Element auswählen → auf ein Event warten → Aktion ausführen.

In einem Spiel genügt das noch nicht. Dort müssen Bewegung und Kollisionen ständig geprüft werden, nicht nur bei einem Klick. Dafür verwenden wir im nächsten Kapitel den [Game Loop](../4-game-loop/inhalt).

## Beispiel aus dem Alltag: Ein Onlineshop

Die gleichen Schritte werden auch in echten Webseiten verwendet. In einem Onlineshop steht neben jedem Produkt im Warenkorb ein Knopf **Entfernen**:

1. JavaScript wählt den Entfernen-Knopf und das zugehörige Produkt aus.
2. Ein [`addEventListener(...)`](../11-cheatsheet#events) wartet auf den Klick.
3. Nach dem Klick entfernt [`remove()`](../11-cheatsheet#html-elemente-bearbeiten) das Produkt aus der sichtbaren Liste.
4. Mit [`textContent`](../11-cheatsheet#html-elemente-bearbeiten) aktualisiert JavaScript danach die angezeigte Anzahl.

Das Thema ist anders als beim Weltraum-Roboter, das Muster bleibt gleich: **Elemente auswählen, auf ein Event warten und eine Aktion ausführen.**

👉 Weiter zu den [Aufgaben](./aufgaben)
