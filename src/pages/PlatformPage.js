import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import platformHeroBg from '../assets/products-hero-bg.png';

const PlatformPage = () => {
  const [activeApp, setActiveApp] = useState('web');

  const apps = {
    web: {
      title: 'Teletix Web App',
      subtitle: 'Full-featured browser-based fleet management dashboard',
      icon: '🖥️',
      externalLink: '#',
      features: [
        { icon: '🗺️', title: 'Real-Time Tracking', desc: 'Live GPS tracking of all vehicles on an interactive map with route history.' },
        { icon: '📊', title: 'Analytics Dashboard', desc: 'Comprehensive reports on fuel, speed, driver behavior, and fleet performance.' },
        { icon: '🔔', title: 'Smart Alerts', desc: 'Instant notifications for speeding, geofence breach, idling, and SOS events.' },
        { icon: '📍', title: 'Geo-Fencing', desc: 'Create virtual zones and get alerts when vehicles enter or exit defined areas.' },
        { icon: '🛣️', title: 'Route Playback', desc: 'Replay any vehicle\'s complete journey with timestamps and speed data.' },
        { icon: '📋', title: 'Reports & Export', desc: 'Generate detailed PDF/Excel reports for compliance and fleet analysis.' },
      ],
    },
    mobile: {
      title: 'Teletix PRO Mobile',
      subtitle: 'Powerful fleet management in your pocket — iOS & Android',
      icon: '📱',
      externalLink: 'https://play.google.com/store/apps/details?id=com.tlteletix.pro&pcampaignid=web_share',
      features: [
        { icon: '📡', title: 'Live Vehicle Feed', desc: 'Monitor your entire fleet in real-time from anywhere with mobile data.' },
        { icon: '🚨', title: 'Push Notifications', desc: 'Instant push alerts for all critical events — never miss an alert.' },
        { icon: '🎥', title: 'Live Video View', desc: 'Watch live dashcam footage directly from your mobile device.' },
        { icon: '📞', title: 'Driver Communication', desc: 'Two-way communication with drivers through the app.' },
        { icon: '🗺️', title: 'Offline Maps', desc: 'Navigate and track even with limited connectivity using offline map data.' },
        { icon: '⚡', title: 'Quick Commands', desc: 'Send commands to vehicles — immobilize, unlock, request location instantly.' },
      ],
    },
    portal: {
      title: 'Customer Portal',
      subtitle: 'Self-service portal for your clients to manage their own fleets',
      icon: '🏢',
      externalLink: 'http://web.teletix.pk:1010/Account/LogOn/1000',
      features: [
        { icon: '👥', title: 'Multi-Tenant Access', desc: 'Each client gets their own secure login with role-based permissions.' },
        { icon: '🔐', title: 'Secure Login', desc: 'Enterprise-grade security with 2FA and encrypted data transmission.' },
        { icon: '📊', title: 'Custom Reports', desc: 'Clients can generate and download their own fleet reports anytime.' },
        { icon: '💬', title: 'WhatsApp Integration', desc: 'Auto-send alerts and reports to drivers via WhatsApp AI bot.' },
        { icon: '🔧', title: 'Device Management', desc: 'Add, remove, and configure tracking devices through the portal.' },
        { icon: '📈', title: 'Usage Analytics', desc: 'Track portal usage, active devices, and billing data in one place.' },
      ],
    },
  };

  const automationFeatures = [
    { icon: '🤖', title: 'WhatsApp AI Bot', desc: 'Auto-send vehicle alerts, reports, and updates directly to drivers via WhatsApp.' },
    { icon: '📧', title: 'Auto Email Reports', desc: 'Scheduled email reports delivered to managers daily, weekly, or monthly.' },
    { icon: '📱', title: 'SMS Notifications', desc: 'Critical alerts sent via SMS as backup when app notifications are missed.' },
    { icon: '🔗', title: 'API Integration', desc: 'Connect Teletix with your existing ERP, WMS or business software via REST API.' },
  ];

  const active = apps[activeApp];

  return (
    <div className="platform-page">

      {/* Hero */}
      <section
        className="page-hero page-hero-dark"
        style={{
          backgroundImage: `linear-gradient(rgba(5, 8, 18, 0.82), rgba(5, 8, 18, 0.88)), url(${platformHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">TELETIX PLATFORM</span>
            <h1 className="page-hero-title">
              One Platform.
              <span className="gradient-text"> Total Fleet Control.</span>
            </h1>
            <p className="page-hero-desc">
              Web App, Mobile App, and Customer Portal — all connected, all real-time,
              all powered by JimiIoT and Qoho Vision hardware.
            </p>
            <div className="page-hero-stats">
              <div className="page-stat">
                <span className="page-stat-num">3</span>
                <span className="page-stat-label">Apps</span>
              </div>
              <div className="page-stat">
                <span className="page-stat-num">99.9%</span>
                <span className="page-stat-label">Uptime</span>
              </div>
              <div className="page-stat">
                <span className="page-stat-num">24/7</span>
                <span className="page-stat-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Switcher */}
      <section className="platform-apps-section">
        <div className="container">
          <div className="app-switcher">
            {Object.entries(apps).map(([key, app]) => (
              <button
                key={key}
                className={`app-switch-btn ${activeApp === key ? 'app-switch-active' : ''}`}
                onClick={() => setActiveApp(key)}
              >
                <span className="app-switch-icon">{app.icon}</span>
                <span className="app-switch-label">{app.title}</span>
              </button>
            ))}
          </div>

          <div className="app-detail">
            <div className="app-detail-header">
              <div className="app-detail-icon">{active.icon}</div>
              <div>
                <h2 className="app-detail-title">{active.title}</h2>
                <p className="app-detail-subtitle">{active.subtitle}</p>
              </div>

              <a
                href={active.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="app-external-link-btn"
              >
                <span>Open {active.title}</span>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                  <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                </svg>
              </a>
            </div>

            <div className="platform-features-grid">
              {active.features.map((f, i) => (
                <div key={i} className="platform-feature-card">
                  <span className="platform-feature-icon">{f.icon}</span>
                  <h4 className="platform-feature-title">{f.title}</h4>
                  <p className="platform-feature-desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <section className="automation-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">AUTOMATION</span>
            <h2 className="section-title">Smart Integrations & Automation</h2>
            <p className="section-desc">Connect your fleet operations with modern communication channels</p>
          </div>
          <div className="automation-grid">
            {automationFeatures.map((item, i) => (
              <div key={i} className="automation-card">
                <span className="automation-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>See Teletix Platform in Action</h2>
            <p>Book a free live demo and see how Teletix can transform your fleet operations.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">Book Free Demo →</Link>
              <Link to="/our-products" className="btn-secondary">View Hardware</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlatformPage;