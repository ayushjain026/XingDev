import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Carousel from "./Carousel";
import ReviewsSection from "./ReviewsSection";
import QnaSection from "./QnaSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { useState } from "react";
import PopupFormModal from "./PopupFormModule";
import ContactForm from "./ContactForm";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar openModal={openModal}></Navbar>
      <HeroSection></HeroSection>
      <ServicesSection setIsOpen={setIsOpen}></ServicesSection>
      <Carousel></Carousel>
      <ReviewsSection></ReviewsSection>
      <QnaSection></QnaSection>
      <ContactSection></ContactSection>
      <Footer></Footer>
      {isOpen && (
        <div className="popup-container">
          <ContactForm></ContactForm>
          <p
            className="popup-close"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            X
          </p>
        </div>
      )}
      {showModal && <PopupFormModal closeModal={closeModal} />}
    </>
  );
}

export default LandingPage;
