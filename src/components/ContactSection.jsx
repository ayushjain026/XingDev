import { useState } from "react";
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
            Xing Premium Unisex Salon, <br />
            Opposite Clult PlayOn Fitness, <br /> 71/1A, Samvit Greens, <br />
            Sarjapur - Marathahalli Rd, opposite St. Peter's School,
            Kaikondrahalli, Bengaluru, Karnataka 560035
          </p>
        </div>
        <div className="contact-location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin"
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
