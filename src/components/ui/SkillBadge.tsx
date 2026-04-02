import { memo } from "react";

import type { SkillItem } from "../../types/portfolio";

import styles from "./SkillBadge.module.css";

interface SkillBadgeProps {
    skill: SkillItem;
}

export const SkillBadge = memo(function SkillBadge({ skill }: SkillBadgeProps) {
    return (
        <li className={styles.badge}>
            <span>{skill.name}</span>
            <small>{skill.level}</small>
        </li>
    );
});
