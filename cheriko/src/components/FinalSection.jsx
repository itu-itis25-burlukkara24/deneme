import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = () => {
    return (
        <section className="final-section">
            {/* Starry Background */}
            <div className="final-bg">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="final-star"
                        style={{
                            left: `${5 + (i * 4.8)}%`,
                            top: `${10 + (i % 4) * 20}%`,
                            width: `${3 + (i % 3)}px`,
                            height: `${3 + (i % 3)}px`,
                            animationDelay: `${i * 0.15}s`,
                        }}
                    />
                ))}

                {/* Big Stars */}
                <div className="final-big-stars">
                    <span className="big-star">🌟</span>
                    <span className="big-star">⭐</span>
                    <span className="big-star">✨</span>
                    <span className="big-star">🌟</span>
                </div>
            </div>

            {/* Main Content */}
            <motion.div
                className="final-content"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Moon */}
                <motion.div
                    className="final-moon"
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    🌙
                </motion.div>

                {/* Giant Heart */}
                <motion.div
                    className="giant-heart"
                    animate={{
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    ❤️
                </motion.div>

                <motion.h2
                    className="final-text handwriting gold-text"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Seni Çok Seviyorum
                </motion.h2>

                <motion.p
                    className="final-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Zehram ❤️
                </motion.p>

                {/* Floating Hearts */}
                <div className="floating-hearts">
                    {[...Array(5)].map((_, i) => (
                        <span
                            key={i}
                            className="mini-heart"
                            style={{
                                left: `${10 + i * 20}%`,
                                animationDelay: `${i * 0.8}s`,
                            }}
                        >
                            💕
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Van Gogh Swirls */}
            <div className="final-swirls">
                <div className="final-swirl swirl-a" />
                <div className="final-swirl swirl-b" />
            </div>
        </section>
    );
};

export default FinalSection;
