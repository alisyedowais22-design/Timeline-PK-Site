import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { QOHO_PRODUCT_CATEGORIES } from '../data/qohoProductsData';

const MenuIcon = () => <span style={{ fontSize: '24px', lineHeight: 1 }}>☰</span>;
const CloseIcon = () => <span style={{ fontSize: '24px', lineHeight: 1 }}>✕</span>;
const ChevronDown = () => <span style={{ fontSize: '12px', marginLeft: '4px' }}>▼</span>;

const VEHICLE_SOLUTIONS = [
  { label: 'Bus Monitoring', desc: 'Passenger fleet video intelligence', to: '/solutions/bus-monitoring-solution' },
  { label: 'Cargo Truck', desc: 'Cargo visibility and driver safety', to: '/solutions/cargo-truck-solution' },
  { label: 'Oil Truck', desc: 'Hazardous fleet monitoring', to: '/solutions/oil-truck-solution' },
  { label: 'School Bus', desc: 'Student transport safety', to: '/solutions/school-bus-solution' },
  { label: 'Train Monitoring', desc: 'Rail video intelligence', to: '/solutions/train-monitoring-solution' },
  { label: 'Police Car', desc: 'Law enforcement vehicle monitoring', to: '/solutions/police-car-solution' },
  { label: 'Police Car System', desc: 'End-to-end police video system', to: '/solutions/police-car-system' },
  { label: 'Private Car / SUV', desc: 'Executive vehicle safety', to: '/solutions/private-car-suv-solution' },
  { label: 'Motorcycle', desc: 'Two-wheeler video telematics', to: '/solutions/motorcycle-solution' },
  { label: 'Military Vehicle', desc: 'Tactical fleet monitoring', to: '/solutions/military-vehicle-solution' },
  { label: 'Fire Truck', desc: 'Emergency fleet visibility', to: '/solutions/fire-truck-solution' },
];

const INDUSTRIES = [
  { label: 'Logistics & Courier', desc: 'Fleet and delivery tracking solutions', to: '/industries/logistics' },
  { label: 'Public Transport', desc: 'Route and passenger operations', to: '/industries/public-transport' },
  { label: 'Oil & Gas', desc: 'High-security fleet monitoring', to: '/industries/oil-gas' },
  { label: 'Construction', desc: 'Equipment and site tracking', to: '/industries/construction' },
  { label: 'Healthcare', desc: 'Emergency and healthcare fleet visibility', to: '/industries/healthcare' },
  { label: 'Government', desc: 'Accountable fleet operations', to: '/industries/government' },
  { label: 'Agriculture', desc: 'Farm machinery and field tracking', to: '/industries/agriculture' },
];

const BASE_DEVICES = [
  {
    category: 'Vehicle Trackers',
    desc: 'GPS vehicle tracking devices',
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
    desc: 'ADAS & DMS AI cameras',
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
    desc: 'Vehicle data trackers',
    items: [
      { label: 'VL502', desc: 'Fleet CAN Tracker', to: '/our-products/vl502' },
    ],
  },
  {
    category: 'Asset Trackers',
    desc: 'Asset monitoring devices',
    items: [
      { label: 'LL303PRO', desc: '5 Years Battery', to: '/our-products/ll303pro' },
      { label: 'LL301', desc: 'Silent Protector', to: '/our-products/ll301' },
    ],
  },
  {
    category: 'Personal Trackers',
    desc: 'Personal safety devices',
    items: [
      { label: 'PL200', desc: 'Silent Guardian', to: '/our-products/pl200' },
    ],
  },
  {
    category: 'Non-AI Dashcams',
    desc: 'Basic video recording',
    items: [
      { label: 'JC181', desc: 'Basic Dashcam', to: '/our-products/jc181' },
    ],
  },
  {
    category: 'Accessories',
    desc: 'Cables, cameras & sensors',
    items: [
      { label: 'All Accessories', desc: 'Cables, Cameras & Sensors', to: '/accessories' },
    ],
  },
];

