const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function withBase(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("#")) return path;
  if (!path.startsWith("/")) return path;
  return `${base}${path}`;
}
