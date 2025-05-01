import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.sass";
import LandingPageOne from "./pages/LandingPageOne.jsx";
import LandingPageTwo from "./pages/LandingPageTwo.jsx";
import LandingPageFive from "./pages/LandingPageFive.jsx";

function App() {
  const locationPropsMap = {
    "sarjapura": {
      title: "Sarjapura’s",
      email: "xing.sarjapura@gmail.com",
      location: "Xing Premium Unisex Salon, <br />Opposite Clult PlayOn Fitness, <br /> 71/1A, Samvit Greens, <br /> Sarjapur - Marathahalli Rd, <br /> opposite St. Peter's School, Kaikondrahalli, Bengaluru, Karnataka 560035",
      phoneNumber: "89700-07440",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9130591212506!2d77.6789381!3d12.913309199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae138d8bd2b55d%3A0x21f7759d5553d3fa!2sXing%20Premium%20Salon%2C%20Sarjapura%20Road!5e0!3m2!1sen!2sin!4v1745512905932!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=8970007440&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0",
      reviewUrl: "https://www.google.com/search?sca_esv=9ead58cad51db868&rlz=1C1RXQR_enIN978IN978&sxsrf=AHTn8zrS1m03MIRCxoF-1NdIfWTxwheeiw:1745642857127&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzU_o2yzDXVzVItzQ3cqepDiJC0YFcK_1ySYwPAM7NdBVRH0YCSA76Pft7OKsk1g2NlAgiDXZPI2hz-fs-w98HkYRf7jiy9-_acEbhFstqo6ymR7EZkl2Ud3Lleh8QNZfztZ3lEs%3D&q=Xing+Premium+Salon,+Sarjapura+Road+Reviews&sa=X&ved=2ahUKEwj9n52z8vSMAxUr-jgGHZB7FJYQ0bkNegQIQBAE&biw=2133&bih=1058&dpr=0.9#lrd=0x3bae138d8bd2b55d:0x21f7759d5553d3fa,3,,,,"
    },
    "aecs-layout": {
      title: "Whitefield's",
      email: "Xing.Aecs@gmail.com",
      location: "1st floor, Number 267, SV Plaza, <br />60 Feet Rd, AECS Layout - A Block, <br />AECS Layout, Marathahalli, Bengaluru, Karnataka 560037",
      phoneNumber: "79966-66012",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.621675304381!2d77.70912729999999!3d12.963452499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1309406c2c01%3A0x2eb6dc1b4d71e4b3!2sXing%20Premium%20Salon!5e1!3m2!1sen!2sin!4v1737650418906!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=7996666012&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0",
      reviewUrl: "https://www.google.com/search?sca_esv=9ead58cad51db868&rlz=1C1RXQR_enIN978IN978&sxsrf=AHTn8zoB9J6DG5WFfJt_w1XKfJSmDBN1EA:1745642949251&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzbKqNdo8sedij2iPRuTbLCzNYV8KFFX1J5CkyVuLSxMnGHfiuGyWQDbwddjBHmzAYO-2Z3jAvRdUAao7CrSoqLo02HhCBMFXb4HLOT_jbeKw8-67Bg%3D%3D&q=Xing+Premium+Salon+-+Brookfield+Reviews&sa=X&ved=2ahUKEwiohZTf8vSMAxXr8TgGHe2WHHsQ0bkNegQIIxAE&biw=2133&bih=1058&dpr=0.9#lrd=0x3bae1309406c2c01:0x2eb6dc1b4d71e4b3,3,,,,"
    },
    "hsr-layout": {
      title: "HSR Layout’s",
      email: "HSRXing@gmail.com",
      location: "Xing Premium Unisex Salon, <br /> 150/3, GSR Arcade, 9th Cross,<br /> 24th Main Rd,<br /> Bengaluru, Karnataka 560102",
      phoneNumber: "93808-12348",
      mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
      whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=9380812348&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0",
      reviewUrl: "https://www.google.com/search?sca_esv=9ead58cad51db868&rlz=1C1RXQR_enIN978IN978&sxsrf=AHTn8zpqPc_VhnWsIwBej6yVqGXBWdTyRg:1745642995117&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzTF9tZxuhIqUOiZ6Amz6Ya4Ivk6SqukUh91__OJgJ4OXiQQxgqrnmV5JWbQXmX21OxVKout4v39_5b1dSfthaFlGgdjCqGz7UEkAWMOAuduOX-92-0ws8OHBRZukZDb2oAIQCFo%3D&q=Xing+Premium+Unisex+Salon,+HSR+Layout+Reviews&sa=X&ved=2ahUKEwiNu4P18vSMAxUexTgGHTymOckQ0bkNegQIIRAE&biw=2133&bih=1058&dpr=0.9#lrd=0x3bae15f98d9ff67f:0xf60aff455de2d151,3,,,,"
    },
    // "Priyadarshini Layout": {
    //   title: "KR Puram’s",
    //   // email: "HSRXing@gmail.com",
    //   location: "Xing Premium Unisex Salon, <br /> 150/3, GSR Arcade, 9th Cross,<br /> 24th Main Rd,<br /> Bengaluru, Karnataka 560102",
    //   phoneNumber: "8970000135",
    //   mapLocation: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.2694467890137!2d77.6491593!3d12.9186477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f98d9ff67f%3A0xf60aff455de2d151!2sXing%20Premium%20Unisex%20Salon%2C%20HSR%20Layout!5e1!3m2!1sen!2sin!4v1737181873458!5m2!1sen!2sin",
    //   whatsAppRedirectionUrl: "https://api.whatsapp.com/send/?phone=9380812348&text=I+want+to+avail+hair+offer&type=phone_number&app_absent=0",
    //   reviewUrl: "https://www.google.com/search?sca_esv=4ef6d43eae67c29a&rlz=1C1RXQR_enIN978IN978&sxsrf=AHTn8zqJ6uZ1q_kpo0rb86Pm1KWWxckKxw:1745643711347&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzRyUnbbNicZHpclHOY6jRyPVLkWUYsS7tee4VHQJsVOwvhZ10njtLL5ggUt72URgtxv7i9Jb1pbEn6J-iz7tIQAIPp0h2GEwZ1rnZV_5vfVVkcw-MNIuzv4UvJg2pKqtd_8qL74%3D&q=Express+Cuts+Unisex+Salon+-+KR+Puram+Reviews&sa=X&ved=2ahUKEwjp2sbK9fSMAxVaSGwGHVMxFD0Q0bkNegQIKRAE&biw=2133&bih=1058&dpr=0.9#lrd=0x3bae11a98a8cd523:0x1086a50ccbea8223,3,,,,"
    // },
  };
  
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPageOne locationPropsMap={locationPropsMap} />} />
        <Route path="/hair-keratin" element={<LandingPageOne locationPropsMap={locationPropsMap} />} />
        <Route path="/hair-color" element={<LandingPageTwo locationPropsMap={locationPropsMap} />} />
        {/* <Route path="/5" element={<LandingPageOne locationPropsMap={locationPropsMap} />} /> */}
        <Route path="*" element={<LandingPageOne locationPropsMap={locationPropsMap} />} />
      </Routes>
    </Router>
  );
}

export default App;
