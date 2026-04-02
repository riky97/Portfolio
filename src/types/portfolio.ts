export type SectionId = "home" | "projects" | "experience" | "skills" | "contact";

export interface ResponsiveImage {
    src: string;
    srcSet: string;
    sizes: string;
}

export interface NavigationItem {
    id: SectionId;
    label: string;
}

export interface HeroData {
    name: string;
    role: string;
    location: string;
    summary: string;
    ctaLabel: string;
    image: ResponsiveImage;
}

export interface ProjectItem {
    title: string;
    description: string;
    stack: string[];
    href: string;
    imageAlt: string;
    image: ResponsiveImage;
}

export interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    summary: string;
    highlights: string[];
}

export interface SkillItem {
    name: string;
    level: "Advanced" | "Intermediate";
}

export interface ContactItem {
    label: string;
    value: string;
    href: string;
}
