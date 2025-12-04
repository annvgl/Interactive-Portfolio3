import { motion } from "motion/react";
import { Heart, Lightbulb, Users, Target } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";
import { Container, Section, Grid } from "./Container";
import { CurriculumVitae } from "./CurriculumVitae";
import { useLanguage } from "../contexts/LanguageContext";
import { useState } from 'react';
import { FloatingWords } from "./FloatingWords";

const AboutMe = "https://res.cloudinary.com/dytgvfkgo/image/upload/v1764186170/AboutMe_uussxj.png";

export function About() {
  const { language, t } = useLanguage();

  const values = [
    {
      icon: Users,
      title: t("about_value1_title"),
      description: t("about_value1_desc")
    },
    {
      icon: Lightbulb,
      title: t("about_value2_title"),
      description: t("about_value2_desc")
    },
    {
      icon: Target,
      title: t("about_value3_title"),
      description: t("about_value3_desc")
    },
    {
      icon: Heart,
      title: t("about_value4_title"),
      description: t("about_value4_desc")
    }
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null as number | null);
  return (
    <Section id="about" className="bg-gradient-to-b from-white via-[#F5F3F0] to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-[#2C2C2C]">
            <TypingAnimation text={t("about_title")} speed={70} showCursor={false} />
          </h2>
        </motion.div>

        {/* Image and Content - Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 mb-20 -mx-4 lg:-mx-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 px-8 lg:px-12 py-12 lg:py-20 flex flex-col justify-center bg-white"
          >
            <div className="space-y-6 text-[#6B6B6B] text-base lg:text-lg leading-relaxed">
              <p>
                {t("about_text1")}
              </p>
              <p>
                {t("about_text2")}
              </p>
              <p>
                {t("about_text3")}
              </p>
            </div>
            <div className="flex items-center gap-6 pt-8">
              <button
                onClick={() => document.getElementById("cv")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 bg-[#7A6F5D] text-white overflow-hidden transition-all hover:px-10 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-[#7A6F5D]/30"
              >
                <span className="relative z-10 text-sm uppercase tracking-wider">
                  {t("hero_cta")}
                </span>
                <div className="absolute inset-0 bg-[#ACA399] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>
          </motion.div>

          {/* Image - Full Height */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-3 relative min-h-[500px] lg:min-h-[700px]"
          >
            <img
              src={AboutMe}
              alt="Ann Vogel"
              className="w-full h-full object-cover object-center"
            />
            <FloatingWords />
          </motion.div>
        </div>

        {/* Values Grid - Perfect Alignment */}
        <Grid columns={4} gap={6}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="text-center group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-[#7A6F5D]/10 transition-all duration-300 border-2 border-[#E8E4DF]/50 hover:border-[#7A6F5D]/50"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#7A6F5D] to-[#ACA399] mb-4 shadow-md group-hover:shadow-xl group-hover:shadow-[#7A6F5D]/30 transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-[#2C2C2C] mb-2 group-hover:text-[#7A6F5D] transition-colors duration-300">{value.title}</h4>
                <p className="text-[#6B6B6B]">{value.description}</p>
              </motion.div>
            );
          })}
        </Grid>

        {/* Curriculum Vitae - Expandable */}
        <CurriculumVitae language={language} />
      </Container>
    </Section>
  );
}