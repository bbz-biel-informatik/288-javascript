import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

// Entfernt <details>-Blöcke, deren <summary> das Wort "Lösung" enthält.
const solutionBlockPattern = /<details>\s*<summary>[^<]*L(?:ö|oe)sung[^<]*<\/summary>[\s\S]*?<\/details>\n*/gi;

function slugifySegment(value) {
  return value
    .replace(/Ä/g, "Ae")
    .replace(/Ö/g, "Oe")
    .replace(/Ü/g, "Ue")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

// Aus docs/content/modul/4 - Variablen/Aufgaben.md wird "4-variablen".
export function getChapterSlug(filePath, docsRoot) {
  const contentRoot = path.join(docsRoot, "content");
  const relative = path.relative(contentRoot, filePath);

  if (relative.startsWith("..")) {
    return null;
  }

  const segments = relative.split(path.sep);

  // segments[0] ist der Bereich (modul, jsgame, ...), danach folgt das Kapitel.
  if (segments.length < 2) {
    return null;
  }

  const chapter = segments.length > 2 ? segments[1] : segments[1].replace(/\.md$/i, "");
  return slugifySegment(chapter);
}

export async function loadSolutionsConfig(repoRoot) {
  const configPath = path.join(repoRoot, "loesungen.config.mjs");

  if (!fs.existsSync(configPath)) {
    return { standard: true, kapitel: {}, hinweisAnzeigen: false, hinweisText: "" };
  }

  // Cache-Buster, damit der Dev-Server die Datei nach einer Änderung neu einliest.
  const moduleUrl = `${pathToFileURL(configPath).href}?t=${fs.statSync(configPath).mtimeMs}`;
  const imported = await import(moduleUrl);
  const config = imported.loesungenConfig ?? imported.default ?? {};

  return {
    standard: config.standard ?? false,
    kapitel: config.kapitel ?? {},
    hinweisAnzeigen: config.hinweisAnzeigen ?? false,
    hinweisText: config.hinweisText ?? "Die Lösungen sind aktuell ausgeblendet."
  };
}

export function areSolutionsVisible(chapterSlug, config) {
  if (chapterSlug && Object.prototype.hasOwnProperty.call(config.kapitel, chapterSlug)) {
    return config.kapitel[chapterSlug] === true;
  }

  return config.standard === true;
}

export function removeSolutions(source, config) {
  if (!solutionBlockPattern.test(source)) {
    solutionBlockPattern.lastIndex = 0;
    return source;
  }

  solutionBlockPattern.lastIndex = 0;
  const withoutSolutions = source.replace(solutionBlockPattern, "");

  if (!config.hinweisAnzeigen) {
    return withoutSolutions;
  }

  // Hinweis direkt nach der ersten Überschrift einfügen.
  const lines = withoutSolutions.split("\n");
  const headingIndex = lines.findIndex((line) => line.startsWith("# "));

  if (headingIndex === -1) {
    return withoutSolutions;
  }

  lines.splice(headingIndex + 1, 0, "", `> 🔒 ${config.hinweisText}`);
  return lines.join("\n");
}
