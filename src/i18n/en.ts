// Interface copy (labels, headings, buttons). Content that belongs to a record
// (CV entries, projects) is written as `{ en, it }` next to its data instead.
export const en = {
  meta: {
    description:
      "Riccardo Ingrasciotta — Software Engineer specialized in React, front-end architecture and data monitoring systems.",
  },
  header: {
    primaryNav: "Primary",
    openMenu: "Open navigation menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    language: "Language",
    theme: {
      toLight: "Switch to light theme",
      toDark: "Switch to dark theme",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
  },
  hero: {
    status: "status: available for opportunities",
    tagline: "Software Engineer — building reliable, data-driven front ends.",
    pitch:
      "Three years designing React interfaces and monitoring systems for large-scale platforms, from ESA data pipelines to banking microfrontends.",
    downloadCv: "Download CV",
    getInTouch: "Get in touch",
  },
  about: {
    eyebrow: "About",
    heading: "A front end built for reliability",
    achievements: "Key achievements",
  },
  skills: {
    eyebrow: "Skills",
    heading: "Toolkit",
  },
  experience: {
    eyebrow: "Experience",
    heading: "Where I've worked",
  },
  education: {
    eyebrow: "Education",
    heading: "Background",
  },
  projects: {
    eyebrow: "Projects",
    heading: "Selected work",
    liveDemo: "Live demo",
    source: "Source",
    previewAlt: (title: string) => `${title} — preview screenshot`,
  },
  contact: {
    eyebrow: "Contact",
    heading: "Let's build something reliable",
    pitch: "Open to new roles and collaborations. The fastest way to reach me is email.",
    email: "Email",
    phone: "Phone",
    linkedin: "LinkedIn",
    location: "Location",
  },
  footer: {
    backToTop: "Back to top ↑",
  },
};

export type Messages = typeof en;
