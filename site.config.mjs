export const siteConfig = {
  title: "288 Javascript",
  description: "288 Javascript Kurs BBZ Biel Bienne",
  repoName: "288-javascript",
};

function normalizeBase(value) {
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/")
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

export const base = normalizeBase(
  process.env.VITEPRESS_BASE ??
    (siteConfig.repoName ? `/${siteConfig.repoName}/` : "/"),
);
