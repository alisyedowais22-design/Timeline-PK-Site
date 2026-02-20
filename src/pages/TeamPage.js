import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // CEO - shown separately at top
  const ceo = {
    name: 'Muhammad Ahsan Naeem',
    role: 'Chief Executive Officer',
    category: 'leadership',
    image: '/team/Mahsan.png',
    bio: 'Muhammad Ahsan Naeem is the visionary founder and CEO of Timeline Telematics, leading the company since its inception in 2018. Under his leadership, Timeline has become Pakistan\'s premier fleet management solution provider, serving 500+ enterprises nationwide. With 15+ years of experience in IoT and telematics, Ahsan has positioned Timeline as the official partner for JimiIoT and Qoho Vision in Pakistan. His strategic vision has driven the development of the Teletix platform, now managing 5000+ vehicles across the country.',
    linkedin: 'https://www.linkedin.com/in/muhammad-ahsan-naeem-50177011/',
    email: 'ahsan@teletix.me',
    quote: 'Our mission is simple: transform how Pakistan manages its fleets through technology, innovation, and uncompromising service excellence.',
  };

  // Rest of team
  const teamMembers = [
    {
      name: 'Mehmood Ayaz',
      role: 'Group Country Head',
      category: 'leadership',
      image: '/team/mehmoodayazimg.jpg',
      bio: 'Technology leader with expertise in IoT platforms and Fleet Management',
      linkedin: 'https://www.linkedin.com/in/mehmood-ayaz-5104281a/',
      email: 'mehmood.ayaz@teletix.me',
      skills: ['Country Operations Management', 'Business Development Strategy', 'Strategic Planning & Execution'],
    },
    {
      name: 'Nouman Baig',
      role: 'Technical Support Engineer',
      category: 'engineering',
      image: '/team/nomanbaigimg.jpg',
      bio: 'Experienced Research And Development Manager with a demonstrated history of working in the computer software industry.',
      linkedin: 'https://www.linkedin.com/in/nouman-baig-88b8aa103/',
      email: '#',
      skills: ['Data Analysis', 'Python', 'Internet of Things (IoT)'],
    },
 
    {
      name: 'Ali Haider',
      role: 'Backend Developer',
      category: 'product',
      image: '/team/alihaiderimg.jpg',
      bio: 'Detail oriented Frontend UI/UX Developer. With 2+ hands-on exprience efficiently developing responsive websites and applications using modern frontend tools like Reactjs, Javascript, HTML, CSS, and Bootstrap.',
      linkedin: 'https://www.linkedin.com/in/ali-haider-aab842215/',
      email: '#',
      skills: ['React', 'Nodejs', 'REST API'],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Team', icon: '👥' },
    { id: 'leadership', label: 'Leadership', icon: '🎯' },
    { id: 'engineering', label: 'Engineering', icon: '💻' },
    { id: 'product', label: 'Product', icon: '🎨' },
    { id: 'operations', label: 'Operations', icon: '⚙️' },
    { id: 'marketing', label: 'Marketing', icon: '📢' },
  ];

  const filteredMembers = activeFilter === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.category === activeFilter);

  return (
    <div className="team-page">

      {/* Hero with Background */}
      <section className="page-hero team-hero-with-bg">
        
        {/* OPTION 1: Background Image (uncomment to use) */}
        <div 
          className="team-hero-bg-image"
          style={{
            backgroundImage: 'url(/teambackgroundimg.jpg)',  // ← Your image path here
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* OPTION 2: Background Video (uncomment to use) */}
        {/* 
        <video 
          className="team-hero-bg-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/team-background.mp4" type="video/mp4" />
        </video>
        */}

        {/* Dark Overlay */}
        <div className="team-hero-overlay"></div>

        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">OUR TEAM</span>
            <h1 className="page-hero-title">
              Meet The People
              <span className="gradient-text"> Behind Teletix</span>
            </h1>
            <p className="page-hero-desc">
              A team of 50+ engineers, designers, and support specialists dedicated to 
              building Pakistan's best fleet management platform.
            </p>
            <div className="page-hero-stats">
              <div className="page-stat"><span className="page-stat-num">50+</span><span className="page-stat-label">Team Members</span></div>
              <div className="page-stat"><span className="page-stat-num">6</span><span className="page-stat-label">Departments</span></div>
              <div className="page-stat"><span className="page-stat-num">15+</span><span className="page-stat-label">Avg. Experience</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Spotlight Section */}
      <section className="ceo-spotlight-section">
        <div className="container">
          <div className="ceo-spotlight">
            
            {/* Left: Image */}
            <div className="ceo-image-wrap">
              <div className="ceo-image-container">
                <img 
                  src={ceo.image}
                  alt={ceo.name}
                  className="ceo-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const initials = e.target.parentElement.querySelector('.ceo-initials-fallback');
                    if (initials) initials.style.display = 'flex';
                  }}
                />
                <div className="ceo-initials-fallback">
                  <span>{ceo.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
              </div>
              <div className="ceo-badge">
                <span className="ceo-badge-icon">👑</span>
                <span>Founder & CEO</span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="ceo-content">
              <div className="ceo-header">
                <div>
                  <h2 className="ceo-name">{ceo.name}</h2>
                  <p className="ceo-title">{ceo.role}</p>
                </div>
                <div className="ceo-social-links">
                  <a href={ceo.linkedin} className="ceo-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${ceo.email}`} className="ceo-social-btn" aria-label="Email">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <p className="ceo-bio">{ceo.bio}</p>

              <div className="ceo-quote-box">
                <svg className="quote-icon" width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="ceo-quote">{ceo.quote}</p>
              </div>

              <div className="ceo-achievements">
                <div className="ceo-achievement">
                  <span className="achievement-number">500+</span>
                  <span className="achievement-label">Enterprise Clients</span>
                </div>
                <div className="ceo-achievement">
                  <span className="achievement-number">7+</span>
                  <span className="achievement-label">Years Experience</span>
                </div>
                <div className="ceo-achievement">
                  <span className="achievement-number">5000+</span>
                  <span className="achievement-label">Vehicles Managed</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Regular Team Grid */}
      <section className="team-section">
        <div className="container">

          <div className="team-section-header">
            <h2 className="team-section-title">Leadership & Core Team</h2>
            <p className="team-section-desc">Meet the talented individuals driving Timeline Telematics forward</p>
          </div>

          {/* Filters */}
          <div className="team-filters">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`team-filter-btn ${activeFilter === filter.id ? 'filter-active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                <span className="filter-icon">{filter.icon}</span>
                <span>{filter.label}</span>
                <span className="filter-count">
                  {filter.id === 'all' ? teamMembers.length : teamMembers.filter(m => m.category === filter.id).length}
                </span>
              </button>
            ))}
          </div>

          {/* Team Grid */}
          <div className="team-grid">
            {filteredMembers.map((member, index) => (
              <div key={index} className="team-card" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="team-card-image">
                  {member.image && (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-member-photo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement.querySelector('.team-img-placeholder');
                        if (placeholder) placeholder.style.display = 'flex';
                      }}
                    />
                  )}
                  <div 
                    className="team-img-placeholder"
                    style={{ display: member.image ? 'none' : 'flex' }}
                  >
                    <span className="team-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="team-card-overlay">
                    <div className="team-social-links">
                      <a href={member.linkedin} className="team-social-btn" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href={`mailto:${member.email}`} className="team-social-btn" aria-label="Email">
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="team-card-info">
                  <h3 className="team-member-name">{member.name}</h3>
                  <p className="team-member-role">{member.role}</p>
                  <p className="team-member-bio">{member.bio}</p>
                  <div className="team-member-skills">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="team-culture-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">OUR CULTURE</span>
            <h2 className="section-title">Why Join Timeline Telematics?</h2>
            <p className="section-desc">We're building Pakistan's future of fleet technology — and we need the best minds.</p>
          </div>
          <div className="culture-grid">
            <div className="culture-card">
              <span className="culture-icon">🚀</span>
              <h3>Cutting-Edge Tech</h3>
              <p>Work with React, Node.js, AWS, AI/ML, and IoT hardware at scale.</p>
            </div>
            <div className="culture-card">
              <span className="culture-icon">💰</span>
              <h3>Competitive Packages</h3>
              <p>Market-leading salaries, health insurance, and performance bonuses.</p>
            </div>
            <div className="culture-card">
              <span className="culture-icon">📚</span>
              <h3>Learning Budget</h3>
              <p>Annual learning stipend for courses, conferences, and certifications.</p>
            </div>
            <div className="culture-card">
              <span className="culture-icon">🏠</span>
              <h3>Remote-First</h3>
              <p>Flexible hybrid model with co-working allowance and WFH equipment.</p>
            </div>
            <div className="culture-card">
              <span className="culture-icon">🎯</span>
              <h3>Impact-Driven</h3>
              <p>Your code affects 5000+ vehicles and thousands of drivers daily.</p>
            </div>
            <div className="culture-card">
              <span className="culture-icon">🤝</span>
              <h3>Collaborative Team</h3>
              <p>Work with Pakistan's top engineers, designers, and product minds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Want to Join Our Team?</h2>
            <p>We're always looking for talented engineers, designers, and problem solvers to join Timeline Telematics.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">View Open Positions →</Link>
              <a href="mailto:careers@teletix.me" className="btn-secondary">Send Your Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;