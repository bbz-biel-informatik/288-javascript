# 6 - Listen und Loops

Listen fassen mehrere Werte zusammen. Loops führen Code wiederholt aus. Zusammen helfen sie uns, viele Spielelemente mit wenig Code zu bearbeiten.

Die wichtigsten Schreibweisen findest du im Abschnitt [Listen und Loops](./8-cheatsheet#listen-und-loops) des Cheatsheets.

## Lernziele

Nach diesem Kapitel kannst du:

* eine Liste definieren,
* mit `forEach(...)` durch eine Liste gehen,
* mehrere HTML-Elemente auswählen und verändern.

## Eine Liste speichert mehrere Werte

```js
let colors = ["red", "green", "blue"];
```

Die eckigen Klammern zeigen, dass `colors` eine Liste ist. Die einzelnen Werte sind mit Kommas getrennt.

In einem Spiel können auch mehrere HTML-Elemente gemeinsam ausgewählt werden:

```js
let enemies = document.querySelectorAll(".enemy");
```

[`document.querySelectorAll(...)`](./8-cheatsheet#html-elemente-auswahlen) sucht nicht nur das erste passende Element. Es liefert alle Elemente mit der Klasse `enemy` als Sammlung zurück.

## Warum brauchen wir einen Loop?

Die Variable `enemies` enthält mehrere Elemente. Ein Befehl wie `enemies.remove()` weiss deshalb nicht, welcher einzelne Gegner gemeint ist.

Mit [`forEach(...)`](./8-cheatsheet#listen-und-loops) gehen wir durch die Sammlung:

```js
enemies.forEach(function(enemy) {
  enemy.remove();
});
```

Bei jedem Durchlauf verweist `enemy` auf genau ein Element:

1. erster Gegner → entfernen
2. zweiter Gegner → entfernen
3. dritter Gegner → entfernen

Der gleiche Code funktioniert unabhängig davon, ob es zwei oder zwanzig Gegner gibt.

## Wiederholung nach Zeit

[`setInterval(...)`](./8-cheatsheet#listen-und-loops) führt einen Codeblock in einem festen Zeitabstand erneut aus:

```js
setInterval(function() {
  timeLeft = timeLeft - 1;
  timer.textContent = "Zeit: " + timeLeft;
}, 1000);
```

`1000` Millisekunden entsprechen einer Sekunde. JavaScript merkt sich den Auftrag und ruft die Funktion danach immer wieder auf.

Das eignet sich zum Beispiel für einen Countdown. Für flüssige Bewegungen in einem Spiel verwenden wir stattdessen den [Game Loop](./3-game-loop).

## Aufgaben

In den Übungen erweitern wir das bestehende Weltraum-Roboter-Projekt mit Listen und Loops. Wir starten kein neues Spiel. Die genauen Aufgaben werden später ergänzt.
