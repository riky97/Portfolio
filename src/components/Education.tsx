import { useScrollReveal } from "../hooks/useScrollReveal";
import { education } from "../data/cv";
import "./Education.css";

export function Education() {
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".education__card" });

  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="eyebrow">Education</p>
        <h2 className="section-heading">Background</h2>

        <div className="education__grid" ref={ref}>
          {education.map((entry) => (
            <div className="education__card" key={entry.institution}>
              <p className="education__period">{entry.period}</p>
              <h3 className="education__title">{entry.title}</h3>
              <p className="education__institution">
                {entry.institution} · {entry.location}
              </p>
              {entry.notes && (
                <ul className="education__notes">
                  {entry.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
