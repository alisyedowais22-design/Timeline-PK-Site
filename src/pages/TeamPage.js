import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeamPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // CEO
  const ceo = {
    name: 'Muhammad Ahsan Naeem',
    role: 'Chief Executive Officer & Founder',
    category: 'leadership',
    image: '/team/Mahsan.png',
    bio: 'Muhammad Ahsan Naeem is the visionary CEO of Timeline Telematics, leading the company since its inception in 2018. Under his leadership, Timeline has become Pakistan\'s premier fleet management solution provider, serving 500+ enterprises nationwide.',
    linkedin: 'https://www.linkedin.com/in/muhammad-ahsan-naeem-50177011/',
    email: 'ahsan@timelinetelematics.com',
  };

  // Director of Finance
  const directorFinance = {
    name: 'Miss Sobia',
    role: 'Director of Finance & Co Founder',
    category: 'leadership',
    image: '/team/femaleavatar.jpg',
    bio: 'Director of Finance with strong expertise in financial planning, budgeting, and strategic decision-making. Skilled in managing financial operations, optimizing costs, and ensuring regulatory compliance.',
    linkedin: '#',
    email: 'sobia@timelinetelematics.com',
  };

  // Team Members
  const teamMembers = [
    {
      name: 'Mehmood Ayaz',
      role: 'Group Country Head',
      category: 'leadership',
      image: '/team/mehmoodayazimg.jpg',
      bio: 'Strategic Technology Leader with 15 years of experience driving innovation in IoT platforms, telematics, and fleet management solutions.',
      linkedin: 'https://www.linkedin.com/in/mehmood-ayaz-5104281a/',
      email: 'mehmood.ayaz@timelinetelematics.com',
      skills: ['Operations Management', 'Business Development', 'Strategic Planning'],
    },
    {
      name: 'Nouman Baig',
      role: 'Manager Sales & Support',
      category: 'engineering',
      image: '/team/nomanbaigimg.jpg',
      bio: 'Experienced Technical Expert with 7 years of demonstrated success in fleet management systems, MDVR systems, device integration, and telematics solutions.',
      linkedin: 'https://www.linkedin.com/in/nouman-baig-88b8aa103/',
      email: 'noman@timelinetelematics.com',
      skills: ['Technical Support', 'Hardware Installation', 'Customer Service'],
    },
    {
      name: 'Ali Haider',
      role: 'Sr Full Stack Developer',
      category: 'development',
      image: '/team/alihaiderimg.jpg',
      bio: 'Full Stack Developer with 4 years of experience building scalable front-end applications, backend APIs, and database-driven systems.',
      linkedin: 'https://www.linkedin.com/in/ali-haider-aab842215/',
      email: 'alihaider@timelinetelematics.com',
      skills: ['React', 'Node.js', 'REST API'],
    },
    {
      name: 'Rana Ahmed Tariq',
      role: 'Technical Support Engineer',
      category: 'engineering',
      image: '/team/boyavatar.webp',
      bio: 'Technical Support Engineer with experience in device troubleshooting, IoT systems, fleet management platforms, and technical customer support.',
      linkedin: '',
      email: 'ahmed@timelinetelematics.com',
      skills: [''],
    },
    {
      name: 'Abdullah Sani',
      role: 'Technical Support Engineer',
      category: 'engineering',
      image: '/team/boyavatar.webp',
      bio: 'Technical Support Engineer with experience in device troubleshooting, IoT systems, fleet management platforms, and technical customer support.',
      linkedin: '',
      email: 'abdullah@timelinetelematics.com',
      skills: [''],
    },
    {
      name: 'Syed Owais Ali',
      role: 'Front End Developer',
      category: 'Development',
      image: '/team/owais.png',
      bio: 'Frontend Developer with 1 year of experience building responsive and user-friendly web interfaces using modern web technologies. Passionate about creating clean UI, improving performance, and delivering smooth user experiences.',
      linkedin: 'https://www.linkedin.com/in/syed-owais-ali-298617288/',
      email: 'owais@timelinetelematics.com',
      skills: ['HTML5, CSS3, JavaScript, React.js, Bootstrap, Tailwind CSS'],
    },
    {
      name: 'Syed Muhammad Saad',
      role: '.Net Developer',
      category: 'Development',
      image: '/team/saad1.png',
      bio: '.NET Developer with experience in building scalable web and desktop applications using the .NET framework.',
      linkedin: 'https://linkedin.com/in/syed-muhammad-saad-157629272',
      email: 'saad@timelinetelematics.com',
      skills: ['.NET, C#, ASP.NET, Web API, Entity Framework'],
    },
    {
      name: 'Shahzad Ali',
      role: 'Full Stack Developer',
      category: 'Development',
      image: '/team/shahzad1.png',
      bio: 'Full Stack Developer with experience building scalable front-end and back-end applications, APIs, and database-driven solutions.',
      linkedin: 'https://www.linkedin.com/in/shahzad-ali-494a2621a/',
      email: 'shahzad@timelinetelematics.com',
      skills: ['HTML, CSS, JavaScript, React.js, Bootstrap, Tailwind CSS, .NET, ASP.NET Core, C#, REST APIs'],
    },
    {
      name: 'Muzammil',
      role: 'Rider',
      category: '',
      image: '/team/boyavatar.webp',
      bio: 'Rider with experience in safe and timely delivery, route management, and customer service.',
      linkedin: '',
      email: 'muzammil@timelinetelematics.com',
      skills: [''],
    },
  ];

  const filters = [
    { id: 'all', label: 'All Team', count: teamMembers.length },
    { id: 'leadership', label: 'Leadership', count: teamMembers.filter(m => m.category === 'leadership').length },
    { id: 'engineering', label: 'Engineering', count: teamMembers.filter(m => m.category === 'engineering').length },
    { id: 'Development', label: 'Development', count: teamMembers.filter(m => m.category === 'Development').length },
  ];

  const filteredMembers = activeFilter === 'all'
    ? teamMembers
    : teamMembers.filter(m => m.category === activeFilter);

  return (
    <div className="team-page">

      {/* Professional Hero */}
      
<section
  className="page-hero page-hero-dark"
  style={{
    backgroundImage:
      "linear-gradient(rgba(5, 12, 25, 0.88), rgba(5, 12, 25, 0.90)), url('/teambackgroundimg.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="page-hero-bg"></div>
  <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">OUR TEAM</span>
            <h1 className="page-hero-title">
              Leadership & <span className="gradient-text">Expertise</span>
            </h1>
            <p className="page-hero-desc">
              Meet the professionals driving Timeline Telematics' success across Pakistan
            </p>
            <div className="page-hero-stats">
              <div className="page-stat"><span className="page-stat-num">15+</span><span className="page-stat-label">Team Members</span></div>
              <div className="page-stat"><span className="page-stat-num">50+</span><span className="page-stat-label">Years Combined Experience</span></div>
              <div className="page-stat"><span className="page-stat-num">500+</span><span className="page-stat-label">Clients Served</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="executive-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Executive Leadership</h2>
            <p className="section-desc">Strategic vision and operational excellence</p>
          </div>

          {/* CEO Card - Professional */}
          <div className="executive-card">
            <div className="executive-image">
              <img src={ceo.image} alt={ceo.name} onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="executive-content">
              <div className="executive-header">
                <div>
                  <h3 className="executive-name">{ceo.name}</h3>
                  <p className="executive-role">{ceo.role}</p>
                </div>
                <div className="executive-social">
                  <a href={ceo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${ceo.email}`} className="social-link">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="executive-bio">{ceo.bio}</p>
              <div className="executive-stats">
                <div className="exec-stat">
                  <span className="exec-stat-num">500+</span>
                  <span className="exec-stat-label">Enterprise Clients</span>
                </div>
                <div className="exec-stat">
                  <span className="exec-stat-num">15+</span>
                  <span className="exec-stat-label">Years Experience</span>
                </div>
                <div className="exec-stat">
                  <span className="exec-stat-num">5000+</span>
                  <span className="exec-stat-label">Vehicles Managed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Director of Finance Card */}
          <div className="executive-card">
            <div className="executive-image">
              <img src={directorFinance.image} alt={directorFinance.name} onError={(e) => e.target.style.display = 'none'} />
            </div>
            <div className="executive-content">
              <div className="executive-header">
                <div>
                  <h3 className="executive-name">{directorFinance.name}</h3>
                  <p className="executive-role">{directorFinance.role}</p>
                </div>
                <div className="executive-social">
                  <a href={directorFinance.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={`mailto:${directorFinance.email}`} className="social-link">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="executive-bio">{directorFinance.bio}</p>
              <div className="executive-stats">
                <div className="exec-stat">
                  <span className="exec-stat-num">12+</span>
                  <span className="exec-stat-label">Years in Finance</span>
                </div>
                <div className="exec-stat">
                  <span className="exec-stat-num">100M+</span>
                  <span className="exec-stat-label">Budget Managed</span>
                </div>
                <div className="exec-stat">
                  <span className="exec-stat-num">50+</span>
                  <span className="exec-stat-label">Financial Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Leadership & Core Team</h2>
            <p className="section-desc">Experienced professionals driving innovation</p>
          </div>

          {/* Professional Filters */}
          <div className="team-filters-pro">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`filter-btn-pro ${activeFilter === filter.id ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label} <span className="filter-count-pro">({filter.count})</span>
              </button>
            ))}
          </div>

          {/* Professional Team Grid */}
          <div className="team-grid-pro">
            {filteredMembers.map((member, index) => (
              <div key={index} className="team-card-pro">
                <div className="team-card-image-pro">
                  <img src={member.image} alt={member.name} onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="team-card-content-pro">
                  <h3 className="team-name-pro">{member.name}</h3>
                  <p className="team-role-pro">{member.role}</p>
                  <p className="team-bio-pro">{member.bio}</p>
                  <div className="team-skills-pro">
                    {member.skills.map((skill, i) => (
                      <span key={i} className="skill-tag-pro">{skill}</span>
                    ))}
                  </div>
                  <div className="team-social-pro">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn-pro">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={`mailto:${member.email}`} className="social-btn-pro">
                      <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="page-cta-section">
        <div className="container">
          <div className="page-cta-box">
            <h2>Join Timeline Telematics</h2>
            <p>We're looking for talented professionals to join our growing team.</p>
            <div className="page-cta-btns">
              <Link to="/contact" className="btn-primary">View Open Positions →</Link>
              <a href="mailto:info@timelinetelematics.com" className="btn-secondary">Send Resume</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;