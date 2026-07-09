import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Khushit Shah",
  EMAIL: "ping@khushitshah.com",
  NUM_POSTS_ON_HOMEPAGE: 1,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Khushit Shah is a systems engineer focused on virtualization, kernel work, compilers, and performance.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "A single placeholder post for upcoming project stories and write-ups.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION:
    "Selected experience across Nutanix and Salesforce.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Selected systems projects and publication work from the resume.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/khushit-shah",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/khushit-shah/",
  },
  {
    NAME: "stack-overflow",
    HREF: "https://stackoverflow.com/users/8187731/khushit-shah",
  },
];
