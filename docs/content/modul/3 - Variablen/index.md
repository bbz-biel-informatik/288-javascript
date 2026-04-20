# Variablen

Variablen brauchst du, um Werte zu speichern und später wieder zu verwenden.

Ein typisches Beispiel ist ein Score in einem Spiel:

```js
let score = 0;

score = score + 10;

console.log(score);

score = 0;
```

`let score = 0;` erstellt eine neue Variable.  
`score = score + 10;` verändert den Wert der Variable.  
`console.log(score);` gibt den aktuellen Wert in der Konsole aus.

Im PDF steht dafür manchmal `print(score);`.  
In normalen Browser-Projekten verwenden wir meistens `console.log(score);`.

## Zahlen berechnen

Mit Zahlen kannst du direkt rechnen.

```js
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
```

Die wichtigsten Operationen sind:

- `+` Addition
- `-` Subtraktion
- `*` Multiplikation
- `/` Division

## Zahlen und Texte

Zahlen werden direkt geschrieben.

```js
let score = 0;
```

Texte werden mit Anführungszeichen geschrieben.

```js
let city = "Berlin";
let name = "Max";
```

Wenn du Texte mit `+` verbindest, werden sie aneinander gehängt.

```js
let hello = "Hello";
let world = "World";

console.log(hello + " " + world); // Hello World
```

Bei Zahlen wird `+` als Rechnung verwendet.

```js
let a = 10;
let b = 5;

console.log(a + b); // 15
```

Wenn du eine Zahl und einen Text mit `+` verbindest, macht Javascript daraus einen Text.

```js
let a = 10;
let b = "Berlin";

console.log(a + b); // 10Berlin
```

Andere Rechnungen funktionieren mit Texten nicht.

```js
let a = 10;
let b = "Berlin";

console.log(a * b); // NaN
```

`NaN` bedeutet: Not a Number. Javascript konnte daraus keine Zahl berechnen.

## Einfache Datentypen

Variablen haben immer einen Datentyp.

```js
let myNumber = 10;
let someString = "hallo welt";
let myBool = true;
let emptyVariable;
let noValue = null;
```

Häufige Datentypen sind:

- `number` für Zahlen
- `string` für Texte
- `boolean` für `true` oder `false`
- `undefined`, wenn noch kein Wert gesetzt wurde
- `null`, wenn bewusst kein Wert gesetzt wird
- `object`, zum Beispiel ein HTML-Element
- Listen, zum Beispiel mehrere HTML-Elemente

## User Input umwandeln

Ein Input von einem Benutzer ist oft ein Text.

Wenn du damit rechnen willst, musst du den Text zuerst in eine Zahl umwandeln.

```js
let input = "123";
let number = parseInt(input);

console.log(number + 10); // 133
```

`parseInt()` macht aus einem Text eine ganze Zahl.

In einer Übungsumgebung kann ein Zahlen-Input auch so aussehen:

```js
let alter = await getNumberInput("Wie alt bist du?");
```

`getNumberInput()` gibt direkt eine Zahl zurück.

## let, const und var

Für Variablen verwenden wir meistens `let` oder `const`.

```js
let alter = 16;
alter = 17;

const stadt = "Berlin";
```

`let` ist veränderbar.  
`const` ist nicht veränderbar.  
`var` ist eine ältere Form und wird nur noch selten verwendet.

```js
var name = "Max";
```

Wichtig:

- Verwende aussagekräftige Namen.
- Definiere den gleichen Variablennamen nicht zweimal im gleichen Block.
- Verwende `const`, wenn sich der Wert nicht ändern soll.
- Verwende `let`, wenn sich der Wert später ändern kann.

## Gültigkeit von Variablen

Eine Variable gilt nur in dem Block, in dem sie definiert wurde.

Ein Block ist der Bereich zwischen `{` und `}`.

```js
function square() {
  let size = 10;

  console.log(size);
}

console.log(size); // Fehler
```

`size` wurde in der Funktion definiert. Ausserhalb der Funktion kennt Javascript diese Variable nicht.

Dasselbe gilt auch bei Code mit Turtle:

```js
function square() {
  let size = 10;

  turtle.forward(size);
  turtle.right(90);
}

turtle.forward(size); // Fehler
```

## Variablen mit HTML verwenden

Variablen sind nicht nur für Zahlen und Texte da.

Du kannst auch HTML-Elemente in Variablen speichern.

```js
let myImage = document.querySelector("#image");
let item = document.querySelector(".item");
let player = document.getElementById("player");
```

`querySelector()` wählt ein Element mit einem CSS-Selektor aus.  
`getElementById()` wählt ein Element über die `id` aus.

Wenn du mehrere Elemente auswählen willst, verwendest du `querySelectorAll()`.

```js
let items = document.querySelectorAll(".item");
```

## Score Beispiel

Variablen werden oft verwendet, um einen aktuellen Zustand zu speichern.

```js
let player = document.getElementById("player");
let scoreDisplay = document.getElementById("score");
let score = 0;

player.addEventListener("click", function () {
  score = score + 1;
  scoreDisplay.textContent = score;
});
```

Hier wird der Score bei jedem Klick um 1 erhöht.  
Der aktuelle Score wird in der Variable `score` gespeichert.

## Zusammenfassung

- Variablen sind Platzhalter für Werte.
- Variablen können Zahlen, Texte, Booleans, Listen, Objekte oder leere Werte speichern.
- `let` kann verändert werden.
- `const` kann nicht verändert werden.
- Variablen gelten nur innerhalb ihres Blocks.
- Mit Variablen kannst du rechnen oder Texte zusammensetzen.
- Inputs müssen oft mit `parseInt()` in Zahlen umgewandelt werden.
- Mit Variablen kannst du auch HTML-Elemente oder einen Spielstand speichern.
