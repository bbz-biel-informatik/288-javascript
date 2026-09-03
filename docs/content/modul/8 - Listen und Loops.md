# 8 - Listen und Loops

👉 [Projektstand nach Kapitel 7 herunterladen](/assets/zips/space-robot-loesung-7.zip)

Listen fassen mehrere Werte zusammen. Loops führen Code wiederholt aus. Zusammen helfen sie uns, viele Spielelemente mit wenig Code zu bearbeiten.

Die wichtigsten Schreibweisen findest du im Abschnitt [Listen und Loops](./9-cheatsheet#listen-und-loops) des Cheatsheets.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Liste definieren,
- mit `forEach(...)` durch eine Liste gehen,
- mehrere HTML-Elemente auswählen und verändern.

## Eine Liste speichert mehrere Werte

```js
let colors = ["red", "green", "blue"];
```

Die eckigen Klammern zeigen, dass `colors` eine Liste ist. Die einzelnen Werte sind mit Kommas getrennt. Doch wozu brauchen wir das? Es kann vorkommen, dass wir mehrere Elemente gemeinsam verändern / bewegen möchten. Das können wir mit dem folgenden Befehl machen. Wir haben nun nicht mehr ein HTML element, sondern alle Elemente mit der gegebenen Klasse als Liste gespeichert.

```js
let enemies = document.querySelectorAll(".enemy");
```

[`document.querySelectorAll(...)`](./9-cheatsheet#html-elemente-auswahlen) sucht nicht nur das erste passende Element. Es liefert alle Elemente mit der Klasse `enemy` als Sammlung zurück.

## Warum brauchen wir einen Loop?

Die Variable `enemies` enthält nun mehrere Elemente. [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) kann aber immer nur ein einzelnes Element bewegen. Mit forEach können wir bei jedem Element vorbeischauen und etwas machen. Das sieht dann ca. folgendermassen aus:

Mit [`forEach(...)`](./9-cheatsheet#listen-und-loops) gehen wir durch die Sammlung:

```js
enemies.forEach(function (enemy) {
  moveElement(enemy, -5, 0);
});
```

Bei jedem Durchlauf verweist `enemy` auf genau ein Element:

1. erster Gegner → 5 Pixel nach links bewegen
2. zweiter Gegner → 5 Pixel nach links bewegen
3. dritter Gegner → 5 Pixel nach links bewegen

Der Loop weist unseren kleinen Javascript-roboter an, bei allen Gegnern vorbei zu gehen und jeden einzeln ein kleines Stück nach links zu schieben. Der gleiche Code funktioniert unabhängig davon, ob es zwei oder zwanzig Gegner gibt.

## Wiederholung nach Zeit

[`setInterval(...)`](./9-cheatsheet#listen-und-loops) führt einen Codeblock in einem festen Zeitabstand erneut aus:

```js
setInterval(function () {
  timeLeft = timeLeft - 1;
  timer.textContent = "Zeit: " + timeLeft;
}, 1000);
```

`1000` Millisekunden entsprechen einer Sekunde. JavaScript merkt sich den Auftrag und ruft die Funktion danach immer wieder auf.

Das eignet sich zum Beispiel für einen Countdown. Für flüssige Bewegungen in einem Spiel verwenden wir stattdessen den [Game Loop](./3-game-loop).

## Aufgaben

### Alle Gegner bewegen

Bewege alle Gegner bei jedem Durchlauf des Game Loops nach links.

1. Wähle mit [`document.querySelectorAll(...)`](./9-cheatsheet#html-elemente-auswahlen) alle Elemente mit der Klasse `enemy` aus.
2. Gehe mit [`forEach(...)`](./9-cheatsheet#listen-und-loops) durch alle ausgewählten Gegner.
3. Bewege jeden Gegner mit [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) um `2` Pixel nach links.
4. Teste verschiedene Werte: Was verändert sich bei `-1`, `-5` oder `-10`?

Füge deinen Code in die Funktion [`gameLoop()`](./9-cheatsheet#listen-und-loops) ein.
