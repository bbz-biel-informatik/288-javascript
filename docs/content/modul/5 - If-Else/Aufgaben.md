# 5 - Aufgaben: If-Else

👉 [Übungen herunterladen](/assets/zips/uebungen-5-if-else.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

Entpacke den Ordner und starte den Live Server auf der `index.html` im Hauptordner. Von dort kommst du zu allen drei Übungen.

## 🎯 5.1 – Quiz

👉 Ordner `1-quiz`

Wir bauen ein Quiz mit drei Fragen. Öffne das Projekt im Browser und schaue es dir an. Die ersten beiden Fragen haben genau eine richtige Antwort, die dritte ist eine Schätzfrage. Deine Aufgaben sind folgende:

**a)** Beim Klick auf `question1Button` soll in `question1Result` `Richtig!` stehen, wenn im Feld `question1Field` genau `Madrid` eingetippt wurde. Sonst soll `Falsch!` erscheinen.

Neben den vorangehenden Kapiteln "Events" und "Variablen" brauchen wir hier nun diese Kapitel der Theorie: [Eine Entscheidung in einem Event](./inhalt#eine-entscheidung-in-einem-event) und [Werte vergleichen](./inhalt#werte-vergleichen).

<details>
<summary>💡 Tipp anzeigen</summary>

Texte vergleichst du gleich wie Zahlen, nur stehen sie in Anführungszeichen:

```js
if (question1Field.value == "Madrid") {
  // ...
}
```

Das Auslesen des Feldes mit [`value`](../10-cheatsheet#html-elemente-bearbeiten) kennst du bereits.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let question1Field = document.querySelector("#question1Field");
let question1Button = document.querySelector("#question1Button");
let question1Result = document.querySelector("#question1Result");

question1Button.addEventListener("click", function () {
  if (question1Field.value == "Madrid") {
    question1Result.textContent = "Richtig!";
  } else {
    question1Result.textContent = "Falsch!";
  }
});
```

Die Befehle findest du unter [Events](../10-cheatsheet#events), [If / Else](../10-cheatsheet#if-else) und [HTML Elemente bearbeiten](../10-cheatsheet#html-elemente-bearbeiten).

</details>

**b)** Die zweite Frage funktioniert gleich: `question2Button` prüft, ob in `question2Field` die Hauptstadt von Ungarn steht, und schreibt das Ergebnis in `question2Result`. Die richtige Antwort ist `Budapest`.

**c)** Die dritte Frage ist eine Schätzfrage. Die Luftlinie zwischen Biel und Rom beträgt rund `700` Kilometer. Beim Klick auf `question3Button` soll in `question3Result` stehen, **wie weit die Schätzung daneben liegt**, zum Beispiel `Du liegst 120 km daneben.`.

Denke daran, die Eingabe mit `Number(...)` in eine Zahl zu verwandeln.

<details>
<summary>💡 Tipp anzeigen</summary>

Rechne zuerst die Differenz aus:

```js
let schaetzung = Number(question3Field.value);
let differenz = schaetzung - 700;
```

Schätzt jemand zu tief, ist `differenz` negativ. Mit einer kleinen Entscheidung machen wir daraus eine positive Zahl:

```js
if (differenz < 0) {
  differenz = differenz * -1;
}
```

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let question3Field = document.querySelector("#question3Field");
let question3Button = document.querySelector("#question3Button");
let question3Result = document.querySelector("#question3Result");

question3Button.addEventListener("click", function () {
  let schaetzung = Number(question3Field.value);
  let differenz = schaetzung - 700;

  if (differenz < 0) {
    differenz = differenz * -1;
  }

  question3Result.textContent = "Du liegst " + differenz + " km daneben.";
});
```

</details>

**d)** Was passiert, wenn jemand `madrid` klein schreibt? Teste es und überlege dir, warum das so ist.

## 🎯 5.2 – Outfit-Chooser

👉 Ordner `2-outfit`

Hier gibt man die Temperatur von heute ein und das Programm schlägt ein Outfit vor. Je nach Temperatur ist das ein anderes. Öffne zuerst das Projekt im Browser.

**a)** Beim Klick auf `outfitButton` soll in `outfitText` ein Outfit vorgeschlagen werden. Die Temperatur steht im Feld `tempField`.

| Temperatur      | Vorschlag      |
| --------------- | -------------- |
| `25` oder mehr  | `T-Shirt`      |
| `15` bis `24`   | `Pullover`     |
| `5` bis `14`    | `Jacke`        |
| weniger als `5` | `Wintermantel` |

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

**b)** Ergänze unter `0` Grad den Vorschlag `Wintermantel und Mütze`.

