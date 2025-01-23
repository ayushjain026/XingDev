import discountTag from "../assets/discount-tag.svg";
import NanoPlastia from "../assets/NanoPlastiaService.jpeg";
import HairKeratin from "../assets/HairKeratin.jpeg";

const carddata = [
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
];

function ServicesSection({ setIsOpen }) {
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px
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
        <span className="pri-text">Get Shine on Your Hair</span>
        <br />
        <div style={containerStyle}>
          <h1 style={textStyle}>Smoother, Stronger, Shiny, Frizz-Free</h1>
          <p style={textStyle}>Healthier hair with our hair treatments.</p>
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

export default ServicesSection;

// ServiceCard Component
function ServiceCard({
  heading,
  question,
  desc,
  cutoutPrice,
  actualPrice,
  setIsOpen,
}) {
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
          src={heading == "Nanoplastia" ? NanoPlastia : HairKeratin}
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
          dangerouslySetInnerHTML={{ __html: question }}
        >
        </p>

        <p className="services-cards-card-content-des" dangerouslySetInnerHTML={{ __html: desc }}></p>
        <p className="services-cards-card-content-cutoutprice">{cutoutPrice}</p>
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
