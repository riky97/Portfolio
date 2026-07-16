import { useScrollReveal } from "../hooks/useScrollReveal";
import { contact } from "../data/cv";
import "./Contact.css";

export function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner" ref={ref}>
        <div>
          <p className="eyebrow">Contact</p>
          <h2 className="section-heading">Let's build something reliable</h2>
          <p className="contact__pitch">
            Open to new roles and collaborations. The fastest way to reach me
            is email.
          </p>
        </div>

        <ul className="contact__list">
          <li>
            <span>Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            <span>Phone</span>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
          </li>
          <li>
            <span>LinkedIn</span>
            <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
              {contact.linkedin}
            </a>
          </li>
          <li>
            <span>Location</span>
            <span>{contact.location}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
