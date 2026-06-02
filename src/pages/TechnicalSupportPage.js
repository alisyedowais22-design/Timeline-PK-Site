import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const TechnicalSupportPage = () => {
  const [searchParams] = useSearchParams();
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if redirected back after successful submission
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true);
      
      // Auto-hide after 10 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 10000);
    }
  }, [searchParams]);

  return (
    <main className="support-page">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span> › </span>
            <Link to="/contact">Contact</Link>
            <span> › </span>
            <span>Technical Support</span>
          </div>
          <h1 className="support-title">Technical Support</h1>
          <p className="support-subtitle">
            Get expert assistance for your Timeline Telematics products
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="support-form-section">
        <div className="container">
          <div className="support-grid">
            
            {/* Left: Form */}
            <div className="support-form-wrapper">
              <div className="form-header">
                <h2>Submit a Support Ticket</h2>
                <p>For any technical support, please fill in the form below. Our technical team will contact you within 24-48 hours.</p>
                <p className="form-note">
                  Need product information or quotes? Visit <Link to="/product-inquiry">Product Inquiry</Link> page.
                </p>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="alert alert-success-pro">
                  <div className="alert-icon">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div className="alert-content">
                    <h3>Support Ticket Created Successfully!</h3>
                    <p>Your technical support request has been submitted. Our team will contact you soon.</p>
                    <p className="alert-note">A confirmation email has been sent to your inbox with your ticket details.</p>
                  </div>
                  <button 
                    className="alert-close"
                    onClick={() => setShowSuccess(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              )}

              <form 
                action="https://formsubmit.co/info.pk@timelinetelematics.com"
                method="POST"
                className="support-form"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="🔧 New Technical Support Ticket - Timeline Telematics" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_next" value={`${window.location.origin}/technical-support?success=true`} />
                <input type="hidden" name="_autoresponse" value="Thank you for contacting Timeline Telematics Technical Support! We've received your support ticket and our technical team will get back to you within 24-48 hours." />
                <input type="text" name="_honey" style={{display: 'none'}} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="Company"
                      required
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="Email"
                      required
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      required
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="productModel">Product Model *</label>
                    <select
                      id="productModel"
                      name="Product Model"
                      required
                    >
                      <option value="">Select Product Model</option>
                      <option value="VL113">VL113</option>
                      <option value="VL863 (A)">VL863 (A)</option>
                      <option value="GT06N 4G">GT06N 4G</option>
                      <option value="WeTrack Lite">WeTrack Lite</option>
                      <option value="KL100">KL100</option>
                      <option value="Other">Other (specify in description)</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="serialNumber">Serial Number / IMEI</label>
                    <input
                      type="text"
                      id="serialNumber"
                      name="Serial Number / IMEI"
                      placeholder="Device serial number or IMEI"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="issueType">Issue Type *</label>
                    <select
                      id="issueType"
                      name="Issue Type"
                      required
                    >
                      <option value="">Select Issue Type</option>
                      <option value="Device Not Working">Device Not Working</option>
                      <option value="GPS Tracking Issue">GPS Tracking Issue</option>
                      <option value="Platform/Software Issue">Platform/Software Issue</option>
                      <option value="Installation Help">Installation Help</option>
                      <option value="Configuration Support">Configuration Support</option>
                      <option value="Firmware Update">Firmware Update</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="priority">Priority Level *</label>
                    <select
                      id="priority"
                      name="Priority"
                      required
                    >
                      <option value="Low">Low - General Question</option>
                      <option value="Medium">Medium - Normal Issue</option>
                      <option value="High">High - Service Disruption</option>
                      <option value="Critical">Critical - Complete Failure</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="description">Issue Description *</label>
                  <textarea
                    id="description"
                    name="Issue Description"
                    required
                    rows="6"
                    placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce, and what you've already tried..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-submit"
                >
                  Submit Support Ticket
                </button>
              </form>
            </div>

            {/* Right: Support Info */}
            <div className="support-contact-info">
              <div className="info-card">
                <h3>Technical Support</h3>
                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Info.pk@timelinetelematics.com">Info.pk@timelinetelematics.com</a>
                  </div>
                </div>

                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <div>
                    <strong>Phone</strong>
                    <span>+92 3111122883</span>
                  </div>
                </div>

                <div className="info-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <div>
                    <strong>Support Hours</strong>
                    <span>Mon-Fri: 9:00 AM - 6:00 PM PKT</span>
                  </div>
                </div>
              </div>

              <div className="info-card highlight">
                <h4>Response Time</h4>
                <p>• <strong>Critical issues:</strong> Within 4-6 hours</p>
                <p>• <strong>High priority:</strong> Within 12-24 hours</p>
                <p>• <strong>Normal issues:</strong> Within 24-48 hours</p>
              </div>

              <div className="info-card">
                <h4>Before You Submit</h4>
                <ul className="checklist">
                  <li>Check if device is properly powered</li>
                  <li>Verify SIM card is active</li>
                  <li>Ensure GPS antenna is connected</li>
                  <li>Review product manual</li>
                  <li>Note any error codes or messages</li>
                </ul>
              </div>

              <div className="info-card">
                <h4>Need Sales Info?</h4>
                <p>For product inquiries, pricing, or quotes, please visit our sales inquiry page.</p>
                <Link to="/product-inquiry" className="btn-link">
                  Product Inquiry →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnicalSupportPage;