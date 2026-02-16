import React from 'react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Fleet?</h2>
          <p className="cta-description">
            Join 25,000+ fleet operators who trust Timeline Telematics. Start your free 30-day trial today.
          </p>
          <div className="cta-buttons">
            <button className="btn-cta-primary">Start Free Trial</button>
            <button className="btn-cta-secondary">Schedule a Demo</button>
          </div>
          <p className="cta-note">No credit card required • Free 30-day trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
