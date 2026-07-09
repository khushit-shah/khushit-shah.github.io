import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Khushit Shah",
  EMAIL: "sh@hkhush.it",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Khushit Shah, Shah Khushit, Khushit, Shah, Kernel Engineer, Developer, Systems Engineer",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "A collection of articles on topics I am passionate about. Systems Blogs, Optimization Blogs, Deep Blogs",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done. Khushit Shah",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/markhorn_dev",
  },
  {
    NAME: "github",
    HREF: "https://github.com/markhorn-dev",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/markhorn-dev",
  },
];
