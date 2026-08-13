# 0 - JavaScript Setup

In diesem Kapitel richtest du alles ein, was du für den JavaScript-Kurs brauchst. Wir arbeiten mit **Visual Studio Code** und einigen Erweiterungen, die uns das Programmieren erleichtern.

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

* [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Zeigt deine Webseite im Browser an und aktualisiert sie nach dem Speichern.
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Formatiert deinen Code automatisch.
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Hilft dir, Fehler im JavaScript-Code zu erkennen.
* [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Ermöglicht gemeinsames Arbeiten an einem Projekt.

## Prettier einrichten

Damit Prettier deinen Code beim Speichern automatisch formatiert, passen wir zwei Einstellungen an.

### Format On Save aktivieren

1. Öffne die Einstellungen mit `Cmd + ,` auf dem Mac oder `Ctrl + ,` unter Windows.
2. Suche nach `Format On Save`.
3. Aktiviere die Einstellung **Editor: Format On Save**.

### Prettier als Standard-Formatter auswählen

1. Suche in den Einstellungen nach `Default Formatter`.
2. Wähle **Prettier - Code formatter** aus.

Wenn du eine Datei speicherst, wird dein Code nun automatisch sauber formatiert.

## Einen Projektordner öffnen

Ein JavaScript-Projekt besteht meistens aus mehreren Dateien. Deshalb öffnen wir in VS Code immer den **ganzen Projektordner** und nicht nur eine einzelne Datei.

1. Entpacke den heruntergeladenen Projektordner.
2. Öffne VS Code.
3. Klicke auf **File → Open Folder**.
4. Wähle den entpackten Ordner aus.
5. Klicke auf **Open**.

Links in VS Code siehst du danach die Dateien des Projekts, zum Beispiel:

```text
projekt/
├── index.html
├── style.css
└── script.js
```

## Eine Webseite mit Live Server starten

1. Öffne in VS Code die Datei `index.html`.
2. Klicke unten rechts auf **Go Live**.

Alternativ kannst du mit der rechten Maustaste auf `index.html` klicken und **Open with Live Server** auswählen.

Die Webseite öffnet sich nun im Browser. Wenn du eine Datei veränderst und speicherst, aktualisiert Live Server die Webseite.

## Setup abgeschlossen

Du bist bereit, wenn:

* VS Code installiert ist,
* Live Server, Prettier, ESLint und Live Share installiert sind,
* Format On Save aktiviert ist und
* Prettier als Standard-Formatter ausgewählt ist.

Im nächsten Kapitel lädst du das erste vorbereitete Projekt herunter und machst eine Webseite mit JavaScript interaktiv.
