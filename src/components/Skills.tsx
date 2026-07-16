import { useScrollReveal } from "../hooks/useScrollReveal";
import { skillGroups } from "../data/cv";
import "./Skills.css";

export function Skills() {
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".skills__group" });

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <p className="eyebrow">Skills</p>
        <h2 className="section-heading">Toolkit</h2>

        <div className="skills__grid" ref={ref}>
          {skillGroups.map((group) => (
            <div className="skills__group" key={group.category}>
              <p className="skills__category">{group.category}</p>
              <ul className="skills__tags">
                {group.items.map((item) => (
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
