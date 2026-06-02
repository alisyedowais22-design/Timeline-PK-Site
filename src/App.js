import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import PlatformPage from './pages/PlatformPage';
import SolutionsPage from './pages/SolutionsPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';


import LogisticsSolutionPage from './pages/LogisticsSolutionPage';
import PublicTransportSolutionPage from './pages/PublicTransportSolutionPage';
import OilGasSolutionPage from './pages/OilGasSolutionPage';
import ConstructionSolutionPage from './pages/ConstructionSolutionPage';
import HealthcareSolutionPage from './pages/HealthcareSolutionPage';
import GovernmentSolutionPage from './pages/GovernmentSolutionPage';
import AgricultureSolutionPage from './pages/AgricultureSolutionPage';

import IoTSummit2025 from './pages/IoTSummit2025';
import PTCLConnect2025 from './pages/Ptclconnect2025';
import ITCN2025 from './pages/ITCN2025';
import Events from './pages/Events';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductInquiryPage from './pages/ProductInquiryPage';
import TechnicalSupportPage from './pages/TechnicalSupportPage';

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

          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/solutions/logistics" element={<LogisticsSolutionPage />} />
          <Route path="/solutions/public-transport" element={<PublicTransportSolutionPage />} />
          <Route path="/solutions/oil-gas" element={<OilGasSolutionPage />} />
          <Route path="/solutions/construction" element={<ConstructionSolutionPage />} />
          <Route path="/solutions/healthcare" element={<HealthcareSolutionPage />} />
          <Route path="/solutions/government" element={<GovernmentSolutionPage />} />
          <Route path="/solutions/agriculture" element={<AgricultureSolutionPage />} />

          <Route path="/events" element={<Events />} />
          <Route path="/events/iot-summit-2025" element={<IoTSummit2025 />} />
          <Route path="/events/ptcl-connect-2025" element={<PTCLConnect2025 />} />
          <Route path="/events/itcn-asia-2025" element={<ITCN2025 />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />

          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-inquiry" element={<ProductInquiryPage />} />
          <Route path="/technical-support" element={<TechnicalSupportPage />} />
          <Route path="/<CaseStudyPage id={id} />/:id" element={<CaseStudiesPage />} />
        </Routes>

        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;