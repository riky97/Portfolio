import type { ContactItem, ExperienceItem, HeroData, NavigationItem, ProjectItem, SkillItem } from "../types/portfolio";

export const navigationItems: NavigationItem[] = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export const heroData: HeroData = {
    name: "Riccardo Ingrasciotta",
    role: "Frontend Engineer",
    location: "Milan, Italy",
    summary: "I build fast and accessible web interfaces with React and TypeScript, focusing on clean architecture and maintainable design systems.",
    ctaLabel: "Explore My Work",
    image: {
        src: "/images/hero/hero-640.webp",
        srcSet: "/images/hero/hero-640.webp 640w, /images/hero/hero-1280.webp 1280w",
        sizes: "(max-width: 768px) 80vw, 420px",
    },
};

export const projects: ProjectItem[] = [
    {
        title: "My Macros",
        description: "Marketing website for a nutrition brand with a strong focus on responsive layouts and clear conversion flow.",
        stack: ["WordPress", "CSS", "JavaScript"],
        href: "https://www.mymacros.it/",
        imageAlt: "Landing page preview for My Macros project",
        image: {
            src: "/images/projects/macros-480.webp",
            srcSet: "/images/projects/macros-480.webp 480w, /images/projects/macros-960.webp 960w",
            sizes: "(max-width: 900px) 100vw, 46vw",
        },
    },
    {
        title: "Web Counter App",
        description: "Interactive JavaScript project that tracks user interactions and demonstrates DOM updates with a lightweight architecture.",
        stack: ["HTML", "CSS", "JavaScript"],
        href: "https://mywebcounterapp.netlify.app/",
        imageAlt: "Counter application interface preview",
        image: {
            src: "/images/projects/counter-480.webp",
            srcSet: "/images/projects/counter-480.webp 480w, /images/projects/counter-960.webp 960w",
            sizes: "(max-width: 900px) 100vw, 46vw",
        },
    },
    {
        title: "Online Book App",
        description: "A searchable catalog with client-side filtering and modular components, built to practice advanced JavaScript patterns.",
        stack: ["HTML", "CSS", "JavaScript"],
        href: "https://myonlinebookapp.netlify.app/",
        imageAlt: "Online book catalog interface preview",
        image: {
            src: "/images/projects/online-book-480.webp",
            srcSet: "/images/projects/online-book-480.webp 480w, /images/projects/online-book-960.webp 960w",
            sizes: "(max-width: 900px) 100vw, 46vw",
        },
    },
    {
        title: "Vegetarian Recipe App",
        description: "Recipe explorer with reusable UI blocks and stateful filtering, built with React and component-based architecture.",
        stack: ["React", "Ant Design", "TypeScript"],
        href: "https://my-vegetarian-recipe-app.netlify.app/",
        imageAlt: "Vegetarian recipe app interface preview",
        image: {
            src: "/images/projects/vegetarian-480.webp",
            srcSet: "/images/projects/vegetarian-480.webp 480w, /images/projects/vegetarian-960.webp 960w",
            sizes: "(max-width: 900px) 100vw, 46vw",
        },
    },
];

export const experienceItems: ExperienceItem[] = [
    {
        role: "Frontend Engineer",
        company: "Freelance / Client Projects",
        period: "2023 - Present",
        summary: "Design and implementation of responsive interfaces for marketing and product websites.",
        highlights: [
            "Built component-driven UIs with React and TypeScript",
            "Improved Lighthouse performance and accessibility scores",
            "Delivered reusable styling systems with maintainable CSS architecture",
        ],
    },
    {
        role: "Web Developer",
        company: "Independent Learning Projects",
        period: "2021 - 2023",
        summary: "Portfolio and educational apps focused on JavaScript fundamentals and progressive frontend patterns.",
        highlights: [
            "Developed multiple projects deployed on Netlify",
            "Practiced API integration and state management patterns",
            "Migrated projects from vanilla JavaScript to React ecosystems",
        ],
    },
];

export const skills: SkillItem[] = [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML5", level: "Advanced" },
    { name: "CSS3", level: "Advanced" },
    { name: "Node.js", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Accessibility", level: "Intermediate" },
];

export const contacts: ContactItem[] = [
    {
        label: "Email",
        value: "riccardo.ingrasciotta.dev@gmail.com",
        href: "mailto:riccardo.ingrasciotta.dev@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/riky97",
        href: "https://github.com/riky97/",
    },
    {
        label: "Instagram",
        value: "@riky_ffg",
        href: "https://www.instagram.com/riky_ffg/",
    },
];
