import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Events = () => {
  const [filterType, setFilterType] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery with 20 images - auto-sliding
  const gallery = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `/events/eventpic${i + 1}.webp`,
    caption: "IOT Summit 2025"
  }));

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % gallery.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, [gallery.length]);

  // Manual navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Upcoming Events Data
  const upcomingEvents = [
    {
      id: 1,
      title: "IOT Summit Pakistan 2026",
      date: "March 15-16, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Expo Center Karachi",
      type: "conference",
      featured: true,
      videoUrl: "/events/iot-summit-video.mp4",
      description: "Pakistan's premier IoT and telematics technology conference. Join 500+ industry leaders, explore cutting-edge solutions, and network with global partners.",
      highlights: ["50+ Speakers", "100+ Exhibitors", "Live Demos", "Networking Sessions"],
      status: "Registration Open",
      registrationLink: "/contact",
    },
    {
      id: 2,
      title: "Fleet Management Workshop",
      date: "April 10, 2025",
      time: "2:00 PM - 6:00 PM",
      location: "Timeline Office, Lahore",
      type: "workshop",
      featured: false,
      image: "/events/workshop.jpg",
      description: "Hands-on workshop covering AI dashcams, GPS tracking, and Teletix platform training. Limited seats available.",
      highlights: ["Hands-on Training", "Certificate", "Free Demo Devices", "Q&A Session"],
      status: "Limited Seats",
      registrationLink: "/contact",
    },
    {
      id: 3,
      title: "Smart Transport Expo",
      date: "May 22-24, 2025",
      time: "10:00 AM - 7:00 PM",
      location: "Alhamra Arts Council, Lahore",
      type: "expo",
      featured: false,
      image: "/events/transport-expo.jpg",
      description: "Showcasing the future of transportation technology. Test drive smart vehicles and see IoT solutions in action.",
      highlights: ["Live Vehicle Demos", "Tech Showcases", "Industry Talks", "Startup Zone"],
      status: "Early Bird Pricing",
      registrationLink: "/contact",
    },
  ];

  // Past Events Data
  const pastEvents = [
    {
      id: 4,
      title: "IoT Summit 2025 Pakistan",
      date: "2025",
      location: "Pearl Continental Hotel Karachi",
      type: "conference",
      image: "/events/eventpic12.webp",
      attendees: "300+",
      summary: "Successful event highlighting JimiIoT and Qoho Vision product launches in Pakistan. Featured live demos and panel discussions.",
    },
    {
      id: 5,
      title: "Jimi IoT Product Display at PTCL Connect 2025",
      date: "May 5, 2025",
      location: "Pearl Continental Hotel, Karachi",
      type: "meetup",
      image: "/events/ptclevent.webp",
      attendees: "150+",
      summary: "Exclusive networking event for fleet owners. Shared case studies and ROI success stories from early adopters.",
    },
  ];

  // Speakers/Partners
  const speakers = [
    { name: "Dr. Ahmed Khan", role: "CEO, JimiIoT Pakistan", image: "/speakers/speaker-1.jpg" },
    { name: "Sarah Ali", role: "Director, Qoho Vision MENA", image: "/speakers/speaker-2.jpg" },
    { name: "Hassan Raza", role: "CTO, Timeline Telematics", image: "/speakers/speaker-3.jpg" },
    { name: "Maria Shah", role: "IoT Industry Expert", image: "/speakers/speaker-4.jpg" },
  ];

  const filteredEvents = filterType === 'all' 
    ? upcomingEvents 
    : upcomingEvents.filter(e => e.type === filterType);

  return (
    <>
      <Navbar />
      <main>

        {/* ═══ HERO BANNER WITH VIDEO ═══ */}
        <section className="events-hero-video">
          <video
            className="hero-background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/events/eventvid.mp4" type="video/mp4" />
            <source src="/events/hero-video.webm" type="video/webm" />
          </video>
          {/*
          <div className="container hero-video-content">
            <div className="events-hero-content">
              <div className="section-badge-outer" style={{ marginBottom: 20 }}>
                <span className="section-badge-text">UPCOMING EVENTS</span>
              </div>

              <h1 className="events-hero-title">
                Experience the Power of{" "}
                <span style={{ color: "red" }}>Smart Fleet Solutions</span>
              </h1>

              <p className="events-hero-desc">
                Explore next-generation telematics, real-time tracking technologies, and
                innovative fleet management solutions designed for modern businesses.
              </p>

              <div className="events-hero-stats">
                <div className="eh-stat">
                  <span className="eh-val">15+</span>
                  <span className="eh-label">Live Tech Events</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">3000+</span>
                  <span className="eh-label">Professionals Connected</span>
                </div>
                <div className="eh-stat">
                  <span className="eh-val">75+</span>
                  <span className="eh-label">Technology Experts</span>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* ═══ FEATURED EVENT ═══ */}
        <section className="featured-event-section">
          <div className="container">
            <div className="featured-event-card-video">
              <div className="featured-event-badge">🔥 Recent Event</div>
              
              <div className="featured-event-content-video">
                <div className="featured-event-text">
                  <h2 className="featured-event-title">IOT Summit Pakistan 2025</h2>
                  <p className="featured-event-tagline">
                    Pakistan's Largest IoT & Telematics Conference
                  </p>
                  <div className="featured-event-meta">
                    <div className="fem-item">
                      <span className="fem-icon">📅</span>
                      <div>
                        <div className="fem-label">DATE</div>
                        <div className="fem-value">2025</div>
                      </div>
                    </div>
                    <div className="fem-item">
                      <span className="fem-icon">📍</span>
                      <div>
                        <div className="fem-label">VENUE</div>
                        <div className="fem-value">Pearl Continental Karachi</div>
                      </div>
                    </div>
                    <div className="fem-item">
                      <span className="fem-icon">👥</span>
                      <div>
                        <div className="fem-label">Total</div>
                        <div className="fem-value">500+ Attendees</div>
                      </div>
                    </div>
                  </div>
                  <div className="featured-event-highlights">
                    <span className="feh-badge">50+ Speakers</span>
                    <span className="feh-badge">100+ Exhibitors</span>
                    <span className="feh-badge">Live Product Demos</span>
                    <span className="feh-badge">Networking Sessions</span>
                  </div>
                </div>
                
                {/* Video Player */}
                <div className="featured-event-video">
                  <div className="featured-event-video-box">
                    <video
                      className="featured-video-player"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src="/events/iotsummitvid.mp4" type="video/mp4" />
                      <source src="/events/iot-summit-video.webm" type="video/webm" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="sec-head">
          <h2 className="sec-title">Upcoming <span className="gradient-text">Events</span></h2>
          <p className="sec-sub">Register now and reserve your spot at our upcoming industry events</p>
        </div>

        {/* ═══ PAST EVENTS ═══ */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title">Past <span className="gradient-text">Events</span></h2>
              <p className="sec-sub">Highlights from our successful events in 2024</p>
            </div>
            <div className="past-events-grid">
              {pastEvents.map((event) => (
                <div key={event.id} className="past-event-card card-hover">
                  <div className="past-event-image">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OHIFBhc3QgRXZlbnQ8L3RleHQ+PC9zdmc+";
                      }}
                    />
                    <div className="past-event-attendees">👥 {event.attendees} Attendees</div>
                  </div>
                  <div className="past-event-content">
                    <div className="past-event-type">{event.type}</div>
                    <h3 className="past-event-title">{event.title}</h3>
                    <div className="past-event-date">
                      <span className="ped-icon">📅</span>
                      {event.date}
                    </div>
                    <div className="past-event-location">
                      <span className="pel-icon">📍</span>
                      {event.location}
                    </div>
                    <p className="past-event-summary">{event.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EVENT GALLERY ═══ */}
        <section className="section-padding" style={{ background: '#0f172a' }}>
          <div className="container">
            <div className="sec-head">
              
              <p className="sec-sub" style={{ color: '#94a3b8' }}>
                Moments captured from our past events
              </p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <div key={item.id} className="gallery-item">
                  <img 
                    src={item.image} 
                    alt={item.caption}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFmMjkzNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM0YjU1NjMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5O3IEdhbGxlcnkgSW1hZ2U8L3RleHQ+PC9zdmc+";
                    }}
                  />
                  <div className="gallery-caption">{item.caption}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EVENT GALLERY SLIDER ═══ */}
        <section className="section-padding" style={{ background: '#0f172a' }}>
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title" style={{ color: 'white' }}>
                Event <span className="gradient-text">Gallery</span>
              </h2>
              <p className="sec-sub" style={{ color: '#94a3b8' }}>
                Moments captured from our past events
              </p>
            </div>

            {/* Auto-Sliding Gallery */}
            <div className="gallery-slider">
              <div className="gallery-slider-container">
                {gallery.map((item, index) => (
                  <div
                    key={item.id}
                    className={`gallery-slide ${index === currentSlide ? 'gallery-slide-active' : ''}`}
                    style={{
                      display: index === currentSlide ? 'block' : 'none'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.caption}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMWYyOTM3Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIzMiIgZmlsbD0iIzRiNTU2MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPvCfk7cgRXZlbnQgSW1hZ2UgIyR7aXRlbS5pZH08L3RleHQ+PC9zdmc+";
                      }}
                    />
                    <div className="gallery-slide-caption">{item.caption}</div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button className="gallery-arrow gallery-arrow-left" onClick={prevSlide}>
                ‹
              </button>
              <button className="gallery-arrow gallery-arrow-right" onClick={nextSlide}>
                ›
              </button>

              {/* Dots Navigation */}
              <div className="gallery-dots">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`gallery-dot ${index === currentSlide ? 'gallery-dot-active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="gallery-counter">
                {currentSlide + 1} / {gallery.length}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SPEAKERS/PARTNERS ═══ */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="sec-head">
              <h2 className="sec-title">Featured <span className="gradient-text">Speakers</span></h2>
              <p className="sec-sub">Industry experts and thought leaders at our events</p>
            </div>
            <div className="speakers-grid">
              {speakers.map((speaker, i) => (
                <div key={i} className="speaker-card card-hover">
                  <div className="speaker-image">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      onError={(e) => {
                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZpbGw9IiNkYzI2MjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5eL77iPPC90ZXh0Pjwvc3ZnPg==";
                      }}
                    />
                  </div>
                  <h3 className="speaker-name">{speaker.name}</h3>
                  <p className="speaker-role">{speaker.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section className="mini-cta">
          <div className="container">
            <h2 style={{ color: 'white', fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
              Want to sponsor or speak at our next event?
            </h2>
            <p style={{ color: '#d1d5db', marginBottom: 28 }}>
              Partner with Timeline Telematics and showcase your brand to Pakistan's fleet industry leaders.
            </p>
            <a href="/contact" className="btn-white">Get In Touch →</a>
          </div>
        </section>

      </main>
    </>
  );
};

export default Events;