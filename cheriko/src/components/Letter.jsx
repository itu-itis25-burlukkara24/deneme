import { motion } from 'framer-motion';
import { letterContent } from '../data/memories';
import './Letter.css';

const Letter = () => {
    return (
        <section className="letter-section">
            {/* Floating Stars */}
            <div className="letter-stars">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="letter-star"
                        style={{
                            left: `${8 + i * 8}%`,
                            top: `${15 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.25}s`,
                        }}
                    />
                ))}
            </div>

            {/* Section Header */}
            <motion.div
                className="letter-header"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="letter-section-title">
                    Sana <span className="gold-text">Mektubum</span>
                </h2>
                <div className="title-decoration">
                    <span>✨</span>
                    <span>🌙</span>
                    <span>✨</span>
                </div>
            </motion.div>

            {/* Letter Card */}
            <motion.div
                className="letter-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="letter-card glass-card">
                    {/* Van Gogh Frame Corners */}
                    <div className="letter-corner top-left">⭐</div>
                    <div className="letter-corner top-right">🌟</div>
                    <div className="letter-corner bottom-left">✨</div>
                    <div className="letter-corner bottom-right">⭐</div>

                    {/* Letter Content */}
                    <div className="letter-content handwriting">
                        {letterContent.split('\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="letter-paragraph"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                            >
                                {paragraph}
                            </motion.p>
                        ))}
                    </div>

                    {/* Signature */}
                    <motion.div
                        className="letter-signature"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <div className="signature-heart">💝</div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Letter;
