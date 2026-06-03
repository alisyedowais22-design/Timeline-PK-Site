import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import heroHome from '../assets/hero-home.png';
import heroSolutions from '../assets/hero-solutions.png';
import heroCaseStudies from '../assets/hero-case-studies.png';
import heroProducts from '../assets/hero-products.png';
import heroPlatform from '../assets/hero-platform.png';
import heroEvents from '../assets/hero-events.png';
import heroTeams from '../assets/hero-teams.png';

const slides = [
  {
    eyebrow: 'POWERING SMART FLEET INTELLIGENCE',
    title: 'The World Moves Fast.\nLet’s Make It Smarter.',
    desc: 'Real-time visibility, AI dashcams, asset monitoring, and intelligent fleet solutions that help businesses improve safety, reduce costs, and stay in control of every moving asset.',
    primaryText: 'Talk to an Expert',
    primaryLink: '/contact',
    secondaryText: 'Explore Solutions',
    secondaryLink: '/solutions',
    bg: heroHome,
  },
  {
    eyebrow: 'SOLUTIONS FOR EVERY INDUSTRY',
    title: 'Smarter Fleet Solutions\nFor Every Operation.',
    desc: 'From logistics and construction to healthcare, government, agriculture, and public transport, Timeline Telematics delivers intelligent tracking solutions for every business need.',
    primaryText: 'View Solutions',
    primaryLink: '/solutions',
    secondaryText: 'Talk to Sales',
    secondaryLink: '/contact',
    bg: heroSolutions,
  },
  {
    eyebrow: 'REAL RESULTS. REAL IMPACT.',
    title: 'Proven Results.\nStronger Businesses.',
    desc: 'Discover how intelligent telematics solutions help businesses improve fleet visibility, enhance safety, reduce operational costs, and achieve measurable growth.',
    primaryText: 'View Case Studies',
    primaryLink: '/case-studies',
    secondaryText: 'Client Success Stories',
    secondaryLink: '/case-studies',
    bg: heroCaseStudies,
  },
  {
    eyebrow: 'ADVANCED TRACKING PRODUCTS',
    title: 'Reliable Devices\nFor Smarter Fleet Control.',
    desc: 'Explore GPS trackers, AI dashcams, CAN & OBD devices, asset trackers, personal trackers, and mobile DVR solutions built for real-time monitoring.',
    primaryText: 'View Products',
    primaryLink: '/our-products',
    secondaryText: 'Request Quote',
    secondaryLink: '/product-inquiry',
    bg: heroProducts,
  },
  {
    eyebrow: 'ONE PLATFORM. TOTAL CONTROL.',
    title: 'Manage Your Fleet\nFrom One Powerful Platform.',
    desc: 'Monitor live locations, routes, driver behavior, alerts, reports, assets, and performance through a connected fleet management platform designed for smarter decisions.',
    primaryText: 'Explore Platform',
    primaryLink: '/platform',
    secondaryText: 'Book a Demo',
    secondaryLink: '/contact',
    bg: heroPlatform,
  },
  {
    eyebrow: 'CONNECT. LEARN. INNOVATE.',
    title: 'Events That Drive\nThe Telematics Future.',
    desc: 'Join us at industry-leading events, exhibitions, and webinars where innovation, insights, and collaboration come together to shape the future of mobility.',
    primaryText: 'View Events',
    primaryLink: '/events',
    secondaryText: 'Upcoming Webinars',
    secondaryLink: '/events',
    bg: heroEvents,
  },
  {
    eyebrow: 'OUR PEOPLE. OUR STRENGTH.',
    title: 'A Dedicated Team\nCommitted To Your Success.',
    desc: 'Our experts work with passion and purpose to deliver innovative telematics solutions, reliable support, and better fleet outcomes every step of the way.',
    primaryText: 'Meet Our Team',
    primaryLink: '/team',
    secondaryText: 'Join Our Team',
    secondaryLink: '/contact',
    bg: heroTeams,
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="fleet-hero">
      {slides.map((item, index) => (
        <div
          key={index}
          className={`fleet-hero-bg ${index === activeSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${item.bg})` }}
        />
      ))}

      <div className="fleet-hero-overlay" />

      <div className="fleet-hero-content" key={activeSlide}>
        <p className="fleet-hero-eyebrow">{slide.eyebrow}</p>

        <h1 className="fleet-hero-title">
          {slide.title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index !== slide.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>

        <p className="fleet-hero-desc">{slide.desc}</p>

        <div className="fleet-hero-actions">
          <Link to={slide.primaryLink} className="fleet-hero-btn">
            {slide.primaryText}
          </Link>

          <Link to={slide.secondaryLink} className="fleet-hero-link">
            {slide.secondaryText}
          </Link>
        </div>

        <div className="fleet-hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={index === activeSlide ? 'active' : ''}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;