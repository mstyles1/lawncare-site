import React from 'react';
import { Routes, Route } from 'react-router-dom'; // no BrowserRouter here
import ClientForm from './components/ClientForm.jsx';
import LandingPage from './components/LandingPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/clientform" element={<ClientForm />} />
    </Routes>
  );
}