const QOHO_DEVICES = QOHO_PRODUCT_CATEGORIES.map((cat) => ({
  category: cat.label,
  desc: cat.desc,
  items: cat.products.map((product) => ({
    label: product.model,
    desc: product.name,
    to: `/our-products/${product.id}`,
  })),
}));

const DEVICES = [...BASE_DEVICES, ...QOHO_DEVICES];

const PLATFORMS = [
  { label: 'Fleet Web App', desc: 'Browser-based fleet management dashboard', to: '/platform' },
  { label: 'PRO Mobile App', desc: 'Mobile fleet monitoring application', to: '/platform' },
  { label: 'Customer Portal', desc: 'Client access and reporting portal', to: '/platform' },
];

const CONTACT_LINKS = [
  { label: 'Contact Us', desc: 'Talk to our team', to: '/contact' },
  { label: 'Product Inquiry', desc: 'Request pricing and product details', to: '/product-inquiry' },
  { label: 'Technical Support', desc: 'Get assistance from support team', to: '/technical-support' },
];

const HoverDropdown = ({ label, to, active, children }) => {
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
          padding: '8px 10px',
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
        {label} <ChevronDown />
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

const ProductsDropdownContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = DEVICES[activeIndex];

  return (
    <div
      style={{
        width: 760,
        maxWidth: '92vw',
        height: 500,
        maxHeight: 'calc(100vh - 210px)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: '10px 16px',
          borderBottom: '1px solid #f3f4f6',
          fontSize: '10.5px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#9ca3af',
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'uppercase',
          height: 42,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Our Hardware Products
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          height: 'calc(100% - 92px)',
          minHeight: 0,
        }}
      >
        <div
          className="products-category-scroll"
          style={{
            borderRight: '1px solid #f3f4f6',
            padding: '8px',
            overflowY: 'auto',
            background: '#fff',
            minHeight: 0,
          }}
        >
          {DEVICES.map((cat, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={cat.category}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                type="button"
                style={{
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  background: active ? '#fef2f2' : 'transparent',
                  borderLeft: active ? '3px solid #E8312A' : '3px solid transparent',
                  padding: '8px 9px',
                  borderRadius: 8,
                  cursor: 'pointer',
                  marginBottom: 3,
                  transition: 'all 0.15s ease',
                }}
              >
                <div
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 800,
                    color: active ? '#E8312A' : '#111827',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.22,
                  }}
                >
                  {cat.category}
                </div>

                <div
                  style={{
                    fontSize: '10px',
                    color: '#9ca3af',
                    marginTop: 2,
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.15,
                  }}
                >
                  {cat.desc || `${cat.items.length} products`}
                </div>
              </button>
            );
          })}
        </div>

        <div
          className="products-items-scroll"
          style={{
            padding: '12px 16px',
            overflowY: 'auto',
            background: '#fff',
            minHeight: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              paddingBottom: 9,
              marginBottom: 8,
              borderBottom: '1px solid #f3f4f6',
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '12.5px',
                  fontWeight: 900,
                  color: '#E8312A',
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {activeCategory.category}
              </div>

              <div
                style={{
                  fontSize: '10.5px',
                  color: '#9ca3af',
                  marginTop: 2,
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                {activeCategory.items.length} products available
              </div>
            </div>

            <Link
              to={activeCategory.category === 'Accessories' ? '/accessories' : '/our-products'}
              style={{
                fontSize: '12px',
                fontWeight: 800,
                color: '#E8312A',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                whiteSpace: 'nowrap',
              }}
            >
              View All →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: activeCategory.items.length > 8 ? 'repeat(2, minmax(0, 1fr))' : '1fr',
              gap: '4px 12px',
            }}
          >
            {activeCategory.items.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  display: 'block',
                  padding: '7px 8px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#fef2f2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: '#111827',
                    fontFamily: 'Poppins, sans-serif',
                    lineHeight: 1.25,
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    fontSize: '10.2px',
                    color: '#9ca3af',
                    marginTop: 2,
                    lineHeight: 1.22,
                    fontFamily: 'Poppins, sans-serif',
                  }}
                >
                  {item.desc}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          height: 50,
          padding: '8px 16px',
          borderTop: '1px solid #f3f4f6',
          textAlign: 'center',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
  );
};

