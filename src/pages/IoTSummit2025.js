import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const IoTSummit2025 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images for IoT Summit
  const galleryImages = [
    { id: 1, src: '/iotsummit2025/iot1.jpg', caption: '' },
    { id: 2, src: '/iotsummit2025/iot2.jpg', caption: '' },
    { id: 3, src: '/iotsummit2025/iot3.jpg', caption: '' },
    { id: 4, src: '/iotsummit2025/iot4.jpg', caption: '' },
    { id: 5, src: '/iotsummit2025/iot5.jpg', caption: '' },
    { id: 6, src: '/iotsummit2025/iot6.jpg', caption: '' },
    { id: 7, src: '/iotsummit2025/iot7.jpg', caption: '' },
    { id: 8, src: '/iotsummit2025/iot8.jpg', caption: '' },
    { id: 9, src: '/iotsummit2025/iot9.jpg', caption: '' },
    { id: 10, src: '/iotsummit2025/iot10.jpg', caption: '' },
    { id: 11, src: '/iotsummit2025/iot11.jpg', caption: '' },
    { id: 12, src: '/iotsummit2025/iot12.jpg', caption: '' },
    { id: 13, src: '/iotsummit2025/iot13.jpg', caption: '' },
    { id: 14, src: '/iotsummit2025/iot14.jpg', caption: '' },
    { id: 15, src: '/iotsummit2025/iot15.jpg', caption: '' },
    { id: 16, src: '/iotsummit2025/iot16.jpg', caption: '' },
    { id: 17, src: '/iotsummit2025/iot17.jpg', caption: '' },
    { id: 18, src: '/iotsummit2025/iot18.jpg', caption: '' },
    { id: 19, src: '/iotsummit2025/iot19.jpg', caption: '' },
    { id: 20, src: '/iotsummit2025/iot20.jpg', caption: '' },
    { id: 21, src: '/iotsummit2025/iot21.jpg', caption: '' },
    { id: 22, src: '/iotsummit2025/iot22.jpg', caption: '' },
    { id: 23, src: '/iotsummit2025/iot23.jpg', caption: '' },
    { id: 24, src: '/iotsummit2025/iot24.jpg', caption: '' },
    { id: 25, src: '/iotsummit2025/iot25.jpg', caption: '' },
    { id: 26, src: '/iotsummit2025/iot26.jpg', caption: '' },
    { id: 27, src: '/iotsummit2025/iot27.jpg', caption: '' },
    { id: 28, src: '/iotsummit2025/iot28.jpg', caption: '' },
    { id: 29, src: '/iotsummit2025/iot29.jpg', caption: '' },
    { id: 30, src: '/iotsummit2025/iot30.jpg', caption: '' },
    { id: 31, src: '/iotsummit2025/iot31.jpg', caption: '' },
    { id: 32, src: '/iotsummit2025/iot32.jpg', caption: '' },
    { id: 33, src: '/iotsummit2025/iot33.jpg', caption: '' },
    { id: 34, src: '/iotsummit2025/iot34.jpg', caption: '' },
    { id: 35, src: '/iotsummit2025/iot35.jpg', caption: '' },
    { id: 36, src: '/iotsummit2025/iot36.jpg', caption: '' },
    { id: 37, src: '/iotsummit2025/iot37.jpg', caption: '' },
    { id: 38, src: '/iotsummit2025/iot38.jpg', caption: '' },
    { id: 39, src: '/iotsummit2025/iot39.jpg', caption: '' },
    { id: 40, src: '/iotsummit2025/iot40.jpg', caption: '' },
    { id: 41, src: '/iotsummit2025/iot41.jpg', caption: '' },
    { id: 42, src: '/iotsummit2025/iot42.jpg', caption: '' },
    { id: 43, src: '/iotsummit2025/iot43.jpg', caption: '' },
    { id: 44, src: '/iotsummit2025/iot44.jpg', caption: '' },
    { id: 45, src: '/iotsummit2025/iot45.jpg', caption: '' },
    { id: 46, src: '/iotsummit2025/iot46.jpg', caption: '' },
    { id: 47, src: '/iotsummit2025/iot47.jpg', caption: '' },
    { id: 48, src: '/iotsummit2025/iot48.jpg', caption: '' },
    { id: 49, src: '/iotsummit2025/iot49.jpg', caption: '' },
    { id: 50, src: '/iotsummit2025/iot50.jpg', caption: '' },
    { id: 51, src: '/iotsummit2025/iot51.jpg', caption: '' },
    { id: 52, src: '/iotsummit2025/iot52.jpg', caption: '' },
    { id: 53, src: '/iotsummit2025/iot53.jpg', caption: '' },
    { id: 54, src: '/iotsummit2025/iot54.jpg', caption: '' },
    { id: 55, src: '/iotsummit2025/iot55.jpg', caption: '' },
    { id: 56, src: '/iotsummit2025/iot56.jpg', caption: '' },
    { id: 57, src: '/iotsummit2025/iot57.jpg', caption: '' },
    { id: 58, src: '/iotsummit2025/iot58.jpg', caption: '' },
    { id: 59, src: '/iotsummit2025/iot59.jpg', caption: '' },
    { id: 60, src: '/iotsummit2025/iot60.jpg', caption: '' },
    { id: 61, src: '/iotsummit2025/iot61.jpg', caption: '' },
    { id: 62, src: '/iotsummit2025/iot62.jpg', caption: '' },
    { id: 63, src: '/iotsummit2025/iot63.jpg', caption: '' },
    { id: 64, src: '/iotsummit2025/iot64.jpg', caption: '' },
    { id: 65, src: '/iotsummit2025/iot65.jpg', caption: '' },
    { id: 66, src: '/iotsummit2025/iot66.jpg', caption: '' },
    { id: 67, src: '/iotsummit2025/iot67.jpg', caption: '' },
    { id: 68, src: '/iotsummit2025/iot68.jpg', caption: '' },
    { id: 69, src: '/iotsummit2025/iot69.jpg', caption: '' },
    { id: 70, src: '/iotsummit2025/iot70.jpg', caption: '' },
    { id: 71, src: '/iotsummit2025/iot71.jpg', caption: '' },
    { id: 72, src: '/iotsummit2025/iot72.jpg', caption: '' },
    { id: 73, src: '/iotsummit2025/iot73.jpg', caption: '' },
    
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
              <span style={{ color: '#111827', fontWeight: 600 }}>IoT Summit 2025</span>
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
              CONFERENCE
            </div>

            <h1 style={{
              fontSize: '42px',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '16px',
              lineHeight: 1.1
            }}>
              IoT Summit 2025 Pakistan
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
                <span style={{ fontWeight: 500 }}>March 15-16, 2025</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                color: '#6b7280',
                fontSize: '15px'
              }}>
                <span style={{ fontSize: '18px' }}>📍</span>
                <span style={{ fontWeight: 500 }}>Pearl Continental Hotel Karachi</span>
              </div>
            </div>

            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: 1.7,
              maxWidth: '800px'
            }}>
              Pakistan's largest IoT & Telematics conference featuring JimiIoT and Qoho Vision product launches, 
              live demonstrations, and networking sessions with industry leaders from across the country.
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
                  500+
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
                  50+
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
                  100+
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

export default IoTSummit2025;