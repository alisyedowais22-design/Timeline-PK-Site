import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const AutoCall = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaq, setOpenFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [counts, setCounts] = useState({ calls: 0, rate: 0, clients: 0, saving: 0 });
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        animateCount('calls', 500000);
        animateCount('rate', 95);
        animateCount('clients', 120);
        animateCount('saving', 70);
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
    { icon: '📞', title: 'Automated Voice Calls', desc: 'Send pre-recorded voice messages to thousands of customers simultaneously — in Urdu, English, or any regional language.' },
    { icon: '🔢', title: 'IVR (Interactive Voice Response)', desc: 'Let customers respond to calls using their keypad — collect feedback, confirm appointments, or route inquiries automatically.' },
    { icon: '📋', title: 'Campaign Management', desc: 'Create, schedule, and manage multiple calling campaigns from a single dashboard with full control over timing and targets.' },
    { icon: '📊', title: 'Call Analytics & Reports', desc: 'Track call delivery rates, answered calls, response rates, and customer reactions with detailed campaign reports.' },
    { icon: '🎙️', title: 'Custom Voice Recording', desc: 'Use your own voice recording or let our team create professional voice messages in Urdu and English for your campaigns.' },
    { icon: '⏰', title: 'Scheduled Campaigns', desc: 'Schedule calls to go out at the best time — morning reminders, evening follow-ups, or weekly broadcasts on autopilot.' },
    { icon: '🔗', title: 'System Integration', desc: 'Connect AutoCall with your CRM, ERP, or billing system via API to trigger calls automatically based on events.' },
    { icon: '🛡️', title: 'DNC Compliance', desc: 'Built-in Do Not Call list management to ensure all campaigns comply with regulations and respect customer preferences.' },
  ];

  const specs = [
    { label: 'Call Capacity', value: 'Up to 10,000 calls/hour' },
    { label: 'Language Support', value: 'Urdu, English, Regional' },
    { label: 'IVR Levels', value: 'Multi-level IVR Menu' },
    { label: 'Call Recording', value: 'Full Recording & Playback' },
    { label: 'Scheduling', value: 'Date, Time & Timezone' },
    { label: 'Retries', value: 'Auto-retry on No Answer' },
    { label: 'Analytics', value: 'Real-time Dashboard' },
    { label: 'Integration', value: 'REST API + Webhooks' },
    { label: 'Caller ID', value: 'Custom Number Support' },
    { label: 'Compliance', value: 'DNC List Management' },
    { label: 'Reports', value: 'Exportable PDF/Excel' },
    { label: 'Support', value: '24/7 Local Team' },
  ];

  const applications = [
    { icon: '💰', title: 'Loan & Payment Reminders', desc: 'Automatically remind customers about upcoming or overdue payments.' },
    { icon: '🏥', title: 'Appointment Reminders', desc: 'Reduce no-shows for clinics, labs, and service centers with automated call reminders.' },
    { icon: '🛒', title: 'Order & Delivery Updates', desc: 'Notify customers about order confirmation, dispatch, and delivery status.' },
    { icon: '📣', title: 'Marketing Campaigns', desc: 'Broadcast promotional messages to your entire customer database in minutes.' },
    { icon: '🗳️', title: 'Surveys & Feedback', desc: 'Collect customer feedback using IVR — press 1 for satisfied, press 2 for not satisfied.' },
    { icon: '🚨', title: 'Emergency Alerts', desc: 'Instantly notify customers, staff, or stakeholders during urgent situations.' },
  ];

  const faqs = [
    { q: 'How many calls can AutoCall make simultaneously?', a: 'AutoCall can make up to 10,000 calls per hour simultaneously. For high-volume campaigns, we can scale further based on your requirements.' },
    { q: 'Can I record messages in Urdu?', a: 'Absolutely. We support Urdu, English, and regional languages. You can record your own message or our professional voice artists can record it for you.' },
    { q: 'What happens if the customer doesn\'t answer?', a: 'AutoCall automatically retries unanswered calls. You can configure the number of retries and time intervals between attempts.' },
    { q: 'Can customers respond to the call?', a: 'Yes! With IVR (Interactive Voice Response), customers can press keys to confirm appointments, provide feedback, or be transferred to a live agent.' },
    { q: 'How quickly can I launch a campaign?', a: 'You can launch a campaign within minutes once your contact list and voice message are ready. Our team can assist with setup and recording on the same day.' },
  ];

  return (
    <div className="sol-page">
      <section className="sol-hero sol-hero-orange">
        <div className="sol-hero-bg" />
        <div className="sol-container">
          <div className="sol-hero-content">
            <span className="sol-badge sol-badge-orange">AutoCall</span>
            <h1 className="sol-hero-title">Automated Voice Calling<br /><span className="sol-accent-orange">At Massive Scale</span></h1>
            <p className="sol-hero-sub">AutoCall by Timeline Telematics lets you send automated voice messages to thousands of customers instantly — payment reminders, appointment alerts, marketing campaigns, and emergency notifications — all on autopilot.</p>
            <div className="sol-hero-btns">
              <button className="sol-btn-primary sol-btn-orange" onClick={() => setShowForm(true)}>Get a Free Demo</button>
              <Link to="/contact" className="sol-btn-outline">Contact Sales</Link>
            </div>
            <div className="sol-hero-tags">
              <span>✓ 10,000 Calls/Hour</span>
              <span>✓ Urdu & English Voice</span>
              <span>✓ IVR Responses</span>
            </div>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-call-mock">
              <div className="sol-call-header">📞 AutoCall Campaign</div>
              <div className="sol-call-status">
                <div className="sol-call-row">
                  <span className="sol-call-label">Total Contacts</span>
                  <span className="sol-call-val">5,000</span>
                </div>
                <div className="sol-call-row">
                  <span className="sol-call-label">Calls Sent</span>
                  <span className="sol-call-val green">3,842</span>
                </div>
                <div className="sol-call-row">
                  <span className="sol-call-label">Answered</span>
                  <span className="sol-call-val blue">3,122</span>
                </div>
                <div className="sol-call-row">
                  <span className="sol-call-label">Delivery Rate</span>
                  <span className="sol-call-val orange">95.2%</span>
                </div>
              </div>
              <div className="sol-call-progress">
                <div className="sol-call-bar"><div className="sol-call-fill" style={{width:'76%'}} /></div>
                <span>76% Complete</span>
              </div>
              <div className="sol-call-ivr">
                <div className="sol-ivr-label">IVR Responses</div>
                <div className="sol-ivr-row"><span>Press 1 - Confirmed</span><span className="green">1,820</span></div>
                <div className="sol-ivr-row"><span>Press 2 - Reschedule</span><span className="orange">432</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-stats" ref={statsRef}>
        <div className="sol-container">
          <div className="sol-stats-grid">
            <div className="sol-stat"><h3>{counts.calls.toLocaleString()}+</h3><p>Calls Delivered Monthly</p></div>
            <div className="sol-stat"><h3>{counts.rate}%</h3><p>Average Delivery Rate</p></div>
            <div className="sol-stat"><h3>{counts.clients}+</h3><p>Active Clients</p></div>
            <div className="sol-stat"><h3>Up to {counts.saving}%</h3><p>Cost Savings vs Manual</p></div>
          </div>
        </div>
      </section>

      <section className="sol-overview">
        <div className="sol-container sol-two-col">
          <div className="sol-overview-text">
            <h2>Replace Manual Calling<br /><span className="sol-accent">With Intelligent Automation</span></h2>
            <p>Hiring a call center team to make thousands of reminder or notification calls is expensive, slow, and inconsistent. AutoCall replaces manual calling with a fully automated system that delivers your message to every contact — perfectly, every time.</p>
            <p>Whether you're collecting loan payments, reminding patients about appointments, or running a marketing campaign, AutoCall delivers your voice message at scale — in Urdu, English, or any language you choose.</p>
            <ul className="sol-checklist">
              <li>Reach 5,000 customers in minutes, not days</li>
              <li>Reduce calling costs by up to 70% vs manual teams</li>
              <li>Consistent, professional message every single time</li>
              <li>IVR responses give you actionable customer data</li>
            </ul>
          </div>
          <div className="sol-overview-cards">
            <div className="sol-mini-card"><div className="sol-mini-icon">⚡</div><div><strong>Instant Broadcast</strong><p>5,000 calls in minutes</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🎙️</div><div><strong>Professional Voice</strong><p>Urdu & English recordings</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🔢</div><div><strong>IVR Responses</strong><p>Collect customer input</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">📊</div><div><strong>Live Analytics</strong><p>Real-time campaign tracking</p></div></div>
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
          <h2>Start Calling Your Customers at Scale</h2>
          <p>Automate your outreach, reduce costs, and never miss a customer contact again with AutoCall.</p>
          <div className="sol-cta-btns">
            <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Get a Free Demo</button>
            <a href="tel:+923111122883" className="sol-btn-outline">Call: +92 311 1122 883</a>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="sol-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="sol-modal" onClick={e => e.stopPropagation()}>
            <button className="sol-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Get AutoCall Demo</h3>
            <p>Our team will walk you through a live demo customized for your use case.</p>
            <form className="sol-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowForm(false); }}>
              <input type="text" placeholder="Your Name *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Company Name *" required />
              <select><option value="">Use Case</option><option>Payment Reminders</option><option>Appointment Reminders</option><option>Marketing Campaigns</option><option>Emergency Alerts</option><option>Surveys</option><option>Other</option></select>
              <select><option value="">Monthly Call Volume</option><option>Under 5,000</option><option>5,000 - 50,000</option><option>50,000 - 200,000</option><option>200,000+</option></select>
              <button type="submit" className="sol-btn-primary" style={{width:'100%'}}>Submit Request</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoCall;