import type { PropsWithChildren } from "react";

import styles from "./Section.module.css";

interface SectionProps extends PropsWithChildren {
    id: string;
    title: string;
    subtitle?: string;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
    return (
        <section id={id} data-section className={styles.section}>
            <header className={styles.header}>
                <p className={styles.kicker}>{id}</p>
                <h2 className={styles.title}>{title}</h2>
                {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            </header>
            {children}
        </section>
    );
}
