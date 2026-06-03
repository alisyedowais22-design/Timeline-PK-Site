import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const MenuIcon = () => <span style={{ fontSize: '24px' }}>☰</span>;
const CloseIcon = () => <span style={{ fontSize: '24px' }}>✕</span>;
const ChevronDown = () => <span style={{ fontSize: '12px', marginLeft: '4px' }}>▼</span>;

const DEVICES = [
  {
    category: 'Vehicle Trackers',
    items: [
      { label: 'GT06N 4G', desc: 'Classic Upgraded', to: '/our-products/gt06n-4g' },
      { label: 'VG03', desc: 'Discreet Tracking', to: '/our-products/vg03' },
      { label: 'VL103D', desc: 'Tiny Device', to: '/our-products/vl103d' },
      { label: 'VL103M', desc: 'Minimal Form', to: '/our-products/vl103m' },
      { label: 'VL110C', desc: 'Any Vehicle', to: '/our-products/vl110c' },
      { label: 'VL802', desc: 'More Visibility', to: '/our-products/vl802' },
      { label: 'VL808', desc: 'Intelligent Tracking', to: '/our-products/vl808' },
      { label: 'X3', desc: 'Voice Tracker', to: '/our-products/x3' },
      { label: 'GT06N', desc: 'The Classic', to: '/our-products/gt06n' },
    ],
  },
  {
    category: 'AI Dashcams',
    items: [
      { label: 'JC371', desc: 'AI Dashcam with ADAS', to: '/our-products/jc371' },
      { label: 'JC450', desc: 'Multi-Channel AI Dashcam', to: '/our-products/jc450' },
      { label: 'JC261', desc: 'Dual Camera AI Dashcam', to: '/our-products/jc261' },
      { label: 'JC261P', desc: 'Pro AI Dashcam', to: '/our-products/jc261p' },
      { label: 'JC400D', desc: '4G AI Dashcam', to: '/our-products/jc400d' },
    ],
  },
  {
    category: 'CAN & OBD',
    items: [
      { label: 'VL502', desc: 'Fleet CAN Tracker', to: '/our-products/vl502' },
    ],
  },
  {
    category: 'Asset Trackers',
    items: [
      { label: 'LL303PRO', desc: '5 Years Battery', to: '/our-products/ll303pro' },
      { label: 'LL301', desc: 'Silent Protector', to: '/our-products/ll301' },
    ],
  },
  {
    category: 'Personal Trackers',
    items: [
      { label: 'PL200', desc: 'Silent Guardian', to: '/our-products/pl200' },
    ],
  },
  {
    category: 'Non-AI Dashcams',
    items: [
      { label: 'JC181', desc: 'Basic Dashcam', to: '/our-products/jc181' },
    ],
  },
];

const INDUSTRIES = [
  { label: 'Logistics & Courier', desc: 'Fleet and delivery tracking solutions', to: '/solutions/logistics' },
  { label: 'Public Transport', desc: 'Route and passenger operations', to: '/solutions/public-transport' },
  { label: 'Oil & Gas', desc: 'High-security fleet monitoring', to: '/solutions/oil-gas' },
  { label: 'Construction', desc: 'Equipment and site tracking', to: '/solutions/construction' },
  { label: 'Healthcare', desc: 'Emergency fleet visibility', to: '/solutions/healthcare' },
  { label: 'Government', desc: 'Accountable fleet operations', to: '/solutions/government' },
  { label: 'Agriculture', desc: 'Farm machinery tracking', to: '/solutions/agriculture' },
];

const PLATFORMS = [
  { label: 'Fleet Web App', desc: 'Browser-based fleet management dashboard', to: '/platform' },
  { label: 'PRO Mobile App', desc: 'Mobile fleet monitoring application', to: '/platform' },
  { label: 'Customer Portal', desc: 'Client access and reporting portal', to: '/platform' },
];

const CONTACT_LINKS = [
  { label: 'Product Inquiry', desc: 'Request pricing and product details', to: '/product-inquiry' },
  { label: 'Technical Support', desc: 'Get assistance from support team', to: '/technical-support' },
];

