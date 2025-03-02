import Navbar from "../components/Navbar";
import ReviewsSectionThree from "../components/ReviewsSectionThree";
import QnaSectionThree from "../components/QnaSectionThree";
import Footer from "../components/Footer";
import { useState } from "react";
import PopupFormModal from "../components/PopupFormModule";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";
import CarouselSection3 from "../components/CarouselSection3";
import HeroSectionThree from "../components/HeroSectionThree";
import ServicesSectionThree from "../components/ServicesSectionThree";

function LandingPageThree() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const offers = ['Tattoos']

  const locationPropsMap = {
    "aecs-layout": {
      title: "Whitefiled's",
      email: "Xing.Aecs@gmail.com",
      location: "1st floor, Number 267, SV Plaza, <br />60 Feet Rd, AECS Layout - A Block, <br />AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.621675304381!2d77.70912729999999!3d12.963452499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1309406c2c01%3A0x2eb6dc1b4d71e4b3!2sXing%20Premium%20Salon!5e1!3m2!1sen!2sin!4v1737650418906!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=7996666012&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    }
  };

  // Get query parameters from the URL
  const getLocation = useLocation();
  const queryParams = new URLSearchParams(getLocation.search);
  const location = queryParams.get("location");

  // Get the props for the current location
  const dynamicProps = locationPropsMap[location] || locationPropsMap["aecs-layout"];

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
      <HeroSectionThree locationInfo={dynamicProps} />
      <ServicesSectionThree setIsOpen={setIsOpen} />
      <CarouselSection3 />
      <ReviewsSectionThree />
      <QnaSectionThree />
      
      {dynamicProps && <ContactSection locationInfo={dynamicProps} offers={offers} />}
      {dynamicProps && <Footer locationInfo={dynamicProps} />}

      {/* Popup form logic */}
      {isOpen && (
        <div className="popup-container">
          <ContactForm offers={offers} />
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

export default LandingPageThree;
