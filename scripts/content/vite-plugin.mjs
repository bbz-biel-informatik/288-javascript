import path from "node:path";

function rewriteInternalUrl(url, linkAliases) {
  if (!url.startsWith("/") || url.startsWith("//")) {
    return url;
  }

  const parsed = new URL(url, "https://example.com");
  const alias =
    linkAliases.get(parsed.pathname) ??
    linkAliases.get(parsed.pathname.endsWith("/") ? parsed.pathname.slice(0, -1) : `${parsed.pathname}/`);

  if (!alias) {
    return url;
  }

  return `${alias}${parsed.search}${parsed.hash}`;
}

function rewriteMarkdownLinks(source, linkAliases) {
  const markdownLinkPattern = /(!?\[[^\]]*]\()([^) \t\n]+)(\))/g;
  const htmlAttributePattern = /((?:href|src)=["'])(\/[^"']+)(["'])/g;

  const withMarkdownLinks = source.replace(markdownLinkPattern, (fullMatch, prefix, url, suffix) => {
    return `${prefix}${rewriteInternalUrl(url, linkAliases)}${suffix}`;
  });

  return withMarkdownLinks.replace(htmlAttributePattern, (fullMatch, prefix, url, suffix) => {
    return `${prefix}${rewriteInternalUrl(url, linkAliases)}${suffix}`;
  });
}

export function createContentStructurePlugin({ docsRoot, linkAliases }) {
  const contentRoot = path.join(docsRoot, "content");
  let restartTimer;
  let restartInFlight = false;

  const normalizeWatchedPath = (filePath) => {
    const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath);
    return path.normalize(absolutePath);
  };

  return {
    name: "content-structure-restart",
    transform(code, id) {
      if (!id.startsWith(contentRoot) || !id.endsWith(".md")) {
        return null;
      }

      return rewriteMarkdownLinks(code, linkAliases);
    },
    configureServer(server) {
      server.watcher.add(contentRoot);

      const scheduleRestart = (filePath) => {
        const normalizedPath = normalizeWatchedPath(filePath);

        if (!normalizedPath.startsWith(path.normalize(contentRoot))) {
          return;
        }

        clearTimeout(restartTimer);
        restartTimer = setTimeout(async () => {
          if (restartInFlight) {
            return;
          }

          restartInFlight = true;
          server.config.logger.info(
            "Content tree changed: restarting dev server to rebuild generated navigation."
          );

          try {
            await server.restart();
          } finally {
            restartInFlight = false;
          }
        }, 120);
      };

      const onAdd = (filePath) => scheduleRestart(filePath);
      const onChange = (filePath) => scheduleRestart(filePath);
      const onUnlink = (filePath) => scheduleRestart(filePath);
      const onAddDir = (filePath) => scheduleRestart(filePath);
      const onUnlinkDir = (filePath) => scheduleRestart(filePath);

      server.watcher.on("add", onAdd);
      server.watcher.on("change", onChange);
      server.watcher.on("unlink", onUnlink);
      server.watcher.on("addDir", onAddDir);
      server.watcher.on("unlinkDir", onUnlinkDir);

      return () => {
        clearTimeout(restartTimer);
        server.watcher.off("add", onAdd);
        server.watcher.off("change", onChange);
        server.watcher.off("unlink", onUnlink);
        server.watcher.off("addDir", onAddDir);
        server.watcher.off("unlinkDir", onUnlinkDir);
      };
    }
  };
}
