import { useRef } from "react";
import { animate } from "animejs";
import { useLocale } from "@/i18n/locale-context";
import type { Project } from "../types/project";
import "./ProjectCard.css";

export function ProjectCard({ project }: { project: Project }) {
  const { locale, messages } = useLocale();
  const { projects } = messages;
  const cardRef = useRef<HTMLElement | null>(null);

  const handleEnter = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!cardRef.current) return;
    animate(cardRef.current, {
      translateY: -6,
      duration: 260,
      easing: "easeOutQuad",
    });
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    animate(cardRef.current, {
      translateY: 0,
      duration: 260,
      easing: "easeOutQuad",
    });
  };

  return (
    <article
      className="project-card"
      ref={cardRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="project-card__media">
        <img src={project.image} alt={projects.previewAlt(project.title)} loading="lazy" />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__description">{project.description[locale]}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-card__links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              {projects.liveDemo}
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              {projects.source}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
