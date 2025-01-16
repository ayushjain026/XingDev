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
          <a href="#" className="nav-links-link">
            Service
          </a>
          <a href="#" className="nav-links-link">
            Reviews
          </a>
          <a href="#" className="nav-links-link">
            Offers
          </a>
          <a href="#" className="nav-links-link">
            Contact
          </a>
        </div>
        <div>
        <a href="#" className="nav-cta" onClick={() => scrollToSection('personalized-treatment')}>
          Book Your Appointment
        </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
