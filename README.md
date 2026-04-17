# 288 Javascript Documentation Workspace

Dieses Repository verwendet **eine** VitePress-App für die komplette Website:

- Landingpage auf `/`
- Kursdokumentation auf `/course/`
- Game-Doku auf `/game/`
- Library-Doku auf `/library/`

Alles bleibt markdown-first, gemeinsam gestylt und lokal deploybar nach GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

Weitere Befehle:

- `npm run build` erstellt die statische Website lokal.
- `npm run preview` startet eine lokale Vorschau der gebauten Website.
- `npm run deploy` baut lokal und veröffentlicht den Inhalt von `docs/.vitepress/dist` mit `gh-pages`.

## Ordnerstruktur

```text
.
├── docs
│   ├── .vitepress
│   │   ├── config.mts
│   │   └── theme
│   │       ├── Layout.vue
│   │       ├── custom.css
│   │       ├── index.ts
│   │       └── shared
│   │           └── global.ts
│   ├── assets
│   │   ├── diagrams
│   │   │   └── README.txt
│   │   └── images
│   │       └── dom-selection-flow.svg
│   ├── course
│   ├── examples
│   │   └── dom-demo
│   ├── game
│   ├── library
│   ├── public
│   │   ├── .nojekyll
│   │   └── logo.svg
│   └── index.md
├── planning
├── package.json
└── site.config.mjs
```

## Shared Layout

VitePress verwendet kein einzelnes rohes HTML-Template pro Seite. Die maintainable Entsprechung in diesem Projekt ist:

1. Gemeinsame Site-Konfiguration in [site.config.mjs](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/site.config.mjs)
2. Gemeinsame Head-Konfiguration und Navigation in [docs/.vitepress/config.mts](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/config.mts)
3. Gemeinsamer Seiten-Wrapper in [docs/.vitepress/theme/Layout.vue](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/theme/Layout.vue)
4. Gemeinsames Styling in [docs/.vitepress/theme/custom.css](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/theme/custom.css)

`Layout.vue` wrappt das Standard-Layout von VitePress einmal zentral. Dort ist der richtige Ort für gemeinsame Body-nahe Strukturen, Shell-Elemente und spätere globale UI-Erweiterungen.

## Shared CSS

Das gemeinsame Styling liegt in [docs/.vitepress/theme/custom.css](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/theme/custom.css).

Dort sind:

- Farbvariablen für alle Bereiche
- Landingpage-Anpassungen
- gemeinsame Karten-, Bild- und Link-Stile
- leichte Shell-Hintergründe für ein zusammenhängendes Erscheinungsbild

## Shared JavaScript

Der globale Einstiegspunkt für zukünftiges gemeinsames JavaScript ist [docs/.vitepress/theme/shared/global.ts](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/theme/shared/global.ts).

Aktuell ist die Datei absichtlich klein und SSR-sicher. Sie wird über das Theme global geladen und ist damit der zentrale Ort für spätere Dinge wie:

- gemeinsame Event-Listener
- Analyse- oder Tracking-Hooks
- DOM-basierte UI-Erweiterungen
- eingebundenes Zusatz-JavaScript für alle Seiten

Wenn du später mehr Logik brauchst, erweitere diese Datei oder teile sie in weitere Module innerhalb von `docs/.vitepress/theme/shared/` auf.

## Markdown-Workflow

Die Inhalte leben direkt als `.md`-Dateien unter `docs/`.

- Neue Kurskapitel legst du als Markdown-Dateien in `docs/course/` oder in einem Unterordner davon an.
- Bilder kannst du in `docs/assets/images/` speichern und direkt aus Markdown referenzieren.
- Diagrammquellen können in `docs/assets/diagrams/` abgelegt werden.
- Code-Snippets können direkt aus echten Quelldateien importiert werden.

Ein Beispiel dafür findest du in:

- [docs/course/html-elemente-mit-javascript-veraendern/html-elemente-ansprechen.md](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/course/html-elemente-mit-javascript-veraendern/html-elemente-ansprechen.md)
- [docs/examples/dom-demo/main.js](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/examples/dom-demo/main.js)

VitePress-Code-Import:

```md
<<< @/examples/dom-demo/main.js#query-example
```

## Kurskapitel erweitern

Für ein neues Kapitel im Kurs:

1. Neue Markdown-Datei unter `docs/course/` anlegen.
2. Falls nötig einen Unterordner für zusammengehörige Kapitel erstellen.
3. Einen Sidebar-Eintrag in [docs/.vitepress/config.mts](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/config.mts) ergänzen.

Die Kursstruktur ist bewusst flach und lesbar gehalten, damit neue Kapitel ohne Speziallogik ergänzt werden können.

## Weitere Top-Level-Bereiche ergänzen

Für einen neuen Bereich wie `/workshops/` oder `/api/`:

1. Einen neuen Ordner unter `docs/` anlegen, zum Beispiel `docs/workshops/`.
2. Eine `index.md` in diesem Ordner anlegen.
3. Navigation und Sidebar in [docs/.vitepress/config.mts](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/.vitepress/config.mts) erweitern.
4. Die Landingpage in [docs/index.md](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/docs/index.md) um einen Link ergänzen.

## GitHub Pages lokal deployen

Die Website wird **lokal** gebaut. Es gibt keine GitHub Actions und keinen Build auf GitHub.

Der Ablauf ist:

1. `npm run build` erzeugt statische Dateien in `docs/.vitepress/dist`.
2. `npm run deploy` veröffentlicht genau diesen Build mit dem Paket `gh-pages`.
3. GitHub Pages liefert danach nur die bereits gebauten statischen Dateien aus.

Wichtig: GitHub Pages muss einmalig so konfiguriert sein, dass es die veröffentlichte Pages-Branch verwendet.

## Base Path und Repository-Name

Der zentrale Ort für den GitHub-Pages-Basispfad ist [site.config.mjs](/Users/nicolasmueller/Repositories/bbz-biel/288-javascript/site.config.mjs).

Standard:

- `repoName: "288-javascript"` führt zu `base: "/288-javascript/"`

Wenn das Repository umbenannt wird, ändere dort `repoName`.

Alternativ kannst du zur Laufzeit überschreiben:

```bash
VITEPRESS_BASE=/mein-repo/ npm run build
```

Für eine User- oder Org-Page auf Root-Level verwendest du `/` als Base.

Die Excalidraw-Hinweise liegen in `docs/assets/diagrams/README.txt`, damit sie nicht als eigene Website-Seite veröffentlicht werden.
