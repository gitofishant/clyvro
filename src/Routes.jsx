import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import ShopifyExpertsLandingPage from './pages/ShopifyExpertsLanding/index';
import Contact from './pages/ShopifyExpertsLanding/Contact';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopifyExpertsLandingPage />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
};

export default AppRoutes;