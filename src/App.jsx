import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Exprience';
import Contents from './components/Contents/Contents';
import MusicVideoProject from './components/MusicVideo/MusicVideoProject';
import Hero from './components/Hero/Hero';
import CampaignProjects from './components/Campaign/CampaignProjects';
import EventProjects from './components/EventProjects/EventProjects';
import SocialAssetsProject from './components/SocialAssetsProject/SocialAssetsProject';
import PrintingProject from './components/PrintingProject/PrintingProject';
import MotionGraphicProject from './components/MotionGraphicProject/MotionGraphicProject';
import ThankYou from './components/Thankyou/Thankyou';

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
      <CampaignProjects />
      <EventProjects   />
      <SocialAssetsProject />
      <PrintingProject />
      <MotionGraphicProject />
      <ThankYou />
    </main>
  );
}
export default App;
