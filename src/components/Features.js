import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const platforms = [
    {
      title: 'Teletix Web App',
      subtitle: 'Complete Fleet Management Dashboard',
      description: 'Access your entire fleet operations through our comprehensive web platform with real-time tracking and analytics.',
      link: '#',
      features: ['Live Tracking', 'Reports & Analytics', 'Fleet Management', 'Alerts & Notifications']
    },
    {
      title: 'Teletix Mobile App',
      subtitle: 'Fleet Control On-the-Go',
      description: 'Monitor and manage your fleet from anywhere with our powerful mobile application for iOS and Android.',
      link: 'https://play.google.com/store/apps/details?id=com.tlteletix.pro&pcampaignid=web_share',
      features: ['Real-Time Updates', 'Push Notifications', 'Live Video Feed', 'Driver Communication']
    },
    {
      title: 'Customer Portal',
      subtitle: 'Client Self-Service Platform',
      description: 'Secure portal for enterprise clients to manage devices, view reports, and access support resources 24/7.',
      link: 'http://web.teletix.pk/',
      features: ['Device Management', 'Custom Reports', 'User Access Control', 'WhatsApp Integration']
    }
  ];

  return (
    <section className="features-section-pro">
      <canvas ref={canvasRef} className="features-canvas" />
      <div className="features-gradient"></div>

      <div className="container">
        <div className="features-header-pro">
          <span className="section-badge">TELETIX PLATFORM</span>
          <h2 className="section-title-pro">Comprehensive Fleet Management Solutions</h2>
          <p className="section-desc-pro">
            Access powerful tracking tools across web, mobile, and portal — all connected in real-time
          </p>
        </div>

        <div className="features-grid-pro">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="feature-card-pro"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-card-header-pro">
                <h3 className="feature-card-title-pro">{platform.title}</h3>
                <p className="feature-card-subtitle-pro">{platform.subtitle}</p>
              </div>
              
              <p className="feature-card-desc-pro">{platform.description}</p>
              
              <div className="feature-card-features-pro">
                {platform.features.map((feature, i) => (
                  <div key={i} className="feature-item-pro">
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                      <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href={platform.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="feature-card-button-pro"
              >
                <span>Access Platform</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="features-cta-pro">
          <p className="features-cta-text-pro">Need help choosing the right platform?</p>
          <Link to="/contact" className="features-cta-button-pro">
            Talk to Expert →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;