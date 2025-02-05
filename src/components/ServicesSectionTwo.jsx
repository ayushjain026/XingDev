import PropTypes from "prop-types";
import discountTag from "../assets/discount-tag.svg";
import NanoPlastia from "../assets/NanoPlastiaService.jpeg";
import HairKeratin from "../assets/HairKeratin.jpeg";

const carddata = [
  {
    heading: "Keratin Hair Treatment",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "Get <b>Upto 50% Off</b>: Keratin Treatment <b>@3999/-</b> 10000.",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
  {
    heading: "Keratin Hair Treatment",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "Get <b>Upto 50% Off</b>: Keratin Treatment <b>@3999/-</b> 10000.",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
  {
    heading: "Keratin Hair Treatment",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "Get <b>Upto 50% Off</b>: Keratin Treatment <b>@3999/-</b> 10000.",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
  {
    heading: "Keratin Hair Treatment",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "Get <b>Upto 50% Off</b>: Keratin Treatment <b>@3999/-</b> 10000.",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
];

function ServicesSectionTwo({ setIsOpen }) {
  const isMobile = window.innerWidth <= 768;

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "20px 0",
  };

  const textStyle = {
    fontSize: isMobile ? "16px" : "18px",
    color: "gray",
    textAlign: "center",
    lineHeight: "1.2",
    margin: "5px 0",
  };

  return (
    <section id="services-section" className="services section">
      <h2 className="services-heading">
        <span className="pri-text">Glam Up you Hair !! 
        </span>
        <br />
        <div style={containerStyle}>
          <h1 style={textStyle}>Non Damaging hair colors for outstanding transformations that will make you look great.</h1>
          {/* <p style={textStyle}>Healthier hair with our hair treatments.</p> */}
        </div>
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
            setIsOpen={setIsOpen}
          />
        ))}
      </div>
    </section>
  );
}

ServicesSectionTwo.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default ServicesSectionTwo;

// ServiceCard Component
function ServiceCard({
  heading,
  question,
  desc,
  cutoutPrice,
  actualPrice,
  setIsOpen,
}) {
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
          src={heading === "Nanoplastia" ? NanoPlastia : HairKeratin}
          alt="Service"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div className="services-cards-card-content">
        <h3 className="services-cards-card-content-heading">{heading}</h3>
        <p
          className="services-cards-card-des"
          style={{ fontSize: "18px", lineHeight: "1.5" }}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <p
          className="services-cards-card-content-des"
          dangerouslySetInnerHTML={{ __html: desc }}
        />
        <p className="services-cards-card-content-cutoutprice">
          {cutoutPrice}
        </p>
        <p className="services-cards-card-content-currentprice">
          {actualPrice}
        </p>
        <a className="hero-cta" onClick={() => setIsOpen(true)}>
          Avail this Offer Now
        </a>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  heading: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  cutoutPrice: PropTypes.string.isRequired,
  actualPrice: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
