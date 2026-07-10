import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Exprience';
import Contents from './components/Contents/Contents';
import { Music } from 'lucide-react';
import MusicVideoProject from './components/MusicVideo/MusicVideoProject';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <main className="portfolio-container">
      <Hero />
      <img
        className="welcome-image"
        src="/welcome.png"
        alt="Welcome text layout"
      />
      <AboutMe />
      <Experience />
      <Contents />
      <MusicVideoProject />
    </main>
  );
}
export default App;
