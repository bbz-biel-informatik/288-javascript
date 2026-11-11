# 2 - Aufgaben: HTML-Elemente auswählen und verändern

👉 [Projektstand nach Kapitel 1 herunterladen](/assets/zips/space-robot-loesung-1.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

In diesem Kapitel üben wir nur zwei Schritte, dafür viele Male:

> **Zuerst auswählen, dann verändern.**

Klicks brauchen wir hier noch nicht. Dein Code wird direkt beim Laden der Seite ausgeführt. **Speichern, Seite neu laden, schauen.**

**Wo schreibe ich den Code hin?** Schreibe deinen neuen Code in `script.js` **oberhalb** des Click-Codes aus Kapitel 1. Diesen Code lassen wir stehen, wir brauchen ihn im nächsten Kapitel wieder

## 🎯 2.1 – Das Weltall einfärben

Färbe die Weltraum-Szene beim Laden der Seite gelb. Sie hat die ID `spaceScene`.

Gehe in zwei Schritten vor, wie bei den [zwei Schritten](./inhalt#jede-veranderung-hat-zwei-schritte) in der Theorie:

<details>
<summary>Lösung anzeigen</summary>

```js
let spaceScene = document.querySelector("#spaceScene");

spaceScene.style.backgroundColor = "yellow";
```

Die Szene ist nun beim Laden gelb. Klickst du auf den Licht-Knopf, wird sie trotzdem noch blau: Das ist der Code aus Kapitel 1.

## 🎯 2.2 – Das Weltall soll nun rot sein.

Färbe die Weltraum-Szene beim Laden der Seite gelb. Sie hat die ID `spaceScene`.

Gehe in zwei Schritten vor, wie bei den [zwei Schritten](./inhalt#jede-veranderung-hat-zwei-schritte) in der Theorie:

<details>
<summary>Lösung anzeigen</summary>

```js
let spaceScene = document.querySelector("#spaceScene");

spaceScene.style.backgroundColor = "yellow";
```

Die Szene ist nun beim Laden gelb. Klickst du auf den Licht-Knopf, wird sie trotzdem noch blau: Das ist der Code aus Kapitel 1.

</details>

## 🎯 2.2 – Den Statustext ändern

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

## 🎯 2.3 – Den Roboter vergrössern

Der Roboter hat die ID `robot`. Mache ihn `250px` breit.

Verwende dafür [`style.width`](../11-cheatsheet#html-elemente-bearbeiten). Vergiss die Einheit `px` nicht, sie gehört in die Anführungszeichen.

<details>
<summary>Lösung anzeigen</summary>

```js
let robot = document.querySelector("#robot");

robot.style.width = "250px";
```

</details>

## 🎯 2.4 – Trainingsrunde

Jetzt das gleiche Muster noch einige Male. Alle Aufgaben funktionieren genau wie 2.1 bis 2.3: **auswählen, verändern.**

Erledige alle sechs Aufträge in deinem `script.js`:

| Nr. | Element (ID)       | Was verändern?                       |
| --- | ------------------ | ------------------------------------ |
| a   | `gameStatus`       | Text auf `Bereit zum Start` setzen   |
| b   | `backgroundPlanet` | Hintergrundfarbe auf `green` setzen  |
| c   | `spaceScene`       | Rahmenfarbe auf `white` setzen       |
| d   | `energy`           | Hintergrundfarbe auf `purple` setzen |
| e   | `robot`            | Breite auf `120px` setzen            |
| f   | `statusText`       | Text auf deinen eigenen Namen setzen |

Die Befehle dazu sind alle im Cheatsheet bei [HTML-Elemente bearbeiten](../11-cheatsheet#html-elemente-bearbeiten) aufgelistet.

<details>
<summary>Tipp: Welche Eigenschaft brauche ich?</summary>

- Text verändern: `textContent`
- Hintergrundfarbe verändern: `style.backgroundColor`
- Rahmenfarbe verändern: `style.borderColor`
- Breite verändern: `style.width`

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
// Elemente auswählen (spaceScene, statusText und robot hast du schon)
let gameStatus = document.querySelector("#gameStatus");
let backgroundPlanet = document.querySelector("#backgroundPlanet");
let energy = document.querySelector("#energy");

// Elemente verändern
gameStatus.textContent = "Bereit zum Start";
backgroundPlanet.style.backgroundColor = "green";
spaceScene.style.borderColor = "white";
energy.style.backgroundColor = "purple";
robot.style.width = "120px";
statusText.textContent = "Nicolas";
```

Achtung: `spaceScene`, `statusText` und `robot` hast du bereits in den Aufgaben 2.1 bis 2.3 ausgewählt. Du brauchst sie nicht ein zweites Mal auszuwählen.

</details>

## 🎯 2.5 – Ein Element mehrfach verändern

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

## 🎯 2.6 – Die Energie löschen

Lösche die Energie-Kiste mit der ID `energy` aus der Webseite.

Lies bei Bedarf nochmals, wie man [ein HTML-Element löscht](./inhalt#ein-html-element-loschen). Verwende [`remove()`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Lösung anzeigen</summary>

```js
let energy = document.querySelector("#energy");

energy.remove();
```

</details>

Beantworte danach diese Frage für dich:

> Du lädst die Seite neu. Ist die Energie-Kiste weg oder wieder da? Warum?

<details>
<summary>Antwort anzeigen</summary>

Sie ist wieder da. Der Browser baut die Seite beim Neuladen neu aus `index.html` auf. `remove()` verändert nur die Seite im Browser, nicht die HTML-Datei. Danach läuft dein JavaScript erneut und löscht die Kiste wieder.

</details>

## 🎯 2.7 – Den Hintergrundplaneten zerstören

Lösche nun auch den Planeten im Hintergrund. Er hat die ID `backgroundPlanet`.

## 🎯 2.8 – Mehrere Sterne löschen

Die Sterne in der Szene haben keine ID, sondern die Klassen `star-1` bis `star-5`. In `querySelector(...)` verwenden wir die gleichen Selektoren wie in CSS: Eine Klasse schreibt man mit einem Punkt davor.

Lösche die Sterne `star-1` und `star-2`.

<details>
<summary>Tipp</summary>

```js
let star1 = document.querySelector(".star-1");
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let star1 = document.querySelector(".star-1");
let star2 = document.querySelector(".star-2");

star1.remove();
star2.remove();
```

</details>

## 🎯 2.9 – Dein eigener Nachtmodus

Baue einen Nachtmodus für die Weltraum-Szene. Er soll direkt beim Laden der Seite aktiv sein.

Dein Nachtmodus soll:

- mindestens **vier** HTML-Elemente verändern und
- einen passenden Text in `statusText` schreiben.

Mögliche Ideen: dunkle Szene, kleiner Roboter, dunkler Planet, gelöschte Energie-Kiste.

<details>
<summary>Lösung anzeigen (ein Beispiel)</summary>

```js
let spaceScene = document.querySelector("#spaceScene");
let statusText = document.querySelector("#statusText");
let robot = document.querySelector("#robot");
let backgroundPlanet = document.querySelector("#backgroundPlanet");
let energy = document.querySelector("#energy");

spaceScene.style.backgroundColor = "#05070f";
robot.style.width = "100px";
backgroundPlanet.style.backgroundColor = "#2b2b2b";
energy.style.backgroundColor = "#3b3b3b";
statusText.textContent = "Nachtmodus aktiv";
```

</details>

## 🎯 2.10 – Fehlersuche

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
