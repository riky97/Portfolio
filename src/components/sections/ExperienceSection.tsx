import type { ExperienceItem } from "../../types/portfolio";

import { Section } from "../layout/Section";

import styles from "./ExperienceSection.module.css";

interface ExperienceSectionProps {
    items: ExperienceItem[];
}

export function ExperienceSection({ items }: ExperienceSectionProps) {
    return (
        <Section id="experience" title="Experience Timeline" subtitle="A concise overview of my recent frontend work and technical growth.">
            <ol className={styles.timeline}>
                {items.map((item) => (
                    <li key={`${item.role}-${item.company}`} className={styles.item}>
                        <p className={styles.period}>{item.period}</p>
                        <h3>
                            {item.role} · {item.company}
                        </h3>
                        <p className={styles.summary}>{item.summary}</p>
                        <ul className={styles.highlights}>
                            {item.highlights.map((highlight) => (
                                <li key={highlight}>{highlight}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ol>
        </Section>
    );
}
