import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [showSubtitle, setShowSubtitle] = useState(false);
    const fullText = 'Cheriko...';

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setTimeout(() => setShowSubtitle(true), 500);
            }
        }, 150);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="hero">
            {/* Van Gogh Animated Background */}
            <div className="hero-bg">
                <div className="swirl-container">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`hero-swirl swirl-${i}`}
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                rotate: { duration: 30 + i * 5, repeat: Infinity, ease: "linear" },
                            }}
                        />
                    ))}
                </div>

                {/* Floating Stars */}
                <div className="stars-container">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="floating-star"
                            style={{
                                left: `${10 + (i * 8)}%`,
                                top: `${10 + (i * 7)}%`,
                                width: `${3 + (i % 3)}px`,
                                height: `${3 + (i % 3)}px`,
                                animationDelay: `${i * 0.3}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <span className="typing-text">{displayText}</span>
                    <span className="cursor">|</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle handwriting"
                    initial={{ opacity: 0, y: 30 }}
                    animate={showSubtitle ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    Seninle başlayan hikayemiz...
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <span>Keşfetmeye başla</span>
                <div className="scroll-arrow" />
            </motion.div>
        </section>
    );
};

export default Hero;
