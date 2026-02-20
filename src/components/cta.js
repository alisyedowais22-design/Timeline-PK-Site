export default function CTA() {
  return (
    <section id="contact" className="py-20 cta-bg">
      <div className="container">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="cta-badge">🚀 IOT SUMMIT 2025</div>
          <h2 className="text-3xl font-bold mb-6" style={{ marginTop: "16px" }}>
            Ready to Upgrade Your Fleet with
            <br />Advanced IoT Solutions?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Timeline Telematics — Official Partner of JimiIoT &amp; Qoho Vision in Pakistan.
            <br />Get a custom demo tailored to your fleet size and industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@teletix.me"
              className="cta-btn-primary"
            >
              📧 Email Us →
            </a>
            <a
              href="tel:+923111122883"
              className="cta-btn-secondary"
            >
              📞 +92 311 1122 883
            </a>
          </div>

          <div className="cta-trust">
            <span>✓ Free Demo</span>
            <span>✓ Pakistan-wide Support</span>
            <span>✓ JimiIoT Certified</span>
            <span>✓ Qoho Vision Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}