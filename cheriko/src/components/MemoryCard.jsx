import { motion } from 'framer-motion';
import './MemoryCard.css';

const MemoryCard = ({ memory, index, isSpiral = false }) => {
    const isLeft = memory.side === 'left';

    return (
        <motion.div
            className={`memory-card-wrapper ${isLeft ? 'left' : 'right'} ${isSpiral ? 'spiral-mode' : ''}`}
            whileHover={{
                scale: 1.02,
                rotateY: isLeft ? 5 : -5,
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="memory-card glass-card brush-border">
                {/* Hanging Frame Effect */}
                {isSpiral && (
                    <div className="hanging-frame">
                        <div className="frame-wire left-wire" />
                        <div className="frame-wire right-wire" />
                    </div>
                )}

                {/* Date Badge */}
                <div className="memory-date">
                    <span className="date-text handwriting">{memory.date}</span>
                </div>

                {/* Image Container with Van Gogh Frame */}
                <div className="memory-image-container">
                    {memory.imageSrc ? (
                        <motion.img
                            src={memory.imageSrc}
                            alt={memory.title}
                            className="memory-image"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                        />
                    ) : (
                        <div className="memory-image-placeholder">
                            <div className="placeholder-swirl" />
                            <div className="placeholder-stars">
                                {[...Array(5)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="mini-star"
                                        style={{
                                            left: `${20 + i * 15}%`,
                                            top: `${30 + (i % 2) * 20}%`,
                                            animationDelay: `${i * 0.3}s`
                                        }}
                                    >✨</span>
                                ))}
                            </div>
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

                {/* Van Gogh Stars Decoration */}
                <div className="memory-stars">
                    <span className="deco-star">⭐</span>
                    <span className="deco-star">🌟</span>
                    <span className="deco-star">✨</span>
                </div>
            </div>
        </motion.div>
    );
};

export default MemoryCard;
