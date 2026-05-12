import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PTCLConnect2025 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images for PTCL Connect
  const galleryImages = [
    
    { id: 1, src: '/ptclevent2025/ptcl2.jpg', caption: '' },
    { id: 2, src: '/ptclevent2025/ptcl3.jpg', caption: '' },
    { id: 3, src: '/ptclevent2025/ptcl4.jpg', caption: '' },
    { id: 4, src: '/ptclevent2025/ptcl5.jpg', caption: '' },
    { id: 5, src: '/ptclevent2025/ptcl7.jpg', caption: '' },
    { id: 6, src: '/ptclevent2025/ptcl8.jpg', caption: '' },
    { id: 7, src: '/ptclevent2025/ptcl9.jpg', caption: '' },
    { id: 8, src: '/ptclevent2025/ptcl11.jpg', caption: '' },
    { id: 9, src: '/ptclevent2025/ptcl13.jpg', caption: '' },
  ];

  return (
    <>
      <Navbar />
      <main>
        
        {/* Breadcrumb */}
        <section style={{
          padding: '120px 0 40px',
          background: '#f9fafb',
          marginTop: '40px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>
              <Link to="/" style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
              <span>›</span>
              <Link to="/events" style={{ color: '#6b7280', textDecoration: 'none' }}>Events</Link>
              <span>›</span>
              <span style={{ color: '#111827', fontWeight: 600 }}>PTCL Connect 2025</span>
            </div>

            <div style={{
              display: 'inline-block',
              padding: '6px 14px',
              background: '#fef3c7',
              color: '#92400e',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              MEETUP
            </div>

            <h1 style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              Jimi IoT Product Display at PTCL Connect 2025
            </h1>

            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '8px',
                color: '#6b7280',
                fontSize: '15px'
              }}>
                <span style={{ fontSize: '18px' }}>📅</span>
                <span style={{ fontWeight: 500 }}>May 5, 2025</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#6b7280',
                fontSize: '15px'
              }}>
                <span style={{ fontSize: '18px' }}>📍</span>
                <span style={{ fontWeight: 500 }}>Pearl Continental Hotel, Karachi</span>
              </div>
            </div>

            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              Exclusive networking event for fleet owners showcasing real-world case studies, ROI success stories, 
              and one-on-one consultations with telematics experts on implementing smart fleet solutions.
            </p>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: '32px',
              marginTop: '32px',
              padding: '24px',
              background: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
            }}>
              <div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#dc2626',
                  marginBottom: '4px'
                }}>
                  150+
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  Attendees
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#dc2626',
                  marginBottom: '4px'
                }}>
                  15+
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  Speakers
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  color: '#dc2626',
                  marginBottom: '4px'
                }}>
                  30+
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  Exhibitors
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Event Gallery */}
        <section style={{ padding: '80px 0', background: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
            
            <h2 style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '40px',
              textAlign: 'center'
            }}>
              Event <span style={{ color: '#dc2626' }}>Gallery</span>
            </h2>

            {/* Gallery Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '24px'
            }}>
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '280px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI4MCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7wn5OHIEltYWdlPC90ZXh0Pjwvc3ZnPg==";
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '16px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    color: 'white',
                    fontSize: '14px',
                    fontWeight: 600
                  }}>
                    {image.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              cursor: 'pointer'
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '40px',
                height: '40px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain',
                cursor: 'default'
              }}
            />
          </div>
        )}

        {/* Back Button */}
        <section style={{ padding: '40px 0', background: '#f9fafb', textAlign: 'center' }}>
          <Link
            to="/events"
            style={{
              display: 'inline-block',
              padding: '12px 32px',
              background: '#dc2626',
              color: 'white',
              borderRadius: '10px',
              fontSize: '15px',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#b91c1c';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#dc2626';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            ← Back to Events
          </Link>
        </section>

      </main>
    </>
  );
};

export default PTCLConnect2025;