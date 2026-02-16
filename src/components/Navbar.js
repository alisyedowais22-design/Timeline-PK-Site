import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
         <div className="nav-brand">
            <img 
              src="/logo.png" 
               alt="Timeline Telematics" 
               style={{height: '60px', width: 'auto'}}
            />
          <div className="logo-text">
  </div>
</div>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#solutions" className="nav-link">Solutions</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#industries" className="nav-link">Industries</a>
            <a href="#resources" className="nav-link">Resources</a>
            <a href="#pricing" className="nav-link">Pricing</a>
          </div>

          <div className="nav-actions">
            <button className="btn-demo">Request Demo</button>
            <button className="btn-primary">Get Started</button>
          </div>

          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
