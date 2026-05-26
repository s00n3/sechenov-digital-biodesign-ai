import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE || "https://s00n3.github.io",
  base: process.env.BASE_PATH || "/sechenov-digital-biodesign-ai",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
});
