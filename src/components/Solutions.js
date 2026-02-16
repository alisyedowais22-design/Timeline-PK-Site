import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: 'Real-Time GPS Tracking',
      description: 'Track every vehicle with precision GPS. Get real-time updates and instant location sharing.',
      features: ['Live location updates', 'Geofencing & routes', 'Historical playback']
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Gain actionable insights with AI-driven analytics and predictive maintenance.',
      features: ['Predictive maintenance', 'Driver behavior analysis', 'Fuel optimization']
    },
    {
      title: 'Fleet Maintenance',
      description: 'Automate maintenance scheduling and reduce downtime with smart alerts.',
      features: ['Automated reminders', 'Diagnostic codes', 'Cost tracking']
    },
    {
      title: 'Driver Safety',
      description: 'Enhance safety with real-time coaching and AI dash cams.',
      features: ['AI dash cams', 'Driver scorecards', 'Safety training']
    },
    {
      title: 'Compliance Management',
      description: 'Stay compliant with automated ELD and IFTA reporting.',
      features: ['FMCSA-certified ELD', 'HOS tracking', 'IFTA reporting']
    },
    {
      title: 'Route Optimization',
      description: 'Optimize routes in real-time to reduce costs and improve delivery.',
      features: ['AI route planning', 'Traffic-aware', 'Multi-stop optimization']
    }
  ];

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">SOLUTIONS</div>
          <h2 className="section-title">Complete Fleet Management Platform</h2>
          <p className="section-description">
            Everything you need to manage, track, and optimize your fleet operations
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-features">
                {solution.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#" className="solution-link">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
