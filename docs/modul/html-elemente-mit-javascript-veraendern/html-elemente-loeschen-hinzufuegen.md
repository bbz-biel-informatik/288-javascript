# HTML Elemente löschen / hinzufügen

Javascript kann nicht nur bestehende Elemente verändern, sondern auch neue erzeugen oder alte entfernen.

## Element hinzufügen

```js
const list = document.querySelector("#todo-list");
const item = document.createElement("li");

item.textContent = "Neue Aufgabe";
list.appendChild(item);
```

## Element löschen

```js
const notice = document.querySelector(".notice");

notice?.remove();
```

## Wofür das nützlich ist

- Meldungen anzeigen
- Listen dynamisch erweitern
- Spielfiguren, Punkte oder UI-Elemente einblenden
