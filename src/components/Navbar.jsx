import logo from '../assets/logo.png';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" srcset="" className="nav-logo" />
        <div className="nav-links">
          <a onClick={() => (scrollToSection("services-section"))} className="nav-links-link">
            Service
          </a>
          <a onClick={() => {scrollToSection("review-section")}} className="nav-links-link">
            Reviews
          </a>
          <a onClick={() => {scrollToSection("contact section")}} className="nav-links-link">
            Contact
          </a>
        </div>
        <div>
        <a href="#" className="nav-cta" onClick={() => scrollToSection('personalized-treatment')}>
          Avail this Offer Now
        </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
