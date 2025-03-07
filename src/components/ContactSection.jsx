import ContactForm from "./ContactForm";

function ContactSection({locationInfo, offers, pageName=""}) {
  return (
    <section id="contact section" className="contact section">
      <div className="contact-map">
        <div className="contact-location">
          <div className="location-icon" style={{ fontSize: "30px" }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p className="contact-location-address" dangerouslySetInnerHTML={{ __html: locationInfo?.location }}>
            
          </p>
        </div>
        <div className="contact-location">
          <div
            className="phone-icon"
            style={{ fontSize: "30px", paddingTop: "10px" }}
          >
            <i className="fas fa-phone-alt"></i> {/* Phone number icon */}
          </div>

          <p className="contact-location-address">+91 {locationInfo?.phoneNumber}</p>
        </div>
        <div className="contact-location-map">
          <iframe
            src={locationInfo?.mapLocation}
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <ContactForm offers={offers} pageName={pageName}/>
    </section>
  );
}

export default ContactSection;
