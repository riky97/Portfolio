import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { education } from "../data/cv";
import "./Education.css";

export function Education() {
  const { locale, messages } = useLocale();
  const ref = useScrollReveal<HTMLDivElement>({ targetSelector: ".education__card" });

  return (
    <section id="education" className="section education">
      <div className="site-container">
        <p className="eyebrow">{messages.education.eyebrow}</p>
        <h2 className="section-heading">{messages.education.heading}</h2>

        <div className="education__grid" ref={ref}>
          {education.map((entry) => (
            <div className="education__card" key={entry.institution.en}>
              <p className="education__period">{entry.period[locale]}</p>
              <h3 className="education__title">{entry.title[locale]}</h3>
              <p className="education__institution">
                {entry.institution[locale]} · {entry.location[locale]}
              </p>
              {entry.notes && (
                <ul className="education__notes">
                  {entry.notes[locale].map((note) => (
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
