import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="title-box">
        <img src="../images/lawncare-logo.png" alt="F & S Lawncare logo" className="logo" />
      </div>

      <div className="landing-box">
        <h2>About Us</h2>
        <p>
          At F&S Lawn Care, we’re a husband-and-wife team based in East
          Tennessee who take pride in providing reliable, high-quality lawn care
          with a personal touch. Whether it's mowing, cleanups, or seasonal
          services, we’re dedicated to keeping your yard looking its best — like
          it was our own. We believe great service starts with clear
          communication, attention to detail, and showing up when we say we
          will. When you hire F&S, you’re not just getting another crew — you're
          getting a team that genuinely cares about the work and the people we
          serve. Let us take the hassle out of lawn maintenance so you can enjoy
          your yard, not worry about it.
        </p>
        <Link className="cta-button" to="/clientform">
          Get a Free Estimate
        </Link>
      </div>
    </div>
  );
}
