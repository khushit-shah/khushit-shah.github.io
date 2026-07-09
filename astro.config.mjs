import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: process.env.SITE_URL ?? (
    isGithubPages && repo && owner
      ? `https://${owner}.github.io/${repo}`
      : "https://astro-nano-demo.vercel.app"
  ),
  base: process.env.BASE_PATH ?? (
    isGithubPages && repo
      ? `/${repo}`
      : "/"
  ),
  integrations: [mdx(), sitemap(), tailwind()],
});
