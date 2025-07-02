import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import ClientForm from "./components/ClientForm.jsx";

export default function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/aboutpage">About Us</Link>
        <Link to="/clientform">Free Estimate</Link>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutpage" element={<AboutPage />} />
          <Route path="/clientform" element={<ClientForm />} />
        </Routes>
      </main>
    </div>
  );
}

