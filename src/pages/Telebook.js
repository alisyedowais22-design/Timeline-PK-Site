import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './SolutionPage.css';

const Telebook = () => {
  const [activeTab, setActiveTab] = useState('features');
  const [openFaq, setOpenFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [counts, setCounts] = useState({ bookings: 0, partners: 0, cities: 0, saving: 0 });
  const statsRef = useRef(null);
  const [counted, setCounted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        animateCount('bookings', 50000);
        animateCount('partners', 200);
        animateCount('cities', 15);
        animateCount('saving', 40);
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
    { icon: '📅', title: 'Online Booking System', desc: 'Let customers book your services online 24/7 through a branded booking portal — no phone calls needed.' },
    { icon: '🗓️', title: 'Appointment Calendar', desc: 'Manage all appointments in a smart calendar view. Avoid double-bookings and scheduling conflicts automatically.' },
    { icon: '🔔', title: 'Automated Reminders', desc: 'Send automatic WhatsApp and SMS reminders to customers before their appointment to reduce no-shows.' },
    { icon: '👥', title: 'Customer Management (CRM)', desc: 'Maintain complete customer profiles with history, preferences, and contact details in one place.' },
    { icon: '💼', title: 'Staff & Resource Management', desc: 'Assign jobs to specific staff members, manage availability, and track workload across your team.' },
    { icon: '📊', title: 'Business Analytics', desc: 'Track bookings, revenue, peak hours, and customer retention with detailed business reports.' },
    { icon: '💳', title: 'Online Payments', desc: 'Accept advance payments and deposits online. Reduce cancellations and secure your revenue upfront.' },
    { icon: '🌐', title: 'Custom Booking Portal', desc: 'Get a branded online booking page with your logo and colors — shareable via link or embeddable on your website.' },
  ];

  const specs = [
    { label: 'Booking Channels', value: 'Web, WhatsApp, SMS' },
    { label: 'Calendar Sync', value: 'Google Calendar, Outlook' },
    { label: 'Reminder Channels', value: 'WhatsApp + SMS' },
    { label: 'Payment Gateways', value: 'JazzCash, EasyPaisa, Card' },
    { label: 'CRM Features', value: 'Full Customer Profiles' },
    { label: 'Staff Management', value: 'Multi-staff Support' },
    { label: 'Reporting', value: 'Daily, Weekly, Monthly' },
    { label: 'Custom Branding', value: 'Logo, Colors, Domain' },
    { label: 'Mobile App', value: 'iOS & Android' },
    { label: 'Notifications', value: 'Real-time Alerts' },
    { label: 'API', value: 'REST API for Integration' },
    { label: 'Support', value: '24/7 Local Support' },
  ];

  const applications = [
    { icon: '🔧', title: 'Auto Service Centers', desc: 'Manage vehicle service appointments, reminders, and technician assignments.' },
    { icon: '💇', title: 'Salons & Spas', desc: 'Online booking for beauty services with staff selection and time slots.' },
    { icon: '🏥', title: 'Clinics & Healthcare', desc: 'Doctor appointment booking with patient history and automated reminders.' },
    { icon: '🚗', title: 'Car Rental', desc: 'Vehicle booking, availability management, and rental tracking.' },
    { icon: '🎓', title: 'Coaching Centers', desc: 'Class scheduling, student bookings, and attendance tracking.' },
    { icon: '🏠', title: 'Home Services', desc: 'Book plumbers, electricians, and cleaners with geo-based scheduling.' },
  ];

  const faqs = [
    { q: 'Can my customers book on WhatsApp?', a: 'Yes! Telebook integrates with WhatsApp so customers can book directly through a WhatsApp conversation — the most convenient way for Pakistani customers.' },
    { q: 'Does it send automatic reminders?', a: 'Yes. Telebook automatically sends WhatsApp and SMS reminders at intervals you set — e.g., 24 hours and 1 hour before the appointment, reducing no-shows significantly.' },
    { q: 'Can I accept online payments?', a: 'Yes. Telebook supports JazzCash, EasyPaisa, credit/debit cards, and bank transfers. You can take full payment or advance deposits at booking.' },
    { q: 'Can multiple staff members have separate schedules?', a: 'Yes. Each staff member has their own availability schedule, and customers can select their preferred staff when booking.' },
    { q: 'Is there a mobile app for managing bookings?', a: 'Yes. You get a dedicated iOS and Android app to manage all bookings, staff, and customer communications on the go.' },
  ];

  return (
    <div className="sol-page">
      <section className="sol-hero sol-hero-purple">
        <div className="sol-hero-bg" />
        <div className="sol-container">
          <div className="sol-hero-content">
            <span className="sol-badge sol-badge-purple">Telebook</span>
            <h1 className="sol-hero-title">Smart Booking & Scheduling<br /><span className="sol-accent-purple">For Every Business</span></h1>
            <p className="sol-hero-sub">Telebook is Pakistan's smart appointment and booking management platform. Let customers book online, send automatic reminders, manage your team's schedule, and grow your business — all from one powerful system.</p>
            <div className="sol-hero-btns">
              <button className="sol-btn-primary sol-btn-purple" onClick={() => setShowForm(true)}>Start Free Trial</button>
              <Link to="/contact" className="sol-btn-outline">Talk to Sales</Link>
            </div>
            <div className="sol-hero-tags">
              <span>✓ Online Booking 24/7</span>
              <span>✓ WhatsApp Reminders</span>
              <span>✓ Online Payments</span>
            </div>
          </div>
          <div className="sol-hero-visual">
            <div className="sol-booking-mock">
              <div className="sol-bk-header">📅 Book an Appointment</div>
              <div className="sol-bk-service">
                <div className="sol-bk-label">Select Service</div>
                <div className="sol-bk-select">Vehicle Service ▾</div>
              </div>
              <div className="sol-bk-calendar">
                <div className="sol-bk-month">March 2026</div>
                <div className="sol-bk-days">
                  {[15,16,17,18,19,20,21].map(d => (
                    <div key={d} className={`sol-bk-day ${d === 18 ? 'selected' : d === 17 ? 'booked' : ''}`}>{d}</div>
                  ))}
                </div>
              </div>
              <div className="sol-bk-slots">
                <div className="sol-bk-slot active">10:00 AM</div>
                <div className="sol-bk-slot">11:30 AM</div>
                <div className="sol-bk-slot booked">2:00 PM</div>
              </div>
              <button className="sol-bk-confirm">Confirm Booking ✓</button>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-stats" ref={statsRef}>
        <div className="sol-container">
          <div className="sol-stats-grid">
            <div className="sol-stat"><h3>{counts.bookings.toLocaleString()}+</h3><p>Bookings Managed</p></div>
            <div className="sol-stat"><h3>{counts.partners}+</h3><p>Business Partners</p></div>
            <div className="sol-stat"><h3>{counts.cities}+</h3><p>Cities Active</p></div>
            <div className="sol-stat"><h3>Up to {counts.saving}%</h3><p>No-Show Reduction</p></div>
          </div>
        </div>
      </section>

      <section className="sol-overview">
        <div className="sol-container sol-two-col">
          <div className="sol-overview-text">
            <h2>Stop Managing Bookings<br /><span className="sol-accent">Manually on WhatsApp</span></h2>
            <p>Most Pakistani businesses still manage appointments through manual WhatsApp messages, phone calls, and paper registers. This leads to double bookings, missed appointments, and wasted staff time.</p>
            <p>Telebook automates your entire booking workflow — from online scheduling to automatic reminders — so you can focus on delivering great service instead of managing schedules.</p>
            <ul className="sol-checklist">
              <li>Reduce no-shows by up to 40% with automated reminders</li>
              <li>Accept bookings 24/7 even when your office is closed</li>
              <li>Eliminate double-bookings with smart calendar management</li>
              <li>Get paid online at the time of booking</li>
            </ul>
          </div>
          <div className="sol-overview-cards">
            <div className="sol-mini-card"><div className="sol-mini-icon">📅</div><div><strong>Smart Calendar</strong><p>No conflicts, no double bookings</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">🔔</div><div><strong>Auto Reminders</strong><p>WhatsApp + SMS before every booking</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">💳</div><div><strong>Online Payments</strong><p>JazzCash, EasyPaisa, Cards</p></div></div>
            <div className="sol-mini-card"><div className="sol-mini-icon">📊</div><div><strong>Analytics</strong><p>Track revenue and trends</p></div></div>
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
          <h2>Automate Your Bookings Today</h2>
          <p>Start managing appointments smarter — reduce no-shows, accept online payments, and grow your business with Telebook.</p>
          <div className="sol-cta-btns">
            <button className="sol-btn-primary" onClick={() => setShowForm(true)}>Start Free Trial</button>
            <a href="tel:+923111122883" className="sol-btn-outline">Call: +92 311 1122 883</a>
          </div>
        </div>
      </section>

      {showForm && (
        <div className="sol-modal-overlay" onClick={() => setShowForm(false)}>
          <div className="sol-modal" onClick={e => e.stopPropagation()}>
            <button className="sol-modal-close" onClick={() => setShowForm(false)}>×</button>
            <h3>Start Your Free Trial</h3>
            <p>Get started with Telebook and see the difference in your first week.</p>
            <form className="sol-form" onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); setShowForm(false); }}>
              <input type="text" placeholder="Your Name *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <input type="email" placeholder="Email Address" />
              <input type="text" placeholder="Business Name *" required />
              <select><option value="">Business Type</option><option>Auto Service</option><option>Salon / Spa</option><option>Healthcare</option><option>Car Rental</option><option>Education</option><option>Other</option></select>
              <textarea placeholder="Any specific requirements?" rows={3} />
              <button type="submit" className="sol-btn-primary" style={{width:'100%'}}>Start Free Trial</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Telebook;