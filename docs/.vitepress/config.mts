import { defineConfig } from "vitepress";
import { base, siteConfig } from "../../site.config.mjs";

const courseSidebar = [
  {
    text: "Kurs",
    items: [
      { text: "Index", link: "/course/" },
      { text: "Javascript in Webseiten einbinden", link: "/course/javascript-in-webseiten-einbinden" },
      {
        text: "HTML Elemente mit Javascript verändern",
        collapsed: false,
        items: [
          { text: "HTML Elemente mit Javascript verändern", link: "/course/html-elemente-mit-javascript-veraendern/" },
          {
            text: "HTML Elemente ansprechen",
            link: "/course/html-elemente-mit-javascript-veraendern/html-elemente-ansprechen"
          },
          {
            text: "Variablen in Javascript",
            link: "/course/html-elemente-mit-javascript-veraendern/variablen-in-javascript"
          },
          { text: "Style verändern", link: "/course/html-elemente-mit-javascript-veraendern/style-veraendern" },
          {
            text: "HTML Elemente löschen / hinzufügen",
            link: "/course/html-elemente-mit-javascript-veraendern/html-elemente-loeschen-hinzufuegen"
          }
        ]
      },
      { text: "Funktionen", link: "/course/funktionen" },
      { text: "Loops / Listen", link: "/course/loops-listen" },
      { text: "If / Else", link: "/course/if-else" }
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
  themeConfig: {
    logo: "/logo.svg",
    search: {
      provider: "local"
    },
    nav: [
      { text: "Start", link: "/" },
      { text: "Kurs", link: "/course/" },
      { text: "Game", link: "/game/" },
      { text: "Library", link: "/library/" }
    ],
    sidebar: {
      "/course/": courseSidebar,
      "/game/": [
        {
          text: "Game",
          items: [
            { text: "Index", link: "/game/" },
            { text: "Getting Started", link: "/game/getting-started" }
          ]
        }
      ],
      "/library/": [
        {
          text: "Library",
          items: [
            { text: "Index", link: "/library/" },
            { text: "Getting Started", link: "/library/getting-started" }
          ]
        }
      ]
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
