// Lösungen pro Kapitel ein- und ausblenden.
//
// true  = Die Lösungsblöcke erscheinen auf der Website.
// false = Die Lösungsblöcke werden beim Build komplett entfernt. Sie stehen dann
//         auch nicht im HTML und sind über die Entwicklerkonsole nicht auffindbar.
//
// Nach einer Änderung einmal `npm run deploy` ausführen, damit die Website den
// neuen Stand erhält. Schneller geht es mit `npm run loesungen` (siehe README).

export const loesungenConfig = {
  // Gilt für alle Kapitel, die unten nicht aufgeführt sind.
  standard: false,

  // Schlüssel ist der Kapitel-Slug aus der URL, zum Beispiel /modul/4-variablen/aufgaben.
  kapitel: {
    "1-javascript-setup": true,
    "2-html-elemente-auswaehlen-und-veraendern": true,
    "3-events": true,
    "4-variablen": false,
    "5-if-else": false,
    "6-game-loop": false,
    "7-funktionen": false,
    "8-listen-und-loops": false
  },

  // Zeigt auf Seiten mit ausgeblendeten Lösungen einen kurzen Hinweis an.
  hinweisAnzeigen: true,
  hinweisText: "Die Lösungen sind für dieses Kapitel aktuell ausgeblendet."
};
