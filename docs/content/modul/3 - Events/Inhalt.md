# 3 - Events

Bis anhin haben wir "nur" Elemente mit JavaScript verändert, und zwar immer sofort beim Laden der Seite. Nun machen wir den nächsten Schritt und machen unsere Website **interaktiv**. Wir wollen Dinge verändern, wenn etwas auf der Seite passiert: ein Klick, ein Dreh am Mausrad, die Maus fährt über ein Element.

Dafür brauchen wir **Events**.

## Lernziele

Nach diesem Kapitel kannst du:

- erklären, was ein JavaScript-Event ist und wofür man es einsetzt,
- auf einen Mausklick reagieren,
- auf das Mausrad reagieren,
- auf die Maus über einem Element reagieren,
- selber eine Interaktion programmieren: «Wenn auf X geklickt wird, soll Y passieren.»

Die verwendeten Befehle findest du im Cheatsheet:

- [Events](../11-cheatsheet#events)
- [HTML-Elemente auswählen](../11-cheatsheet#html-elemente-auswahlen)
- [HTML-Elemente bearbeiten](../11-cheatsheet#html-elemente-bearbeiten)

## Theorie: Auf Ereignisse reagieren

### Was ist ein Event?

Ein **Event** ist ein Ereignis im Browser. Beispiele:

- Jemand klickt auf einen Knopf.
- Jemand dreht mit dem Mausrad über einem Bild.
- Jemand fährt mit der Maus über ein Element.
- ... mehr events hier: [W3schools](https://www.w3schools.com/tags/ref_eventattributes.asp)

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

### Drei Events, ein Muster

Ein Klick ist nicht das einzige Ereignis, auf das wir warten können. Wir schauen in diesem Kapitel drei Events an:

| Event         | Wann passiert es?                    | Typische Verwendung                            |
| ------------- | ------------------------------------ | ---------------------------------------------- |
| `"click"`     | Das Element wird angeklickt.         | Knöpfe im Steuerpult                           |
| `"wheel"` | Das Mausrad wird über dem Element gedreht. | Zoomen, etwas durchblättern |
| `"mouseover"` | Die Maus fährt über das Element.     | Etwas hervorheben, einen Hinweis zeigen        |

Und nun das Wichtigste an diesem Kapitel:

> **Das Muster bleibt immer gleich. Es ändert sich nur das Wort in den Anführungszeichen.**

```js
// Bei einem Klick
alarmButton.addEventListener("click", function () {
  statusText.textContent = "Alarm!";
});

// Beim Drehen am Mausrad
spaceScene.addEventListener("wheel", function () {
  spaceScene.style.backgroundColor = randomColor();
});

// Wenn die Maus darüber fährt
robot.addEventListener("mouseover", function () {
  statusText.textContent = "Du berührst den Roboter";
});
```

Dreimal derselbe Aufbau: Element, `addEventListener`, Event-Name, Funktion mit der Aktion. Wenn du `"click"` verstanden hast, kannst du alle Events.

::: tip Die Event-Namen sind fest vorgegeben
`"click"`, `"wheel"` und `"mouseover"` sind englische Namen, die du nicht selber erfinden kannst. `"klick"` oder `"mausrad"` funktionieren nicht. Und: JavaScript meldet dabei **keinen Fehler**, es passiert einfach nichts. Darum lohnt sich ein Blick ins [Cheatsheet](../11-cheatsheet#events), wenn eine Interaktion nicht reagiert.
:::

Beim Mausrad merkt sich JavaScript nur: «Es wurde gedreht.» Ob nach oben oder nach unten gedreht wurde, können wir noch nicht unterscheiden. Dafür brauchst du eine Entscheidung mit `if`, die lernst du im Kapitel [If-Else](../5-if-else/inhalt).

[`randomColor()`](/jsgame/3-framework-docs#randomcolor) im Beispiel oben ist eine fertige Funktion aus dem Game Framework. Sie gibt dir bei jedem Aufruf eine zufällige Farbe zurück. Du musst sie nicht selber schreiben, nur aufrufen und das Ergebnis einsetzen.

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

### Die Teile einer Interaktion

Bei jeder Interaktion stellen wir uns dieselben vier Fragen:

- **Auslöser:** Auf welches Element passiert etwas?
- **Ziel:** Was soll sich verändern?
- **Event:** Worauf wartet JavaScript, `"click"`, `"wheel"` oder `"mouseover"`?
- **Aktion:** Was genau soll passieren?

Diese Teile müssen im Code nicht direkt nacheinander stehen. HTML-Elemente werden oft am Anfang der Datei ausgewählt und erst weiter unten verwendet. Ein ausgewähltes Element kann ausserdem in mehreren Interaktionen gebraucht werden.

**Debugging:** Funktioniert eine Interaktion nicht, fehlt meistens einer dieser vier Teile oder er ist falsch geschrieben. Gehe die Fragen der Reihe nach durch.

## Zusammenfassung

Du kannst nun mit [`addEventListener(...)`](../11-cheatsheet#events) auf drei Ereignisse reagieren:

- `"click"` – ein Klick auf ein Element,
- `"wheel"` – ein Dreh am Mausrad über einem Element,
- `"mouseover"` – die Maus fährt über ein Element.

In einem Event Listener kannst du beliebig viele HTML-Elemente [verändern oder löschen](../11-cheatsheet#html-elemente-bearbeiten).

Merke dir das Muster:

> Element auswählen → auf ein Event warten → Aktion ausführen.

## Beispiel aus dem Alltag: Ein Onlineshop

Die gleichen Schritte werden auch in echten Webseiten verwendet. In einem Onlineshop steht neben jedem Produkt im Warenkorb ein Knopf **Entfernen**:

1. JavaScript wählt den Entfernen-Knopf und das zugehörige Produkt aus.
2. Ein [`addEventListener(...)`](../11-cheatsheet#events) wartet auf den Klick.
3. Nach dem Klick entfernt [`remove()`](../11-cheatsheet#html-elemente-bearbeiten) das Produkt aus der sichtbaren Liste.
4. Mit [`textContent`](../11-cheatsheet#html-elemente-bearbeiten) aktualisiert JavaScript danach die angezeigte Anzahl.

Das Thema ist anders als beim Weltraum-Roboter, das Muster bleibt gleich: **Elemente auswählen, auf ein Event warten und eine Aktion ausführen.**

👉 Weiter zu den [Aufgaben](./aufgaben)
