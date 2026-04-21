# Variablen

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
value += 1; // +1
value -= 1; // -1
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

# Aufgabe – Score mit Variable

Jetzt erweitern wir unser Spiel mit einem Score.

Das Ziel ist folgendes:

* Der Score wird in einer **Variable gespeichert**.
* Wenn auf den Spieler geklickt wird, wird der Score um 1 erhöht.  
* Der neue Wert wird im HTML angezeigt.
