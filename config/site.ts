import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    explore: string
  }
}

export const siteConfig: SiteConfig = {
  name: "DevBites",
  description: "Share your code with everyone.",
  mainNav: [
    {
      title: "Explore",
      href: "/explore",
      pined: false,
      support: false,
    },
    {
      title: "Forms",
      href: "/forms",
      pined: true,
      support: false,
    },
    {
      title: "Links",
      href: "/links",
      pined: false,
      support: false,
    },
    {
      title: "Popular code",
      href: "/popular",
      pined: false,
      support: false,
    },
    {
      title: "Donation",
      href: "https://www.buymeacoffee.com/lndev",
      external: true,
      support: false,
    },
  ],
  links: {
    twitter: "https://twitter.com/DevBites_app",
    github: "https://https://github.com/ezeslucky/DevBites.git",
    explore: "/explore",
  },
}
