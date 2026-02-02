import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [showSubtitle, setShowSubtitle] = useState(false);
    const fullText = 'Zehram...';

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
        }, 180);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <section className="hero">
            {/* Van Gogh Starry Night Background */}
            <div className="hero-bg">
                {/* Swirls */}
                <div className="swirl-container">
                    {[...Array(4)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`hero-swirl swirl-${i}`}
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 40 + i * 10,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* Stars */}
                <div className="stars-container">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="floating-star"
                            style={{
                                left: `${5 + (i * 6.5)}%`,
                                top: `${10 + (i * 5.5)}%`,
                                width: `${4 + (i % 3)}px`,
                                height: `${4 + (i % 3)}px`,
                                animationDelay: `${i * 0.2}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Big Stars - Van Gogh Style */}
                <div className="big-stars">
                    <div className="big-star star-1">🌟</div>
                    <div className="big-star star-2">⭐</div>
                    <div className="big-star star-3">✨</div>
                </div>
            </div>

            {/* Moon */}
            <motion.div
                className="moon"
                animate={{
                    scale: [1, 1.05, 1],
                    boxShadow: [
                        "0 0 60px var(--gold-glow)",
                        "0 0 100px var(--gold-glow)",
                        "0 0 60px var(--gold-glow)"
                    ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                🌙
            </motion.div>

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
                    Yıldızlı bir gecede seninle...
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <span>Merdivene adım at</span>
                <div className="scroll-arrow" />
            </motion.div>
        </section>
    );
};

export default Hero;
