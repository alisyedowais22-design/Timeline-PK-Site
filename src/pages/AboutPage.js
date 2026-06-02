import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    { icon: '🎯', title: 'Innovation First', desc: 'We bring the latest IoT and AI telematics technology to Pakistan before anyone else.' },
    { icon: '🤝', title: 'Partnership Driven', desc: 'As official partners of JimiIoT and Qoho Vision, we deliver world-class products with local support.' },
    { icon: '🛡️', title: 'Reliability', desc: '99.9% platform uptime and dedicated after-sales support for every client.' },
    { icon: '🌍', title: 'Nationwide Reach', desc: 'Covering every major city in Pakistan with installation, training, and support teams.' },
  ];

  const timeline = [
    { year: '2018', title: 'Company Founded', desc: 'Timeline Telematics established in Pakistan with a vision to modernize fleet management.' },
    { year: '2020', title: 'JimiIoT Partnership', desc: 'Became Pakistan\'s official authorized partner for JimiIoT GPS and telematics devices.' },
    { year: '2022', title: 'Platforms Launch', desc: 'Launched our proprietary fleet management platform — web, mobile, and portal.' },
    { year: '2023', title: 'Qoho Vision Partnership', desc: 'Partnered with Qoho Vision to bring UAE RTA certified Mobile DVR systems to Pakistan.' },
    { year: '2025', title: 'IOT Summit Pakistan', desc: 'Showcasing cutting-edge IoT solutions at IOT Summit 2025 — Pakistan\'s biggest tech event.' },
  ];

  const team = [
    { name: 'CEO & Founder', role: 'Timeline Telematics', icon: '👨‍💼' },
    { name: 'Head of Technology', role: 'Platform & Integration', icon: '👨‍💻' },
    { name: 'Sales Director', role: 'Enterprise Solutions', icon: '👨‍🤝‍👨' },
    { name: 'Support Lead', role: 'After-Sales & Training', icon: '🧑‍🔧' },
  ];

  return (
    <div className="about-page">

      {/* Hero */}
      <section
        className="page-hero"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 20, 0.82), rgba(5, 10, 20, 0.86)), url('/about-hero-bg.avif')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">ABOUT US</span>
            <h1 className="page-hero-title">
              Pakistan's Leading
              <span className="gradient-text"> IoT Telematics Partner</span>
            </h1>
            <p className="page-hero-desc">
              Timeline Telematics is Pakistan's official partner for JimiIoT and Qoho Vision — 
              bringing world-class fleet tracking and AI dashcam technology to every business.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-text">
              <span className="section-badge">OUR MISSION</span>
              <h2>Making Fleet Management Smarter for Pakistan</h2>
              <p>
                We believe every fleet operator in Pakistan deserves access to enterprise-grade 
                telematics technology. That's why we've partnered with the world's leading IoT 
                manufacturers to bring affordable, reliable, and powerful solutions to the local market.
              </p>
              <p>
                From a 5-vehicle delivery fleet to a 500-truck logistics company — we have the 
                hardware, software, and expertise to transform your operations.
              </p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>
                Talk to Our Team →
              </Link>
            </div>
            <div className="mission-stats">
              <div className="about-stat-card">
                <div className="about-stat-num">7+</div>
                <div className="about-stat-label">Years in Business</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">500+</div>
                <div className="about-stat-label">Clients Served</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">5000+</div>
                <div className="about-stat-label">Devices Deployed</div>
              </div>
              <div className="about-stat-card">
                <div className="about-stat-num">24/7</div>
                <div className="about-stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">CORE VALUES</span>
            <h2 className="section-title">What Drives Us</h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">OUR JOURNEY</span>
            <h2 className="section-title">From 2018 to Today</h2>
          </div>
          <div className="journey-timeline">
            {timeline.map((item, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="about-partners-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">OUR PARTNERS</span>
            <h2 className="section-title">Official Technology Partners</h2>
          </div>
          <div className="partners-grid">
            <div className="partner-detail-card">
              <div className="partner-detail-logo">🌐</div>
              <h3>JimiIoT</h3>
              <p className="partner-role">Official Pakistan Partner</p>
              <p className="partner-about">
                JimiIoT is a global leader in GPS tracking and AI dashcam technology, 
                operating in 100+ countries with 50,000+ devices deployed worldwide. 
                Timeline Telematics is their exclusive authorized distributor in Pakistan.
              </p>
              <div className="partner-badges">
                <span className="feature-tag">AI DashCams</span>
                <span className="feature-tag">Fleet Trackers</span>
                <span className="feature-tag">IoT Devices</span>
              </div>
            </div>
            <div className="partner-detail-card">
              <div className="partner-detail-logo">🎥</div>
              <h3>Qoho Vision</h3>
              <p className="partner-role">Official Pakistan Partner</p>
              <p className="partner-about">
                Qoho Vision specializes in UAE RTA certified Mobile DVR systems for 
                commercial vehicles, buses, trucks, and emergency services. Their 
                systems are trusted by major fleet operators across the Middle East and Asia.
              </p>
              <div className="partner-badges">
                <span className="feature-tag">Mobile DVR</span>
                <span className="feature-tag">UAE RTA Certified</span>
                <span className="feature-tag">DMS Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Ready to Work With Us?</h2>
            <p>Join 500+ businesses already using Timeline Telematics solutions across Pakistan.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Get in Touch →</Link>
              <Link to="/products" className="btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;