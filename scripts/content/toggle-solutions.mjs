import fs from "node:fs";
import path from "node:path";

import { loadSolutionsConfig } from "./solutions.mjs";

const repoRoot = process.cwd();
const configPath = path.join(repoRoot, "loesungen.config.mjs");

function printUsage(config, chapters) {
  console.log("\nLösungen pro Kapitel ein- und ausschalten\n");
  console.log("  npm run loesungen                 Status aller Kapitel anzeigen");
  console.log("  npm run loesungen -- 5 an         Lösungen von Kapitel 5 einschalten");
  console.log("  npm run loesungen -- 5 aus        Lösungen von Kapitel 5 ausschalten");
  console.log("  npm run loesungen -- alle aus     Lösungen überall ausschalten\n");
  console.log("Aktueller Stand:\n");

  for (const chapter of chapters) {
    const visible = Object.prototype.hasOwnProperty.call(config.kapitel, chapter.slug)
      ? config.kapitel[chapter.slug]
      : config.standard;

    console.log(`  ${visible ? "✅ sichtbar " : "🔒 versteckt"}  ${chapter.slug}`);
  }

  console.log("\nDanach `npm run deploy` ausführen, damit die Website den neuen Stand zeigt.\n");
}

function readChapters() {
  const modulRoot = path.join(repoRoot, "docs", "content", "modul");

  return fs
    .readdirSync(modulRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      name: entry.name,
      slug: entry.name
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase()
    }))
    .sort((left, right) => left.slug.localeCompare(right.slug, "de-CH", { numeric: true }));
}

function setValue(source, slug, value) {
  const entryPattern = new RegExp(`("${slug}"\\s*:\\s*)(true|false)`);

  if (entryPattern.test(source)) {
    return source.replace(entryPattern, `$1${value}`);
  }

  // Kapitel fehlt in der Config: neuen Eintrag am Anfang der Liste ergänzen.
  return source.replace(/(kapitel:\s*\{\n)/, `$1    "${slug}": ${value},\n`);
}

async function main() {
  const [target, state] = process.argv.slice(2);
  const config = await loadSolutionsConfig(repoRoot);
  const chapters = readChapters();

  if (!target || !state) {
    printUsage(config, chapters);
    return;
  }

  const value = ["an", "ein", "on", "true"].includes(state.toLowerCase());

  if (!value && !["aus", "off", "false"].includes(state.toLowerCase())) {
    console.error(`Unbekannter Zustand "${state}". Verwende "an" oder "aus".`);
    process.exitCode = 1;
    return;
  }

  let source = fs.readFileSync(configPath, "utf8");

  if (target.toLowerCase() === "alle") {
    source = source.replace(/(standard:\s*)(true|false)/, `$1${value}`);

    for (const chapter of chapters) {
      source = setValue(source, chapter.slug, value);
    }

    fs.writeFileSync(configPath, source);
    console.log(`Lösungen in allen Kapiteln ${value ? "eingeschaltet" : "ausgeschaltet"}.`);
    console.log("Danach `npm run deploy` ausführen.");
    return;
  }

  const matches = chapters.filter(
    (chapter) => chapter.slug === target.toLowerCase() || chapter.slug.startsWith(`${target}-`)
  );

  if (matches.length !== 1) {
    console.error(`Kein eindeutiges Kapitel für "${target}" gefunden.`);
    printUsage(config, chapters);
    process.exitCode = 1;
    return;
  }

  source = setValue(source, matches[0].slug, value);
  fs.writeFileSync(configPath, source);

  console.log(`Lösungen von "${matches[0].name}" ${value ? "eingeschaltet" : "ausgeschaltet"}.`);
  console.log("Danach `npm run deploy` ausführen.");
}

main();
