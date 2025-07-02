import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="landing-box">
      <h1>Welcome to LawnCare Co.</h1>
      <p>Family Owned and Operated since </p>
      <Link to="/clientform">Get a Free Estimate</Link>
    </div>
  );
}

