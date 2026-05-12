import React, { useState } from 'react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Your WhatsApp Business Number (with country code, no + or spaces)
  const phoneNumber = '923111122883';
  
  // Predefined Questions (FAQ)
  const quickQuestions = [
    {
      id: 1,
      question: "What GPS trackers do you offer?",
      answer: "Hello! I'm interested in learning about your GPS tracking solutions for fleet management."
    },
    {
      id: 2,
      question: "How much does fleet management cost?",
      answer: "Hi! Can you please share pricing details for your fleet management services?"
    },
    {
      id: 3,
      question: "Do you offer installation services?",
      answer: "Hello! Do you provide installation services for GPS trackers in Karachi?"
    },
    {
      id: 4,
      question: "Request a product demo",
      answer: "Hi! I would like to schedule a product demonstration. Please contact me at your earliest convenience."
    },
    {
      id: 5,
      question: "Technical support needed",
      answer: "Hello! I need technical support with my GPS tracker. Please assist me as soon as possible."
    }
  ];

  const handleQuickQuestion = (answer) => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(answer)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false); // Close popup after clicking
  };

  const handleCustomMessage = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className={`whatsapp-widget ${isOpen ? 'widget-open' : ''}`}>
        
        {/* Chat Popup */}
        {isOpen && (
          <div className="whatsapp-popup">
            {/* Header */}
            <div className="whatsapp-header">
              <div className="header-content">
                <img src="/tplogo.png" alt="Timeline Telematics" className="header-logo" />
                <div className="header-text">
                  <h4>Timeline Telematics</h4>
                  <span className="online-status">
                    <span className="status-dot"></span>
                    Typically replies instantly
                  </span>
                </div>
              </div>
              <button 
                className="close-btn" 
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="whatsapp-body">
              <div className="welcome-message">
                <div className="message-bubble">
                  <p><strong>👋 Welcome to Timeline Telematics!</strong></p>
                  <p>How can we help you today?</p>
                </div>
              </div>

              {/* Quick Questions */}
              <div className="quick-questions">
                <p className="questions-title">Quick Questions:</p>
                {quickQuestions.map((item) => (
                  <button
                    key={item.id}
                    className="question-btn"
                    onClick={() => handleQuickQuestion(item.answer)}
                  >
                    {item.question}
                  </button>
                ))}
              </div>

              {/* Custom Message Button */}
              <button 
                className="custom-message-btn"
                onClick={handleCustomMessage}
              >
                💬 Send Custom Message
              </button>
            </div>

            {/* Footer */}
            <div className="whatsapp-footer">
              <p>Powered by WhatsApp Business</p>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button 
          className="whatsapp-float-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            // Close Icon (X)
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            // WhatsApp Icon
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>

        {/* Notification Badge (optional - shows when popup is closed) */}
        {!isOpen && (
          <div className="notification-badge">1</div>
        )}
      </div>
    </>
  );
};

export default WhatsAppWidget;