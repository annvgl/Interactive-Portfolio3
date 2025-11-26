import picture1 from "figma:asset/c6e99aaab6f6105f5aa9901304d2fd4d1043cc47.png";
import posturaImage1 from "figma:asset/abe9ae3fcee5e0b08a30710196dbb4ecb179f552.png";
import postureImage4 from "../assets/haltungstracker.jpg";
import posturaImage2 from "figma:asset/72be67470e1a8eac68b6661850a9ceb8c7280edc.png";
import posturaImage3 from "figma:asset/ea84a693123bb8fc0e64459acbcd2a3f819c7712.png";
import myDealzImage1 from "figma:asset/9e50184f102b53e1554ed91ccab2c7b70d8816f2.png";
import myDealzImage2 from "figma:asset/de7e3e203184103d91157f726e7b13dbb6607185.png";
import myDealzMockup1 from "figma:asset/b87b59dd244ea3898bba74d34c5a164da9b994a3.png";
import myDealzMockup2 from "figma:asset/b9c1314be429aa41d3c8efa8704155ae49c7c6f3.png";
import myDealzMockup3 from "figma:asset/fde9244a45fa5c7e4adf3378ac336bf33595c59a.png";
import planMeImage1 from "figma:asset/a9a26305a58e7cb060fdfc6bc301a01de59c1789.png";
import planMeImage2 from "figma:asset/08848c22c4a7a702c03d3c9a343c7ac575ab1a6e.png";
import planMeImage3 from "figma:asset/debae69e28cbae30af7478ae0fc1f4eeec156214.png";
import planMeImage4 from "figma:asset/2b83326c902393b8c6753055b060998786b8f2b2.png";
import fossilBoxImage from "figma:asset/4bb8bd3b027e7fbad05a2e9f2009790b08fcc7f9.png";
import photographyImage from "figma:asset/c48296c049e6c8c9a707c287335f463af377a82a.png";

export interface MultilingualText {
  en: string;
  de: string;
}

