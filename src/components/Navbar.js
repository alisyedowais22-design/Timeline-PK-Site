import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Home',     path: '/' },
    {/*{ label: 'Products', path: '/products' },*/},
    { label: 'Platform', path: '/platform' },
    { label: 'Events', path: '/events' },
    { label: 'Team',     path: '/team' },
    { label: 'About',    path: '/about' },
    { label: 'Contact',  path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">

          {/* Logo */}
          <Link to="/" className="nav-brand">
            <img
              src="/Logo.png"
              alt="Timeline Telematics"
              style={{ height: '70px', width: 'auto' }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="nav-link"
                style={
                  location.pathname === link.path
                    ? { color: '#dc2626', fontWeight: '700' }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="nav-actions">
            <Link to="/contact" className="btn-demo">Talk to Expert</Link>
            <Link to="/contact" className="btn-primary">Get Demo →</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <span style={{ fontSize: '18px', fontWeight: 'bold', lineHeight: 1 }}>✕</span>
            ) : (
              <>
                <span></span>
                <span></span>
                <span></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div style={{
            padding: '16px 0 20px',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px'
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  padding: '12px 4px',
                  fontSize: '15px',
                  fontWeight: location.pathname === link.path ? '700' : '500',
                  color: location.pathname === link.path ? '#dc2626' : '#374151',
                  textDecoration: 'none',
                  borderBottom: '1px solid #f3f4f6',
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-primary"
              style={{
                display: 'block',
                marginTop: '16px',
                textAlign: 'center',
                textDecoration: 'none',
                padding: '12px 20px',
              }}
            >
              Get Demo →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;