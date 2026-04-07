import { createElement } from "react";
import type { ContactItem } from "../../types/portfolio";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import type { IconType } from "react-icons/lib";

import styles from "./ContactCard.module.css";

interface ContactCardProps {
    contact: ContactItem;
}

function getContactIcon(label: string): IconType {
    const normalizedLabel = label.trim().toLowerCase();

    if (normalizedLabel.includes("email")) {
        return FaEnvelope;
    }

    if (normalizedLabel.includes("github")) {
        return FaGithub;
    }

    if (normalizedLabel.includes("linkedin")) {
        return FaLinkedin;
    }

    if (normalizedLabel.includes("phone") || normalizedLabel.includes("telefono")) {
        return FaPhone;
    }

    return FaEnvelope;
}

export function ContactCard({ contact }: ContactCardProps) {
    const iconType = getContactIcon(contact.label);
    const isMailOrPhone = contact.href.startsWith("mailto:") || contact.href.startsWith("tel:");

    return (
        <article className={styles.card}>
            <p className={styles.labelRow}>
                {createElement(iconType, { "aria-hidden": "true", className: styles.icon })}
                <span>{contact.label}</span>
            </p>
            <a href={contact.href} target={isMailOrPhone ? undefined : "_blank"} rel={isMailOrPhone ? undefined : "noreferrer"}>
                {contact.value}
            </a>
        </article>
    );
}
