import { useState } from "react";
import map from "../assets/map.png";
import ContactForm from "./ContactForm";

function ContactSection() {

  return (
    <section className="contact section">
      <div className="contact-map">
        <div className="contact-location">
          <div className="location-icon" style={{ fontSize: "30px" }}>
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <p className="contact-location-address">
            1st floor, Number 267, SV Plaza, 60 Feet Rd, AECS Layout - A Block,
            AECS Layout, Marathahalli, Bengaluru, Karnataka 560037
          </p>
        </div>
        <div className="contact-location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5356.305804033756!2d77.70912729999999!3d12.963452499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1309406c2c01%3A0x2eb6dc1b4d71e4b3!2sXing%20Premium%20Salon%20-%20AECS%20Layout%2C%20Brookfield!5e1!3m2!1sen!2sin!4v1736790467847!5m2!1sen!2sin"
            width="100%" // Set the width to 100% for responsiveness
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="contact-location">
          <div
            className="phone-icon"
            style={{ fontSize: "30px", paddingTop: "10px" }}
          >
            <i className="fas fa-phone-alt"></i> {/* Phone number icon */}
          </div>

          <p className="contact-location-address">+91 079966 66012</p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

export default ContactSection;
