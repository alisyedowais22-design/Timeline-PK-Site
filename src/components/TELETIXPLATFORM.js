/* ============================================
   CREATIVE PLATFORM CARDS SECTION
   ============================================ */

{/* Platform Cards Section */}
<section className="platform-cards-section">
  <div className="container">
    {/* Section Header */}
    <div className="platform-header">
      <span className="platform-badge">ACCESS TELETIX</span>
      <h2 className="platform-title">Why Choose Timeline Telematics</h2>
      <p className="platform-subtitle">
        Powerful features designed to transform your fleet operations
      </p>
    </div>

    {/* Cards Grid */}
    <div className="platform-cards-grid">
      
      {/* Card 1: Web App */}
      <div className="platform-card">
        <div className="platform-card-glow"></div>
        <div className="platform-icon-wrap">
          <div className="platform-icon web-icon">
            🚀
          </div>
        </div>
        <h3 className="platform-card-title">Web Application</h3>
        <p className="platform-card-desc">
          Access your fleet dashboard from any browser. Real-time tracking, 
          analytics, and reports at your fingertips.
        </p>
        <ul className="platform-features-list">
          <li>✓ Live GPS tracking</li>
          <li>✓ Custom reports</li>
          <li>✓ Multi-user access</li>
        </ul>
        <a 
          href="https://web.teletix.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="platform-btn"
        >
          Launch Web App →
        </a>
      </div>

      {/* Card 2: Mobile App */}
      <div className="platform-card platform-card-featured">
        <div className="platform-featured-badge">MOST POPULAR</div>
        <div className="platform-card-glow"></div>
        <div className="platform-icon-wrap">
          <div className="platform-icon mobile-icon">
            ⚡
          </div>
        </div>
        <h3 className="platform-card-title">Mobile Apps</h3>
        <p className="platform-card-desc">
          Track your fleet on the go with our Android and iOS apps. 
          Get instant alerts and manage operations anywhere.
        </p>
        <ul className="platform-features-list">
          <li>✓ Push notifications</li>
          <li>✓ Offline mode</li>
          <li>✓ Voice commands</li>
        </ul>
        <div className="app-buttons">
          <a 
            href="https://play.google.com/store/apps/details?id=com.teletix" 
            target="_blank" 
            rel="noopener noreferrer"
            className="platform-btn"
          >
            Download Android →
          </a>
        </div>
      </div>

      {/* Card 3: Portal */}
      <div className="platform-card">
        <div className="platform-card-glow"></div>
        <div className="platform-icon-wrap">
          <div className="platform-icon portal-icon">
            🛡️
          </div>
        </div>
        <h3 className="platform-card-title">Client Portal</h3>
        <p className="platform-card-desc">
          Secure enterprise portal for advanced fleet management. 
          Role-based access and API integration available.
        </p>
        <ul className="platform-features-list">
          <li>✓ Custom dashboards</li>
          <li>✓ API access</li>
          <li>✓ White-label options</li>
        </ul>
        <a 
          href="https://portal.teletix.me" 
          target="_blank" 
          rel="noopener noreferrer"
          className="platform-btn"
        >
          Access Portal →
        </a>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="platform-cta">
      <p className="platform-cta-text">
        Need help getting started? Our team is here to assist you.
      </p>
      <a href="/contact" className="platform-cta-btn">
        Talk to Expert →
      </a>
    </div>
  </div>
</section>