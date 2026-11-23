import { both, type Localized } from "@/i18n/types";

export interface ContactInfo {
  name: string;
  location: Localized<string>;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
}

export const contact: ContactInfo = {
  name: "Riccardo Ingrasciotta",
  location: { en: "Abbiategrasso, Italy", it: "Abbiategrasso, Italia" },
  phone: "+39 331 338 6770",
  email: "riccardoingrasciotta@gmail.com",
  linkedin: "riccardoingrasciotta",
  linkedinUrl: "https://www.linkedin.com/in/riccardoingrasciotta",
};

/** One entry per paragraph. */
export const about: Localized<string[]> = {
  en: [
    "Software Developer with three years of experience focused on building modern web applications and intuitive user interfaces. My main expertise lies in React, where I design and develop reliable, scalable, and user-centric front-end solutions.",
    "Alongside front-end development, I have hands-on experience with backend systems in .NET, Microfrontend architectures, and SharePoint integrations. I also work with Python and Kubernetes, applying these technologies to improve automation, scalability, and overall system robustness.",
    "Driven by curiosity and a proactive mindset, I am constantly exploring new technologies, refining engineering practices, and expanding my technical skill set.",
  ],
  it: [
    "Sviluppatore software con tre anni di esperienza nella realizzazione di applicazioni web moderne e interfacce intuitive. La mia competenza principale è React, con cui progetto e sviluppo soluzioni front-end affidabili, scalabili e centrate sull'utente.",
    "Oltre al front-end, ho esperienza diretta con sistemi backend in .NET, architetture a microfrontend e integrazioni SharePoint. Lavoro anche con Python e Kubernetes, applicandoli per migliorare automazione, scalabilità e robustezza complessiva dei sistemi.",
    "Spinto dalla curiosità e da un approccio proattivo, esploro continuamente nuove tecnologie, affino le pratiche di ingegneria e amplio il mio bagaglio tecnico.",
  ],
};

export const keyAchievements: Localized<string[]> = {
  en: [
    "Developed scalable and high-performance React interfaces, creating reusable components and optimizing overall user experience.",
    "Contributed to backend development in .NET, implementing robust features and improving integration with front-end services.",
    "Designed and integrated Microfrontend architectures, enhancing modularity, maintainability, and team autonomy.",
    "Supported and optimized SharePoint-based platforms, streamlining internal workflows and improving system reliability.",
    "Improved automation and scalability using Python and Kubernetes, increasing system performance and resilience.",
  ],
  it: [
    "Sviluppo di interfacce React scalabili e ad alte prestazioni, con componenti riutilizzabili e un'esperienza utente ottimizzata.",
    "Contributo allo sviluppo backend in .NET, con funzionalità robuste e una migliore integrazione con i servizi front-end.",
    "Progettazione e integrazione di architetture a microfrontend, per più modularità, manutenibilità e autonomia dei team.",
    "Supporto e ottimizzazione di piattaforme basate su SharePoint, semplificando i flussi di lavoro interni e migliorando l'affidabilità del sistema.",
    "Miglioramento di automazione e scalabilità con Python e Kubernetes, aumentando prestazioni e resilienza dei sistemi.",
  ],
};

export interface SkillGroup {
  category: Localized<string>;
  items: Localized<string[]>;
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: "Languages", it: "Linguaggi" },
    items: both(["Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS"]),
  },
  {
    category: { en: "Frameworks & Libraries", it: "Framework e librerie" },
    items: {
      en: ["React", ".NET", "Microfrontend architectures", "React Native", "Electron"],
      it: ["React", ".NET", "Architetture a microfrontend", "React Native", "Electron"],
    },
  },
  {
    category: { en: "Tools & Platforms", it: "Strumenti e piattaforme" },
    items: both(["Kubernetes", "Docker", "SharePoint", "Git", "CI/CD", "Webpack", "Jenkins", "Bitbucket"]),
  },
  {
    category: { en: "Data & Search", it: "Dati e ricerca" },
    items: both(["AWS S3", "Elasticsearch", "OpenSearch"]),
  },
  {
    category: { en: "Soft Skills", it: "Soft skill" },
    items: {
      en: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Proactivity", "Continuous Learning"],
      it: ["Problem solving", "Lavoro di squadra", "Comunicazione", "Adattabilità", "Proattività", "Apprendimento continuo"],
    },
  },
];

const milan: Localized<string> = { en: "Milan, Italy", it: "Milano, Italia" };

