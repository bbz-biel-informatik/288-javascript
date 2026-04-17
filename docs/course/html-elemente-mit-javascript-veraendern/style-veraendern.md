# Style verändern

Mit Javascript kannst du einzelne CSS-Eigenschaften direkt setzen oder Klassen umschalten.

## Direkt per `style`

```js
const box = document.querySelector(".box");

box.style.backgroundColor = "tomato";
box.style.borderRadius = "12px";
```

## Mit Klassen

Klassen sind meist sauberer, weil die Darstellung dann weiter in CSS bleibt:

```js
const card = document.querySelector(".card");

card.classList.add("is-active");
card.classList.toggle("is-hidden");
```
