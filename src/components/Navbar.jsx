import logo from '../assets/logo.png';
import { useParams } from "react-router-dom";

function Navbar({id=0}) {
  // const { id } = useParams();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="nav">
        <img src={logo} alt="logo" srcSet="" className="nav-logo" />
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
          {id == 3 ? (
            <a href="#" className="nav-cta" style={{
              backgroundColor: "#f3f3f7",
              color: "#08080c",
              border: "2px solid black", // Black border added
              padding: "10px 20px", // Adjust padding for better appearance
              borderRadius: "10px", // Optional: rounded corners
              textDecoration: "none", // Ensures it looks like a button
              display: "inline-block", // Keeps button shape
            }} onClick={() => scrollToSection('personalized-treatment')}>
              Avail this Offer Now
            </a>
          ) : (
            <a href="#" className="nav-cta"  onClick={() => scrollToSection('personalized-treatment')}>
              Avail this Offer Now
            </a>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
