"use client";
import { useState } from "react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("video");

  const videoProducts = [
    {
      model: "JC170",
      tag: "AI DMS Camera",
      tagColor: "red",
      icon: "🎥",
      description:
        "Compact DMS camera with multiple visual AI algorithms. Monitors driver attentiveness and warns with audible alerts on fatigue or distraction. Cloud-uploadable evidence data.",
      features: ["Driver Monitoring (DMS)", "Fatigue & Distraction Alerts", "Cloud Upload", "Audible Warnings"],
    },
    {
      model: "JC181",
      tag: "Dual Channel",
      tagColor: "gray",
      icon: "📷",
      description:
        "Compact video telematics device for remote fleet management. Adds full visibility with LTE connectivity, GNSS, and on-device video/image storage.",
      features: ["Dual Channel Recording", "LTE Connectivity", "GNSS Tracking", "Remote Management"],
    },
    {
      model: "JC182",
      tag: "2K Quad HD",
      tagColor: "red",
      icon: "🖥️",
      description:
        "2K Quad HD road-facing dashcam for private cars. OBD plug-and-play, built-in 4G, super capacitor, snapshot button, vibration alerts. Supports fuel & EV.",
      features: ["2K Quad HD Recording", "OBD Plug & Play", "4G + GNSS Built-in", "EV Compatible"],
    },
    {
      model: "JC261",
      tag: "AI DashCam",
      tagColor: "red",
      icon: "🤖",
      description:
        "Full AI dashcam with ADAS + DMS. Lane Departure Warning, Forward Collision Warning, Headway Monitoring, Distraction Alarm, Phone Calling Alert, Smoking Alert.",
      features: ["ADAS Suite", "DMS Monitoring", "Lane Departure Warning", "Forward Collision Alert"],
    },
    {
      model: "JC371",
      tag: "Multi-Camera",
      tagColor: "gray",
      icon: "📡",
      description:
        "Live vehicle monitoring via LTE with up to 3× 1080P cameras including STARVIS lens. AI-driven safety with ADAS, DMS, and Face Recognition.",
      features: ["3× 1080P Cameras", "STARVIS Lens", "Face Recognition", "ADAS + DMS"],
    },
    {
      model: "JC450",
      tag: "Enterprise",
      tagColor: "gray",
      icon: "💾",
      description:
        "Enterprise-grade dashcam with LTE, up to 3× 1080P STARVIS cameras and 128GB built-in storage expandable to 256GB.",
      features: ["128GB Storage (256GB max)", "3× 1080P STARVIS", "LTE Connectivity", "Enterprise Grade"],
    },
  ];

  const fleetProducts = [
    { model: "VG03", tag: "2G Tracker", desc: "Market-leading 2G tracking device with proven reliability.", icon: "📍" },
    { model: "GT06D", tag: "2G/4G Band", desc: "2G vehicle tracking device with 4G band allocation for future-ready connectivity.", icon: "📡" },
    { model: "X3", tag: "Multi-Function", desc: "Multi-functional vehicle tracker with advanced features.", icon: "🔌" },
    { model: "VL110C", tag: "LTE Terminal", desc: "LTE vehicle terminal for high-speed data transmission.", icon: "📶" },
    { model: "VL103M", tag: "4G Tracker", desc: "4G multi-functional vehicle tracker with comprehensive features.", icon: "🛰️" },
    { model: "VL808", tag: "4G Tracker", desc: "Reliable 4G vehicle tracker with real-time updates.", icon: "🚗" },
    { model: "VL502", tag: "OBDII Tracker", desc: "LTE OBDII GNSS tracker — plug & play installation.", icon: "🔧" },
    { model: "LL301", tag: "Asset Tracker", desc: "LTE CAT 1 asset GNSS tracker with K7800 environmental sensor.", icon: "📦" },
    { model: "LL303", tag: "Solar Tracker", desc: "LTE solar-powered GNSS tracker — zero wiring needed.", icon: "☀️" },
    { model: "PL200", tag: "Personal", desc: "4G personal tracker for drivers and field personnel.", icon: "👤" },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="section-badge-outer">
            <span className="section-badge-text">JIMIIOT PRODUCT LINEUP</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ marginTop: "16px" }}>
            Video & Fleet <span className="text-gradient">Telematics</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From AI dashcams to 4G solar trackers — complete hardware solutions for every fleet need
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="product-tabs">
          <button
            className={`product-tab ${activeTab === "video" ? "active" : ""}`}
            onClick={() => setActiveTab("video")}
          >
            🎥 Video Telematics
          </button>
          <button
            className={`product-tab ${activeTab === "fleet" ? "active" : ""}`}
            onClick={() => setActiveTab("fleet")}
          >
            📡 Fleet Trackers
          </button>
        </div>

        {/* Video Products */}
        {activeTab === "video" && (
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
            {videoProducts.map((p, idx) => (
              <div key={idx} className="product-card card-hover">
                <div className="product-card-header">
                  <div className="product-icon">{p.icon}</div>
                  <span className={`product-tag ${p.tagColor === "red" ? "tag-red" : "tag-gray"}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="product-model">{p.model}</h3>
                <p className="product-desc">{p.description}</p>
                <ul className="product-features">
                  {p.features.map((f, i) => (
                    <li key={i} className="product-feature-item">
                      <span className="feature-check">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="product-btn">Get a Quote →</a>
              </div>
            ))}
          </div>
        )}

        {/* Fleet Tracker Products */}
        {activeTab === "fleet" && (
          <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-6">
            {fleetProducts.map((p, idx) => (
              <div key={idx} className="fleet-card card-hover">
                <div className="fleet-card-top">
                  <span className="fleet-icon">{p.icon}</span>
                  <div>
                    <div className="fleet-model">{p.model}</div>
                    <span className="fleet-tag">{p.tag}</span>
                  </div>
                </div>
                <p className="fleet-desc">{p.desc}</p>
                <a href="#contact" className="fleet-btn">Enquire →</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}