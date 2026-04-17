# Javascript in Webseiten einbinden

Javascript läuft im Browser und ergänzt HTML und CSS um Verhalten. Für den Einstieg reicht es, ein Skript direkt in die Website einzubinden.

## Direkt im HTML

Ein kleines Script kann direkt im HTML notiert werden:

```html
<body>
  <button id="hello-button">Sag Hallo</button>

  <script>
    document.querySelector("#hello-button").addEventListener("click", () => {
      alert("Hallo aus Javascript");
    });
  </script>
</body>
```

## Als eigene Datei

Sobald mehr Code entsteht, ist eine separate Datei übersichtlicher:

```html
<body>
  <script src="./main.js"></script>
</body>
```

```js
console.log("Javascript ist geladen.");
```

## Warum diese Variante meist besser ist

- HTML bleibt lesbarer.
- Der Javascript-Code kann separat gepflegt werden.
- Codebeispiele lassen sich später einfacher wiederverwenden.
