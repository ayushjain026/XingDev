import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.sass";
import LandingPageOne from "./pages/LandingPageOne.jsx";
import LandingPageTwo from "./pages/LandingPageTwo.jsx";

function App() {
  const locationPropsMap = {
    "sarjapura": {
      title: "Sarjapura’s",
      email: "xing.sarjapura@gmail.com",
      location: "Xing Premium Unisex Salon, <br />Opposite Clult PlayOn Fitness, <br /> 71/1A, Samvit Greens, <br /> Sarjapur - Marathahalli Rd, <br /> opposite St. Peter's School, Kaikondrahalli, Bengaluru, Karnataka 560035",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=8970007440&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
    "aecs-layout": {
      title: "Whitefiled’s",
      email: "Xing.Aecs@gmail.com",
      location: "1st floor, Number 267, SV Plaza, <br />60 Feet Rd, AECS Layout - A Block, <br />AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.621675304381!2d77.70912729999999!3d12.963452499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1309406c2c01%3A0x2eb6dc1b4d71e4b3!2sXing%20Premium%20Salon!5e1!3m2!1sen!2sin!4v1737650418906!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=7996666012&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
    "hsr-layout": {
      title: "HSR Layout’s",
      email: "HSRXing@gmail.com",
      location: "Xing Premium Unisex Salon, <br /> 150/3, GSR Arcade, 9th Cross,<br /> 24th Main Rd,<br /> Bengaluru, Karnataka 560102",
      phoneNumber: "93808-12348",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=9380812348&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0"
    },
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageOne locationPropsMap={locationPropsMap} />} />
        <Route path="/1" element={<LandingPageOne locationPropsMap={locationPropsMap} />} />
        <Route path="/2" element={<LandingPageTwo locationPropsMap={locationPropsMap} />} />
      </Routes>
    </Router>
  );
}

export default App;
