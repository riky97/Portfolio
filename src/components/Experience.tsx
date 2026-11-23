import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { experience } from "../data/cv";
import "./Experience.css";

export function Experience() {
  const { locale, messages } = useLocale();
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".timeline__entry" });

  return (
    <section id="experience" className="section experience">
      <div className="site-container">
        <p className="eyebrow">{messages.experience.eyebrow}</p>
        <h2 className="section-heading">{messages.experience.heading}</h2>

        <div className="timeline" ref={ref}>
          {experience.map((entry) => (
            <article className="timeline__entry" key={entry.company}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <div className="timeline__header">
                  <h3 className="timeline__role">{entry.role[locale]}</h3>
                  <span className="timeline__period">{entry.period[locale]}</span>
                </div>
                <p className="timeline__company">
                  {entry.company} · {entry.location[locale]}
                </p>
                <ul className="timeline__bullets">
                  {entry.bullets[locale].map((bullet) => (
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
