import React, { useEffect, useRef } from 'react';

const Hero = () => {
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

  return (
    <section className="hero-section">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-gradient"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Trusted by 25,000+ Fleet Operators</span>
            </div>

            <h1 className="hero-title">
              The World Moves Fast.
              <span className="gradient-text"> Let's Make It Smarter.</span>
            </h1>

            <p className="hero-description">
              Vehicles. Assets. People. In motion, every second. 
              We turn that motion into visibility, safety, and control so you're never left in the dark.
            </p>

            <div className="hero-cta">
              <button className="btn-hero-primary">
                <span>Explore Our Solutions</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="btn-hero-secondary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.5 5.5l7 4.5-7 4.5v-9z"/>
                </svg>
                <span>Talk to An Expert</span>
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">30%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50M+</div>
                <div className="stat-label">Data Points/Day</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="dashboard-mockup">
              <div className="map-container">
                {/* VIDEO PLAYER - REPLACING MAP */}
                <div className="video-container">
                  <video 
                    className="fleet-video"
                    //controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/video-poster.jpg"
                  >
                    <source src="/hv.mp4" type="video/mp4" />
                    <source src="/fleet-demo.webm" type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* STATS OVERLAY - KEPT AS IS */}
                <div className="map-stats">
                  <div className="stat-card">
                    <div className="stat-card-header">
                      <span className="stat-icon">🚛</span>
                      <span className="stat-status live">LIVE</span>
                    </div>
                    <div className="stat-card-value">24/30</div>
                    <div className="stat-card-label">Active Vehicles</div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-header">
                      <span className="stat-icon">📍</span>
                    </div>
                    <div className="stat-card-value">18</div>
                    <div className="stat-card-label">En Route</div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-card-header">
                      <span className="stat-icon">⚡</span>
                    </div>
                    <div className="stat-card-value">99.9%</div>
                    <div className="stat-card-label">Uptime</div>
                  </div>
                </div>
              </div>

              {/* VEHICLE LIST - KEPT AS IS */}
              {/*
              "<div className="vehicle-list">
                {[
                  { icon: '🚛', name: 'Vehicle #A123', status: 'En route to warehouse', speed: '68 km/h' },
                  { icon: '🚚', name: 'Vehicle #B456', status: 'Loading at depot', speed: '0 km/h' },
                  { icon: '🚐', name: 'Vehicle #C789', status: 'Delivery in progress', speed: '45 km/h' }
                ].map((vehicle, index) => (
                  <div key={index} className="vehicle-item" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="vehicle-icon">{vehicle.icon}</div>
                    <div className="vehicle-info">
                      <div className="vehicle-name">{vehicle.name}</div>
                      <div className="vehicle-status">
                        <span className="status-dot active"></span>
                        {vehicle.status}
                      </div>
                    </div>
                    <div className="vehicle-speed">{vehicle.speed}</div>
                  </div>
                ))}
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;