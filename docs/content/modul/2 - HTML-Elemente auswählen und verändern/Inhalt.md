# 2 - HTML-Elemente auswählen und verändern

Im ersten Kapitel hast du Code kopiert, der auf einen Klick reagiert. In diesem Kapitel schauen wir den wichtigsten Teil davon genau an: **Wie findet JavaScript ein HTML-Element und wie verändert es dieses Element?**

## Lernziele

Nach diesem Kapitel kannst du:

- ein HTML-Element mit JavaScript auswählen,
- ein HTML-Element mit JavaScript verändern,
- ein HTML-Element mit JavaScript löschen.

Die verwendeten Befehle findest du im Cheatsheet:

- [HTML-Elemente auswählen](../11-cheatsheet#html-elemente-auswahlen)
- [HTML-Elemente bearbeiten](../11-cheatsheet#html-elemente-bearbeiten)

## Theorie: HTML-Elemente verändern

### HTML, CSS und JavaScript haben verschiedene Aufgaben

Weisst du noch, wie wir HTML Eelemente verändern? Genau: Mit CSS. Hier ein Beispiel:

Diese CSS-Regel macht die Weltraum-Szene blau.

```css
#spaceScene {
  background-color: blue;
}
```

<details>
<summary>Kurze Auffrischung: Wie ist eine CSS-Regel aufgebaut?</summary>

Jede CSS-Regel besteht aus drei Teilen:

```css
#spaceScene {
  background-color: blue;
}
```

| Teil               | Name           | Bedeutung                                                 |
| ------------------ | -------------- | --------------------------------------------------------- |
| `#spaceScene`      | Selektor       | **Welches** Element ist gemeint?                          |
| `background-color` | Eigenschaft    | **Was** soll verändert werden?                            |
| `blue`             | Wert           | **Wie** soll es aussehen?                                 |

Dazu kommen noch die Satzzeichen:

- Die geschweiften Klammern `{ }` umschliessen alles, was für dieses Element gilt.
- Der Doppelpunkt `:` trennt die Eigenschaft von ihrem Wert.
- Das Semikolon `;` beendet eine Zeile.

Beim Selektor gilt dieselbe Regel wie später in JavaScript:

- `#spaceScene` meint das Element mit der **ID** `spaceScene`.
- `.space-scene` meint alle Elemente mit der **Klasse** `space-scene`.

Diese drei Eigenschaften kommen in diesem Kapitel immer wieder vor:

```css
#spaceScene {
  background-color: blue; /* Hintergrundfarbe */
  color: white; /* Textfarbe */
  width: 200px; /* Breite */
}
```

Wichtig für den Vergleich mit JavaScript: In CSS heisst die Eigenschaft `background-color` mit Bindestrich, in JavaScript schreibt man sie als `backgroundColor` mit grossem C. Mehr dazu weiter unten.

</details>

Diese JavaScript-Zeile macht dasselbe, aber mit Javascript:

```js
let spaceScene = document.querySelector("#spaceScene");
spaceScene.style.backgroundColor = "blue";
```

Kurz gesagt, wählen wir auf der ersten Zeile ein Element aus und verändern den Style in der nächsten Zeile. Das ist das Grundmuster von jeder Veränderung, welche wir machen.

**Learning by doing.**

Wenn dir die Theorie unten zu lang ist, gehe direkt zu den Aufgaben 1-5 in diesem Kapitel und komme dann zurück, um die Hintergründe anzuschauen.

### Jede Veränderung hat zwei Schritte

Fast jede Aufgabe in diesem Kapitel folgt demselben Muster:

```js
// Schritt 1: Element auswählen
let spaceScene = document.querySelector("#spaceScene");

// Schritt 2: Element verändern
spaceScene.style.backgroundColor = "blue";
```

> **Zuerst auswählen, dann verändern.** JavaScript kann ein Element nicht verändern, wenn es nicht weiss, welches Element gemeint ist.

### Was bedeuten die einzelnen Teile?

**`let spaceScene = ...`**

Das hier ist eine Variable. Später kommen mehr Details dazu, für jetzt müssen wir wissen: `let spaceScene = ...` benannt unser gefundenes Element, damit wir das in der nächsten zeile benutzen können. Du siehst dort `spaceScene.(...)` Wir benutzen genau dasselbe wort hier. Damit weiss der Computer, welches Element gemeint ist. Doch welches element ist genau gemeint? Dazu müssen wir folgendes erklären:

**`... = document.querySelector("#spaceScene")`**

Das Ziel ist es, an Javascript zu zeigen, welches HTML Element wir meinen und verändern wollen. Auf einer Webseite gibt es viele Elemente, was wir aber hier wollen ist das Element mit der ID 'spaceScene'. Das HTML element sieht folgendermassen aus:

```html
<section id="spaceScene" class="space-scene"></section>
```

Das `#` bedeutet: Das Element mit der ID. Das ist dasselbe wie in CSS. Wir könnten auch schreiben `.spaceScene`. Meist wird aber in Javascript mit der ID gearbeitet, da wir oft genau ein Element ansprechen wollen.

Der ganze befehl `let spaceScene = document.querySelector("#spaceScene");` bedeutet also:

1. Suche im Dokument nach `#spaceScene`.
2. Nimm das gefundene HTML-Element.
3. Speichere es unter dem Namen `spaceScene`.

**`spaceScene.style.backgroundColor = "blue";`**

Kommen wir nun zur nächsten Zeile. Hier **verändern** wir das HTML Element. Wir sagen also 'Das Element spacescene soll einen blauen Hintergrund haben'. Alles, was wir mit CSS verändern können, können wir auch mit Javascript verändern:

```js
spaceScene.style.backgroundColor = "red"; // Mache den Hintergrund rot
statusText.textContent = "Roboter ist bereit!"; // Setze einen Text
robot.style.width = "200px"; // Mache den Roboter breiter
energy.style.borderColor = "yellow"; // Mache einen gelben Rand
```

Alles, was nach `style.` steht, ist eine CSS-Eigenschaft. In CSS schreibt man `background-color`, in JavaScript schreibt man `backgroundColor`: kein Bindestrich, dafür ein grosser Buchstabe.

| CSS              | JavaScript              |
| ---------------- | ----------------------- |
| background-color | `style.backgroundColor` |
| width            | `style.width`           |
| border-color     | `style.borderColor`     |

### Mehrere Elemente verändern

JavaScript führt die Befehle in `script.js` von oben nach unten aus. Du kannst also beliebig viele Veränderungen hintereinander schreiben:

```js
let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");

spaceScene.style.backgroundColor = "red";
statusText.textContent = "Alarm!";
robot.style.width = "80px";
```

Eine übersichtliche Reihenfolge ist: zuerst alle Elemente auswählen, danach alle Veränderungen. Das ist standard in Javascript

### Ein HTML-Element löschen

Mit [`remove()`](../11-cheatsheet#html-elemente-bearbeiten) entfernen wir ein ausgewähltes Element aus der Webseite:

```js
let energy = document.querySelector("#energy");

energy.remove();
```

`remove()` ist kein Wert, den wir setzen. Darum steht hier kein `=`, sondern die runden Klammern eines Befehls.

`remove()` entfernt das Element aus der Webseite im Browser. Die Datei `index.html` wird dabei nicht verändert. Beim Neuladen baut der Browser die Seite wieder aus dem HTML auf, und das Element ist wieder da.

### Wann läuft dieser Code?

Alles, was in `script.js` steht, wird beim Laden der Seite ausgeführt, von oben nach unten. Die Veränderungen aus diesem Kapitel passieren deshalb sofort.

Das ist für das Üben praktisch: Du speicherst, lädst die Seite neu und siehst direkt, ob dein Code funktioniert hat.

Für ein Spiel ist das zu wenig. Dort soll etwas passieren, **wenn** der Benutzer klickt oder eine Taste drückt. Genau das machen wir im nächsten Kapitel mit [Events](../3-events/inhalt).

## Zusammenfassung

HTML und CSS bestimmen, wie die Weltraum-Szene am Anfang aussieht. JavaScript kann sie danach verändern.

Du kannst nun:

- Elemente mit [`document.querySelector(...)`](../11-cheatsheet#html-elemente-auswahlen) auswählen,
- Eigenschaften wie [`style.backgroundColor`, `textContent` oder `style.width`](../11-cheatsheet#html-elemente-bearbeiten) verändern und
- Elemente mit [`remove()`](../11-cheatsheet#html-elemente-bearbeiten) löschen.

Merke dir vor allem das Muster:

> **Auswählen, dann verändern.**

## Beispiel aus dem Alltag: Ein Onlineshop

Die gleichen zwei Schritte werden auch in echten Webseiten verwendet. In einem Onlineshop steht neben jedem Produkt im Warenkorb eine Anzahl:

1. JavaScript wählt mit [`document.querySelector(...)`](../11-cheatsheet#html-elemente-auswahlen) das Element mit der Anzahl aus.
2. Mit [`textContent`](../11-cheatsheet#html-elemente-bearbeiten) schreibt es die neue Anzahl hinein.
3. Soll ein Produkt aus der Liste verschwinden, entfernt [`remove()`](../11-cheatsheet#html-elemente-bearbeiten) das Produkt-Element.

Das Thema ist anders als beim Weltraum-Roboter, aber das Muster bleibt gleich: **Element auswählen und verändern.**

👉 Weiter zu den [Aufgaben](./aufgaben)
