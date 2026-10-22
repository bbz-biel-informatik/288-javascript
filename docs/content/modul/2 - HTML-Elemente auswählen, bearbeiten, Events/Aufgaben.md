# 2 - Aufgaben: HTML-Elemente auswählen, bearbeiten, Events

👉 [Projektstand nach Kapitel 1 herunterladen](/assets/zips/space-robot-loesung-1.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 2.1 – Eine andere Farbe

Wenn wir auf den Knopf drücken, soll sich das Weltall gelb färben, anstatt blau.

Lies bei Bedarf nochmals nach, wie wir ein [HTML-Element verändern](./inhalt#html-elemente-verandern).

<details>
<summary>Lösung anzeigen</summary>

Ändere in der bestehenden Aktion `"blue"` zu `"yellow"`:

```js
blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "yellow";
});
```

Die Befehle sind im Cheatsheet unter [Events](../9-cheatsheet#events) und [HTML-Elemente bearbeiten](../9-cheatsheet#html-elemente-bearbeiten) erklärt.

</details>

## 🎯 2.2 – Alarm einschalten

Wenn der Button mit der ID `alarmButton` angeklickt wird, soll die Weltraum-Szene rot werden.

Achte dabei auf die [Teile einer Interaktion](./inhalt#die-teile-einer-interaktion):

- Wähle den Alarm-Button aus.
- Wähle die Weltraum-Szene aus, falls du das noch nicht gemacht hast.
- Füge dem Button einen Click Event Listener hinzu.
- Ändere darin die Hintergrundfarbe.

<details>
<summary>Tipp: Diese Befehle brauchst du</summary>

Die Weltraum-Szene sollte aus der ersten Aufgabe bereits ausgewählt sein.

Um den Alarmbutton auszuwählen, schreibe:

```js
let alarmButton = document.querySelector("#alarmButton");
```

Verwende danach [`addEventListener(...)`](../9-cheatsheet#events) und [`style.backgroundColor`](../9-cheatsheet#html-elemente-bearbeiten).

</details>

<details>
<summary>Lösung anzeigen</summary>

```js
// Die spaceScene sollte bereits definiert sein. Brauchen wir nicht 2x zu haben.
let spaceScene = document.querySelector("#spaceScene");

let alarmButton = document.querySelector("#alarmButton");

alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
});
```

</details>

## 🎯 2.3 – Status verändern

Wenn der Button `statusButton` angeklickt wird, soll im Element `statusText` der Text `Roboter ist bereit!` erscheinen.

Verwende dafür [`textContent`](../9-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp: Codegerüst</summary>
So ungefähr kann das Codegerüst aussehen:

```js
let statusButton = document.querySelector("________");
let statusText = document.querySelector("________");

//...

statusButton.addEventListener("click", function () {
  statusText.textContent = "________________";
});
```

</details>

## 🎯 2.4 – Roboter vergrössern

Wenn der Button `sizeButton` angeklickt wird, soll der Roboter mit der ID `robot` breiter werden. Denke wiederum an die drei Teile, welche wir brauchen.

Lies bei Bedarf nochmals die Theorie zum [Verändern von HTML-Elementen](./inhalt#html-elemente-verandern). Was du verändern musst, ist [`style.width`](../9-cheatsheet#html-elemente-bearbeiten).

## 🎯 2.5 – Mehrere Dinge gleichzeitig verändern

Erweitere den Alarm-Button. Bei einem Klick sollen zwei Dinge passieren:

- Die Weltraum-Szene wird rot.
- Im Status steht `Planetenalarm`.

Lies dazu nochmals nach, wie JavaScript [mehrere Dinge gleichzeitig verändert](./inhalt#mehrere-dinge-gleichzeitig-verandern).

In einem Event Listener dürfen mehrere Befehle stehen:

```js
alarmButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "red";
  statusText.textContent = "Alarm!";
});
```

## 🎯 2.6 – Energie entfernen

Wenn der Button `removeButton` angeklickt wird, soll das Element `energy` verschwinden.

Lies bei Bedarf nochmals, wie man [ein HTML-Element entfernt](./inhalt#ein-html-element-entfernen). Verwende dafür [`remove()`](../9-cheatsheet#html-elemente-bearbeiten).

Beachte: Nach einem Neuladen der Seite ist die Energie wieder da. Das HTML definiert den Startzustand der Seite neu.

## 🎯 2.7 – Hintergrundplaneten zerstören

Im Hintergrund befindet sich ein Planet mit der ID `backgroundPlanet`. Füge dem Steuerpult einen neuen Button hinzu. Wenn dieser Button angeklickt wird, soll der Hintergrundplanet verschwinden.

Die benötigte Theorie findest du unter [Ein HTML-Element entfernen](./inhalt#ein-html-element-entfernen).

Gehe dabei wie folgt vor:

- Erstelle im HTML einen neuen Button mit der ID `destroyPlanetButton`.
- Wähle den neuen Button mit [`document.querySelector(...)`](../9-cheatsheet#html-elemente-auswahlen) aus.
- Wähle den Hintergrundplaneten aus.
- Füge dem Button einen Click Event Listener hinzu.
- Entferne darin den Hintergrundplaneten mit [`remove()`](../9-cheatsheet#html-elemente-bearbeiten).

<details>
<summary>Tipp für das HTML</summary>

Du kannst im Element mit der Klasse `button-row` eine weitere Steuerung ergänzen:

```html
<div class="control">
  <button
    id="destroyPlanetButton"
    class="control-button red"
    type="button"
  ></button>
  <span class="control-label">Planet</span>
</div>
```

</details>

## 🎯 2.9 – Abschlussaufgabe

Programmiere deinen eigenen Modus für die Weltraum-Szene.

Dein Modus soll:

- durch einen Button gestartet werden,
- mindestens drei HTML-Elemente verändern und
- einen passenden Statustext anzeigen.

Mögliche Ideen:

- Nachtmodus
- Party-Modus – später kannst du mit [`setInterval(...)`](../8-listen-und-loops/inhalt#wiederholung-nach-zeit) die Farben automatisch wiederholt wechseln
- Sicherheitsmodus
- Roboter-Wartung
- Weltraum-Notfall

Gehe bei jeder Interaktion gleich vor:

> Denke bei jeder Interaktion an Auslöser, Ziel, Event und Aktion.