export interface Project {
  title: MultilingualText;
  category: MultilingualText;
  description: MultilingualText;
  fullDescription: MultilingualText;
  semester: string;
  problem: MultilingualText | MultilingualText[];
  solution?: MultilingualText;
  role?: MultilingualText;
  approach?: MultilingualText[];
  outcomes?: MultilingualText[];
  mockups?: string[];
  images: string[];
  tags: MultilingualText[];
  figmaUrl?: string;
  liveUrl?: string;
  colorPalette?: { name: string; color: string }[];
  uiUxAspects?: { description: MultilingualText };
  finalResults?: MultilingualText;
  projectCategory: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    title: {
      en: "Postura – Your Posture, Your Strength",
      de: "Postura – Deine Haltung, Deine Stärke"
    },
    category: {
      en: "Invention Design",
      de: "Erfindungsdesign"
    },
    description: {
      en: "A comprehensive posture correction solution combining a mobile app and physical prototype designed to help people who work at desks and sit for long periods improve their posture and reduce work-related strain.",
      de: "Eine umfassende Haltungskorrektur-Lösung, die eine mobile App und einen physischen Prototyp kombiniert, um Menschen, die an Schreibtischen arbeiten und viel sitzen, zu helfen, ihre Haltung zu verbessern und arbeitsbedingte Belastungen zu reduzieren."
    },
    fullDescription: {
      en: "Postura is an innovative posture correction system designed specifically for people who work at desks and sit for long periods. It combines digital (mobile app) and physical (prototype) solutions to help users maintain healthy posture throughout their workday.",
      de: "Postura ist ein innovatives Haltungskorrektur-System, das speziell für Menschen geschaffen wurde, die viel Zeit am Schreibtisch verbringen. Durch die Kombination einer intelligenten mobilen App mit einem durchdachten physischen Prototyp unterstützt Postura Nutzer dabei, ihre Haltung während des gesamten Arbeitstags zu verbessern und langfristig gesund zu bleiben."
    },
    semester: "3rd Semester",
    problem: {
      en: "Most people who work at desks and sit for long periods spend hours sitting and develop poor posture, causing back pain and long-term health issues. Existing solutions lack real-time feedback or are too intrusive for daily use. So creating a comfortable and supportive prototype was essential for us.",
      de: "Die meisten Menschen, die an Schreibtischen arbeiten und viel sitzen, sitzen stundenlang und entwickeln eine schlechte Haltung, was Rückenschmerzen und langfristige Gesundheitsprobleme verursacht. Bestehende Lösungen bieten kein Echtzeit-Feedback oder sind zu aufdringlich für den täglichen Gebrauch. Daher war es für uns essentiell, einen komfortablen und unterstützenden Prototyp zu schaffen."
    },
    solution: {
      en: "Dual-approach with mobile app and physical prototype. App provides real-time posture monitoring, personalized exercise recommendations, and progress tracking. Prototype delivers tactile feedback, supporting correct sitting positions.",
      de: "Dualer Ansatz mit mobiler App und physischem Prototyp. Die App bietet Echtzeit-Haltungsüberwachung, personalisierte Übungsempfehlungen und Fortschrittsverfolgung. Der Prototyp liefert taktiles Feedback und unterstützt korrekte Sitzpositionen."
    },
    role: {
      en: "I conducted most of the user research, created user flows, and designed the app interface. The physical prototype was built collaboratively as a group. We conducted user testings for both the app and the prototype.",
      de: "Ich habe den Großteil der Nutzerforschung durchgeführt, User Flows erstellt und das App-Interface designt. Der physische Prototyp wurde gemeinschaftlich als Gruppe gebaut. Wir haben Nutzertests sowohl für die App als auch für den Prototyp durchgeführt."
    },
    outcomes: [
      {
        en: "Designed a comprehensive mobile app for posture live-tracking and exercise guidance",
        de: "Entwicklung einer umfassenden mobilen App für Live-Haltungsverfolgung und Übungsanleitung"
      },
      {
        en: "Created a functional physical prototype that complements the digital app",
        de: "Erstellung eines funktionalen physischen Prototyps, der die digitale App ergänzt"
      },
      {
        en: "Developed real-time posture monitoring and feedback system",
        de: "Entwicklung eines Echtzeit-Haltungsüberwachungs- und Feedbacksystems"
      },
      {
        en: "Built personalized training programs tailored to desk workers' needs",
        de: "Aufbau personalisierter Trainingsprogramme, zugeschnitten auf die Bedürfnisse von Menschen, die an Schreibtischen arbeiten und viel sitzen"
      },
      {
        en: "Combined digital and physical design into one cohesive experience",
        de: "Kombination von digitalem und physischem Design in eine kohärente Erfahrung"
      }
    ],
    finalResults: {
      en: "Postura enables users to build healthy posture habits naturally while working—making daily life easier and healthier through thoughtful, interactive design, creating an understanding for good posture and, in the long run, better health.",
      de: "Postura ermöglicht es Nutzern, während der Arbeit natürlich gesunde Haltungsgewohnheiten aufzubauen – und macht das tägliche Leben durch durchdachtes, interaktives Design einfacher und gesünder, schafft Verständnis für gute Haltung und langfristig bessere Gesundheit."
    },
    colorPalette: [
      { name: "Pitch Black", color: "#0E0906" },
      { name: "White", color: "#FFFFFF" },
      { name: "Yale Blue", color: "#1B4965" },
      { name: "Pale Sky", color: "#CAE9FF" },
      { name: "Fresh Sky", color: "#5FA8D3" },
    ],
    uiUxAspects: {
      description: {
        en: "Clean, accessible UI design with interactive elements including live tracking, feedback screens, personalized dashboard, exercise reminders, and progress visualizations.",
        de: "Sauberes, zugängliches UI-Design mit interaktiven Elementen wie Live-Tracking, Feedback-Screens, personalisiertem Dashboard, Übungserinnerungen und Fortschrittsvisualisierungen."
      }
    },
    image: picture1,
    images: [picture1, posturaImage2, posturaImage3],
    tags: [
      { en: "Physical Prototype", de: "Physischer Prototyp" },
      { en: "UI/UX-Design", de: "UI/UX-Design" },
      { en: "Product Design", de: "Produktdesign" },
      { en: "UI/UX-Forschung", de: "UI/UX-Forschung" }
    ],
    figmaUrl: "#",
    projectCategory: "Physical Prototype",
    featured: true,
  },
  {
    title: {
      en: "MyDealz – App Redesign",
      de: "MyDealz – App Redesign"
    },
    category: {
      en: "Application Design",
      de: "Anwendungsdesign"
    },
    description: {
      en: "A mobile application redesign focused on improving an existing app that was not designed with user-centered principles.",
      de: "Ein mobiles Anwendungs-Redesign mit Fokus auf Verbesserung einer bestehenden App, die nicht mit nutzerzentrierten Prinzipien gestaltet wurde."
    },
    fullDescription: {
      en: "Improve an existing app that was not designed with user-centered principles.",
      de: "Verbesserung einer bestehenden App, die nicht mit nutzerzentrierten Prinzipien entwickelt wurde."
    },
    semester: "3rd Semester",
    problem: [
      {
        en: "The biggest Challenge for us was establishing a clear structure that faithfully reflected and upheld our refined value proposition.",
        de: "Die größte Herausforderung für uns war es, eine klare Struktur zu etablieren, die unser verfeinerte Wertversprechen treu widerspiegelt und aufrechterhält."
      },
      {
        en: "Keeping the design minimal and uncluttered to ensure simplicity without sacrificing functionality.",
        de: "Das Design minimal und aufgeräumt zu halten, um Einfachheit zu gewährleisten, ohne Funktionalität zu opfern."
      },
      {
        en: "Designing comprehensive and intuitive filter options that offer good usability while maintaining visual clarity.",
        de: "Umfassende und intuitive Filteroptionen zu gestalten, die gute Benutzerfreundlichkeit bieten und gleichzeitig visuelle Klarheit bewahren."
      }
    ],
    approach: [
      {
        en: "Followed the classic interaction design process using the Double Diamond model: Discover – Define – Develop – Deliver.",
        de: "Befolgung des klassischen Interaction-Design-Prozesses mit dem Double-Diamond-Modell: Entdecken – Definieren – Entwickeln – Liefern."
      },
      {
        en: "Conducted market research to assess the current value proposition and perform competitor mapping.",
        de: "Durchführung von Marktforschung zur Bewertung des aktuellen Wertversprechens und Wettbewerber-Mapping."
      },
      {
        en: "Analyzed user needs to define the project focus.",
        de: "Analyse der Nutzerbedürfnisse zur Definition des Projektfokus."
      },
      {
        en: "Created personas and identified their pain points.",
        de: "Erstellung von Personas und Identifikation ihrer Pain Points."
      },
      {
        en: "Developed \"How might we\" questions to tackle user problems effectively.",
        de: "Entwicklung von \"Wie könnten wir\"-Fragen zur effektiven Bewältigung von Nutzerproblemen."
      }
    ],
    outcomes: [
      {
        en: "Redefined and enhanced value propositions based on user insights.",
        de: "Neudefinition und Verbesserung der Wertversprechen basierend auf Nutzer-Insights."
      },
      {
        en: "Developed keyframes as visual guides for the redesigned app.",
        de: "Entwicklung von Keyframes als visuelle Guides für die redesignte App."
      },
      {
        en: "Designed and evaluated a new user-friendly and accessible app interface.",
        de: "Design und Evaluierung eines neuen benutzerfreundlichen und zugänglichen App-Interfaces."
      }
    ],
    mockups: [myDealzMockup1, myDealzMockup2, myDealzMockup3],
    image: myDealzImage1,
    images: [myDealzImage1, myDealzImage2, myDealzMockup1, myDealzMockup2, myDealzMockup3],
    tags: [
      { en: "UI/UX Design", de: "UI/UX-Design" },
      { en: "UI/UX Research", de: "UI/UX-Forschung" },
      { en: "Application Design", de: "Anwendungsdesign" }
    ],
    figmaUrl: "#",
    projectCategory: "Application Design",
  },
  {
    title: {
      en: "PlanMe – WhatsApp Planning Feature",
      de: "PlanMe – WhatsApp Planungs-Feature"
    },
    category: {
      en: "Application Design",
      de: "Application Design"
    },
    description: {
      en: "A WhatsApp feature concept designed for organizing group events like meetings, parties, and trips with integrated planning tools and calendar synchronization.",
      de: "Ein WhatsApp-Feature-Konzept zur Organisation von Gruppenevents wie Meetings, Partys und Ausflügen mit integrierten Planungstools und Kalendersynchronisation."
    },
    fullDescription: {
      en: "PlanMe was conceived as an innovative feature for WhatsApp to streamline group event planning. This concept, developed during my first semester, introduced planning and organizing capabilities directly within WhatsApp conversations. Interestingly, WhatsApp later released a similar feature after we completed our project, validating our user-centered approach to solving group coordination challenges.",
      de: "PlanMe wurde als innovatives Feature für WhatsApp konzipiert, um die Planung von Gruppenevents zu optimieren. Dieses Konzept, entwickelt in meinem ersten Semester, führte Planungs- und Organisationsfunktionen direkt in WhatsApp-Konversationen ein. Interessanterweise hat WhatsApp später ein ähnliches Feature veröffentlicht, nachdem wir unser Projekt abgeschlossen hatten, was unseren nutzerzentrierten Ansatz zur Lösung von Gruppenkoordinierungs-Herausforderungen validierte."
    },
    semester: "1st Semester",
    problem: {
      en: "Coordinating group events through messaging apps is often chaotic and inefficient. Information gets lost in long chat threads, participants struggle to track event details, and confirming attendance requires multiple back-and-forth messages. There was no integrated way to create, manage, and track group events without switching between multiple apps.",
      de: "Die Koordination von Gruppenevents über Messaging-Apps ist oft chaotisch und ineffizient. Informationen gehen in langen Chat-Verläufen verloren, Teilnehmer haben Schwierigkeiten, Event-Details zu verfolgen, und die Bestätigung der Teilnahme erfordert mehrere Hin-und-Her-Nachrichten. Es gab keine integrierte Möglichkeit, Gruppenevents zu erstellen, zu verwalten und zu verfolgen, ohne zwischen mehreren Apps zu wechseln."
    },
    solution: {
      en: "We designed PlanMe as a seamless WhatsApp integration that allows users to create structured events directly within group chats. The feature includes event creation forms, calendar integration, RSVP tracking, location sharing with maps, and customizable planning options. Users can toggle between manual input and calendar synchronization, making event organization intuitive and accessible without leaving their conversations.",
      de: "Wir haben PlanMe als nahtlose WhatsApp-Integration entwickelt, die es Nutzern ermöglicht, strukturierte Events direkt in Gruppenchats zu erstellen. Das Feature umfasst Event-Erstellungsformulare, Kalenderintegration, RSVP-Tracking, Standortfreigabe mit Karten und anpassbare Planungsoptionen. Nutzer können zwischen manueller Eingabe und Kalendersynchronisation wechseln, wodurch Event-Organisation intuitiv und zugänglich wird, ohne ihre Konversationen zu verlassen."
    },
    role: {
      en: "As part of the design team, I contributed to the initial concept development, conducted user research to understand group planning pain points, created user flows and wireframes, designed the interface elements that integrate with WhatsApp's existing design language, and developed the interactive prototype for testing.",
      de: "Als Teil des Design-Teams habe ich zur initialen Konzeptentwicklung beigetragen, Nutzerforschung durchgeführt, um Pain Points bei der Gruppenplanung zu verstehen, User Flows und Wireframes erstellt, Interface-Elemente gestaltet, die sich in WhatsApps bestehende Design-Sprache integrieren, und den interaktiven Prototyp für Tests entwickelt."
    },
    approach: [
      {
        en: "Analyzed common pain points in group event coordination through user interviews",
        de: "Analyse häufiger Pain Points bei der Gruppenevents-Koordination durch Nutzerinterviews"
      },
      {
        en: "Mapped out user journeys for different event types (meetings, parties, trips)",
        de: "Mapping von User Journeys für verschiedene Event-Typen (Meetings, Partys, Ausflüge)"
      },
      {
        en: "Designed low-fidelity wireframes to test core functionality",
        de: "Design von Low-Fidelity-Wireframes zum Testen der Kernfunktionalität"
      },
      {
        en: "Created high-fidelity prototypes matching WhatsApp's visual design system",
        de: "Erstellung von High-Fidelity-Prototypen passend zu WhatsApps visuellem Design-System"
      },
      {
        en: "Conducted usability testing with target users to refine interactions",
        de: "Durchführung von Usability-Tests mit Zielnutzern zur Verfeinerung der Interaktionen"
      }
    ],
    outcomes: [
      {
        en: "Created an intuitive planning feature that integrates seamlessly with WhatsApp",
        de: "Erstellung eines intuitiven Planungs-Features, das sich nahtlos in WhatsApp integriert"
      },
      {
        en: "Designed calendar synchronization options for flexible event management",
        de: "Design von Kalendersynchronisations-Optionen für flexibles Event-Management"
      },
      {
        en: "Developed RSVP and attendance tracking within the chat interface",
        de: "Entwicklung von RSVP- und Teilnahme-Tracking innerhalb der Chat-Oberfläche"
      },
      {
        en: "Integrated location sharing with visual map previews",
        de: "Integration von Standortfreigabe mit visuellen Karten-Vorschauen"
      },
      {
        en: "Successfully validated the concept - similar functionality was later added to WhatsApp",
        de: "Erfolgreiche Validierung des Konzepts – ähnliche Funktionalität wurde später zu WhatsApp hinzugefügt"
      }
    ],
    image: planMeImage2,
    images: [planMeImage2, planMeImage1, planMeImage3, planMeImage4],
    tags: [
      { en: "UI/UX Design", de: "UI/UX-Design" },
      { en: "UI/UX Research", de: "UI/UX-Forschung" },
      { en: "Application Design", de: "Anwendungsdesign" }
    ],
    figmaUrl: "#",
    projectCategory: "Application Design",
  },
  {
    title: {
      en: "Fossil Box – Imprints of History",
      de: "Fossil Box – Abdrücke der Geschichte"
    },
    category: {
      en: "Interactive Installation",
      de: "Interaktive Installation"
    },
    description: {
      en: "An interactive physical installation showcasing four distinct types of fossilized animals using light-based interaction and reed-contact technology.",
      de: "Eine interaktive physische Installation, die vier verschiedene Arten fossiler Tiere mit lichtbasierter Interaktion und Reed-Kontakt-Technologie präsentiert."
    },
    fullDescription: {
      en: "Fossil Box is an interactive exhibition piece developed for the IKS (Interactive Communication Systems) course. The installation presents four different types of fossilized animals in an engaging, hands-on format. Using custom-built electronics and reed-contact sensors, visitors can interact with the exhibit to reveal information about each fossil through dynamic lighting and animations.",
      de: "Fossil Box ist ein interaktives Ausstellungsstück, entwickelt für den IKS-Kurs (Interactive Communication Systems). Die Installation präsentiert vier verschiedene Arten fossiler Tiere in einem ansprechenden, hands-on Format. Mit maßgefertigter Elektronik und Reed-Kontakt-Sensoren können Besucher mit dem Exponat interagieren, um Informationen über jedes Fossil durch dynamische Beleuchtung und Animationen zu enthüllen."
    },
    semester: "2nd Semester",
    problem: {
      en: "Traditional museum exhibits about fossils are often static and fail to engage visitors in meaningful ways. The challenge was to create an interactive experience that would make learning about fossilized animals more engaging and memorable while demonstrating the potential of interactive communication systems in educational contexts.",
      de: "Traditionelle Museumsausstellungen über Fossilien sind oft statisch und schaffen es nicht, Besucher auf bedeutungsvolle Weise einzubinden. Die Herausforderung bestand darin, eine interaktive Erfahrung zu schaffen, die das Lernen über fossile Tiere ansprechender und einprägsamer macht und gleichzeitig das Potenzial interaktiver Kommunikationssysteme in Bildungskontexten demonstriert."
    },
    solution: {
      en: "I designed and built an interactive box installation featuring four different fossilized animals. The system uses reed-contact sensors to detect user interaction, triggering custom-programmed lighting effects and animations. Each fossil comes to life when visitors engage with the exhibit, creating a tactile and visual learning experience that bridges physical and digital interaction.",
      de: "Ich habe eine interaktive Box-Installation mit vier verschiedenen fossilen Tieren designt und gebaut. Das System nutzt Reed-Kontakt-Sensoren, um Nutzerinteraktion zu erkennen und löst individuell programmierte Lichteffekte und Animationen aus. Jedes Fossil wird lebendig, wenn Besucher mit dem Exponat interagieren, und schafft eine taktile und visuelle Lernerfahrung, die physische und digitale Interaktion verbindet."
    },
    role: {
      en: "I led the technical and design implementation for this project, conducting extensive research on fossils and interactive exhibit design, physically building the box structure, creating detailed Figma animation flows for each interaction state, and writing the complete code for the lighting system using reed-contact sensors to enable responsive, touch-based interactions.",
      de: "Ich habe die technische und Design-Implementierung für dieses Projekt geleitet, umfassende Recherche zu Fossilien und interaktivem Ausstellungsdesign durchgeführt, die Box-Struktur physisch gebaut, detaillierte Figma-Animations-Flows für jeden Interaktionszustand erstellt und den kompletten Code für das Beleuchtungssystem geschrieben, wobei Reed-Kontakt-Sensoren verwendet wurden, um responsive, berührungsbasierte Interaktionen zu ermöglichen."
    },
    approach: [
      {
        en: "Researched different types of fossilized animals and selected four distinct examples to showcase",
        de: "Recherche verschiedener Arten fossiler Tiere und Auswahl von vier markanten Beispielen zur Präsentation"
      },
      {
        en: "Designed the physical box structure with compartments for each fossil specimen",
        de: "Design der physischen Box-Struktur mit Fächern für jedes Fossil-Exemplar"
      },
      {
        en: "Created detailed Figma prototypes showing animation flows for light interactions",
        de: "Erstellung detaillierter Figma-Prototypen mit Animations-Flows für Licht-Interaktionen"
      },
      {
        en: "Implemented reed-contact sensor technology to detect user engagement",
        de: "Implementierung von Reed-Kontakt-Sensor-Technologie zur Erkennung von Nutzerinteraktion"
      },
      {
        en: "Programmed custom lighting sequences that respond to visitor interactions",
        de: "Programmierung individueller Beleuchtungssequenzen, die auf Besucherinteraktionen reagieren"
      },
      {
        en: "Tested and refined the interaction patterns to ensure reliable, engaging responses",
        de: "Testen und Verfeinern der Interaktionsmuster für zuverlässige, ansprechende Reaktionen"
      }
    ],
    outcomes: [
      {
        en: "Successfully built a fully functional interactive installation with working sensors",
        de: "Erfolgreicher Bau einer voll funktionsfähigen interaktiven Installation mit funktionierenden Sensoren"
      },
      {
        en: "Created engaging lighting animations synchronized with user interaction",
        de: "Erstellung ansprechender Beleuchtungsanimationen, synchronisiert mit Nutzerinteraktion"
      },
      {
        en: "Developed custom code for reed-contact based interaction system",
        de: "Entwicklung von individuellem Code für Reed-Kontakt-basiertes Interaktionssystem"
      },
      {
        en: "Designed and prototyped complete interaction flows in Figma",
        de: "Design und Prototyping kompletter Interaktions-Flows in Figma"
      },
      {
        en: "Demonstrated effective use of physical computing in educational exhibits",
        de: "Demonstration effektiver Nutzung von Physical Computing in Bildungsausstellungen"
      }
    ],
    image: fossilBoxImage,
    images: [fossilBoxImage],
    tags: [
      { en: "Physical Prototype", de: "Physischer Prototyp" },
      { en: "Interactive Design", de: "Interaktives Design" },
      { en: "Exhibition Design", de: "Ausstellungsdesign" }
    ],
    figmaUrl: "#",
    projectCategory: "Physical Prototype",
  },
];