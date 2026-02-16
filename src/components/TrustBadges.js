import React from 'react';

const TrustBadges = () => {
  const companies = ['LOGISTICS CO', 'TRANSPORT INC', 'FLEET MASTERS', 'DELIVERY PRO', 'CARGO EXPRESS'];

  return (
    <section className="trust-section">
      <div className="container">
        <p className="trust-title">Trusted by industry leaders worldwide</p>
        <div className="trust-logos">
          {companies.map((company, index) => (
            <div key={index} className="trust-logo">{company}</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
