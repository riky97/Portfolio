export interface ContactInfo {
  name: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
}

export const contact: ContactInfo = {
  name: "Riccardo Ingrasciotta",
  role: "Software Engineer",
  location: "Abbiategrasso, Italy",
  phone: "+39 331 338 6770",
  email: "riccardoingrasciotta@gmail.com",
  linkedin: "riccardoingrasciotta",
  linkedinUrl: "https://www.linkedin.com/in/riccardoingrasciotta",
};

export const about = `Software Developer with three years of experience focused on building modern web applications and intuitive user interfaces. My main expertise lies in React, where I design and develop reliable, scalable, and user-centric front-end solutions.

Alongside front-end development, I have hands-on experience with backend systems in .NET, Microfrontend architectures, and SharePoint integrations. I also work with Python and Kubernetes, applying these technologies to improve automation, scalability, and overall system robustness.

Driven by curiosity and a proactive mindset, I am constantly exploring new technologies, refining engineering practices, and expanding my technical skill set.`;

export const keyAchievements: string[] = [
  "Developed scalable and high-performance React interfaces, creating reusable components and optimizing overall user experience.",
  "Contributed to backend development in .NET, implementing robust features and improving integration with front-end services.",
  "Designed and integrated Microfrontend architectures, enhancing modularity, maintainability, and team autonomy.",
  "Supported and optimized SharePoint-based platforms, streamlining internal workflows and improving system reliability.",
  "Improved automation and scalability using Python and Kubernetes, increasing system performance and resilience.",
];

export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", items: ["React", ".NET", "Microfrontend architectures", "React Native", "Electron"] },
  { category: "Tools & Platforms", items: ["Kubernetes", "Docker", "SharePoint", "Git", "CI/CD", "Webpack", "Jenkins", "Bitbucket"] },
  { category: "Data & Search", items: ["AWS S3", "Elasticsearch", "OpenSearch"] },
  { category: "Soft Skills", items: ["Problem Solving", "Teamwork", "Communication", "Adaptability", "Proactivity", "Continuous Learning"] },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Capgemini – European Space Agency (ESA)",
    role: "Software Engineer",
    location: "Milan, Italy",
    period: "Apr. 2023 – Present",
    bullets: [
      "Involved in the Performance Monitoring System (PMS), managing Grafana dashboards, OpenSearch data storage, and secure data ingestion via the input basket.",
      "Developed and maintained Grafana dashboards to visualize key performance indicators across multiple timeframes.",
      "Implemented data storage pipelines in OpenSearch for fast, reliable access to raw and pre-calculated data.",
      "Managed the secure input basket (SFTP) for ingesting external data, ensuring integrity and confidentiality.",
      "Maintained and enhanced the Invalidation Tool, a React-based frontend used to correct KPIs, adding features to improve usability and reliability.",
    ],
    technologies: ["Python", "OpenSearch", "Grafana", "React", "Kubernetes"],
  },
  {
    company: "Capgemini – Poste Italiane",
    role: "Software Engineer",
    location: "Milan, Italy",
    period: "Apr. 2023 – Present",
    bullets: [
      "Developed new web parts for SharePoint, managing the entire frontend for an intuitive and responsive UI.",
      "Collaborated with product and design teams to improve UI/UX and implement customer feedback.",
    ],
    technologies: ["React", "TypeScript", "SharePoint"],
  },
  {
    company: "Craon",
    role: "Software Developer",
    location: "Milan, Italy",
    period: "May 2022 – Mar. 2023",
    bullets: [
      "Developed front-end applications for the banking sector using a microfrontend architecture.",
      "Collaborated in cross-functional teams to deliver scalable and maintainable web solutions.",
      "Participated in DevOps pipelines and CI/CD integration to improve deployment efficiency.",
    ],
    technologies: ["React", "JavaScript/TypeScript", "Webpack", "Jenkins", "Bitbucket"],
  },
];

export interface EducationEntry {
  institution: string;
  location: string;
  title: string;
  period: string;
  notes?: string[];
}

export const education: EducationEntry[] = [
  {
    institution: "Start2Impact",
    location: "Online",
    title: "Junior Front-End Developer",
    period: "Jan. 2022 – Mar. 2022",
    notes: [
      "HTML & CSS for responsive, accessible layouts",
      "JavaScript (ES6+) and modular React interfaces",
      "Practical projects: landing pages, websites, small web apps",
    ],
  },
  {
    institution: "University of Milan",
    location: "Milan, Italy",
    title: "Bachelor's Degree in Music Informatics (not completed)",
    period: "Sep. 2017 – Withdrawn",
  },
  {
    institution: "Technical High School",
    location: "Milan, Italy",
    title: "High School Diploma",
    period: "Sep. 2011 – Aug. 2017",
  },
];
