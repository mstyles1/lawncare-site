import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import ClientForm from "./components/ClientForm.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <ScrollToTop />

      <div className="floating-tab">
        <Link to="/">🏠 Home</Link>
        <span> | </span>
        <Link to="/clientform">💬 Get Estimate</Link>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/clientform" element={<ClientForm />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} F & S Lawn Care. All rights reserved.</p>
      </footer>
    </div>
  );
}
