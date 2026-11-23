import type { Project } from "../types/project";

/**
 * Aggiungi qui i tuoi progetti: metti l'immagine in `public/projects/`
 * e riferiscila come "/projects/nome-file.png". La descrizione va scritta
 * in entrambe le lingue ({ en, it }); il compilatore segnala se ne manca una.
 */
export const projects: Project[] = [
    {
        title: "BDISCOM",
        description: {
            en: "Full corporate website for BDISCOM, a manufacturer of plasma power supplies for OEMs. Built as a React single-page application, from UI to deployment.",
            it: "Sito web aziendale completo per BDISCOM, produttore di alimentatori al plasma per OEM. Realizzato come single-page application React, dalla UI al deploy.",
        },
        image: "/projects/bdiscom.png",
        tags: ["React", "Corporate Website", "Node.js", "Postgres"],
        liveUrl: "https://www.bdiscom.it/",
    },
    {
        title: "Anime List",
        image: "/projects/anime.png",
        description: {
            en: "Anime discovery app to browse top-rated anime and movies, track upcoming releases, filter by genre, and search titles. Built as a React single-page application.",
            it: "App per scoprire anime: esplora le serie e i film più apprezzati, segui le prossime uscite, filtra per genere e cerca per titolo. Realizzata come single-page application React.",
        },
        tags: ["React", "TypeScript"],
        liveUrl: "https://my-anime-list.netlify.app/",
    },
    {
        title: "Vegetarian Recipe",
        image: "/projects/vegetarian-recipe.png",
        description: {
            en: "A browsable collection of 50 vegetarian recipes with search by title or ingredient, paginated results, and detail pages sourced from the Spoonacular API. Built as a React single-page application.",
            it: "Una raccolta di 50 ricette vegetariane con ricerca per titolo o ingrediente, risultati paginati e pagine di dettaglio con i dati dell'API Spoonacular. Realizzata come single-page application React.",
        },
        tags: ["React", "TypeScript"],
        liveUrl: "https://my-vegetarian-recipe-app.netlify.app/",
    },
];
