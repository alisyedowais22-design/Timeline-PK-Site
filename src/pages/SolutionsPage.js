import React, { useEffect } from 'react';

import Solutions from '../components/Solutions';
import CTASection from '../components/CTASection';

const industryDetails = [
  {
    title: 'Logistics & Courier',
    desc: 'Timeline Telematics helps logistics and courier companies improve delivery performance, reduce fuel waste, monitor driver behavior, and manage vehicles in real time. From route visibility to geofence alerts, every fleet movement becomes easier to control.',
    points: ['Real-time vehicle tracking', 'Route optimization', 'Fuel monitoring', 'Driver behavior reports'],
  },
  {
    title: 'Public Transport',
    desc: 'For buses, vans, and passenger transport fleets, our solutions help improve schedule control, passenger safety, driver monitoring, and operational transparency across every route.',
    points: ['Schedule monitoring', 'Passenger safety support', 'Driver fatigue alerts', 'Fleet performance dashboard'],
  },
  {
    title: 'Oil & Gas',
    desc: 'Oil and gas fleets operate in high-risk and remote environments. Timeline Telematics provides secure tracking, fuel theft prevention, emergency alerts, and compliance-ready reporting for critical operations.',
    points: ['Remote fleet visibility', 'Fuel theft alerts', 'SOS emergency alerts', 'HSE compliance reports'],
  },
  {
    title: 'Construction',
    desc: 'Construction businesses can track heavy machinery, service vehicles, and site equipment across multiple locations while reducing theft, idle time, and unnecessary operating costs.',
    points: ['Equipment tracking', 'Anti-theft geofencing', 'Engine hours monitoring', 'Multi-site visibility'],
  },
  {
    title: 'Healthcare',
    desc: 'Healthcare fleets need fast response and reliable visibility. Our platform supports ambulances, medical transport vehicles, and supply vehicles with live tracking, safety alerts, and audit history.',
    points: ['Emergency dispatch support', 'Live fleet visibility', 'Driver safety alerts', 'Route and trip history'],
  },
  {
    title: 'Government',
    desc: 'Government departments can improve accountability, reduce unauthorized vehicle usage, monitor fuel costs, and manage multiple departmental fleets through centralized reporting.',
    points: ['Full trip audit trail', 'Unauthorized use alerts', 'Department-wise fleet view', 'Cost control reporting'],
  },
  {
    title: 'Agriculture',
    desc: 'Agricultural operations can monitor tractors, harvesters, transport vehicles, and remote assets with reliable tracking, fuel usage insights, and maintenance planning.',
    points: ['Farm machinery tracking', 'Fuel usage monitoring', 'Asset security alerts', 'Maintenance scheduling'],
  },
];

const SolutionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ background: '#fff' }}>
      <Solutions />

      <section style={{ padding: '90px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span
              style={{
                display: 'inline-block',
                background: '#fff1f2',
                color: '#E8312A',
                padding: '6px 16px',
                borderRadius: '999px',
                fontSize: '12px',
                fontWeight: '800',
                letterSpacing: '1.6px',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Industry Expertise
            </span>

            <h1
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: '900',
                color: '#111827',
                margin: '0 0 16px',
              }}
            >
              Built for Every Fleet Operation
            </h1>

            <p
              style={{
                maxWidth: '760px',
                margin: '0 auto',
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              Timeline Telematics provides industry-ready tracking, monitoring, and fleet management
              solutions for businesses that need real-time control, better safety, and smarter decisions.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
          >
            {industryDetails.map((item, index) => (
              <div
                key={index}
                style={{
                  background: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '18px',
                  padding: '30px',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.06)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '22px',
                    fontWeight: '800',
                    color: '#111827',
                    marginBottom: '14px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: '#6b7280',
                    fontSize: '15px',
                    lineHeight: '1.8',
                    marginBottom: '20px',
                  }}
                >
                  {item.desc}
                </p>

                <div style={{ display: 'grid', gap: '10px' }}>
                  {item.points.map((point, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: '#374151',
                        fontSize: '14px',
                        fontWeight: '600',
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#E8312A',
                          flexShrink: 0,
                        }}
                      />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px', background: '#111827', textAlign: 'center' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: '900',
              color: '#fff',
              marginBottom: '16px',
            }}
          >
            One Platform. Multiple Industries. Complete Control.
          </h2>

          <p
            style={{
              color: '#d1d5db',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '34px',
            }}
          >
            Whether you manage delivery vehicles, passenger transport, government fleets, heavy
            machinery, or emergency response vehicles, Timeline Telematics gives you the tools to
            track, protect, optimize, and grow.
          </p>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              background: '#E8312A',
              color: '#fff',
              padding: '15px 34px',
              borderRadius: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '800',
              textDecoration: 'none',
            }}
          >
            Talk to Expert
          </a>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default SolutionsPage;