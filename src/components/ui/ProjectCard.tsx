import { memo } from "react";

import type { ProjectItem } from "../../types/portfolio";

import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
    project: ProjectItem;
}

export const ProjectCard = memo(function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article className={styles.card}>
            <img
                className={styles.cover}
                src={project.image.src}
                srcSet={project.image.srcSet}
                sizes={project.image.sizes}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
            />
            <div className={styles.body}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className={styles.stack}>
                    {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                    ))}
                </ul>
                <a href={project.href} target="_blank" rel="noreferrer">
                    Visit project
                </a>
            </div>
        </article>
    );
});
