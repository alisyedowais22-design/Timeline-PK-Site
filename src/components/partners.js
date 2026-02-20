export default function Partners() {
  const achievements = [
    { icon: "🌍", value: "100+", label: "Countries Worldwide" },
    { icon: "📦", value: "50K+", label: "Devices Deployed" },
    { icon: "🏆", value: "20+", label: "Private Label Products" },
    { icon: "🔧", value: "24/7", label: "Technical Support" },
  ];

  return (
    <section className="partners-section">
      <div className="container">
        {/* Partner Logos */}
        <div className="partners-header">
          <p className="partners-label">Our Global Technology Partners</p>
          <div className="partners-logos">
            <div className="partner-card">
              <div className="partner-logo-box">
                <span className="partner-emoji">🌐</span>
                <div>
                  <div className="partner-name">JimiIoT Systems</div>
                  <div className="partner-origin">China • Global IoT Leader</div>
                </div>
              </div>
            </div>
            <div className="partner-divider">×</div>
            <div className="partner-card">
              <div className="partner-logo-box">
                <span className="partner-emoji">🎥</span>
                <div>
                  <div className="partner-name">Qoho Vision</div>
                  <div className="partner-origin">AI Vehicle Security • UAE RTA Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div key={idx} className="achievement-card">
              <div className="achievement-icon">{item.icon}</div>
              <div className="achievement-value">{item.value}</div>
              <div className="achievement-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}