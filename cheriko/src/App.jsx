import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Letter from './components/Letter';
import FinalSection from './components/FinalSection';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Van Gogh Background Overlay */}
      <div className="van-gogh-bg">
        <div className="swirl swirl-1" />
        <div className="swirl swirl-2" />
        <div className="swirl swirl-3" />
      </div>

      {/* Main Sections */}
      <main className="main-content">
        <Hero />
        <Timeline />
        <Letter />
        <FinalSection />
      </main>

      {/* Audio Player (fixed position) */}
      <AudioPlayer />
    </div>
  );
}

export default App;
