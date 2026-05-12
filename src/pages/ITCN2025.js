import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ITCN2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery Images - 5 images
  const galleryImages = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    url: `/itcn2025/itcn${i + 1}.jpg`,
    caption: `ITCN 2025 - Image ${i + 1}`
  }));

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [galleryImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <main>
      {/* HERO SECTION */}
      <section className="events-hero-video" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
        <div className="hero-video-overlay"></div>
        
        <div className="hero-video-content">
          <div className="container">
            <div className="events-hero-content">
              {/* Breadcrumb */}
              <div style={{ marginBottom: '24px' }}>
                <Link to="/events" style={{ 
                  color: 'rgba(255,255,255,0.6)', 
                  textDecoration: 'none',
                  fontSize: '14px'
                }}>
                  ← Back to Events
                </Link>
              </div>

              <div className="section-badge" style={{ 
                background: '#fef3c7',
                color: '#92400e',
                border: 'none'
              }}>
                TECH EXPO
              </div>

              <h1 className="events-hero-title">
                ITCN Asia <span style={{ color: '#ef4444' }}>2025</span>
              </h1>

              <p className="events-hero-desc" style={{ maxWidth: '700px' }}>
                Pakistan's premier technology exhibition showcasing cutting-edge telematics solutions, 
                fleet management innovations, and next-generation GPS tracking systems.
              </p>

              <div className="events-hero-stats">
                <div className="eh-stat">
                  <span className="eh-val">800+</span>
                  <span className="eh-label">Attendees</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">80+</span>
                  <span className="eh-label">Expert Speakers</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">200+</span>
                  <span className="eh-label">Tech Exhibitors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '60px',
            alignItems: 'start'
          }}>
            {/* Left - Description */}
            <div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 800,
                color: '#111827',
                marginBottom: '24px'
              }}>
                About ITCN Asia 2025
              </h2>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#4b5563',
                marginBottom: '24px'
              }}>
                ITCN Asia is Pakistan's largest technology and telecom exhibition, bringing together 
                industry leaders, innovators, and technology providers from across the region. The 
                2025 edition featured groundbreaking demonstrations of GPS tracking systems, IoT 
                solutions, and fleet management platforms.
              </p>

              <p style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: '#4b5563',
                marginBottom: '32px'
              }}>
                Timeline Telematics showcased its complete portfolio of JimiIoT GPS trackers and 
                Qoho Vision cameras, attracting over 800 industry professionals seeking advanced 
                fleet management solutions. The event featured live product demonstrations, technical 
                workshops, and one-on-one consultations with telematics experts.
              </p>

              <div style={{
                background: '#fef2f2',
                border: '2px solid #fecaca',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#991b1b',
                  marginBottom: '16px'
                }}>
                  🎯 Event Highlights
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ Live GPS tracking demonstrations
                  </li>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ AI-powered dashcam showcases
                  </li>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ Fleet management platform demos
                  </li>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ Technical workshops and seminars
                  </li>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ Networking sessions with industry leaders
                  </li>
                  <li style={{ color: '#4b5563', fontSize: '15px' }}>
                    ✓ ROI case studies and success stories
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Event Info Card */}
            <div style={{
              position: 'sticky',
              top: '100px',
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '32px'
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#111827',
                marginBottom: '24px'
              }}>
                Event Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '6px'
                  }}>
                    📅 Date
                  </div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827'
                  }}>
                    September 10-12, 2025
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '6px'
                  }}>
                    📍 Venue
                  </div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827'
                  }}>
                    Karachi Expo Centre<br/>
                    Karachi, Pakistan
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#6b7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    marginBottom: '6px'
                  }}>
                    🎫 Event Type
                  </div>
                  <div style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#111827'
                  }}>
                    Technology Exhibition
                  </div>
                </div>

                <div style={{
                  borderTop: '1px solid #e5e7eb',
                  paddingTop: '20px',
                  marginTop: '10px'
                }}>
                  <Link to="/contact" style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '14px 24px',
                    background: 'linear-gradient(135deg, #dc2626, #ef4444)',
                    color: 'white',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}>
                    Contact Us for Next Event
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY SLIDER */}
      <section style={{ padding: '80px 0', background: '#0f172a' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'white',
              marginBottom: '8px'
            }}>
              Event <span style={{ color: '#ef4444' }}>Gallery</span>
            </h2>
            <p style={{
              fontSize: '15px',
              color: '#94a3b8'
            }}>
              Moments captured from ITCN Asia 2025
            </p>
          </div>

          {/* Gallery Slider */}
          <div className="gallery-slider">
            <div className="gallery-slider-container">
              <div className="gallery-slide">
                <img 
                  src={galleryImages[currentSlide].url} 
                  alt={galleryImages[currentSlide].caption}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/1200x600/1e293b/ffffff?text=ITCN+Asia+2025+-+Image+${currentSlide + 1}`;
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div className="gallery-slide-caption">
                  {galleryImages[currentSlide].caption}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button className="gallery-arrow gallery-arrow-left" onClick={prevSlide}>
                ‹
              </button>
              <button className="gallery-arrow gallery-arrow-right" onClick={nextSlide}>
                ›
              </button>

              {/* Dots Navigation */}
              <div className="gallery-dots">
                {galleryImages.map((_, index) => {
                  const isMobile = window.innerWidth < 768;
                  const showDot = !isMobile || Math.abs(index - currentSlide) <= 2;
                  
                  if (!showDot) return null;
                  
                  return (
                    <button
                      key={index}
                      className={`gallery-dot ${index === currentSlide ? 'gallery-dot-active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  );
                })}
              </div>

              {/* Slide Counter */}
              <div className="gallery-counter">
                {currentSlide + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mini-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ 
            color: 'white', 
            fontSize: '28px', 
            fontWeight: 700, 
            marginBottom: '12px' 
          }}>
            Interested in Our Next Exhibition?
          </h2>
          <p style={{ 
            color: '#d1d5db', 
            marginBottom: '28px',
            fontSize: '16px'
          }}>
            Stay updated with upcoming tech events and product showcases
          </p>
          <Link to="/contact" className="btn-white">
            Get Event Updates →
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ITCN2025;