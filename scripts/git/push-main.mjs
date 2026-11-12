import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");

function git(args, options = {}) {
  return execFileSync("git", args, {
    cwd: repoRoot,
    encoding: "utf8",
    stdio: options.inherit ? "inherit" : ["ignore", "pipe", "pipe"]
  });
}

function fail(message) {
  console.error(`\n[push-main] ${message}`);
  process.exit(1);
}

const branch = git(["rev-parse", "--abbrev-ref", "HEAD"]).trim();

if (branch !== "main") {
  fail(`Aktueller Branch ist "${branch}", nicht "main". Es wird nichts gepusht.`);
}

const status = git(["status", "--porcelain"]).trim();

if (status === "") {
  console.log("[push-main] Keine Änderungen zu committen.");
} else {
  const message = process.argv.slice(2).join(" ").trim() || `deploy: ${new Date().toISOString().slice(0, 16).replace("T", " ")}`;

  git(["add", "-A"], { inherit: true });
  git(["commit", "-m", message], { inherit: true });
  console.log(`[push-main] Commit erstellt: ${message}`);
}

git(["push", "origin", "main"], { inherit: true });
console.log("[push-main] main gepusht.");
