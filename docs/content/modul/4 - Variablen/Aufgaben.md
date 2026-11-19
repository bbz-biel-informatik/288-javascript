# 4 - Aufgaben: Variablen

👉 [Übungen herunterladen](/assets/zips/uebungen-4-variablen.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner. Von dort kommst du zu allen drei Übungen. Jede Übung hat ihren eigenen Ordner mit `index.html`, `style.css` und `script.js`. Du schreibst immer nur in der `script.js`.

## 🎯 4.1 – Counter

👉 Ordner `1-counter`

Wir beginnen mit einem Zähler. Öffne das Projekt im Browser und schaue dir an, wie das Projekt aktuell aussieht. Das Ziel ist es, einen Zähler zu programmieren, mit welchem wir nach oben und unten zählen können. Deine Aufgaben sind folgende:

**a)** Erstelle eine Variable `count` mit dem Wert `0`. Wenn auf `plusButton` geklickt wird, soll `count` um `1` steigen und die neue Zahl in `counterDisplay` erscheinen.

Neben den vorangehenden Kapiteln "Events" brauchen wir hier nun diese Kapitel der Theorie: [Eine Variable definieren](./inhalt#eine-variable-definieren), [Den Wert verändern](./inhalt#den-wert-verandern) und [Gespeicherter Wert und sichtbarer Text](./inhalt#gespeicherter-wert-und-sichtbarer-text).

<details>
<summary>💡 Tipp anzeigen</summary>

Die Struktur sieht ungefähr so aus. Die Variable gehört **vor** das Event. Sonst würde sie bei jedem Klick neu auf `0` gesetzt:

```js
let plusButton = document.querySelector("plusButton");
let count = 0;

plusButton.addEventListener("click", function () {
  // Hier zählst du hoch und zeigst den Wert an.
});
```

Die Schreibweise des Events findest du unter [Events](../10-cheatsheet#events).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let counterDisplay = document.querySelector("#counterDisplay");
let plusButton = document.querySelector("#plusButton");

let count = 0;

plusButton.addEventListener("click", function () {
  count = count + 1;
  counterDisplay.textContent = count;
});
```

Die verwendeten Befehle findest du unter [HTML Elemente auswählen](../10-cheatsheet#html-elemente-auswahlen), [Events](../10-cheatsheet#events) und [Variablen](../10-cheatsheet#variablen).

</details>

**b)** Der `minusButton` soll die Zahl um `1` verkleinern. Verwende dafür die [Kurzschreibweise](./inhalt#kurzschreibweise) `-=`.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let minusButton = document.querySelector("#minusButton");

minusButton.addEventListener("click", function () {
  count -= 1;
  counterDisplay.textContent = count;
});
```

</details>

**c)** Der `resetButton` setzt die Zahl wieder auf `0`.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", function () {
  count = 0;
  counterDisplay.textContent = count;
});
```

</details>

**d)** Der `plusThreeButton` zählt in `3er`-Schritten, der `doubleButton` verdoppelt die Zahl mit `count = count * 2`. Probiere beides aus und beschreibe, was passiert.

**e)** Warum steht `let count = 0;` ausserhalb des Events und nicht darin? Überlege dir diese Frage.

## 🎯 4.2 – Umrechner

👉 Ordner `2-umrechner`

In dieser Übung rechnest du mit Variablen und lernst den Unterschied zwischen Text und Zahl kennen.

`index.html`

**a)** Wenn auf `meterButton` geklickt wird, soll die Zahl aus `inputField` in Meilen umgerechnet und in `resultText` angezeigt werden.

Die Umrechnung lautet:

> Meilen = Meter ÷ 1609

Übersetze diese Rechnung selbst in JavaScript.

Theorie: Textfeld auslesen: [Text auslesen](./inhalt#text-auslesen).

<details>
<summary>💡 Tipp anzeigen</summary>

Lies den Wert mit [`value`](../10-cheatsheet#html-elemente-bearbeiten) aus und verwandle ihn mit `Number(...)` in eine Zahl:

```js
let meter = Number(inputField.value);
```

Danach rechnest du mit `meter` ganz normal weiter.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let inputField = document.querySelector("#inputField");
let resultText = document.querySelector("#resultText");
let meterButton = document.querySelector("#meterButton");

meterButton.addEventListener("click", function () {
  let meter = Number(inputField.value);
  let meilen = meter / 1609;
  resultText.textContent = meter + " Meter sind " + meilen + " Meilen";
});
```

