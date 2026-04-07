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
    role: "Software Engineer",
    location: "Abbiategrasso, Italy",
    summary: `Born on 19/11/1997 and currently based in Abbiategrasso, Italy, I’m a Software Developer with three years of experience focused on building modern
                web applications and intuitive user interfaces. My main expertise lies in React, where I design and develop reliable, scalable, and user-centric
                front-end solutions.
                Alongside front-end development, I have hands-on experience with backend systems in .NET, Microfrontend architectures, and SharePoint inte-
                grations. I also work with Python and Kubernetes, applying these technologies to improve automation, scalability, and overall system robustness.
                Driven by curiosity and a proactive mindset, I am constantly exploring new technologies, refining engineering practices, and expanding my tech-
                nical skill set. I approach problem-solving with clarity and attention to detail, always aiming to deliver high-quality solutions while collaborating
                effectively within cross-functional teams.`,
    ctaLabel: "Explore My Work",
    image: {
        src: "/images/hero/riccardo-portrait-1024.webp",
        srcSet: "/images/hero/riccardo-portrait-512.webp 512w, /images/hero/riccardo-portrait-1024.webp 1024w, /images/hero/riccardo-portrait-1600.webp 1600w",
        sizes: "(max-width: 768px) 55vw, 224px",
    },
};

export const projects: ProjectItem[] = [
    // {
    //     title: "My Macros",
    //     description: "Marketing website for a nutrition brand with a strong focus on responsive layouts and clear conversion flow.",
    //     stack: ["WordPress", "CSS", "JavaScript"],
    //     href: "https://www.mymacros.it/",
    //     imageAlt: "Landing page preview for My Macros project",
    //     image: {
    //         src: "/images/projects/macros-480.webp",
    //         srcSet: "/images/projects/macros-480.webp 480w, /images/projects/macros-960.webp 960w",
    //         sizes: "(max-width: 900px) 100vw, 46vw",
    //     },
    // },
    // {
    //     title: "Web Counter App",
    //     description: "Interactive JavaScript project that tracks user interactions and demonstrates DOM updates with a lightweight architecture.",
    //     stack: ["HTML", "CSS", "JavaScript"],
    //     href: "https://mywebcounterapp.netlify.app/",
    //     imageAlt: "Counter application interface preview",
    //     image: {
    //         src: "/images/projects/counter-480.webp",
    //         srcSet: "/images/projects/counter-480.webp 480w, /images/projects/counter-960.webp 960w",
    //         sizes: "(max-width: 900px) 100vw, 46vw",
    //     },
    // },
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
        role: "Software Engineer",
        company: "Capgemini – European Space Agency (ESA)",
        period: "Apr. 2023 – Present",
        summary:
            "Developing and maintaining the Performance Monitoring System for space data ecosystems, combining commercial software and custom solutions.",
        highlights: [
            "Developed and maintained Grafana dashboards for key performance indicators across multiple timeframes",
            "Implemented data storage pipelines in OpenSearch for fast and reliable data access",
            "Maintained the Invalidation Tool (React-based frontend) with new features and improved usability",
            "Participated in Python/ETL knowledge transfer and KPI computation optimization",
        ],
    },
    {
        role: "Software Engineer",
        company: "Capgemini – Poste Italiane",
        period: "Apr. 2023 – Present",
        summary: "Developing responsive SharePoint web parts and improving UI/UX for internal and customer-facing applications.",
        highlights: [
            "Developed new web parts for SharePoint with intuitive, responsive user interfaces",
            "Collaborated with product and design teams on UI/UX improvements",
            "Implemented customer feedback and adjusted interfaces for better usability",
        ],
    },
    {
        role: "Software Developer",
        company: "Craon Italy",
        period: "May 2022 – Mar. 2023",
        summary: "Built front-end banking solutions using microfrontend architectures in cross-functional teams.",
        highlights: [
            "Developed scalable front-end applications with microfrontend architecture",
            "Collaborated with cross-functional teams on deployment efficiency",
            "Participated in CI/CD pipelines and DevOps integration (Jenkins, Bitbucket)",
        ],
    },
];

export const skills: SkillItem[] = [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript (ES6+)", level: "Advanced" },
    { name: "HTML5 & CSS3", level: "Advanced" },
    { name: "SharePoint", level: "Advanced" },
    { name: ".NET", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Kubernetes & Docker", level: "Intermediate" },
    { name: "Grafana & OpenSearch", level: "Intermediate" },
    { name: "React Native", level: "Intermediate" },
    { name: "Microfrontend Architectures", level: "Intermediate" },
    { name: "CI/CD Pipelines", level: "Intermediate" },
];

export const contacts: ContactItem[] = [
    {
        label: "Email",
        value: "riccardoingrasciotta@gmail.com",
        href: "mailto:riccardoingrasciotta@gmail.com",
    },
    {
        label: "Phone",
        value: "+39 331 3386770",
        href: "tel:+393313386770",
    },
    {
        label: "GitHub",
        value: "github.com/riky97",
        href: "https://github.com/riky97/",
    },
];
