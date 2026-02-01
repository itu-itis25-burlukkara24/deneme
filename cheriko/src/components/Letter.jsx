import { motion } from 'framer-motion';
import { letterContent } from '../data/memories';
import './Letter.css';

const Letter = () => {
    return (
        <section className="letter-section">
            {/* Floating Stars Background */}
            <div className="letter-stars">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="letter-star"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 1.3, 1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
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
            </motion.div>

            {/* Letter Card */}
            <motion.div
                className="letter-container"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="letter-card glass-card">
                    {/* Decorative Corner */}
                    <div className="letter-corner top-left" />
                    <div className="letter-corner top-right" />
                    <div className="letter-corner bottom-left" />
                    <div className="letter-corner bottom-right" />

                    {/* Letter Content */}
                    <div className="letter-content handwriting">
                        {letterContent.split('\n').map((paragraph, index) => (
                            <motion.p
                                key={index}
                                className="letter-paragraph"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
