import type { HeroData } from "../../types/portfolio";

import { Section } from "../layout/Section";

import styles from "./HeroSection.module.css";

interface HeroSectionProps {
    hero: HeroData;
}

export function HeroSection({ hero }: HeroSectionProps) {
    return (
        <Section id="home" title={hero.name} subtitle={hero.summary}>
            <div className={styles.heroBody}>
                <img
                    className={styles.portrait}
                    src={hero.image.src}
                    srcSet={hero.image.srcSet}
                    sizes={hero.image.sizes}
                    alt={`${hero.name} portrait`}
                    loading="eager"
                    decoding="async"
                />
                <p className={styles.meta}>
                    <span>{hero.role}</span>
                    <span>{hero.location}</span>
                </p>
                <a href="#projects" className={styles.cta}>
                    {hero.ctaLabel}
                </a>
            </div>
        </Section>
    );
}
