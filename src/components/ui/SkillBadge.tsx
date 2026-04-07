import { memo } from "react";
import { createElement } from "react";
import { FaCode, FaDocker, FaGitAlt, FaPython, FaReact } from "react-icons/fa6";
import { SiDotnet, SiGrafana, SiJavascript, SiKubernetes, SiOpensearch, SiSharp, SiTypescript } from "react-icons/si";
import type { IconType } from "react-icons/lib";

import type { SkillItem } from "../../types/portfolio";

import styles from "./SkillBadge.module.css";

interface SkillBadgeProps {
    skill: SkillItem;
}

function normalizeSkillName(skillName: string): string {
    return skillName
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function getSkillIcon(skillName: string): IconType {
    const normalizedSkill = normalizeSkillName(skillName);

    if (normalizedSkill.includes("react")) {
        return FaReact;
    }

    if (normalizedSkill.includes("typescript")) {
        return SiTypescript;
    }

    if (normalizedSkill.includes("javascript")) {
        return SiJavascript;
    }

    if (normalizedSkill.includes("python")) {
        return FaPython;
    }

    if (normalizedSkill.includes("dotnet") || normalizedSkill.includes("net") || normalizedSkill.includes("csharp")) {
        return normalizedSkill.includes("csharp") ? SiSharp : SiDotnet;
    }

    if (normalizedSkill.includes("docker")) {
        return FaDocker;
    }

    if (normalizedSkill.includes("kubernetes")) {
        return SiKubernetes;
    }

    if (normalizedSkill.includes("grafana")) {
        return SiGrafana;
    }

    if (normalizedSkill.includes("opensearch")) {
        return SiOpensearch;
    }

    if (normalizedSkill.includes("sharepoint")) {
        return FaCode;
    }

    if (normalizedSkill.includes("git")) {
        return FaGitAlt;
    }

    return FaCode;
}

export const SkillBadge = memo(function SkillBadge({ skill }: SkillBadgeProps) {
    const iconType = getSkillIcon(skill.name);

    return (
        <li className={styles.badge}>
            <span className={styles.titleRow}>
                {createElement(iconType, { "aria-hidden": "true", className: styles.icon })}
                <span>{skill.name}</span>
            </span>
            <small>{skill.level}</small>
        </li>
    );
});
