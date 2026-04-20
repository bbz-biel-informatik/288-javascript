# Javascript Intro

Willkommen zum Javascript-Modul. In diesem Einstieg richtest du deine Entwicklungsumgebung ein und erstellst ein erstes HTML-Projekt.

## Einfaches Javascript-Beispiel

```js
function greet(name) {
  return `Hallo ${name}`;
}

console.log(greet("Nora"));
```

## VS Code Setup

Installiere [Visual Studio Code](https://code.visualstudio.com/) und richte den Editor für das Modul ein.

Empfohlene Extensions:

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (optional, da VitePress auch einen Dev-Server mitbringt)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Aktiviere ausserdem `File > Auto Save`, damit Änderungen automatisch gespeichert werden.

## Aufgabe - Projekt Setup

Das Ziel ist es, die lokale Entwicklungsumgebung für das Modul einzurichten und ein einfaches HTML-Grundgerüst zu erstellen, um mit Javascript zu experimentieren.

### 1: Projektordner erstellen

Erstelle einen neuen Ordner, zum Beispiel `javascript-project`, und öffne diesen Ordner in VS Code.

### 2: HTML-Datei erstellen

Erstelle eine Datei `index.html` mit einem einfachen HTML-Grundgerüst.

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Javascript Projekt</title>
  </head>
  <body>
    <h1>Willkommen zu meinem Javascript Projekt</h1>
  </body>
</html>
```

### 3: Editor testen

Installiere und teste die empfohlenen Extensions. Aktiviere und teste danach Auto Save in den VS Code Einstellungen.
