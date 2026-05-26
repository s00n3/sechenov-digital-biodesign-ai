import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://digital-biodesign.sechenov.ru",
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
});
