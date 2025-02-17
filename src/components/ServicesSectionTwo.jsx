import PropTypes from "prop-types";
import discountTag from "../assets/discount-tag.svg";
import one from "../assets/serviceImages/11.jpeg";
import two from "../assets/serviceImages/22.jpeg";
import three from "../assets/serviceImages/33.jpeg";
import four from "../assets/serviceImages/44.jpeg";

const images = [one, two, three, four];

const cardData = [
  {
    heading: "",
    question:
      'Get <b style="font-size: 20px; color: #F63194; padding: 5px;">Upto 50% Off</b>: <b>HAIR HIGHLIGHTS</b>',
    description: "",
    cutoutPrice: "₹ 9999",
    currentPrice: "₹ 4499",
  },
  {
    heading: "",
    question:
      'Get <b style="font-size: 20px; color: #F63194; padding: 5px;">Upto 50% Off</b>: <b>GLOBAL HAIR COLOR</b>',
    description: "",
    cutoutPrice: "₹ 7999",
    currentPrice: "₹ 2999",
  },
  {
    heading: "",
    question:
      'Get <b style="font-size: 20px; color: #F63194; padding: 5px;">Upto 50% Off</b>: <b>CRAZY HAIR COLOR</b>',
    description: "",
    cutoutPrice: "₹ 9999",
    currentPrice: "₹ 4599",
  },
  {
    heading: "",
    question:
      'Get <b style="font-size: 20px; color: #F63194; padding: 5px;">Upto 50% Off</b>: <b>HAIR COLOR</b>',
    description: "",
    cutoutPrice: "₹ 9999",
    currentPrice: "₹ 4999",
  },
];

function ServicesSectionTwo({ setIsOpen }) {
  return (
    <section id="services-section" className="services section">
      <h2 className="services-heading">
        <span className="pri-text">Glam Up Your Hair!!</span>
        <br />
        <div className="services-intro">
          <h1 className="services-description">
            Non-damaging hair colors for outstanding transformations that will
            make you look great.
          </h1>
        </div>
      </h2>
      <div className="services-cards">
        {cardData.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
            question={service.question}
            desc={service.description}
            cutoutPrice={service.cutoutPrice}
            actualPrice={service.currentPrice}
            imgUrl={images[index % images.length]} // Cycle through images
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
  imgUrl,
  setIsOpen,
}) {
  return (
    <div className="services-cards-card">
      <div
        className="services-cards-card-img"
        style={{
          width: "100%",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          backgroundColor: "#fff", // Optional: Helps with image clarity
        }}
      >
        <img
          src={imgUrl}
          alt="Service"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the full image is visible
          }}
        />
      </div>

      <div className="services-cards-card-content">
        {/* <h3 className="services-cards-card-content-heading">{heading}</h3> */}
        <p
          className="services-cards-card-des"
          style={{ fontSize: "18px" }}
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <p
          className="services-cards-card-content-cutoutprice"
          style={{ marginBottom: "5px", padding: "0" }}
        >
          {cutoutPrice}
        </p>
        <p
          className="services-cards-card-content-currentprice"
          style={{ marginBottom: "10px", padding: "0" }}
        >
          {actualPrice}
        </p>

        <button className="hero-cta" onClick={() => setIsOpen(true)}>
          Avail this Offer Now
        </button>
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
  imgUrl: PropTypes.string.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
