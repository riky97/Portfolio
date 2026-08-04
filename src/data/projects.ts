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
        image: "/projects/bdiscom.png",
        tags: ["React", "Corporate Website", ".Net", "Postgres"],
        liveUrl: "https://www.bdiscom.it/",
    },
    {
        title: "Anime List",
        image: "/projects/anime.png",
        description:
            "Anime discovery app to browse top-rated anime and movies, track upcoming releases, filter by genre, and search titles. Built as a React single-page application.",
        tags: ["React", "TypeScript"],
        liveUrl: "https://my-anime-list.netlify.app/",
    },
    {
        title: "Vegetarian Recipe",
        image: "/projects/vegetarian-recipe.png",
        description:
            "A browsable collection of 50 vegetarian recipes with search by title or ingredient, paginated results, and detail pages sourced from the Spoonacular API. Built as a React single-page application.",
        tags: ["React", "TypeScript"],
        liveUrl: "https://my-vegetarian-recipe-app.netlify.app/",
    },
];
