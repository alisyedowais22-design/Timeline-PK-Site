import React from 'react';
import { Link } from 'react-router-dom';

const RED = '#E8312A';
const DARK = '#111827';
const MUTED = '#6b7280';
const BG = '#f8fafc';
const FONT = "'Poppins', sans-serif";

const industries = [
  {
    title: 'Logistics & Courier',
    slug: 'logistics',
    desc: 'Real-time fleet visibility, delivery tracking, route monitoring and driver performance control for logistics and courier companies.',
    points: ['Fleet tracking', 'Route visibility', 'Delivery monitoring', 'Driver accountability'],
  },
  {
    title: 'Public Transport',
    slug: 'public-transport',
    desc: 'Smart monitoring solutions for buses, vans and passenger transport fleets with route, schedule and safety visibility.',
    points: ['Passenger fleet tracking', 'Route control', 'Vehicle safety', 'Operational monitoring'],
  },
  {
    title: 'Oil & Gas',
    slug: 'oil-gas',
    desc: 'High-security tracking and monitoring for fuel tankers, field vehicles and oil & gas fleet operations.',
    points: ['High-risk fleet monitoring', 'Fuel visibility', 'Route compliance', 'Safety alerts'],
  },
  {
    title: 'Construction',
    slug: 'construction',
    desc: 'Track construction vehicles, heavy machinery, site assets and mobile teams across different project locations.',
    points: ['Equipment tracking', 'Site visibility', 'Asset safety', 'Utilization monitoring'],
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    desc: 'Fleet visibility for ambulances, healthcare transport and emergency response vehicles with faster operational control.',
    points: ['Ambulance tracking', 'Emergency response', 'Route monitoring', 'Fleet coordination'],
  },
  {
    title: 'Government',
    slug: 'government',
    desc: 'Accountable fleet management for government departments, public vehicles and official transport operations.',
    points: ['Official fleet tracking', 'Accountability', 'Usage reporting', 'Security monitoring'],
  },
  {
    title: 'Agriculture',
    slug: 'agriculture',
    desc: 'Track agriculture vehicles, field machinery, mobile teams and farming assets for better field operation visibility.',
    points: ['Farm machinery tracking', 'Field team visibility', 'Asset control', 'Route history'],
  },
];

const HeroFixStyle = () => (
  <style>{`
    .tl-fixed-hero {
      padding: 310px 20px 95px !important;
    }

    @media (max-width: 1100px) {
      .tl-fixed-hero {
        padding: 145px 18px 80px !important;
      }
    }

    @media (max-width: 768px) {
      .tl-fixed-hero {
        padding: 125px 16px 70px !important;
      }
    }
  `}</style>
);

const IndustriesPage = () => {
  return (
    <div style={{ fontFamily: FONT, background: '#fff' }}>
      <HeroFixStyle />

      <section
        className="tl-fixed-hero"
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 55%, #E8312A 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1180px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              padding: '8px 14px',
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '999px',
              fontSize: '12px',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Industries We Serve
          </span>

          <h1
            style={{
              fontSize: 'clamp(42px, 6vw, 76px)',
              lineHeight: 1,
              margin: 0,
              fontWeight: 900,
              letterSpacing: '-2px',
              maxWidth: '850px',
            }}
          >
            Fleet Solutions for Every Industry
          </h1>

          <p
            style={{
              fontSize: '18px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.82)',
              maxWidth: '760px',
              margin: '24px 0 0',
            }}
          >
            Timeline Telematics provides GPS tracking, fleet visibility, safety monitoring and
            operational control for multiple industries across Pakistan.
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            right: '-120px',
            bottom: '-160px',
            width: '420px',
            height: '420px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.08)',
          }}
        />
      </section>

      <section style={{ padding: '80px 20px', background: BG }}>
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
              gap: '24px',
            }}
          >
            {industries.map((industry, index) => (
              <Link
                key={industry.slug}
                to={`/industries/${industry.slug}`}
                style={{
                  background: '#fff',
                  borderRadius: '22px',
                  padding: '28px',
                  textDecoration: 'none',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 12px 35px rgba(17,24,39,0.06)',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '340px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 18px 45px rgba(17,24,39,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(232,49,42,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 12px 35px rgba(17,24,39,0.06)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#fef2f2',
                    color: RED,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '18px',
                    marginBottom: '22px',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3
                  style={{
                    margin: 0,
                    color: DARK,
                    fontSize: '24px',
                    fontWeight: 900,
                    letterSpacing: '-0.6px',
                  }}
                >
                  {industry.title}
                </h3>

                <p
                  style={{
                    color: MUTED,
                    fontSize: '14px',
                    lineHeight: 1.8,
                    margin: '14px 0 20px',
                  }}
                >
                  {industry.desc}
                </p>

                <div style={{ display: 'grid', gap: '9px', marginTop: 'auto' }}>
                  {industry.points.map((point) => (
                    <div
                      key={point}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '9px',
                        color: '#374151',
                        fontSize: '13px',
                        fontWeight: 600,
                      }}
                    >
                      <span
                        style={{
                          width: '7px',
                          height: '7px',
                          borderRadius: '50%',
                          background: RED,
                          flexShrink: 0,
                        }}
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: '24px',
                    color: RED,
                    fontSize: '14px',
                    fontWeight: 900,
                  }}
                >
                  Explore Industry →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 20px', background: '#fff' }}>
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            background: DARK,
            borderRadius: '28px',
            padding: '54px 40px',
            textAlign: 'center',
            color: '#fff',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 50px)',
              margin: 0,
              fontWeight: 900,
              letterSpacing: '-1px',
            }}
          >
            Need an Industry-Specific Fleet Solution?
          </h2>

          <p
            style={{
              color: 'rgba(255,255,255,0.76)',
              maxWidth: '720px',
              margin: '18px auto 30px',
              fontSize: '16px',
              lineHeight: 1.8,
            }}
          >
            Our team can help you select the right tracking devices, platform features and
            reporting setup based on your industry requirements.
          </p>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: RED,
              color: '#fff',
              padding: '14px 28px',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: 900,
              fontSize: '14px',
            }}
          >
            Talk to Expert →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;