**c)** Warum ist die Reihenfolge der Bedingungen wichtig? Drehe sie testweise um und beschreibe, was passiert.

## 🎯 5.3 – Match-Counter

👉 Ordner `3-match`

Wir zählen die Tore eines Fussballspiels und bestimmen am Schluss den Sieger. Hier kombinierst du Variablen aus [Kapitel 4](../4-variablen/inhalt) mit Entscheidungen.

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

**d) Tennis-Zähler:** Beim Tennis heissen die Punkte nicht `1, 2, 3`, sondern `15, 30, 40` und dann `Spiel`. Zeige statt der Toranzahl den passenden Tennis-Stand an:

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

## 🎯 5.4 – Vergleiche einschätzen

Diese Aufgabe machst du ohne Computer. Lies dir den Abschnitt [Werte vergleichen](./inhalt#werte-vergleichen) nochmals durch.

Die Spielerin hat `12` Punkte gesammelt:

```js
let score = 12;
```

Entscheide bei jedem Vergleich, ob er **stimmt** oder **nicht stimmt**:

```js
score == 12;
score != 0;
score > 20;
score < 20;
score >= 12;
score <= 5;
```

<details>
<summary>✅ Lösung anzeigen</summary>

| Vergleich     | Ergebnis     | Begründung                              |
| ------------- | ------------ | --------------------------------------- |
| `score == 12` | stimmt       | `score` enthält den Wert `12`.          |
| `score != 0`  | stimmt       | `12` ist nicht gleich `0`.              |
| `score > 20`  | stimmt nicht | `12` ist nicht grösser als `20`.        |
| `score < 20`  | stimmt       | `12` ist kleiner als `20`.              |
| `score >= 12` | stimmt       | `12` ist grösser oder gleich `12`.      |
| `score <= 5`  | stimmt nicht | `12` ist weder kleiner noch gleich `5`. |

</details>

## 🎯 5.5 – Zusatz: Punkte im Quiz zählen

👉 Ordner `1-quiz`

Zurück zum Quiz aus Aufgabe 5.1. Bisher sagt es nur, ob eine Antwort richtig oder falsch war. Jetzt zählen wir einen Punktestand mit und zeigen ihn in `scoreText` an.

**a)** Erstelle eine Variable `score` mit dem Wert `0` und zeige sie in `scoreText` an, zum Beispiel `Punkte: 0`.

**b)** Ergänze die beiden Hauptstadt-Fragen:

| Antwort | Punkte       |
| ------- | ------------ |
| richtig | `score += 3` |
| falsch  | `score -= 3` |

Nach jedem Klick soll `scoreText` den neuen Punktestand anzeigen.

<details>
<summary>✅ Lösung anzeigen</summary>

```js
let scoreText = document.querySelector("#scoreText");

let score = 0;

question1Button.addEventListener("click", function () {
  if (question1Field.value == "Madrid") {
    question1Result.textContent = "Richtig!";
    score += 3;
  } else {
    question1Result.textContent = "Falsch!";
    score -= 3;
  }

  scoreText.textContent = "Punkte: " + score;
});
```

Die zweite Frage funktioniert genau gleich, nur mit `Budapest`.

</details>

**c)** Bei der Schätzfrage gibt es Punkte je nachdem, wie nahe die Schätzung liegt. Du hast die Differenz in Aufgabe 5.1 bereits berechnet:

| Differenz         | Punkte |
| ----------------- | ------ |
| bis `50` km       | `+3`   |
| bis `150` km      | `+2`   |
| bis `300` km      | `+1`   |
| bis `600` km      | `-1`   |
| mehr als `600` km | `-3`   |

Verwende dafür eine `else if`-Kette und beginne bei der kleinsten Differenz.

<details>
<summary>💡 Tipp anzeigen</summary>

```js
if (differenz <= 50) {
  score += 3;
} else if (differenz <= 150) {
  // ...
}
```

Zeige danach wieder die Differenz **und** den neuen Punktestand an.

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
question3Button.addEventListener("click", function () {
  let schaetzung = Number(question3Field.value);
  let differenz = schaetzung - 700;

  if (differenz < 0) {
    differenz = differenz * -1;
  }

  if (differenz <= 50) {
    score += 3;
  } else if (differenz <= 150) {
    score += 2;
  } else if (differenz <= 300) {
    score += 1;
  } else if (differenz <= 600) {
    score -= 1;
  } else {
    score -= 3;
  }

  question3Result.textContent = "Du liegst " + differenz + " km daneben.";
  scoreText.textContent = "Punkte: " + score;
});
```

</details>

**d)** Was würde passieren, wenn du bei der Schätzfrage mit `differenz <= 600` beginnen würdest? Teste es und beschreibe das Ergebnis.
