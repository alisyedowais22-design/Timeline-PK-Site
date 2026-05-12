import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const TeletixPro = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaq, setOpenFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [counts, setCounts] = useState({ routes: 0, savings: 0, reports: 0, alerts: 0 });
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        animateCount('routes', 500);
        animateCount('savings', 30);
        animateCount('reports', 50);
        animateCount('alerts', 75);
      }
    }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [counted]);

  const animateCount = (key, target) => {
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      setCounts(prev => ({ ...prev, [key]: Math.floor(start) }));
    }, 25);
  };

  const features = [
    { icon: '🤖', title: 'AI-Powered Analytics', desc: 'Machine learning algorithms analyze fleet data to predict maintenance needs, optimize routes, and identify inefficiencies automatically.' },
    { icon: '⛽', title: 'Fuel Management System', desc: 'Monitor fuel consumption in real time, detect fuel theft, and reduce fuel costs by up to 25% with intelligent fuel analytics.' },
    { icon: '👨‍✈️', title: 'Driver Behavior Scoring', desc: 'Score every driver on speed, braking, cornering, and idling. Identify risky drivers and coach them with detailed behavior reports.' },
    { icon: '🔧', title: 'Predictive Maintenance', desc: 'Get alerts before breakdowns happen. Track engine health, service intervals, and vehicle diagnostics proactively.' },
    { icon: '🗺️', title: 'Smart Route Optimization', desc: 'Automatically calculate the most efficient routes, reduce travel time, lower fuel consumption, and improve delivery timelines.' },
    { icon: '📋', title: 'Job & Task Management', desc: 'Assign jobs to drivers, track task completion, manage delivery stops, and get real-time ETAs for every route.' },
    { icon: '🌡️', title: 'Temperature Monitoring', desc: 'Essential for cold-chain logistics. Monitor cargo temperature in real time and get alerts for any deviations.' },
    { icon: '📊', title: 'Executive Dashboard', desc: 'C-suite ready dashboards with KPIs, fleet health scores, cost analysis, and trend reports — all in one view.' },
  ];

  const specs = [
    { label: 'Analytics Engine', value: 'AI / ML Powered' },
    { label: 'Dashboard Refresh', value: 'Real-time (live)' },
    { label: 'Report Formats', value: 'PDF, Excel, CSV' },
    { label: 'Alert Types', value: '75+ Categories' },
    { label: 'Driver Scoring', value: 'Automated Daily Score' },
    { label: 'Fuel Analytics', value: 'Sensor + CAN Bus' },
    { label: 'Maintenance Alerts', value: 'Predictive + Scheduled' },
    { label: 'Route Optimization', value: 'Multi-stop AI Routing' },
    { label: 'Job Management', value: 'Full Workflow Module' },
    { label: 'Temperature', value: 'Multi-sensor Support' },
    { label: 'Integration', value: 'ERP / CRM via API' },
    { label: 'Data Export', value: 'Automated Scheduling' },
  ];

  const applications = [
    { icon: '🚚', title: 'Large Fleet Operators', desc: 'Manage 50+ vehicles with enterprise-grade tools and analytics.' },
    { icon: '❄️', title: 'Cold Chain Logistics', desc: 'Ensure product integrity with continuous temperature monitoring.' },
    { icon: '🏭', title: 'Manufacturing', desc: 'Track raw materials, production vehicles, and outbound delivery.' },
    { icon: '⛽', title: 'Fuel Distributors', desc: 'Prevent fuel theft and optimize delivery routes for fuel tankers.' },
    { icon: '🛒', title: 'E-commerce & Retail', desc: 'Streamline last-mile delivery with job management and ETAs.' },
    { icon: '🏗️', title: 'Heavy Industry', desc: 'Monitor equipment, track utilization, and prevent unauthorized use.' },
  ];

  const faqs = [
    { q: 'How is Teletix Pro different from basic GPS tracking?', a: 'Teletix Pro goes far beyond location tracking. It includes AI analytics, fuel management, driver scoring, predictive maintenance, route optimization, and job management — a complete fleet operations platform.' },
    { q: 'Can it integrate with my existing ERP or CRM?', a: 'Yes. Teletix Pro offers a full REST API that integrates with SAP, Oracle, custom ERP systems, and most CRM platforms.' },
    { q: 'Does it support fuel sensor integration?', a: 'Absolutely. It supports both fuel level sensors and CAN bus fuel data, giving you accurate consumption reports and theft detection.' },
    { q: 'Can I get custom reports for my business?', a: 'Yes. Our team can build custom report templates tailored to your specific KPIs, compliance requirements, and operational needs.' },
    { q: 'Is there a mobile app for drivers?', a: 'Yes. Drivers get a dedicated app to view assigned jobs, navigate routes, log activity, and communicate with dispatch — all in one place.' },
  ];

  return (
    <div className="sol-page">
      <section className="sol-hero sol-hero-blue">
        <div className="sol-hero-bg" />
        <div className="sol-container">
          <div className="sol-hero-content">
            <span className="sol-badge">Teletix Pro</span>
            <h1 className="sol-hero-title">Enterprise Fleet Management<br /><span className="sol-accent">Powered by AI</span></h1>
            <p className="sol-hero-sub">Teletix Pro is Timeline Telematics' most advanced fleet management platform — combining AI analytics, fuel monitoring, driver scoring, and smart route optimization into one powerful system built for serious fleet operators.</p>
            <div className="sol-hero-btns">
              <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Get a Free Demo</button>
              <Link to="/contact" className="sol-btn-outline">Contact Sales</Link>
            </div>
            <div className="sol-hero-tags">
              <span>✓ AI-Powered Analytics</span>
              <span>✓ 75+ Alert Types</span>
              <span>✓ ERP Integration</span>
            </div>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-screenshot-container">
              <img 
                src="/products/teletixscreenshot.png" 
                alt="Teletix Pro Dashboard Screenshot"
                className="sol-screenshot-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sol-stats" ref={statsRef}>
        <div className="sol-container">
          <div className="sol-stats-grid">
            <div className="sol-stat"><h3>{counts.routes}+</h3><p>Routes Optimized Daily</p></div>
            <div className="sol-stat"><h3>Up to {counts.savings}%</h3><p>Fuel Cost Reduction</p></div>
            <div className="sol-stat"><h3>{counts.reports}+</h3><p>Report Templates</p></div>
            <div className="sol-stat"><h3>{counts.alerts}+</h3><p>Alert Categories</p></div>
          </div>
        </div>
      </section>

      <section className="sol-overview">
        <div className="sol-container sol-two-col">
          <div className="sol-overview-text">
            <h2>Not Just Tracking —<br /><span className="sol-accent">Complete Fleet Intelligence</span></h2>
            <p>Teletix Pro transforms raw fleet data into actionable intelligence. From predicting a vehicle breakdown before it happens to coaching a driver on aggressive braking — every feature is designed to reduce costs and improve performance.</p>
            <p>Built for Pakistani businesses operating large fleets, Teletix Pro gives you the same enterprise-grade tools used by leading logistics companies worldwide.</p>
            <ul className="sol-checklist">
              <li>AI detects fuel theft and irregularities automatically</li>
              <li>Predictive maintenance reduces breakdown costs by 40%</li>
              <li>Route optimization saves up to 30% on fuel costs</li>
              <li>Driver scoring improves safety and reduces accidents</li>
            </ul>
          </div>
          <div className="sol-overview-cards">
            <div className="sol-mini-card"><div className="sol-mini-icon">🤖</div><div><strong>AI Analytics</strong><p>Machine learning insights</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">⛽</div><div><strong>Fuel Intelligence</strong><p>Theft detection & savings</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🔧</div><div><strong>Predictive Maintenance</strong><p>Stop breakdowns before they happen</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">📋</div><div><strong>Job Management</strong><p>Full delivery workflow</p></div></div>
          </div>
        </div>
      </section>

      <section className="sol-tabs-section">
        <div className="sol-container">
          <div className="sol-tabs">
            {['features', 'specifications', 'applications'].map(tab => (
              <button key={tab} className={`sol-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="sol-tab-content">
            {activeTab === 'features' && (
              <div className="sol-features-grid">
                {features.map((f, i) => (
                  <div className="sol-feature-card" key={i}>
                    <div className="sol-feature-icon">{f.icon}</div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="sol-specs-grid">
                {specs.map((s, i) => (
                  <div className="sol-spec-row" key={i}><span className="sol-spec-label">{s.label}</span><span className="sol-spec-value">{s.value}</span></div>
                ))}
              </div>
            )}
            {activeTab === 'applications' && (
              <div className="sol-apps-grid">
                {applications.map((a, i) => (
                  <div className="sol-app-card" key={i}><div className="sol-app-icon">{a.icon}</div><h4>{a.title}</h4><p>{a.desc}</p></div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="sol-faq">
        <div className="sol-container sol-faq-inner">
          <h2>Frequently Asked <span className="sol-accent">Questions</span></h2>
          <div className="sol-faq-list">
            {faqs.map((f, i) => (
              <div className={`sol-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                <button className="sol-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  {f.q}<span className="sol-faq-arrow">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && <div className="sol-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sol-cta">
        <div className="sol-container sol-cta-inner">
          <h2>Ready to Upgrade Your Fleet Operations?</h2>
          <p>See how Teletix Pro can transform your fleet management with AI-powered intelligence.</p>
          <div className="sol-cta-btns">
            <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Request Free Demo</button>
            <a href="tel:+923111122883" className="sol-btn-outline">Call: +92 311 1122 883</a>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="sol-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="sol-modal" onClick={e => e.stopPropagation()}>
            <button className="sol-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Get Teletix Pro Demo</h3>
            <p>Our enterprise team will set up a personalized demo for your fleet.</p>
            <form className="sol-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowForm(false); }}>
              <input type="text" placeholder="Your Name *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Company Name" />
              <select><option value="">Fleet Size</option><option>10-50</option><option>51-100</option><option>101-500</option><option>500+</option></select>
              <textarea placeholder="Tell us about your fleet requirements..." rows={3} />
              <button type="submit" className="sol-btn-primary" style={{width:'100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeletixPro;