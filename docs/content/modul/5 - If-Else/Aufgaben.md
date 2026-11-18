# 5 - Aufgaben: If-Else

👉 [Übungen herunterladen](/assets/zips/uebungen-5-if-else.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner. Von dort kommst du zu allen drei Übungen.

## 🎯 5.1 – Vergleiche einschätzen

Diese Aufgabe machst du ohne Computer. Lies dir den Abschnitt [Werte vergleichen](./inhalt#werte-vergleichen) nochmals durch.

Eine Spielfigur hat `600` Leben:

```js
let life = 600;
```

Entscheide bei jedem Vergleich, ob er **stimmt** oder **nicht stimmt**:

```js
life == 600;
life != 0;
life > 1000;
life < 1000;
life >= 600;
life <= 100;
```

<details>
<summary>✅ Lösung anzeigen</summary>

| Vergleich     | Ergebnis     | Begründung                                 |
| ------------- | ------------ | ------------------------------------------ |
| `life == 600` | stimmt       | `life` enthält den Wert `600`.             |
| `life != 0`   | stimmt       | `600` ist nicht gleich `0`.                |
| `life > 1000` | stimmt nicht | `600` ist nicht grösser als `1000`.        |
| `life < 1000` | stimmt       | `600` ist kleiner als `1000`.              |
| `life >= 600` | stimmt       | `600` ist grösser oder gleich `600`.       |
| `life <= 100` | stimmt nicht | `600` ist weder kleiner noch gleich `100`. |

</details>

## 🎯 5.2 – Quiz

👉 Ordner `1-quiz`

`index.html`

<<< @/projects/uebungen-5-if-else/1-quiz/index.html

**a)** Beim Klick auf `cityButton` soll in `cityResult` `Richtig!` stehen, wenn im Feld `cityField` genau `Madrid` eingetippt wurde. Sonst soll `Falsch!` erscheinen.

Die Theorie dazu findest du unter [Eine Entscheidung in einem Event](./inhalt#eine-entscheidung-in-einem-event).

<details>
<summary>💡 Tipp anzeigen</summary>

Texte vergleichst du gleich wie Zahlen, nur stehen sie in Anführungszeichen:

```js
if (cityField.value == "Madrid") {
  // ...
}
```

Das Auslesen des Feldes mit [`value`](../10-cheatsheet#html-elemente-bearbeiten) kennst du bereits.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let cityField = document.querySelector("#cityField");
let cityButton = document.querySelector("#cityButton");
let cityResult = document.querySelector("#cityResult");

cityButton.addEventListener("click", function () {
  if (cityField.value == "Madrid") {
    cityResult.textContent = "Richtig!";
  } else {
    cityResult.textContent = "Falsch!";
  }
});
```

Die Befehle findest du unter [Events](../10-cheatsheet#events), [If / Else](../10-cheatsheet#if-else) und [HTML Elemente bearbeiten](../10-cheatsheet#html-elemente-bearbeiten).

</details>

**b)** Die zweite Frage ist eine Schätzfrage: Die Schweiz hat rund `9` Millionen Einwohner. Beim Klick auf `guessButton` sollen in `guessResult` Punkte erscheinen:

| Schätzung                 | Ausgabe              |
| ------------------------- | -------------------- |
| genau `9`                 | `3 Punkte - perfekt` |
| `8` oder `10`             | `2 Punkte - knapp`   |
| `5` bis `13`              | `1 Punkt - fast`     |
| alles andere              | `0 Punkte`           |

Verwende dafür eine Kette mit `else if`, siehe [Mehrere Möglichkeiten mit `else if`](./inhalt#mehrere-moglichkeiten-mit-else-if). Denke daran, die Eingabe mit `Number(...)` in eine Zahl zu verwandeln.

<details>
<summary>💡 Tipp anzeigen</summary>

Rechne zuerst aus, wie weit die Schätzung daneben liegt:

```js
let schaetzung = Number(guessField.value);
let differenz = schaetzung - 9;
```

Schätzt jemand zu tief, ist `differenz` negativ. Mit einer kleinen Entscheidung machen wir daraus eine positive Zahl:

```js
if (differenz < 0) {
  differenz = differenz * -1;
}
```

Danach brauchst du nur noch eine `else if`-Kette, die von klein nach gross prüft.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let guessField = document.querySelector("#guessField");
let guessButton = document.querySelector("#guessButton");
let guessResult = document.querySelector("#guessResult");

guessButton.addEventListener("click", function () {
  let schaetzung = Number(guessField.value);

  let differenz = schaetzung - 9;

  if (differenz < 0) {
    differenz = differenz * -1;
  }

  if (differenz == 0) {
    guessResult.textContent = "3 Punkte - perfekt";
  } else if (differenz <= 1) {
    guessResult.textContent = "2 Punkte - knapp";
  } else if (differenz <= 4) {
    guessResult.textContent = "1 Punkt - fast";
  } else {
    guessResult.textContent = "0 Punkte";
  }
});
```

</details>

**c) Erklären:** Was würde passieren, wenn die Bedingung `differenz <= 4` zuoberst stünde? Teste es und beschreibe das Ergebnis.

## 🎯 5.3 – Outfit-Chooser

👉 Ordner `2-outfit`

`index.html`

<<< @/projects/uebungen-5-if-else/2-outfit/index.html

Beim Klick auf `outfitButton` soll in `outfitText` ein Outfit vorgeschlagen werden. Die Temperatur steht im Feld `tempField`.

| Temperatur        | Vorschlag       |
| ----------------- | --------------- |
| `25` oder mehr    | `T-Shirt`       |
| `15` bis `24`     | `Pullover`      |
| `5` bis `14`      | `Jacke`         |
| weniger als `5`   | `Wintermantel`  |

<details>
<summary>💡 Tipp anzeigen</summary>

Beginne bei der höchsten Temperatur. Dann brauchst du pro Stufe nur eine einzige Bedingung:

```js
if (temperatur >= 25) {
  outfitText.textContent = "T-Shirt";
} else if (temperatur >= 15) {
  // ...
}
```

Weil JavaScript den ersten passenden Weg nimmt, ist bei `else if (temperatur >= 15)` automatisch klar, dass die Temperatur unter `25` liegt.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let tempField = document.querySelector("#tempField");
let outfitButton = document.querySelector("#outfitButton");
let outfitText = document.querySelector("#outfitText");

outfitButton.addEventListener("click", function () {
  let temperatur = Number(tempField.value);

  if (temperatur >= 25) {
    outfitText.textContent = "T-Shirt";
  } else if (temperatur >= 15) {
    outfitText.textContent = "Pullover";
  } else if (temperatur >= 5) {
    outfitText.textContent = "Jacke";
  } else {
    outfitText.textContent = "Wintermantel";
  }
});
```

</details>

**Zusatz:** Ergänze unter `0` Grad den Vorschlag `Wintermantel und Mütze`.

## 🎯 5.4 – Match-Counter

👉 Ordner `3-match`

Hier kombinierst du Variablen aus [Kapitel 4](../4-variablen/inhalt) mit Entscheidungen.

`index.html`

<<< @/projects/uebungen-5-if-else/3-match/index.html

**a)** Erstelle zwei Variablen `toreA` und `toreB` mit dem Wert `0`. Die Knöpfe `goalButtonA` und `goalButtonB` erhöhen den jeweiligen Wert um `1` und zeigen ihn in `scoreA` beziehungsweise `scoreB` an.

**b)** Beim Klick auf `winnerButton` soll in `winnerText` stehen:

- `Team A gewinnt`, wenn `toreA` grösser ist als `toreB`,
- `Team B gewinnt`, wenn `toreB` grösser ist,
- `Unentschieden`, wenn beide gleich viele Tore haben.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let scoreA = document.querySelector("#scoreA");
let scoreB = document.querySelector("#scoreB");
let goalButtonA = document.querySelector("#goalButtonA");
let goalButtonB = document.querySelector("#goalButtonB");
let winnerButton = document.querySelector("#winnerButton");
let winnerText = document.querySelector("#winnerText");

let toreA = 0;
let toreB = 0;

goalButtonA.addEventListener("click", function () {
  toreA += 1;
  scoreA.textContent = toreA;
});

goalButtonB.addEventListener("click", function () {
  toreB += 1;
  scoreB.textContent = toreB;
});

winnerButton.addEventListener("click", function () {
  if (toreA > toreB) {
    winnerText.textContent = "Team A gewinnt";
  } else if (toreB > toreA) {
    winnerText.textContent = "Team B gewinnt";
  } else {
    winnerText.textContent = "Unentschieden";
  }
});
```

</details>

**c)** Zeige zusätzlich an, wie gross der Vorsprung ist, zum Beispiel `Team A gewinnt mit 2 Toren Vorsprung`. Rechne dafür `toreA - toreB`.

**d) Zusatz – Tennis-Zähler:** Beim Tennis heissen die Punkte nicht `1, 2, 3`, sondern `15, 30, 40` und dann `Spiel`. Zeige statt der Toranzahl den passenden Tennis-Stand an:

| Punkte | Anzeige |
| ------ | ------- |
| `0`    | `0`     |
| `1`    | `15`    |
| `2`    | `30`    |
| `3`    | `40`    |
| `4`    | `Spiel` |

<details>
<summary>💡 Tipp anzeigen</summary>

Du brauchst eine `else if`-Kette, die aus der Punktzahl den Anzeigetext macht:

```js
if (punkteA == 0) {
  scoreA.textContent = "0";
} else if (punkteA == 1) {
  scoreA.textContent = "15";
}
```

</details>
