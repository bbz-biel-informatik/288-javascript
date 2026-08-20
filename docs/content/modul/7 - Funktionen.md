# 7 - Funktionen

::: tip 📦 Projektstand zu Beginn dieses Kapitels
Hier ist das Weltraum-Roboter-Projekt mit allen gelösten Aufgaben aus Kapitel 6 - Vergleiche:

👉 [Projektstand nach Kapitel 6 herunterladen](/assets/zips/space-robot-loesung-6.zip)

Lade den Ordner herunter, wenn du eine Aufgabe nicht fertig gelöst hast oder etwas
bei dir nicht funktioniert. So startest du dieses Kapitel auf dem gleichen Stand wie alle anderen.
:::

Unser Roboter kann sich inzwischen bewegen, Leben verlieren, Energie einsammeln und seinen Spielzustand anzeigen. Dadurch ist der Game Loop aber immer länger geworden.

In diesem Kapitel räumen wir diesen Code auf. Dafür verwenden wir **Funktionen**: Eine Funktion fasst Befehle unter einem passenden Namen zusammen. Danach können wir diese Befehle mit ihrem Namen ausführen.

> Funktionen sind wie Bausteine, mit denen wir den Code aufbauen können.

Die Schreibweise findest du auch im Abschnitt [Funktionen](./9-cheatsheet#funktionen) des Cheatsheets.

## Lernziele

Nach diesem Kapitel kannst du:

- erklären, wozu Funktionen dienen,
- eine Funktion ohne Parameter definieren und aufrufen,
- eine Funktion mit Parametern definieren und aufrufen und
- bestehenden Code in passende Funktionen auslagern.

## Einem Codeblock einen Namen geben

Schauen wir uns die Kollisionsprüfung aus unserem bisherigen Game Loop an:

```js
if (isColliding(robot, energy)) {
  life = 1000;
  energy.remove();
}
```

Dieser Code prüft, ob der Roboter die Energiekiste berührt. Bei einer Kollision füllt er die Leben auf und entfernt die Kiste. Wir können diesen bekannten Code in eine Funktion verschieben und ihm den Namen `collectEnergy` geben:

```js
// Funktion mit dem Namen collectEnergy definieren
function collectEnergy() {
  if (isColliding(robot, energy)) {
    life = 1000;
    energy.remove();
  }
}
```

Die erste Zeile ist die **Definition** der Funktion:

- `function` sagt JavaScript, dass wir eine Funktion definieren.
- `collectEnergy` ist der selbst gewählte Name.
- Die runden Klammern `()` gehören zur Funktion.
- Zwischen `{` und `}` stehen die Befehle der Funktion.

Beim Definieren merkt sich JavaScript die Befehle nur. Es führt sie noch nicht aus!

## Eine Funktion aufrufen

Damit JavaScript die gespeicherten Befehle ausführt, rufen wir die Funktion auf:

```js
collectEnergy();
```

Die Klammern nach dem Namen bedeuten:

> Führe die Funktion `collectEnergy` jetzt aus.

Du kannst dir eine Funktion wie ein Rezept vorstellen. Die Definition schreibt das Rezept auf. Der Aufruf sagt dem JavaScript-Goblin: «Führe dieses Rezept jetzt aus.»

Merke:

> Funktion definieren: `function collectEnergy() { ... }`  
> Funktion aufrufen: `collectEnergy();`

Beide Schreibweisen findest du unter [Funktionen](./9-cheatsheet#funktionen).

## Funktionen kennen wir bereits

Wir haben Funktionen schon verwendet, ohne ihren Aufbau genauer anzuschauen. Beim Bewegen des Roboters haben wir zum Beispiel diese Funktion aufgerufen:

```js
moveElement(robot, speed, 0);
```

`moveElement` ist der Name der Funktion. Die Werte zwischen den runden Klammern sagen ihr, welches Element sie wie weit bewegen soll. Diese Funktion wurde bereits im Game Framework definiert. Deshalb mussten wir sie nur noch aufrufen. Du findest sie bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement).

Den Game Loop haben wir sogar selbst als Funktion definiert und aufgerufen:

```js
function gameLoop() {
  // Das Spiel aktualisieren.
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Damals haben wir diesen Aufbau als festes Muster übernommen. Nun kennen wir die beiden Teile: `function gameLoop() { ... }` definiert die Funktion und `gameLoop();` ruft sie zum ersten Mal auf. Danach plant [`requestAnimationFrame(...)`](./9-cheatsheet#listen-und-loops) den nächsten Aufruf. Die Funktionsschreibweise steht unter [Funktionen](./9-cheatsheet#funktionen).

## Warum lagern wir Code in Funktionen aus?

Eine Funktion hilft uns vor allem in zwei Situationen:

1. **Mehrere Befehle gehören zu einer Aufgabe.** Der Name der Funktion erklärt diese Aufgabe.
2. **Derselbe Code kommt mehrmals vor.** Wir schreiben ihn einmal in eine Funktion und rufen diese danach mehrmals auf.

## Parameter: Eine Funktion erhält Werte

Manchmal soll fast derselbe Code mit unterschiedlichen Werten ausgeführt werden. Unser Roboter bewegt sich zum Beispiel in verschiedene Richtungen. Dafür kann eine Funktion Werte entgegennehmen:

```js
function driveRobot(x, y) {
  moveElement(robot, x, y);
  life -= 1;
}
```

`x` und `y` sind **Parameter**. Sie sind Platzhalter für die Werte, die wir beim Aufruf einsetzen.

```js
driveRobot(speed, 0);
driveRobot(-speed, 0);
```

Beim ersten Aufruf enthält `x` den Wert von `speed` und `y` den Wert `0`. Beim zweiten Aufruf enthält `x` den negativen Wert von `speed`. Die Reihenfolge muss zu den Parametern in der Definition passen.

Die Funktion kann dadurch dieselben Befehle für mehrere Richtungen verwenden.

## Code in eine Funktion auslagern

Beim Auslagern gehen wir so vor:

1. Finde Befehle, die gemeinsam eine Aufgabe erledigen.
2. Gib der Aufgabe einen verständlichen Funktionsnamen.
3. Verschiebe die Befehle zwischen die geschweiften Klammern der Funktion.
4. Setze am ursprünglichen Ort einen Funktionsaufruf ein.
5. Teste, ob sich das Programm noch gleich verhält.

Wichtig: Verschiebe den Code, statt ihn zusätzlich zu kopieren. Sonst würde JavaScript die Befehle zweimal ausführen.

Ein Beispiel:

**Vorher**

```js
function gameLoop() {
  // Sonstiger Code

  if (life >= 800) {
    gameStatus.textContent = "Volle Energie";
  } else if (life > 0) {
    gameStatus.textContent = "Roboter beschädigt";
  } else {
    gameStatus.textContent = "Game Over";
  }

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

**Nachher**

```js
// Funktion definieren (Wird noch nicht ausgeführt)
function updateGameStatus() {
  if (life >= 800) {
    gameStatus.textContent = "Volle Energie";
  } else if (life > 0) {
    gameStatus.textContent = "Roboter beschädigt";
  } else {
    gameStatus.textContent = "Game Over";
  }
}

function gameLoop() {
  // Sonstiger Code

  // Hier funktion ausführen
  updateGameStatus();

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die Entscheidung bleibt gleich. Sie befindet sich nun in einer passend benannten Funktion.

## Was bedeutet genau `{ ... }`

Geschweifte Klammern `{ ... }` fassen JavaScript-Befehle zu einem **Block** zusammen. Wir kennen solche Blöcke bereits von `if`, `else`, Funktionen und dem Game Loop:

```js
if (life <= 0) {
  let message = "Game Over";
  gameStatus.textContent = message;
}
```

Eine Variable, die mit `let` **innerhalb** eines Blocks definiert wird, gehört nur zu diesem Block. Hinter der schliessenden Klammer `}` ist sie nicht mehr verfügbar:

```js
if (life <= 0) {
  let message = "Game Over";
}

gameStatus.textContent = message; // Fehler: message ist hier nicht mehr bekannt.
```

Das ist besonders beim Auslagern wichtig: Wenn anderer Code eine Variable ebenfalls benötigt, muss sie ausserhalb der Blöcke definiert werden. Eine bereits ausserhalb definierte Variable wie `life` kann dagegen auch innerhalb einer Funktion verwendet und verändert werden:

```js
let life = 1000;

function removeLife() {
  life -= 1;
}
```

Auch Parameter gehören nur zum Block ihrer Funktion. Die Parameter `x` und `y` aus `driveRobot(x, y)` sind deshalb ausserhalb von `driveRobot` nicht verfügbar.

Die Definition mit [`let`](./9-cheatsheet#variablen), die Schreibweise von [If / Else](./9-cheatsheet#if-else), das Ändern von [`textContent`](./9-cheatsheet#html-elemente-bearbeiten) und Funktionen stehen im Cheatsheet.

## Aufgaben

### 🎯 7.1 – Die Spielerbewegung auslagern

Öffne den aktuellen Game Loop deines Weltraum-Roboter-Projekts und suche den Bereich, der für die Bewegung des Roboters verantwortlich ist.

Lagere diesen gesamten Bereich in eine sinnvoll benannte Funktion aus. Im Game Loop soll an der bisherigen Stelle nur noch der Aufruf deiner neuen Funktion stehen. Das Verhalten des Spiels darf sich dabei nicht verändern.

Nutze die Schritte aus [Code in eine Funktion auslagern](#code-in-eine-funktion-auslagern). Die Schreibweise zum Definieren und Aufrufen findest du unter [Funktionen](./9-cheatsheet#funktionen).

<details>
<summary>💡 Ersten Tipp anzeigen</summary>

Zur Spielerbewegung gehören die vier Bedingungen für `ArrowRight`, `ArrowLeft`, `ArrowUp` und `ArrowDown`. Verschiebe diese vier `if`-Blöcke gemeinsam in eine neue Funktion, zum Beispiel:

```js
function moveRobot() {
  // Die bisherige Spielerbewegung kommt hier hinein.
}
```

Rufe `moveRobot()` danach dort im Game Loop auf, wo vorher die vier Bedingungen standen. Die Bedingungen findest du unter [If / Else](./9-cheatsheet#if-else), die Tastennamen bei [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed).

</details>

<details>
<summary>✅ Lösung anzeigen</summary>

```js
function moveRobot() {
  if (isKeyPressed("ArrowRight")) {
    moveElement(robot, speed, 0);
    life -= 1;
  }

  if (isKeyPressed("ArrowLeft")) {
    moveElement(robot, -speed, 0);
    life -= 1;
  }

  if (isKeyPressed("ArrowUp")) {
    moveElement(robot, 0, speed);
    life -= 1;
  }

  if (isKeyPressed("ArrowDown")) {
    moveElement(robot, 0, -speed);
    life -= 1;
  }
}

function gameLoop() {
  moveRobot();

  // Der bisherige Code für Kollision, Lebensanzeige
  // und Spielzustand bleibt hier unverändert.

  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```

Die neue Funktion enthält nur Code, der zur Bewegung gehört. Der Game Loop zeigt mit `moveRobot();` nun auf einen Blick, welche Aufgabe an dieser Stelle ausgeführt wird.

Die verwendeten Befehle findest du unter [Funktionen](./9-cheatsheet#funktionen), [If / Else](./9-cheatsheet#if-else), [Variablen](./9-cheatsheet#variablen) und [HTML-Elemente bearbeiten](./9-cheatsheet#html-elemente-bearbeiten) sowie in der Framework-Dokumentation bei [`moveElement(...)`](/jsgame/3-framework-docs#moveelement) und [`isKeyPressed(...)`](/jsgame/3-framework-docs#iskeypressed).

</details>

## Zusammenfassung

- Eine Funktion fasst Befehle unter einem Namen zusammen.
- Die Definition speichert die Befehle, der Aufruf führt sie aus.
- Parameter machen eine Funktion mit unterschiedlichen Werten nutzbar.
- Beim Auslagern verschieben wir Code in eine Funktion und setzen an seiner bisherigen Stelle einen Aufruf ein.
- Kleine, passend benannte Funktionen machen den Game Loop verständlicher.
