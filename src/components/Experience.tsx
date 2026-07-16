import { useScrollReveal } from "../hooks/useScrollReveal";
import { experience } from "../data/cv";
import "./Experience.css";

export function Experience() {
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".timeline__entry" });

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="eyebrow">Experience</p>
        <h2 className="section-heading">Where I've worked</h2>

        <div className="timeline" ref={ref}>
          {experience.map((entry) => (
            <article className="timeline__entry" key={entry.company}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__role">{entry.role}</h3>
                  <span className="timeline__period">{entry.period}</span>
                </div>
                <p className="timeline__company">
                  {entry.company} · {entry.location}
                </p>
                <ul className="timeline__bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet.slice(0, 24)}>{bullet}</li>
                  ))}
                </ul>
                <ul className="timeline__tech">
                  {entry.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
