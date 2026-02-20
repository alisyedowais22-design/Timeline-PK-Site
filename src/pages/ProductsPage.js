import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [activeTab, setActiveTab] = useState('video');

  const videoProducts = [
    {
      model: 'JC182',
      name: 'AI DashCam Pro',
      image: '/products/jc182.jpg',
      badge: 'Best Seller',
      features: ['4G LTE', 'AI ADAS', 'Dual Camera', 'Live Stream', 'Cloud Storage'],
      description: 'Advanced AI dashcam with dual-channel recording, real-time alerts and live video streaming.',
    },
    {
      model: 'JC170',
      name: 'Fleet DashCam',
      image: '/products/jc170.jpg',
      badge: '',
      features: ['4G LTE', '1080p HD', 'GPS Tracking', 'G-Sensor', 'Night Vision'],
      description: 'Professional fleet dashcam with high-definition recording and GPS integration.',
    },
    {
      model: 'JC181',
      name: 'Smart DashCam',
      image: '/products/jc181.jpg',
      badge: 'New',
      features: ['WiFi', 'AI Detection', 'Wide Angle', 'Loop Recording', 'App Control'],
      description: 'Smart dashcam with WiFi connectivity and AI-powered driver behavior monitoring.',
    },
    {
      model: 'JC261',
      name: '360° Camera System',
      image: '/products/jc261.jpg',
      badge: '',
      features: ['360° View', '4 Cameras', 'Blind Spot', 'AI Alert', 'HD Recording'],
      description: 'Complete 360-degree surround view system eliminating blind spots for large fleets.',
    },
    {
      model: 'JC371',
      name: 'Truck DashCam',
      image: '/products/jc371.jpg',
      badge: '',
      features: ['4CH Recording', 'Driver ID', 'Fatigue Alert', '4G LTE', 'Cloud Platform'],
      description: 'Heavy-duty dashcam designed specifically for trucks and commercial vehicles.',
    },
    {
      model: 'JC450',
      name: 'Premium AI Camera',
      image: '/products/jc450.jpg',
      badge: 'Premium',
      features: ['8MP Camera', 'AI ADAS+DMS', 'Solar Option', '5G Ready', 'Edge Computing'],
      description: 'Premium AI camera system with advanced driver monitoring and ADAS capabilities.',
    },
  ];

  const fleetTrackers = [
    { model: 'VG03',   name: 'Vehicle Tracker',     features: ['4G LTE', 'GPS', 'CAN Bus', 'Fuel Monitor'] },
    { model: 'GT06D',  name: 'Basic GPS Tracker',   features: ['2G/4G', 'Real-Time GPS', 'SOS Button', 'Geo-fence'] },
    { model: 'X3',     name: 'OBD Tracker',         features: ['OBD-II', 'Plug & Play', 'Engine Data', '4G LTE'] },
    { model: 'VL110C', name: 'Asset Tracker',       features: ['Long Battery', 'Motion Alert', 'IP67', 'GPS+LBS'] },
    { model: 'VL103M', name: 'Motorcycle Tracker',  features: ['Small Size', 'Waterproof', 'Anti-theft', 'GPS'] },
    { model: 'VL808',  name: 'Personal Tracker',    features: ['Compact', 'SOS', 'Geo-fence', 'Long Battery'] },
    { model: 'VL502',  name: 'Portable Tracker',    features: ['No Install', 'Magnetic Mount', '4G', 'App Control'] },
    { model: 'LL301',  name: 'LTE Cat-M Tracker',   features: ['Cat-M1', 'Low Power', 'Asset Track', 'Cloud'] },
    { model: 'LL303',  name: 'NB-IoT Tracker',      features: ['NB-IoT', 'Ultra Low Power', 'Indoor', 'IoT Platform'] },
    { model: 'PL200',  name: 'Solar GPS Tracker',   features: ['Solar Powered', 'No Battery', 'IP67', 'Long Life'] },
  ];

  const qohoProducts = [
    {
      model: 'OS10',
      name: '4CH AI Mobile DVR',
      badge: 'UAE RTA Certified',
      features: ['4 Channels', 'AI Detection', '4G LTE', 'GPS Tracking', 'Cloud Platform'],
      description: 'UAE RTA certified 4-channel mobile DVR for buses and commercial fleets.',
    },
    {
      model: 'DMS60',
      name: 'Driver Monitor System',
      badge: '',
      features: ['Face Recognition', 'Drowsy Alert', 'Phone Detection', 'Seatbelt', 'AI Engine'],
      description: 'Advanced driver monitoring system using AI to detect fatigue and distraction.',
    },
    {
      model: 'Firetruck DVR',
      name: 'Emergency Vehicle DVR',
      badge: 'Specialized',
      features: ['Rugged Design', 'Multi-Channel', 'Real-Time', 'Cloud Backup', 'Wide Temp'],
      description: 'Rugged DVR system designed for fire trucks and emergency response vehicles.',
    },
    {
      model: 'Train MNVR',
      name: 'Rail Vehicle Recorder',
      badge: '',
      features: ['Rail Grade', '8CH Recording', 'Event Trigger', 'GPS', 'Remote Access'],
      description: 'Professional mobile NVR system for train and rail vehicle monitoring.',
    },
  ];

  return (
    <div className="products-page">

      {/* Hero Banner */}
      <section className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">OUR PRODUCTS</span>
            <h1 className="page-hero-title">
              Complete IoT & Telematics
              <span className="gradient-text"> Product Range</span>
            </h1>
            <p className="page-hero-desc">
              JimiIoT AI Dashcams, Fleet GPS Trackers & Qoho Vision Mobile DVR Systems — 
              All available through Timeline Telematics Pakistan.
            </p>
            <div className="page-hero-stats">
              <div className="page-stat"><span className="page-stat-num">20+</span><span className="page-stat-label">Products</span></div>
              <div className="page-stat"><span className="page-stat-num">100+</span><span className="page-stat-label">Countries</span></div>
              <div className="page-stat"><span className="page-stat-num">50K+</span><span className="page-stat-label">Devices Sold</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="products-tabs-section">
        <div className="container">
          <div className="tabs-nav">
            <button
              className={`tab-btn ${activeTab === 'video' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('video')}
            >
              🎥 Video Telematics (JimiIoT)
            </button>
            <button
              className={`tab-btn ${activeTab === 'fleet' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('fleet')}
            >
              📍 Fleet GPS Trackers
            </button>
            <button
              className={`tab-btn ${activeTab === 'qoho' ? 'tab-active' : ''}`}
              onClick={() => setActiveTab('qoho')}
            >
              📹 Qoho Vision DVR
            </button>
          </div>

          {/* Video Telematics Tab */}
          {activeTab === 'video' && (
            <div className="products-grid">
              {videoProducts.map((product, index) => (
                <div key={index} className="product-card">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <div className="product-img-wrap">
                    <div className="product-img-placeholder">
                      <span className="product-model-big">{product.model}</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-model-tag">JimiIoT {product.model}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.description}</p>
                    <div className="product-features">
                      {product.features.map((f, i) => (
                        <span key={i} className="feature-tag">{f}</span>
                      ))}
                    </div>
                    <Link to="/contact" className="product-btn">Get Quote →</Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fleet Trackers Tab */}
          {activeTab === 'fleet' && (
            <div className="trackers-grid">
              {fleetTrackers.map((tracker, index) => (
                <div key={index} className="tracker-card">
                  <div className="tracker-icon">📡</div>
                  <div className="tracker-model">{tracker.model}</div>
                  <h3 className="tracker-name">{tracker.name}</h3>
                  <div className="tracker-features">
                    {tracker.features.map((f, i) => (
                      <span key={i} className="feature-tag">{f}</span>
                    ))}
                  </div>
                  <Link to="/contact" className="tracker-btn">Enquire →</Link>
                </div>
              ))}
            </div>
          )}

          {/* Qoho Tab */}
          {activeTab === 'qoho' && (
            <div className="qoho-wrap">
              <div className="qoho-header-banner">
                <span className="qoho-cert-badge">🏆 UAE RTA Certified</span>
                <h2>Qoho Vision Mobile DVR Systems</h2>
                <p>Professional mobile recording systems for buses, trucks, emergency & rail vehicles</p>
              </div>
              <div className="products-grid">
                {qohoProducts.map((product, index) => (
                  <div key={index} className="product-card">
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <div className="product-img-wrap">
                      <div className="product-img-placeholder">
                        <span className="product-model-big">📹</span>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-model-tag">Qoho {product.model}</div>
                      <h3 className="product-name">{product.name}</h3>
                      <p className="product-desc">{product.description}</p>
                      <div className="product-features">
                        {product.features.map((f, i) => (
                          <span key={i} className="feature-tag">{f}</span>
                        ))}
                      </div>
                      <Link to="/contact" className="product-btn">Get Quote →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Need Help Choosing the Right Product?</h2>
            <p>Our experts will guide you to the best solution for your fleet size and requirements.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Talk to an Expert →</Link>
              <Link to="/platform" className="btn-secondary">See Our Platform</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;