import Navbar from "../components/Navbar";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ServicesSectionTwo from "../components/ServicesSectionTwo";
import ReviewsSectionTwo from "../components/ReviewsSectionTwo";
import QnaSection from "../components/QnaSection";
import Footer from "../components/Footer";
import { useState } from "react";
import PopupFormModal from "../components/PopupFormModule";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";

function LandingPageOne({locationPropsMap}) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const offers = ['Highlights', 'Balayage', 'Global', 'Crazy Color']

  // Get query parameters from the URL
  const getLocation = useLocation();
  const queryParams = new URLSearchParams(getLocation.search);
  const location = queryParams.get("location");

  // Define location-specific props

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
      <HeroSectionTwo locationInfo={dynamicProps} />
      <ServicesSectionTwo setIsOpen={setIsOpen} />
      <ReviewsSectionTwo />
      <QnaSection />
      
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

export default LandingPageOne;