</details>

**b)** Ergänze die beiden anderen Knöpfe und übersetze auch diese Rechnungen selbst in JavaScript:

| Knopf           | Umrechnung           | Rechnung                        |
| --------------- | -------------------- | ------------------------------- |
| `celsiusButton` | Celsius → Fahrenheit | Fahrenheit = Celsius × 1.8 + 32 |
| `pfundButton`   | Pfund → Gramm        | Gramm = Pfund × 453.6           |

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let celsiusButton = document.querySelector("#celsiusButton");
let pfundButton = document.querySelector("#pfundButton");

celsiusButton.addEventListener("click", function () {
  let grad = Number(inputField.value);
  let fahrenheit = grad * 1.8 + 32;
  resultText.textContent = grad + " °C sind " + fahrenheit + " °F";
});

pfundButton.addEventListener("click", function () {
  let pfund = Number(inputField.value);
  let gramm = pfund * 453.6;
  resultText.textContent = pfund + " Pfund sind " + gramm + " Gramm";
});
```

</details>

**c)** Der `dollarButton` rechnet Dollar in Franken um:

> Franken = Dollar × Kurs

Der Wechselkurs ändert sich täglich. Speichere ihn deshalb in einer eigenen Variable zuoberst in deiner Datei, zum Beispiel `let kurs = 0.89;`, und rechne damit.

**d)** Warum ist es praktisch, den Kurs in einer Variable zu speichern, statt die Zahl direkt in die Rechnung zu schreiben?

## 🎯 4.3 – Shop

👉 Ordner `3-shop`

WIr haben nun einen kleinen Shop. Der Benutzer hat Geld und kann Artikel kaufen. Wir bauen das Javascript dazu.

**a)** Erstelle zwei Variablen: `geld` mit dem Wert `100` und `artikel` mit dem Wert `0`.

**b)** Beim Klick auf `buyButton1` (Winterjacke, 80 Franken) soll:

- der Preis von `geld` abgezogen werden,
- `artikel` um `1` steigen,
- `moneyText` den neuen Geldbetrag anzeigen, zum Beispiel `Geld: 20 Franken`,
- `cartText` die Anzahl Artikel anzeigen, zum Beispiel `Artikel: 1`.

<details>
<summary>💡 Tipp anzeigen</summary>

Du veränderst zwei Variablen und zeigst beide an:

```js
buyButton1.addEventListener("click", function () {
  geld -= 80;
  artikel += 1;
  moneyText.textContent = "Geld: " + geld + " Franken";
  // Fehlt noch: die Anzeige der Artikel
});
```

Das Verbinden von Text und Variable mit `+` findest du unter [Gespeicherter Wert und sichtbarer Text](./inhalt#gespeicherter-wert-und-sichtbarer-text).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let moneyText = document.querySelector("#moneyText");
let cartText = document.querySelector("#cartText");
let buyButton1 = document.querySelector("#buyButton1");

let geld = 100;
let artikel = 0;

buyButton1.addEventListener("click", function () {
  geld -= 80;
  artikel += 1;
  moneyText.textContent = "Geld: " + geld + " Franken";
  cartText.textContent = "Artikel: " + artikel;
});
```

</details>

**c)** Ergänze die beiden anderen Produkte: Sneaker (`buyButton2`, 50 Franken) und T-Shirt (`buyButton3`, 20 Franken).

**d)** Kaufe mehrmals ein, bis das Geld nicht mehr reicht. Was passiert? Überlege dir, was das Programm stattdessen machen müsste. Überfliege dazu das nächste Kapitel..
