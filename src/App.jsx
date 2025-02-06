import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.sass";
import LandingPageOne from "./pages/LandingPageOne.jsx";
import LandingPageTwo from "./pages/LandingPageTwo.jsx";

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="" element={<LandingPageOne />} />
        <Route path="/1" element={<LandingPageOne />} />
        <Route path="/2/" element={<LandingPageTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
