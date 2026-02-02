import Hero from './components/Hero';
import SpiralStaircase from './components/SpiralStaircase';
import Letter from './components/Letter';
import FinalSection from './components/FinalSection';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* Van Gogh Starry Night Background */}
      <div className="starry-night-bg">
        <div className="vg-swirl vg-swirl-1" />
        <div className="vg-swirl vg-swirl-2" />
        <div className="vg-swirl vg-swirl-3" />
        <div className="vg-swirl vg-swirl-4" />

        {/* Background Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="vg-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Sections */}
      <main className="main-content">
        <Hero />
        <SpiralStaircase />
        <Letter />
        <FinalSection />
      </main>
    </div>
  );
}

export default App;
