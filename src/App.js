import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import StatsSection from './components/StatsSection';
import Solutions from './components/Solutions';
import ROISection from './components/ROISection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <TrustBadges />
      <StatsSection />
      <Solutions />
      <ROISection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
