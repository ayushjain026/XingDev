import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm() {
  const gSheetUrl =
    "https://script.google.com/macros/s/AKfycbycozoWrMd2qlqlBtmGddluTPmFDbMh3v14mn9BwNLXG8j9oKCBZs1Ykzfbluvn92W88Q/exec";
  const [userName, setUserName] = useState(null);
  const [userNumber, setUserNumber] = useState(null);
  const [selectedService, setSelectedService] = useState("Hair Keratin");

  const SubmitData = (e) => {
    if (userName && userNumber && selectedService) {
      e.preventDefault();
      fetch(gSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${userName}&Email=${userNumber}&Service=${selectedService}&Time=${new Date().toISOString()}`,
      })
        .then((res) => res.text())
        .then((data) => {
          alert(data);
          toast.success("We will contact you soon..!");
        })
        .catch((error) => console.log(error));

      setUserName(null);
      setUserNumber(null);
    } else {
      toast.error("Please fill all required fields");
    }
  };

  return (
    <div id="personalized-treatment" className="contact-form">
      <h4 className="contact-form-heading">Get Personalized hair Treatement</h4>
      <p className="contact-form-subheading">
        Our expert stylists are dedicated to restoring your hair’s vitality,
        ensuring you leave our salon feeling radiant and confident.
      </p>
      <form>
        <div>
          <div className="contact-form-input-group">
            <p className="contact-form-input-lable">Your Name</p>
            <input
              required
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              className="contact-form-input-field"
            />
          </div>
          <div>
            <p className="contact-form-input-lable">Phone Number</p>
            <input
              required
              onChange={(e) => {
                setUserNumber(e.target.value);
              }}
              type="number"
              maxLength={10}
              style={{ width: "100%" }}
              className="contact-form-input-field"
            />
          </div>
          <div className="contact-form-input-group">
            <br />
            <p className="contact-form-input-lable">Select your Service</p>
            <select
              required
              onChange={(e) => {
                setSelectedService(e.target.value);
              }}
              style={{
                width: "100%",
                padding: "1rem 1.2rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
                background: "#fff",
                outline: "none",
              }}
              className="contact-form-dropdown"
            >
              <option defaultChecked value="Hair Keratin">
                Hair Keratin
              </option>
              <option value="Nanoplastia">Nanoplastia</option>
              <option value="others">others</option>
            </select>
          </div>
        </div>
        <button onSubmit={SubmitData} className="contact-cta">
          Book Your Appointment
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
