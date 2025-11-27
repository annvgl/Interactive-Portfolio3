import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  X,
  ExternalLink,
  Figma,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Project } from "../data/projectsData";

const HaltungsTracker = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764182965/haltungstracker_cndrrx.png";


interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  project: Project;
}

export function ProjectDetail({
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
  project,
}: ProjectDetailProps) {
  const { t, language } = useLanguage();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && hasNext && onNext) {
        onNext();
      } else if (
        e.key === "ArrowLeft" &&
        hasPrevious &&
        onPrevious
      ) {
        onPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, [
    isOpen,
    onClose,
    onNext,
    onPrevious,
    hasNext,
    hasPrevious,
  ]);

  // Helper to get text in current language
  const getText = (text: { en: string; de: string } | string) => {
    if (typeof text === 'string') return text;
    return text[language];
  };

  // Helper to get array text in current language
  const getArrayText = (arr: Array<{ en: string; de: string }> | string[]) => {
    if (!arr || arr.length === 0) return [];
    if (typeof arr[0] === 'string') return arr as string[];
    return (arr as Array<{ en: string; de: string }>).map(item => item[language]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
        >            {/* Backdrop with blur */}
          <motion.div
            initial={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(12px)",
            }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#2C2C2C]/40"
            onClick={onClose}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative min-h-screen bg-[#F5F3F0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Minimal */}
            <button
              onClick={onClose}
              className="fixed top-6 left-6 z-50 w-10 h- rounded-full bg-white shadow-sm flex items-center justify-center text-[#ACA399] hover:bg-[#7A6F5D] hover:text-white transition-all duration-300"
              aria-label={t("close")}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows - Subtle */}
            {hasPrevious && onPrevious && (
              <button
                onClick={onPrevious}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ACA399] hover:bg-[#7A6F5D] hover:text-white transition-all duration-300"
                aria-label={t("project_prev")}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            {hasNext && onNext && (
              <button
                onClick={onNext}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#ACA399] hover:bg-[#7A6F5D] hover:text-white transition-all duration-300"
                aria-label={t("project_next")}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}

            {/* Hero Image - Integrated and Minimal */}
            <div className="relative">
              <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 pb-12">
                <div className="p-6 md:p-10">
                  <ImageWithFallback
                    src={project.images[0]}
                    alt={getText(project.title)}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Content - Story Flow */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 pb-20">

              {/* Header - Integrated with Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="-mt-8 relative z-10 mb-8"
              >
                {project.category && (
                  <p className="text-[#7A6F5D] uppercase tracking-wider text-[15px] mb-3">
                    {getText(project.category)}
                  </p>
                )}

                <h1 className="text-[26px] md:text-[32px] text-[#2C2C2C] mb-4 leading-tight">
                  {getText(project.title)}
                </h1>

                <div className="flex flex-wrap gap-2 mb-5">
                  {getArrayText(project.tags).map((tag, i) => (
                    <Badge
                      key={i}
                      className="bg-[#7A6F5D] text-white border-2 border-[#7A6F5D]/50 hover:bg-[#ACA399] rounded-full transition-colors text-[15px] px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.semester && (
                  <p className="text-[#6B6B6B] text-[17px] mb-4">
                    <span className="text-[#2C2C2C]">{t("project_semester")}:</span> {project.semester}
                  </p>
                )}

                {project.fullDescription && (
                  <p className="text-[18px] text-[#6B6B6B] leading-relaxed mb-6">
                    {getText(project.fullDescription)}
                  </p>
                )}

                {(project.figmaUrl || project.liveUrl) && (
                  <div className="flex gap-3 flex-wrap">
                    {project.figmaUrl && project.figmaUrl !== "#" && (
                      <Button
                        asChild
                        className="bg-[#7A6F5D] hover:bg-[#ACA399] text-white transition-colors text-[15px] h-auto px-5 py-2.5"
                      >
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Figma className="w-4 h-4 mr-2" />
                          {t("project_view_prototype")}
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="outline"
                        className="border-[#E8E4DF] text-[#7A6F5D] hover:bg-[#E8E4DF] transition-colors text-[15px] h-auto px-5 py-2.5"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {t("project_view_live")}
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </motion.div>

              {/* The Challenge - Image Integrated */}
              {project.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    <div className="lg:col-span-3 p-8 md:p-8">
                      <h2 className="text-[24px] text-[#2C2C2C] mb-4">
                        {t("project_challenge")}
                      </h2>
                      {Array.isArray(project.problem) ? (
                        <ul className="space-y-3">
                          {getArrayText(project.problem).map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#7A6F5D] mr-3 mt-2"></span>
                              <span className="text-[17px] text-[#6B6B6B] leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-[17px] text-[#6B6B6B] leading-relaxed">
                          {getText(project.problem)}
                        </p>
                      )}
                    </div>

                    {/* Supporting Image - Harmonious */}
                    {project.images.length > 1 && (
                      <div className="lg:col-span-2 p-4 flex items-center justify-center">
                        <ImageWithFallback
                          src={project.title.en === "Postura – Your Posture, Your Strength" ? HaltungsTracker : project.images[1]}
                          alt="Challenge visualization"
                          className="w-[400px] h-auto object-contain rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {/* The Solution - Reversed Layout for Visual Flow */}
              {project.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
                    {/* Supporting Image - Dark Background for Contrast */}
                    {project.images.length > 2 && (
                      <div className="lg:col-span-2 p-6 flex items-center justify-center order-2 lg:order-1">
                        <ImageWithFallback
                          src={project.images[2]}
                          alt="Solution visualization"
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    )}

                    <div className="lg:col-span-3 p-6 md:p-8 order-1 lg:order-2">
                      <h2 className="text-[24px] text-[#232323] mb-4">
                        {t("project_solution")}
                      </h2>
                      <p className="text-[17px] text-[#727272] leading-relaxed">
                        {getText(project.solution)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* My Role - Flowing Text Block */}
              {project.role && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="p-6 md:p-8 mb-8"
                >
                  <h2 className="text-[24px] text-[#232323] mb-4">
                    {t("project_role")}
                  </h2>
                  <p className="text-[17px] text-[#727272] leading-relaxed">
                    {getText(project.role)}
                  </p>
                </motion.div>
              )}

              {/* Approach & Outcomes - Side by Side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Approach */}
                {project.approach && project.approach.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="p-6 md:p-8"
                  >
                    <h2 className="text-[24px] text-[#232323] mb-4">
                      {t("project_approach")}
                    </h2>
                    <ul className="space-y-3">
                      {getArrayText(project.approach).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2084C4] mr-3 mt-2"></span>
                          <span className="text-[17px] text-[#727272] leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Outcomes */}
                {project.outcomes && project.outcomes.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="p-6 md:p-8"
                  >
                    {project.title.en === "Postura – Your Posture, Your Strength" ? (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        <div className="lg:col-span-6">
                          <h2 className="text-[24px] text-[#232323] mb-2">
                            {t("project_outcomes")}
                          </h2>
                          <ul className="space-y-3">
                            {getArrayText(project.outcomes).map((outcome, index) => (
                              <li key={index} className="flex items-start">
                                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2084C4] mr-3 mt-2"></span>
                                <span className="text-[17px] text-[#727272] leading-relaxed">
                                  {outcome}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="lg:col-span-2 p-4 flex items-center justify-center">
                          <ImageWithFallback
                            src={project.images[1]}
                            alt="HaltungsTracker visualization"
                            className="w-full h-auto object-contain rounded-xl"
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="text-[24px] text-[#232323] mb-4">
                          {t("project_outcomes")}
                        </h2>
                        <ul className="space-y-3">
                          {getArrayText(project.outcomes).map((outcome, index) => (
                            <li key={index} className="flex items-start">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#2084C4] mr-3 mt-2"></span>
                              <span className="text-[17px] text-[#727272] leading-relaxed">
                                {outcome}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Design Mockups - Horizontal Flow */}
              {project.mockups && project.mockups.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mb-8"
                >
                  <h2 className="text-[24px] text-[#232323] mb-5 px-1">
                    {t("project_mockups")}
                  </h2>
                  <div className="overflow-x-auto pb-4 -mx-6 px-6">
                    <div className="flex gap-5 min-w-max">
                      {project.mockups.map((mockup, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 w-[450px] p-5"
                        >
                          <ImageWithFallback
                            src={mockup}
                            alt={`${getText(project.title)} mockup ${index + 1}`}
                            className="w-full h-auto object-contain rounded-xl"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-[15px] text-[#727272] text-center mt-3">
                    {t("project_scroll_hint")}
                  </p>
                </motion.div>
              )}

              {/* UI/UX Design Aspects - Subtle Background */}
              {project.uiUxAspects && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mb-8"
                >
                  <div className="p-6 md:p-8 mb-6">
                    <h2 className="text-[24px] text-[#232323] mb-4">
                      {t("project_uiux")}
                    </h2>
                    <p className="text-[17px] text-[#727272] leading-relaxed">
                      {getText(project.uiUxAspects.description)}
                    </p>
                  </div>

                  {/* UI/UX Images for Postura Project */}
                  {project.title.en === "Postura – Your Posture, Your Strength" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-8">
                      <div className="p-4 flex items-center justify-center">
                        <ImageWithFallback
                          src="https://res.cloudinary.com/dytgvfkgo/image/upload/v1764187553/Mehransicht_cpxmwf.png"
                          alt="Postura Mehransicht"
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                      <div className="p-4 flex items-center justify-center">
                        <ImageWithFallback
                          src="https://res.cloudinary.com/dytgvfkgo/image/upload/v1764180514/phone_mockup_5_gsrlmr.jpg"
                          alt="Postura Phone Mockup"
                          className="w-full h-auto object-contain rounded-xl"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Final Results - Highlighted but Minimal */}
              {project.finalResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="p-6 md:p-8 border border-[#E1EBF3]/40 mb-12"
                >
                  <h2 className="text-[24px] text-[#232323] mb-4">
                    {t("project_results")}
                  </h2>
                  <p className="text-[17px] text-[#727272] leading-relaxed">
                    {getText(project.finalResults)}
                  </p>
                </motion.div>
              )}

              {/* Navigation Footer - Minimal */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex justify-between items-center pt-6 border-t border-[#E1EBF3]"
              >
                {hasPrevious && onPrevious ? (
                  <button
                    onClick={onPrevious}
                    className="flex items-center gap-2 text-[#2084C4] hover:text-[#7BC1EB] transition-colors text-[15px]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>{t("project_prev")}</span>
                  </button>
                ) : (
                  <div />
                )}

                {hasNext && onNext ? (
                  <button
                    onClick={onNext}
                    className="flex items-center gap-2 text-[#2084C4] hover:text-[#7BC1EB] transition-colors text-[15px]"
                  >
                    <span>{t("project_next")}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <div />
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
