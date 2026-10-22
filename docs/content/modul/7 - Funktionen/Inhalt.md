# 7 - Funktionen

Unser Game Loop wird immer länger. Mit **Funktionen** können wir zusammengehörige Befehle unter einem Namen zusammenfassen.

> Eine Funktion ist wie ein Rezept: Wir schreiben es einmal auf und können es danach mit seinem Namen ausführen.

## Lernziele

Nach diesem Kapitel kannst du:

- eine Funktion mit und ohne Parameter definieren und
- eine Funktion aufrufen.

## Funktionen definieren und aufrufen

So geben wir mehreren Befehlen den Namen `collectEnergy`:

```js
function collectEnergy() {
  life = 1000;
  energy.remove();
}
```

Das ist die **Definition**. JavaScript merkt sich die Befehle, führt sie aber noch nicht aus.

Mit dem Namen und runden Klammern rufen wir die Funktion auf:

```js
collectEnergy();
```

> Definieren: `function collectEnergy() { ... }`; aufrufen: `collectEnergy();`

Die Schreibweise findest du im Cheatsheet unter [Funktionen](../9-cheatsheet#funktionen).

Wir kennen Funktionen bereits aus dem Game Framework. Zum Beispiel ruft dieser Befehl die Funktion `moveElement` auf:

```js
moveElement(robot, speed, 0);
```

Diese Funktion haben aber in dem Fall nicht wir definiert, sondern sie kommen von einem anderen Ort. Namentlich vom script, dass wir im HTML laden.

## Parameter

Eine eigene Funktion kann ebenfalls Werte erhalten:

```js
function driveRobot(x, y) {
  moveElement(robot, x, y);
  life -= 1;
}

driveRobot(speed, 0);
driveRobot(-speed, 0);
```

`x` und `y` sind **Parameter**: Platzhalter für die Werte beim Aufruf. Beim ersten Aufruf fährt der Roboter nach rechts, beim zweiten nach links.

Diese Parameter wirklen innerhalb der Funktion `{ }` genau wie wariablen. Wenn wir die Funktion aufrufen, können wir die Parameter selber bestimmen.

## Zusammenfassung

- Eine Funktion bündelt Befehle unter einem Namen.
- Die Definition speichert die Befehle. Der Aufruf führt sie aus.
- Parameter sind Platzhalter für Werte.

👉 Weiter zu den [Aufgaben](./aufgaben)
