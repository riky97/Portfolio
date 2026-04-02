import type { ContactItem } from "../../types/portfolio";

import { Section } from "../layout/Section";
import { ContactCard } from "../ui/ContactCard";

import styles from "./ContactSection.module.css";

interface ContactSectionProps {
    items: ContactItem[];
}

export function ContactSection({ items }: ContactSectionProps) {
    return (
        <Section id="contact" title="Let us build something" subtitle="I am available for freelance work, collaborations, and product teams.">
            <div className={styles.grid}>
                {items.map((contact) => (
                    <ContactCard key={contact.label} contact={contact} />
                ))}
            </div>
        </Section>
    );
}
