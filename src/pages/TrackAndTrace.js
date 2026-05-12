import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const TrackAndTrace = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaq, setOpenFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [counts, setCounts] = useState({ vehicles: 0, clients: 0, uptime: 0, cities: 0 });
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        animateCount('vehicles', 5000);
        animateCount('clients', 300);
        animateCount('uptime', 99);
        animateCount('cities', 25);
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
    { icon: '📍', title: 'Real-Time GPS Tracking', desc: 'Track every vehicle live on an interactive map with second-by-second location updates and historical playback.' },
    { icon: '⚡', title: 'Instant Alerts & Notifications', desc: 'Get notified immediately for speeding, geofence breaches, harsh braking, and unauthorized movement.' },
    { icon: '🗺️', title: 'Geofencing & Zones', desc: 'Create custom zones and receive automatic alerts when vehicles enter or exit designated areas.' },
    { icon: '📊', title: 'Advanced Reporting', desc: 'Generate detailed reports on mileage, idle time, fuel usage, driver behavior, and trip history.' },
    { icon: '🔒', title: 'Remote Immobilization', desc: 'Remotely cut engine power to stop unauthorized vehicle use instantly from your dashboard.' },
    { icon: '🛣️', title: 'Trip History & Replay', desc: 'Replay any vehicle\'s complete journey with timestamps, speed graphs, and stop details.' },
    { icon: '📱', title: 'Mobile App Access', desc: 'Monitor your entire fleet from anywhere using our iOS and Android mobile applications.' },
    { icon: '👤', title: 'Driver Identification', desc: 'Assign drivers to vehicles using RFID or iButton and track individual driver performance.' },
  ];

  const specs = [
    { label: 'Update Frequency', value: 'Every 10 seconds' },
    { label: 'GPS Accuracy', value: '2.5 meters CEP' },
    { label: 'Network Support', value: '4G LTE / 3G / 2G' },
    { label: 'Data Retention', value: 'Up to 1 year' },
    { label: 'Platform Access', value: 'Web + Android + iOS' },
    { label: 'Supported Devices', value: '50+ GPS Models' },
    { label: 'Alert Types', value: '30+ Alert Categories' },
    { label: 'Report Types', value: '20+ Report Templates' },
    { label: 'API Access', value: 'REST API Available' },
    { label: 'Uptime SLA', value: '99.9% Guaranteed' },
    { label: 'Multi-Language', value: 'English & Urdu' },
    { label: 'User Roles', value: 'Multi-level Access' },
  ];

  const applications = [
    { icon: '🚛', title: 'Logistics & Freight', desc: 'Track shipments end-to-end and ensure on-time deliveries.' },
    { icon: '🏗️', title: 'Construction', desc: 'Monitor heavy equipment and prevent unauthorized use on site.' },
    { icon: '🏥', title: 'Healthcare', desc: 'Track ambulances and medical delivery vehicles in real time.' },
    { icon: '🏫', title: 'School Transport', desc: 'Ensure student safety with live bus tracking and parent alerts.' },
    { icon: '🛒', title: 'Retail & Distribution', desc: 'Optimize delivery routes and track your distribution fleet.' },
    { icon: '🏦', title: 'Banking & Finance', desc: 'Secure cash-in-transit vehicles with real-time monitoring.' },
  ];

  const faqs = [
    { q: 'How quickly can I start tracking my vehicles?', a: 'Once the GPS device is installed (takes 30-60 minutes per vehicle), your fleet goes live on the platform instantly. Our team handles everything.' },
    { q: 'Can I track vehicles on my mobile phone?', a: 'Yes! Our platform has dedicated iOS and Android apps. You can track, get alerts, and view reports from anywhere.' },
    { q: 'How many vehicles can I track simultaneously?', a: 'Our platform scales from 1 vehicle to thousands. There is no upper limit — ideal for small businesses and large enterprises alike.' },
    { q: 'What happens if the GPS device loses network signal?', a: 'Data is stored locally on the device and uploaded automatically once connectivity is restored. No data is ever lost.' },
    { q: 'Is my data secure?', a: 'All data is encrypted with AES-256 encryption. Our servers are hosted in secure data centers with 99.9% uptime guarantee.' },
  ];

  return (
    <div className="sol-page">
      {/* HERO */}
      <section className="sol-hero">
        <div className="sol-hero-bg" />
        <div className="sol-container">
          <div className="sol-hero-content">
            <span className="sol-badge">Track & Trace Solution</span>
            <h1 className="sol-hero-title">Complete Real-Time Vehicle<br /><span className="sol-accent">Tracking & Monitoring</span></h1>
            <p className="sol-hero-sub">Know exactly where your vehicles are, where they've been, and how they're being driven — all in real time. Timeline Telematics' Track & Trace solution gives you total fleet visibility from a single dashboard.</p>
            <div className="sol-hero-btns">
              <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Get a Free Demo</button>
              <Link to="/contact" className="sol-btn-outline">Contact Sales</Link>
            </div>
            <div className="sol-hero-tags">
              <span>✓ No Hidden Charges</span>
              <span>✓ Free Installation Support</span>
              <span>✓ 24/7 Local Support</span>
            </div>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-map-mock">
              <div className="sol-map-inner">
                <div className="sol-map-pin pin1">📍<span>Vehicle A</span></div>
                <div className="sol-map-pin pin2">📍<span>Vehicle B</span></div>
                <div className="sol-map-pin pin3">📍<span>Vehicle C</span></div>
                <div className="sol-map-grid" />
              </div>
              <div className="sol-map-info">
                <div className="sol-info-row"><span className="sol-dot green" />Live: 12 Active</div>
                <div className="sol-info-row"><span className="sol-dot red" />Stopped: 3</div>
                <div className="sol-info-row"><span className="sol-dot yellow" />Idle: 2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="sol-stats" ref={statsRef}>
        <div className="sol-container">
          <div className="sol-stats-grid">
            <div className="sol-stat"><h3>{counts.vehicles.toLocaleString()}+</h3><p>Vehicles Tracked</p></div>
            <div className="sol-stat"><h3>{counts.clients}+</h3><p>Active Clients</p></div>
            <div className="sol-stat"><h3>{counts.uptime}%</h3><p>Platform Uptime</p></div>
            <div className="sol-stat"><h3>{counts.cities}+</h3><p>Cities Covered</p></div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sol-overview">
        <div className="sol-container sol-two-col">
          <div className="sol-overview-text">
            <h2>Total Fleet Visibility,<br /><span className="sol-accent">Under Your Control</span></h2>
            <p>Managing a fleet efficiently requires more than just knowing where your vehicles are. You need real-time insights, instant alerts, automated reports, and data-driven decision-making to stay ahead.</p>
            <p>Timeline Telematics' Track & Trace platform combines advanced GPS hardware with a powerful cloud-based dashboard — giving you complete control over every vehicle, driver, and route.</p>
            <ul className="sol-checklist">
              <li>Live map with all vehicles visible simultaneously</li>
              <li>Automated daily, weekly, and monthly reports</li>
              <li>Instant SMS & app notifications for any alert</li>
              <li>Multi-user access with role-based permissions</li>
            </ul>
          </div>
          <div className="sol-overview-cards">
            <div className="sol-mini-card"><div className="sol-mini-icon">⚡</div><div><strong>Instant Setup</strong><p>Go live within hours of installation</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🌐</div><div><strong>Cloud-Based</strong><p>Access from any device, anywhere</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🔔</div><div><strong>Smart Alerts</strong><p>30+ configurable alert types</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">📈</div><div><strong>Analytics</strong><p>20+ detailed report templates</p></div></div>
          </div>
        </div>
      </section>

      {/* TABS */}
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
                  <div className="sol-spec-row" key={i}>
                    <span className="sol-spec-label">{s.label}</span>
                    <span className="sol-spec-value">{s.value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'applications' && (
              <div className="sol-apps-grid">
                {applications.map((a, i) => (
                  <div className="sol-app-card" key={i}>
                    <div className="sol-app-icon">{a.icon}</div>
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
      <section className="sol-cta">
        <div className="sol-container sol-cta-inner">
          <h2>Ready to Track Your Fleet?</h2>
          <p>Join hundreds of Pakistani businesses already using Timeline Telematics to protect and optimize their fleets.</p>
          <div className="sol-cta-btns">
            <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Request Free Demo</button>
            <a href="tel:+923111122883" className="sol-btn-outline">Call: +92 311 1122 883</a>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM MODAL */}
      {showForm && (
        <div className="sol-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="sol-modal" onClick={e => e.stopPropagation()}>
            <button className="sol-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Get a Free Demo</h3>
            <p>Fill in your details and our team will contact you within 24 hours.</p>
            <form className="sol-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowForm(false); }}>
              <input type="text" placeholder="Your Name *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Company Name" />
              <select>
                <option value="">Number of Vehicles</option>
                <option>1-5</option><option>6-20</option><option>21-50</option><option>50+</option>
              </select>
              <textarea placeholder="Tell us about your requirement..." rows={3} />
              <button type="submit" className="sol-btn-primary" style={{width:'100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackAndTrace;