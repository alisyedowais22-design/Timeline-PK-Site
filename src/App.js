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
import AccessoriesPage from './pages/AccessoriesPage';
import ProductDetail from './pages/ProductDetail';
import PlatformPage from './pages/PlatformPage';

import VehicleSolutionsPage from './pages/VehicleSolutionsPage';
import VehicleSolutionDetailPage from './pages/VehicleSolutionDetailPage';
import IndustriesPage from './pages/IndustriesPage';

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
          <Route path="/accessories" element={<AccessoriesPage />} />

          <Route path="/platform" element={<PlatformPage />} />

          {/* New Solutions: Middle East / Global style vehicle solutions */}
          <Route path="/solutions" element={<VehicleSolutionsPage />} />
          <Route path="/solutions/:slug" element={<VehicleSolutionDetailPage />} />

          {/* Old Solutions moved to Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/logistics" element={<LogisticsSolutionPage />} />
          <Route path="/industries/public-transport" element={<PublicTransportSolutionPage />} />
          <Route path="/industries/oil-gas" element={<OilGasSolutionPage />} />
          <Route path="/industries/construction" element={<ConstructionSolutionPage />} />
          <Route path="/industries/healthcare" element={<HealthcareSolutionPage />} />
          <Route path="/industries/government" element={<GovernmentSolutionPage />} />
          <Route path="/industries/agriculture" element={<AgricultureSolutionPage />} />

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
        </Routes>

        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;