# if - else

Bedingungen brauchst du, wenn Code nur in bestimmten Situationen ausgeführt werden soll.

Beispiel:

> Schreibe "Du bist volljährig", wenn das Alter grösser oder gleich 18 ist.

```js
let alter = await getNumberInput("Wie alt bist du?");

if (alter >= 18) {
  console.log("Du bist volljährig");
}
```

Der Code im Block wird nur ausgeführt, wenn die Bedingung stimmt.

## if

`if` bedeutet: Mache das, wenn diese Bedingung erfüllt ist.

```js
let alter = 18;

if (alter >= 18) {
  console.log("Du bist volljährig");
}
```

Die Bedingung steht in den runden Klammern.  
Der Code, der ausgeführt werden soll, steht im Block zwischen `{` und `}`.

## else

Mit `else` kannst du festlegen, was passieren soll, wenn die Bedingung nicht stimmt.

```js
let alter = await getNumberInput("Wie alt bist du?");

if (alter >= 18) {
  console.log("Du bist volljährig");
} else {
  console.log("Du bist nicht volljährig");
}
```

`else` hat keine eigene Bedingung. Es wird ausgeführt, wenn das `if` nicht stimmt.

## Vergleiche

Vergleiche bestimmen, ob der Code in einem `if` ausgeführt wird oder nicht.

```js
let city = "Warschau";
let age = 18;

if (city == "Warschau") {
  console.log("Gleichheit");
}

if (city != "Berlin") {
  console.log("Ungleichheit");
}

if (age > 18) {
  console.log("Grösser als");
}

if (age < 18) {
  console.log("Kleiner als");
}

if (age >= 18) {
  console.log("Grösser oder gleich");
}

if (age <= 18) {
  console.log("Kleiner oder gleich");
}
```

Die wichtigsten Vergleiche sind:

- `==` gleich
- `!=` nicht gleich
- `>` grösser als
- `<` kleiner als
- `>=` grösser oder gleich
- `<=` kleiner oder gleich

## else if

Mit `else if` kannst du mehrere Bedingungen nacheinander prüfen.

```js
let stadt = await getInput("Gib mir eine Hauptstadt");

if (stadt == "Berlin") {
  console.log("Das ist die Hauptstadt von Deutschland");
} else if (stadt == "Tallinn") {
  console.log("Das ist die Hauptstadt von Estland");
} else if (stadt == "Oslo") {
  console.log("Das ist die Hauptstadt von Norwegen");
} else {
  console.log("Diese Stadt kenne ich nicht");
}
```

Javascript prüft von oben nach unten. Sobald eine Bedingung stimmt, wird dieser Block ausgeführt.

## Mehrere Bedingungen

Mit `&&` und `||` kannst du mehrere Bedingungen verbinden.

`&&` bedeutet: Beide Bedingungen müssen stimmen.

```js
let number = await getNumberInput("Gib eine Zahl ein");

if (number > 0 && number <= 10) {
  console.log("Die Nummer ist zwischen 0 und 10");
}
```

`||` bedeutet: Nur eine Bedingung muss stimmen.

```js
let stadt = await getInput("Gib mir eine Stadt");

if (stadt == "Warschau" || stadt == "Danzig") {
  console.log("Die Stadt liegt in Polen");
}
```

## Bedingungen mit Events

Bedingungen werden oft in Events verwendet.

```js
document.addEventListener("keydown", function (event) {
  if (event.key == "s") {
    console.log("you pressed s");
  }
});
```

Hier wird zuerst auf eine Taste reagiert.  
Danach prüft das `if`, ob die Taste `s` gedrückt wurde.

## Zusammenfassung

- Bedingungen steuern, wann Code ausgeführt wird.
- `if` prüft eine Bedingung.
- `else` wird ausgeführt, wenn die Bedingung nicht stimmt.
- `else if` prüft weitere Bedingungen.
- Vergleiche wie `==`, `!=`, `>`, `<`, `>=` und `<=` liefern `true` oder `false`.
- Mit `&&` müssen beide Bedingungen stimmen.
- Mit `||` muss nur eine Bedingung stimmen.
- Blöcke werden mit `{` und `}` geschrieben.
