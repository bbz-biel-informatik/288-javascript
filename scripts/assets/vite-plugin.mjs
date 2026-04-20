import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";

const zipsUrlPrefix = "/assets/zips/";

function getZipNameFromRequest(requestUrl, base) {
  const pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  const prefixes = [zipsUrlPrefix];

  if (base && base !== "/") {
    prefixes.push(`${base}${zipsUrlPrefix.slice(1)}`);
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

async function copyZipAssets(sourceRoot, outputRoot) {
  try {
    await fs.access(sourceRoot);
  } catch {
    return;
  }

  const targetRoot = path.join(outputRoot, "assets", "zips");
  await fs.rm(targetRoot, { recursive: true, force: true });
  await fs.mkdir(targetRoot, { recursive: true });

  const entries = await fs.readdir(sourceRoot, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile() || !entry.name.endsWith(".zip")) {
      continue;
    }

    await fs.copyFile(path.join(sourceRoot, entry.name), path.join(targetRoot, entry.name));
  }
}

export function createZipAssetsPlugin({ docsRoot, base }) {
  const zipsRoot = path.join(docsRoot, "assets", "zips");
  const copiedOutputRoots = new Set();
  let resolvedConfig;

  return {
    name: "zip-assets",
    configResolved(config) {
      resolvedConfig = config;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || (req.method !== "GET" && req.method !== "HEAD")) {
          next();
          return;
        }

        const zipName = getZipNameFromRequest(req.url, base);

        if (!zipName) {
          next();
          return;
        }

        const filePath = path.join(zipsRoot, zipName);

        try {
          await fs.access(filePath);
        } catch {
          next();
          return;
        }

        res.setHeader("Content-Type", "application/zip");
        res.setHeader("Content-Disposition", `attachment; filename="${zipName}"`);

        if (req.method === "HEAD") {
          res.end();
          return;
        }

        createReadStream(filePath).pipe(res);
      });
    },
    async writeBundle(options) {
      const outputRoot = options.dir
        ? path.resolve(options.dir)
        : path.resolve(resolvedConfig.root, resolvedConfig.build.outDir);

      if (copiedOutputRoots.has(outputRoot)) {
        return;
      }

      copiedOutputRoots.add(outputRoot);
      await copyZipAssets(zipsRoot, outputRoot);
    }
  };
}
