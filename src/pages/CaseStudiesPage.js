import React, { useEffect } from 'react';
import CaseStudies from '../components/CaseStudies';

const CaseStudiesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ paddingTop: '112px' }}>
      <section
        style={{
          padding: '130px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '520px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0, 20, 30, 0.72), rgba(0, 20, 30, 0.78)), url(https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(232,49,42,0.22)',
              color: '#fca5a5',
              fontSize: '11px',
              fontWeight: '800',
              padding: '5px 16px',
              borderRadius: '999px',
              letterSpacing: '1.6px',
              textTransform: 'uppercase',
              marginBottom: '18px',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Success Stories
          </div>

          <h1
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '900',
              fontSize: 'clamp(34px, 5vw, 58px)',
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '18px',
            }}
          >
            Real Results for <span style={{ color: '#E8312A' }}>Real Fleets</span>
          </h1>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '17px',
              lineHeight: '1.75',
              maxWidth: '650px',
              margin: '0 auto',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            From Karachi to Dubai to Frankfurt — see how we've transformed fleet operations for operators across Pakistan, the Middle East, and Europe.
          </p>
        </div>
      </section>

      <CaseStudies />
    </main>
  );
};

export default CaseStudiesPage;