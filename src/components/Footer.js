import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleImageError = (e) => {
    e.target.style.display = 'none';
  };

  return (
    <>
      <style>{`
        .footer {
          background: #111827;
          color: rgba(255,255,255,0.7);
          padding: 72px 0 0;
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.4fr;
          gap: 48px;
          padding-bottom: 56px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        /* Brand Column */
        .footer-brand {}

        .footer-logo-img {
          height: 52px;
          width: auto;
          margin-bottom: 20px;
          display: block;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
          max-width: 280px;
        }

        .footer-partner-tags {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }

        .footer-partner-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 6px 14px;
          border-radius: 6px;
          width: fit-content;
          text-decoration: none;
          transition: all 0.25s;
        }

        .footer-partner-tag:hover {
          background: rgba(220,38,38,0.15);
          border-color: rgba(220,38,38,0.5);
          color: #ef4444;
        }

        .footer-partner-tag span:first-child {
          font-size: 14px;
        }

        /* Social Links */
        .footer-socials {
          display: flex;
          gap: 10px;
        }

        .footer-social-btn {
          width: 36px;
          height: 36px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.25s;
        }

        .footer-social-btn:hover {
          background: #dc2626;
          border-color: #dc2626;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Nav Columns */
        .footer-col-title {
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(220,38,38,0.4);
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-list a {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-nav-list a::before {
          content: '→';
          font-size: 11px;
          color: #dc2626;
          opacity: 0;
          transform: translateX(-4px);
          transition: all 0.2s;
        }

        .footer-nav-list a:hover {
          color: #fff;
        }

        .footer-nav-list a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        /* Contact Column */
        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .footer-contact-icon {
          width: 32px;
          height: 32px;
          background: rgba(220,38,38,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-icon svg {
          width: 14px;
          height: 14px;
          fill: #ef4444;
        }

        .footer-contact-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .footer-contact-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-contact-value {
          font-size: 13px;
          color: rgba(255,255,255,0.75);
          font-weight: 500;
        }

        .footer-contact-value a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-contact-value a:hover {
          color: #ef4444;
        }

        /* Bottom Bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-bottom-links a:hover {
          color: rgba(255,255,255,0.7);
        }

        .footer-iot-badge {
          font-size: 12px;
          color: rgba(220,38,38,0.7);
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">

            {/* Brand */}
            <div className="footer-brand">
              <img
                src="/Logo.png"
                alt="Timeline Telematics"
                className="footer-logo-img"
                onError={handleImageError}
              />
              <p className="footer-description">
                Pakistan's official partner for JimiIoT Systems and Qoho Vision — 
                delivering advanced telematics, AI dashcams, and fleet management solutions nationwide.
              </p>
              <div className="footer-partner-tags">
                <a 
                  href="https://www.jimiiot.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-partner-tag"
                >
                  <span>🌐</span> Official JimiIoT Partner
                </a>
                <a 
                  href="https://www.qohovisions.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-partner-tag"
                >
                  <span>🎥</span> Qoho Vision Partner
                </a>
              </div>
              <div className="footer-socials">
                <a href="https://facebook.com" className="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com" className="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://wa.me/923111122883" className="footer-social-btn" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/platform">Teletix Platform</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="footer-col-title">Products</h4>
              <ul className="footer-nav-list">
                <li><Link to="/products">AI DashCams (JimiIoT)</Link></li>
                <li><Link to="/products">Fleet GPS Trackers</Link></li>
                <li><Link to="/products">Mobile DVR (Qoho)</Link></li>
                <li><Link to="/platform">Teletix Web App</Link></li>
                <li><Link to="/platform">Teletix PRO Mobile</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-col-title">Contact Us</h4>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Email</span>
                    <span className="footer-contact-value">
                      <a href="mailto:info@teletix.me">info@teletix.me</a>
                    </span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg viewBox="0 0 16 16">
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Phone</span>
                    <span className="footer-contact-value">
                      <a href="tel:+923111122883">+92 311 1122 883</a>
                    </span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">WhatsApp</span>
                    <span className="footer-contact-value">
                      <a href="https://wa.me/923111122883" target="_blank" rel="noopener noreferrer">Chat Now</a>
                    </span>
                  </div>
                </li>
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Location</span>
                    <span className="footer-contact-value">FLT NO, 3 2nd Floor Plot NO, 18/C KH E JAMI PHASE/7 COMM AREA DEFENCE HOUSING AUTHORITY, KARACHI</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Timeline Telematics Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;