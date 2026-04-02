import { Suspense, lazy, useMemo } from "react";

import { Navigation } from "../components/layout/Navigation";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { useActiveSection } from "../hooks/useActiveSection";
import { contacts, experienceItems, heroData, navigationItems, projects, skills } from "../data/portfolioData";

import styles from "./App.module.css";

const ProjectsSection = lazy(async () => {
    const module = await import("../components/sections/ProjectsSection");
    return { default: module.ProjectsSection };
});

const ContactSection = lazy(async () => {
    const module = await import("../components/sections/ContactSection");
    return { default: module.ContactSection };
});

function SectionLoader() {
    return <div className={styles.loader}>Loading section...</div>;
}

export default function App() {
    const activeSection = useActiveSection("home");
    const memoizedNavigationItems = useMemo(() => navigationItems, []);

    return (
        <>
            <Navigation items={memoizedNavigationItems} activeSection={activeSection} />
            <main className={styles.main}>
                <HeroSection hero={heroData} />
                <Suspense fallback={<SectionLoader />}>
                    <ProjectsSection items={projects} />
                </Suspense>
                <ExperienceSection items={experienceItems} />
                <SkillsSection items={skills} />
                <Suspense fallback={<SectionLoader />}>
                    <ContactSection items={contacts} />
                </Suspense>
            </main>
        </>
    );
}
