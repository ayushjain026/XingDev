import Carousel from './Carousel';
import checkIcon from '../assets/hero-check.svg';

function HeroSection() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Carousel></Carousel>
      <div className="hero-content-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Sarjhapura's Best Hair Keratin Destination
          </h1>
          <div className="hero-ctas">
            <a href="#" className="hero-cta" onClick={() => scrollToSection('personalized-treatment')}>
              Get Free Consultation
            </a>
            <a href="#" className="hero-cta-sec">
              Explore Services
            </a>
          </div>
          <div className="hero-checks">
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text">Choose Your Price</p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text">Choose Your Product</p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text">
                Premium Service starting from 
                <span className="pri-text"> Rs. 2999</span>
              </p>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <p className="hero-stats-num">10000+</p>
              <p className="hero-stats-des">Haircare Delivered</p>
            </div>
            <div>
              <p className="hero-stats-num">98.9%</p>
              <p className="hero-stats-des">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
