import path from "node:path";

import {
  areSolutionsVisible,
  getChapterSlug,
  loadSolutionsConfig,
  removeSolutions
} from "./solutions.mjs";

// Entfernt die Lösungen bereits aus dem Markdown, bevor VitePress daraus HTML macht.
// Dadurch stehen ausgeblendete Lösungen weder im HTML noch im Suchindex.
export function createSolutionsPlugin({ docsRoot, repoRoot }) {
  const configPath = path.join(repoRoot, "loesungen.config.mjs");
  const vitepressRoot = path.join(docsRoot, ".vitepress");
  const vitepressConfigPath = path.join(vitepressRoot, "config.mts");

  let config;

  return {
    name: "loesungen",
    // "pre" sorgt dafür, dass wir das rohe Markdown sehen und nicht das fertige Vue-Modul.
    enforce: "pre",
    async buildStart() {
      config = await loadSolutionsConfig(repoRoot);
    },
    async transform(code, id) {
      const cleanId = id.split("?", 1)[0];

      if (!cleanId.startsWith(docsRoot) || cleanId.startsWith(vitepressRoot) || !cleanId.endsWith(".md")) {
        return null;
      }

      config = config ?? (await loadSolutionsConfig(repoRoot));

      const chapterSlug = getChapterSlug(cleanId, docsRoot);

      if (areSolutionsVisible(chapterSlug, config)) {
        return null;
      }

      return removeSolutions(code, config);
    },
    configureServer(server) {
      server.watcher.add(configPath);

      server.watcher.on("change", async (filePath) => {
        if (path.resolve(filePath) !== configPath) {
          return;
        }

        config = await loadSolutionsConfig(repoRoot);
        server.config.logger.info("loesungen.config.mjs geändert: Seiten werden neu aufgebaut.");
        server.watcher.emit("change", vitepressConfigPath);
      });
    }
  };
}
