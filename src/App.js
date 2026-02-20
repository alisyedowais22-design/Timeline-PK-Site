import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Main page components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import Features from './components/Features';
import StatsSection from './components/StatsSection';
import Solutions from './components/Solutions';
import ROISection from './components/ROISection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Pages
import ProductsPage from './pages/ProductsPage';
import PlatformPage from './pages/PlatformPage';
import Events from './pages/Events'; 
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Home page - all sections together
function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Features />
      <StatsSection />
      <Solutions />
      <ROISection />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team"     element={<TeamPage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/contact"  element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;