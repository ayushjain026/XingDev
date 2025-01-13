import Navbar from './Navbar';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Carousel from './Carousel';
import ReviewsSection from './ReviewsSection';
import QnaSection from './QnaSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { useState } from 'react';
import PopupFormModal from './PopupFormModule';

function LandingPage() {
  const [showModal, setShowModal] = useState(false); 

  const openModal = () => {
    setShowModal(true);
  };

  // Function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar openModal={openModal}></Navbar>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <Carousel></Carousel>
      <ReviewsSection></ReviewsSection>
      <QnaSection></QnaSection>
      <ContactSection></ContactSection>
      <Footer></Footer>

      {showModal && (
        <PopupFormModal closeModal={closeModal} />
      )}
    </>
  );
}

export default LandingPage;
