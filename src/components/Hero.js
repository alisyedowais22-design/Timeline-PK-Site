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
              <span className="gradient-text"> Let’s Make It Smarter.
              </span>
            </h1>

            <p className="hero-description">
              Vehicles. Assets. People. In motion, every second. 
              We turn that motion into visibility, safety, and control so you’re never left in the dark.

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
                <svg className="map-svg" viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#2d3748" strokeWidth="0.5"/>
                    </pattern>
                    <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                      <rect width="100" height="100" fill="url(#smallGrid)"/>
                      <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#2d3748" strokeWidth="1"/>
                    </pattern>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#1a202c'}}/>
                      <stop offset="100%" style={{stopColor:'#2d3748'}}/>
                    </linearGradient>
                    <path id="path1" d="M 100 100 Q 250 150, 400 100 Q 500 80, 520 150 Q 500 250, 400 280 Q 250 290, 150 250 Q 80 200, 100 100"/>
                    <path id="path2" d="M 150 200 Q 300 250, 450 200 Q 520 180, 530 260 Q 480 320, 350 330 Q 200 310, 130 240 Q 100 200, 150 200"/>
                    <path id="path3" d="M 200 150 Q 350 180, 480 140 Q 550 160, 560 240 Q 510 300, 380 310 Q 230 290, 160 220 Q 140 170, 200 150"/>
                  </defs>

                  <rect width="600" height="400" fill="url(#mapGradient)"/>
                  <rect width="600" height="400" fill="url(#grid)" opacity="0.3"/>

                  <path d="M 50 200 L 550 200" stroke="#4a5568" strokeWidth="8" opacity="0.5"/>
                  <path d="M 300 50 L 300 350" stroke="#4a5568" strokeWidth="8" opacity="0.5"/>
                  <path d="M 50 200 L 550 200" stroke="#718096" strokeWidth="2" strokeDasharray="10,10" opacity="0.8"/>
                  <path d="M 300 50 L 300 350" stroke="#718096" strokeWidth="2" strokeDasharray="10,10" opacity="0.8"/>

                  <rect x="100" y="100" width="40" height="40" fill="#374151" opacity="0.6" rx="2"/>
                  <rect x="450" y="250" width="50" height="50" fill="#374151" opacity="0.6" rx="2"/>
                  <rect x="200" y="280" width="35" height="35" fill="#374151" opacity="0.6" rx="2"/>
                  <rect x="400" y="80" width="45" height="45" fill="#374151" opacity="0.6" rx="2"/>

                  <circle cx="150" cy="150" r="5" fill="#ef4444" opacity="0.8"/>
                  <circle cx="150" cy="150" r="10" fill="none" stroke="#ef4444" strokeWidth="2" opacity="0.5">
                    <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
                  </circle>

                  <circle cx="480" cy="280" r="5" fill="#10b981" opacity="0.8"/>
                  <circle cx="480" cy="280" r="10" fill="none" stroke="#10b981" strokeWidth="2" opacity="0.5">
                    <animate attributeName="r" values="10;15;10" dur="2s" repeatCount="indefinite"/>
                  </circle>

                  <path d="M 100 100 Q 250 150, 400 100" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite"/>
                  </path>
                  <path d="M 150 200 Q 300 250, 450 200" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="-10" dur="1s" repeatCount="indefinite"/>
                  </path>

                  <g className="vehicle">
                    <circle cx="0" cy="0" r="25" fill="#10b981" opacity="0.15">
                      <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="0" cy="0" r="15" fill="#059669"/>
                    <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12">🚛</text>
                    <animateMotion dur="20s" repeatCount="indefinite">
                      <mpath href="#path1"/>
                    </animateMotion>
                  </g>

                  <g className="vehicle">
                    <circle cx="0" cy="0" r="25" fill="#3b82f6" opacity="0.15">
                      <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="0" cy="0" r="15" fill="#2563eb"/>
                    <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12">🚚</text>
                    <animateMotion dur="15s" repeatCount="indefinite">
                      <mpath href="#path2"/>
                    </animateMotion>
                  </g>

                  <g className="vehicle">
                    <circle cx="0" cy="0" r="25" fill="#ef4444" opacity="0.15">
                      <animate attributeName="r" values="25;35;25" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="0" cy="0" r="15" fill="#dc2626"/>
                    <text x="0" y="5" textAnchor="middle" fill="white" fontSize="12">🚐</text>
                    <animateMotion dur="18s" repeatCount="indefinite">
                      <mpath href="#path3"/>
                    </animateMotion>
                  </g>
                </svg>

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

              <div className="vehicle-list">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;