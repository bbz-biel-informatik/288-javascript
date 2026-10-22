import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const zipsPathPrefix = "/assets/zips/";

function getZipAssetName(pathname, base) {
  const prefixes = [zipsPathPrefix];

  if (base && base !== "/") {
    prefixes.push(`${base}${zipsPathPrefix.slice(1)}`);
  }

  const zipName = prefixes
    .filter((prefix) => pathname.startsWith(prefix))
    .map((prefix) => pathname.slice(prefix.length))
    .find(Boolean);

  if (!zipName || zipName !== path.basename(zipName) || !zipName.endsWith(".zip")) {
    return null;
  }

  return zipName;
}

function getZipAssetVersion(zipName, docsRoot, zipVersionCache) {
  const filePath = path.join(docsRoot, "assets", "zips", zipName);

  try {
    const stats = fs.statSync(filePath);
    const cached = zipVersionCache.get(filePath);

    if (cached && cached.mtimeMs === stats.mtimeMs && cached.size === stats.size) {
      return cached.version;
    }

    const version = crypto
      .createHash("sha256")
      .update(fs.readFileSync(filePath))
      .digest("hex")
      .slice(0, 12);

    zipVersionCache.set(filePath, {
      mtimeMs: stats.mtimeMs,
      size: stats.size,
      version
    });

    return version;
  } catch {
    return null;
  }
}

function rewriteZipAssetUrl(url, { docsRoot, base, zipVersionCache }) {
  if (!url.startsWith("/") || url.startsWith("//")) {
    return url;
  }

  const parsed = new URL(url, "https://example.com");
  const zipName = getZipAssetName(parsed.pathname, base);

  if (!zipName) {
    return url;
  }

  const version = getZipAssetVersion(zipName, docsRoot, zipVersionCache);

  if (!version) {
    return url;
  }

  parsed.searchParams.set("v", version);
  return `${parsed.pathname}${parsed.search}${parsed.hash}`;
}

function rewriteInternalUrl(url, context) {
  const { linkAliases } = context;

  if (!url.startsWith("/") || url.startsWith("//")) {
    return url;
  }

  const parsed = new URL(url, "https://example.com");
  const alias =
    linkAliases.get(parsed.pathname) ??
    linkAliases.get(parsed.pathname.endsWith("/") ? parsed.pathname.slice(0, -1) : `${parsed.pathname}/`);

  if (!alias) {
    return rewriteZipAssetUrl(url, context);
  }

  return rewriteZipAssetUrl(`${alias}${parsed.search}${parsed.hash}`, context);
}

function rewriteMarkdownLinks(source, context) {
  const markdownLinkPattern = /(!?\[[^\]]*]\()([^) \t\n]+)(\))/g;
  const htmlAttributePattern = /((?:href|src)=["'])(\/[^"']+)(["'])/g;

  const withMarkdownLinks = source.replace(markdownLinkPattern, (fullMatch, prefix, url, suffix) => {
    return `${prefix}${rewriteInternalUrl(url, context)}${suffix}`;
  });

  return withMarkdownLinks.replace(htmlAttributePattern, (fullMatch, prefix, url, suffix) => {
    return `${prefix}${rewriteInternalUrl(url, context)}${suffix}`;
  });
}

export function createContentStructurePlugin({ docsRoot, linkAliases, base }) {
  const contentRoot = path.join(docsRoot, "content");
  const vitepressRoot = path.join(docsRoot, ".vitepress");
  const configPath = path.join(vitepressRoot, "config.mts");
  const zipVersionCache = new Map();
  let restartTimer;
  const transformContext = { docsRoot, linkAliases, base, zipVersionCache };

  return {
    name: "content-structure-restart",
    transform(code, id) {
      const cleanId = id.split("?", 1)[0];

      if (!cleanId.startsWith(docsRoot) || cleanId.startsWith(vitepressRoot) || !cleanId.endsWith(".md")) {
        return null;
      }

      return rewriteMarkdownLinks(code, transformContext);
    },
    configureServer(server) {
      server.watcher.add(contentRoot);

      // Sidebar und Rewrites entstehen beim Laden der Config. Vite's server.restart() behält die alte
      // VitePress-Config, deshalb melden wir eine Config-Änderung: VitePress liest dann alles neu ein.
      const structureEvents = ["add", "unlink", "addDir", "unlinkDir"];
      const scheduleRestart = (event, filePath) => {
        if (!structureEvents.includes(event) || !path.resolve(filePath).startsWith(contentRoot)) {
          return;
        }

        clearTimeout(restartTimer);
        restartTimer = setTimeout(() => {
          server.config.logger.info("Content tree changed: reloading config to rebuild generated navigation.");
          server.watcher.emit("change", configPath);
        }, 120);
      };

      // Keine Funktion zurückgeben: Vite ruft sie direkt nach dem Start auf und die Listener wären wieder weg.
      server.watcher.on("all", scheduleRestart);
    }
  };
}
