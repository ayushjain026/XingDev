import { useState } from "react";
import { toast } from 'react-toastify';

function ContactForm({offers}) {
  const gSheetUrl =
    "https://script.google.com/macros/s/AKfycbycozoWrMd2qlqlBtmGddluTPmFDbMh3v14mn9BwNLXG8j9oKCBZs1Ykzfbluvn92W88Q/exec";
  const [userName, setUserName] = useState(null);
  const [userNumber, setUserNumber] = useState(null);
  const [selectedService, setSelectedService] = useState("Hair Keratin");

  const SubmitData = (e) => {
    e.preventDefault();
    toast("Wow so easy!")
    if (userName && userNumber && selectedService) {
      fetch(gSheetUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Name=${userName}&Email=${userNumber}&Service=${selectedService}&Time=${new Date().toISOString()}`,
      })
        .then((res) => res.text())
        .then((data) => {
          alert("We will contact you soon..!");
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
              value={userName}
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
                const value = e.target.value;
                // Allow only numbers and restrict to 10 digits
                if (value.length < 11 && /^[0-9]*$/.test(value)) {
                  setUserNumber(value);
                }
              }}
              value={userNumber}
              type="number"
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
              className="contact-form-dropdown contact-form-input-field"
            >{offers?.map((offer, index) => (
              <option key={index} value={offer} defaultChecked={index === 0}>
                {offer}
              </option>
            ))}
            </select>
          </div>
        </div>
        <button onClick={SubmitData} className="contact-cta">
          Avail this Offer Now
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
