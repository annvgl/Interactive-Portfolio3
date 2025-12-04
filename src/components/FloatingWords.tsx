import { motion } from "motion/react";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export function FloatingWords() {
    const { t } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    // Persönliche Wörter/Hobbys
    const words = [
        t("hobby_animals"),
        t("hobby_traveling"),
        t("hobby_reading"),
        t("hobby_music"),
        t("hobby_nature"),
        t("hobby_coffee"),
    ];

    // Regenbogen-Positionen berechnen (nach oben gewölbt)
    const getArcPosition = (index: number, total: number) => {
        const angle = (index / (total - 1)) * Math.PI; // 0 bis π (Halbkreis)
        const radius = 50; // Noch kleiner für kompakteren Bogen über dem Text
        const centerX = 52; // Zentrum in % (horizontal)
        const centerY = 32; // Noch höher positioniert über dem Text

        const x = centerX + (Math.cos(Math.PI - angle) * radius) / 2.1; // Angepasst für bessere Zentrierung
        const y = centerY - (Math.sin(Math.PI - angle) * radius) / 2.5; // MINUS für Regenbogen-Effekt (nach oben)

        return { x: `${x}%`, y: `${y}%` };
    };

    return (
        <div
            className="absolute inset-0 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Hover Hint - verschwindet beim Hovern */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: isHovered ? 0 : 1,
                    y: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-8 right-8 z-20 pointer-events-none"
            >
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border-2 border-[#7A6F5D]/30">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#7A6F5D" />
                        </svg>
                    </motion.div>
                    <span className="text-[#7A6F5D] text-sm font-medium">
                        {t("hover_hint")}
                    </span>
                </div>
            </motion.div>

            {/* Headline - nur beim Hovern sichtbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isHovered ? 8 : 0,
                    y: isHovered ? 20 : 50,
                    scale: isHovered ? 1.05 : 0.9
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-4 left-1/2 transform -translate-x-[45%] z-10 pointer-events-none"
            >
                <span className="text-[#7A6F5D] text-lg font-semibold tracking-wider">
                    {t("floating_words_title")}
                </span>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#7A6F5D] to-transparent mt-2" />
            </motion.div>

            {/* Wörter in Regenbogen-Formation - nur beim Hovern sichtbar */}
            {words.map((word, index) => {
                const position = getArcPosition(index, words.length);

                return (
                    <motion.div
                        key={word}
                        className="absolute pointer-events-none"
                        style={{
                            left: position.x,
                            top: position.y,
                            transform: 'translate(-50%, -50%)'
                        }}
                        initial={{
                            opacity: 0,
                            scale: 0.6,
                            y: 40
                        }}
                        animate={{
                            opacity: isHovered ? 0.9 : 0,
                            scale: isHovered ? 1.1 : 0.6,
                            y: isHovered ? -5 : 40,
                            rotate: isHovered ? (Math.random() - 0.5) * 6 : 0
                        }}
                        transition={{
                            duration: 0.6,
                            delay: isHovered ? index * 0.1 : 0,
                            ease: "easeOut"
                        }}
                    >
                        <motion.span
                            className="text-[#7A6F5D] text-sm font-medium tracking-wide bg-[#F5F3F0]/90 px-3 py-1 rounded-full backdrop-blur-sm border border-[#E8E4DF]/60 shadow-sm"
                            whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(122, 111, 93, 0.15)",
                                borderColor: "rgba(122, 111, 93, 0.4)",
                                boxShadow: "0 4px 12px rgba(122, 111, 93, 0.2)"
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {word}
                        </motion.span>
                    </motion.div>
                );
            })}

            {/* Subtile schwebende Partikel */}
            {[...Array(4)].map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 rounded-full bg-[#ACA399]/30"
                    initial={{
                        x: Math.random() * 100 + "%",
                        y: Math.random() * 100 + "%"
                    }}
                    animate={{
                        x: [
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%"
                        ],
                        y: [
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%"
                        ],
                        opacity: isHovered ? [0.3, 0.7, 0.2] : [0.1, 0.3, 0.1]
                    }}
                    transition={{
                        duration: 8 + Math.random() * 4,
                        delay: i * 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            {/* Hover-Indikator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: isHovered ? 0 : 0.5,
                    scale: isHovered ? 0.8 : 1
                }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
                <span className="text-[#7A6F5D]/70 text-xs tracking-wider font-medium">
                    Hover to explore
                </span>
            </motion.div>
        </div>
    );
}
