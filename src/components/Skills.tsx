import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillGroups } from "../data/cv";
import "./Skills.css";

export function Skills() {
  const { locale, messages } = useLocale();
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".skills__group" });

  return (
    <section id="skills" className="section skills">
      <div className="site-container">
        <p className="eyebrow">{messages.skills.eyebrow}</p>
        <h2 className="section-heading">{messages.skills.heading}</h2>

        <div className="skills__grid" ref={ref}>
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.category.en}>
              <p className="skills__category">{group.category[locale]}</p>
              <ul className="skills__tags">
                {group.items[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
