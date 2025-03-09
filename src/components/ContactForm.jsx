import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ContactForm({ offers, pageName="" }) {
  const gSheetUrl =
    "https://script.google.com/macros/s/AKfycbycozoWrMd2qlqlBtmGddluTPmFDbMh3v14mn9BwNLXG8j9oKCBZs1Ykzfbluvn92W88Q/exec";

  const [userName, setUserName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedService, setSelectedService] = useState(
    offers?.[0] || "Hair Keratin"
  );

  const [errors, setErrors] = useState({
    userName: "",
    userNumber: "",
    selectedService: "",
  });

  useEffect(() => {
    setErrors({
      userName: "",
      userNumber: "",
      selectedService: "",
    });
    setSuccessMessage("");
  }, []);

  const validateForm = () => {
    let isValid = true;
    let newErrors = { userName: "", userNumber: "", selectedService: "" };

    if (!userName.trim()) {
      newErrors.userName = "Name is required.";
      isValid = false;
    }
    if (!userNumber.trim()) {
      newErrors.userNumber = "Phone number is required.";
      isValid = false;
    } else if (!/^[6-9][0-9]{9}$/.test(userNumber)) {
      newErrors.userNumber = "Enter a valid 10-digit Indian phone number.";
      isValid = false;
    }
    if (!selectedService) {
      newErrors.selectedService = "Please select a service.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const SubmitData = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    fetch(gSheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `Name=${userName}&Phone=${userNumber}&Service=${selectedService}&Time=${new Date().toISOString()}`,
    })
      .then((res) => res.text())
      .then(() => {
        toast.success("We will contact you soon!");
        setUserName("");
        setUserNumber("");
        setSelectedService(offers?.[0] || "Hair Keratin");
        setErrors({ userName: "", userNumber: "", selectedService: "" });
        setSuccessMessage("Thank you soo much, we will contact you soon!");
        // Remove the success message after 10 seconds
        
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="personalized-treatment" className="contact-form">
      <h4 className="contact-form-heading">{pageName}</h4>
      <p className="contact-form-subheading">
        Our expert stylists are dedicated to restoring your hair’s vitality,
        ensuring you leave our salon feeling radiant and confident.
      </p>

      {/* Success Message */}
      {successMessage && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "20px 40px",
            borderRadius: "10px",
            fontSize: "1.5rem",
            textAlign: "center",
            zIndex: "9999",
          }}
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={SubmitData}>
        <div className="contact-form-input-group">
          <p className="contact-form-input-label">Your Name</p>
          <input
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            className="contact-form-input-field"
            style={{ width: "100%" }}
          />
          {errors.userName && <p className="error-text">{errors.userName}</p>}
        </div>

        <div className="contact-form-input-group">
          <p className="contact-form-input-label">Phone Number</p>
          <input
            required
            value={userNumber}
            onChange={(e) => setUserNumber(e.target.value)}
            type="tel"
            pattern="[6-9]{1}[0-9]{9}"
            maxLength="10"
            className="contact-form-input-field"
            style={{ width: "100%" }}
          />
          {errors.userNumber && (
            <p className="error-text">{errors.userNumber}</p>
          )}
        </div>

        <div className="contact-form-input-group">
          <p className="contact-form-input-label">Select your Service</p>
          <select
            required
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="contact-form-dropdown contact-form-input-field"
            style={{
              width: "100%",
              padding: "1rem 1.2rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background: "#fff",
              outline: "none",
            }}
          >
            {offers?.map((offer, index) => (
              <option key={index} value={offer}>
                {offer}
              </option>
            ))}
          </select>
          {errors.selectedService && (
            <p className="error-text">{errors.selectedService}</p>
          )}
        </div>


        {offers?.[0] == 'Tattoos' ? (
          <button
            href="#"
            className="hero-cta"
            // onClick={(e) => {
            //   e.preventDefault();
            //   scrollToSection("personalized-treatment");
            // }}
            style={{
              backgroundColor: "#f3f3f7",
              color: "#08080c",
              border: "2px solid black", // Black border added
              padding: "10px 20px", // Adjust padding for better appearance
              borderRadius: "10px", // Optional: rounded corners
              textDecoration: "none", // Ensures it looks like a button
              display: "inline-block", // Keeps button shape
            }}
          >
            Avail this Offer Now
          </button>
        ) : (
          <button type="submit" className="contact-cta">
            Avail this Offer Now
          </button>
        )}


        {/* <button type="submit" className="contact-cta">
          Avail this Offer Now
        </button> */}
      </form>
    </div>
  );
}

export default ContactForm;
