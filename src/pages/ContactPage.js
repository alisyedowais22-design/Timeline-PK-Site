import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import contactHeroBg from '../assets/contact-hero-bg.avif';

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
  }, [searchParams]);

  const faqs = [
    {
      q: 'What products does Timeline Telematics offer?',
      a: 'We offer JimiIoT AI dashcams (JC series), fleet GPS trackers (VG, GT, VL, LL series), Qoho Vision mobile DVR systems, and our fleet management platform.',
    },
    {
      q: 'Do you offer installation and training?',
      a: 'Yes! We provide professional installation, staff training, and ongoing technical support for all our products across Pakistan.',
    },
    {
      q: 'Are Qoho Vision products certified for Pakistan?',
      a: 'Qoho Vision products are UAE RTA certified and meet international vehicle safety standards. We handle all local compliance and registration requirements.',
    },
    {
      q: 'How do I get a demo or quotation?',
      a: 'Simply fill in the contact form on this page, or call/WhatsApp us at +92 3111122883. Our team will respond within 24 hours with a customized quote.',
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section
        className="page-hero page-hero-red"
        style={{
          backgroundImage: `linear-gradient(rgba(35, 0, 0, 0.82), rgba(35, 0, 0, 0.88)), url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="page-hero-bg"></div>
        <div className="container">
          <div className="page-hero-content">
            <span className="page-badge">CONTACT US</span>
            <h1 className="page-hero-title">
              Let's Build Your
              <span className="gradient-text"> Smart Fleet Together</span>
            </h1>
            <p className="page-hero-desc">
              Get a free consultation and customized quote for your fleet.
              Our team responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrap">
              <h2 className="contact-form-title">Send Us a Message</h2>

              {showSuccess && (
                <div className="form-success">
                  <div className="form-success-icon">✅</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              )}

              <form
                className="contact-form"
                action="https://formsubmit.co/info.pk@timelinetelematics.com"
                method="POST"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="📩 New Contact Form Message - Timeline Telematics" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value={`${window.location.origin}/contact?success=true`} />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Timeline Telematics! We've received your message and our team will get back to you within 24 hours." />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="Full Name"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Company Name</label>
                    <input
                      type="text"
                      name="Company Name"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="Phone / WhatsApp"
                      placeholder="+92 3XX XXXXXXX"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="Email Address"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Fleet Size</label>
                  <select name="Fleet Size">
                    <option value="">Select fleet size</option>
                    <option value="1-10 Vehicles">1–10 Vehicles</option>
                    <option value="11-50 Vehicles">11–50 Vehicles</option>
                    <option value="51-200 Vehicles">51–200 Vehicles</option>
                    <option value="200+ Vehicles">200+ Vehicles</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="Message"
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary form-submit-btn">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h2 className="contact-form-title">Get in Touch</h2>

              <div className="contact-cards">
                <div className="contact-detail-card">
                  <span className="contact-detail-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:info.pk@timelinetelematics.com">
                      info.pk@timelinetelematics.com
                    </a>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <span className="contact-detail-icon">📞</span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+923111122883">+92 3111122883</a>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <span className="contact-detail-icon">💬</span>
                  <div>
                    <h4>WhatsApp</h4>
                    <a
                      href="https://wa.me/923111122883"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="contact-detail-card">
                  <span className="contact-detail-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <span>Pakistan — Nationwide Coverage</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="business-hours">
                <h4>🕐 Business Hours</h4>
                <div className="hours-grid">
                  <span>Monday – Friday</span>
                  <span>9:00 AM – 6:00 PM</span>
                  <span>Saturday</span>
                  <span>10:00 AM – 4:00 PM</span>
                  <span>Sunday</span>
                  <span>Emergency Support Only</span>
                </div>
              </div>

              {/* IOT Summit Badge */}
              <div className="summit-badge-card">
                <div className="summit-badge-icon">🏆</div>
                <div>
                  <h4>IOT Summit 2026 Pakistan</h4>
                  <p>Meet us at Pakistan's biggest IoT event — get a live demo in person!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'faq-open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className="faq-arrow">{openFaq === i ? '▲' : '▼'}</span>
                </button>

                {openFaq === i && (
                  <div className="faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;