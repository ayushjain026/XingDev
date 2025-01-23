import Carousel from "./Carousel";
import checkIcon from "../assets/hero-check.svg";

function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServiceSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  return (
    <>
      <Carousel></Carousel>
      <div className="hero-content-container">
        <div className="hero-content">
          <h1 className="hero-heading">
            Sarjapura's Best Hair Keratin Destination
          </h1>
          <div className="hero-ctas">
            <a
              href="#"
              className="hero-cta"
              onClick={() => scrollToSection("personalized-treatment")}
            >
              Avail this Offer Now
            </a>
            <a
              className="hero-cta-sec"
              onClick={() => scrollToServiceSection("services-section")}
            >
              Explore Services
            </a>
          </div>
          <div className="hero-checks">
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Choose Your Price
              </p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Choose Your Product
              </p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Premium Service starting from
                <span className="pri-text"> Rs. 2999</span>
              </p>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <p className="hero-stats-num" style={{ color: "white" }}>
                10000+
              </p>
              <p className="hero-stats-des" style={{ color: "white" }}>
                Haircare Delivered
              </p>
            </div>
            <div>
              <p className="hero-stats-num" style={{ color: "white" }}>
                98.9%
              </p>
              <p className="hero-stats-des" style={{ color: "white" }}>
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
