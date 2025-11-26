import { motion } from "motion/react";
import { ExternalLink, Figma } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { cn } from "./ui/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category?: string;
  figmaUrl?: string;
  liveUrl?: string;
  index: number;
  onClick?: () => void;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  category,
  figmaUrl,
  liveUrl,
  index,
  onClick,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className={`h-full ${featured ? "md:col-span-2" : ""}`}
    >
      <div
        className={cn(
          "text-card-foreground flex flex-col gap-6 rounded-xl border relative !bg-[#F5F3F0] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group h-full",
          featured ? "ring-4 ring-[#E8E4DF]/40" : ""
        )}
        onClick={onClick}
        style={{ willChange: "transform" }}
      >
        <div
          className={`relative overflow-hidden ${featured ? "aspect-[21/9]" : "aspect-video"
            }`}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 rounded-2xl"
          />

          {/* Slide-in Project Info */}
          <motion.div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {/* Text Label - Slide up */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="text-white text-center px-6"
            >
              <h4 className="text-xl mb-2 drop-shadow-lg">
                {title}
              </h4>
              <p className="text-sm text-white/90 drop-shadow-md">
                Click to view details
              </p>
            </motion.div>

            {/* Interactive Icon Buttons */}
            <div className="flex items-center justify-center gap-4">
              {figmaUrl && figmaUrl !== "#" && (
                <motion.a
                  href={figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-[#7A6F5D] text-white p-3 rounded-full shadow-lg border border-white/40 hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Figma className="w-5 h-5" />
                </motion.a>
              )}
              {liveUrl && (
                <motion.a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white hover:text-[#ACA399] text-white p-3 rounded-full shadow-lg border border-white/40 hover:border-white transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>

        <div className="p-6 relative z-10 !bg-[#F5F3F0]">
          {category && (
            <div
              className="inline-block px-3 py-1 rounded-full text-white text-xs uppercase tracking-wider mb-3 shadow-sm bg-[#7A6F5D]"
            >
              {category}
            </div>
          )}
          <h3 className="text-[#2C2C2C] mb-3 group-hover:text-[#7A6F5D] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#6B6B6B] mb-4 line-clamp-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge
                key={i}
                className="bg-[#E8E4DF]/60 text-[#7A6F5D] hover:bg-[#7A6F5D] hover:text-white border border-[#7A6F5D]/30 transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
