# HTML Events

## Was sind Events?

Mit **Events** kann JavaScript auf Aktionen reagieren, die im Browser passieren.

Das bedeutet:

* Der Benutzer macht etwas (z. B. klicken oder tippen)
* JavaScript reagiert darauf

Typische Events:

* `click` → Mausklick
* `keydown` → Taste wird gedrückt
* `scroll` → Seite wird gescrollt

Mehr Events gibt es hier: [W3Schools Events](https://www.w3schools.com/jsref/dom_obj_event.asp)

## Event Listener

Damit JavaScript auf ein Event reagieren kann, nutzen wir sogenannte **Event Listener**.

Grundaufbau:

```js
element.addEventListener("event", function() {
  // Code wird ausgeführt
});
```

Erklärung:

* `element` → das HTML Element
* `"event"` → z. B. `"click"` oder `"keydown"`
* `function()` → Code, der ausgeführt wird

## Tastatur Events

Wir können auf Tastatureingaben reagieren:

```js
let playground = document.querySelector("#playground");

document.addEventListener("keydown", function(event) {
  playground.style.backgroundColor = "blue";
});
```

Erklärung:

* Das Event wird auf dem ganzen Dokument registriert
* Jedes Mal, wenn eine Taste gedrückt wird, wird der Code ausgeführt

👉 `event` enthält zusätzliche Infos (z. B. welche Taste gedrückt wurde)

## Click Events

Wir können auch auf Klicks reagieren:

```js
let player = document.querySelector("#player");

player.addEventListener("click", function() {
  player.style.width = "200px";
  player.style.height = "200px";
});
```

Erklärung:

* Das Event wird direkt am Element registriert
* Der Code läuft nur, wenn genau dieses Element angeklickt wird

## Wichtig

* Events machen Webseiten **interaktiv**
* Ohne Events passiert nichts dynamisch
* Sehr häufig genutzt in Spielen und Apps

## 🎮 Aufgabe – Klickspiel erweitern

Jetzt bauen wir unser Spiel weiter aus.

### 1: Spieler mit Taste vergrössern

Ziel:
Wenn eine Taste gedrückt wird, soll der Spieler grösser werden.

Schritte:

* Wähle das Element `#player`
* Verwende ein `keydown` Event
* Verändere die Grösse des Spielers

<details>
<summary>Tipps</summary>
- Selektiere den Spieler mit `querySelector` <br>
- Verwende `addEventListener("keydown", ...)` <br>
- Verwende `style.width` und `style.height`
</details>


### 2: Library einbinden
Ziel:
Wir binden eine Library ein, um die Position des Spielers zu verändern.

Schritte:
* Füge am Ende des Body folgende Zeile ein:

```html
<script src="https://bbz-biel-informatik.github.io/288-javascript/game-framework/bbzgame.js"></script>
```

Öffne die Konsole und schaue, ob etwas geloggt wird. Wenn ja, ist die Library erfolgreich eingebunden.

### 3: Spieler bewegen bei Klick

Ziel:
Wenn du auf den Spieler klickst, soll er sich an eine neue Position bewegen.

Da wir nun die Library eingebunden haben, können wir die Funktion `setPosition(...)` verwenden, um die Position zu verändern.

-> Diese Funktion setzt die Position eines Elements.

Beispiel:

```js
let player = document.querySelector("#player");

// Setzt den Spieler an die Position x=100, y=50
setPosition(player, 100, 50);
```

Schritte:

* Füge einen `click` Event Listener zum Spieler hinzu
* Rufe darin `setPosition(...)` auf
* Setze neue Werte für `x` und `y`

### 4: Spieler zufällig bewegen
Ziel:
Der Spieler soll sich bei jedem Klick an eine zufällige Position bewegen.

Schritte:
* Verwende `Math.random()`, um Zufallszahlen zu generieren
* Berechne zufällige `x` und `y` Werte basierend auf der Grösse des Spielfelds
* Rufe `setPosition(...)` mit den neuen Werten auf  

---

💡 Ziel:

* Events verstehen (`click`, `keydown`)
* Interaktion ins Spiel bringen
* Erste Logik mit JavaScript umsetzen
