import Carousel from "./Carousel";
import checkIcon from "../assets/hero-check3.svg";

function HeroSectionThree({ locationInfo }) {
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
      <div className="hero-content-container override">
        <div className="hero-content">
          <h1 className="hero-heading">
            {locationInfo?.title} Best Tattoo Destination
          </h1>
          <div className="hero-ctas">
            <a
              href="#"
              className="hero-cta"
              onClick={() => scrollToSection("personalized-treatment")}
              style={{backgroundColor: "#f3f3f7", color: "#08080c"}}
            >
              Avail this Offer Now
            </a>
            <a
              className="hero-cta-sec"
              onClick={() => scrollToServiceSection("services-section")}
              style={{color: "#f3f3f7", border: "none"}}
            >
              Explore Services
            </a>
          </div>
          <div className="hero-checks">
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon override-icon"/>
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Choose Your Price
              </p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon override-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Choose Your Product
              </p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon override-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Expert Tattoo artist with 12+ years of experience.
              </p>
            </div>
            <div className="hero-checks-check">
              <img src={checkIcon} alt="" className="hero-checks-check-icon override-icon" />
              <p className="hero-checks-check-text" style={{ color: "white" }}>
                Premium Service starting from
                <span className="pri-text" style={{color: "white"}}> Rs. 299 Only</span>
              </p>
            </div>
          </div>
          <div className="hero-stats">
            <div>
              <p className="hero-stats-num" style={{ color: "white" }}>
                1000+ 
              </p>
              <p className="hero-stats-des" style={{ color: "white" }}>
                Tattoos Delivered 
              </p>
            </div>
            <div>
              <p className="hero-stats-num" style={{ color: "white" }}>
                97.2% 
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

export default HeroSectionThree;
