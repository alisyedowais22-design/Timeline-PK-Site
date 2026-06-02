import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/product-inquiry" className="btn-cta-primary">
              Start Free Trial
            </Link>

            <Link to="/contact" className="btn-cta-secondary">
              Schedule a Demo
            </Link>
          </div>

          <p className="cta-note">No credit card required • Free 30-day trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;