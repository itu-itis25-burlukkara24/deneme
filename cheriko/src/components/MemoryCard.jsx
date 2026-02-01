import { motion } from 'framer-motion';
import './MemoryCard.css';

const MemoryCard = ({ memory, index }) => {
    const isLeft = memory.side === 'left';

    return (
        <motion.div
            className={`memory-card-wrapper ${isLeft ? 'left' : 'right'}`}
            initial={{
                opacity: 0,
                x: isLeft ? -100 : 100
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.1
            }}
        >
            <div className="memory-card glass-card brush-border">
                {/* Date Badge */}
                <div className="memory-date">
                    <span className="date-text handwriting">{memory.date}</span>
                </div>

                {/* Image Placeholder */}
                <div className="memory-image-container">
                    {memory.imageSrc ? (
                        <img src={memory.imageSrc} alt={memory.title} className="memory-image" />
                    ) : (
                        <div className="memory-image-placeholder">
                            <div className="placeholder-swirl" />
                            <span className="placeholder-text">📷</span>
                            <span className="placeholder-hint">Fotoğraf eklenecek</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="memory-content">
                    <h3 className="memory-title">{memory.title}</h3>
                    <p className="memory-description">{memory.description}</p>
                </div>

                {/* Decorative Elements */}
                <div className="memory-decoration">
                    <div className="decoration-star" />
                    <div className="decoration-star" />
                    <div className="decoration-star" />
                </div>
            </div>
        </motion.div>
    );
};

export default MemoryCard;
