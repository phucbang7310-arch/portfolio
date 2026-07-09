import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Contents from './components/Contents';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="app-wrapper">
        {/* Landing + Work Experience Timeline */}
        <Hero />

        {/* Behance-Style Directory contents */}
        <Contents />

        {/* Case Studies */}
        <Project1 />
        <Project2 />
        <Project3 />

        {/* Contact Form */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
