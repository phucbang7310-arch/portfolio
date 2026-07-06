import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project1 from './components/Project1';
import Project23 from './components/Project23';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-wrapper">
        {/* Hero */}
        <div id="hero" className="split-layout">
          <Hero />
          {/* About + Project1 stacked on the right column */}
          <div id="about" style={{ display: 'flex', flexDirection: 'column' }}>
            <About />
            <Project1 />
          </div>
        </div>

        {/* Projects 2 & 3 */}
        <div id="projects">
          <Project23 />
        </div>

        {/* Contact Form */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
