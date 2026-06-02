import React from 'react';
import { Link } from 'react-router-dom';

const FleetOverview = () => {
  const IconTracker = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );

  const IconDashcam = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 8.5h11.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M17.5 12l4.5-2.8v7.6L17.5 14v-2Z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8.5" cy="13" r="2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );

  const IconOBD = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="7" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 7V4M12 7V4M16 7V4M8 20v-3M12 20v-3M16 20v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconAsset = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M4 8l8-4 8 4-8 4-8-4Z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 8v8l8 4 8-4V8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 12v8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );

  const IconPersonal = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5 21a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconCamera = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 6l1.2-2h7.6L17 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const categories = [
    {
      icon: <IconTracker />,
      title: 'Vehicle Trackers',
      desc: 'Reliable GPS tracking devices for real-time fleet visibility, route monitoring, and vehicle security.',
      link: '/our-products',
    },
    {
      icon: <IconDashcam />,
      title: 'AI Dashcams',
      desc: 'Smart video telematics with ADAS, DMS, driver safety alerts, and live road monitoring.',
      link: '/our-products',
    },
    {
      icon: <IconOBD />,
      title: 'CAN & OBD Products',
      desc: 'Advanced vehicle diagnostics and performance data for smarter fleet management decisions.',
      link: '/our-products',
    },
    {
      icon: <IconAsset />,
      title: 'Asset Trackers',
      desc: 'Long-life battery tracking solutions for mobile assets, containers, equipment, and valuable goods.',
      link: '/our-products',
    },
    {
      icon: <IconPersonal />,
      title: 'Personal Trackers',
      desc: 'Compact safety tracking devices for people, field teams, workforce visibility, and personal security.',
      link: '/our-products',
    },
    {
      icon: <IconCamera />,
      title: 'Non-AI Dashcams',
      desc: 'Reliable standard dashcam solutions for recording, vehicle monitoring, and basic video evidence.',
      link: '/our-products',
    },
  ];

  return (
    <section
  style={{
    background: '#ffffff',
    padding: '90px 0 135px',
    marginBottom: '45px',
    position: 'relative',
    overflow: 'hidden',
    borderTop: '1px solid #f1f5f9',
    borderBottom: '1px solid #f1f5f9',
    fontFamily: 'Poppins, sans-serif',
  }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto 52px',
            fontFamily: 'Poppins, sans-serif',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              color: '#E8312A',
              fontSize: '12px',
              fontWeight: 900,
              letterSpacing: '1.8px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Our Products
          </span>

          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(30px, 4vw, 46px)',
              fontWeight: 900,
              color: '#08111f',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              margin: '0 0 14px',
            }}
          >
            Hardware Built for Complete Fleet Control
          </h2>

          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#64748b',
              fontSize: '16.5px',
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Explore Timeline Telematics products designed for tracking, safety, diagnostics, asset security, and fleet visibility.
          </p>
        </div>

        <div
          className="product-category-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '22px',
          }}
        >
          {categories.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '22px',
                padding: '28px',
                textDecoration: 'none',
                boxShadow: '0 14px 38px rgba(15, 23, 42, 0.055)',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '235px',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: 'Poppins, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-7px)';
                e.currentTarget.style.borderColor = '#E8312A';
                e.currentTarget.style.boxShadow = '0 24px 55px rgba(232, 49, 42, 0.14)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.boxShadow = '0 14px 38px rgba(15, 23, 42, 0.055)';
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: '#E8312A',
                }}
              />

              <div
                style={{
                  width: '58px',
                  height: '58px',
                  borderRadius: '18px',
                  background: '#fef2f2',
                  color: '#E8312A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '22px',
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  fontWeight: 900,
                  color: '#08111f',
                  lineHeight: 1.3,
                  margin: '0 0 12px',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#64748b',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  margin: '0 0 20px',
                  flex: 1,
                }}
              >
                {item.desc}
              </p>

              <span
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#E8312A',
                  fontSize: '14px',
                  fontWeight: 900,
                  marginTop: 'auto',
                }}
              >
                View Products →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .product-category-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 640px) {
          .product-category-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FleetOverview;