const HoverDropdown = ({ label, to, children, active }) => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const show = () => {
    clearTimeout(timerRef.current);
    setOpen(true);
  };

  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div style={{ position: 'relative' }} onMouseEnter={show} onMouseLeave={hide}>
      <button
        onClick={() => {
          setOpen(false);
          navigate(to);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '7px 10px',
          fontSize: '13.5px',
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 600,
          color: open || active ? '#E8312A' : '#374151',
          borderRadius: '7px',
          background: 'none',
          border: 'none',
          borderBottom: active ? '2px solid #E8312A' : '2px solid transparent',
          cursor: 'pointer',
          transition: 'color 0.2s ease',
          whiteSpace: 'nowrap',
        }}
      >
        {label}
        <ChevronDown />
      </button>

      {open && (
        <div
          onMouseEnter={show}
          onMouseLeave={hide}
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#ffffff',
            borderRadius: '14px',
            boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
            border: '1px solid #f0f0f0',
            zIndex: 9999,
            animation: 'fadeDown 0.15s ease',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const location = useLocation();

  const isActive = (to) => location.pathname === to;
  const isPrefixActive = (prefix) => location.pathname.startsWith(prefix);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProdOpen(false);
    setMobileSolOpen(false);
    setMobilePlatformOpen(false);
    setMobileContactOpen(false);
  }, [location.pathname]);

  const linkStyle = (to) => ({
    padding: '7px 10px',
    fontSize: '13.5px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: isActive(to) ? '#E8312A' : '#374151',
    borderRadius: '7px',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    borderBottom: isActive(to) ? '2px solid #E8312A' : '2px solid transparent',
    whiteSpace: 'nowrap',
  });

  const mobileLinkStyle = (to) => ({
    display: 'block',
    padding: '11px 0',
    fontSize: '15px',
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
    color: isActive(to) ? '#E8312A' : '#374151',
    borderBottom: '1px solid #f3f4f6',
    textDecoration: 'none',
  });

  const smallMenuItem = {
    display: 'block',
    padding: '8px 9px',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'background 0.15s ease',
  };

  const smallTitle = {
    fontSize: '13px',
    fontWeight: 700,
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.3,
    marginBottom: '2px',
  };

  const smallDesc = {
    fontSize: '11px',
    color: '#9ca3af',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.25,
  };

  const onItemEnter = (e) => {
    e.currentTarget.style.background = '#fef2f2';
  };

  const onItemLeave = (e) => {
    e.currentTarget.style.background = 'transparent';
  };

  return (
    <>
      <nav
        className={`navbar ${scrolled ? 'scrolled navbar-top' : ''}`}
        style={{
          background: '#fff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
          position: 'fixed',
          top: scrolled ? '0' : '40px',
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
            gap: '14px',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
            <img
              src="/TimelineLogo.png"
              alt="Timeline Telematics"
              style={{
                height: '105px',
                width: '220px',
                objectFit: 'contain',
                paddingBottom: '12px',
              }}
            />
          </Link>

          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
              flex: 1,
            }}
          >
            <Link
              to="/"
              style={linkStyle('/')}
              onMouseEnter={(e) => {
                if (!isActive('/')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/')) e.currentTarget.style.color = '#374151';
              }}
            >
              Home
            </Link>

            <HoverDropdown label="Solutions" to="/solutions" active={isPrefixActive('/solutions')}>
              <div style={{ padding: '12px 16px', width: '620px' }}>
                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    paddingBottom: '8px',
                    marginBottom: '8px',
                    borderBottom: '1px solid #f3f4f6',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>Industry Solutions</span>
                  <Link
                    to="/solutions"
                    style={{
                      color: '#E8312A',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      textTransform: 'none',
                      letterSpacing: 0,
                    }}
                  >
                    View All
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '6px' }}>
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.to}
                      to={ind.to}
                      style={smallMenuItem}
                      onMouseEnter={onItemEnter}
                      onMouseLeave={onItemLeave}
                    >
                      <div style={smallTitle}>{ind.label}</div>
                      <div style={smallDesc}>{ind.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </HoverDropdown>

            <Link
              to="/case-studies"
              style={linkStyle('/case-studies')}
              onMouseEnter={(e) => {
                if (!isActive('/case-studies')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/case-studies')) e.currentTarget.style.color = '#374151';
              }}
            >
              Case Studies
            </Link>

            <HoverDropdown label="Products" to="/our-products" active={isPrefixActive('/our-products')}>
              <div style={{ padding: '12px 16px', width: '900px' }}>
                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    paddingBottom: '8px',
                    marginBottom: '10px',
                    borderBottom: '1px solid #f3f4f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>Our Hardware Products</span>
                  <Link
                    to="/our-products"
                    style={{
                      color: '#E8312A',
                      fontSize: '12.5px',
                      fontWeight: 800,
                      textDecoration: 'none',
                      textTransform: 'none',
                      letterSpacing: 0,
                    }}
                  >
                    View All
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '6px 12px' }}>
                  {DEVICES.map((cat) => (
                    <div key={cat.category}>
                      <div
                        style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          color: '#E8312A',
                          fontFamily: 'Poppins, sans-serif',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          marginBottom: '4px',
                          paddingBottom: '4px',
                          borderBottom: '2px solid #fef2f2',
                        }}
                      >
                        {cat.category}
                      </div>

                      {cat.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          style={{
                            display: 'block',
                            padding: '3px 5px',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            transition: 'background 0.15s ease',
                          }}
                          onMouseEnter={onItemEnter}
                          onMouseLeave={onItemLeave}
                        >
                          <div
                            style={{
                              fontSize: '12px',
                              fontWeight: 700,
                              color: '#111827',
                              fontFamily: 'Poppins, sans-serif',
                              lineHeight: 1.3,
                            }}
                          >
                            {item.label}
                          </div>

                          <div
                            style={{
                              fontSize: '10.5px',
                              color: '#9ca3af',
                              fontFamily: 'Poppins, sans-serif',
                              marginTop: '1px',
                              lineHeight: 1.2,
                            }}
                          >
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #f3f4f6', textAlign: 'center' }}>
                  <Link
                    to="/our-products"
                    style={{
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#E8312A',
                      fontFamily: 'Poppins, sans-serif',
                      textDecoration: 'none',
                    }}
                  >
                    View All Products →
                  </Link>
                </div>
              </div>
            </HoverDropdown>

            <HoverDropdown label="Platform" to="/platform" active={isActive('/platform')}>
              <div style={{ padding: '12px 16px', width: '420px' }}>
                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    paddingBottom: '8px',
                    marginBottom: '8px',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  Platforms
                </div>

                {PLATFORMS.map((platform) => (
                  <Link
                    key={platform.label}
                    to={platform.to}
                    style={smallMenuItem}
                    onMouseEnter={onItemEnter}
                    onMouseLeave={onItemLeave}
                  >
                    <div style={smallTitle}>{platform.label}</div>
                    <div style={smallDesc}>{platform.desc}</div>
                  </Link>
                ))}
              </div>
            </HoverDropdown>

            <Link
              to="/events"
              style={linkStyle('/events')}
              onMouseEnter={(e) => {
                if (!isActive('/events')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/events')) e.currentTarget.style.color = '#374151';
              }}
            >
              Events
            </Link>

            <Link
              to="/team"
              style={linkStyle('/team')}
              onMouseEnter={(e) => {
                if (!isActive('/team')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/team')) e.currentTarget.style.color = '#374151';
              }}
            >
              Teams
            </Link>

            <Link
              to="/about"
              style={linkStyle('/about')}
              onMouseEnter={(e) => {
                if (!isActive('/about')) e.currentTarget.style.color = '#E8312A';
              }}
              onMouseLeave={(e) => {
                if (!isActive('/about')) e.currentTarget.style.color = '#374151';
              }}
            >
              About
            </Link>

            <HoverDropdown
              label="Contact"
              to="/contact"
              active={isPrefixActive('/contact') || isPrefixActive('/product-inquiry') || isPrefixActive('/technical-support')}
            >
              <div style={{ padding: '12px 16px', width: '320px' }}>
                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#9ca3af',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    paddingBottom: '8px',
                    marginBottom: '8px',
                    borderBottom: '1px solid #f3f4f6',
                  }}
                >
                  Inquiry | Support
                </div>

                {CONTACT_LINKS.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    style={smallMenuItem}
                    onMouseEnter={onItemEnter}
                    onMouseLeave={onItemLeave}
                  >
                    <div style={smallTitle}>{item.label}</div>
                    <div style={smallDesc}>{item.desc}</div>
                  </Link>
                ))}
              </div>
            </HoverDropdown>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            <Link
              to="/contact"
              style={{
                background: '#E8312A',
                color: '#fff',
                padding: '9px 18px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 700,
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#c72a23';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#E8312A';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to Expert
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mob-btn"
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#374151',
              }}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div style={{ background: '#fff', borderTop: '1px solid #f3f4f6', padding: '12px 24px 20px' }}>
            <Link to="/" style={mobileLinkStyle('/')}>Home</Link>

            <div>
              <button
                onClick={() => setMobileSolOpen(!mobileSolOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Solutions <ChevronDown />
              </button>

              {mobileSolOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {INDUSTRIES.map((ind) => (
                    <Link
                      key={ind.to}
                      to={ind.to}
                      style={{
                        display: 'block',
                        padding: '9px 0',
                        fontSize: '13.5px',
                        fontWeight: 600,
                        color: '#374151',
                        borderBottom: '1px solid #f9fafb',
                        textDecoration: 'none',
                      }}
                    >
                      {ind.label}
                    </Link>
                  ))}

                  <Link
                    to="/solutions"
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#E8312A',
                      textDecoration: 'none',
                    }}
                  >
                    View All Solutions →
                  </Link>
                </div>
              )}
            </div>

            <Link to="/case-studies" style={mobileLinkStyle('/case-studies')}>Case Studies</Link>

            <div>
              <button
                onClick={() => setMobileProdOpen(!mobileProdOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Products <ChevronDown />
              </button>

              {mobileProdOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {DEVICES.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: '10px' }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#E8312A',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          padding: '8px 0 4px',
                        }}
                      >
                        {cat.category}
                      </div>

                      {cat.items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.to}
                          style={{
                            display: 'block',
                            padding: '8px 0',
                            borderBottom: '1px solid #f9fafb',
                            textDecoration: 'none',
                          }}
                        >
                          <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#111827' }}>{item.label}</div>
                          <div style={{ fontSize: '11px', color: '#9ca3af' }}>{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  ))}

                  <Link
                    to="/our-products"
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#E8312A',
                      textDecoration: 'none',
                    }}
                  >
                    View All Products →
                  </Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Platform <ChevronDown />
              </button>

              {mobilePlatformOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  {PLATFORMS.map((platform) => (
                    <Link
                      key={platform.label}
                      to={platform.to}
                      style={{
                        display: 'block',
                        padding: '9px 0',
                        fontSize: '13.5px',
                        color: '#374151',
                        textDecoration: 'none',
                      }}
                    >
                      {platform.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/events" style={mobileLinkStyle('/events')}>Events</Link>
            <Link to="/team" style={mobileLinkStyle('/team')}>Teams</Link>
            <Link to="/about" style={mobileLinkStyle('/about')}>About</Link>

            <div>
              <button
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '11px 0',
                  fontSize: '15px',
                  fontWeight: 600,
                  fontFamily: 'Poppins, sans-serif',
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #f3f4f6',
                  cursor: 'pointer',
                }}
              >
                Contact <ChevronDown />
              </button>

              {mobileContactOpen && (
                <div style={{ paddingLeft: '12px' }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'block',
                      padding: '9px 0',
                      fontSize: '13.5px',
                      color: '#374151',
                      textDecoration: 'none',
                    }}
                  >
                    Contact Us
                  </Link>

                  {CONTACT_LINKS.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      style={{
                        display: 'block',
                        padding: '9px 0',
                        fontSize: '13.5px',
                        color: '#374151',
                        textDecoration: 'none',
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        <style>{`
          @media(max-width: 1100px) {
            .desktop-nav { display: none !important; }
            .mob-btn { display: flex !important; }
          }

          @keyframes fadeDown {
            from { opacity: 0; transform: translateX(-50%) translateY(-6px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;