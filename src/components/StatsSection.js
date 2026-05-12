import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      number: 20,
      suffix: '+',
      label: 'Years in the Industry',
      description: 'Pioneering telematics solutions since 2004',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      ),
    },
    {
      number: 50,
      suffix: '+',
      label: 'Fleet Partners',
      description: "Trusted by Pakistan's leading enterprises",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" rx="2"/>
          <path d="M16 8h4l3 4v4h-7V8Z"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
    },
    {
      number: 25,
      suffix: 'K+',
      label: 'Vehicles Tracked',
      description: 'Real-time monitoring across Pakistan',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    stats.forEach((stat, i) => {
      let start = 0;
      const duration = 2000;
      const totalSteps = duration / 16;
      const step = stat.number / totalSteps;
      const timer = setInterval(() => {
        start += step;
        if (start >= stat.number) {
          start = stat.number;
          clearInterval(timer);
        }
        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.floor(start);
          return next;
        });
      }, 16);
    });
  }, [isVisible]);

  const styles = {
    section: {
      background: 'linear-gradient(160deg, #0a0a0a 0%, #0f0f0f 50%, #0a0a0a 100%)',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Poppins', sans-serif",
    },
    blobLeft: {
      position: 'absolute',
      top: '-100px',
      left: '-150px',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(220,38,38,0.12) 0%, transparent 65%)',
      pointerEvents: 'none',
    },
    blobRight: {
      position: 'absolute',
      bottom: '-100px',
      right: '-150px',
      width: '450px',
      height: '450px',
      background: 'radial-gradient(circle, rgba(220,38,38,0.09) 0%, transparent 65%)',
      pointerEvents: 'none',
    },
    blobCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '600px',
      height: '300px',
      background: 'radial-gradient(ellipse, rgba(220,38,38,0.04) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    gridTexture: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `
        linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      pointerEvents: 'none',
    },
    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      position: 'relative',
      zIndex: 1,
    },
    topRow: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      marginBottom: '50px',
    },
    headingBlock: {
      flex: 1,
    },
    eyebrow: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '3.5px',
      textTransform: 'uppercase',
      color: '#dc2626',
      marginBottom: '18px',
    },
    eyebrowLine: {
      width: '32px',
      height: '1px',
      background: '#dc2626',
      display: 'inline-block',
    },
    mainTitle: {
      fontSize: 'clamp(28px, 7vw, 60px)',
      fontWeight: '700',
      lineHeight: '1.15',
      color: '#ffffff',
      margin: 0,
      letterSpacing: '-1px',
    },
    titleRed: {
      color: '#dc2626',
    },
    rightDesc: {
      fontSize: '14px',
      color: 'rgba(255,255,255,0.5)',
      lineHeight: '1.8',
      maxWidth: '100%',
      paddingLeft: '0',
      borderLeft: 'none',
    },
    divider: {
      width: '100%',
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, rgba(220,38,38,0.5) 30%, rgba(255,255,255,0.06) 70%, transparent 100%)',
      marginBottom: '0',
    },
    cardsWrapper: {
      border: '1px solid rgba(255,255,255,0.06)',
      borderRadius: '4px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      overflow: 'hidden',
    },
    card: (index, visible) => ({
      padding: '40px 24px',
      position: 'relative',
      borderBottom: index < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(24px)',
      transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      cursor: 'default',
    }),
    cardTopLine: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'linear-gradient(90deg, transparent, #dc2626, transparent)',
    },
    iconWrap: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: 'rgba(220,38,38,0.08)',
      border: '1px solid rgba(220,38,38,0.18)',
      color: '#dc2626',
      marginBottom: '20px',
    },
    number: {
      fontSize: 'clamp(44px, 10vw, 64px)',
      fontWeight: '700',
      color: '#ffffff',
      lineHeight: '1',
      marginBottom: '10px',
      letterSpacing: '-2px',
      fontFamily: "'Poppins', sans-serif",
    },
    numberAccent: {
      color: '#dc2626',
    },
    label: {
      fontSize: '15px',
      fontWeight: '600',
      color: 'rgba(255,255,255,0.85)',
      marginBottom: '8px',
      letterSpacing: '0.2px',
    },
    description: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.35)',
      lineHeight: '1.7',
    },
    bottomStrip: {
      marginTop: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      flexWrap: 'wrap',
    },
    stripLine: {
      display: 'none',
    },
    stripBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 20px',
      border: '1px solid rgba(220,38,38,0.2)',
      borderRadius: '100px',
      background: 'rgba(220,38,38,0.05)',
      fontSize: '11px',
      fontWeight: '500',
      color: 'rgba(255,255,255,0.5)',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
    },
    stripDot: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: '#dc2626',
      animation: 'pulse-dot 2s infinite',
    },
  };

  // Media query styles
  const mediaStyles = `
    @media (min-width: 768px) {
      .stats-top-row {
        flex-direction: row !important;
        align-items: flex-end !important;
        gap: 60px !important;
        margin-bottom: 70px !important;
      }
      
      .stats-right-desc {
        flex: 0 0 310px !important;
        border-left: 1px solid rgba(255,255,255,0.08) !important;
        padding-left: 32px !important;
      }
      
      .stats-cards-wrapper {
        grid-template-columns: repeat(3, 1fr) !important;
      }
      
      .stats-card {
        padding: 52px 44px !important;
        border-right: 1px solid rgba(255,255,255,0.06) !important;
        border-bottom: none !important;
      }
      
      .stats-card:last-child {
        border-right: none !important;
      }
      
      .stats-bottom-strip {
        margin-top: 56px !important;
      }
      
      .stats-strip-line {
        display: block !important;
        flex: 1 !important;
      }
      
      .stats-inner {
        padding: 0 40px !important;
      }
    }
    
    @media (min-width: 1024px) {
      .stats-section {
        padding: 100px 0 !important;
      }
    }
  `;

  return (
    <>
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }
        .stat-card-hover {
          transition: background 0.3s ease;
        }
        .stat-card-hover:hover {
          background: rgba(220,38,38,0.03);
        }
        ${mediaStyles}
      `}</style>

      <section className="stats-section" style={styles.section} ref={sectionRef}>
        <div style={styles.blobLeft} />
        <div style={styles.blobRight} />
        <div style={styles.blobCenter} />
        <div style={styles.gridTexture} />

        <div className="stats-inner" style={styles.inner}>

          <div className="stats-top-row" style={styles.topRow}>
            <div style={styles.headingBlock}>
              <div style={styles.eyebrow}>
                <span style={styles.eyebrowLine} />
                Our Impact
              </div>
              <h2 style={styles.mainTitle}>
                Built on <span style={styles.titleRed}>Trust.</span><br />
                Powered by Excellence.
              </h2>
            </div>
            <p className="stats-right-desc" style={styles.rightDesc}>
              Two decades of delivering cutting-edge fleet intelligence across Pakistan — from real-time tracking to full telematics ecosystems.
            </p>
          </div>

          <div style={styles.divider} />

          <div className="stats-cards-wrapper" style={styles.cardsWrapper}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card-hover stats-card"
                style={styles.card(index, isVisible)}
              >
                <div style={styles.cardTopLine} />
                <div style={styles.iconWrap}>
                  {stat.icon}
                </div>
                <div style={styles.number}>
                  {counts[index]}
                  <span style={styles.numberAccent}>{stat.suffix}</span>
                </div>
                <div style={styles.label}>{stat.label}</div>
                <div style={styles.description}>{stat.description}</div>
              </div>
            ))}
          </div>

          <div className="stats-bottom-strip" style={styles.bottomStrip}>
            <div className="stats-strip-line" style={styles.stripLine} />
            <div style={styles.stripBadge}>
              <div style={styles.stripDot} />
              Live monitoring — 24 / 7 / 365
            </div>
            <div className="stats-strip-line" style={styles.stripLine} />
          </div>

        </div>
      </section>
    </>
  );
};

export default StatsSection;