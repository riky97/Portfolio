import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export function Projects() {
  const { messages } = useLocale();
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".project-card" });

  return (
    <section id="projects" className="section projects">
      <div className="site-container">
        <p className="eyebrow">{messages.projects.eyebrow}</p>
        <h2 className="section-heading">{messages.projects.heading}</h2>

        <div className="projects__grid" ref={ref}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
