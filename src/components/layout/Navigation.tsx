import type { NavigationItem, SectionId } from "../../types/portfolio";
import { createElement } from "react";
import { FaBriefcase, FaCode, FaEnvelope, FaHouse, FaLayerGroup } from "react-icons/fa6";
import type { IconType } from "react-icons/lib";

import styles from "./Navigation.module.css";

interface NavigationProps {
    items: NavigationItem[];
    activeSection: SectionId;
    profile: {
        name: string;
        role: string;
        imageSrc: string;
    };
}

const sectionIcons: Record<SectionId, IconType> = {
    home: FaHouse,
    projects: FaLayerGroup,
    experience: FaBriefcase,
    skills: FaCode,
    contact: FaEnvelope,
};

export function Navigation({ items, activeSection, profile }: NavigationProps) {
    const handleItemClick = (sectionId: SectionId) => {
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            const isMobileNav = window.matchMedia("(max-width: 56rem)").matches;
            const headerOffset = isMobileNav ? 92 : 24;
            const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <header className={styles.header}>
            <nav aria-label="Primary" className={styles.nav}>
                <a
                    className={styles.profileCard}
                    href="#home"
                    onClick={(event) => {
                        event.preventDefault();
                        handleItemClick("home");
                    }}
                >
                    <img className={styles.profileImage} src={profile.imageSrc} alt={`${profile.name} avatar`} loading="eager" decoding="async" />
                    <div className={styles.profileText}>
                        <strong>{profile.name}</strong>
                        <span>{profile.role}</span>
                    </div>
                </a>
                <ul className={styles.list}>
                    {items.map((item) => {
                        const isActive = activeSection === item.id;
                        const iconType = sectionIcons[item.id];

                        return (
                            <li key={item.id}>
                                <a
                                    className={`${styles.link} ${isActive ? styles.active : ""}`.trim()}
                                    href={`#${item.id}`}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleItemClick(item.id);
                                    }}
                                >
                                    {createElement(iconType, { className: styles.linkIcon, "aria-hidden": "true" })}
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
