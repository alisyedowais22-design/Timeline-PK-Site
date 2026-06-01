import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SolutionPageLayout = ({ data, pageClass }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={pageClass} style={{ '--hero-image': `url(${data.heroImage})` }}>
      <section className="solution-hero">
        <div className="solution-hero-bg" />
        <div className="solution-hero-overlay" />

        <div className="solution-hero-content">
          <div>
            <div className="solution-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/solutions">Solutions</Link>
              <span>›</span>
              <span>{data.title}</span>
            </div>

            <div className="solution-pill">Industry Solution</div>
            <h1>{data.title}</h1>
            <p>{data.tagline}</p>
          </div>
        </div>
      </section>

      <section className="solution-section light">
        <div className="solution-container solution-two-col">
          <div>
            <div className="solution-label">The Challenge</div>
            <h2>What the {data.title} Industry Faces</h2>
            <p className="solution-copy">{data.overview}</p>
          </div>

          <div className="solution-challenge-card">
            <h3>Key Challenges</h3>
            <ul>
              {data.challenges.map((item, index) => (
                <li key={index}>
                  <span>●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="solution-section">
        <div className="solution-container">
          <div className="solution-center">
            <div className="solution-label">Our Solution</div>
            <h2>How Timeline Telematics Helps</h2>
          </div>

          <div className="solution-grid">
            {data.solutions.map((item, index) => (
              <div className="solution-card" key={index}>
                <div className="solution-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-stats">
        <div className="solution-stats-grid">
          {data.benefits.map((item, index) => (
            <div key={index}>
              <div className="solution-stat-number">{item.stat}</div>
              <div className="solution-stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="solution-section light">
        <div className="solution-container">
          <div className="solution-center">
            <div className="solution-label">Recommended Hardware</div>
            <h2>Products for {data.title}</h2>
          </div>

          <div className="solution-products">
            {data.products.map((item, index) => (
              <div className="solution-product-chip" key={index}>
                {item}
              </div>
            ))}
          </div>

          <div className="solution-btn-row">
            <Link to="/our-products" className="solution-btn">View All Products</Link>
          </div>
        </div>
      </section>

      <section className="solution-cta">
        <div className="solution-cta-inner">
          <h2>
            Ready to Transform Your <span>{data.title}</span> Fleet?
          </h2>
          <p>Talk to our solutions team and get a customized proposal for your operation.</p>

          <div className="solution-btn-row">
            <Link to="/contact" className="solution-btn">Get a Free Consultation</Link>
            <Link to="/our-products" className="solution-btn outline">Browse Products</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionPageLayout;