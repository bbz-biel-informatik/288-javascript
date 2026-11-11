# 2 - Aufgaben: HTML-Elemente auswählen und verändern

👉 [Projektstand nach Kapitel 1 herunterladen](/assets/zips/space-robot-loesung-1.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

**Wo schreibe ich den Code hin?** Schreibe deinen neuen Code in `script.js` **oberhalb** des Click-Codes aus Kapitel 1.

## 🎯 2.1 – Die Weltraum-Szene umbauen

Fünf Aufträge, alle nach demselben Muster: **auswählen, verändern.** Schau bei Bedarf nochmals bei den [zwei Schritten](./inhalt#jede-veranderung-hat-zwei-schritte) in der Theorie nach.

Die Befehle dazu findest du alle im Cheatsheet bei [HTML-Elemente bearbeiten](../11-cheatsheet#html-elemente-bearbeiten).

### a) Das Weltall einfärben

Färbe die Weltraum-Szene beim Laden der Seite gelb. Sie hat die ID `spaceScene`.

<details>
<summary>Tipp: Codegerüst</summary>

```js
let spaceScene = document.querySelector("________");

spaceScene.style.backgroundColor = "________";
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let spaceScene = document.querySelector("#spaceScene");

spaceScene.style.backgroundColor = "yellow";
```

Die Szene ist nun beim Laden gelb. Klickst du auf den Licht-Knopf, wird sie trotzdem noch blau: Das ist der Code aus Kapitel 1.

</details>

### b) Den Statustext ändern

::: tip Du musst nichts löschen
Du darfst deinen bisherigen Code einfach stehen lassen – auch den aus Kapitel 1. Jede neue Aufgabe schreibst du **unterhalb** der vorherigen dazu, aber immer noch oberhalb des Click-Codes. Am Ende steht alles untereinander in derselben Datei, und das ist genau richtig so.

Auch Elemente, die du schon einmal mit `querySelector(...)` ausgewählt hast, musst du nicht nochmals auswählen. Einmal auswählen genügt.
:::

Im Steuerpult gibt es ein Text-Element mit der ID `statusText`. Schreibe mit JavaScript den Text `Systeme werden geladen...` hinein.

Verwende dafür [`textContent`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp: Codegerüst</summary>

```js
let statusText = document.querySelector("________");

statusText.textContent = "________";
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let statusText = document.querySelector("#statusText");

statusText.textContent = "Systeme werden geladen...";
```

</details>

### c) Den Roboter vergrössern

Der Roboter hat die ID `robot`. Mache ihn `250px` breit.

Verwende dafür [`style.width`](../11-cheatsheet#html-elemente-bearbeiten). Vergiss die Einheit `px` nicht, sie gehört in die Anführungszeichen.

<details>
<summary>Lösung anzeigen</summary>

```js
let robot = document.querySelector("#robot");

robot.style.width = "250px";
```

</details>

### d) Den Hintergrundplaneten einfärben

Der Planet im Hintergrund hat die ID `backgroundPlanet`. Setze seine Hintergrundfarbe auf `green`.

<details>
<summary>Lösung anzeigen</summary>

```js
let backgroundPlanet = document.querySelector("#backgroundPlanet");

backgroundPlanet.style.backgroundColor = "green";
```

</details>

### e) Ein Element mehrfach verändern

Verändere an der Energie-Kiste `energy` **drei** Eigenschaften auf einmal:

- Breite: `200px`
- Rahmenfarbe: `red`
- Hintergrundfarbe: `black`

Du brauchst dafür nur **ein** `querySelector(...)`. Lies bei Bedarf nach, wie man [mehrere Elemente verändert](./inhalt#mehrere-elemente-verandern).

<details>
<summary>Lösung anzeigen</summary>

```js
let energy = document.querySelector("#energy");

energy.style.width = "200px";
energy.style.borderColor = "red";
energy.style.backgroundColor = "black";
```

</details>

## 🎯 2.2 – Die Energie löschen

Lösche die Energie-Kiste mit der ID `energy` aus der Webseite.

Lies bei Bedarf nochmals, wie man [ein HTML-Element löscht](./inhalt#ein-html-element-loschen). Verwende [`remove()`](../11-cheatsheet#html-elemente-bearbeiten).

Achtung auf die Reihenfolge: Der Löschbefehl gehört **unter** deinen Code aus Aufgabe 2.1 e. JavaScript arbeitet die Zeilen von oben nach unten ab. Zuerst wird die Kiste also umgefärbt, dann verschwindet sie.

<details>
<summary>Lösung anzeigen</summary>

```js
// energy hast du in Aufgabe 2.1 e schon ausgewählt
energy.remove();
```

</details>

Beantworte danach diese Frage für dich:

> Du lädst die Seite neu. Ist die Energie-Kiste weg oder wieder da? Warum?

<details>
<summary>Antwort anzeigen</summary>

Sie ist wieder weg. Der Browser baut die Seite beim Neuladen zwar neu aus `index.html` auf, die Kiste ist also zuerst wieder da. `remove()` verändert nur die Seite im Browser, nicht die HTML-Datei. Danach läuft aber dein JavaScript erneut und löscht die Kiste sofort wieder.

</details>

## 🎯 2.3 – Fehlersuche

In diesem Code sind drei Fehler. Finde sie, ohne den Code auszuprobieren.

```js
let robot = document.querySelector("robot");

robot.style.background-color = "red";
robot.style.width = 300;
```

<details>
<summary>Lösung anzeigen</summary>

1. Im Selektor fehlt das `#`. Richtig ist `document.querySelector("#robot")`.
2. In JavaScript gibt es keinen Bindestrich. Richtig ist `robot.style.backgroundColor`.
3. Bei der Breite fehlen Einheit und Anführungszeichen. Richtig ist `robot.style.width = "300px"`.

```js
let robot = document.querySelector("#robot");

robot.style.backgroundColor = "red";
robot.style.width = "300px";
```

</details>

Im nächsten Kapitel sorgen wir dafür, dass diese Veränderungen erst auf Knopfdruck passieren: [Events](../3-events/inhalt).
