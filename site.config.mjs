export const siteConfig = {
  title: "288 Javascript",
  description: "Lehrmaterialien, Projektdokumentation und gemeinsame Assets in einem VitePress-Setup.",
  repoName: "288-javascript"
};

function normalizeBase(value) {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export const base = normalizeBase(
  process.env.VITEPRESS_BASE ?? (siteConfig.repoName ? `/${siteConfig.repoName}/` : "/")
);
