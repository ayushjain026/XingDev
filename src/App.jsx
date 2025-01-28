import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.sass";
import LandingPageOne from "./pages/LandingPageOne";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/1/" element={<LandingPageOne />} />
      </Routes>
    </Router>
  );
}

export default App;
