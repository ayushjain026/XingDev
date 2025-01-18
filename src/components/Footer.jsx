import logo from '../assets/logo.png';
function Footer() {

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
          <p className="footer-address">
          Xing Premium Unisex Salon, <br />
          Opposite Clult PlayOn Fitness,<br />
          71/1A, Samvit Greens,<br />
          Sarjapur - Marathahalli Rd, opposite St. Peter's School, Kaikondrahalli, Bengaluru, Karnataka 560035
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Quick Links</h2>
            <a onClick={() => (scrollToSection("services-section"))} className="footer-links-group-link" style={{ cursor: 'pointer' }} >
              Services
            </a>
            <a onClick={() => {scrollToSection("review-section")}} className="footer-links-group-link">
              Reviews
            </a>
            <a onClick={() => {scrollToSection("contact section")}} className="footer-links-group-link">
              Contact
            </a>
            <a onClick={() => {scrollToSection("contact section")}} className="footer-links-group-link">
              Location
            </a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Socials</h2>
            <a
              href="https://www.instagram.com/xingpremiumsalons?igsh=Z2p5MTBrNTVoNzNw"
              className="footer-links-group-link"
            >
              Instagram
            </a>
            <a href="https://www.facebook.com/people/XING-Salon-Nails-and-Tattoo/100089547421311/" className="footer-links-group-link">
              Facebook
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B917996666012&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0" className="footer-links-group-link">
              WhatsApp
            </a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Contact</h2>
            <a href="" className="footer-links-group-link">
              xing.sarjapura@gmail.com
            </a>
            <a href="" className="footer-links-group-link">
              +91 89-7000-7440
            </a>
          </div>
        </div>
      </section>
      <p className="copyright">© 2024 XING Salons. All rights reserved.</p>
    </>
  );
}

export default Footer;
