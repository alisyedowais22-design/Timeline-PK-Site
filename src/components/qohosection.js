export default function QohoSection() {
  const qohoProducts = [
    {
      icon: "🎥",
      model: "4CH AI Dash Camera",
      desc: "4-channel AI dash camera with advanced driver assistance and fleet safety analytics.",
      tag: "AI Powered",
    },
    {
      icon: "📹",
      model: "MC1205 ADAS Camera",
      desc: "1080P Wide Angle ADAS Camera for comprehensive front-view monitoring and collision prevention.",
      tag: "ADAS",
    },
    {
      icon: "👁️",
      model: "DMS60",
      desc: "Dashboard-mounted DMS camera detecting driver drowsiness, distraction, and phone usage.",
      tag: "Driver Monitor",
    },
    {
      icon: "⛽",
      model: "OS10 Oil Sensor",
      desc: "Ultrasonic fuel level detector for accurate fuel monitoring and theft prevention.",
      tag: "Fuel Monitor",
    },
    {
      icon: "🛡️",
      model: "MC60V Anti-Explosive",
      desc: "1080P anti-explosive camera specifically designed for oil trucks and hazardous cargo.",
      tag: "Safety",
    },
    {
      icon: "💧",
      model: "MC710IP IP Camera",
      desc: "1080P waterproof, vandalproof HD IR Dome IP camera for harsh environments.",
      tag: "Industrial",
    },
    {
      icon: "🚒",
      model: "MDVR8208H — Firetruck",
      desc: "AI Mobile DVR — 8 Channels, 1080P, GPS, 4G WIFI. Engineered for emergency response vehicles.",
      tag: "Emergency",
    },
    {
      icon: "🚂",
      model: "8CH MNVR — Train",
      desc: "8-channel GPS 4G WiFi 1080P MNVR recorder with 1080P front road-view IP camera for rail.",
      tag: "Rail Solution",
    },
  ];

  const qohoStats = [
    { value: "100+", label: "Countries" },
    { value: "20+", label: "Private Label Products" },
    { value: "UAE RTA", label: "Certified" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Qoho Intro */}
        <div className="qoho-intro">
          <div className="qoho-intro-text">
            <div className="section-badge-outer">
              <span className="section-badge-text">PARTNER SPOTLIGHT</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ marginTop: "16px" }}>
              <span className="text-gradient">Qoho Vision</span> — Globally Trusted
              in Intelligent Vehicle Security
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Qoho partners with global organizations delivering AI-powered vehicle safety solutions.
              In-house R&amp;D, manufacturing, and sales — with a proven track record including
              UAE Road Transport Authority (RTA) certification.
            </p>

            <div className="qoho-stats">
              {qohoStats.map((s, i) => (
                <div key={i} className="qoho-stat">
                  <div className="qoho-stat-value">{s.value}</div>
                  <div className="qoho-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="qoho-badge-visual">
            <div className="qoho-visual-card">
              <div className="qoho-visual-icon">🏆</div>
              <h3 className="qoho-visual-title">UAE RTA Achievement</h3>
              <p className="qoho-visual-desc">
                Qoho Vision is officially certified by the Road Transport Authority of the
                UAE — one of the strictest vehicle safety standards globally.
              </p>
              <div className="qoho-visual-tags">
                <span className="q-tag">AI Powered</span>
                <span className="q-tag">RTA Certified</span>
                <span className="q-tag">Global Reach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Qoho Product Grid */}
        <div className="text-center" style={{ marginBottom: "40px", marginTop: "60px" }}>
          <h3 className="text-2xl font-bold text-gray-900">Qoho Product Lineup</h3>
          <p className="text-gray-600 mt-2">Mobile DVRs, AI cameras, and specialized solutions</p>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-4 gap-6">
          {qohoProducts.map((p, idx) => (
            <div key={idx} className="qoho-product-card card-hover">
              <div className="qoho-product-icon">{p.icon}</div>
              <span className="qoho-product-tag">{p.tag}</span>
              <h4 className="qoho-product-model">{p.model}</h4>
              <p className="qoho-product-desc">{p.desc}</p>
              <a href="#contact" className="qoho-product-link">Enquire →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}