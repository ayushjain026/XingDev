import discountTag from '../assets/discount-tag.svg';

const carddata = [
  {
    heading: 'Hair Keratin',
    description:
      'Hair keratin is a treatment that involves applying keratin protein to your hair, resulting in healthier, frizz-free, and shiny locks. The procedure takes approximately 3 hours. Choose from 5 different products.',
    cutoutPrice: 'Rs. 9999',
    currentPrice: 'Rs. 4999',
    imgUrl: ''
  },
  {
    heading: 'Nanoplastia',
    description:
      'Nanoplastia is a treatment that involves applying nanoplastia protein to your hair, resulting in healthier, frizz-free, and shiny locks. The procedure takes approximately 3 hours. Choose from 5 different products.',
    cutoutPrice: 'Rs. 13999',
    currentPrice: 'Rs. 6999',
  },
];

function ServicesSection() {
  return (
    <section className="services section">
      <h2 className="services-heading">
        Make your <span className="pri-text">dream hair</span> come true
      </h2>
      <div className="services-cards">
        {carddata.map((service, index) => (
          <ServiceCard
            key={index}
            heading={service.heading}
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
function ServiceCard({ heading, desc, cutoutPrice, actualPrice }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="services-cards-card">
      <img src={discountTag} alt="" className="services-cards-card-tag" />
      <div className="services-cards-card-img"></div>
      <div className="services-cards-card-content">
        <h3 className="services-cards-card-content-heading">{heading}</h3>
        <p className="services-cards-card-content-des">{desc}</p>
        <p className="services-cards-card-content-cutoutprice">{cutoutPrice}</p>
        <p className="services-cards-card-content-currentprice">
          {actualPrice}
        </p>
        <a className="hero-cta" onClick={() => scrollToSection('personalized-treatment')}>
          Book Your Appointment
        </a>
      </div>
    </div>
  );
}
