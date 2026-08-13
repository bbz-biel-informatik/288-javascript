# 9 - Debugging

Beim Programmieren funktioniert etwas oft nicht beim ersten Versuch. Das ist normal. **Debugging** bedeutet, einen Fehler systematisch zu suchen, zu verstehen und zu beheben.

Der JavaScript-Goblin verändert die Webseite im Hintergrund. Wenn er unterwegs stolpert, hinterlässt er meistens Hinweise in der Browser-Konsole. Wir müssen diese Hinweise lesen und Schritt für Schritt herausfinden, wo das Problem liegt.

Den wichtigsten Debugging-Befehl findest du auch im Abschnitt [Debugging](./8-cheatsheet#debugging) des Cheatsheets.

## Bevor du nach einem Fehler suchst

Prüfe zuerst die einfachen Dinge:

1. Hast du alle Dateien gespeichert?
2. Hast du die Webseite neu geladen?
3. Bearbeitest du die richtige Datei und das richtige Projekt?
4. Ist `script.js` mit dem HTML verbunden?
5. Testest du wirklich die Interaktion, zum Beispiel mit einem Klick oder Tastendruck?

Wenn das Problem danach noch besteht, öffnen wir die Konsole.

## Die Browser-Konsole öffnen

Die Konsole gehört zu den Entwicklerwerkzeugen des Browsers.

* **Chrome oder Edge unter Windows:** Drücke `F12` oder `Ctrl + Shift + I`.
* **Chrome auf dem Mac:** Drücke `Cmd + Option + I`.
* Wähle danach den Tab **Console**.

Rote Meldungen sind Fehler. Gelbe Meldungen sind Warnungen. Beginne immer mit dem **ersten roten Fehler**, denn ein früher Fehler kann weitere Fehler verursachen.

## Eine Fehlermeldung lesen

Eine Fehlermeldung enthält meistens drei wichtige Hinweise:

```text
Uncaught ReferenceError: scoreValue is not defined
    at script.js:18
```

* **Art des Fehlers:** `ReferenceError`
* **Hinweis:** `scoreValue is not defined`
* **Ort:** `script.js`, Zeile `18`

Klicke in der Konsole auf `script.js:18`. Der Browser zeigt dir die betroffene Codezeile.

Lies die Meldung langsam. Du musst nicht jedes englische Wort verstehen. Der Name einer Variable, eine Datei und eine Zeilennummer reichen oft schon, um die richtige Stelle zu finden.

## Mit `console.log(...)` prüfen, was passiert

Mit [`console.log(...)`](./8-cheatsheet#debugging) kannst du Nachrichten und Werte in der Konsole anzeigen.

```js
console.log("JavaScript wurde gestartet");
```

Erscheint die Nachricht nicht, wird diese Codezeile nicht ausgeführt. Prüfe dann, ob die richtige JavaScript-Datei eingebunden ist und ob vorher bereits ein Fehler passiert.

Du kannst auch den Wert einer Variable anzeigen:

```js
console.log("Score:", scoreValue);
```

Die Beschriftung `"Score:"` hilft dir, die Ausgabe später wiederzuerkennen.

## Prüfen, ob ein HTML-Element gefunden wurde

Nach einem `querySelector(...)` kannst du das Ergebnis ausgeben:

```js
let player = document.querySelector("#player");
console.log("Player:", player);
```

Die Befehle [`let`](./8-cheatsheet#variablen) und [`document.querySelector(...)`](./8-cheatsheet#html-elemente-auswahlen) findest du ebenfalls im Cheatsheet.

Zeigt die Konsole das HTML-Element, wurde es gefunden. Zeigt sie `null`, passt der Selektor nicht zu deinem HTML. Prüfe dann:

* Beginnt eine ID im Selektor mit `#`?
* Beginnt eine Klasse im Selektor mit `.`?
* Ist der Name im HTML und im JavaScript genau gleich geschrieben?
* Stimmen Gross- und Kleinschreibung?

`#Player` und `#player` sind für JavaScript nicht dasselbe.

## Prüfen, ob ein Event ausgeführt wird

Wenn bei einem Klick nichts passiert, setze eine Ausgabe direkt in den Event Listener:

```js
button.addEventListener("click", function() {
  console.log("Button wurde angeklickt");
});
```

Den [`addEventListener(...)`](./8-cheatsheet#events) findest du im Cheatsheet.

* Erscheint die Nachricht, funktioniert das Event. Der Fehler liegt wahrscheinlich bei der Aktion danach.
* Erscheint die Nachricht nicht, prüfe den ausgewählten Button und den Event Listener.

Mit mehreren Ausgaben kannst du verfolgen, wie weit JavaScript kommt:

```js
console.log("1: Datei gestartet");

button.addEventListener("click", function() {
  console.log("2: Klick erkannt");
  console.log("3: Aktion startet");
});
```

Die letzte sichtbare Nachricht zeigt dir, bis wohin der Code funktioniert.

## Typische Fehlermeldungen

### `is not defined`

```text
ReferenceError: scoreValue is not defined
```

JavaScript kennt diesen Namen nicht. Prüfe:

* Wurde die Variable vorher mit `let` definiert?
* Ist der Name überall genau gleich geschrieben?
* Ist die Variable an dieser Stelle verfügbar?

### `Cannot read properties of null`

```text
TypeError: Cannot read properties of null
```

Meistens hat `querySelector(...)` kein HTML-Element gefunden. Prüfe den Selektor und den Namen im HTML.

### `Unexpected token`

```text
SyntaxError: Unexpected token
```

JavaScript kann den Code nicht lesen. Häufig fehlt kurz vor der markierten Stelle ein Zeichen. Prüfe:

* Sind alle runden Klammern `()` geschlossen?
* Sind alle geschweiften Klammern `{}` geschlossen?
* Sind Texte am Anfang und Ende mit Anführungszeichen geschrieben?

### `is not a function`

```text
TypeError: ... is not a function
```

JavaScript versucht etwas wie eine Funktion aufzurufen. Prüfe den Funktionsnamen und seine Schreibweise. Vergleiche den Befehl mit dem [Cheatsheet](./8-cheatsheet).

## Fehler systematisch eingrenzen

Wenn du nicht weisst, wo der Fehler liegt, gehe immer gleich vor:

1. Speichere alle Dateien und lade die Webseite neu.
2. Öffne die Konsole und lies den ersten roten Fehler.
3. Öffne die angezeigte Datei und Zeile.
4. Prüfe Namen, Klammern und Anführungszeichen.
5. Setze `console.log(...)` vor und nach die verdächtige Stelle.
6. Teste erneut und beobachte, welche Ausgaben erscheinen.
7. Vergleiche die verwendeten Befehle mit dem Cheatsheet.
8. Ändere nur eine Sache und teste danach erneut.

So wird aus „Es funktioniert nicht“ eine genaue Frage wie:

> Der Klick wird erkannt, aber `player` ist `null`. Wahrscheinlich stimmt der Selektor nicht.

Mit einer genauen Beobachtung kannst du selbst gezielter suchen und anderen besser erklären, wobei du Hilfe brauchst.

## Nach dem Debugging

Entferne reine Testausgaben wieder, wenn dein Code funktioniert. Nützliche Ausgaben darfst du während der Entwicklung behalten, aber die Konsole sollte übersichtlich bleiben.

Merke:

> Nicht raten: speichern, Konsole öffnen, ersten Fehler lesen, Stelle prüfen und mit `console.log(...)` Schritt für Schritt eingrenzen.
