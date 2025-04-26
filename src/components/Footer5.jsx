import logo from '../assets/nlogo.png';

function Footer5({ locationInfo }) {
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
          <img src={logo} alt="XING Logo" className="footer-logo" />
          <p className="footer-address">
            25/2, Ayyappa Nagar Main Rd,<br />
            Priyadarshini Layout,<br />
            Krishnarajapuram,<br />
            Bengaluru,<br />
            Karnataka 560037
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Quick Links</h2>
            <a onClick={() => scrollToSection("services-section")} className="footer-links-group-link">Services</a>
            <a onClick={() => scrollToSection("review-section")} className="footer-links-group-link">Reviews</a>
            <a onClick={() => scrollToSection("personalized-treatment")} className="footer-links-group-link">Contact</a>
            <a onClick={() => scrollToSection("contact-section")} className="footer-links-group-link">Location</a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Socials</h2>
            <a href="https://www.instagram.com/expresscuts.salons/" target="_blank" rel="noopener noreferrer" className="footer-links-group-link">Instagram</a>
            <a href="https://www.facebook.com/p/Express-Cuts-61556432902330/" target="_blank" rel="noopener noreferrer" className="footer-links-group-link">Facebook</a>
            <a href="https://api.whatsapp.com/send/?phone=%2B918970000135&text=I+want+to+avail+hair+offer" target="_blank" rel="noopener noreferrer" className="footer-links-group-link">WhatsApp</a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Contact</h2>
            <a href={`mailto:salon.expresscuts@gmail.com`} className="footer-links-group-link">salon.expresscuts@gmail.com</a>
            <a href={`tel:+9189700 00135`} className="footer-links-group-link">+91 89700 00135</a>
          </div>
        </div>
      </section>
      <p className="copyright">© 2025 Express Cuts Unisex Salon. All rights reserved.</p>

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
            flex-direction: column;
            align-items: center;
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

export default Footer5;
