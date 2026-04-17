# Variablen in Javascript

Variablen speichern Werte, damit du sie später wiederverwenden kannst.

## Häufige Formen

```js
const title = "Javascript";
let counter = 0;
```

## Wann `const` und wann `let`?

- `const` verwendest du, wenn der Name immer auf denselben Wert zeigt.
- `let` verwendest du, wenn sich der Wert später ändern darf.

## Bezug zum DOM

Auch eine Element-Referenz wird meist in einer Variablen gespeichert:

```js
const titleElement = document.querySelector("#title");
```
