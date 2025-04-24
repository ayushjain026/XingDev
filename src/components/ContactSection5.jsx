import ContactForm from "./ContactForm";

function ContactSection5({locationInfo, offers, pageName=""}) {
  return (
    <section id="contact-section" className="contact section">
      <div className="contact-map">
        <div className="contact-location">
          <div className="location-icon" style={{ fontSize: "30px" }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p className="contact-location-address">
          25/2, Ayyappa Nagar Main Rd, <br />Priyadarshini Layout, <br />Krishnarajapuram, <br />Bengaluru, <br />Karnataka 560037
          </p>
        </div>
        <div className="contact-location">
          <div
            className="phone-icon"
            style={{ fontSize: "30px", paddingTop: "10px" }}
          >
            <i className="fas fa-phone-alt"></i> {/* Phone number icon */}
          </div>

          <p className="contact-location-address">+91 08970000135</p>
        </div>
        <div className="contact-location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.491350277281!2d77.7092607!3d13.0043521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11a98a8cd523%3A0x1086a50ccbea8223!2sExpress%20Cuts%20Unisex%20Salon%20-%20KR%20Puram!5e0!3m2!1sen!2sin!4v1743881637937!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <ContactForm offers={offers} pageName={pageName} title={locationInfo?.title} />
    </section>
  );
}

export default ContactSection5;
