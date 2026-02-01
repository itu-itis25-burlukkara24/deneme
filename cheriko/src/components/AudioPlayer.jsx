import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AudioPlayer.css';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const audioRef = useRef(null);

    // Placeholder - kullanıcı kendi müziğini ekleyecek
    const audioSrc = null; // "/music/song.mp3" gibi bir yol eklenecek

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(() => {
                // Autoplay blocked
                console.log('Müzik izni gerekli');
            });
        }
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => setIsPlaying(false);
        audio.addEventListener('ended', handleEnded);

        return () => audio.removeEventListener('ended', handleEnded);
    }, []);

    // Müzik dosyası yoksa gösterme
    if (!audioSrc) {
        return null;
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="audio-player"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                >
                    <audio ref={audioRef} src={audioSrc} loop />

                    <motion.button
                        className={`audio-button ${isPlaying ? 'playing' : ''}`}
                        onClick={togglePlay}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="audio-icon">
                            {isPlaying ? '🎵' : '🎶'}
                        </span>
                        <span className="audio-text">
                            {isPlaying ? 'Durdur' : 'Müzik'}
                        </span>
                    </motion.button>

                    {/* Sound Waves Animation */}
                    {isPlaying && (
                        <div className="sound-waves">
                            <span className="wave" />
                            <span className="wave" />
                            <span className="wave" />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AudioPlayer;
