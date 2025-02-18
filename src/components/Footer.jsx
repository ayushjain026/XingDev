import logo from '../assets/logo.png';

function Footer({ locationInfo }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="footer">
        <div>
          <img src={logo} alt="" className="footer-logo" />
          <p className="footer-address" dangerouslySetInnerHTML={{ __html: locationInfo?.location }}>
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Quick Links</h2>
            <a onClick={() => scrollToSection("services-section")} className="footer-links-group-link">Services</a>
            <a onClick={() => scrollToSection("review-section")} className="footer-links-group-link">Reviews</a>
            <a onClick={() => scrollToSection("contact-section")} className="footer-links-group-link">Contact</a>
            <a onClick={() => scrollToSection("contact-section")} className="footer-links-group-link">Location</a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Socials</h2>
            <a href="https://www.instagram.com/xingpremiumsalons" className="footer-links-group-link">Instagram</a>
            <a href="https://www.facebook.com/people/XING-Salon-Nails-and-Tattoo/100089547421311/" className="footer-links-group-link">Facebook</a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917996666012&text=I+want+to+avail+hair+offer" className="footer-links-group-link">WhatsApp</a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Contact</h2>
            <a href={`mailto:${locationInfo.email}`} className="footer-links-group-link">{locationInfo.email}</a>
            <a href={`tel:+91${locationInfo?.phoneNumber}`} className="footer-links-group-link">+91 {locationInfo?.phoneNumber}</a>
          </div>
        </div>
      </section>
      <p className="copyright">© 2024 XING Salons. All rights reserved.</p>

      <style>{`
        .footer-links {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 20px;
          text-align: center;
        }

        .footer-links-group {
          flex: 1;
          min-width: 150px;
        }

        @media (max-width: 600px) {
          .footer-links {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-links-group {
            flex: 1;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Footer;
