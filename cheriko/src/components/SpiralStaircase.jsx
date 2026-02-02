import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MemoryCard from './MemoryCard';
import { memories } from '../data/memories';
import './SpiralStaircase.css';

const SpiralStaircase = () => {
    const containerRef = useRef(null);
    const [windowHeight, setWindowHeight] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 3D rotation based on scroll
    const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
    const perspective = useTransform(scrollYProgress, [0, 0.5, 1], [800, 1200, 800]);

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="spiral-section" ref={containerRef}>
            {/* Section Header */}
            <motion.div
                className="spiral-header"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="spiral-title">
                    <span className="gold-text">Bizim</span> Hikayemiz
                </h2>
                <p className="spiral-subtitle handwriting">
                    Merdivenden birlikte inelim...
                </p>
            </motion.div>

            {/* Spiral Staircase Container */}
            <div className="staircase-container">
                {/* Central Pole (Merdiven Direği) */}
                <div className="staircase-pole" />

                {/* Spiral Rail (Korkuluk) */}
                <motion.div
                    className="staircase-rail"
                    style={{ rotateY }}
                />

                {/* Memory Cards on Rails */}
                <div className="staircase-steps">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.id}
                            className={`stair-step step-${index % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200, rotateY: -30 }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                rotateY: 0,
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Rail Connection (Askı İpi) */}
                            <div className="rail-connection">
                                <div className="connection-rope" />
                                <div className="connection-hook">⚓</div>
                            </div>

                            <MemoryCard memory={memory} index={index} isSpiral={true} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpiralStaircase;
