import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

export function Projects() {
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".project-card" });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h2 className="section-heading">Selected work</h2>

        <div className="projects__grid" ref={ref}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
