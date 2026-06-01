import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const platformDropdownRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 100);

      if (currentScrollY > 40 && currentScrollY > lastScrollY) {
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowTopBar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target)) {
        setContactDropdownOpen(false);
      }

      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }

      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }

      if (platformDropdownRef.current && !platformDropdownRef.current.contains(event.target)) {
        setPlatformDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setContactDropdownOpen(false);
    setProductsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setPlatformDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const productCategories = [
    { name: 'Vehicle Trackers', desc: 'GPS tracking devices for fleet visibility', link: '/our-products' },
    { name: 'AI Dashcams', desc: 'Smart video telematics and driver safety', link: '/our-products' },
    { name: 'CAN & OBD Products', desc: 'Vehicle diagnostics and performance data', link: '/our-products' },
    { name: 'Asset Trackers', desc: 'Secure monitoring for mobile assets', link: '/our-products' },
    { name: 'Personal Trackers', desc: 'Location safety for people and teams', link: '/our-products' },
    { name: 'Non-AI Dashcams', desc: 'Reliable standard dash camera solutions', link: '/our-products' },
  ];

  const solutions = [
    { name: 'Logistics & Courier', desc: 'Fleet and delivery tracking solutions', link: '/solutions/logistics' },
    { name: 'Public Transport', desc: 'Route and passenger operations', link: '/solutions/public-transport' },
    { name: 'Oil & Gas', desc: 'High-security fleet monitoring', link: '/solutions/oil-gas' },
    { name: 'Construction', desc: 'Equipment and site tracking', link: '/solutions/construction' },
    { name: 'Healthcare', desc: 'Emergency fleet visibility', link: '/solutions/healthcare' },
    { name: 'Government', desc: 'Accountable fleet operations', link: '/solutions/government' },
    { name: 'Agriculture', desc: 'Farm machinery tracking', link: '/solutions/agriculture' },
  ];

  const platforms = [
    { name: 'Teletix Web App', desc: 'Browser-based fleet management dashboard', link: '/platform' },
    { name: 'Teletix PRO Mobile', desc: 'Mobile fleet monitoring application', link: '/platform' },
    { name: 'Customer Portal', desc: 'Client access and reporting portal', link: '/platform' },
  ];

  const arrowIcon = (open) => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{
        marginLeft: '5px',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );

  const dropdownBaseStyle = (open, width = '420px') => ({
    position: 'absolute',
    top: 'calc(100% + 14px)',
    left: '50%',
    width,
    background: '#ffffff',
    borderRadius: '10px',
    padding: '18px',
    boxShadow: '0 18px 45px rgba(15, 23, 42, 0.14)',
    border: '1px solid #e5e7eb',
    opacity: open ? 1 : 0,
    visibility: open ? 'visible' : 'hidden',
    transform: open ? 'translate(-50%, 0)' : 'translate(-50%, 10px)',
    transition: 'all 0.22s ease',
    zIndex: 9999,
  });

  const dropdownHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
    paddingBottom: '12px',
    borderBottom: '1px solid #e5e7eb',
  };

  const dropdownHeadingStyle = {
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    fontWeight: 800,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  };

  const viewAllStyle = {
    color: '#E8312A',
    fontSize: '12px',
    fontWeight: 700,
    textDecoration: 'none',
  };

  const dropdownCardStyle = {
    display: 'block',
    padding: '13px 14px',
    borderRadius: '8px',
    textDecoration: 'none',
    background: '#ffffff',
    border: '1px solid #edf0f4',
    transition: 'all 0.2s ease',
  };

  const dropdownTitleStyle = {
    display: 'block',
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: 1.35,
    marginBottom: '4px',
  };

  const dropdownDescStyle = {
    display: 'block',
    color: '#6b7280',
    fontSize: '12px',
    lineHeight: 1.45,
    fontWeight: 400,
  };

  const onCardEnter = (e) => {
    e.currentTarget.style.background = '#f9fafb';
    e.currentTarget.style.borderColor = '#d1d5db';
    e.currentTarget.style.transform = 'translateY(-1px)';
  };

  const onCardLeave = (e) => {
    e.currentTarget.style.background = '#ffffff';
    e.currentTarget.style.borderColor = '#edf0f4';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`top-bar ${showTopBar ? 'top-bar-visible' : 'top-bar-hidden'}`}>
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+923111122883" className="top-bar-link">
              <span>+92 311 1122 883</span>
            </a>

            <a href="mailto:info@teletix.me" className="top-bar-link">
              <span>info@teletix.me</span>
            </a>
          </div>

          <div className="top-bar-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              f
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              x
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              in
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${!showTopBar ? 'navbar-top' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand">
              <img src="/TimelineLogo.png" alt="Timeline Telematics" className="logo-icon logo-large" />
            </Link>

            <div className="nav-links desktop-only">
              <Link to="/" className="nav-link">
                Home
              </Link>

              {/* Products */}
              <div
                className="nav-dropdown-wrapper"
                ref={productsDropdownRef}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <Link to="/our-products" className="nav-link nav-dropdown-trigger">
                  Products
                  {arrowIcon(productsDropdownOpen)}
                </Link>

                <div style={dropdownBaseStyle(productsDropdownOpen, '520px')}>
                  <div style={dropdownHeaderStyle}>
                    <span style={dropdownHeadingStyle}>Product Categories</span>
                    <Link to="/our-products" style={viewAllStyle}>
                      View All
                    </Link>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      gap: '8px',
                    }}
                  >
                    {productCategories.map((cat, idx) => (
                      <Link
                        key={idx}
                        to={cat.link}
                        style={dropdownCardStyle}
                        onMouseEnter={onCardEnter}
                        onMouseLeave={onCardLeave}
                      >
                        <span style={dropdownTitleStyle}>{cat.name}</span>
                        <span style={dropdownDescStyle}>{cat.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div
                className="nav-dropdown-wrapper"
                ref={solutionsDropdownRef}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <Link to="/solutions" className="nav-link nav-dropdown-trigger">
                  Solutions
                  {arrowIcon(solutionsDropdownOpen)}
                </Link>

                <div style={dropdownBaseStyle(solutionsDropdownOpen, '620px')}>
                  <div style={dropdownHeaderStyle}>
                    <span style={dropdownHeadingStyle}>Industry Solutions</span>
                    <Link to="/solutions" style={viewAllStyle}>
                      View All
                    </Link>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                      gap: '8px',
                    }}
                  >
                    {solutions.map((sol, idx) => (
                      <Link
                        key={idx}
                        to={sol.link}
                        style={dropdownCardStyle}
                        onMouseEnter={onCardEnter}
                        onMouseLeave={onCardLeave}
                      >
                        <span style={dropdownTitleStyle}>{sol.name}</span>
                        <span style={dropdownDescStyle}>{sol.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Platform */}
              <div
                className="nav-dropdown-wrapper"
                ref={platformDropdownRef}
                onMouseEnter={() => setPlatformDropdownOpen(true)}
                onMouseLeave={() => setPlatformDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <Link to="/platform" className="nav-link nav-dropdown-trigger">
                  Platform
                  {arrowIcon(platformDropdownOpen)}
                </Link>

                <div style={dropdownBaseStyle(platformDropdownOpen, '420px')}>
                  <div style={dropdownHeaderStyle}>
                    <span style={dropdownHeadingStyle}>Platforms</span>
                    <Link to="/platform" style={viewAllStyle}>
                      View All
                    </Link>
                  </div>

                  <div style={{ display: 'grid', gap: '8px' }}>
                    {platforms.map((platform, idx) => (
                      <Link
                        key={idx}
                        to={platform.link}
                        style={dropdownCardStyle}
                        onMouseEnter={onCardEnter}
                        onMouseLeave={onCardLeave}
                      >
                        <span style={dropdownTitleStyle}>{platform.name}</span>
                        <span style={dropdownDescStyle}>{platform.desc}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link to="/events" className="nav-link">
                Events
              </Link>

              <Link to="/team" className="nav-link">
                Teams
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>

              {/* Contact */}
              <div
                className="nav-dropdown-wrapper"
                ref={contactDropdownRef}
                onMouseEnter={() => setContactDropdownOpen(true)}
                onMouseLeave={() => setContactDropdownOpen(false)}
                style={{ position: 'relative' }}
              >
                <Link to="/contact" className="nav-link nav-dropdown-trigger">
                  Contact
                  {arrowIcon(contactDropdownOpen)}
                </Link>

                <div style={dropdownBaseStyle(contactDropdownOpen, '300px')}>
                  <div style={dropdownHeaderStyle}>
                    <span style={dropdownHeadingStyle}>Inquiry | Support</span>
                  </div>

                  <div style={{ display: 'grid', gap: '8px' }}>
                    <Link
                      to="/product-inquiry"
                      style={dropdownCardStyle}
                      onMouseEnter={onCardEnter}
                      onMouseLeave={onCardLeave}
                    >
                      <span style={dropdownTitleStyle}>Product Inquiry</span>
                    </Link>

                    <Link
                      to="/technical-support"
                      style={dropdownCardStyle}
                      onMouseEnter={onCardEnter}
                      onMouseLeave={onCardLeave}
                    >
                      <span style={dropdownTitleStyle}>Technical Support</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav-actions desktop-only">
              <Link to="/contact" className="btn-demo">
                Talk to Expert
              </Link>
            </div>

            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'menu-open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>
              Home
            </Link>

            <Link to="/our-products" className="mobile-nav-link" onClick={closeMobileMenu}>
              Products
            </Link>

            <Link to="/solutions" className="mobile-nav-link" onClick={closeMobileMenu}>
              Solutions
            </Link>

            {solutions.map((sol, idx) => (
              <Link key={idx} to={sol.link} className="mobile-nav-link mobile-nav-sub" onClick={closeMobileMenu}>
                {sol.name}
              </Link>
            ))}

            <Link to="/platform" className="mobile-nav-link" onClick={closeMobileMenu}>
              Platform
            </Link>

            <Link to="/events" className="mobile-nav-link" onClick={closeMobileMenu}>
              Events
            </Link>

            <Link to="/team" className="mobile-nav-link" onClick={closeMobileMenu}>
              Teams
            </Link>

            <Link to="/about" className="mobile-nav-link" onClick={closeMobileMenu}>
              About
            </Link>

            <Link to="/product-inquiry" className="mobile-nav-link" onClick={closeMobileMenu}>
              Product Inquiry
            </Link>

            <Link to="/technical-support" className="mobile-nav-link" onClick={closeMobileMenu}>
              Technical Support
            </Link>
          </div>

          <div className="mobile-menu-actions">
            <Link to="/contact" className="btn-mobile-demo" onClick={closeMobileMenu}>
              Talk to Expert
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;