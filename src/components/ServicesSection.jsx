import discountTag from "../assets/discount-tag.svg";
import NanoPlastia from "../assets/NanoPlastiaService.jpeg";
import HairKeratin from "../assets/HairKeratin.jpeg";

const carddata = [
  {
    heading: "Hair Keratin",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "We got you covered ! Choose our Keratin Treatment at 50% OFF which infuse Keratin in your hair for the natural shine and outstanding glow. ",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
  {
    heading: "Nanoplastia",
    description:
      "Nanoplastia is a treatment that involves applying nanoplastia protein to your hair, resulting in healthier, frizz-free, and shiny locks. The procedure takes approximately 3 hours. Choose from 5 different products.",
    cutoutPrice: "Rs. 13999",
    currentPrice: "Rs. 6999",
  },
];

function ServicesSection() {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px
  const textStyle = {
    fontSize: isMobile ? "16px" : "18px", // Slightly larger font size for mobile
    color: "gray",
    textAlign: "center", // Centered text for better mobile UX
    lineHeight: "1", // Removes space between lines
    margin: isMobile ? "10px" : "20px", // Adjust margins
  };

  return (
    <section id="services-section" className="services section">
      <h2 className="services-heading">
        <span className="pri-text">“Get Shine on Your Hair”</span>
        <br />
        <span style={textStyle}>
          Smoother, Stronger, Shiny, Frizz-Free Healthier hair with our hair
          treatments.
        </span>
      </h2>
      <div className="services-cards">
        {carddata.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            question={service.question}
            desc={service.description}
            cutoutPrice={service.cutoutPrice}
            actualPrice={service.currentPrice}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

// ServiceCard Component
function ServiceCard({ heading, question, desc, cutoutPrice, actualPrice }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="services-cards-card">
      <img src={discountTag} alt="" className="services-cards-card-tag" />
      <div
        className="services-cards-card-img"
        style={{
          width: "100%",
          height: "auto",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={heading=='Nanoplastia' ? NanoPlastia : HairKeratin}
          alt="Nano Plastia"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image covers the container while maintaining aspect ratio
          }}
        />
      </div>

      <div className="services-cards-card-content">
        <h3 className="services-cards-card-content-heading">{heading}</h3>
        <p
          className="services-cards-card-des"
          style={{ fontSize: "18px", lineHeight: "1.5" }}
        >
          {question}
        </p>

        <p className="services-cards-card-content-des">{desc}</p>
        <p className="services-cards-card-content-cutoutprice">{cutoutPrice}</p>
        <p className="services-cards-card-content-currentprice">
          {actualPrice}
        </p>
        <a
          className="hero-cta"
          onClick={() => scrollToSection("personalized-treatment")}
        >
          Book Your Appointment
        </a>
      </div>
    </div>
  );
}
