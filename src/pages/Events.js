import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Events = () => {
  const pastEvents = [
    {
      id: 1,
      title: "IoT Summit 2025 Pakistan",
      date: "March 15-16, 2025",
      location: "Pearl Continental Hotel Karachi",
      type: "CONFERENCE",
      eventImage: "/iotsummit2025/iot10.jpg",
      attendees: "500+",
      speakers: "50+",
      exhibitors: "100+",
      description: "Pakistan's largest IoT & Telematics conference featuring JimiIoT and Qoho Vision product launches, live demonstrations, and networking sessions with industry leaders.",
      detailLink: "/events/iot-summit-2025"
    },
    {
      id: 2,
      title: "Jimi IoT Product Display at PTCL",
      date: "May 5, 2025",
      location: "Karachi, Pakistan",
      type: "PRODUCT DISPLAY",
      eventImage: "/ptclevent2025/ptcl4.jpg",
      attendees: "150+",
      speakers: "15+",
      exhibitors: "30+",
      description: "Exclusive networking event for fleet owners showcasing real-world case studies, ROI success stories, and one-on-one consultations with telematics experts.",
      detailLink: "/events/ptcl-connect-2025"
    },
    {
      id: 3,
      title: "ITCN 2025",
      date: "September 10-12, 2025",
      location: "Karachi Expo Centre, Pakistan",
      type: "TECH EXPO",
      eventImage: "/itcn2025/itcn3.jpg",
      attendees: "800+",
      speakers: "80+",
      exhibitors: "200+",
      description: "Pakistan's premier technology exhibition featuring cutting-edge telematics solutions, fleet management innovations, and next-generation GPS tracking systems with live demonstrations and expert panels.",
      detailLink: "/events/itcn-asia-2025"
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* HERO WITH VIDEO */}
        <section className="events-hero-video">
          <div className="hero-background-video">
            <iframe
              src="https://www.youtube.com/embed/2XpmfZZI4Wc?autoplay=1&mute=1&loop=1&playlist=2XpmfZZI4Wc&controls=0&showinfo=0&rel=0&playsinline=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100vw',
                height: '56.25vw',
                minHeight: '100%',
                minWidth: '177.77vh',
                border: 'none',
                pointerEvents: 'none',
              }}
            />
          </div>
          
          <div className="container hero-video-content">
            <div className="events-hero-content">
              <div className="section-badge-outer" style={{ marginBottom: 20 }}>
                <span className="section-badge-text">OUR EVENTS</span>
              </div>

              <h1 className="events-hero-title">
                Experience the Power of{" "}
                <span style={{ color: "red" }}>Smart Fleet Solutions</span>
              </h1>

              <p className="events-hero-desc">
                Explore next-generation telematics, real-time tracking technologies, and
                innovative fleet management solutions designed for modern businesses.
              </p>

              <div className="events-hero-stats">
                <div className="eh-stat">
                  <span className="eh-val">15+</span>
                  <span className="eh-label">Live Tech Events</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">3000+</span>
                  <span className="eh-label">Professionals Connected</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">75+</span>
                  <span className="eh-label">Technology Experts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED EVENT WITH VIDEO */}
        <section className="featured-event-section">
          <div className="container">
            <div className="featured-event-card-video">
              <div className="featured-event-badge">🔥 Recent Event</div>
              
              <div className="featured-event-content-video">
                <div className="featured-event-text">
                  <h2 className="featured-event-title">IOT Summit Pakistan 2025</h2>
                  <p className="featured-event-tagline">
                    Pakistan's Largest IoT & Telematics Conference
                  </p>
                  <div className="featured-event-meta">
                    <div className="fem-item">
                      <span className="fem-icon">📅</span>
                      <div>
                        <div className="fem-label">DATE</div>
                        <div className="fem-value">March 15-16, 2025</div>
                      </div>
                    </div>
                    <div className="fem-item">
                      <span className="fem-icon">📍</span>
                      <div>
                        <div className="fem-label">VENUE</div>
                        <div className="fem-value">PC Hotel Karachi</div>
                      </div>
                    </div>
                    <div className="fem-item">
                      <span className="fem-icon">👥</span>
                      <div>
                        <div className="fem-label">Total</div>
                        <div className="fem-value">500+ Attendees</div>
                      </div>
                    </div>
                  </div>
                  <div className="featured-event-highlights">
                    <span className="feh-badge">50+ Speakers</span>
                    <span className="feh-badge">100+ Exhibitors</span>
                    <span className="feh-badge">Live Product Demos</span>
                    <span className="feh-badge">Networking Sessions</span>
                  </div>
                </div>
                
                {/* Video Player */}
                <div className="featured-event-video">
                  <div className="featured-event-video-box" style={{ width: '100%', height: '300px' }}>
                    <iframe
                      src="https://www.youtube.com/embed/_4pSBAcewU8?autoplay=1&mute=1&loop=1&playlist=_4pSBAcewU8&controls=0&showinfo=0&rel=0&playsinline=1"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      style={{ border: 'none', width: '100%', height: '100%', borderRadius: '12px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PAST EVENTS */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>
                Past <span style={{ color: '#dc2626' }}>Events</span>
              </h2>
              <p style={{ fontSize: '15px', color: '#6b7280' }}>
                Highlights from our successful events
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
              gap: '32px'
            }}>
              {pastEvents.map((event) => (
                <div key={event.id} style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#dc2626';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
                >
                  <div style={{
                    width: '100%', height: '320px',
                    overflow: 'hidden', background: '#f3f4f6', position: 'relative'
                  }}>
                    <img 
                      src={event.eventImage}
                      alt={event.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px',
                      padding: '6px 14px', background: '#fef3c7', color: '#92400e',
                      borderRadius: '6px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase'
                    }}>
                      {event.type}
                    </div>
                  </div>

                  <div style={{ padding: '32px' }}>
                    <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', marginBottom: '16px', lineHeight: 1.2 }}>
                      {event.title}
                    </h3>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', color: '#6b7280', fontSize: '14px' }}>
                        <span>📅</span><span>{event.date}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#6b7280', fontSize: '14px' }}>
                        <span>📍</span><span>{event.location}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: 1.6, marginBottom: '24px' }}>
                      {event.description}
                    </p>

                    <div style={{
                      display: 'flex', gap: '24px',
                      paddingBottom: '24px', borderBottom: '1px solid #e5e7eb', marginBottom: '24px'
                    }}>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#dc2626' }}>{event.attendees}</div>
                        <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>Attendees</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#dc2626' }}>{event.speakers}</div>
                        <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>Speakers</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: 800, color: '#dc2626' }}>{event.exhibitors}</div>
                        <div style={{ fontSize: '11px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase' }}>Exhibitors</div>
                      </div>
                    </div>

                    <Link to={event.detailLink} style={{
                      display: 'block', textAlign: 'center', padding: '14px 24px',
                      background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                      color: 'white', borderRadius: '10px', fontSize: '15px',
                      fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 20px rgba(220, 38, 38, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                    >
                      View Event Gallery →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mini-cta">
          <div className="container">
            <h2 style={{ color: 'white', fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
              Want to sponsor or speak at our next event?
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: 28 }}>
              Partner with Timeline Telematics and showcase your brand to Pakistan's fleet industry leaders.
            </p>
            <a href="/contact" className="btn-white">Get In Touch →</a>
          </div>
        </section>

      </main>
    </>
  );
};

export default Events;