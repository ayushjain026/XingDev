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
import ContactSection5 from "../components/ContactSection5";
import Footer5 from "../components/Footer5";

function LandingPageFive({locationPropsMap}) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const offers = ['Keratine / Botox', 'Nanoplastia', 'Hair Spa', '⁠Hair Highlights', 'Balyage', 'Global Hair Color']

  // Get query parameters from the URL
  const getLocation = useLocation();
  const queryParams = new URLSearchParams(getLocation.search);
  const location = queryParams.get("location") || "Priyadarshini Layout";

  // Define location-specific props

  // Get the props for the current location
  const dynamicProps = locationPropsMap[location];
  const locationname = locationPropsMap[location];

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
      <ReviewsSectionThree locationInfo={dynamicProps}/>
      <QnaSectionThree />
      
      {dynamicProps && <ContactSection5 locationInfo={dynamicProps} offers={offers} pageName="Elevate Your Look with Premium Shades" />}
      {dynamicProps && <Footer5 locationInfo={dynamicProps} />}

      {/* Popup form logic */}
      {isOpen && (
        <div className="popup-container">
          <ContactForm offers={offers} title={dynamicProps?.title} />
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

export default LandingPageFive;
