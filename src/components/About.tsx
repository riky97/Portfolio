import { useScrollReveal } from "../hooks/useScrollReveal";
import { about, keyAchievements } from "../data/cv";
import "./About.css";

export function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="container about__grid" ref={ref}>
        <div>
          <p className="eyebrow">About</p>
          <h2 className="section-heading">A front end built for reliability</h2>
          {about.split("\n\n").map((paragraph) => (
            <p className="about__paragraph" key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about__achievements">
          <p className="about__achievements-title">Key achievements</p>
          <ul>
            {keyAchievements.map((item) => (
              <li key={item.slice(0, 24)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
