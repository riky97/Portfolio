import { useLocale } from "@/i18n/locale-context";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { contact } from "../data/cv";
import "./Contact.css";

export function Contact() {
  const { locale, messages } = useLocale();
  const labels = messages.contact;
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact">
      <div className="site-container contact__inner" ref={ref}>
        <div>
          <p className="eyebrow">{labels.eyebrow}</p>
          <h2 className="section-heading">{labels.heading}</h2>
          <p className="contact__pitch">{labels.pitch}</p>
        </div>

        <ul className="contact__list">
          <li>
            <span>{labels.email}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>{labels.phone}</span>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          </li>
          <li>
            <span>{labels.linkedin}</span>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              {contact.linkedin}
            </a>
          </li>
          <li>
            <span>{labels.location}</span>
            <span>{contact.location[locale]}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
