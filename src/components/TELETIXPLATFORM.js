export default function TeletixPlatform() {
  const platformFeatures = [
    {
      icon: "🔐",
      title: "Secure Sign-In",
      description: "Enter valid credentials to access your personalized fleet dashboard. Role-based access control for teams.",
    },
    {
      icon: "📍",
      title: "Real-Time Tracking",
      description: "Live GPS tracking with speed, movement, and vehicle status on an interactive map — updated every second.",
    },
    {
      icon: "🎬",
      title: "History Playback",
      description: "Multi-color route playback to review any vehicle's complete journey history with time and speed data.",
    },
    {
      icon: "📋",
      title: "Individual Reports",
      description: "Detailed vehicle reports including mileage, idle time, stops, speeding events, and driver behavior scores.",
    },
    {
      icon: "🔔",
      title: "Real-Time Alerts",
      description: "Instant GPS alarms, geofence breach alerts, route deviation notifications, and speed violation warnings.",
    },
    {
      icon: "🎮",
      title: "Command & Control",
      description: "Send remote commands to GPS trackers including engine cut, door lock, and custom trigger actions.",
    },
    {
      icon: "📌",
      title: "Points of Interest",
      description: "Create and manage custom POIs like depots, fuel stations, client sites, and restricted zones.",
    },
    {
      icon: "💬",
      title: "WhatsApp Automation",
      description: "Automated WhatsApp alerts and AI chatbot integration for driver communication and fleet notifications.",
    },
  ];

  return (
    <section id="platform" className="section-padding" style={{ background: "#0f172a" }}>
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge-outer dark">
            <span className="section-badge-text">OUR PLATFORM</span>
          </div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "white", marginTop: "16px" }}>
            Introducing{" "}
            <span className="gradient-text">Teletix Platform</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
            A complete fleet intelligence platform — Web App, Mobile App, and Customer Portal
            — all in one ecosystem
          </p>
        </div>

        {/* 3 App Pillars */}
        <div className="platform-pillars">
          <div className="pillar-card">
            <div className="pillar-icon">🖥️</div>
            <h3 className="pillar-title">Web App</h3>
            <p className="pillar-desc">Full-featured browser-based dashboard for fleet managers and dispatchers</p>
            <a href="#contact" className="pillar-btn">Learn More →</a>
          </div>
          <div className="pillar-card pillar-featured">
            <div className="pillar-badge">Most Popular</div>
            <div className="pillar-icon">📱</div>
            <h3 className="pillar-title">Teletix PRO</h3>
            <p className="pillar-desc">Powerful mobile app for on-the-go fleet monitoring, real-time alerts, and driver management</p>
            <a href="#contact" className="pillar-btn-white">Download App →</a>
          </div>
          <div className="pillar-card">
            <div className="pillar-icon">🔑</div>
            <h3 className="pillar-title">Customer Portal</h3>
            <p className="pillar-desc">Self-service client portal for vehicle status, reports, and account management</p>
            <a href="#contact" className="pillar-btn">Access Portal →</a>
          </div>
        </div>

        {/* Platform Features Grid */}
        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6" style={{ marginTop: "60px" }}>
          {platformFeatures.map((feature, idx) => (
            <div key={idx} className="platform-feature-card">
              <div className="platform-feature-icon">{feature.icon}</div>
              <h4 className="platform-feature-title">{feature.title}</h4>
              <p className="platform-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}