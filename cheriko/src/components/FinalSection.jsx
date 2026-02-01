import { motion } from 'framer-motion';
import './FinalSection.css';

const FinalSection = () => {
    return (
        <section className="final-section">
            {/* Starry Background - CSS animations instead of Framer */}
            <div className="final-bg">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="final-star"
                        style={{
                            left: `${5 + (i * 6.5)}%`,
                            top: `${10 + (i * 5.5)}%`,
                            width: `${2 + (i % 3)}px`,
                            height: `${2 + (i % 3)}px`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Main Heart */}
            <motion.div
                className="final-content"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <motion.div
                    className="giant-heart"
                    animate={{
                        scale: [1, 1.1, 1],
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
                    Cheriko ❤️
                </motion.p>

                {/* Floating Hearts - Simplified */}
                <div className="floating-hearts">
                    {[...Array(4)].map((_, i) => (
                        <span
                            key={i}
                            className="mini-heart"
                            style={{
                                left: `${15 + i * 20}%`,
                                animationDelay: `${i * 1}s`,
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
                <div className="final-swirl swirl-c" />
            </div>
        </section>
    );
};

export default FinalSection;
