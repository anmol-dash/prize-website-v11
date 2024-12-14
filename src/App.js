import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import Application from './pages/Application';
import GetInvolved from './pages/GetInvolved';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/apply" element={<Application />} />
        <Route path="/get-involved" element={<GetInvolved />} />
      </Routes>
    </Router>
  );
}

export default App;