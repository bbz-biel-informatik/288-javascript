# 1 - JavaScript Setup

**Ziele**

- Ich habe VS Code mit den nötigen Extensions eingerichtet.
- Ich kann ein HTML / CSS / JavaScript Projekt öffnen und im Browser starten.
- Ich habe meinen ersten JavaScript-Code laufen lassen.

HTML baut eine Webseite auf. CSS gestaltet sie. JavaScript sorgt dafür, dass auf der Webseite etwas passiert. In diesem Kapitel richten wir nur die Werkzeuge ein und bringen ein Projekt zum Laufen. Was der JavaScript-Code genau macht, schauen wir ab Kapitel 2 an.

## Visual Studio Code installieren

Visual Studio Code, kurz **VS Code**, ist der Editor, in dem wir unseren Code schreiben.

1. Lade [Visual Studio Code](https://code.visualstudio.com/) herunter.
2. Installiere das Programm auf deinem Computer.
3. Starte VS Code.

## Extensions installieren

Extensions sind Erweiterungen für VS Code. Sie fügen dem Editor zusätzliche Funktionen hinzu.

So installierst du eine Extension:

1. Klicke links in VS Code auf das **Extensions-Symbol** mit den vier Vierecken.
2. Gib den Namen der Extension in das Suchfeld ein.
3. Achte darauf, dass du die richtige Extension ausgewählt hast.
4. Klicke auf **Install**.

Installiere diese Extensions:

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Zeigt deine Webseite im Browser an und aktualisiert sie nach dem Speichern.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatiert deinen Code automatisch.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Hilft dir, Fehler im JavaScript-Code zu erkennen.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Ermöglicht gemeinsames Arbeiten an einem Projekt.

## Prettier einrichten

Damit Prettier deinen Code beim Speichern automatisch formatiert, passen wir zwei Einstellungen an:

**Format On Save**

1. Öffne die Einstellungen mit `Cmd + ,` auf dem Mac oder `Ctrl + ,` unter Windows.
2. Suche nach `Format On Save`.
3. Aktiviere die Einstellung **Editor: Format On Save**.

**Prettier als Standard-Formatter auswählen**

1. Suche in den Einstellungen nach `Default Formatter`.
2. Wähle **Prettier - Code formatter** aus.

Wenn du eine Datei speicherst, wird dein Code nun automatisch sauber formatiert.

## Projekt herunterladen und öffnen

Ein JavaScript-Projekt besteht meistens aus mehreren Dateien. Deshalb öffnen wir in VS Code immer den **ganzen Projektordner** und nicht nur eine einzelne Datei.

Wir arbeiten im ganzen Kurs mit dem Weltraum-Roboter-Projekt.

👉 [Projekt herunterladen](/assets/zips/space-robot-starter.zip)

1. Entpacke den heruntergeladenen Projektordner.
2. Öffne VS Code.
3. Klicke auf **File → Open Folder**.
4. Wähle den entpackten Ordner aus.
5. Klicke auf **Open**.

## Projektstruktur

Links in VS Code siehst du danach die Dateien des Projekts:

```text
space-robot-starter/
├── assets/
├── index.html
├── style.css
└── script.js
```

- `index.html` enthält die HTML-Elemente der Webseite, zum Beispiel den Roboter und die Knöpfe.
- `style.css` gestaltet die Webseite und sorgt für das Aussehen der Weltraum-Szene.
- `script.js` enthält den JavaScript-Code, der die Webseite interaktiv macht.
- Im Ordner `assets` liegen die Bilder für das Projekt.

Am Ende der Datei `index.html` steht diese Zeile:

```html
<script src="./script.js"></script>
```

Das `script`-Element verbindet die Datei `script.js` mit der Webseite. Dadurch lädt der Browser den JavaScript-Code aus dieser Datei. Diese Verbindung ist im Starterprojekt bereits vorbereitet und muss nicht verändert werden.

## Die Webseite mit Live Server starten

1. Klicke in VS Code mit der rechten Maustaste auf die Datei `index.html`.
2. Wähle **Open with Live Server**.

Alternativ kannst du `index.html` öffnen und unten rechts auf **Go Live** klicken. Fehlt diese Auswahl, installiere zuerst die Extension **Live Server** (siehe [Extensions installieren](#extensions-installieren)).

Die Webseite öffnet sich nun im Browser. Wenn du eine Datei veränderst und speicherst, aktualisiert Live Server die Webseite automatisch.

-> Du solltest nun das Projekt im Browser sehen. Aktuell passiert aber noch nichts, wenn du auf die Knöpfe klickst. Das ändern wir jetzt.

## Dein erster JavaScript-Code

Kopiere diesen Code in die Datei `script.js`, speichere sie und klicke im Browser auf den blauen Knopf. Die Weltraum-Szene sollte blau werden.

```js
let blueButton = document.querySelector("#blueButton");
let spaceScene = document.querySelector("#spaceScene");

blueButton.addEventListener("click", function () {
  spaceScene.style.backgroundColor = "blue";
});
```

<details>
<summary>Die neuen Befehle im Überblick – wir erklären sie in den nächsten Kapiteln genau</summary>

- Mit [`let`](./11-cheatsheet#variablen) merken wir uns etwas unter einem eigenen Namen.
- Mit [`document.querySelector(...)`](./11-cheatsheet#html-elemente-auswahlen) wählen wir ein HTML-Element aus.
- Mit [`addEventListener(...)`](./11-cheatsheet#events) reagieren wir auf ein Ereignis wie einen Klick.
- Mit [`style.backgroundColor`](./11-cheatsheet#html-elemente-bearbeiten) verändern wir die Hintergrundfarbe eines HTML-Elements.

</details>

Lass diesen Code in `script.js` stehen. Wir bauen in den nächsten Kapiteln darauf auf.

## Setup abgeschlossen

Du bist bereit für das nächste Kapitel, wenn:

- VS Code installiert ist,
- Live Server, Prettier, ESLint und Live Share installiert sind,
- Format On Save aktiviert und Prettier als Standard-Formatter ausgewählt ist,
- das Weltraum-Roboter-Projekt im Browser läuft und
- die Szene blau wird, wenn du auf den blauen Knopf klickst.

Im nächsten Kapitel schauen wir genau an, wie JavaScript [HTML-Elemente auswählt und verändert](./2-html-elemente-auswaehlen-und-veraendern/inhalt).
