import type { ProjectItem } from "../../types/portfolio";

import { Section } from "../layout/Section";
import { ProjectCard } from "../ui/ProjectCard";

import styles from "./ProjectsSection.module.css";

interface ProjectsSectionProps {
    items: ProjectItem[];
}

export function ProjectsSection({ items }: ProjectsSectionProps) {
    return (
        <Section id="projects" title="Selected Projects" subtitle="A small collection of projects focused on practical UX and maintainable code.">
            <div className={styles.grid}>
                {items.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </Section>
    );
}
