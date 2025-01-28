import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/main.sass";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/1/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
