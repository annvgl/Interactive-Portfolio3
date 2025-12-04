import { motion, AnimatePresence } from "motion/react";
import { Figma, Code2, Palette, Box, Lightbulb, Users, Cpu, UsersRound, Activity, Award, Target, TrendingUp } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";
import { Container, Section, Grid } from "./Container";
import { useState } from "react";
import { Progress } from "./ui/progress";
import { useLanguage } from "../contexts/LanguageContext";

const skills = [
  {
    icon: Figma,
    title: { en: "Figma", de: "Figma" },
    description: { en: "Design Systems & Prototyping", de: "Design-Systeme & Prototyping" },
    fullDescription: { en: "Expert in creating interactive prototypes, design systems, and component libraries. Specialized in collaborative design workflows and handoff processes.", de: "Experte im Erstellen interaktiver Prototypen, Design-Systeme und Komponentenbibliotheken. Spezialisiert auf kollaborative Design-Workflows und Übergabeprozesse." },
    proficiency: 95,
    color: "from-[#7A6F5D] to-[#ACA399]",
    iconColor: "text-[#7A6F5D]",
    bgColor: "bg-[#E8E4DF]/30",
    hoverBg: "hover:bg-[#E8E4DF]/50",
    category: { en: "Design Tools", de: "Design-Tools" }
  },
  {
    icon: Palette,
    title: { en: "UI/UX Design", de: "UI/UX-Design" },
    description: { en: "User Research & Visual Design", de: "Nutzerforschung & Visuelles Design" },
    fullDescription: { en: "Comprehensive experience in user research, wireframing, visual design, and interaction design. Focus on creating intuitive and accessible interfaces.", de: "Umfassende Erfahrung in Nutzerforschung, Wireframing, visuellem Design und Interaction Design. Fokus auf intuitive und zugängliche Interfaces." },
    proficiency: 92,
    color: "from-[#ACA399] to-[#7A6F5D]",
    iconColor: "text-[#ACA399]",
    bgColor: "bg-[#ACA399]/10",
    hoverBg: "hover:bg-[#ACA399]/25",
    category: { en: "Design", de: "Design" }
  },
  {
    icon: Code2,
    title: { en: "Frontend Development", de: "Frontend-Entwicklung" },
    description: { en: "HTML, CSS, JavaScript", de: "HTML, CSS, JavaScript" },
    fullDescription: { en: "Proficient in modern web technologies including HTML5, CSS3, JavaScript ES6+, and React. Experience with responsive design and web animations.", de: "Versiert in modernen Web-Technologien einschließlich HTML5, CSS3, JavaScript ES6+ und React. Erfahrung mit Responsive Design und Web-Animationen." },
    proficiency: 85,
    color: "from-[#7A6F5D] to-[#E8E4DF]",
    iconColor: "text-[#7A6F5D]",
    bgColor: "bg-[#7A6F5D]/10",
    hoverBg: "hover:bg-[#7A6F5D]/20",
    category: { en: "Development", de: "Entwicklung" }
  },
  {
    icon: Box,
    title: { en: "3D Design", de: "3D-Design" },
    description: { en: "Blender & Visual Prototyping", de: "Blender & Visuelles Prototyping" },
    fullDescription: { en: "Skilled in 3D modeling, rendering, and creating visual prototypes using Blender. Experienced in creating realistic mockups and product visualizations.", de: "Erfahren in 3D-Modellierung, Rendering und Erstellen visueller Prototypen mit Blender. Erfahrung im Erstellen realistischer Mockups und Produktvisualisierungen." },
    proficiency: 80,
    color: "from-[#ACA399] to-[#E8E4DF]",
    iconColor: "text-[#ACA399]",
    bgColor: "bg-[#E8E4DF]/40",
    hoverBg: "hover:bg-[#E8E4DF]/60",
    category: { en: "Design Tools", de: "Design-Tools" }
  },
  {
    icon: Cpu,
    title: { en: "Physical Prototyping", de: "Physisches Prototyping" },
    description: { en: "Arduino & Hardware Integration", de: "Arduino & Hardware-Integration" },
    fullDescription: { en: "Experience with Arduino, hardware integration, and building interactive physical prototypes. Skilled in bridging digital and physical design.", de: "Erfahrung mit Arduino, Hardware-Integration und dem Bau interaktiver physischer Prototypen. Versiert im Verbinden von digitalem und physischem Design." },
    proficiency: 88,
    color: "from-[#7A6F5D] to-[#ACA399]",
    iconColor: "text-[#7A6F5D]",
    bgColor: "bg-[#ACA399]/20",
    hoverBg: "hover:bg-[#ACA399]/40",
    category: { en: "Prototyping", de: "Prototyping" }
  },
  {
    icon: UsersRound,
    title: { en: "Team Collaboration", de: "Teamzusammenarbeit" },
    description: { en: "Cross-functional Coordination", de: "Funktionsübergreifende Koordination" },
    fullDescription: { en: "Strong communication skills and experience working in cross-functional teams. Proficient in agile workflows and collaborative design processes.", de: "Starke Kommunikationsfähigkeiten und Erfahrung in funktionsübergreifenden Teams. Versiert in agilen Workflows und kollaborativen Design-Prozessen." },
    proficiency: 90,
    color: "from-[#ACA399] to-[#7A6F5D]",
    iconColor: "text-[#ACA399]",
    bgColor: "bg-[#7A6F5D]/10",
    hoverBg: "hover:bg-[#7A6F5D]/25",
    category: { en: "Soft Skills", de: "Soft Skills" }
  },
  {
    icon: Lightbulb,
    title: { en: "Problem Solving", de: "Problemlösung" },
    description: { en: "Design Thinking & Innovation", de: "Design Thinking & Innovation" },
    fullDescription: { en: "Expert in user-centered problem solving using design thinking methodologies. Focus on innovative solutions that balance user needs with business goals.", de: "Experte in nutzerzentrierter Problemlösung mit Design-Thinking-Methoden. Fokus auf innovative Lösungen, die Nutzerbedürfnisse mit Geschäftszielen ausbalancieren." },
    proficiency: 93,
    color: "from-[#7A6F5D] to-[#E8E4DF]",
    iconColor: "text-[#7A6F5D]",
    bgColor: "bg-[#E8E4DF]/35",
    hoverBg: "hover:bg-[#E8E4DF]/55",
    category: { en: "Soft Skills", de: "Soft Skills" }
  },
  {
    icon: Users,
    title: { en: "User Experience", de: "User Experience" },
    description: { en: "Journey Mapping & Testing", de: "Journey Mapping & Testing" },
    fullDescription: { en: "Comprehensive UX expertise including user flows, journey mapping, usability testing, and accessibility. Passionate about creating inclusive experiences.", de: "Umfassende UX-Expertise einschließlich User Flows, Journey Mapping, Usability-Testing und Barrierefreiheit. Leidenschaftlich für inklusive Erlebnisse." },
    proficiency: 94,
    color: "from-[#ACA399] to-[#E8E4DF]",
    iconColor: "text-[#ACA399]",
    bgColor: "bg-[#ACA399]/15",
    hoverBg: "hover:bg-[#ACA399]/35",
    category: { en: "Design", de: "Design" }
  }
];

