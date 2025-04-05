import Navbar from "../components/Navbar";
import HeroSectionTwo from "../components/HeroSectionTwo";
import ServicesSectionTwo from "../components/ServicesSectionTwo";
import ReviewsSectionTwo from "../components/ReviewsSectionTwo";
import QnaSectionTwo from "../components/QnaSectionTwo";
import Footer from "../components/Footer";
import { useState } from "react";
import PopupFormModal from "../components/PopupFormModule";
import ContactForm from "../components/ContactForm";
import logo from "../assets/logo.png";
import ContactSection from "../components/ContactSection";
import { useLocation } from "react-router-dom";
import CarouselSection2 from "../components/CarouselSection2";
import ServicesSectionThree from "../components/ServicesSectionThree";
import HeroSectionThree from "../components/HeroSectionThree";
import CarouselSection3 from "../components/CarouselSection3";
import ReviewsSectionThree from "../components/ReviewsSectionThree";
import QnaSectionThree from "../components/QnaSectionThree";
import Navbar5 from "../components/Navbar5";

function LandingPageThree({locationPropsMap}) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const offers = ['Keratine / Botox', 'Nanoplastia', 'Hair Spa', '⁠Hair Highlights', 'Balyage', 'Global Hair Color']

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
      <Navbar5 openModal={openModal} />
      <HeroSectionThree locationInfo={dynamicProps} />
      <ServicesSectionThree setIsOpen={setIsOpen} />
      <CarouselSection3 />
      <ReviewsSectionThree />
      <QnaSectionThree />
      
      {dynamicProps && <ContactSection locationInfo={dynamicProps} offers={offers} pageName="Elevate Your Look with Premium Shades" />}
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