const SmallDropdownContent = ({ title, viewAll, items }) => {
  const itemStyle = {
    display: 'block',
    padding: '9px 10px',
    borderRadius: 8,
    textDecoration: 'none',
    transition: 'background 0.15s ease',
  };

  const titleStyle = {
    fontSize: '13px',
    fontWeight: 700,
    color: '#111827',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.3,
    marginBottom: 2,
  };

  const descStyle = {
    fontSize: '11px',
    color: '#9ca3af',
    fontFamily: 'Poppins, sans-serif',
    lineHeight: 1.25,
  };

  const onEnter = (e) => {
    e.currentTarget.style.background = '#fef2f2';
  };

  const onLeave = (e) => {
    e.currentTarget.style.background = 'transparent';
  };

  return (
    <div style={{ padding: '12px 16px', width: 560, maxWidth: '92vw' }}>
      <div
        style={{
          fontSize: '10.5px',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#9ca3af',
          fontFamily: 'Poppins, sans-serif',
          textTransform: 'uppercase',
          paddingBottom: 8,
          marginBottom: 8,
          borderBottom: '1px solid #f3f4f6',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>{title}</span>
        {viewAll && (
          <Link
            to={viewAll.to}
            style={{
              color: '#E8312A',
              fontSize: '12.5px',
              fontWeight: 800,
              textDecoration: 'none',
              textTransform: 'none',
              letterSpacing: 0,
            }}
          >
            {viewAll.label}
          </Link>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 6 }}>
        {items.map((item) => (
          <Link key={item.to + item.label} to={item.to} style={itemStyle} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <div style={titleStyle}>{item.label}</div>
            <div style={descStyle}>{item.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolOpen, setMobileSolOpen] = useState(false);
  const [mobileIndustryOpen, setMobileIndustryOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);

  const location = useLocation();

  const isActive = (to) => location.pathname === to;
  const isPrefixActive = (prefix) => location.pathname.startsWith(prefix);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSolOpen(false);
    setMobileIndustryOpen(false);
    setMobileProdOpen(false);
    setMobilePlatformOpen(false);
    setMobileContactOpen(false);
  }, [location.pathname]);

  const linkStyle = (to, prefix = false) => {
    const active = prefix ? isPrefixActive(to) : isActive(to);

    return {
      padding: '8px 10px',
      fontSize: '13.5px',
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 600,
      color: active ? '#E8312A' : '#374151',
      borderRadius: '7px',
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      borderBottom: active ? '2px solid #E8312A' : '2px solid transparent',
      whiteSpace: 'nowrap',
    };
  };

  const mobileLinkStyle = (to, prefix = false) => {
    const active = prefix ? isPrefixActive(to) : isActive(to);

    return {
      display: 'block',
      padding: '11px 0',
      fontSize: '15px',
      fontWeight: 700,
      fontFamily: 'Poppins, sans-serif',
      color: active ? '#E8312A' : '#374151',
      borderBottom: '1px solid #f3f4f6',
      textDecoration: 'none',
    };
  };

  const mobileButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '11px 0',
    fontSize: '15px',
    fontWeight: 700,
    fontFamily: 'Poppins, sans-serif',
    color: '#374151',
    background: 'none',
    border: 'none',
    borderBottom: '1px solid #f3f4f6',
    cursor: 'pointer',
  };

  const mobileSubLinkStyle = {
    display: 'block',
    padding: '9px 0',
    fontSize: '13.5px',
    fontWeight: 600,
    color: '#374151',
    borderBottom: '1px solid #f9fafb',
    textDecoration: 'none',
    fontFamily: 'Poppins, sans-serif',
  };

  return (
    <>
      <nav
        className={`navbar mobile-safe-navbar ${scrolled ? 'scrolled navbar-top' : ''}`}
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
          className="mobile-safe-navbar-shell"
          style={{
            maxWidth: '100%',
            margin: '0 auto',
            padding: '0 72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px',
            gap: '18px',
          }}
        >
          <Link
            to="/"
            className="mobile-safe-logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <img
              className="mobile-safe-logo-img"
              src="/TimelineLogo.png"
              alt="Timeline Telematics"
              style={{
                height: '70px',
                width: '190px',
                objectFit: 'contain',
                paddingBottom: '4px',
              }}
            />
          </Link>

          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px',
              flex: 1,
              marginLeft: '32px',
            }}
          >
            <Link to="/" style={linkStyle('/')}>Home</Link>

            <HoverDropdown label="Solutions" to="/solutions" active={isPrefixActive('/solutions')}>
              <SmallDropdownContent
                title="Vehicle Solutions"
                viewAll={{ label: 'View All', to: '/solutions' }}
                items={VEHICLE_SOLUTIONS}
              />
            </HoverDropdown>

            <HoverDropdown label="Industries" to="/industries" active={isPrefixActive('/industries')}>
              <SmallDropdownContent
                title="Industries We Serve"
                viewAll={{ label: 'View All', to: '/industries' }}
                items={INDUSTRIES}
              />
            </HoverDropdown>

            <Link to="/case-studies" style={linkStyle('/case-studies', true)}>Case Studies</Link>

            <HoverDropdown
              label="Products"
              to="/our-products"
              active={isPrefixActive('/our-products') || isActive('/accessories')}
            >
              <ProductsDropdownContent />
            </HoverDropdown>

            <HoverDropdown label="Platform" to="/platform" active={isActive('/platform')}>
              <SmallDropdownContent title="Platforms" items={PLATFORMS} />
            </HoverDropdown>

            <Link to="/events" style={linkStyle('/events', true)}>Events</Link>
            <Link to="/team" style={linkStyle('/team')}>Teams</Link>
            <Link to="/about" style={linkStyle('/about')}>About</Link>

            <HoverDropdown
              label="Contact"
              to="/contact"
              active={isActive('/contact') || isActive('/product-inquiry') || isActive('/technical-support')}
            >
              <SmallDropdownContent title="Contact & Support" items={CONTACT_LINKS} />
            </HoverDropdown>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: '22px' }}>
            <Link
              to="/contact"
              className="mobile-safe-talk-btn"
              style={{
                background: '#E8312A',
                color: '#fff',
                padding: '10px 18px',
                borderRadius: '8px',
                fontSize: '13.5px',
                fontWeight: 800,
                fontFamily: 'Poppins, sans-serif',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Talk to Expert
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mob-btn mobile-safe-menu-btn"
              type="button"
              aria-label="Toggle menu"
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
          <div
            className="mobile-safe-panel"
            style={{
              background: '#fff',
              borderTop: '1px solid #f3f4f6',
              padding: '12px 24px 20px',
            }}
          >
            <Link to="/" style={mobileLinkStyle('/')}>Home</Link>

            <div>
              <button onClick={() => setMobileSolOpen(!mobileSolOpen)} style={mobileButtonStyle}>
                Solutions <ChevronDown />
              </button>

              {mobileSolOpen && (
                <div className="mobile-safe-submenu" style={{ paddingLeft: '12px' }}>
                  <Link to="/solutions" style={{ ...mobileSubLinkStyle, color: '#E8312A', fontWeight: 800 }}>
                    View All Solutions
                  </Link>

                  {VEHICLE_SOLUTIONS.map((item) => (
                    <Link key={item.to} to={item.to} style={mobileSubLinkStyle}>
                      <div>{item.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setMobileIndustryOpen(!mobileIndustryOpen)} style={mobileButtonStyle}>
                Industries <ChevronDown />
              </button>

              {mobileIndustryOpen && (
                <div className="mobile-safe-submenu" style={{ paddingLeft: '12px' }}>
                  <Link to="/industries" style={{ ...mobileSubLinkStyle, color: '#E8312A', fontWeight: 800 }}>
                    View All Industries
                  </Link>

                  {INDUSTRIES.map((item) => (
                    <Link key={item.to} to={item.to} style={mobileSubLinkStyle}>
                      <div>{item.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/case-studies" style={mobileLinkStyle('/case-studies', true)}>Case Studies</Link>

            <div>
              <button onClick={() => setMobileProdOpen(!mobileProdOpen)} style={mobileButtonStyle}>
                Products <ChevronDown />
              </button>

              {mobileProdOpen && (
                <div className="mobile-safe-submenu" style={{ paddingLeft: '12px' }}>
                  <Link
                    to="/our-products"
                    style={{
                      display: 'block',
                      padding: '10px 0',
                      fontSize: '13px',
                      fontWeight: 800,
                      color: '#E8312A',
                      textDecoration: 'none',
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    View All Products
                  </Link>

                  {DEVICES.map((cat) => (
                    <div key={cat.category} style={{ marginBottom: 10 }}>
                      <div
                        style={{
                          fontSize: '11px',
                          fontWeight: 800,
                          color: '#E8312A',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          padding: '8px 0 4px',
                          fontFamily: 'Poppins, sans-serif',
                        }}
                      >
                        {cat.category}
                      </div>

                      {cat.items.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          style={{
                            display: 'block',
                            padding: '8px 0',
                            borderBottom: '1px solid #f9fafb',
                            textDecoration: 'none',
                          }}
                        >
                          <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#111827', fontFamily: 'Poppins, sans-serif' }}>
                            {item.label}
                          </div>
                          <div style={{ fontSize: '11px', color: '#9ca3af', fontFamily: 'Poppins, sans-serif' }}>
                            {item.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)} style={mobileButtonStyle}>
                Platform <ChevronDown />
              </button>

              {mobilePlatformOpen && (
                <div className="mobile-safe-submenu" style={{ paddingLeft: '12px' }}>
                  {PLATFORMS.map((platform) => (
                    <Link key={platform.label} to={platform.to} style={mobileSubLinkStyle}>
                      <div>{platform.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{platform.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/events" style={mobileLinkStyle('/events', true)}>Events</Link>
            <Link to="/team" style={mobileLinkStyle('/team')}>Teams</Link>
            <Link to="/about" style={mobileLinkStyle('/about')}>About</Link>

            <div>
              <button onClick={() => setMobileContactOpen(!mobileContactOpen)} style={mobileButtonStyle}>
                Contact <ChevronDown />
              </button>

              {mobileContactOpen && (
                <div className="mobile-safe-submenu" style={{ paddingLeft: '12px' }}>
                  {CONTACT_LINKS.map((item) => (
                    <Link key={item.to} to={item.to} style={mobileSubLinkStyle}>
                      <div>{item.label}</div>
                      <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: 2 }}>{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="mobile-safe-panel-cta"
              style={{
                display: 'block',
                width: '100%',
                marginTop: '16px',
                padding: '13px 16px',
                background: '#E8312A',
                color: '#fff',
                borderRadius: '10px',
                textAlign: 'center',
                textDecoration: 'none',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '14px',
                fontWeight: 800,
              }}
            >
              Talk to Expert
            </Link>
          </div>
        )}

        <style>{`
          @media(max-width: 1500px) {
            .mobile-safe-navbar-shell {
              padding-left: 46px !important;
              padding-right: 46px !important;
            }

            .desktop-nav {
              gap: 7px !important;
              margin-left: 22px !important;
            }

            .mobile-safe-logo-img {
              width: 178px !important;
            }
          }

          @media(max-width: 1360px) {
            .mobile-safe-navbar-shell {
              padding-left: 34px !important;
              padding-right: 34px !important;
            }

            .desktop-nav {
              gap: 3px !important;
              margin-left: 14px !important;
            }
          }

          @media(max-width: 1240px) {
            .desktop-nav {
              gap: 0 !important;
              margin-left: 8px !important;
            }

            .mobile-safe-logo-img {
              width: 160px !important;
            }

            .mobile-safe-talk-btn {
              padding-left: 14px !important;
              padding-right: 14px !important;
              font-size: 13px !important;
            }
          }

          @media(max-width: 1180px) {
            .mobile-safe-talk-btn {
              display: none !important;
            }
          }

          @media(max-width: 1100px) {
            .mobile-safe-navbar {
              top: 0 !important;
            }

            .mobile-safe-navbar-shell {
              height: 66px !important;
              padding: 0 16px !important;
              gap: 10px !important;
            }

            .desktop-nav {
              display: none !important;
            }

            .mobile-safe-logo-img {
              width: 150px !important;
              height: 54px !important;
              padding-bottom: 0 !important;
            }

            .mob-btn,
            .mobile-safe-menu-btn {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              width: 42px !important;
              height: 42px !important;
              border-radius: 10px !important;
              background: #f9fafb !important;
              border: 1px solid #e5e7eb !important;
              flex-shrink: 0 !important;
            }

            .mobile-safe-panel {
              max-height: calc(100vh - 66px) !important;
              overflow-y: auto !important;
              padding: 10px 18px 22px !important;
              -webkit-overflow-scrolling: touch;
              box-shadow: 0 18px 40px rgba(0,0,0,0.12);
            }

            .mobile-safe-submenu {
              max-height: 52vh;
              overflow-y: auto;
              -webkit-overflow-scrolling: touch;
            }
          }

          @media(max-width: 768px) {
            .mobile-safe-navbar-shell {
              height: 58px !important;
              padding-left: 14px !important;
              padding-right: 14px !important;
            }

            .mobile-safe-logo-img {
              width: 135px !important;
              height: 48px !important;
              padding-bottom: 0 !important;
            }

            .mobile-safe-panel {
              max-height: calc(100vh - 58px) !important;
              padding-left: 18px !important;
              padding-right: 18px !important;
            }
          }

          @media(max-width: 480px) {
            .mobile-safe-navbar-shell {
              height: 56px !important;
              padding-left: 12px !important;
              padding-right: 12px !important;
            }

            .mobile-safe-logo-img {
              width: 128px !important;
              height: 46px !important;
              padding-bottom: 0 !important;
            }

            .mob-btn,
            .mobile-safe-menu-btn {
              width: 38px !important;
              height: 38px !important;
            }

            .mobile-safe-panel {
              max-height: calc(100vh - 56px) !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
            }
          }

          .products-category-scroll::-webkit-scrollbar,
          .products-items-scroll::-webkit-scrollbar {
            width: 5px;
          }

          .products-category-scroll::-webkit-scrollbar-track,
          .products-items-scroll::-webkit-scrollbar-track {
            background: #f8fafc;
            border-radius: 999px;
          }

          .products-category-scroll::-webkit-scrollbar-thumb,
          .products-items-scroll::-webkit-scrollbar-thumb {
            background: #e5e7eb;
            border-radius: 999px;
          }

          .products-category-scroll::-webkit-scrollbar-thumb:hover,
          .products-items-scroll::-webkit-scrollbar-thumb:hover {
            background: #d1d5db;
          }

          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(-6px);
            }

            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}</style>
      </nav>
    </>
  );
};

export default Navbar;