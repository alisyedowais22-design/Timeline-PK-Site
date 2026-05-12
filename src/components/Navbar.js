import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contactDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);
  const solutionsDropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
      if (currentScrollY > 40 && currentScrollY > lastScrollY) setShowTopBar(false);
      else if (currentScrollY < lastScrollY) setShowTopBar(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactDropdownRef.current && !contactDropdownRef.current.contains(event.target))
        setContactDropdownOpen(false);
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target))
        setProductsDropdownOpen(false);
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target))
        setSolutionsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setContactDropdownOpen(false);
    setProductsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  const toggleContactDropdown = (e) => {
    e.preventDefault();
    setContactDropdownOpen(!contactDropdownOpen);
    setProductsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const productCategories = [
    {
      title: 'Vehicle Trackers',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      products: [
        { name: 'GT06N 4G', desc: 'Classic Upgraded',     link: '/our-products/gt06n-4g' },
        { name: 'VG03',     desc: 'Discreet Tracking',    link: '/our-products/vg03' },
        { name: 'VL103D',   desc: 'Tiny Device',          link: '/our-products/vl103d' },
        { name: 'VL103M',   desc: 'Minimal Form',         link: '/our-products/vl103m' },
        { name: 'VL110C',   desc: 'Any Vehicle',          link: '/our-products/vl110c' },
        { name: 'VL802',    desc: 'More Visibility',      link: '/our-products/vl802' },
        { name: 'VL808',    desc: 'Intelligent Tracking', link: '/our-products/vl808' },
        { name: 'X3',       desc: 'Voice Tracker',        link: '/our-products/x3' },
        { name: 'GT06N',    desc: 'The Classic',          link: '/our-products/gt06n' },
      ]
    },
    {
      title: 'AI Dashcams',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      products: [
        { name: 'JC371',  desc: 'AI Dashcam with ADAS',     link: '/our-products/jc371' },
        { name: 'JC450',  desc: 'Multi-Channel AI Dashcam',  link: '/our-products/jc450' },
        { name: 'JC261',  desc: 'Dual Camera AI Dashcam',    link: '/our-products/jc261' },
        { name: 'JC261P', desc: 'Pro AI Dashcam',            link: '/our-products/jc261p' },
        { name: 'JC400D', desc: '4G AI Dashcam',             link: '/our-products/jc400d' },
      ]
    },
    {
      title: 'CAN & OBD Products',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
        </svg>
      ),
      products: [
        { name: 'VL502', desc: 'Fleet CAN Tracker', link: '/our-products/vl502' },
      ]
    },
    {
      title: 'Asset Trackers',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      ),
      products: [
        { name: 'LL303PRO', desc: '5 Years Battery',  link: '/our-products/ll303pro' },
        { name: 'LL301',    desc: 'Silent Protector', link: '/our-products/ll301' },
      ]
    },
    {
      title: 'Personal Trackers',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      products: [
        { name: 'PL200', desc: 'Silent Guardian', link: '/our-products/pl200' },
      ]
    },
    {
      title: 'Non-AI Dashcams',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
        </svg>
      ),
      products: [
        { name: 'JC181', desc: 'Basic Dashcam', link: '/our-products/jc181' },
      ]
    }
  ];

  const solutions = [
    { icon: '', name: 'Track & Trace', desc: '', link: '/solutions/track-and-trace' },
    { icon: '', name: 'Teletix Pro',   desc: '', link: '/solutions/teletix-pro' },
    { icon: '', name: 'WhatsApp API',  desc: '', link: '/solutions/whatsapp-api' },
    { icon: '', name: 'Telebook',      desc: '', link: '/solutions/telebook' },
    { icon: '', name: 'AutoCall',      desc: '', link: '/solutions/autocall' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${showTopBar ? 'top-bar-visible' : 'top-bar-hidden'}`}>
        <div className="top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+923111122883" className="top-bar-link">
              <span>📞</span><span>+92 311 1122 883</span>
            </a>
            <a href="mailto:info@teletix.me" className="top-bar-link">
              <span>✉️</span><span>info@teletix.me</span>
            </a>
          </div>
          <div className="top-bar-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-bar-social">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${!showTopBar ? 'navbar-top' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="nav-brand">
              <img src="/TimelineLogo.png" alt="Timeline Telematics" className="logo-icon logo-large" />
            </Link>

            {/* Desktop Nav */}
            <div className="nav-links desktop-only">
              <Link to="/" className="nav-link">Home</Link>

              {/* Products Mega Menu */}
              <div
                className="nav-dropdown-wrapper nav-mega-dropdown"
                ref={productsDropdownRef}
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                <Link to="/our-products" className="nav-link nav-dropdown-trigger">
                  Products
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ marginLeft: '4px', transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </Link>
                <div className={`nav-mega-menu ${productsDropdownOpen ? 'show' : ''}`}>
                  <div className="mega-menu-grid">
                    {productCategories.map((category, idx) => (
                      <div key={idx} className="mega-menu-category">
                        <div className="category-header">
                          <span className="category-icon">{category.icon}</span>
                          <h4>{category.title}</h4>
                        </div>
                        <ul className="category-products">
                          {category.products.map((product, prodIdx) => (
                            <li key={prodIdx}>
                              <Link to={product.link} className="product-link">
                                <span className="product-name">{product.name}</span>
                                <span className="product-desc">{product.desc}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="nav-dropdown-wrapper"
                ref={solutionsDropdownRef}
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button className="nav-link nav-dropdown-trigger">
                  Solutions
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ marginLeft: '4px', transform: solutionsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`nav-dropdown-menu nav-solutions-menu ${solutionsDropdownOpen ? 'show' : ''}`}>
                  <div className="nav-dropdown-header">Our Solutions</div>
                  {solutions.map((sol, idx) => (
                    <Link key={idx} to={sol.link} className="nav-dropdown-item nav-solution-item">
                      <span className="dropdown-icon sol-nav-icon">{sol.icon}</span>
                      <span className="sol-nav-text">
                        <span className="sol-nav-name">{sol.name}</span>
                        <span className="sol-nav-desc">{sol.desc}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link to="/platform" className="nav-link">Platform</Link>
              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/team" className="nav-link">Teams</Link>
              <Link to="/about" className="nav-link">About</Link>

              {/* Contact Dropdown */}
              <div className="nav-dropdown-wrapper" ref={contactDropdownRef}>
                <button className="nav-link nav-dropdown-trigger" onClick={toggleContactDropdown}>
                  Contact
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    style={{ marginLeft: '4px', transform: contactDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <div className={`nav-dropdown-menu ${contactDropdownOpen ? 'show' : ''}`}>
                  <div className="nav-dropdown-header">Inquiry | Support</div>
                  <Link to="/product-inquiry" className="nav-dropdown-item">
                    <span className="dropdown-icon">📦</span>
                    <span>Product Inquiry</span>
                  </Link>
                  <Link to="/technical-support" className="nav-dropdown-item">
                    <span className="dropdown-icon">🔧</span>
                    <span>Technical Support</span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="nav-actions desktop-only">
              <Link to="/contact" className="btn-demo">Talk to Expert</Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${mobileMenuOpen ? 'menu-open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link">🏠 Home</Link>
            <Link to="/our-products" className="mobile-nav-link">📦 Products</Link>

            <div className="mobile-nav-section-label">💡 Solutions</div>
            {solutions.map((sol, idx) => (
              <Link key={idx} to={sol.link} className="mobile-nav-link mobile-nav-sub">
                {sol.icon} {sol.name}
              </Link>
            ))}

            <Link to="/platform" className="mobile-nav-link">💻 Platform</Link>
            <Link to="/events" className="mobile-nav-link">📅 Events</Link>
            <Link to="/team" className="mobile-nav-link">👥 Teams</Link>
            <Link to="/about" className="mobile-nav-link">ℹ️ About</Link>
            <Link to="/product-inquiry" className="mobile-nav-link">📬 Product Inquiry</Link>
            <Link to="/technical-support" className="mobile-nav-link">🔧 Technical Support</Link>
          </div>
          <div className="mobile-menu-actions">
            <Link to="/contact" className="btn-mobile-demo">Talk to Expert</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;