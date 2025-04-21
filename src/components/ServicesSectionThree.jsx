import PropTypes from "prop-types";
import NanoPlastia from "../assets/NanoPlastia_5.jpeg";
import HairKeratin from "../assets/HairKeratin_5.jpeg";
import globalHairColour from "../assets/globalHairColour_5.jpeg";
import hairHighlight_5 from "../assets/hairHighlight_5.jpeg";
import hydraFacial_5 from "../assets/hydraFacial_5.jpeg";
import haircut_5 from "../assets/haircut_5.jpeg";

const images = [HairKeratin, NanoPlastia, hairHighlight_5, globalHairColour, hydraFacial_5, haircut_5];

const cardData = [
  {
    heading: "Keratin Hair Treatment",
    question:
      "Weak, damaged hair? Try our Keratin Treatment at <b>50% OFF</b> for natural shine and glow. <b>Limited Time Offer!</b>",
    cutoutPrice: "Rs. 3999",
    currentPrice: "Rs. 2999",
    imgUrl: "",
  },
  {
    heading: "Nanoplastia",
    question:
      "Frizzy, dull hair? Nanoplastia offers advanced hair treatment with 80% straightening effect. <b>50% OFF</b>. <b>Book Now!</b>",
    cutoutPrice: "Rs. 5999",
    currentPrice: "Rs. 3999",
  },
  {
    heading: "",
    question:
      '<b>Upto 50% Off</b>: <b>HAIR HIGHLIGHTS</b><br />Add depth and vibrance to your hair. <b>Don’t Miss Out!</b>',
    cutoutPrice: "₹ 3999",
    currentPrice: "₹ 2899",
  },
  {
    heading: "",
    question:
      '<b>Upto 50% Off</b>: <b>GLOBAL HAIR COLOR</b><br />Get a stunning, uniform hair color. <b>Hurry, Offer Ends Soon!</b>',
    cutoutPrice: "₹ 3999",
    currentPrice: "₹ 2499",
  },
  {
    heading: "",
    question:
      '<b>Upto 50% Off</b>: <b>HYDRA FACIAL</b><br />Deeply cleanse and hydrate your skin for a radiant glow. <b>Glow Like Never Before!</b>',
    cutoutPrice: "₹ 3999",
    currentPrice: "₹ 2899",
  },
  {
    heading: "",
    question:
      '<b>Upto 50% Off</b>: <b>HAIR CUT</b><br />Refresh your style with a professional haircut. <b>Style Redefined!</b>',
    cutoutPrice: "₹ 999",
    currentPrice: "₹ 599",
  },
];

function ServicesSectionThree({ setIsOpen }) {
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
        <span className="pri-text">✨ Smoother. Stronger. Shinier. Frizz-Free. ✨</span>
        <br />
        <div style={containerStyle}>
          <h1 style={textStyle}>
          Say hello to healthier, head-turning hair – because you deserve to shine every day!
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

ServicesSectionThree.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default ServicesSectionThree;

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
          width: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            margin: "0", // Ensure no extra padding or margin
            width: "100%", // Make the container responsive
            height: "auto", // Allow height to adjust automatically
          padding: "0", // Ensure no extra padding
          backgroundColor: "#fff", // Optional: Helps with image clarity
        }}
      >
        <img
          src={imgUrl}
          alt="Service"
          style={{
            width: "100%", // Ensure full width
            height: "100%", // Ensure full height
            objectFit: "contain", // Ensure the image fits exactly within the container
          }}
        />
      </div>

      <div className="services-cards-card-content">
        <h3
          className="services-cards-card-content-heading"
          style={{ fontSize: "20px", marginBottom: "10px" }} // Increased header size
        >
          {heading}
        </h3>
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
