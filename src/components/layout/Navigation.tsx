import type { NavigationItem, SectionId } from "../../types/portfolio";

import styles from "./Navigation.module.css";

interface NavigationProps {
    items: NavigationItem[];
    activeSection: SectionId;
}

export function Navigation({ items, activeSection }: NavigationProps) {
    const handleItemClick = (sectionId: SectionId) => {
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
            // Calculate offset to account for sticky header (navigation height ~60px)
            const headerOffset = 60;
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
                    className={styles.brand}
                    href="#home"
                    onClick={(event) => {
                        event.preventDefault();
                        handleItemClick("home");
                    }}
                >
                    RI
                </a>
                <ul className={styles.list}>
                    {items.map((item) => {
                        const isActive = activeSection === item.id;

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
                                    {item.label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
