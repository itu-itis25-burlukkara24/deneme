import { motion } from 'framer-motion';
import MemoryCard from './MemoryCard';
import { memories } from '../data/memories';
import './Timeline.css';

const Timeline = () => {
    return (
        <section className="timeline-section">
            {/* Section Header */}
            <motion.div
                className="timeline-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="timeline-title">
                    <span className="gold-text">Bizim</span> Hikayemiz
                </h2>
                <p className="timeline-subtitle handwriting">
                    Her anı seninle yaşadığım için mutluyum...
                </p>
            </motion.div>

            {/* Timeline Container */}
            <div className="timeline-container">
                {/* Center Line */}
                <div className="timeline-line">
                    <motion.div
                        className="timeline-line-fill"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    />
                </div>

                {/* Memory Cards */}
                <div className="timeline-cards">
                    {memories.map((memory, index) => (
                        <div key={memory.id} className="timeline-item">
                            {/* Timeline Node */}
                            <motion.div
                                className="timeline-node"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2,
                                    type: "spring",
                                    stiffness: 200
                                }}
                            >
                                <span className="node-heart">❤️</span>
                            </motion.div>

                            <MemoryCard memory={memory} index={index} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
