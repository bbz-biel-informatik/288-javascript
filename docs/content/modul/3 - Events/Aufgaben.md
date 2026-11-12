# 3 - Aufgaben: Events

👉 [Projektstand nach Kapitel 2 herunterladen](/assets/zips/space-robot-loesung-2.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Denke bei jeder Aufgabe an die [vier Teile einer Interaktion](./inhalt#die-teile-einer-interaktion): Auslöser, Ziel, Event und Aktion.

## 🎯 3.1 – Klick-Events

### a) Alarm einschalten

Wenn der Knopf mit der ID `alarmButton` angeklickt wird, soll die Weltraum-Szene rot werden.

Gehe der Reihe nach vor:

- Wähle den Alarm-Knopf aus.
- Die Weltraum-Szene ist bereits ausgewählt.
- Füge dem Knopf einen Click Event Listener hinzu.
- Verändere darin die Hintergrundfarbe.

<details>
<summary>Tipp: Diese Befehle brauchst du</summary>

Um den Alarm-Knopf auszuwählen:

```js
let alarmButton = document.querySelector("#alarmButton");
```

Verwende danach [`addEventListener(...)`](../11-cheatsheet#events) und [`style.backgroundColor`](../11-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let alarmButton = document.querySelector("#alarmButton");

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
});
```

</details>

### b) Status verändern

Wenn der Knopf `statusButton` angeklickt wird, soll im Element `statusText` der Text `Roboter ist bereit!` erscheinen.

Verwende dafür [`textContent`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp: Codegerüst</summary>

```js
let statusButton = document.querySelector("________");

statusButton.addEventListener("________", function () {
  statusText.textContent = "________";
});
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
let statusButton = document.querySelector("#statusButton");

statusButton.addEventListener("click", function () {
  statusText.textContent = "Roboter ist bereit!";
});
```

</details>

### c) Roboter vergrössern

Wenn der Knopf `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden. Denke wieder an die vier Teile einer Interaktion.

Was du verändern musst, ist [`style.width`](../11-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Lösung anzeigen</summary>

```js
let sizeButton = document.querySelector("#sizeButton");

sizeButton.addEventListener("click", function () {
  robot.style.width = "260px";
});
```

</details>

### d) Energie entfernen

Wenn der Knopf `removeButton` angeklickt wird, soll das Element `energy` aus der Seite verschwinden.

Verwende dafür [`remove()`](../11-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist die Energie wieder da. Das HTML bestimmt den Startzustand der Seite.

<details>
<summary>Lösung anzeigen</summary>

```js
let removeButton = document.querySelector("#removeButton");

removeButton.addEventListener("click", function () {
  energy.remove();
  statusText.textContent = "Energie entladen";
});
```

</details>

### e) Mehrere Dinge gleichzeitig verändern

Erweitere den Alarm-Knopf aus Aufgabe a. Bei einem Klick sollen nun drei Dinge passieren:

- Die Weltraum-Szene wird rot.
- Im `statusText` steht `Planetenalarm`.
- Der Roboter wird `100px` breit.

Lies bei Bedarf nochmals nach, wie man [mehrere Dinge gleichzeitig verändert](./inhalt#mehrere-dinge-gleichzeitig-verandern). Du brauchst dafür **keinen** zweiten Event Listener.

<details>
<summary>Lösung anzeigen</summary>

```js
alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Planetenalarm";
  robot.style.width = "100px";
});
```

</details>

## 🎯 3.2 – Mausrad: Der Sternensprung

Nun das zweite Event: `"wheel"`. Es passiert, wenn man das Mausrad über einem Element dreht. Auf einem Laptop ohne Maus funktioniert es mit zwei Fingern auf dem Trackpad.

Wenn man das Mausrad über der Weltraum-Szene `spaceScene` dreht, soll der Roboter in den Sternensprung gehen:

- Die Szene bekommt eine **zufällige** Farbe.
- Im `statusText` steht `Sternensprung!`.

Für die Zufallsfarbe gibt es eine fertige Funktion im Game Framework: [`randomColor()`](/jsgame/3-framework-docs#randomcolor). Du musst sie nur aufrufen und das Ergebnis einsetzen:

```js
spaceScene.style.backgroundColor = randomColor();
```

Achtung beim Auslöser: Hier ist der Auslöser **kein Knopf**, sondern die Weltraum-Szene selber. Lies bei Bedarf nochmals nach, dass sich nur [der Event-Name ändert](./inhalt#drei-events-ein-muster).

<details>
<summary>Tipp: Codegerüst</summary>

```js
spaceScene.addEventListener("________", function () {
  spaceScene.style.backgroundColor = ________;
  statusText.textContent = "________";
});
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
spaceScene.addEventListener("wheel", function () {
  spaceScene.style.backgroundColor = randomColor();
  statusText.textContent = "Sternensprung!";
});
```

</details>

Dreh nun mehrmals am Mausrad und beantworte diese Fragen für dich:

> Warum ist die Farbe jedes Mal eine andere? Und was passiert, wenn du statt `"wheel"` das Wort `"mausrad"` schreibst?

<details>
<summary>Antwort anzeigen</summary>

`randomColor()` wird bei **jedem** Dreh neu aufgerufen und würfelt jedes Mal eine neue Farbe. Die Zeile steht ja in der Funktion des Event Listeners, und die wird bei jedem Ereignis erneut ausgeführt.

Bei `"mausrad"` passiert gar nichts – und zwar **nie**. Die Event-Namen sind englisch und fest vorgegeben. JavaScript meldet dabei keinen Fehler, es wartet einfach auf ein Ereignis, das es nicht gibt. Das ist ein häufiger Fehler, den man schlecht sieht.

Übrigens: Ob du nach oben oder nach unten drehst, macht keinen Unterschied. Um die Richtung zu unterscheiden, bräuchtest du eine Entscheidung mit `if` aus dem Kapitel [If-Else](../5-if-else/inhalt).

</details>

## 🎯 3.3 – Hover: Den Roboter berühren

Das dritte Event: `"mouseover"`. Es passiert, wenn die Maus über ein Element fährt – ganz ohne Klick.

Wenn die Maus über den Roboter `robot` fährt, soll im `statusText` der Text `Du berührst den Roboter` erscheinen.

Achtung beim Auslöser: Hier ist der Auslöser **kein Knopf**, sondern der Roboter selber.

<details>
<summary>Lösung anzeigen</summary>

```js
robot.addEventListener("mouseover", function () {
  statusText.textContent = "Du berührst den Roboter";
});
```

</details>

<details>
<summary>Zusatz für Schnelle: Den Text wieder zurücksetzen</summary>

Es gibt ein Gegenstück zu `"mouseover"`: Das Event `"mouseout"` passiert, wenn die Maus das Element wieder verlässt. Damit kannst du den Statustext wieder zurücksetzen:

```js
robot.addEventListener("mouseout", function () {
  statusText.textContent = "Roboter wartet auf einen Befehl.";
});
```

Fahre nun mit der Maus hin und her. Der Text wechselt jedes Mal.

</details>

## 🎯 3.4 – Den Roboter bewegen

Bisher haben wir Farben, Texte und Grössen verändert. Jetzt bewegen wir den Roboter – und zwar mit einer fertigen Funktion aus dem Game Framework: [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

```js
moveElement(robot, 20, 0);
```

Das heisst: Verschiebe den Roboter um `20px` nach rechts und um `0px` nach oben.

Bei jedem Klick **auf den Roboter** soll er einen Schritt nach rechts gehen. Hier sind Auslöser und Ziel dasselbe Element: Wir klicken auf den Roboter und verändern den Roboter.

Damit das Verschieben einen klaren Startpunkt hat, gibst du dem Roboter vorher einmal eine Position mit [`setPosition(...)`](/jsgame/3-framework-docs#setposition). Diese Zeile steht **ausserhalb** des Event Listeners, sie läuft also einmal beim Laden der Seite:

```js
setPosition(robot, 300, 85);
```

Mehr zu diesen beiden Funktionen lernst du im Kapitel [Game Loop](../4-game-loop/inhalt).

<details>
<summary>Tipp: Codegerüst</summary>

```js
setPosition(robot, 300, 85);

robot.addEventListener("________", function () {
  moveElement(robot, ________, 0);
});
```

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
setPosition(robot, 300, 85);

robot.addEventListener("click", function () {
  moveElement(robot, 20, 0);
  statusText.textContent = "Roboter marschiert";
});
```

Klicke nun mehrmals auf den Roboter. Er wandert Schritt für Schritt nach rechts.

</details>

Probiere danach aus:

- Was passiert mit `moveElement(robot, -20, 0)`?
- Was passiert mit `moveElement(robot, 0, 20)`?

<details>
<summary>Antwort anzeigen</summary>

Die erste Zahl ist die Bewegung nach **rechts**, die zweite die Bewegung nach **oben**. Mit einem Minus geht es in die andere Richtung: `-20` bewegt den Roboter nach links, `0, 20` lässt ihn nach oben steigen.

</details>
