import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitepress";
import { base, siteConfig } from "../../site.config.mjs";
import { createExcalidrawExportPlugin } from "../../scripts/excalidraw/vite-plugin.mjs";

const docsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const modulSidebar = [
  {
    text: "Modul",
    items: [
      { text: "Index", link: "/modul/" },
      { text: "Javascript in Webseiten einbinden", link: "/modul/javascript-in-webseiten-einbinden" },
      {
        text: "HTML Elemente mit Javascript verändern",
        collapsed: false,
        items: [
          { text: "HTML Elemente mit Javascript verändern", link: "/modul/html-elemente-mit-javascript-veraendern/" },
          {
            text: "HTML Elemente ansprechen",
            link: "/modul/html-elemente-mit-javascript-veraendern/html-elemente-ansprechen"
          },
          {
            text: "Variablen in Javascript",
            link: "/modul/html-elemente-mit-javascript-veraendern/variablen-in-javascript"
          },
          { text: "Style verändern", link: "/modul/html-elemente-mit-javascript-veraendern/style-veraendern" },
          {
            text: "HTML Elemente löschen / hinzufügen",
            link: "/modul/html-elemente-mit-javascript-veraendern/html-elemente-loeschen-hinzufuegen"
          }
        ]
      },
      { text: "Funktionen", link: "/modul/funktionen" },
      { text: "Loops / Listen", link: "/modul/loops-listen" },
      { text: "If / Else", link: "/modul/if-else" }
    ]
  }
];

export default defineConfig({
  title: siteConfig.title,
  description: siteConfig.description,
  lang: "de-CH",
  base,
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  head: [
    ["meta", { name: "theme-color", content: "#165f68" }],
    ["meta", { name: "apple-mobile-web-app-title", content: siteConfig.title }]
  ],
  vite: {
    plugins: [createExcalidrawExportPlugin({ docsRoot })]
  },
  themeConfig: {
    logo: "/logo.png",
    search: {
      provider: "local"
    },
    nav: [
      { text: "Modul", link: "/modul/" },
      { text: "JSGame", link: "/jsgame/" },
    ],
    sidebar: {
      "/modul/": modulSidebar,
      "/jsgame/": [
        {
          text: "Game",
          items: [
            { text: "Index", link: "/game/" },
            { text: "Getting Started", link: "/game/getting-started" }
          ]
        }
      ],
   },
    outline: {
      level: [2, 3],
      label: "Auf dieser Seite"
    },
    footer: {
      message: "Markdown-first Unterrichtsmaterialien mit einer gemeinsamen VitePress-Basis.",
      copyright: "Pflege den Base Path in site.config.mjs."
    }
  }
});
