import { useEffect, useState } from "react";

import type { SectionId } from "../types/portfolio";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -50% 0px",
    threshold: 0.01,
};

export function useActiveSection(defaultSection: SectionId): SectionId {
    const [activeSection, setActiveSection] = useState<SectionId>(defaultSection);

    useEffect(() => {
        const sectionElements = document.querySelectorAll<HTMLElement>("[data-section]");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id as SectionId);
                }
            });
        }, OBSERVER_OPTIONS);

        sectionElements.forEach((sectionElement) => observer.observe(sectionElement));

        return () => {
            observer.disconnect();
        };
    }, []);

    return activeSection;
}
