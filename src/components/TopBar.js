import React, { useState, useEffect } from 'react';
import {
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiSearch,
  FiPhone,
  FiMail,
} from 'react-icons/fi';

const SOCIALS = [
  { Icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { Icon: FiTwitter, href: '#', label: 'Twitter' },
  { Icon: FiFacebook, href: '#', label: 'Facebook' },
  { Icon: FiYoutube, href: '#', label: 'YouTube' },
  { Icon: FiInstagram, href: '#', label: 'Instagram' },
];

const TopBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconStyle = {
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#9ca3af',
    borderRadius: '4px',
    transition: 'color 0.2s ease',
    textDecoration: 'none',
  };

  return (
    <div
      style={{
        background: '#111111',
        borderBottom: '1px solid #242424',
        height: scrolled ? '0px' : '40px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        transition: 'height 0.3s ease',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left Side */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '26px',
          }}
        >
          <a
            href="tel:+923111122883"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '13.5px',
              fontWeight: 500,
            }}
          >
            <FiPhone size={14} />
            +92 311 1122883
          </a>

          <a
            href="mailto:info.pk@timelinetelematics.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#d1d5db',
              textDecoration: 'none',
              fontSize: '13.5px',
              fontWeight: 500,
            }}
          >
            <FiMail size={14} />
            info.pk@timelinetelematics.com
          </a>
        </div>

        {/* Right Side */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '7px',
          }}
        >
          {SOCIALS.map(({ Icon, href, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={iconStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#9ca3af';
              }}
            >
              <Icon size={17} strokeWidth={1.9} />
            </a>
          ))}

          <div
            style={{
              width: '1px',
              height: '16px',
              background: '#3a3a3a',
              margin: '0 8px',
            }}
          />

          <a
            href="#"
            aria-label="Search"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#9ca3af';
            }}
          >
            <FiSearch size={18} strokeWidth={1.9} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;