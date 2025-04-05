import PropTypes from "prop-types";
import discountTag from "../assets/discount-tag.svg";
import NanoPlastia from "../assets/NanoPlastiaService.jpeg";
import HairKeratin from "../assets/HairKeratin.jpeg";
import one from "../assets/serviceImages/11.jpeg";
import two from "../assets/serviceImages/22.jpeg";
import three from "../assets/serviceImages/33.jpeg";
import four from "../assets/serviceImages/44.jpeg";

const images = [NanoPlastia, HairKeratin, one, two, three, four];

const cardData = [
  {
    heading: "Keratin Hair Treatment",
    question: "Weak, Damaged, Unmanaged Hair ?",
    description:
      "We got you covered ! Choose our Keratin Treatment at <b>50% OFF</b> which infuse Keratin in your hair for the natural shine and outstanding glow. ",
    cutoutPrice: "Rs. 9999",
    currentPrice: "Rs. 4999",
    imgUrl: "",
  },
  {
    heading: "Nanoplastia",
    question: "Frizzy, Dull Hair, Tangled Hair <br />We got you covered !",
    description:
      "Nanplastia is one of the most advanced Hair treatment, which regular straightening manages your hair, Nanoplastia infuses protine and brings nearly 80% of the straightening effect. <br />Choose our Nanoplastia Treatment at <b>50% OFF</b> for straightening, shiny, Gorgeous hair.",
    cutoutPrice: "Rs. 13999",
    currentPrice: "Rs. 6999",
  },
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
          height: "480px", // Slightly increased height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          margin: "0", // Ensure no extra padding or margin
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
            objectFit: "cover", // Prevent cropping and fill the container
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
