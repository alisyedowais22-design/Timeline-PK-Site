const services = [
  {
    icon: "📍",
    title: "Real-Time Vehicle Tracking",
    description:
      "Live GPS monitoring with speed, movement, ignition status, and custom geofencing on an interactive map — updated every second.",
    color: "red",
  },
  {
    icon: "🤖",
    title: "AI Dashcam Solutions",
    description:
      "ADAS + DMS AI cameras detecting lane departure, forward collision, driver fatigue, phone usage, and smoking alerts in real time.",
    color: "gray",
  },
  {
    icon: "📊",
    title: "Advanced Fleet Reports",
    description:
      "Comprehensive historical data — route playback, idle time, speeding events, fuel consumption, and driver behavior analytics.",
    color: "red",
  },
  {
    icon: "🔔",
    title: "Smart Alert System",
    description:
      "Instant geofence breach, route deviation, speed violation, and maintenance due alerts via app, SMS, email, and WhatsApp.",
    color: "gray",
  },
  {
    icon: "💬",
    title: "WhatsApp AI Integration",
    description:
      "Automate driver communication, fleet status updates, and client notifications through WhatsApp API with AI chatbot support.",
    color: "red",
  },
  {
    icon: "🛡️",
    title: "Video Surveillance & DVR",
    description:
      "Mobile DVR solutions with up to 8 channels for buses, trucks, firetrucks, and trains — with live streaming and cloud storage.",
    color: "gray",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge-outer">
            <span className="section-badge-text">WHAT WE OFFER</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ marginTop: "16px" }}>
            Complete <span className="text-gradient">Fleet Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your fleet needs — from hardware to software to AI-powered intelligence
          </p>
        </div>

        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="card-hover card-group relative bg-white border-2 border-gray-100 rounded-2xl p-8 cursor-pointer overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 card-group-opacity transition-opacity duration-300 z-negative"
                style={{
                  background:
                    service.color === "red"
                      ? "linear-gradient(135deg, #ef4444, #dc2626)"
                      : "linear-gradient(135deg, #374151, #1f2937)",
                }}
              ></div>

              <div
                className={`inline-flex p-3 rounded-xl ${
                  service.color === "red"
                    ? "bg-gradient-to-br from-red-600 to-red-700"
                    : "bg-gradient-to-br from-gray-700 to-gray-800"
                } text-white mb-4 card-group-scale transition-transform duration-300`}
              >
                <span className="text-2xl">{service.icon}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 card-group-text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed card-group-text-gray transition-colors">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-red-600 card-group-text-white font-medium">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}