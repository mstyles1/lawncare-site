// src/components/LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to LawnCare Co.</h1>
      <p>We keep your lawn fresh, clean, and green.</p>
      <Link to="/clientform">Get a Free Estimate</Link>
    </div>
  );
}

