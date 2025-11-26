import { useLanguage } from "../contexts/LanguageContext";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (lang: "en" | "de") => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 hover:bg-white border border-[#E8E4DF] hover:border-[#7A6F5D] transition-all duration-300 shadow-sm hover:shadow-md"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 text-[#ACA399]" />
        <span className="text-[15px] text-[#6B6B6B] uppercase tracking-wide">
          {language}
        </span>
        <ChevronDown className="w-3 h-3 text-[#ACA399]" />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-32 bg-white rounded-2xl shadow-lg border border-[#E8E4DF] overflow-hidden"
          >
            <button
              onClick={() => handleLanguageSelect("en")}
              className={`w-full px-4 py-3 text-left text-[15px] transition-colors ${language === "en"
                  ? "bg-[#E8E4DF] text-[#7A6F5D]"
                  : "text-[#6B6B6B] hover:bg-[#F5F3F0]"
                }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect("de")}
              className={`w-full px-4 py-3 text-left text-[15px] transition-colors ${language === "de"
                  ? "bg-[#E8E4DF] text-[#7A6F5D]"
                  : "text-[#6B6B6B] hover:bg-[#F5F3F0]"
                }`}
            >
              Deutsch
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}