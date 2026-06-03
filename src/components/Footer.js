import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

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
          padding: 64px 0 0;
          border-top: 12px solid #b91c1c;
        }

        .footer .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .footer-inner {
          display: grid;
          grid-template-columns: 1.45fr 0.9fr 1fr 1.55fr;
          gap: 54px;
          padding-bottom: 52px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          align-items: flex-start;
        }

        .footer-logo-img {
          height: 82px;
          width: auto;
          margin-bottom: 18px;
          display: block;
        }

        .footer-description {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.58);
          margin-bottom: 22px;
          max-width: 330px;
        }

        .footer-partner-tags {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 26px;
        }

        .footer-partner-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 8px 14px;
          border-radius: 8px;
          width: fit-content;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-partner-tag:hover {
          background: rgba(220,38,38,0.15);
          border-color: rgba(220,38,38,0.5);
          color: #fff;
          transform: translateX(3px);
        }

        .footer-socials {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-top: 4px;
        }

        .footer-social-btn {
          color: #9ca3af;
          font-size: 18px;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .footer-social-btn:hover {
          color: #ffffff;
          transform: translateY(-1px);
        }

        .footer-social-divider {
          width: 1px;
          height: 18px;
          background: rgba(255,255,255,0.16);
        }

        .footer-col-title {
          font-size: 12px;
          font-weight: 800;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          margin-bottom: 22px;
          padding-bottom: 13px;
          border-bottom: 1px solid rgba(220,38,38,0.45);
        }

        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-nav-list a {
          font-size: 14px;
          color: rgba(255,255,255,0.58);
          text-decoration: none;
          transition: all 0.2s ease;
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
          transition: all 0.2s ease;
        }

        .footer-nav-list a:hover {
          color: #fff;
          transform: translateX(2px);
        }

        .footer-nav-list a:hover::before {
          opacity: 1;
          transform: translateX(0);
        }

        .footer-contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .footer-contact-icon {
          width: 34px;
          height: 34px;
          background: rgba(220,38,38,0.16);
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .footer-contact-icon svg {
          width: 15px;
          height: 15px;
          fill: #ef4444;
        }

        .footer-contact-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .footer-contact-label {
          font-size: 10.5px;
          font-weight: 800;
          color: rgba(255,255,255,0.38);
          text-transform: uppercase;
          letter-spacing: 1.6px;
        }

        .footer-contact-value {
          font-size: 13.5px;
          color: rgba(255,255,255,0.82);
          font-weight: 600;
          line-height: 1.55;
        }

        .footer-contact-value a {
          color: rgba(255,255,255,0.82);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-contact-value a:hover {
          color: #ef4444;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          margin: 0;
        }

        .footer-bottom-links {
          display: flex;
          gap: 22px;
        }

        .footer-bottom-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: rgba(255,255,255,0.75);
        }

        @media (max-width: 1100px) {
          .footer-inner {
            grid-template-columns: 1.3fr 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 700px) {
          .footer {
            padding-top: 46px;
          }

          .footer .container {
            padding: 0 22px;
          }

          .footer-inner {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .footer-logo-img {
            height: 72px;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .footer-bottom-links {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="container">
          <div className="footer-inner">

            <div className="footer-brand">
              <img
                src="/TimelineLogoWhite.png"
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
                <a href="https://linkedin.com" className="footer-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>

                <a href="https://twitter.com" className="footer-social-btn" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>

                <a href="https://facebook.com" className="footer-social-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>

                <a href="https://youtube.com" className="footer-social-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>

                <a href="https://instagram.com" className="footer-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>

                <span className="footer-social-divider" />
              </div>
            </div>

            <div>
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/case-studies">Case Studies</Link></li>
                <li><Link to="/our-products">Products</Link></li>
                <li><Link to="/platform">Platform</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Products</h4>
              <ul className="footer-nav-list">
                <li><Link to="/our-products">AI DashCams</Link></li>
                <li><Link to="/our-products">Fleet GPS Trackers</Link></li>
                <li><Link to="/our-products">CAN & OBD Trackers</Link></li>
                <li><Link to="/our-products">Asset Trackers</Link></li>
                <li><Link to="/our-products">Personal Trackers</Link></li>
                <li><Link to="/our-products">Mobile DVR</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Contact Us</h4>

              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Z"/>
                    </svg>
                  </div>
                  <div className="footer-contact-text">
                    <span className="footer-contact-label">Email</span>
                    <span className="footer-contact-value">
                      <a href="mailto:info.pk@timelinetelematics.com">info.pk@timelinetelematics.com</a>
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
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475"/>
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
                    <span className="footer-contact-label">Lahore Office</span>
                    <span className="footer-contact-value">
                      Plot # 456, Block G Phase 1 Johar Town, Lahore, Punjab
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
                    <span className="footer-contact-label">Karachi Office</span>
                    <span className="footer-contact-value">
                      FLT NO, 3 2nd Floor Plot NO, 18/C KH E JAMI PHASE/7 COMM AREA DEFENCE HOUSING AUTHORITY, KARACHI
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2026 Timeline Telematics Pvt. Ltd. All rights reserved.
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