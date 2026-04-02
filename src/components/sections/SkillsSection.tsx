import { useMemo } from "react";

import type { SkillItem } from "../../types/portfolio";

import { Section } from "../layout/Section";
import { SkillBadge } from "../ui/SkillBadge";

import styles from "./SkillsSection.module.css";

interface SkillsSectionProps {
    items: SkillItem[];
}

export function SkillsSection({ items }: SkillsSectionProps) {
    const sortedSkills = useMemo(() => [...items].sort((firstSkill, secondSkill) => firstSkill.name.localeCompare(secondSkill.name)), [items]);

    return (
        <Section id="skills" title="Core Skills" subtitle="Technologies I use to ship production-ready frontend experiences.">
            <ul className={styles.list}>
                {sortedSkills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                ))}
            </ul>
        </Section>
    );
}
