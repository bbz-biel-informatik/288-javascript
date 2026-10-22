# 6 - Aufgaben: Vergleiche

👉 [Projektstand nach Kapitel 5 herunterladen](/assets/zips/space-robot-loesung-5.zip)

Die Theorie zu diesen Aufgaben findest du im [Inhalt](./inhalt) dieses Kapitels.

## 🎯 6.1 – Leben vergleichen

Lies dir den Abschnitt [Werte vergleichen](./inhalt#werte-vergleichen) nochmals durch und beantworte die folgenden Fragen.

Der Roboter hat `600` Leben:

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

Die Bedeutung aller Vergleichszeichen findest du unter [If / Else](../9-cheatsheet#if-else) im Cheatsheet.

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

## 🎯 6.2 – Game Over testen

`statusText` zeigt bereits die aktuelle Anzahl Leben an. Für Meldungen wie `Volle Energie` oder `Game Over` ist im Starterprojekt deshalb die zusätzliche Anzeige `gameStatus` vorbereitet.

Wähle das Element in `script.js` mit [`document.querySelector(...)`](../9-cheatsheet#html-elemente-auswahlen) aus:

```js
let gameStatus = document.querySelector("#gameStatus");
```

Programmiere eine Entscheidung mit drei möglichen Texten:

- Bei 800 oder mehr Leben erscheint `Volle Energie`.
- Bei 1 bis 799 Leben erscheint `Roboter beschädigt`.
- Bei 0 Leben erscheint `Game Over`.

Setze die Entscheidung in deinen bestehenden Game Loop, damit sie den Wert von `life` fortlaufend prüft. Verwende dafür `if`, `else if` und `else`. Teste deinen Code beim Spielen.

<details>
<summary>💡 Tipp anzeigen</summary>

Beginne mit der höchsten Anzahl Leben:

```js
if (life >= 800) {
  gameStatus.textContent = "Volle Energie";
}
```

Ergänze danach eine weitere Bedingung und den Fall für alle übrigen Werte. Die Schreibweise findest du unter [If / Else](../9-cheatsheet#if-else).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
// Vor dem Game Loop
let gameStatus = document.querySelector("#gameStatus");

// Im Game Loop
if (life >= 800) {
  gameStatus.textContent = "Volle Energie";
} else if (life > 0) {
  gameStatus.textContent = "Roboter beschädigt";
} else {
  gameStatus.textContent = "Game Over";
}
```

| Wert von `life` | Angezeigter Text     |
| --------------- | -------------------- |
| `1000`          | `Volle Energie`      |
| `600`           | `Roboter beschädigt` |
| `0`             | `Game Over`          |

Die verwendeten Befehle findest du unter [Variablen](../9-cheatsheet#variablen), [If / Else](../9-cheatsheet#if-else) und [HTML-Elemente bearbeiten](../9-cheatsheet#html-elemente-bearbeiten).

</details>
