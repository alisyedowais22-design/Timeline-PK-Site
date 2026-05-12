import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
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
import ProductDetail from './pages/ProductDetail';
import PlatformPage from './pages/PlatformPage';
import IoTSummit2025 from './pages/IoTSummit2025';
import PTCLConnect2025 from './pages/Ptclconnect2025';
import ITCN2025 from './pages/ITCN2025';
import Events from './pages/Events'; 
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductInquiryPage from './pages/ProductInquiryPage';
import TechnicalSupportPage from './pages/TechnicalSupportPage';
import TrackAndTrace from './pages/TrackAndTrace';
import TeletixPro from './pages/TeletixPro';
import WhatsAppAPI from './pages/WhatsAppAPI';
import Telebook from './pages/Telebook';
import AutoCall from './pages/AutoCall';

// Home page
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
        <TopBar /> 
        <Navbar />
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-products" element={<ProductsPage />} />
          <Route path="/our-products/:productId" element={<ProductDetail />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/iot-summit-2025" element={<IoTSummit2025 />} />
          <Route path="/events/ptcl-connect-2025" element={<PTCLConnect2025 />} />
          <Route path="/events/itcn-asia-2025" element={<ITCN2025 />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-inquiry" element={<ProductInquiryPage />} />
          <Route path="/technical-support" element={<TechnicalSupportPage />} />
          <Route path="/solutions/track-and-trace"   element={<TrackAndTrace />} />
          <Route path="/solutions/teletix-pro"       element={<TeletixPro />} />
          <Route path="/solutions/whatsapp-api"      element={<WhatsAppAPI />} />
          <Route path="/solutions/telebook"          element={<Telebook />} />
          <Route path="/solutions/autocall"          element={<AutoCall />} />
        </Routes>
        
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;