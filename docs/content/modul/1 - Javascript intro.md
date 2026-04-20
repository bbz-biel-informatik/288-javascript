# Javascript Intro

Willkommen zum Javascript Intro Modul. In diesem Einstieg richtest du deine Entwicklungsumgebung ein und wiederholst einige HTML / CSS Grundlagen.

## Browser Konsole

Die Konsole (DevTools) ist in jedem Browser verfügbar und hilft uns beim Arbeiten mit JavaScript.

Dort können wir:

* Fehler, Warnungen und Infos sehen
* eigenen JavaScript-Code direkt ausführen

**Öffnen der Konsole:**

* Mac: `Cmd + Alt + J`
* Windows: `Ctrl + Shift + J`

## Einfache Javascript Befehle

* Jeder Befehl steht in einer eigenen Zeile
* Code wird **von oben nach unten** ausgeführt

### Wichtige Funktionen

```js
alert("Hallo!");
```

→ Zeigt ein Popup im Browser

```js
console.log("Hallo Konsole");
```

→ Gibt etwas in der Konsole aus

```js
let text = prompt("Wie heißt du?");
```

→ Fragt den Benutzer nach einer Eingabe


### Beispiel

```js
// Popup
alert("Hello World");

// Ausgabe in Konsole
console.log("Hello from javascript");

// Benutzereingabe
let text = prompt("Gib etwas ein:");
console.log(text);
```

---

## Kommentare

Kommentare sind Notizen im Code und werden nicht ausgeführt.

```js
// Das ist ein Kommentar
```

```js
/*
Das ist ein
mehrzeiliger Kommentar
*/
```

👉 Kommentare helfen dir (und anderen), den Code zu verstehen.

Hier die angepasste Version des Abschnitts:

---

## Javascript + HTML

JavaScript macht Webseiten **interaktiv** und läuft direkt im Browser.

Man kann JavaScript auf verschiedene Arten einbinden:

```text
projekt/
│── index.html
│── style.css
└── script.js
```

```html
<!-- Externe Datei -->
<script src="./script.js"></script>
```

-> Vorteil: sauberer Code, bessere Übersicht, Standard in echten Projekten

```html
<!-- Externe Library -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

-> Libraries sind fertige Code-Sammlungen von anderen Entwicklern
→ helfen dir, schneller zu arbeiten (z. B. HTTP Requests, Animationen, UI)

```html
<!-- Direkt im HTML -->
<script>
  alert("Hello World");
</script>
```
-> Gut zum Testen, aber in größeren Projekten eher vermeiden. Kommt aber teils in CMS zum Einsatz

## VS Code 

Unser Editor für das Modul ist Visual Studio Code (VS Code). Er ist kostenlos, schnell und hat viele nützliche Funktionen.
Wir können auch Extensions installieren, um das Arbeiten mit JavaScript zu erleichtern.

Empfohlene **Extensions**:

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional, da VitePress auch einen Dev-Server mitbringt)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Empfohlene **Einstellungen**:
- Format On Save: Gehe zu den Einstellungen (`Cmd + ,` oder `Ctrl + ,`) und suche nach "Format On Save". Aktiviere diese Option, damit dein Code automatisch formatiert wird, wenn du speicherst. 
- Default Formatter: Suche nach "Default Formatter" und wähle "Prettier - Code formatter" aus, damit Prettier dein Standard-Formatter ist.

Hier die angepasste Aufgabe:

## 🎮 Aufgabe – Projekt starten & VS Code einrichten

Das Ziel ist es, ein bestehendes Projekt zu öffnen und erste Änderungen daran vorzunehmen.

### 1: Projekt herunterladen

Lade das vorbereitete Projekt als `.zip` herunter [Click Game Starter ZIP](/assets/zips/click-game-starter.zip)
 und entpacke es auf deinem Computer.

-> Wichtig: Merke dir, wo du den Ordner gespeichert hast.

### 2: VS Code installieren & einrichten

Falls noch nicht installiert:

* Lade Visual Studio Code herunter und installiere es

Installiere danach die empfohlenen Extensions:

* Live Server
* Prettier
* ESLint
* Live Share

Passe anschließend die Einstellungen an:
[siehe Anleitung](#vs-code)

* **Format On Save aktivieren** [siehe Anleitung]
* **Prettier als Default Formatter setzen**

-> Ziel: Dein Code wird automatisch sauber formatiert

### 3: Projekt öffnen

* Öffne VS Code
* Klicke auf **"Open Folder"**
* Wähle den entpackten Projektordner aus

Du solltest nun Dateien wie `index.html` und `style.css` sehen.

### 4: Erste Änderungen machen

Öffne die Datei `index.html` und `style.css` und nimm zur Wiederholung von HTML und CSS erste Änderungen vor:
-> Das HTML und CSS sollte nun automatisch formatiert werden, wenn du speicherst (z. B. `Cmd + S` oder `Ctrl + S`)
-> Sehe dir die Änderungen mittels Live Server im Browser an (Rechtsklick auf `index.html` → **Open with Live Server**)

#### HTML Aufgaben

* Ändere den Titel auf (`Welcome to my click game!`)
* Füge einen Spieler hinzu (img-Element mit der ID `player` und dem bild `./assets/player_pink.png`)
* Füge eine Score-Anzeige hinzu (div-Element mit der ID `score` und Text `Score: 0`)

Hilfestellungen:
[Image Tag](https://www.w3schools.com/tags/tag_img.asp)

#### CSS Aufgaben

* Ändere die Hintergrundfarbe vom Spielfeld (`#playground`)
* Vergrößere den Spieler auf 100 x 100 Pixel (`#player`)
* Ändere die Schriftgrösse des Titels und der Score-Anzeige auf 24px (`#title`, `#score`)

Hilfestellungen:
[CSS Background](https://www.w3schools.com/cssref/pr_background-color.asp)
[CSS Size](https://www.w3schools.com/cssref/pr_dim_width.asp)
[CSS Font Size](https://www.w3schools.com/cssref/pr_font_font-size.asp)

---

💡 Ziel der Aufgabe:

* VS Code kennenlernen
* Projektstruktur verstehen
* Kurze Wiederholung von HTML und CSS 

---