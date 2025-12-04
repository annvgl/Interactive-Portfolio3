import { createContext, useContext, useState } from "react";
import type * as React from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext(undefined as LanguageContextType | undefined);

const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_about: "About",

    // Hero
    hero_greeting: "Hi, I'm Ann Vogel",
    hero_title: "Interaction Designer UI/UX",
    hero_job_title: "Interaction Designer",
    hero_subtitle: "Creating meaningful digital experiences through human-centered design",
    hero_cta: "See My CV",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle: "A selection of my UX/UI design work focused on creating intuitive, user-centered experiences",
    category_all: "All",
    category_app: "Application Design",
    category_prototype: "Physical Prototype",
    category_photography: "Photography",
    category_research: "UI/UX Research",
    category_design: "UI/UX Design",

    // Project Detail
    project_semester: "Semester",
    project_challenge: "The Challenge",
    project_solution: "The Solution",
    project_role: "My Role",
    project_research: "Research & Insights",
    project_design_process: "Design Process",
    project_physical_prototype: "Physical Prototype",
    project_approach: "Approach",
    project_outcomes: "Key Outcomes",
    project_mockups: "Design Mockups",
    project_uiux: "UI/UX Design Aspects",
    project_results: "Final Results & Impact",
    project_prev: "Previous Project",
    project_next: "Next Project",
    project_view_prototype: "View Prototype",
    project_view_live: "View Live",
    project_scroll_hint: "← Scroll to view all mockups →",

    // Skills
    skills_title: "Skills & Expertise",
    skills_subtitle: "Tools and methodologies I use to create user-centered solutions",
    skills_design: "Design Tools",
    skills_research: "Research & Methods",
    skills_prototyping: "Prototyping & Development",

    // About
    about_title: "Hi, I'm Ann Vogel",
    about_description: "I'm a passionate Interaction Designer specializing in UI/UX design with a deep commitment to creating meaningful, user-centered digital experiences. My approach combines empathy-driven research with thoughtful design solutions that solve real problems and improve people's daily lives.",
    about_philosophy_title: "Design Philosophy",
    about_philosophy: "I believe great design starts with understanding people—their needs, frustrations, and aspirations. Every project I undertake begins with thorough user research and empathy mapping, ensuring that solutions are not just visually appealing, but truly functional and accessible.",
    about_passion_title: "What Drives Me",
    about_passion: "I'm passionate about bridging the gap between human needs and technological possibilities. Whether designing mobile apps, physical prototypes, or interactive installations, I focus on creating experiences that feel natural, intuitive, and empowering.",
    about_contact: "Let's Connect",
    about_value1_title: "Human Centered Design",
    about_value1_desc: "Every design decision starts with understanding user needs and behaviors",
    about_value2_title: "Creative Problem Solving",
    about_value2_desc: "Turning complex challenges into elegant, intuitive solutions",
    about_value3_title: "Goal-Oriented",
    about_value3_desc: "Designing with clear objectives and measurable outcomes in mind",
    about_value4_title: "Passionate",
    about_value4_desc: "Designing thoughtful and easy interactive solutions that make everyday life simpler and better for users.",
    about_text1: "Hi, I'm Ann Vogel, an Interaction Designer dedicated to creating human-centered designs that make everyday tasks easier and more manageable. With a background in UI/UX design and physical prototyping, I combine digital expertise with hands-on innovation to deliver comprehensive design solutions.",
    about_text2: "I believe great design begins with understanding people—their needs, frustrations, and aspirations. Every project I undertake starts with thorough user research and empathy mapping to ensure solutions are not only visually appealing but truly functional and accessible. My approach emphasizes iterative testing and user feedback, allowing me to refine designs until they truly resonate with the people who use them.",
    about_text3: "My passion lies in bridging human needs with technology through thoughtful, intuitive designs that empower users and improve daily life. Whether I'm developing mobile applications, creating interactive installations, or building physical prototypes, I focus on crafting experiences that feel natural and meaningful. I'm constantly exploring new ways to make complex systems simple and delightful to use.",

    // Footer
    footer_connect: "Let's Connect",
    footer_rights: "All rights reserved",
    footer_description: "Passionate about creating user-centered digital experiences",

    // Common
    close: "Close",
    click_expand: "Click to expand",
    click_collapse: "Click to collapse",
    category_label: "Category",

    // Personal Words / Hobbies
    floating_words_title: "What I Like",
    hobby_animals: "Animals",
    hobby_traveling: "Traveling",
    hobby_reading: "Reading",
    hobby_music: "Music",
    hobby_nature: "Nature",
    hobby_coffee: "Coffee",
    personality_creative: "Creative",
    personality_curious: "Curious",
  },
  de: {
    // Navigation
    nav_home: "Startseite",
    nav_projects: "Projekte",
    nav_skills: "Fähigkeiten",
    nav_about: "Über mich",

    // Hero
    hero_greeting: "Hi, ich bin Ann Vogel",
    hero_title: "Interaction Designer UI/UX",
    hero_job_title: "Interaktionsgestalterin",
    hero_subtitle: "Ich erschaffe bedeutungsvolle digitale Erlebnisse durch menschenzentriertes Design",
    hero_cta: "Mein Lebenslauf ansehen",

    // Projects
    projects_title: "Projekte",
    projects_subtitle: "Eine Auswahl meiner UX/UI-Designarbeiten mit Fokus auf intuitive, nutzerzentrierte Erlebnisse",
    category_all: "Alle",
    category_app: "Anwendungsdesign",
    category_prototype: "Physischer Prototyp",
    category_photography: "Fotografie",
    category_research: "UI/UX-Forschung",
    category_design: "UI/UX-Design",

    // Project Detail
    project_semester: "Semester",
    project_challenge: "Die Herausforderung",
    project_solution: "Die Lösung",
    project_role: "Meine Rolle",
    project_research: "Forschung & Erkenntnisse",
    project_design_process: "Design-Prozess",
    project_physical_prototype: "Physischer Prototyp",
    project_approach: "Vorgehen",
    project_outcomes: "Wichtigste Ergebnisse",
    project_mockups: "Design-Mockups",
    project_uiux: "UI/UX-Design-Aspekte",
    project_results: "Endergebnisse & Wirkung",
    project_prev: "Vorheriges Projekt",
    project_next: "Nächstes Projekt",
    project_view_prototype: "Prototyp ansehen",
    project_view_live: "Live ansehen",
    project_scroll_hint: "← Scrollen für alle Mockups →",

    // Skills
    skills_title: "Fähigkeiten & Expertise",
    skills_subtitle: "Werkzeuge und Methoden, die ich nutze, um nutzerzentrierte Lösungen zu schaffen",
    skills_design: "Design-Tools",
    skills_research: "Forschung & Methoden",
    skills_prototyping: "Prototyping & Entwicklung",

    // About
    about_title: "Hi, ich bin Ann Vogel",
    about_description: "Ich bin eine leidenschaftliche Interaction Designerin mit Spezialisierung auf UI/UX-Design und einem tiefen Engagement für die Schaffung bedeutungsvoller, nutzerzentrierter digitaler Erlebnisse. Mein Ansatz kombiniert empathiegetriebene Forschung mit durchdachten Design-Lösungen, die echte Probleme lösen und das tägliche Leben der Menschen verbessern.",
    about_philosophy_title: "Design-Philosophie",
    about_philosophy: "Ich glaube, dass großartiges Design damit beginnt, Menschen zu verstehen – ihre Bedürfnisse, Frustrationen und Bestrebungen. Jedes Projekt, das ich angehe, beginnt mit gründlicher Nutzerforschung und Empathy Mapping, um sicherzustellen, dass Lösungen nicht nur visuell ansprechend, sondern wirklich funktional und zugänglich sind.",
    about_passion_title: "Was mich antreibt",
    about_passion: "Ich bin leidenschaftlich daran interessiert, die Lücke zwischen menschlichen Bedürfnissen und technologischen Möglichkeiten zu überbrücken. Ob ich mobile Apps, physische Prototypen oder interaktive Installationen gestalte – ich konzentriere mich darauf, Erlebnisse zu schaffen, die sich natürlich, intuitiv und empowernd anfühlen.",
    about_contact: "Lass uns verbinden",
    about_value1_title: "Menschenzentriertes Design",
    about_value1_desc: "Jede Design-Entscheidung beginnt mit dem Verständnis von Nutzerbedürfnissen und -verhalten",
    about_value2_title: "Kreative Problemlösung",
    about_value2_desc: "Komplexe Herausforderungen in elegante, intuitive Lösungen verwandeln",
    about_value3_title: "Zielorientiert",
    about_value3_desc: "Design mit klaren Zielen und messbaren Ergebnissen im Blick",
    about_value4_title: "Leidenschaftlich",
    about_value4_desc: "Durchdachte und einfache interaktive Lösungen gestalten, die das tägliche Leben für Nutzer einfacher und besser machen.",
    about_text1: "Hi, ich bin Ann Vogel, eine Interaction Designerin, die sich der Schaffung menschenzentrierter Designs widmet, die alltägliche Aufgaben einfacher und handhabbarer machen.",
    about_text2: "Ich glaube, dass großartiges Design mit dem Verständnis von Menschen beginnt – ihren Bedürfnissen, Frustrationen und Bestrebungen. Jedes Projekt, das ich angehe, beginnt mit gründlicher Nutzerforschung und Empathy Mapping, um sicherzustellen, dass Lösungen nicht nur visuell ansprechend, sondern wirklich funktional und zugänglich sind.",
    about_text3: "Meine Leidenschaft liegt darin, menschliche Bedürfnisse mit Technologie durch durchdachte, intuitive Designs zu verbinden, die Benutzer empowern und das tägliche Leben verbessern.",

    // Footer
    footer_connect: "Lass uns verbinden",
    footer_rights: "Alle Rechte vorbehalten",
    footer_description: "Leidenschaftlich dafür, nutzerzentrierte digitale Erlebnisse zu schaffen",

    // Common
    close: "Schließen",
    click_expand: "Klicken zum Erweitern",
    click_collapse: "Klicken zum Minimieren",
    category_label: "Kategorie",

    // Personal Words / Hobbies
    floating_words_title: "Was ich mag",
    hobby_animals: "Tiere",
    hobby_traveling: "Reisen",
    hobby_reading: "Lesen",
    hobby_music: "Musik",
    hobby_nature: "Natur",
    hobby_coffee: "Kaffee",
    personality_creative: "Kreativ",
    personality_curious: "Neugierig",
  },
};

export function LanguageProvider({ children }: { children: React.JSX.Element | React.JSX.Element[] }) {
  const [language, setLanguage] = useState("en" as Language);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}