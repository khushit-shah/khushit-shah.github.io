import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isGithubPages = process.env.GITHUB_PAGES === "true";
const isUserPagesRepo = repo === `${owner}.github.io`;

export default defineConfig({
  site: process.env.SITE_URL ?? (
    isGithubPages && repo && owner
      ? (isUserPagesRepo ? `https://${owner}.github.io` : `https://${owner}.github.io/${repo}`)
      : "https://astro-nano-demo.vercel.app"
  ),
  base: process.env.BASE_PATH ?? (
    isGithubPages && repo && !isUserPagesRepo
      ? `/${repo}`
      : "/"
  ),
  integrations: [mdx(), sitemap(), tailwind()],
});
