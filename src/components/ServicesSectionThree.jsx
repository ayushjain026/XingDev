import PropTypes from "prop-types";
import discountTag from "../assets/discount-tag.svg";
import one from "../assets/serviceImages/Offer3/1.jpeg";
import two from "../assets/serviceImages/Offer3/2.jpeg";
import three from "../assets/serviceImages/Offer3/3.jpeg";
import four from "../assets/serviceImages/Offer3/4.jpeg";
import five from "../assets/serviceImages/Offer3/5.jpeg";

const images = [two, one, four];

const cardData = [
  {
    heading: "",
    question:
      'The bigger the tattoo, the bigger the discount – ink more, save more!',
    description: "",
    cutoutPrice: "₹ 599",
    currentPrice: "₹ 299",
  },
  {
    heading: "",
    question:
      'Vibrant color tattoos at ₹399 per inch – let your ink shine!',
    description: "",
    cutoutPrice: "₹ 500",
    currentPrice: "₹ 399",
  },
  {
    heading: "",
    question:
      'Express yourself with any tattoo up to 10 inches for just ₹2500!',
    description: "",
    cutoutPrice: "₹ 3000",
    currentPrice: "₹ 2500",
  },
  // {
  //   heading: "",
  //   question:
  //     'Bold, intricate, and timeless – get the perfect tattoo for you!',
  //   description: "",
  //   cutoutPrice: "₹ 3000",
  //   currentPrice: "₹ 2599",
  // },
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
    color: "#2F2F3C",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: "1.2",
    letterSpacing: "1.2px",
    margin: "5px 0",
  };

  return (
    <section id="services-section" className="services section">
      <h2 className="services-heading">
        <span className="gradient-heading" style={{color: "#08080c", fontWeight: "900", letterSpacing: "-1px",}}> From Vision to Reality - Tattoos Crafted with Passion </span>
        <br />
        <div style={containerStyle}>
          <h1 style={textStyle}>
            We turn your ideas into stunning works of body art. Let us create a tattoo that reflects your personality and passion.
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
    <div className="services-cards-card" style={{backgroundColor: "#f0f0f0", borderRadius: "0"}}>
      <div
        className="services-cards-card-img"
        
      >
        <img
          src={imgUrl}
          alt="Service"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            aspectRatio: "1/1" // Ensures the full image is visible
          }}
        />
      </div>

      <div className="services-cards-card-content" style={{padding: "1rem 2.4rem"}}>
        {/* <h3 className="services-cards-card-content-heading">{heading}</h3> */}
        <p
          className="services-cards-card-content-des"
          dangerouslySetInnerHTML={{ __html: question }}
         
        />
        <p
          className="services-cards-card-content-cutoutprice"
        >
          {cutoutPrice}
        </p>
        <p
          className="services-cards-card-content-currentprice"
        style={{color: "#08080c"}}>
          {actualPrice}
        </p>

        <button className="hero-cta" onClick={() => setIsOpen(true)} style={{marginBottom: "1rem", color: "#f3f3f7", backgroundColor: "#08080c", borderRadius: "0"}}>
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
