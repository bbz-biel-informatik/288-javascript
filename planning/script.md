# 288 - Javascript

Wilkommen Zum Javascript Modul. Dieses Script soll den Grossteil des Stoffs vom Unterricht abdecken. Wir werden gemeinsam ein Game mit Html und Javascript entwickeln. Anhand des Games lernen wir, wie wir Webseiten interaktiv gestalten können.

## 1 - Javascript in HTML einbinden

Javascript ist eine Programmiersprache, welcher im Browser auf Websites ausgeführt wird. Mit Javascript können wir HTML und CSS dynamisch ansprechen und verändern. Zu Beginn lohnt es sich, einen kurzen Blick darauf zu werfen und die wichtigsten Tags zu repetieren.

// TODO: Beispiel HTMl schreiben

```html
<html>
  <head> </head>
  <body>
    <div id="wrapper">
      <div id="playground">
        <img id="player" />
        <img class="obstacle" />
      </div>
    </div>
  </body>
</html>
```

```css
# Some CSS Code here
```

### Aufgabe: Gamestyling

Erstelle ein neues leeres Projekt mit VS Code und erstelle zwei Dateien (game.html und game.css). Füge den Inhalt von oben hinzu und style die beiden Elemente "wrapper" und "playground" so, dass wir eine "Bühne" für unser Game haben. Mache das so, wie es dir passt. Nachfolgend aber ein paar Vorschläge:

- wrapper -> Soll über den ganzen Screen gehen (height: 100vh, width: 100vw)
- playground -> Soll zentriert sein und etwas kleiner (height: 80vh, width: 100vw)
- Füge ein paar schöne Hintergrundfarben oder ein Bild hinzu.

### 1.2 - Javascript einbinden

Wollen wir nun zu unserem HTML Javascript code schreiben, gibt es zwei Varianten. Wir können ein Tag öffnen `<script>` und wieder schliessen `</script>` und dazwischen unser Code einfügen. Das macht Sinn, wenn wir nicht viel Code haben. Wird unser Code komplexer, dann erstellen wir ein neues File und fügen das als src ein: `<script src="myScript.js">`. Das Script `myScript.js` sollte sich im selben Ordner wie das HTML befinden. Diese Methode ist meist zu bevorzugen. Unten ein Beispiel dazu.

```html
<html>
  <head> </head>
  <body>
    ...
    <script src="./myScript.js"></script>
  </body>
</html>
```

```js
// some code here
```
