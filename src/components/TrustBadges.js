import React from 'react';

const TrustBadges = () => {
  const companies = [
    { name: 'AskTrack', logo: '/logos/asktracklogo.png' },
    { name: 'CyberTrack', logo: '/logos/cybertracklogo.png' },
    { name: 'Khans Track', logo: '/logos/khanstrack.png' },
    { name: 'U-Track', logo: '/logos/utracklogo.png' },
    { name: 'United Track System', logo: '/logos/utslogo.png' },
    { name: 'Crescent', logo: '/logos/crescentlogo.png' },
    { name: 'TPL Trakker', logo: '/logos/tpllogo.png' },
  ];

  // Duplicate logos for seamless infinite loop
  const allCompanies = [...companies, ...companies, ...companies];

  return (
    <>
      <style>{`
        .trust-section {
          padding: 48px 0;
          background: #fff;
          border-top: 1px solid #f1f1f1;
          border-bottom: 1px solid #f1f1f1;
          overflow: hidden;
        }

        .trust-title {
          text-align: center;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #999;
          margin-bottom: 32px;
        }

        .trust-slider-wrapper {
          overflow: hidden;
          position: relative;
          width: 100%;
        }

        /* Left + Right fade mask */
        .trust-slider-wrapper::before,
        .trust-slider-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          width: 120px;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .trust-slider-wrapper::before {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, transparent 100%);
        }

        .trust-slider-wrapper::after {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, transparent 100%);
        }

        .trust-track {
          display: flex;
          align-items: center;
          gap: 60px;
          width: max-content;
          animation: scrollLogos 28s linear infinite;
        }

        .trust-track:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLogos {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .trust-logo-item {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 16px;
          transition: transform 0.3s ease;
        }

        .trust-logo-item:hover {
          transform: scale(1.08);
        }

        .trust-logo-item img {
          height: 120px;
          width: auto;
          max-width: 140px;
          object-fit: contain;
          
        }

        .trust-logo-item:hover img {
          filter: grayscale(0%);
          opacity: 1;
        }

        /* Divider dots between logos */
        .trust-divider {
          flex-shrink: 0;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #dc2626;
          opacity: 0.3;
        }
      `}</style>

      <section className="trust-section">
        <p className="trust-title">Trusted by Industry Leaders Worldwide</p>

        <div className="trust-slider-wrapper">
          <div className="trust-track">
            {allCompanies.map((company, index) => (
              <React.Fragment key={index}>
                <div className="trust-logo-item">
                  <img
                    src={company.logo}
                    alt={company.name}
                  />
                </div>
                <div className="trust-divider" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustBadges;