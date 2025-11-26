import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetail } from "./ProjectDetail";
import { useState } from "react";
import { TypingAnimation } from "./TypingAnimation";
import { Container, Section, Grid } from "./Container";
import { useLanguage } from "../contexts/LanguageContext";
import { projectsData } from "../data/projectsData";

const categories = [
  "All",
  "Application Design",
  "Physical Prototype",
  "Photography",
  "UI/UX Research",
  "UI/UX Design",
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();

  // Filter projects based on active category
  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return (
      project.projectCategory === activeCategory ||
      project.tags.some(tag => tag[language] === activeCategory || tag.en === activeCategory)
    );
  });

  const selectedProject = selectedProjectIndex !== null ? projectsData[selectedProjectIndex] : null;

  const handleNext = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex < projectsData.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedProjectIndex !== null && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  };

  return (
    <Section id="projects" className="bg-[#F5F3F0]">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-6 text-[#232323]">
            <TypingAnimation text={t("projects_title")} speed={60} showCursor={false} />
          </h2>
          <p className="text-xl text-[#727272] max-w-2xl mx-auto">
            {t("projects_subtitle")}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category
                ? "bg-[#7A6F5D] text-white shadow-lg shadow-[#7A6F5D]/30 border-2 border-[#7A6F5D]"
                : "bg-white text-[#727272] hover:bg-[#F5F3F0] hover:text-[#7A6F5D] border-2 border-[#E1EBF3] hover:border-[#7A6F5D]"
                }`}
            >
              {category === "All" ? t("category_all") : category}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid - Perfect Alignment */}
        <Grid columns={2} gap={8}>
          {filteredProjects.map((project, index) => {
            const actualIndex = projectsData.findIndex(p => p === project);
            return (
              <ProjectCard
                key={actualIndex}
                title={project.title[language]}
                category={project.category[language]}
                description={project.description[language]}
                image={project.images[0]}
                tags={project.tags.map(tag => tag[language])}
                index={index}
                onClick={() => setSelectedProjectIndex(actualIndex)}
              />
            );
          })}
        </Grid>

        {/* Empty state when no projects match filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[#727272]">
              {language === "de" ? "Keine Projekte in dieser Kategorie gefunden." : "No projects found in this category yet."}
            </p>
          </div>
        )}
      </Container>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          isOpen={!!selectedProject}
          onClose={() => setSelectedProjectIndex(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
          hasNext={selectedProjectIndex !== null && selectedProjectIndex < projectsData.length - 1}
          hasPrevious={selectedProjectIndex !== null && selectedProjectIndex > 0}
          project={selectedProject}
        />
      )}
    </Section>
  );
}
