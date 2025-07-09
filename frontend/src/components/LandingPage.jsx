import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing">
      <div className="title-box">
        <img
          src="../images/lawncare-logo.png"
          alt="F & S Lawncare logo"
          className="logo"
        />
      </div>

      <div className="landing-box">
        <h2>About Us</h2>
        <div className="text-box">
          <p>
            At F&S Lawn Care, we’re a husband-and-wife team based in East
            Tennessee who take pride in providing reliable, high-quality lawn
            care with a personal touch. Whether it's mowing, cleanups, or
            seasonal services, we’re dedicated to keeping your yard looking its
            best — like it was our own. We believe great service starts with{" "}
            <b>
              clear communication, attention to detail, and showing up when we
              say we will.
            </b>
          </p>
          <p>
            When you hire F&S, you’re not just getting another crew — you're
            getting a team that genuinely cares about the work and the people we
            serve.
          </p>
          <p>
            <b>
              Let us take the hassle out of lawn maintenance so you can enjoy
              your yard, not worry about it.
            </b>
          </p>
        </div>
        <Link className="cta-button" to="/clientform">
          Get a Free Estimate
        </Link>
      </div>
    </div>
  );
}
