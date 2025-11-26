import { useState, useRef } from "react";
import { motion } from "motion/react";

interface OrganicHoverProps {
  children: React.ReactNode;
  className?: string;
}

export function OrganicHover({ children, className = "" }: OrganicHoverProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Subtle Organic Blob Background */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none z-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.05, 1.02],
            opacity: [0.2, 0.3, 0.25],
            x: mousePosition.x - 150,
            y: mousePosition.y - 150,
            rotate: [0, 120, 240, 360],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            opacity: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              type: "spring",
              stiffness: 80,
              damping: 25,
            },
            y: {
              type: "spring",
              stiffness: 80,
              damping: 25,
            },
          }}
          style={{
            width: 300,
            height: 300,
            borderRadius: "40% 60% 55% 45% / 50% 45% 55% 50%",
            background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.1))",
            filter: "blur(40px)",
          }}
        />
      )}

      {/* Content - must be above the blob */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}