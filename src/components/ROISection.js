import React from 'react';

const ROISection = () => {
  return (
    <section className="roi-section">
      <div className="container">
        <div className="roi-content">
          <div className="roi-left">
            <h2 className="roi-title">See the ROI in 90 Days</h2>
            <p className="roi-description">
              Our customers see an average ROI of 30% within the first 90 days.
            </p>
            <div className="roi-stats-list">
              <div className="roi-stat-item">
                <div className="roi-stat-icon">💰</div>
                <div className="roi-stat-content">
                  <div className="roi-stat-value">30% Average Cost Reduction</div>
                  <div className="roi-stat-desc">Through optimized routes</div>
                </div>
              </div>
              <div className="roi-stat-item">
                <div className="roi-stat-icon">⚡</div>
                <div className="roi-stat-content">
                  <div className="roi-stat-value">40% Faster Implementation</div>
                  <div className="roi-stat-desc">Plug-and-play hardware</div>
                </div>
              </div>
            </div>
            <button className="btn-roi">Calculate Your ROI</button>
          </div>
          <div className="roi-right">
            <div className="roi-chart">
              <div className="chart-placeholder">📈 ROI Growth Chart</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROISection;
