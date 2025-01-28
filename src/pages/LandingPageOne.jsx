import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import ReviewsSection from "../components/ReviewsSection";
import QnaSection from "../components/QnaSection";
import Footer from "../components/Footer";
import { useState } from "react";
import PopupFormModal from "../components/PopupFormModule";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";

function LandingPageOne() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Get query parameters from the URL
  const getLocation = useLocation();
  const queryParams = new URLSearchParams(getLocation.search);
  const location = queryParams.get("location");

  // Define location-specific props
  const locationPropsMap = {
    "sarjapura": {
      title: "Sarjapura’s",
      email: "xing.sarjapura@gmail.com",
      location: "Xing Premium Unisex Salon, <br />Opposite Clult PlayOn Fitness, <br /> 71/1A, Samvit Greens, <br /> Sarjapur - Marathahalli Rd, <br /> opposite St. Peter's School, Kaikondrahalli, Bengaluru, Karnataka 560035",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=8970007440&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
    "aecs-layout": {
      title: "Whitefiled’s",
      email: "Xing.Aecs@gmail.com",
      location: "1st floor, Number 267, SV Plaza, <br />60 Feet Rd, AECS Layout - A Block, <br />AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.621675304381!2d77.70912729999999!3d12.963452499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1309406c2c01%3A0x2eb6dc1b4d71e4b3!2sXing%20Premium%20Salon!5e1!3m2!1sen!2sin!4v1737650418906!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=7996666012&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
    "hrs-layout": {
      title: "HSR Layout’s",
      email: "HSRXing@gmail.com",
      location: "Xing Premium Unisex Salon, <br /> 150/3, GSR Arcade, 9th Cross,<br /> 24th Main Rd,<br /> Bengaluru, Karnataka 560102",
      phoneNumber: "93808-12348",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=9380812348&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
  };

  // Get the props for the current location
  const dynamicProps = locationPropsMap[location];

  // Function to open modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <HeroSection locationInfo={dynamicProps} />
      <ServicesSection setIsOpen={setIsOpen} />
      <ReviewsSection />
      <QnaSection />
      
      {dynamicProps && <ContactSection locationInfo={dynamicProps} />}
      {dynamicProps && <Footer locationInfo={dynamicProps} />}

      {/* Popup form logic */}
      {isOpen && (
        <div className="popup-container">
          <ContactForm />
          <p
            className="popup-close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </p>
          <img src={logo} alt="logo" className="popup-logo" />
        </div>
      )}
      {showModal && <PopupFormModal closeModal={closeModal} />}
    </>
  );
}

export default LandingPageOne;
