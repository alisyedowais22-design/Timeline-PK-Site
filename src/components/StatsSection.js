import React, { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    {
      number: '20+',
      label: 'Years in the industry',
      position: 'top-right'
    },
    {
      number: '50+',
      label: 'Smart products and solutions',
      position: 'center'
    },
    {
      number: '25K+',
      label: 'Fleet operators worldwide',
      position: 'bottom-left'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-container">
        {/* Background Pattern */}
        <div className="stats-pattern">
          <svg className="curved-lines" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
            {/* Top Right Curves */}
            <g className={`curve-group ${isVisible ? 'animate' : ''}`}>
              {[...Array(15)].map((_, i) => (
                <path
                  key={`tr-${i}`}
                  d={`M ${900 + i * 18} ${150 - i * 10} Q ${1000 + i * 12} ${200 - i * 8}, ${1100 + i * 10} ${150 - i * 10}`}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  opacity={0.12 - i * 0.007}
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              ))}
            </g>

            {/* Bottom Left Curves */}
            <g className={`curve-group ${isVisible ? 'animate' : ''}`}>
              {[...Array(12)].map((_, i) => (
                <path
                  key={`bl-${i}`}
                  d={`M ${150 - i * 12} ${700 + i * 12} Q ${250 - i * 10} ${750 + i * 10}, ${350 - i * 12} ${700 + i * 12}`}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  opacity={0.12 - i * 0.008}
                  style={{ animationDelay: `${i * 0.06}s` }}
                />
              ))}
            </g>

            {/* Center Curves */}
            <g className={`curve-group ${isVisible ? 'animate' : ''}`}>
              {[...Array(10)].map((_, i) => (
                <path
                  key={`c-${i}`}
                  d={`M ${500 + i * 15} ${450 - i * 18} Q ${600 + i * 12} ${500 - i * 15}, ${700 + i * 15} ${450 - i * 18}`}
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  opacity={0.1 - i * 0.008}
                  style={{ animationDelay: `${i * 0.07}s` }}
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="stats-content">
          <div className="stats-header">
            <h3 className="stats-subtitle">Built on Trust.</h3>
            <h2 className="stats-title">Powered by Excellence.</h2>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card ${stat.position} ${isVisible ? 'show' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;