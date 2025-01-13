import logo from '../assets/logo.png';
function Footer() {
  return (
    <>
      <section className="footer">
        <div>
          <img src={logo} alt="" className="footer-logo" />
          <p className="footer-address">
          1st floor, Number 267, SV Plaza, 60 Feet Rd, AECS Layout - A Block, AECS Layout, Marathahalli, Bengaluru, Karnataka 560037
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Quick Links</h2>
            <a href="" className="footer-links-group-link">
              Services
            </a>
            <a href="" className="footer-links-group-link">
              Reviews
            </a>
            <a href="" className="footer-links-group-link">
              Contact
            </a>
            <a href="" className="footer-links-group-link">
              Location
            </a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Socials</h2>
            <a href="" className="footer-links-group-link">
              Instagram
            </a>
            <a href="" className="footer-links-group-link">
              Fcaebook
            </a>
          </div>
          <div className="footer-links-group">
            <h2 className="footer-links-group-heading">Contact</h2>
            <a href="" className="footer-links-group-link">
              someone@something.com
            </a>
            <a href="" className="footer-links-group-link">
              +91 9000-2000-11
            </a>
          </div>
        </div>
      </section>
      <p className="copyright">© 2024 XING Salons. All rights reserved.</p>
    </>
  );
}

export default Footer;
