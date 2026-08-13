# 2 - Variablen

## Was sind Variablen?

Variablen sind **Platzhalter für Werte**.

Das bedeutet:

* Eine Variable speichert einen Wert
* Diesen Wert können wir später **verwenden oder verändern**


## Variablen definieren

In JavaScript erstellen wir Variablen mit `let`:

```js
let myVariable = 12;
```

Erklärung:

* `let` → erstellt eine neue Variable
* `myVariable` → Name der Variable (frei wählbar)
* `12` → der gespeicherte Wert

👉 Der Wert kann alles Mögliche sein (Zahl, Text, Objekt, ...)

## Variablen verändern

Variablen können jederzeit geändert werden:

```js
let myVariable = 12;

myVariable = 20;
```

👉 Wichtig: Beim Ändern **kein `let` mehr schreiben**

## Mit Variablen rechnen

Mit Variablen kann man ganz normal rechnen:

```js
let value = 10;

value = value + 5;   // 15
value = value - 2;   // 13
value = value * 2;   // 26
value = value / 2;   // 13
```

Kurzschreibweise:

```js
value += 1;    // +1
value -= 1;    // -1
value++;       // +1
value--;       // -1
```

## Variablen kombinieren

Variablen können auch miteinander kombiniert werden:

```js
let a = 10;
let b = 20;

let result = a + b; // 30
```

## Datentypen

In JavaScript gibt es verschiedene Arten von Werten:

```js
let myNumber = 20;          // Zahl
let myText = "Hello";       // Text
let myList = [1, 2, 3];     // Liste (Array)
let myObject = { value: 1 } // Objekt
```

👉 HTML Elemente sind übrigens auch Objekte:

```js
let el = document.querySelector("#myElement");
```

## Texte kombinieren 
Wir haben nun verschiedene Datentypen. Nur Zahlen können miteinander verrechnet werden [siehe vorheriges Kapitel](#mit-variablen-rechnen). Was ist aber mit Texten?

Texte können aneinander gehängt werden:

```js
let firstName = "Max";
let lastName = "Mustermann";
let fullName = firstName + " " + lastName; // "Max Mustermann"
```

... oder auch mit Zahlen kombiniert werden:

```js
let score = 10;
let scoreText = "Score: " + score; // "Score: 10"
```

## Scope von Variablen
Der **Scope** (Geltungsbereich) einer Variable bestimmt, wo sie verwendet werden kann.

Ein Block ist z. B. eine Funktion oder Code innerhalb von `{ ... }`.


Wir unterscheiden zwischen:
* **Globaler Scope** → überall im Code verfügbar
* **Lokaler Scope** → nur innerhalb eines bestimmten Blocks (z. B. Funktion)


Beispiel **Globaler** Scope:
```js
let score = 10; // globaler Scope

player.addEventListener("click", function() {
    score += 1; // score ist hier verfügbar
});
```

Beispiel **Lokaler** Scope:
```js
let player = document.querySelector("#player"); // globaler Scope

player.addEventListener("click", function() {
    // x und y werden "vergessen", sobald die Funktion hier fertig ist
    let x = Math.random() * 500; // x hat lokalen Scope
    let y = Math.random() * 500; // y hat lokalen Scope
    setPosition(player, x, y);
}); // Funktion endet hier, x und y sind nicht mehr verfügbar
```

## 🎮 Aufgabe – Score mit Variable

Wir erweitern nun unser Spiel mit einem Score und einem Timer. Das Ziel ist es, den Score zu erhöhen, wenn auf den Spieler geklickt wird. Außerdem soll ein Timer herunterzählen, und wenn er 0 erreicht, soll das Spiel vorbei sein.

### 1: Score mit Variable

Der Score, welcher oben rechts angezeigt wird, soll nun immer um 1 erhöht werden, wenn auf den Spieler geklickt wird.
Gehe dabei wie folgt vor:

* Erstelle eine [globale](#scope-von-variablen) Variable `scoreValue` und setze sie auf 0.
* Im Click Event des Spielers, erhöhe `scoreValue` um 1.
* **Aktualisiere (ebenfalls im Click Event) den Text im HTML, damit der neue Score angezeigt wird. Die Theorie dazu findest tu im Kapitel [Texte kombinieren](#texte-kombinieren).

** Die Variable `scoreValue` speichert den score. Die Variable existiert aber nur "im computer". Um den Score auch für die Spieler sichtbar zu machen, müssen wir dann den Text im HTML anpassen:


<details>
<summary>Tipps</summary>
Score erhöhen und Text aktualisieren:

```js
scoreValue += 1; // Score erhöhen
score.textContent = "Score: " + scoreValue; // Text im HTML aktualisieren
```
</details>


### 2: Timer mit Variable

Der Timer soll von 10 Sekunden herunterzählen. Sobald er 0 erreicht, soll das Spiel dann vorbei sein.


Gehe nun wie folgt vor:
* Erstelle eine [globale](#scope-von-variablen) Variable `timeLeft` und setze sie auf 10.
* Erstelle ein HTML `<div>` Element direkt im HTML file neben `<score>`, um die verbleibende Zeit anzuzeigen. Gibe diesem Element die ID `timer`. [Selektiere](./7-cheatsheet#html-elemente-auswahlen) das Element dann direkt im JavaScript.
* Verwende [`setInterval`](/modul/4-listen-und-loops#setinterval) (Schauen wir später genauer an), um jede Sekunde `timeLeft` um 1 zu verringern.
* Aktualisiere ebenfalls den Text im HTML, damit die verbleibende Zeit angezeigt wird. (Gleiche Vorgehensweise wie beim Score)

<details>
<summary>Tipp Variable</summary>

Die Variable setzen wir mit let und das HTML Element selektieren wir wie gewohnt.

```js
let timeLeft = 10;
let timer = document.querySelector("#timer")
```
</details>

<details>
<summary>Tipp Timer</summary>

So brauchen wir die timer funktion:

```js
setInterval(() => {
    // Timer nach unten zählen
    timeLeft -= 1;

    // HTML Element anpassen
    timer.textContent = timeLeft + "s";
}, 1000)
```
</details>



-> Wir sind fast fertig mit dem click game. Es fehlt nur noch game over! 

Mehr Hintergrund findest du in der Theorie zu den [Variablen](./6-theorie/2-variablen).
