import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>Timeline Telematics</span>
            </div>
            <p className="footer-tagline">
              Enterprise-grade fleet management solutions for modern businesses.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">GPS Tracking</a></li>
                <li><a href="#">Fleet Management</a></li>
                <li><a href="#">Driver Safety</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Timeline Telematics. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