export interface ExperienceEntry {
  company: string;
  role: Localized<string>;
  location: Localized<string>;
  period: Localized<string>;
  bullets: Localized<string[]>;
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Capgemini – European Space Agency (ESA)",
    role: both("Software Engineer"),
    location: milan,
    period: { en: "Apr. 2023 – Present", it: "apr. 2023 – oggi" },
    bullets: {
      en: [
        "Involved in the Performance Monitoring System (PMS), managing Grafana dashboards, OpenSearch data storage, and secure data ingestion via the input basket.",
        "Developed and maintained Grafana dashboards to visualize key performance indicators across multiple timeframes.",
        "Implemented data storage pipelines in OpenSearch for fast, reliable access to raw and pre-calculated data.",
        "Managed the secure input basket (SFTP) for ingesting external data, ensuring integrity and confidentiality.",
        "Maintained and enhanced the Invalidation Tool, a React-based frontend used to correct KPIs, adding features to improve usability and reliability.",
      ],
      it: [
        "Coinvolto nel Performance Monitoring System (PMS): gestione delle dashboard Grafana, archiviazione dei dati in OpenSearch e acquisizione sicura dei dati tramite l'input basket.",
        "Sviluppo e manutenzione di dashboard Grafana per visualizzare i KPI su diversi intervalli temporali.",
        "Implementazione di pipeline di archiviazione in OpenSearch per un accesso rapido e affidabile ai dati grezzi e pre-calcolati.",
        "Gestione dell'input basket sicuro (SFTP) per l'acquisizione di dati esterni, garantendone integrità e riservatezza.",
        "Manutenzione ed evoluzione dell'Invalidation Tool, un'applicazione front-end React usata per correggere i KPI, con nuove funzionalità per migliorarne usabilità e affidabilità.",
      ],
    },
    technologies: ["Python", "OpenSearch", "Grafana", "React", "Kubernetes"],
  },
  {
    company: "Capgemini – Poste Italiane",
    role: both("Software Engineer"),
    location: milan,
    period: { en: "Apr. 2023 – Present", it: "apr. 2023 – oggi" },
    bullets: {
      en: [
        "Developed new web parts for SharePoint, managing the entire frontend for an intuitive and responsive UI.",
        "Collaborated with product and design teams to improve UI/UX and implement customer feedback.",
      ],
      it: [
        "Sviluppo di nuove web part per SharePoint, occupandomi dell'intero front-end per un'interfaccia intuitiva e responsive.",
        "Collaborazione con i team di prodotto e design per migliorare UI/UX e recepire il feedback dei clienti.",
      ],
    },
    technologies: ["React", "TypeScript", "SharePoint"],
  },
  {
    company: "Craon",
    role: { en: "Software Developer", it: "Sviluppatore software" },
    location: milan,
    period: { en: "May 2022 – Mar. 2023", it: "mag. 2022 – mar. 2023" },
    bullets: {
      en: [
        "Developed front-end applications for the banking sector using a microfrontend architecture.",
        "Collaborated in cross-functional teams to deliver scalable and maintainable web solutions.",
        "Participated in DevOps pipelines and CI/CD integration to improve deployment efficiency.",
      ],
      it: [
        "Sviluppo di applicazioni front-end per il settore bancario con un'architettura a microfrontend.",
        "Collaborazione in team multidisciplinari per realizzare soluzioni web scalabili e manutenibili.",
        "Partecipazione a pipeline DevOps e integrazione CI/CD per rendere i rilasci più efficienti.",
      ],
    },
    technologies: ["React", "JavaScript/TypeScript", "Webpack", "Jenkins", "Bitbucket"],
  },
];

export interface EducationEntry {
  institution: Localized<string>;
  location: Localized<string>;
  title: Localized<string>;
  period: Localized<string>;
  notes?: Localized<string[]>;
}

export const education: EducationEntry[] = [
  {
    institution: both("Start2Impact"),
    location: both("Online"),
    title: both("Junior Front-End Developer"),
    period: { en: "Jan. 2022 – Mar. 2022", it: "gen. 2022 – mar. 2022" },
    notes: {
      en: [
        "HTML & CSS for responsive, accessible layouts",
        "JavaScript (ES6+) and modular React interfaces",
        "Practical projects: landing pages, websites, small web apps",
      ],
      it: [
        "HTML e CSS per layout responsive e accessibili",
        "JavaScript (ES6+) e interfacce React modulari",
        "Progetti pratici: landing page, siti web, piccole web app",
      ],
    },
  },
  {
    institution: { en: "University of Milan", it: "Università degli Studi di Milano" },
    location: milan,
    title: {
      en: "Bachelor's Degree in Music Informatics (not completed)",
      it: "Laurea triennale in Informatica Musicale (non conclusa)",
    },
    period: { en: "Sep. 2017 – Withdrawn", it: "set. 2017 – ritirato" },
  },
  {
    institution: { en: "Technical High School", it: "Istituto Tecnico" },
    location: milan,
    title: { en: "High School Diploma", it: "Diploma di scuola superiore" },
    period: { en: "Sep. 2011 – Aug. 2017", it: "set. 2011 – ago. 2017" },
  },
];
