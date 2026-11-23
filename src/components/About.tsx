import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { about, keyAchievements } from "../data/cv";
import "./About.css";

export function About() {
  const { locale, messages } = useLocale();
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section about">
      <div className="site-container about__grid" ref={ref}>
        <div>
          <p className="eyebrow">{messages.about.eyebrow}</p>
          <h2 className="section-heading">{messages.about.heading}</h2>
          {about[locale].map((paragraph) => (
            <p className="about__paragraph" key={paragraph.slice(0, 24)}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="about__achievements">
          <p className="about__achievements-title">{messages.about.achievements}</p>
          <ul>
            {keyAchievements[locale].map((item) => (
              <li key={item.slice(0, 24)}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
