import { motion } from "motion/react";
import { Linkedin, Mail } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";
import { Container } from "./Container";
import { useLanguage } from "../contexts/LanguageContext";

const profileImage = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764183242/IMG_6355_qvtr1a.jpg";

export function Hero() {
  const { t } = useLanguage();

  const scrollToCV = () => {
    document
      .getElementById("cv")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-gradient-to-br from-[#E8E4DF]/30 via-[#F5F3F0] to-[#ACA399]/15">
      {/* Subtle Animated Blobs - Neutral Tones */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 -left-48 w-96 h-96 rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(122, 111, 93, 0.12), rgba(172, 163, 153, 0.15), rgba(232, 228, 223, 0.2))",
          }}
          animate={{
            x: [0, 80, -40, 0],
            y: [0, 120, 60, 0],
            scale: [1, 1.2, 1.05, 1],
            rotate: [0, 60, 120, 180],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 -right-48 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(225deg, rgba(172, 163, 153, 0.15), rgba(122, 111, 93, 0.12), rgba(232, 228, 223, 0.18))",
          }}
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 80, -40, 0],
            scale: [1, 1.3, 1.15, 1],
            rotate: [0, -60, -120, -180],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content with Profile Image */}
      <div className="relative z-20 w-full h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center p-6 lg:p-12"
          >
            <div className="space-y-10 max-w-xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl text-[#2C2C2C] tracking-tight leading-[1.1]">
                <TypingAnimation
                  text={t("hero_greeting")}
                  speed={100}
                  showCursor={true}
                />
              </h1>

              <p className="text-[#7A6F5D] uppercase tracking-[0.3em] text-sm">
                {t("hero_job_title")}
              </p>

              <div className="w-20 h-1 bg-gradient-to-r from-[#7A6F5D] to-[#ACA399]" />

              <p className="text-xl md:text-2xl text-[#6B6B6B] leading-relaxed">
                {t("hero_subtitle")}
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.linkedin.com/in/ann-vogel-83361639a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#E8E4DF] text-[#6B6B6B] hover:border-[#7A6F5D] hover:text-[#7A6F5D] hover:bg-[#E8E4DF]/50 transition-all duration-300 rounded-full"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:ann.vogel@hfg-gmuend.de"
                  className="w-12 h-12 flex items-center justify-center border-2 border-[#E8E4DF] text-[#6B6B6B] hover:border-[#7A6F5D] hover:text-[#7A6F5D] hover:bg-[#E8E4DF]/50 transition-all duration-300 rounded-full"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-full w-full flex items-end"
          >
            <img
              src={profileImage}
              alt="Ann Vogel - Interaction Designer"
              className="w-full h-full object-cover object-bottom"
            />
            {/* Schwebende persönliche Wörter */}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#7A6F5D] to-transparent" />
          <span className="text-xs uppercase tracking-wider text-[#6B6B6B]">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}