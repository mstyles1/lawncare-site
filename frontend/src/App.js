import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import ClientForm from "./components/ClientForm.jsx";
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/clientform">Contact</Link>
      </div>

      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/clientform" element={<ClientForm />} />
        </Routes>
      </main>
    </div>
  );
}

