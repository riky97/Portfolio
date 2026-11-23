import type { Messages } from "./en";

// Typed as `Messages`: a key missing here, or an extra one, fails the build.
export const it: Messages = {
  meta: {
    description:
      "Riccardo Ingrasciotta — Software Engineer specializzato in React, architetture front-end e sistemi di monitoraggio dati.",
  },
  header: {
    primaryNav: "Principale",
    menuToggle: "Apri o chiudi il menu di navigazione",
    language: "Lingua",
    theme: {
      toLight: "Passa al tema chiaro",
      toDark: "Passa al tema scuro",
    },
    nav: {
      about: "Chi sono",
      skills: "Competenze",
      experience: "Esperienza",
      projects: "Progetti",
      contact: "Contatti",
    },
  },
  hero: {
    status: "stato: disponibile a nuove opportunità",
    tagline: "Software Engineer — realizzo front end affidabili e orientati ai dati.",
    pitch:
      "Tre anni di esperienza nella progettazione di interfacce React e sistemi di monitoraggio per piattaforme su larga scala, dalle pipeline dati dell'ESA ai microfrontend bancari.",
    downloadCv: "Scarica il CV",
    getInTouch: "Contattami",
  },
  about: {
    eyebrow: "Chi sono",
    heading: "Un front end costruito per l'affidabilità",
    achievements: "Risultati principali",
  },
  skills: {
    eyebrow: "Competenze",
    heading: "Strumenti",
  },
  experience: {
    eyebrow: "Esperienza",
    heading: "Dove ho lavorato",
  },
  education: {
    eyebrow: "Formazione",
    heading: "Il mio percorso",
  },
  projects: {
    eyebrow: "Progetti",
    heading: "Lavori selezionati",
    liveDemo: "Demo live",
    source: "Codice",
    previewAlt: (title: string) => `${title} — anteprima del progetto`,
  },
  contact: {
    eyebrow: "Contatti",
    heading: "Costruiamo qualcosa di affidabile",
    pitch: "Aperto a nuove opportunità e collaborazioni. Il modo più rapido per contattarmi è l'email.",
    email: "Email",
    phone: "Telefono",
    linkedin: "LinkedIn",
    location: "Località",
  },
  footer: {
    backToTop: "Torna su ↑",
  },
};
