import type { ContactItem } from "../../types/portfolio";

import styles from "./ContactCard.module.css";

interface ContactCardProps {
    contact: ContactItem;
}

export function ContactCard({ contact }: ContactCardProps) {
    return (
        <article className={styles.card}>
            <p>{contact.label}</p>
            <a href={contact.href} target="_blank" rel="noreferrer">
                {contact.value}
            </a>
        </article>
    );
}