const categoryIcons = {
  "Design Tools": Target,
  "Design": Palette,
  "Development": Code2,
  "Prototyping": Activity,
  "Soft Skills": Award
};

export function Skills() {
  const [expandedSkill, setExpandedSkill] = useState(null as number | null);
  const [activeCategory, setActiveCategory] = useState("All");
  const { language, t } = useLanguage();

  const categories = [t("category_all"), ...Array.from(new Set(skills.map(s => s.category[language])))];

  const filteredSkills = activeCategory === t("category_all")
    ? skills
    : skills.filter(s => s.category[language] === activeCategory);

  return (
    <Section id="skills" className="bg-gradient-to-b from-[#F5F3F0] via-white to-[#F5F3F0]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C2C2C]">
            <TypingAnimation text={t("skills_title")} speed={60} showCursor={false} />
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto">
            {t("skills_subtitle")}
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || TrendingUp;
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${activeCategory === category
                  ? "bg-gradient-to-r from-[#7A6F5D] to-[#ACA399] text-white shadow-lg shadow-[#7A6F5D]/30"
                  : "bg-white text-[#6B6B6B] hover:bg-[#E8E4DF]/50 border-2 border-[#E8E4DF] hover:border-[#7A6F5D]"
                  }`}
              >
                <Icon className="w-4 h-4" />
                {category}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Interactive Skills Grid - Perfect Alignment */}
        <Grid columns={4} gap={6}>
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              const isExpanded = expandedSkill === index;

              return (
                <motion.div
                  key={skill.title.en}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                  className={`${isExpanded ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    onClick={() => setExpandedSkill(isExpanded ? null : index)}
                    className="relative group h-full cursor-pointer"
                  >
                    <div className={`relative ${skill.bgColor} ${skill.hoverBg} border-2 border-[#E8E4DF]/50 hover:border-[#7A6F5D] rounded-3xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7A6F5D]/20 h-full`}>
                      {/* Animated Background Pulse */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[#7A6F5D]/5 via-[#ACA399]/5 to-[#E8E4DF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10"
                        animate={{
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Icon with animated background */}
                      <motion.div
                        className="relative inline-flex p-4 rounded-2xl bg-white/80 backdrop-blur-sm mb-4 shadow-md group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-10 rounded-2xl`} />
                        <Icon className={`w-8 h-8 ${skill.iconColor} relative z-10`} />
                      </motion.div>

                      <h3 className="text-[#2C2C2C] mb-2 group-hover:text-[#7A6F5D] transition-colors duration-300">
                        {skill.title[language]}
                      </h3>
                      <p className="text-[#6B6B6B] text-sm mb-4">
                        {skill.description[language]}
                      </p>

                      {/* Expanded Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t-2 border-[#E8E4DF] pt-4 mt-4"
                          >
                            <p className="text-[#2C2C2C] text-sm leading-relaxed">
                              {skill.fullDescription[language]}
                            </p>
                            <motion.div
                              className="mt-4 flex items-center gap-2 text-xs text-[#6B6B6B]"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <Award className="w-4 h-4" />
                              <span>{t("category_label")}: {skill.category[language]}</span>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Click indicator */}
                      <motion.div
                        className="absolute bottom-4 right-4 text-[#7A6F5D] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        {isExpanded ? t("click_collapse") : t("click_expand")}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </Grid>
      </Container>
    </Section>
  );
}
