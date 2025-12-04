import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "../contexts/LanguageContext";
import { Link, useNavigate, useLocation } from "react-router-dom";

const profileImage = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764187428/251119_melli-1592_tqoibv.jpg";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav_home"), href: "#", id: "home" },
    { label: t("nav_projects"), href: "#projects", id: "projects" },
    { label: t("nav_skills"), href: "#skills", id: "skills" },
    { label: t("nav_about"), href: "#about", id: "about" }
  ];

  const scrollToSection = (href: string) => {
    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg shadow-[#7A6F5D]/10" : "bg-transparent"
        }`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <motion.div
            className="relative group cursor-pointer -ml-16"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/about">
              <span className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#7A6F5D] via-[#ACA399] to-[#7A6F5D] text-white text-sm tracking-wider shadow-lg group-hover:shadow-xl group-hover:shadow-[#7A6F5D]/50 transition-all duration-300 overflow-hidden">
                <img
                  src={profileImage}
                  alt="Ann Vogel"
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7A6F5D] to-[#ACA399] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              item.id === "about" ? (
                <motion.div
                  key={index}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to="/about"
                    className={`text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors ${location.pathname === "/about" ? 'text-[#7A6F5D]' : ''
                      }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setActiveSection(item.id);
                  }}
                  className={`text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors ${activeSection === item.id ? 'text-[#7A6F5D]' : ''
                    }`}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              )
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button
              className="text-[#2C2C2C]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                item.id === "about" ? (
                  <Link
                    key={index}
                    to="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                      setActiveSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-[#6B6B6B] hover:text-[#7A6F5D] transition-colors py-2"
                  >
                    {item.label}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </Container>
    </motion.nav>
  );
}