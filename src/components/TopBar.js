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

    onScroll();

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
    <>
      <div
        className={`topbar ${scrolled ? 'topbar-hidden' : ''}`}
        style={{
          background: '#111111',
          borderBottom: scrolled ? '0' : '1px solid #242424',
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
          className="topbar-inner"
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            width: '100%',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div
            className="topbar-left"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '26px',
              minWidth: 0,
            }}
          >
            <a
              className="topbar-contact topbar-phone"
              href="tel:+923111122883"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: 500,
                whiteSpace: 'nowrap',
                lineHeight: 1,
              }}
            >
              <FiPhone size={14} />
              <span>+92 311 1122883</span>
            </a>

            <a
              className="topbar-contact topbar-email"
              href="mailto:info.pk@timelinetelematics.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '13.5px',
                fontWeight: 500,
                minWidth: 0,
                lineHeight: 1,
              }}
            >
              <FiMail size={14} />
              <span>info.pk@timelinetelematics.com</span>
            </a>
          </div>

          <div
            className="topbar-right"
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '7px',
              flexShrink: 0,
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

      <style>{`
        @media (max-width: 768px) {
          .topbar {
            height: 36px;
          }

          .topbar-hidden {
            height: 0px !important;
            border-bottom: 0 !important;
          }

          .topbar-inner {
            height: 36px !important;
            padding: 0 8px !important;
            justify-content: center !important;
            overflow: hidden !important;
          }

          .topbar-left {
            width: 100% !important;
            max-width: 100% !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 8px !important;
            min-width: 0 !important;
            overflow: hidden !important;
            flex-wrap: nowrap !important;
          }

          .topbar-contact {
            font-size: 10.5px !important;
            gap: 4px !important;
            min-width: 0 !important;
            white-space: nowrap !important;
            line-height: 1 !important;
          }

          .topbar-contact svg {
            width: 11px !important;
            height: 11px !important;
            flex-shrink: 0 !important;
          }

          .topbar-phone {
            flex: 0 0 auto !important;
            max-width: 118px !important;
          }

          .topbar-phone span {
            display: block !important;
            white-space: nowrap !important;
          }

          .topbar-email {
            flex: 1 1 auto !important;
            max-width: 205px !important;
            overflow: hidden !important;
          }

          .topbar-email span {
            display: block !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
          }

          .topbar-right {
            display: none !important;
          }
        }

        @media (max-width: 390px) {
          .topbar-inner {
            padding: 0 6px !important;
          }

          .topbar-left {
            gap: 6px !important;
          }

          .topbar-contact {
            font-size: 10px !important;
            gap: 3px !important;
          }

          .topbar-phone {
            max-width: 112px !important;
          }

          .topbar-email {
            max-width: 190px !important;
          }
        }

        @media (max-width: 360px) {
          .topbar-contact {
            font-size: 9.5px !important;
          }

          .topbar-phone {
            max-width: 108px !important;
          }

          .topbar-email {
            max-width: 175px !important;
          }
        }
      `}</style>
    </>
  );
};

export default TopBar;