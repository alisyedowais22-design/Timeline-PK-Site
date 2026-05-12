import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const WhatsAppAPI = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaq, setOpenFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [counts, setCounts] = useState({ msgs: 0, open: 0, clients: 0, time: 0 });
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        animateCount('msgs', 1000000);
        animateCount('open', 98);
        animateCount('clients', 150);
        animateCount('time', 60);
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
    { icon: '💬', title: 'Bulk WhatsApp Messaging', desc: 'Send thousands of messages simultaneously to your customer base with personalized content, images, and documents.' },
    { icon: '🤖', title: 'Automated Chatbot', desc: 'Deploy AI-powered chatbots to handle customer queries 24/7 — no human needed for routine questions.' },
    { icon: '🔔', title: 'Transactional Alerts', desc: 'Send order confirmations, delivery updates, payment reminders, and alerts directly to customers via WhatsApp.' },
    { icon: '👥', title: 'Two-Way Communication', desc: 'Enable real-time two-way conversations between your business and customers through a centralized inbox.' },
    { icon: '📎', title: 'Rich Media Messages', desc: 'Send images, PDFs, videos, location pins, and interactive buttons — go beyond plain text messaging.' },
    { icon: '🏷️', title: 'WhatsApp Business Profile', desc: 'Get a verified green tick WhatsApp Business account with your logo, description, and business details.' },
    { icon: '🔗', title: 'CRM & System Integration', desc: 'Integrate with your existing CRM, ERP, or e-commerce platform via our REST API for seamless workflows.' },
    { icon: '📊', title: 'Analytics & Reporting', desc: 'Track message delivery, open rates, response rates, and campaign performance from a centralized dashboard.' },
  ];

  const specs = [
    { label: 'API Type', value: 'Official WhatsApp Business API' },
    { label: 'Message Throughput', value: 'Up to 100k msgs/day' },
    { label: 'Media Support', value: 'Image, Video, PDF, Audio' },
    { label: 'Chatbot', value: 'AI-Powered + Rule-Based' },
    { label: 'Template Messages', value: 'Pre-approved Templates' },
    { label: 'Inbox', value: 'Multi-agent Shared Inbox' },
    { label: 'Integration', value: 'REST API + Webhooks' },
    { label: 'Number Type', value: 'Dedicated Business Number' },
    { label: 'Green Tick', value: 'Verification Available' },
    { label: 'Analytics', value: 'Real-time Dashboard' },
    { label: 'Language Support', value: 'English, Urdu & More' },
    { label: 'Compliance', value: 'WhatsApp Official Policy' },
  ];

  const applications = [
    { icon: '🛒', title: 'E-commerce', desc: 'Order updates, delivery tracking, and abandoned cart recovery via WhatsApp.' },
    { icon: '🏥', title: 'Healthcare', desc: 'Appointment reminders, lab reports, and patient communication made easy.' },
    { icon: '🏦', title: 'Banking & Finance', desc: 'Transaction alerts, OTPs, loan updates, and customer support.' },
    { icon: '🚗', title: 'Automotive', desc: 'Service reminders, vehicle updates, and test drive booking via WhatsApp.' },
    { icon: '🎓', title: 'Education', desc: 'Fee reminders, result notifications, and parent communication.' },
    { icon: '🏗️', title: 'Real Estate', desc: 'Property alerts, document collection, and client follow-ups.' },
  ];

  const faqs = [
    { q: 'Is this the official WhatsApp Business API?', a: 'Yes. We use the official Meta-approved WhatsApp Business API. Your messages are delivered through the official channel with full compliance.' },
    { q: 'Can I send bulk promotional messages?', a: 'Yes, using pre-approved message templates. Promotional broadcasts can be sent to opted-in customers. Our team helps get your templates approved quickly.' },
    { q: 'Do my customers need to install anything?', a: 'No. Messages are received directly in the regular WhatsApp app your customers already use. No new app required.' },
    { q: 'Can I integrate it with my existing software?', a: 'Yes. Our REST API allows integration with any CRM, ERP, e-commerce platform, or custom software. We also offer ready-made integrations.' },
    { q: 'How long does it take to get started?', a: 'Setup typically takes 2-5 business days, including WhatsApp Business account verification and API configuration. Our team handles everything.' },
  ];

  return (
    <div className="sol-page">
      <section className="sol-hero sol-hero-green">
        <div className="sol-hero-bg" />
        <div className="sol-container">
          <div className="sol-hero-content">
            <span className="sol-badge sol-badge-green">WhatsApp Business API</span>
            <h1 className="sol-hero-title">Connect With Customers<br /><span className="sol-accent-green">On WhatsApp at Scale</span></h1>
            <p className="sol-hero-sub">Leverage the world's most popular messaging platform for your business. Send bulk messages, automate customer support, and run marketing campaigns through the official WhatsApp Business API — powered by Timeline Telematics.</p>
            <div className="sol-hero-btns">
              <button className="sol-btn-primary sol-btn-green" onClick={() => setShowForm(true)}>Get Started Today</button>
              <Link to="/contact" className="sol-btn-outline">Talk to Sales</Link>
            </div>
            <div className="sol-hero-tags">
              <span>✓ Official WhatsApp API</span>
              <span>✓ Green Tick Verification</span>
              <span>✓ 98% Open Rate</span>
            </div>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-whatsapp-mock">
              <div className="sol-wa-header">
                <div className="sol-wa-avatar">TT</div>
                <div>
                  <div className="sol-wa-name">Timeline Telematics <span className="sol-wa-tick">✓</span></div>
                  <div className="sol-wa-status">Business Account</div>
                </div>
              </div>
              <div className="sol-wa-messages">
                <div className="sol-wa-msg received">👋 Welcome! How can we help you today?</div>
                <div className="sol-wa-msg sent">I need info about GPS tracking</div>
                <div className="sol-wa-msg received">Great! We offer real-time GPS tracking for vehicles. Would you like a free demo? 📍</div>
                <div className="sol-wa-btns-row">
                  <button className="sol-wa-btn">Yes, Book Demo</button>
                  <button className="sol-wa-btn">Get Pricing</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-stats" ref={statsRef}>
        <div className="sol-container">
          <div className="sol-stats-grid">
            <div className="sol-stat"><h3>{counts.msgs.toLocaleString()}+</h3><p>Messages Sent Monthly</p></div>
            <div className="sol-stat"><h3>{counts.open}%</h3><p>Average Open Rate</p></div>
            <div className="sol-stat"><h3>{counts.clients}+</h3><p>Business Clients</p></div>
            <div className="sol-stat"><h3>{counts.time}s</h3><p>Avg. Response Time</p></div>
          </div>
        </div>
      </section>

      <section className="sol-overview">
        <div className="sol-container sol-two-col">
          <div className="sol-overview-text">
            <h2>Why WhatsApp?<br /><span className="sol-accent">Pakistan's #1 Messaging App</span></h2>
            <p>With over 50 million WhatsApp users in Pakistan, your customers are already there. Unlike email (20% open rate) or SMS, WhatsApp messages enjoy a 98% open rate — making it the most effective communication channel for your business.</p>
            <p>Timeline Telematics provides the official WhatsApp Business API with full setup, support, and management — so you can focus on your customers, not the technology.</p>
            <ul className="sol-checklist">
              <li>98% message open rate vs 20% for email</li>
              <li>Reach customers on their preferred platform</li>
              <li>Automate repetitive communication workflows</li>
              <li>Reduce customer support costs by up to 60%</li>
            </ul>
          </div>
          <div className="sol-overview-cards">
            <div className="sol-mini-card"><div className="sol-mini-icon">✅</div><div><strong>Official API</strong><p>Meta-approved, fully compliant</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🤖</div><div><strong>AI Chatbot</strong><p>24/7 automated responses</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">📢</div><div><strong>Bulk Messaging</strong><p>100k+ messages per day</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🔗</div><div><strong>API Integration</strong><p>Connect to any system</p></div></div>
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
                {features.map((f, i) => <div className="sol-feature-card" key={i}><div className="sol-feature-icon">{f.icon}</div><h4>{f.title}</h4><p>{f.desc}</p></div>)}
              </div>
            )}
            {activeTab === 'specifications' && (
              <div className="sol-specs-grid">
                {specs.map((s, i) => <div className="sol-spec-row" key={i}><span className="sol-spec-label">{s.label}</span><span className="sol-spec-value">{s.value}</span></div>)}
              </div>
            )}
            {activeTab === 'applications' && (
              <div className="sol-apps-grid">
                {applications.map((a, i) => <div className="sol-app-card" key={i}><div className="sol-app-icon">{a.icon}</div><h4>{a.title}</h4><p>{a.desc}</p></div>)}
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
          <h2>Start Messaging Your Customers on WhatsApp</h2>
          <p>Set up your official WhatsApp Business account and start reaching customers where they already are.</p>
          <div className="sol-cta-btns">
            <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Get Started Today</button>
            <a href="tel:+923111122883" className="sol-btn-outline">Call: +92 311 1122 883</a>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="sol-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="sol-modal" onClick={e => e.stopPropagation()}>
            <button className="sol-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Get WhatsApp API Setup</h3>
            <p>Our team will help you get started with the official WhatsApp Business API.</p>
            <form className="sol-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowForm(false); }}>
              <input type="text" placeholder="Your Name *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Business Name *" required />
              <select><option value="">Monthly Message Volume</option><option>Under 10,000</option><option>10,000 - 50,000</option><option>50,000 - 200,000</option><option>200,000+</option></select>
              <textarea placeholder="Describe your use case..." rows={3} />
              <button type="submit" className="sol-btn-primary" style={{width:'100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppAPI;