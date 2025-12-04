// Cloudinary hosted images - ORIGINAL URLs
const picture1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764230626/HaltungundApp_p3qhoh.png";
const posturaHeroImage = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764250743/Bildschirmfoto_2025-11-27_um_14.38.51_hveovq.png";
const postureImage4 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764182965/haltungstracker_cndrrx.png";
const posturaAusstellung = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764182691/AusstellungPostura_yqhltw.jpg";
const posturaFrontal3 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764186705/phone_mockup_2_svfbr7.jpg";
const posturaAllScreens = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764180514/phone_mockup_5_gsrlmr.jpg";
const posturaMehransicht = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764187553/Mehransicht_cpxmwf.png";
const myDealzImage1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764183661/MockUpFinal_tgs18b.png";
const myDealzImage2 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764183909/MockUp-Onboarding_p9fvkw.jpg";
const myDealzMockup1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764329582/LandigpageVorherNacher_kbb8si.png";
const myDealzMockup2 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764184367/Free_Download_New_Minimalistic_Phone_PSD_Mockup_02_rku5mb.jpg";
const myDealzWireframe = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764325686/Bildschirmfoto_2025-11-28_um_11.27.59_cpyx0u.png";
const myDealzValueProp = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764329231/GartenDetails_Kopie_mrnfkw.png";
const planMeImage1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764184695/2.PlanMe_liz60l.jpg";
const planMeImage2 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764184835/1PlanMe_iqlfpg.jpg";
const planMeImage3 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764185059/3.PlanMe_kvlfen.png";
const fossilBoxImage = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764185325/2425_documentation_Fossil_ceren_henriette_ann_vtnjrp.jpg";
const fossilBoxChallenge = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764530223/WhatsApp_Image_2024-12-02_at_22.06.38_qxfxme.jpg";
const fossilBoxRole1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764336646/IMG_8648_wgivve.jpg";
const fossilBoxRole2 = "https://res.cloudinary.com/dytgvfkgo/image/upload/a_90/v1764336661/DSC00004_uujaw4.jpg";
const fossilBoxApproach = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764336684/DSC00036_jghpgt.jpg";
const fossilBoxSolution1 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764336705/DSC00015_vwnvgb.jpg";
const fossilBoxSolution2 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764336748/IMG_3458_3_tk7vem.png";
const fossilBoxSolution3 = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764336761/DSC00081_hizoav.jpg";
const fossilBoxOutcomes = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764862851/Bildschirmfoto_2025-12-04_um_16.37.20_ylkzpl.png";
const profileImageBildFreigestellt = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764185869/BildFreigestellt_gutrf1.png";
const aboutMeImage = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764186170/AboutMe_uussxj.png";

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
  // New structure for enhanced project layout
  researchInsights?: {
    methods?: MultilingualText[];
    findings?: MultilingualText[];
    personas?: MultilingualText;
  };
  designProcess?: {
    description: MultilingualText;
    wireframes?: string[];
    iterations?: MultilingualText[];
  };
  physicalPrototype?: {
    description: MultilingualText;
    features?: MultilingualText[];
    testing?: MultilingualText;
  };
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
    designProcess: {
      description: {
        en: "Clean, accessible UI design with interactive elements including live tracking, feedback screens, personalized dashboard, exercise reminders, and progress visualizations.",
        de: "Sauberes, zugängliches UI-Design mit interaktiven Elementen wie Live-Tracking, Feedback-Screens, personalisiertem Dashboard, Übungserinnerungen und Fortschrittsvisualisierungen."
      }
    },
    physicalPrototype: {
      description: {
        en: "The Postura posture tracker is a wearable sensor system in the form of a shoulder-back harness that enables real-time posture monitoring in the workplace. Integrated sensors (stretch and tilt sensors) continuously capture back angle and body tilt, while three strategically placed vibration motors provide tactile feedback for poor posture. Data is transmitted via Bluetooth to the app, where it is analyzed and presented as visual correction cues. Through the dual-channel feedback system immediate vibration on the body combined with app notifications, the prototype promotes dynamic sitting and sustainable posture awareness without intrusive interruptions.",
        de: "Der Postura Haltungstracker ist ein tragbares Sensorsystem in Form eines Schulter-Rücken-Gurts, das Echtzeit-Haltungsmonitoring am Arbeitsplatz ermöglicht. Integrierte Sensoren (Stretch- und Neigungssensor) erfassen kontinuierlich Rückenwinkel und Körperneigung, während drei strategisch platzierte Vibrationsmotoren taktiles Feedback bei Fehlhaltungen liefern. Die Daten werden via Bluetooth an die App übertragen, wo sie analysiert und als visuelle Korrekturhinweise aufbereitet werden. Durch das zweikanalige Feedback-System, sofortige Vibration am Körper kombiniert mit App-Benachrichtigungen, fördert der Prototyp dynamisches Sitzen und nachhaltiges Haltungsbewusstsein ohne intrusive Unterbrechungen."
      }
    },
    images: [picture1, posturaAusstellung, posturaFrontal3, posturaAllScreens, posturaMehransicht],
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
      en: "MyDealz is a popular deal-sharing platform where users discover and share the best deals, discounts, and bargains. However, the existing app was not designed with user-centered principles, resulting in a cluttered interface and poor user experience. Our goal was to redesign the app to make it more intuitive, accessible, and enjoyable while maintaining its core functionality.",
      de: "MyDealz ist eine beliebte Deal-Sharing-Plattform, auf der Nutzer die besten Angebote, Rabatte und Schnäppchen entdecken und teilen. Die bestehende App wurde jedoch nicht mit nutzerzentrierten Prinzipien entwickelt, was zu einer überladenen Oberfläche und schlechter Benutzererfahrung führte. Unser Ziel war es, die App neu zu gestalten, um sie intuitiver, zugänglicher und angenehmer zu machen, während ihre Kernfunktionalität erhalten bleibt."
    },
    semester: "3rd Semester",
    role: {
      en: "As part of the design team, I contributed to user research, created personas and user flows, designed the information architecture, and developed the high-fidelity prototypes. I also conducted usability testing sessions to validate our design decisions.",
      de: "Als Teil des Design-Teams habe ich zur Nutzerforschung beigetragen, Personas und User Flows erstellt, die Informationsarchitektur designt und High-Fidelity-Prototypen entwickelt. Ich habe auch Usability-Test-Sessions durchgeführt, um unsere Design-Entscheidungen zu validieren."
    },
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
    solution: {
      en: "We redesigned MyDealz with a focus on clarity, simplicity, and user-centered design. The new interface features a clean, minimal layout with improved navigation, intuitive filter options, and a clear visual hierarchy. We refined the value proposition and restructured the information architecture to help users find deals faster and more efficiently.",
      de: "Wir haben MyDealz mit Fokus auf Klarheit, Einfachheit und nutzerzentriertes Design neu gestaltet. Die neue Oberfläche bietet ein sauberes, minimales Layout mit verbesserter Navigation, intuitiven Filteroptionen und klarer visueller Hierarchie. Wir haben das Wertversprechen verfeinert und die Informationsarchitektur umstrukturiert, um Nutzern zu helfen, Deals schneller und effizienter zu finden."
    },
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
        en: "Effective: Quick and targeted search with new filter options",
        de: "Effektiv: Schnelle und gezielte Suche mit neuen Filter Optionen"
      },
      {
        en: "Design adapted to user needs – finding cheap deals quickly",
        de: "Design wurde an die \"Needs\" angepasst - schnell günstige Deals finden"
      },
      {
        en: "Trustworthy: Less information per deal display",
        de: "Vertrauenswürdig: Weniger Informationen pro Deal-Anzeige"
      },
      {
        en: "No more expired deals shown",
        de: "Keine abgelaufenen Deals mehr zeigen"
      },
      {
        en: "Simple colors in a more modern layout",
        de: "Schlichte Farben in modernerem Layout"
      },
      {
        en: "Personal: Onboarding introduced – app gets to know users better",
        de: "Persönlich: On-Boarding eingeführt: App lernt Nutzer besser kennen"
      },
      {
        en: "\"My Deals\" specifically tailored to user interests",
        de: "\"Meine Deals\" speziell für die Interessen der Nutzer"
      },
      {
        en: "More personal wording throughout the app",
        de: "Persönlicheres Wording"
      }
    ],
    finalResults: {
      en: "The redesigned MyDealz app provides users with a streamlined, intuitive experience that makes finding and sharing deals effortless. Through careful research, user-centered design, and iterative testing, we created an interface that balances simplicity with functionality, resulting in improved user satisfaction and engagement.",
      de: "Die neu gestaltete MyDealz-App bietet Nutzern eine optimierte, intuitive Erfahrung, die das Finden und Teilen von Deals mühelos macht. Durch sorgfältige Recherche, nutzerzentriertes Design und iterative Tests haben wir eine Oberfläche geschaffen, die Einfachheit mit Funktionalität ausbalanciert und zu verbesserter Nutzerzufriedenheit und Engagement führt."
    },
    designProcess: {
      description: {
        en: "Following the Double Diamond design process, we conducted thorough user research, created personas, mapped user journeys, and developed wireframes and high-fidelity prototypes. Our iterative approach allowed us to test and refine the interface throughout the design process.",
        de: "Dem Double-Diamond-Designprozess folgend haben wir gründliche Nutzerforschung durchgeführt, Personas erstellt, User Journeys gemappt und Wireframes sowie High-Fidelity-Prototypen entwickelt. Unser iterativer Ansatz ermöglichte es uns, die Oberfläche während des gesamten Designprozesses zu testen und zu verfeinern."
      }
    },
    mockups: [myDealzMockup1, myDealzMockup2],
    // image: myDealzImage1,
    images: [myDealzImage1, myDealzImage2, myDealzMockup1, myDealzMockup2, myDealzValueProp],
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
        en: "Designed low-fidelity wireframes to test core functionality",
        de: "Design von Low-Fidelity-Wireframes zum Testen der Kernfunktionalität"
      },
      {
        en: "Created high-fidelity prototypes matching WhatsApp's visual design system",
        de: "Erstellung von High-Fidelity-Prototypen passend zu WhatsApps visuellem Design-System"
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
        en: "Successfully validated the concept - similar functionality was later added to WhatsApp",
        de: "Erfolgreiche Validierung des Konzepts – ähnliche Funktionalität wurde später zu WhatsApp hinzugefügt"
      }
    ],
    // image: planMeImage2,
    images: [planMeImage2, planMeImage1, planMeImage3],
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
      en: "An interactive physical installation showcasing four distinct types of fossilized animals using light-based interaction, reed-contact technology, and QR code-linked interactive videos demonstrating the fossilization process.",
      de: "Eine interaktive physische Installation, die vier verschiedene Arten fossiler Tiere mit lichtbasierter Interaktion, Reed-Kontakt-Technologie und QR-Code-verknüpften interaktiven Videos präsentiert, die den Versteinerungsprozess demonstrieren."
    },
    fullDescription: {
      en: "Fossil Box is an interactive exhibition piece developed for the IKS (Interactive Communication Systems) course. The installation presents four different types of fossilized animals in an engaging, hands-on format. Using custom-built electronics and reed-contact sensors, visitors can interact with the exhibit to reveal information about each fossil through dynamic lighting and animations. When a visitor pulls out a card equipped with reed-contacts, the light at the corresponding fossil is activated, creating an intuitive connection between the physical interaction and the visual feedback. Additionally, each card features a QR code that visitors can scan to view an interactive video showing the complete fossilization process for that specific animal, making the learning experience both tangible and educational.",
      de: "Fossil Box ist ein interaktives Ausstellungsstück, entwickelt für den IKS-Kurs (Interactive Communication Systems). Die Installation präsentiert vier verschiedene Arten fossiler Tiere in einem ansprechenden, hands-on Format. Mit maßgefertigter Elektronik und Reed-Kontakt-Sensoren können Besucher mit dem Exponat interagieren, um Informationen über jedes Fossil durch dynamische Beleuchtung und Animationen zu enthüllen. Sobald ein Besucher eine mit Reed-Kontakten ausgestattete Karte herauszieht, wird das Licht am entsprechenden Fossil aktiviert und schafft eine intuitive Verbindung zwischen der physischen Interaktion und dem visuellen Feedback. Zusätzlich verfügt jede Karte über einen QR-Code, den Besucher scannen können, um ein interaktives Video zu sehen, das den vollständigen Versteinerungsprozess für dieses spezifische Tier zeigt und die Lernerfahrung sowohl greifbar als auch lehrreich macht."
    },
    semester: "2nd Semester",
    problem: {
      en: "Traditional museum exhibits about fossils are often static and fail to engage visitors in meaningful ways. The challenge was to create an interactive experience that would make learning about fossilized animals more engaging and memorable while demonstrating the potential of interactive communication systems in educational contexts.",
      de: "Traditionelle Museumsausstellungen über Fossilien sind oft statisch und schaffen es nicht, Besucher auf bedeutungsvolle Weise einzubinden. Die Herausforderung bestand darin, eine interaktive Erfahrung zu schaffen, die das Lernen über fossile Tiere ansprechender und einprägsamer macht und gleichzeitig das Potenzial interaktiver Kommunikationssysteme in Bildungskontexten demonstriert."
    },
    solution: {
      en: "I designed and built an interactive box installation featuring four different fossilized animals. The system uses reed-contact sensors embedded in cards that, when pulled out, trigger custom-programmed lighting effects at the corresponding fossil. Each card also includes a QR code that visitors can scan with their smartphones to access an interactive video demonstrating how that particular animal became fossilized over millions of years. This combination creates a tactile, visual, and digital learning experience that bridges physical and digital interaction.",
      de: "Ich habe eine interaktive Box-Installation mit vier verschiedenen fossilen Tieren designt und gebaut. Das System nutzt Reed-Kontakt-Sensoren, die in Karten eingebettet sind und beim Herausziehen individuell programmierte Lichteffekte am entsprechenden Fossil auslösen. Jede Karte enthält auch einen QR-Code, den Besucher mit ihren Smartphones scannen können, um ein interaktives Video zu sehen, das demonstriert, wie dieses bestimmte Tier über Millionen von Jahren versteinert wurde. Diese Kombination schafft eine taktile, visuelle und digitale Lernerfahrung, die physische und digitale Interaktion verbindet."
    },
    role: {
      en: "I led the technical and design implementation for this project, conducting extensive research on fossils and interactive exhibit design, physically building the box structure, creating detailed interactive videos for each fossilization process, designing the QR code system that links to these educational videos, and writing the complete code for the lighting system using reed-contact sensors to enable responsive, touch-based interactions.",
      de: "Ich habe die technische und Design-Implementierung für dieses Projekt geleitet, umfassende Recherche zu Fossilien und interaktivem Ausstellungsdesign durchgeführt, die Box-Struktur physisch gebaut, detaillierte interaktive Videos für jeden Versteinerungsprozess erstellt, das QR-Code-System gestaltet, das zu diesen Lernvideos führt, und den kompletten Code für das Beleuchtungssystem geschrieben, wobei Reed-Kontakt-Sensoren verwendet wurden, um responsive, berührungsbasierte Interaktionen zu ermöglichen."
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
        en: "Implemented reed-contact sensor technology in cards that activate lights when removed",
        de: "Implementierung von Reed-Kontakt-Sensor-Technologie in Karten, die beim Herausziehen Lichter aktivieren"
      },
      {
        en: "Created interactive videos demonstrating the fossilization process for each animal, accessible via QR codes",
        de: "Erstellung interaktiver Videos, die den Versteinerungsprozess für jedes Tier demonstrieren, zugänglich über QR-Codes"
      },
      {
        en: "Programmed custom lighting sequences that respond to card removal interactions",
        de: "Programmierung individueller Beleuchtungssequenzen, die auf das Herausziehen der Karten reagieren"
      }
    ],
    outcomes: [
      {
        en: "Successfully built a fully functional interactive installation with working reed-contact card system",
        de: "Erfolgreicher Bau einer voll funktionsfähigen interaktiven Installation mit funktionierendem Reed-Kontakt-Kartensystem"
      },
      {
        en: "Created engaging lighting animations synchronized with card-based user interaction",
        de: "Erstellung ansprechender Beleuchtungsanimationen, synchronisiert mit kartenbasierter Nutzerinteraktion"
      },
      {
        en: "Developed QR code system linking to interactive videos showing the fossilization process for each specimen",
        de: "Entwicklung eines QR-Code-Systems, das zu interaktiven Videos führt, die den Versteinerungsprozess für jedes Exemplar zeigen"
      },
      {
        en: "Developed custom code for reed-contact based interaction system triggered by card removal",
        de: "Entwicklung von individuellem Code für Reed-Kontakt-basiertes Interaktionssystem, das durch Kartenentfernung ausgelöst wird"
      },
      {
        en: "Demonstrated effective use of physical computing and digital media in educational exhibits",
        de: "Demonstration effektiver Nutzung von Physical Computing und digitalen Medien in Bildungsausstellungen"
      }
    ],
    // image: fossilBoxImage,
    images: [fossilBoxImage, fossilBoxChallenge, fossilBoxRole1, fossilBoxRole2, fossilBoxApproach, fossilBoxSolution1, fossilBoxSolution2, fossilBoxSolution3, fossilBoxOutcomes],
    tags: [
      { en: "Physical Prototype", de: "Physischer Prototyp" },
      { en: "Interactive Design", de: "Interaktives Design" },
      { en: "Exhibition Design", de: "Ausstellungsdesign" }
    ],
    figmaUrl: "#",
    projectCategory: "Physical Prototype",
  },
];