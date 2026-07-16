import type { Project } from "../types/project";

/**
 * Aggiungi qui i tuoi progetti: metti l'immagine in `public/projects/`
 * e riferiscila come "/projects/nome-file.png".
 */
export const projects: Project[] = [
    {
        title: "BDISCOM",
        description:
            "Full corporate website for BDISCOM, a manufacturer of plasma power supplies for OEMs. Built as a React single-page application, from UI to deployment.",
        image: "/projects/bdiscom.svg",
        tags: ["React", "Corporate Website", ".Net", "Postgres"],
        liveUrl: "https://www.bdiscom.it/",
    },
];
