# Javascript course

This repo contains a javascript course for my students.

## Important info

The course language is always german.
The students are javascript beginners so we need to explain well.
Every command we use in the script should also have a reference to the cheatsheet.
The course should focus on the learning objectives (see below)

## Technical notice

If we are authoring the course, we just touch the .md fils. Technical detail for the framework are written in README.md

## Analogies

It is good to explain to students with analogies:

- Javascript: It is like a small goblin running around the city of html elements, changing stuff, noting stuff and so on.

## Game framework

The repo contains a game framework with tutorials in a separate chapter structure as well. This is for their project that they're doing. The goal is to use those functions in the course as well so they have examples.

## Learning objectives

Those are the learning objectives of this course. The scope should not exceed them.

## HTML Elemente auswählen / verändern

- Ich kann ein HTML Element mit Javascript auswählen
- Ich kann ein HTML Element mit Javascript verändern
- Ich kann ein HTML Element mit Javascript löschen

Key commands:
document.querySelector('');
element.style.backgroundColor = ‘red’
element.remove();

## Events

- Ich weiss, was Javascript Events sind und wie ich sie einsetzen kann.
- Ich Weiss den Unterschied zwischen Tastatur events und Click events.
- Ich kann ein Event selber programmieren. “Wenn auf X geklickt wird, soll Y passieren”.

Key commands:
document.addEventListener(‘keydown’, function(event){…})
element.addEventListener(‘click’, function(event){…})

## Funktionen

- Ich Weiss, was Javascript Funktionen sind und wie ich sie einsetzen kann.
- Ich kann eine Funktion definieren (Mit und ohne Parameter)
- Ich kann eine Funktion aufrufen

Key commands:
function myFunctionName(myParam1, myParam2)

note: we do not look at anonymous functions () => {}

## If Else

- Ich kann Entscheidungen in Javascript programmieren. | if(…) {…} else {…}
- Ich kann Entscheidungen aneinander ketten | else if (…) {…}
- Ich kenne die gängigen Vergleiche | ==, >, <, >=, <=, !=

Key commands:
if(){} else(){}
else if(

note: Vergleiche schauen wir diese an: ==, >, <, >=, <=, !=

## Variablen

- Ich Weiss, was Variablen sind und wie ich sie einsetzen kann
- Ich kann eine Variable definieren | let score = 0
- Ich kann eine Variable verändern | score = 12
- Ich kann mit Variablen rechnen | score = score + 1
- Ich kenne die gänigen Operatoren | +, -, *, /
- Ich kenne den Unterschied zwischen einem Text und seiner Zahl in Variablen

note: wir schauen nur 'let' an. Als Typen schauen wir nur text und number an.

## Listen und Loops

- Ich weiss, wie eine Liste definiert wird.
- Ich weiss, wie ich durch Listen iterieren kann.
- Ich weiss, wie ich viele Elemente ansprechen und verändern kann.
- Ich weiss, wie ein Gameloop funktioniert

Key commands:

```js
let list = ["apple", "banana"];
let enemies = document.querySelectorAll(".enemy");
enemies.forEach((elt) => {
  // do sth here.
  elt.remove();
});

function gameLoop() {
  // Dieser Befehl führt einfach dazu, dass der forever loop passiert. Was genau, müssen wir nicht erklären.
  window.requestAnimationFrame(gameLoop);
}

gameLoop();
```
